// array of Quotes objects
const arrayOfQuotes = [
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Epictetus",
    quote:
      "It's not what happens to you, but how you react to it that matters.",
  },
  {
    author: "Marcus Tullius Cicero",
    quote: "A room without books is like a body without a soul.",
  },
  {
    author: "Bernard M. Baruch",
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  },
  {
    author: "Nelson Mandela",
    quote:
      "Resentment is like drinking poison and waiting for your enemies to die.",
  },
  {
    author: "Oscar Wilde",
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
  },
];

function showQuote() {
  const random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);
  document.getElementById(
    "quoteOutput"
  ).innerHTML = `\"${arrayOfQuotes[random].quote}\"`;
  document.getElementById(
    "authorOutput"
  ).innerHTML = `--${arrayOfQuotes[random].author}`;
}
