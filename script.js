
function updateGreeting() {
    
    const nameInput = document.getElementById("usernameInput");
    const header = document.getElementById("greetingHeader");

    
    const enteredName = nameInput.value.trim();


    if (enteredName !== "") {
        header.textContent = `Hello, ${enteredName}`;
    } else {
        
        alert("Please enter a valid name first!");
    }
}


function changeBoxColor(boxId, targetColor) {
    
    const selectedBox = document.getElementById(boxId);

    
    selectedBox.style.backgroundColor = targetColor;


    if (targetColor === "blue" || targetColor === "red" || targetColor === "green") {
        selectedBox.style.color = "#ffffff";
    }
}