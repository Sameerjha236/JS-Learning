const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.8,
  }
);

cards.forEach((card) => observer.observe(card));

const lastCardObserver = new IntersectionObserver((entries) => {
  const lastCard = entries[0];
  if (!lastCard.isIntersecting) return;
  lastCardObserver.unobserve(lastCard.target);
  addNewCards();
  lastCardObserver.observe(document.querySelector(".card:last-child"));
});

lastCardObserver.observe(document.querySelector(".card:last-child"));

const cardContainer = document.querySelector(".card-container");
const addNewCards = () => {
  for (let i = 0; i < 10; i++) {
    const newCard = document.createElement("div");
    newCard.textContent = "New card";
    newCard.classList.add("card");
    observer.observe(newCard);
    cardContainer.append(newCard);
  }
};
