function convertToLowerCase() {
    let text = document.getElementById("textInput").value;
    let lowerCaseText = text.toLowerCase();
    document.getElementById("result").innerHTML = lowerCaseText;
}
