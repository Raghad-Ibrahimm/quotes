
var quotes = [

{
    quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    author:"― Marilyn Monroe",

},
{
    quote:"“Be yourself; everyone else is already taken.”",
    author:"― Oscar Wilde",
},
{
   quote:" “So many books, so little time.”",
   author:"― Frank Zappa ",

},
{
   quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
   author:"― Dr. Seuss",

},
{
   quote:" “You only live once, but if you do it right, once is enough.”",
   author:" ― Mae West",

},

];

var q = document.getElementById("quote");
var a = document.getElementById("author");

function rundom(){
var runn = Math.floor(Math.random()*(quotes.length-0));
console.log(runn);

q.innerHTML =quotes[runn].quote;
a.innerHTML=quotes[runn].author;


}
































