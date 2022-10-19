const input = document.querySelector("#txt-input");
const translateBtn = document.querySelector("#btn-translate");
let output = document.querySelector("#opt");


function constructURL(text){
    return "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=" + text
}
function constructURL2(text){
    return "https://api.funtranslations.com/translate/minion.json?text=" + text
}

translateBtn.addEventListener("click", () => {
    console.log("clicked")
    console.log(input.value)
    var text1 = input.value
    // fetch(constructURL(text1))
    fetch(constructURL2(text1))
        .then(response => response.json())
        .then(json => {
            let opt = json.contents.translated
            output.value = opt
            console.log(opt);
        })

});


