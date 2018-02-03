

function coincidenceIndex(anon) {
    var letters = anon.join('').substr(0)
    var frequency = {};
    var count = {}
    for(var i = 0; i < letters.length; i++) {

        var fr = letters[i].toLowerCase();
        if(fr in frequency) {
            frequency[fr]++
        } else {
            frequency[fr] = 0;
            frequency[fr]++
        }
    }
    for (var key in frequency) {
        /*console.log(frequency[key] + ': ' + key)*/
        count[key] = frequency[key]
        frequency[key] = Math.round( (frequency[key] / letters.length)*100000 ) / 100000
    }

    var sum = 0;
    for(var key in count) {
        sum += count[key]*(count[key] -1)/ letters.length / (letters.length -1)
    }

    sum = Math.round(sum *1000)/1000
    //console.log(sum);

    return sum
}

function setToPage(text, gram) {
    document.getElementById('header').innerHTML += " при n = " + gram
    document.getElementById('result').innerHTML  = text
}

function getRandom(min, max){
    return Math.random() * (max - min) + min;
}

function getRandomFull(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function compare(a, b){
    return b - a;
}

function compareRandom(a, b) {
    return Math.random() - 0.5;
}

function getClass(obj) {
    return ({}.toString.call(obj).slice(8, -1))
}

function allConcidence(text, letter) {
    var position = 0,
        positionArray = [];

    while(position <= text.length) {
        var found = text.indexOf(letter, position);

        if (found == -1)  break;
        positionArray.push(found);
        position = found + 1;

    }
    return positionArray;
}

function find(array, value) {

  for (var i = 0; i < array.length; i++) {
    if (array[i] == value) return i;
  }

  return -1;
}


function strCompare(str1, str2) {
    var fs = '' + str1.localeCompare(str2);
    var x = '';

    switch(fs) {
        case '-1':
            x = 'меньше';
            break;
        case '1':
            x = 'больше';
            break;
        case '0':
            x = 'равно';
            break;
    }
    return x;
}