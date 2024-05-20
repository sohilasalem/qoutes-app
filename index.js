function newQuotes () {

    var quotes = [
        "“Be yourself; everyone else is already taken.”",
        "“So many books, so little time.”",
        "“We accept the love we think we deserve.” ",
        "“A room without books is like a body without a soul.”",
        "“Be the change that you wish to see in the world. ”",
        "“The only way to do great work is to love what you do.”",
        "“It's not what happens to you, but how you react to it that matters.”",
        "“Resentment is like drinking poison and waiting for your enemies to die.”",
        "“Life is what happens when you're busy making other plans.”",
        "“The best revenge is massive success.”"
    ];

    var authors = [
        " ― Oscar Wilde",
        " ― Frank Zappa",
        " ― Robert Frost",
        " ― Marcus Tullius Cicero",
        " ― Stephen Chbosky, The Perks of Being a Wallflower",
        " ― Mahatma Gandhi",
        " ― Steve Jobs",
        " ― John Lennon",
        " ― Ralph Waldo Emerson",
        " ― Elbert Hubbard"
    ];

    var lastQoute = -1;
    var quotesOutput = document.getElementById("quotes");
    var authorOutput = document.getElementById("author");
    var randomNumber;

    do {
        randomNumber = Math.floor(Math.random()*quotes.length);
    } while
     (randomNumber === lastQoute);

   var lastQoute = randomNumber;
   quotesOutput.textContent = quotes[randomNumber];
   authorOutput.textContent = authors[randomNumber];
}
// newQuotes ()