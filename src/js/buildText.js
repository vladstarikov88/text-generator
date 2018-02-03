function buildText() {
    let text = new Text()
    text.arrText = authors[authorsKey].arrText;

    let newText = '';
    let textLenYouWant = 600;
    let gram = 8

    for(let n = 1; n <= gram; n++) {
        text.findnGrams(n, true);

        let obj = text.nGrams;
        let random = Math.random(),
            sum = 0,
            maxRand = 0;

        for(let key in obj) {
            if(key.substr(0, n).indexOf(newText.slice(-n)) == 0 ){
                maxRand +=obj[key]
            }
        }

        maxRand = getRandom(0, maxRand);

        for(let key in obj) {
            if(n == 1) {
                sum += obj[key];
                if(sum > maxRand) {
                    newText = key
                    break;
                }
            } else {
                if(key.substr(0, n).indexOf(newText.slice(-n)) == 0 ){
                    sum += obj[key];
                    if(sum > maxRand) {
                        newText += key.slice(-1)
                        break;
                    }
                }
            }
        }
        console.log(newText)
    }

    let ngram = text.findnGrams(gram);
    var prev = '';
    for(let u = gram - 1; u < textLenYouWant; u++){
        var m = 0;
        let sum = 0,
            maxRand = 0;

        for(let key in ngram) {
            if(key.indexOf(newText.slice(-gram)) == 0) {
                maxRand += ngram[key]
            }
        }

        maxRand = getRandomFull(0, maxRand);

        for(let key in ngram) {
            if(newText.slice(-gram+1) == key.substr(0, gram-1)) {
                if(sum <= maxRand) {
                    sum += ngram[key];
                }
                if(sum > maxRand) {
                    newText += key.slice(-1);
                    break;
                }
                if(newText == prev) {
                    m++;
                    if (m > 5) {
                        console.log(m)
                        newText += key.slice(-1);
                        break;
                    }
                }
            }
        }
        prev = newText;
        console.log(newText)
    }

    newText = newText.split('_').join(' ')
    console.log(newText)

    setToPage(newText, gram)
}