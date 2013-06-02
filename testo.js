/// BROKEN OUT FUNCTIONS


// This function replaces a character if a match is found

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}


function createTargetString(){

        targetString="";

        for ( var n=0; n < targetLength; n++ ) {

            var rnum = Math.floor(Math.random() * possibleCharacters.length);
            targetString += possibleCharacters.substring(rnum,rnum+1);

            }
            return targetString;
}


function createRandomString(){

        randomString = "";


        for ( var i=0; i < targetString.length; i++ ) {

            var rnum = Math.floor(Math.random() * possibleCharacters.length);
            randomString += possibleCharacters.substring(rnum,rnum+1);

            }

        return randomString;

}


function createProgressString(){
    var progressString = "";

        for (var c=0; c < targetString.length; c++) {
            progressString = progressString + "*";
        }
    return progressString;
}


function loopCheckReplace(){

    for (var p = 0; p < targetString.length; p++) {

    var first_char = randomString.slice(p, p+1);

    var second_char = targetString.slice(p, p+1);

    if (first_char === second_char) {

        progressString = setCharAt(progressString, p, second_char);

        }

    }

}

function getAverageGenerations(){

    var add = 0;

    for (var u = 0; u < results.length; u++){
        add = add + results[u];
    }

    return add / u;
}


// SPLICE IN MATCHING DATA

var maximumStringLength = 10000;

var numberOfTrials = 10000;

var possibleCharacters = " abcdefghiklmnopqrstuvwxyz";


for (var targetLength = 2; targetLength < maximumStringLength; targetLength++){

    targetString = createTargetString();

    // SCRIPT

    var results = [];

    for (var r = 0; r < numberOfTrials; r++){

        var progressString = createProgressString();

        var counter = 0;

        do {

        var randomString = createRandomString();

        var counter = counter + 1;

        loopCheckReplace();

        } while (targetString != progressString);

    results[r] = counter;

    }

    var average = getAverageGenerations();

    console.log(targetLength + ", " + average);

}