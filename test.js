// > getext("test.jpg")
// 'jpg'
// > getext("test.old.jpg")
// 'jpg'
function getext(filename) {
    let res = '';
    for (let i = filename.length - 1; i > 0 && filename[i] !== '.'; i--) {
        res += filename[i];
    }
    return reverse(res);
}

// > reverse('gpj')
// 'jpg'
function reverse(str) {
    return str.split('').reverse().join('');
}

console.log(getext("test.jpg"))
