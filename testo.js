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

function loopCheckReplace(){

    for (var p = 0; p < targetString.length; p++) {

    var first_char = randomString.slice(p, p+1);

    var second_char = targetString.slice(p, p+1);

    if (first_char === second_char) {

        progressString = setCharAt(progressString, p, second_char);

        }

    }

}



// SPLICE IN MATCHING DATA


var max_string_length = 10000;

for (var targetLength = 2; targetLength < max_string_length; targetLength++){

    // VARIABLES

    var possibleCharacters = " abcdefghiklmnopqrstuvwxyz";

    targetString = createTargetString();

    var number_of_tests = 10000;


    // SCRIPT

    var results = [];

    for (var r = 0; r < number_of_tests; r++){

        var randomString = "";
        var progressString = "";


        for (var c=0; c < targetString.length; c++) {
            progressString = progressString + "*";
        }

        var counter = 0;

        do {

        var randomString = "";

        for ( var i=0; i < targetString.length; i++ ) {

            var rnum = Math.floor(Math.random() * possibleCharacters.length);
            randomString += possibleCharacters.substring(rnum,rnum+1);

            }

        var counter = counter + 1;
        // console.log("");
        // console.log("Generation " + counter + " (Test " + r + ")");

        // console.log("select: " + message);
        // console.log("random: " + randomString);

        loopCheckReplace();

        // console.log("update: " + progressString);
        // console.log("");
        } while (targetString != progressString);

        // console.log(message.length + " characters");
        // console.log(counter + " generations");

    results[r] = counter;

    }

    // console.log("Experiment run " + r + " times");
    // console.log(results);

    var add = 0;

    for (var u = 0; u < results.length; u++){
        add = add + results[u];
    }

    average = add / u;

    // console.log("Average is " + average);

    var outcome = {
        number_of_characters: targetLength,
        generations_required: average,
        array_of_results: results
        };

    console.log(outcome.number_of_characters + ", " + outcome.generations_required);

}

console.log("***********");
console.log("STATISTICS");
console.log("Ran each experiment " + number_of_tests + " times.");



