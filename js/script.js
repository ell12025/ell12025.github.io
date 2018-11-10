/***
 * Random Quote Generator
 - Array of quotes is made. Each object has a quote and a source
***/
var quotes = [
    {
        quote: "The strength of this country isn’t in buildings of brick and steel. It’s in the hearts of those who have sworn to fight for its freedom!",
        source: "Captain America"
    },
    {
        quote: "If there is nothing but what we make in this world, brothers, let us make it good!",
        source: "Beta Ray Bill"
    },
    {
        quote: "When you decide not to be afraid, you can find friends in super unexpected places.",
        source: "Ms. Marvel"
    },
    {
        quote: "The door is more than it appears. It separates who you are from who you can be. You do not have to walk through it… You can run.",
        source: "Franklin Richards"
    },
    {
        quote: "Violence doesn’t discriminate. It comes as cold and bracing as a winter breeze and it leaves you with a chill you can’t shake off.",
        source: "Daredevil"
    },
    {
        quote: "Intelligence is a privilege, and it needs to be used for the greater good of people.",
        source: "Dr. Octopus"
    },
    {
        quote: "Just because someone stumbles and loses their path, doesn’t mean they can’t be saved.",
        source: "Professor Charles Xavier"
    },
    {
        quote: "If you cage the beast, the beast will get angry.",
        source: "Wolverine"
    },
    {
        quote: "No man can win every battle, but no man should fall without a struggle.",
        source: "Peter Parker"
    },
    {
        quote: "Faith is my sword. Truth is my shield. Knowledge my armor.",
        source: "Stephen Strange"
    },
    {
        quote: "The world is changing. Soon there will only be the conquered and the conquerors. You are a good man, with a good heart. And it’s hard for a good man to be a king.",
        source: "King T’Chaka"
    },
    {
        quote: "The world is full of evil and lies and pain and death, and you can’t hide from it; you can only face it. The question is, when you do – How do you respond? Who do you become?",
        source: "Phil Coulson"
    },
    {
        quote: "Whatever happens tomorrow you must promise me one thing. That you will stay who you are. Not a perfect soldier, but a good man.",
        source: "Captain America"
    },
    {
        quote: "Heroes are made by the path they choose, not the powers they are graced with.",
        source: "Iron Man"
    },
    {
        quote: "All we can do is our best, and sometimes the best we can do is start over.",
        source: "Agent Carter"
    },

];



/***
  - Create and return a random number from 0 to 10
***/
function getRandomQuote() {

    return Math.floor(Math.random() * 15);

}

/***
 - A counter for the "no-repeating same quote in a row" process
 ***/
let j = 0;

/***
 - Value returned from getRandomQuote is stored in variable i.
 - Get Elements "quote" and "source" by class name and store them in variables.
 - While loop to see if current quote is the same as the previous quote... i == j. If the same, get another random quote.
 - If the quotes aren't the same then go ahead and create innerHTML to display quote and source. Then set j = i;
***/
function printQuote() {
    let i = getRandomQuote();
    console.log(quotes[i].quote, quotes[i].source);
    var quote = document.getElementsByClassName("quote");
    var source = document.getElementsByClassName("source");
    while (i == j) {
        i = getRandomQuote();
    }
        quote[0].innerHTML = quotes[i].quote;
        source[0].innerHTML = quotes[i].source;
        j = i;
}

/***
 - When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

