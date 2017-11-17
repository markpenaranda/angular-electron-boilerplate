const { app, BrowserWindow } = require ('electron')


function createMainWindow() {
  var win= new BrowserWindow({
    width: 800,
    heigh: 600,
    background: "#fff"
  });

  
  win.loadURL(`file://${__dirname}/dist/index.html`);
}

app.on('ready', createMainWindow);