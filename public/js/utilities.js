function countLetters(text){
    let textoCortado = text.slice(0, 100);

    return textoCortado + "...";
}


function convertDate (fecha){
    console.log(fecha)
      var javaScriptRelease = Date.parse(fecha);
    console.log(javaScriptRelease)
    var date = new Date(javaScriptRelease);
    var options = {
        year: 'numeric', month: 'numeric', day: 'numeric',
    };
    var result = date.toLocaleDateString('es', options);
    console.log("result de convertdate" + result)
    return result;
    
} 
