var HTMLBody = document.getElementsByTagName('body')[0];

HTMLBody.onload = function () {
    addHeader();
}

function addHeader () {
    var headerFile = new XMLHttpRequest();
    headerFile.open('GET', 'HeaderHTML.html', true)
    headerFile.onreadystatechange = function () {
        if (this.readyState!==4) return;
        if (this.status!==200) return; // or whatever error handling you want
        HTMLBody.innerHTML= this.responseText;
    }
}

