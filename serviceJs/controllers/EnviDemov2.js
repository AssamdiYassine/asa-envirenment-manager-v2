const urlStatusCode = require("url-status-code");
module.exports  = servEnvi = (socket,envi) => {
 
try {
    setInterval(async () => {
      await urlStatusCode(`http://${envi.ip_play}:${envi.port_play}`, (el) => {
        if (el) {
          socket.emit(`${envi.accessPLay}`, "NotActive");
        } else {
          socket.emit(`${envi.accessPLay}`, "active");
        }
      });
    }, 400);
  } catch (error) {
    console.error(error);
  } 
 // karaf
try {
    setInterval(async () => {
      await urlStatusCode(`http://${envi.ip_karaf}:${envi.port_karaf}`, (el) => {
        if (el) {
          socket.emit(`${envi.accessKaraf}`, "NotActive");
        } else {
          socket.emit(`${envi.accessKaraf}`, "active");
        }
      });
    }, 400);
  } catch (error) {
    console.error(error);
  } 

}