// Prompt the user to enter their first name
let firstName = prompt("Please enter your first name:");

// Prompt the user to enter their last name
let lastName = prompt("Please enter your last name:");

// Merge the first name and last name into a new variable called fullName
let fullName = firstName + " " + lastName;

// Display a greeting message using the fullName
alert("Hello, " + fullName + "!");


function displayPhoneModelLength() {
    // Prompt the user to enter their favorite phone model
    var phoneModel = prompt("Please enter your favorite mobile phone model:");

    // Check if the user entered a value or clicked cancel
    if (phoneModel !== null && phoneModel !== "") {
        // Find the length of the user's input
        var lengthOfInput = phoneModel.length;

        // Display the length of the input
        document.getElementById("output").innerHTML = 
            "The length of your favorite mobile phone model name is: " + lengthOfInput + " characters.";
    } else {
        // Inform the user that no input was entered
        document.getElementById("output").innerHTML = "No input provided. Please enter a mobile phone model.";
    }
}

function findIndexOfN() {
    var word = "Pakistani";
    var index = word.indexOf('n');

    // Display the result
    document.getElementById("result").innerText = "The index of 'n' in '" + word + "' is: " + index;
}

function findLastIndexOfL() {
    var phrase = "Hello World";
    var lastIndex = phrase.lastIndexOf('l');

    // Display the result
    document.getElementById("resultt").innerHTML = "The last index of 'l' in '" + phrase + "' is: " + lastIndex;
}

function displayCharacterAtIndex3() {
    var word = "Pakistani";
    var character = word.charAt(3); // Get the character at index 3

    // Display the result
    document.getElementById("resulttt").innerHTML = 
        "The character at index 3 in '" + word + "' is: '" + character + "'";
}
