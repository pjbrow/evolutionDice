// SPLICE IN MATCHING DATA

console.log("TEST 10,000 x 10,000");
console.log("2 June 2013, 12:03");
console.log("");

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

var max_characters = 10000;

for (var x = 2; x < max_characters; x++){

    // VARIABLES

    var chars = " abcdefghiklmnopqrstuvwxyz";

    target = "";

    for ( var n=0; n < x; n++ ) {

            var rnum = Math.floor(Math.random() * chars.length);
            target += chars.substring(rnum,rnum+1);

            }

    // var message = "hello pato he a test and this is also a test";
    var message = target;
    var number_of_tests = 10000;


    // SCRIPT

    var results = [];

    for (var r = 0; r < number_of_tests; r++){

        var randomString = "";
        var storedString = "";


        for (var c=0; c < message.length; c++) {
            storedString = storedString + "*";
        }

        var counter = 0;

        do {

        var randomString = "";

        for ( var i=0; i < message.length; i++ ) {

            var rnum = Math.floor(Math.random() * chars.length);
            randomString += chars.substring(rnum,rnum+1);

            }

        var counter = counter + 1;
        // console.log("");
        // console.log("Generation " + counter + " (Test " + r + ")");

        // console.log("select: " + message);
        // console.log("random: " + randomString);

        for (var p = 0; p < message.length; p++) {

            var first_char = randomString.slice(p, p+1);

            var second_char = message.slice(p, p+1);

            if (first_char === second_char) {

                storedString = setCharAt(storedString, p, second_char);

                }

            }

        // console.log("update: " + storedString);
        // console.log("");
        } while (message != storedString);

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
        number_of_characters: x,
        generations_required: average,
        array_of_results: results
        };

    console.log(outcome.number_of_characters + ", " + outcome.generations_required);

}

console.log("***********");
console.log("STATISTICS");
console.log("Ran each experiment " + number_of_tests + " times.");



