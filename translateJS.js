
var targetLang;
var language = {
    SINHALA :'si',
    ENGLISH:'en',
    TAMIL :'ta',
    JAPANESE :'ja'
};

function convert() {
    var slides = document.getElementsByClassName("translate");
    var e = document.getElementById("lang-selector");
    targetLang = e.options[e.selectedIndex].value;
    targetLang=eval(targetLang);
    for (var i = 0; i < slides.length; i++) {
        googleTranslate(slides[i],slides[i].getAttribute("eng-term"))
    }
}

function googleTranslate(component,value) {
    var xhttp = new XMLHttpRequest();
    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=" + targetLang + "&dt=t&q=" + encodeURI(value);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var result=JSON.parse(this.responseText);
            var translatedText = result[0][0][0];
            component.innerHTML = translatedText;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
