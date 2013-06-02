/// BROKEN OUT FUNCTIONS


// Function replaces character in progress string if a match is found
// between the random string and the target string.

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

// Function creates a target string for each trial.

function createTargetString(){

        targetString="";

        for ( var n=0; n < targetLength; n++ ) {

            var rnum = Math.floor(Math.random() * possibleCharacters.length);
            targetString += possibleCharacters.substring(rnum,rnum+1);

            }
            return targetString;
}

// Function creates a random string to compare to the target string
// for each generation.

function createRandomString(){

        randomString = "";


        for ( var i=0; i < targetString.length; i++ ) {

            var rnum = Math.floor(Math.random() * possibleCharacters.length);
            randomString += possibleCharacters.substring(rnum,rnum+1);

            }

        return randomString;

}

// Function creates the progress string of empty characters

function createProgressString(){
    var progressString = "";

        for (var c=0; c < targetString.length; c++) {
            progressString = progressString + "*";
        }
    return progressString;
}

// Function loops through target string and compares each character
// to the random string.  Replaces character on progress string if match.

function loopCheckReplace(){

    for (var p = 0; p < targetString.length; p++) {

    var first_char = randomString.slice(p, p+1);

    var second_char = targetString.slice(p, p+1);

    if (first_char === second_char) {

        progressString = setCharAt(progressString, p, second_char);

        }

    }

}



// Variable sets the characters that are used to generate the target
// string and also the random string for each generation.

var possibleCharacters = " abcdefghiklmnopqrstuvwxyz";

// Variable specifies the length of the target string.

var targetLength = 20;

targetString = createTargetString();

// for (var r = 0; r < numberOfTrials; r++){

    var counter = 0;

    var progressString = createProgressString();

    // Trial Loop continues until progress string equals the target string.

    do {

    var counter = counter + 1;

    var randomString = createRandomString();

    loopCheckReplace();

    console.log("GENERATION " + counter);
    console.log("Target: " + targetString);
    console.log("Random: " + randomString);
    console.log("Progre: " + progressString);
    console.log("");

    } while (targetString != progressString);

// generationsRequiredResults[r] = counter;

// }