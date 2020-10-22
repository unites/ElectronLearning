console.log("It rendered!")


// had to place doument inside onload because this was running before the DOM loaded.
window.onload=function(){ 
    document.getElementById('start').addEventListener('click', _ => {
        console.log('start clicked!')
    })
}
