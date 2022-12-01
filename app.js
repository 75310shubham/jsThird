const productNameInputElement = document.querySelector("input");
const remainingCharsElement = document.getElementById("remaining-char");

function updateRemainingCharacter(event) {
  const enterdText = event.target.value;
  const enterdTextLength = enterdText.length;

  const remainingCharacters = 30 - enterdTextLength;
  remainingCharsElement.textContent = remainingCharacters;

  // if (remainingCharacters === 0) {
  //   remainingCharsElement.classList.add("error");
  //   productNameInputElement.classList.add("error");
  // } else if (remainingCharacters <= 10) {
  //   remainingCharsElement.classList.add("warning");
  //   productNameInputElement.classList.add("warning");
  //   remainingCharsElement.classList.remove("error");
  //   productNameInputElement.classList.remove("error");
  // } else {
  //   remainingCharsElement.classList.remove("warning");
  //   productNameInputElement.classList.remove("warning");
  // }
  if (remainingCharacters === 0) {
    remainingCharsElement.classList.add("error");
    productNameInputElement.classList.add("error");
  } else if (remainingCharacters <= 10) {
    remainingCharsElement.classList.add("warning");
    productNameInputElement.classList.add("warning");
    remainingCharsElement.classList.remove("error");
    productNameInputElement.classList.remove("error");
  } else {
    remainingCharsElement.classList.remove("warning");
    productNameInputElement.classList.remove("warning");
  }
}

productNameInputElement.addEventListener("input", updateRemainingCharacter);

// const spanElement= document.getElementById('remaining-char');
// // spanElement.className='warning';
// // spanElement.classList.add('warning');

// spanElement.style.color='rgb(255,0,0)';
