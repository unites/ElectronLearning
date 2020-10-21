const electron = require('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

app.on('ready', _ => {
    mainWindow = new BrowserWindow({
        height: 400,
        weidth: 400,
        webPreferences: {
            nodeIntegration: true
        }
    })
    console.log('file://' + __dirname + '/index.html')

    mainWindow.loadURL('file://' + __dirname + '/index.html')

    mainWindow.on('closed', _ => {
        console.log('Closed!')
        mainWindow = null
    })
})