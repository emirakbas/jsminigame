function started() {
    console.log('Started button clicked');
    let helloText = document.getElementById("helloText")
    let startButton = document.getElementById("startButton")
    helloText.style.display = "none";
    console.log('Removed hello text');
    startButton.style.display = "none";
    console.log('Removed start button');
}