document.getElementById('inputBox').addEventListener('keydown', (a) => {
    console.log('key is down' + a.key)
})

document.getElementById('inputKeypress').addEventListener('keypress', (a) => {
    console.log('key is down' + a.key)
})
// function keyup(a) {
//     console.log('key is up' + a.key)
// }
document.getElementById('keyup').addEventListener('keyup', (a) => {
    console.log(`key is up ${a.key}`);
})