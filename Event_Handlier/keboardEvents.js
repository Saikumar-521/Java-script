document.getElementById('inputBox').addEventListener('keydown', (a) => {
    console.log('key is down' + a.key)
})

document.getElementById('inputKeypress').addEventListener('keypress', (a) => {
    console.log('key is down' + a.key)
})