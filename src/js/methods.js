const abcLen = 32;
const letterA = 1072

function frequency(arr) {
    var letters = arr.join('').substr(0)
    var frequency = {};
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
        frequency[key] = Math.round( (frequency[key] / letters.length)*100000 ) / 100000
    }
    return frequency;
}

function findBigrams(arrText, k){
    var str = arrText.join('')

    var bigrByCode = [];
    for(var i = 0; i<abcLen; i++){
        bigrByCode[i] = [];
        for(var j=0; j<abcLen; j++){
           bigrByCode[i][j] = 0;
        }
    }

    var arr = str.split('');
    for (var i = 0; i < arr.length-1; i++) {
        var a = arr[i].charCodeAt();
        var b = arr[i+1].charCodeAt();
        if(a>=letterA && a<letterA+abcLen &&
           b>=letterA && b<letterA+abcLen){
            bigrByCode[a-letterA][b-letterA] += 1;
        }
    }
    return bigrByCode;
};

/* замутить сюда частоты биграмм */
function metricsFind(famousBigr, anonBigr) {
    var sum = 0;

    for(var i = 0; i < 32; i++) {
        for(var j = 0; j < 32; j++) {
            sum += Math.abs(famousBigr[i][j]/famous[famousKey].arrText.length  - anonBigr[i][j]/anon.length);
        }
    }
    return sum;
}


/* меняем местами элементы на позициях a и b */
function stir(key, a, b) {
    var stirKey = key.slice('').split('')
    var es = stirKey[a];

    stirKey[a] = stirKey[b]
    stirKey[b] = es

    stirKey = stirKey.join('')

    console.log(stirKey)
    return stirKey
}

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

function log(quan) {
    console.log(quan)
}