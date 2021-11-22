const quotes = [
  {
    quote: "Everyone has talent. What is rare is the courage to follow the talent to the dark place where it leads.",
    author: "Erica Jong",
  },
  {
    quote: "Life A man's character is his fate.",
    author: "Heraclitus",
  },
  {
    quote: "How many a man has dated a new era in his life from the reading of a book.",
    author: "Henry David Thoreau",
  },
  {
    quote: "All you need in this life is ignorance and confidence; then success is sure.",
    author: "Mark Twain",
  },
  {
    quote: "Life is not fair; get used to it.",
    author: "Bill Gates",
  },
  {
    quote: "Success is the ability to go from one failure to another with no loss of enthusiasm.",
    author: "Sir Winston Churchill",
  },
  {
    quote: "Energy and persistence conquer all things.",
    author: "Benjamin Franklin",
  },
  {
    quote: "If you can concentrate always on the present, you'll be a happy man.",
    author: "Paulo Cuelho",
  },
  {
    quote: "Remember that there is nothing stable in human affairs; therefore avoid undue elation in prosperity, or undue depression in adversity.",
    author: "Socrates",
  },
  {
    quote: "Great minds have purposes, others have wishes.",
    author: "Washington Irving",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;