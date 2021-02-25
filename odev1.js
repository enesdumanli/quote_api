
const content = document.getElementById("content");
const author = document.getElementById("author");
let cst;
const fetchQuote = () => {

    fetch("https://api.quotable.io/random")
    .then((response)=>response.json())
    .then((data)=>{content.innerHTML = JSON.stringify(data.content,undefined,2);
        author.innerHTML = JSON.stringify(data.author,undefined,2);
        cst = data.content;
        }
    )
}
function twit(){
    document.getElementById("tweet").href = `https://twitter.com/intent/tweet?text=${cst}`
}











