const settings = {
  async: true,
  crossDomain: true,
  url: "https://type.fit/api/quotes",
  method: "GET",
};
async function getResponse() {
  return fetch("https://type.fit/api/quotes")
    .then((resp) => resp.json())
    .then((resp) => {
      return resp;
    });
}
let response = [];
async function conslog() {
  await getResponse().then((resp) =>
    resp.forEach((elem) => response.push(elem))
  );
  eventlisteners();
}
// constants
conslog();
const quote = document.getElementById("quote");
const author = document.getElementById("author");

//eventListeners

function eventlisteners() {
  randomQuote();
  document.querySelector("button").addEventListener("click", randomQuote);
}
function randomQuote() {
  let temp = response[Math.round(Math.random() * 1643)];
  quote.textContent = temp.text;
  author.textContent = temp.author;
}
