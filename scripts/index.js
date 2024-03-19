// Define a function to type out "Hello" on the "introduction" h1 element
// Define a function to type out "Hello" on the "introduction" h1 element
function typeHello() {
  const introductionH1 = document.getElementById("introduction");
  const textToType = "Hello!";
  let currentIndex = 0;

  function typeNextCharacter() {
    if (currentIndex < textToType.length) {
      introductionH1.textContent = textToType.slice(0, currentIndex + 1);
      currentIndex++;
    } else {
      clearInterval(typingInterval);
    }
  }

  // Typing interval (milliseconds between each character)
  const typingInterval = setInterval(typeNextCharacter, 175);
}

// Call the function when the page loads
window.addEventListener("load", typeHello);