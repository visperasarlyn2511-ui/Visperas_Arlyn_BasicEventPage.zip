// Select elements
const pageContainer = document.querySelector("#pageContainer");
const mainHeading = document.querySelector("#mainHeading");
const nameInput = document.querySelector("#nameInput");
const greetingButton = document.querySelector("#greetingButton");
const backgroundButton = document.querySelector("#backgroundButton");
const resetButton = document.querySelector("#resetButton");
const messageArea = document.querySelector("#messageArea");

// Store original values
const originalHeading = mainHeading.textContent;
const originalBackground = pageContainer.style.backgroundColor;

// Handler: Greeting button
function handleGreetingClick() {
  const name = nameInput.value.trim();
  if (name) {
    mainHeading.textContent = `Hello, ${name}!`;
    messageArea.textContent = "Greeting displayed successfully.";
  } else {
    messageArea.textContent = "Please enter your name first.";
  }
  console.log("Greeting button clicked"); // Debugging
}

// Handler: Background button
function handleBackgroundClick() {
  pageContainer.style.backgroundColor = "#ffe4b5"; // light brown
  messageArea.textContent = "Background color changed.";
  console.log("Background button clicked");
}

// Handler: Reset button
function handleResetClick() {
  mainHeading.textContent = originalHeading;
  pageContainer.style.backgroundColor = originalBackground;
  nameInput.value = "";
  messageArea.textContent = "";
  console.log("Page reset to original state");
}

// Handler: Input event
function handleInputEvent() {
  const currentText = nameInput.value;
  messageArea.textContent = currentText
    ? `You are typing: ${currentText}`
    : "";
  console.log(`Input event: ${currentText}`);
}

// Handler: Mouseover event
function handleMouseOver(event) {
  console.log(`The mouse is over the ${event.target.id}`);
}

// Attach listeners
greetingButton.addEventListener("click", handleGreetingClick);
backgroundButton.addEventListener("click", handleBackgroundClick);
resetButton.addEventListener("click", handleResetClick);
nameInput.addEventListener("input", handleInputEvent);

// Attach mouseover to all buttons
[greetingButton, backgroundButton, resetButton].forEach(button => {
  button.addEventListener("mouseover", handleMouseOver);
});