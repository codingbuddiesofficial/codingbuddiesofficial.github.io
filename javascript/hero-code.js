let codeText = document.querySelectorAll('p.code-txt');

codeText.forEach((text, i) => {
    setTimeout(() => {
        text.style.opacity = "1";
        text.style.transition = "opacity 1s ease"
        text.style.transform = "scale(1)"
    }, (i * 100) + 100);

})

function runCode() {
    let resbox = document.getElementById('resultsBox');

    resbox.style.bottom = "0";
    resbox.style.opacity = "1";

    document.getElementById('codeBox').style.marginBottom = '185px'
}
