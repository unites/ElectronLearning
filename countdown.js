module.exports = function countdown() {
    let count = 10

    let timer = setInterval(_ => {
        count--
        console.log("countdown", count)
        if (count == 0)
            clearInterval(timer)
    }, 1000)
}