var text=document.getElementById("quote");
var author=document.getElementById("author");
var tweetButton=document.getElementById("tweet");

var getNewQuote = async () =>
{ 

    var url="https://type.fit/api/quotes";    


    var response=await fetch(url);
    console.log(typeof response);

    var allQuotes = await response.json();


    var indx = Math.floor(Math.random()*allQuotes.length);


    var quote=allQuotes[indx].text;


    var auth=allQuotes[indx].author;

    if(auth==null)
    {
        author = "Anonymous";
    }

 
    text.innerHTML=quote;
    author.innerHTML="~ "+auth;
}
getNewQuote();