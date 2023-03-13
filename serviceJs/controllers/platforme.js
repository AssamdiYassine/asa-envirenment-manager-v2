const fs = require("fs");
var path = require("path");
const crypto = require("crypto");

function buildPath() {
  return path.join(process.cwd(), "dataJson", "environment.json");
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

module.exports = {
  All: async (req, res) => {
    const filePath = buildPath();
    const AllData = extractData(filePath);
    const id = req.params.id;

    if (!id) {
      return res.send("not find ");
    }
    let platforme = [];
    AllData.map((ev) => {
      if (ev.id === id) {
        ev.platforme.map((el) => {
          platforme.push(el);
        });
      }
    });

    res.status(200).send({ platforme: platforme });
    if (!platforme) return res.status(404).send("Liste Vide !!!");
  },
  Add: async (req, res) => {
    const { method } = req;
    const filePath = buildPath();
    const AllData = extractData(filePath);
    const newId = crypto.randomBytes(16).toString("hex");

    // => f9b327e70bbcf42494ccb28b2d98e00e

    if (method === "POST") {
      const { _id, _name, _link } = req.body.PARAM;
 
      const newplatforme = {
        id: newId,
        name: _name,
        link: _link,
      };

      const newAllEvents = AllData.map((ev) => {
        if (ev.id === _id) {
          return {
            ...ev,
            platforme: [...ev.platforme, newplatforme],
          };
        }
        return ev;
      });

      fs.writeFileSync(filePath, JSON.stringify(newAllEvents));
    }
    res.status(200).json({ process: "done" });
  },
  delete: async (req, res, next) => {
    const filePath = buildPath();
    const AllData = extractData(filePath);
    const { id, idplat } = req.body.PARAM;
    const deleteData = AllData.map((ev) => {
      if (ev.id === id) {
        const index = ev.platforme.findIndex((user) => user.id === idplat);
      
        // If the user is found, delete it
        if (index !== -1) {
          ev.platforme.splice(index, 1);
        }

        return {
          ...ev,
          platforme: [...ev.platforme],
        };
      }
      return ev;
    });

    fs.writeFileSync(filePath, JSON.stringify(deleteData));

    res.status(200).json({ process: "done" });
  },
};
