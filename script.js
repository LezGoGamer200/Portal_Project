let currentDate = new Date().toLocaleDateString();
let date = document.querySelector("#date");

date.textContent = currentDate;
let currentYear = new Date().getFullYear();
let year = document.querySelector("#year");

year.textContent = currentYear;
let cardsList = document.querySelector(".cards");
let cards = [];
// look up what an object in JavaScript is, when you find the syntax for an object, include a title and a url link
let quiz_app = {
  title: "Quiz Application",
  url: "./project_1/project1.html",
};
let mem_game = {
  title: "Memory Game",
  url: "./project_2/project2.html",
};
// Look up how to push an object to an array
cards.push(quiz_app);
cards.push(mem_game);
console.log(cards);
console.log(cards[0].url);
for (let i = 0; i < cards.length; i++) {
  cardsList.innerHTML += `<div class="card">
      <div class="card-inner">
        <div class="card-front">
          <h2>${cards[i].title}</h2>
        </div>
        <div class="card-back">
          <a href="${cards[i].url}">Project Link</a>
        </div>
      </div>
    </div>`;
}
