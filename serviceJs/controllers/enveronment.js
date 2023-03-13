const fs = require("fs");
const pm2 = require('pm2');
var path = require("path");
const toAbsoluteUrl = (pathname) => process.env.PUBLIC_URL + pathname;

// const { spawn } = require("child_process");

const crypto = require("crypto");

function buildPath() {
  return path.join(process.cwd(), "dataJson", "environment.json");
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

// const filePath = buildPath();
// fs.watch(filePath, async (eventType, filename) => {
//   if (eventType === 'change') {
//     console.log(`${filename} has been modified. Restarting service...`);

//     // Arrêtez le processus Node.js en cours d'exécution
//     pm2.restart('npm', (err) => {
//       if (err) {
//         console.error(`Error restarting service: ${err}`);
//       } else {
//         console.log('Service restarted successfully.');
//       }
//     });
//   }
// });

module.exports = {
  environment: async (req, res) => {
    const filePath = buildPath();
    const AllData = extractData(filePath);

    let dossiersEnvi = [];
    AllData.map((el) => {
      dossiersEnvi.push({ id: el.id, name: el.name });
    });
    if (!dossiersEnvi) return res.status(404).send("Liste Vide !!!");
    res.status(200).send({ dossiersEnvi });
  },

  developement: async (req, res) => {
    const id = req.params.id;
    if (!id) {
      return res.send("not find ");
    }

    const filePath = buildPath();
    const AllData = extractData(filePath);
    let dossiersDevelopement = [];
    let Developement = [];
    AllData.map((el) => {
      if (el.id === id) {
        dossiersDevelopement.push(el.development);
      }
    });
    dossiersDevelopement.map((el) => {
      el.map((ele) => {
        Developement.push({ id: ele.id, name: ele.name, info: ele.info });
      });
    });
    if (dossiersDevelopement.length === 0) {
      return res.send("not find ");
    }
    res.status(200).send(Developement);
    if (!dossiersDevelopement) return res.status(404).send("Liste Vide !!!");
  },

  test: async (req, res) => {
    const id = req.params.id;
    if (!id) {
      return res.send("not find ");
    }

    const filePath = buildPath();
    const AllData = extractData(filePath);
    let dossiersTest = [];
    let Test = [];
    AllData.map((el) => {
      if (el.id === id) {
        dossiersTest.push(el.test);
      }
    });
    dossiersTest.map((el) => {
      el.map((ele) => {
        Test.push({ id: ele.id, name: ele.name, info: ele.info });
      });
    });
    if (Test.length === 0) {
      return res.send("not find ");
    }
    res.status(200).send(Test);
    // const envi = await dossiers.find((ele) => ele.id.toString() === '1');
    if (!Test) return res.status(404).send("Liste Vide !!!");
  },

  performance: async (req, res) => {
    const id = req.params.id;
    if (!id) {
      return res.send("not find ");
    }

    const filePath = buildPath();
    const AllData = extractData(filePath);
    let dossiersPerformance = [];
    let performance = [];
    AllData.map((el) => {
      if (el.id === id) {
        dossiersPerformance.push(el.performance);
      }
    });
    dossiersPerformance.map((el) => {
      el.map((ele) => {
        performance.push({ id: ele.id, name: ele.name, info: ele.info });
      });
    });
    if (performance.length === 0) {
      return res.send("not find ");
    }
    res.status(200).send(performance);
    // const envi = await dossiers.find((ele) => ele.id.toString() === '1');
    if (!performance) return res.status(404).send("Liste Vide !!!");
  },

  demo: async (req, res) => {
    const id = req.params.id;

    if (!id) {
      return res.send("not find ");
    }

    const filePath = buildPath();
    const AllData = extractData(filePath);
    let dossiersDemo = [];

    AllData.map((el) => {
      if (el.id === id) {
        dossiersDemo.push(el.demo);
      }
    });

    if (dossiersDemo.length === 0) {
      return res.send("not find ");
    }
    // console.log(dossiersDemo);
    res.status(200).send(dossiersDemo[0]);

    if (!dossiersDemo) return res.status(404).send("Liste Vide !!!");
  },

  IdentityEnvironment: async (req, res, next) => {
    const { method } = req;
    const filePath = buildPath();
    const AllData = extractData(filePath);
    const newId = crypto.randomBytes(16).toString("hex");

    // => f9b327e70bbcf42494ccb28b2d98e00e

    if (method === "POST") {
      const {
        _id,
        _name,
        _ip_play,
        _port_play,
        _ip_karaf,
        _port_karaf,
        url,
        width,
      } = req.body;

      const arr = url.split(".");
      const ext = arr[arr.length - 1];

      const newDemo = {
        id: newId,
        name: _name,
        logo: {
          url: url,
          type: ext,
          width: width,
        },
        ip_play: _ip_play,
        port_play: _port_play,
        ip_karaf: _ip_karaf,
        port_karaf: _port_karaf,
        accessPLay: `access${_name}Play`,
        accessKaraf: `access${_name}karaf`,
      };
      const newAllEvents = AllData.map((ev) => {
        if (ev.id === _id) {
          return {
            ...ev,
            demo: [...ev.demo, newDemo],
          };
        }
        return ev;
      });

      fs.writeFileSync(filePath, JSON.stringify(newAllEvents));
    }
    res.status(200).json({ process: "done" });
  },

  upload: async (req, res, next) => {
    try {
      let file = req.files.file;
      if (!Array.isArray(file)) {
        file = [file];
      }
      file.map((element) => {
        element.mv(toAbsoluteUrl(`/img/logos/${element.name}`), (err) => {
          console.log(toAbsoluteUrl);
          if (err) {
            console.error(err);
            return res.status(500).send(err);
          }
          res.status(200).send({ URL: `/img/logos/${element.name}` });
        });
      });
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res, next) => { },
  deleteDemo: async (req, res, next) => {
    const filePath = buildPath();
    const AllData = extractData(filePath);
    const { id, idDemo } = req.body.param;
    const deleteData = AllData.map((ev) => {
      if (ev.id === id) {

        ev.demo.map((el) => {
          if (el.id === idDemo) {

            fs.unlink(toAbsoluteUrl(el.logo.url), (err) => {
              if (err) {
                console.error(err);
                return;
              }

              console.log(`${toAbsoluteUrl(el.logo.url)} was deleted`);
            });
            return;
          }
        })
        const index = ev.demo.findIndex((user) => user.id === idDemo);
        // If the user is found, delete it
        if (index !== -1) {
          ev.demo.splice(index, 1);
        }

        return {
          ...ev,
          demo: [...ev.demo],
        };

      }
      return ev;
    });

    fs.writeFileSync(filePath, JSON.stringify(deleteData));

    res.status(200).json({ process: "done" });
  },
  deleteDeve: async (req, res, next) => {
    const filePath = buildPath();
    const AllData = extractData(filePath);
    const { id, idDeve } = req.body.param;
    const deleteData = AllData.map((ev) => {
      if (ev.id === id) {

        ev.development.map((el) => {
          if (el.id === idDeve) {

            fs.unlink(toAbsoluteUrl(el.logo.url), (err) => {
              if (err) {
                console.error(err);
                return;
              }

              console.log(`${toAbsoluteUrl(el.logo.url)} was deleted`);
            });
            return;
          }
        })
        const index = ev.development.findIndex((user) => user.id === idDeve);
        // If the user is found, delete it
        if (index !== -1) {
          ev.development.splice(index, 1);
        }

        return {
          ...ev,
          development: [...ev.development],
        };

      }
      return ev;
    });

    fs.writeFileSync(filePath, JSON.stringify(deleteData));

    res.status(200).json({ process: "done" });
  },

  addDeve: async (req, res, next) => {
    const newDev = {
      "id": 1,
      "name": "dev 1.1",
      "info": [
        {
          "id": 1,
          "name": "karaf",
          "version": "5.9",
          "link": "https://www.google.com/?hl=fr"
        }
      ]
    }

  },


  deleteTest: async (req, res, next) => {
    const filePath = buildPath();
    const AllData = extractData(filePath);
    const { id, idTest } = req.body.param;
    const deleteData = AllData.map((ev) => {
      if (ev.id === id) {
        idDemo
        ev.test.map((el) => {
          if (el.id === idTest) {

            fs.unlink(toAbsoluteUrl(el.logo.url), (err) => {
              if (err) {
                console.error(err);
                return;
              }
              development
              console.log(`${toAbsoluteUrl(el.logo.url)} was deleted`);
            });
            return;
          }
        })
        const index = ev.test.findIndex((user) => user.id === idTest);
        // If the user is found, delete it
        if (index !== -1) {
          ev.test.splice(index, 1);
        }

        return {
          ...ev,
          test: [...ev.test],
        };

      }
      return ev;
    });

    fs.writeFileSync(filePath, JSON.stringify(deleteData));

    res.status(200).json({ process: "done" });
  },
  addTest: async (req, res, next) => {

  },
  deletePerf: async (req, res, next) => {
    const filePath = buildPath();
    const AllData = extractData(filePath);
    const { id, idPerf } = req.body.param;
    const deleteData = AllData.map((ev) => {
      if (ev.id === id) {

        ev.performance.map((el) => {
          if (el.id === idPerf) {

            fs.unlink(toAbsoluteUrl(el.logo.url), (err) => {
              if (err) {
                console.error(err);
                return;
              }

              console.log(`${toAbsoluteUrl(el.logo.url)} was deleted`);
            });
            return;
          }
        })
        const index = ev.performance.findIndex((user) => user.id === idPerf);
        // If the user is found, delete it
        if (index !== -1) {
          ev.performance.splice(index, 1);
        }

        return {
          ...ev,
          performance: [...ev.performance],
        };

      }
      return ev;
    }); _name,


      fs.writeFileSync(filePath, JSON.stringify(deleteData));
    res.status(200).json({ process: "done" });
  },
  addPerf: async (req, res, next) => {

  },
  editDemo: async (req, res, next) => {
    const { companyId, _id, _name, _ip_play, _port_play, _ip_karaf, _port_karaf } = req.body

    const filePath = buildPath();
    const AllData = extractData(filePath);
    const update = AllData.map((el) => {
      if (el.id === companyId) {

        let user = el.demo.find(u => u.id === _id);
        user.name = _name;
        user.ip_play = _ip_play;
        user.port_play = _port_play
        user.ip_karaf = _ip_karaf;
        user.port_karaf = _port_karaf;
        user.accessPLay = `access${_name}Play`;
        user.accessKaraf = `access${_name}karaf`;
        return {
          ...el,
          demo: [...el.demo],
        };
      }
      return el;
    })
    fs.writeFileSync(filePath, JSON.stringify(update));

    res.status(200).json({ process: "done" });
  }
};


const EnviDemo = () => {
  const filePath = buildPath();
  const AllData = extractData(filePath);
  return AllData[0].demo;
};

module.exports.EnviDemo = EnviDemo;
