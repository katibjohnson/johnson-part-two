let vacationType = prompt("What kind of trip would you like to go on, musical, tropical, or adventurous?", "");
let groupSize = prompt("How many are in your group?", "");

let destinationResult;
if (vacationType == "musical") {
    destinationResult = "New Orleans"
} else if (vacationType == "tropical") {
    destinationResult = "a beach vacation in Mexico"
} else if (vacationType == "adventurous") {
    destinationResult = "go whitewater rafting the Grand Canyon"
} else {""}
let travelSuggestion;
if (groupSize > 0 && groupSize < 3) {
    travelSuggestion = "first class flight"
} else if (groupSize > 2 && groupSize < 6) {
    travelSuggestion = "helicopter ride"
} else if (groupSize >= 6) {
    travelSuggestion = "charter flight"
} else {""}
console.log("Since you're a group of " + groupSize + " going on a " + vacationType + " vacation, you should take a " + travelSuggestion + " to " + destinationResult + ".");
document.write("Since you're a group of " + groupSize + " going on a " + vacationType + " vacation, you should take a " + travelSuggestion + " to " + destinationResult + ".");
