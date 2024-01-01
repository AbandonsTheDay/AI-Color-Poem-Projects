function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Roses are red...",
    autoStart: true,
    cursor: "",
    delay: 10,
  });
}

let formElement = document.querySelector("#poem-gen-form");
formElement.addEventListener("submit", generatePoem);
