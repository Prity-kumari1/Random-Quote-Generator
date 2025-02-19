const quotes = [
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { quote: "Happiness depends upon ourselves.", author: "Aristotle" },
    { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
    { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { quote: "Opportunities don’t happen. You create them.", author: "Chris Grosser" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" }
  ];
  
// quotes.forEach((element)=>{
//     console.log(element);
    
// }) 

let myQuotes = document.getElementById("myQuotes");
let author = document.getElementById("author");
let nextBtn = document.getElementById("nextBtn");
function randomQuotes(){
    let randomInd = Math.floor(Math.random()*quotes.length);
    let mainData = quotes[randomInd];
    myQuotes.textContent = mainData.quote;
    author.textContent = `Author is - ${mainData.author}`;
    console.log(mainData.quote);
    
// for(let i =0; i < quotes.length; i++){
//     myQuotes.textContent = quotes[i].quote;
//     author.textContent =  quotes[i].author
// }
} 
nextBtn.addEventListener("click", randomQuotes)
randomQuotes()