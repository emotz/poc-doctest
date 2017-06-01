const path = require('path');

// > getext("test.jpg")
// 'jpg'
// > getext("test.old.jpg")
// 'jpg'
// > getext("test.jped")
// 'jped'
function getext(filename) {
    return path.extname(filename).slice(1);
}

// > reverse('gpj')
// 'jpg'
function reverse(str) {
    return str.split('').reverse().join('');
}
