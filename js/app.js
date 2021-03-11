const logo = document.querySelector(".navbar-brand");
const logosArray = [
  `< <span class="secondary">MarcoRix</span>  >`,
  `["Marco", <span class="secondary">"Rix"</span>]`,
  `Marco: <span class="secondary">Rix;</span>`,
  "${ marco<span class=`secondary`>Rix </span>}",
];

let indexCounter = 0;

function getLogo(index) {
  logo.innerHTML = logosArray[index];
}

logo.addEventListener("click", () => {
  if (indexCounter === logosArray.length - 1) {
    getLogo(indexCounter);
    indexCounter = 0;
  } else {
    getLogo(indexCounter);
    indexCounter++;
  }
});
