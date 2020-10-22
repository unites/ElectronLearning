const electron = require('electron')

const countdown = require('./countdown.js')

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const ipc = electron.ipcMain

let mainWindow

app.on('ready', _ => {
    mainWindow = new BrowserWindow({
        height: 800,
        width: 1200,
        webPreferences: {
            nodeIntegration: true // required for require to work
        }
    })

    mainWindow.webContents.openDevTools() // Open Dev tools by default

    // console.log('file://' + __dirname + '/index.html')
    mainWindow.loadURL('file://' + __dirname + '/index.html') // Necessary to properly use local paths

    // countdown()

    mainWindow.on('closed', _ => {
        console.log('Exited App!')
        mainWindow = null
    })
})

ipc.on('countdown-start', _ =>{
    console.log('Button sent to Main.')
    countdown(count => {
        mainWindow.webContents.send('countdown',count)
    })
})