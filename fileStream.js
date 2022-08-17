var fs = require('fs')

fs.readFile("dosya.txt", "utf8", function (error, data) {
    if (error) {
        throw error;
    }
    console.log(data);

});


fs.writeFile("dosya2.txt", "Ali K..", function (hata) {
    if (hata) {
        throw hata;
    }
    console.log("Written");

});

fs.unlink("dosya2.txt", function (hata) {
    if (hata) {
        throw hata;
    }
    console.log("Erased");

});



