var BtnTranslator=document.querySelector("#btn-translator")
var inputText=document.querySelector("#input")
var outputText=document.querySelector("#output")
var url="https://api.funtranslations.com/translate/minion.json"
function errorHandler(error){
    console.log("error occured",error)
    alert("something wrong with server! try again later.. ")}

function Event(){
    fetch(url+"?"+"text="+inputText.value)
    .then(response => response.json())
    .then(json => { 
        var translatedText=json.contents.translated;
        outputText.innerText=translatedText;
     } )

    .catch(errorHandler)

}
BtnTranslator.addEventListener("click",Event)