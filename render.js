console.log("It rendered!")

const electron = require('electron')
const ipc = electron.ipcRenderer

// had to place doument inside onload because this was running before the DOM loaded.
window.onload=function(){ 
    document.getElementById('start').addEventListener('click', _ => {
        console.log('start clicked!') // this would send the event to the render module which only shows up onthe windwos dev tools
        ipc.send('countdown-start')  // This sends to the main module, showing up on the CLI.
    })
}


ipc.on('countdown', (evt, count) => {
    document.getElementById('count').innerHTML = count
})