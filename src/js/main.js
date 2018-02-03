"use strict";

if (window.File && window.FileReader && window.FileList && window.Blob) {}
else { alert('The File APIs are not fully supported in this browser.') }

var authors = {},
    authorsKey
document.getElementById('text').addEventListener('change', selectBigText);
function selectBigText(evt) {
    var files = evt.target.files;
    var reader = new FileReader();
    reader.onload = (function(theFile) {
        return function(e) {
            var arrText = e.target.result.split('\n').join(' ').split(' ');
            var text = new Text(arrText);
            text.delSymbols();
            text.toStr();

            authors[theFile.name] = text;
            authorsKey = theFile.name;
            console.log(theFile.name)
            console.log("authors[authorsKey]")

            buildText();
        };
    })(files[0]);
    reader.readAsText(files[0]);
}