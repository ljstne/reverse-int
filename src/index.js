module.exports = function reverse (n) {
    let reversed='';
    n = String(n)
    for (let i=n.length-1;i>-1;i--) {
      reversed += n[i];
    }
    return parseInt(reversed)
}
