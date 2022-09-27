const steps = document.querySelectorAll(".step");
const barra = document.getElementById("barra");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const text = document.getElementById("text");
const img = document.getElementById("img");

let currentStep = 1;
nextButton.addEventListener("click", () => {
  if (currentStep < steps.length) {
    currentStep++;
    updateProgress();
  }
});

prevButton.addEventListener("click", () => {
  if (currentStep > 1) {
    currentStep--;
    updateProgress();
  }
});

function updateProgress() {
  steps.forEach((step, index) => {
    if (index < currentStep) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }

    addTexts();
  });

  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;
  barra.style.width = progress + "%";

  if (currentStep === steps.length) {
    nextButton.disabled = true;
  } else if (currentStep === 1) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = nextButton.disabled = false;
  }
}
function addTexts() {
  switch (currentStep) {
    case 2:
      text.innerText = "Paso dos";
      img.innerHTML = `
        <img class="img1" src="./IMG/1.jpg" alt="">
      `;
      break;
    case 3:
      text.innerText = "Paso tres";
      img.innerHTML = `
        <img class="img2" src="./IMG/2.jpg" alt="">
      `;
      break;
    case 4:
      text.innerText = "Paso cuatro";
      img.innerHTML = `
        <img class="img3" src="./IMG/3.jpg" alt="">
      `;
      break;
    case 1:
      text.innerText = "Paso uno";
      img.innerHTML = `
        <img class="img4" src="./IMG/4.jpg" alt="">
      `;
      break;
  }
}
