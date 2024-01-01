function poemResult(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 10,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userSubmission = document.querySelector("#submission");
  let prompt = `write a nice short color poem about ${userSubmission.value}`;
  let context =
    "You are a savy poet, and your expertise is writing poems about color. Use basic html on the poem text when generating the poem, and separate each line with a <br />. Only style the text in the color black. Sign the poem as '- SheCodes AI'.";
  let apiKey = "2f3f1baf409eboat1de63d1abc36da6b";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(poemResult);
}

let formElement = document.querySelector("#poem-gen-form");
formElement.addEventListener("submit", generatePoem);
