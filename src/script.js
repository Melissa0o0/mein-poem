function generatePoem(write) {
  console.log(write.data);
  new Typewriter("#poem", {
    strings: write.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}
let poemFormElement = document.querySelector("#form");
poemFormElement.addEventListener("submit", generatePoem);

function aiPoem(generate) {
  generate.preventDefault();
  let wordInput = document.querySelector("#search-input");
  let apiKey = "937eb44cb68833ao5cdt10179cf40b38";
  let context =
    "Make sure to keep it short and sweet, use uncomplicated punchlines,no offensive content and provide the answer in french. Use HTML format, for example <br> Hellooooo <br/> ";
  let prompt = `Create a poem about ${wordInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a French poem about ${wordInput.value} </div>`;

  axios.get(apiUrl).then(generatePoem);
}

let buttonElement = document.querySelector("#button");
buttonElement.addEventListener("click", aiPoem);
