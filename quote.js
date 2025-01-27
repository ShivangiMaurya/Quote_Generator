
const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
  "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett",
  "Happiness is not by chance, but by choice. – Jim Rohn"
];

const quoteElement = document.getElementById('quote');
const newQuoteButton = document.getElementById('new-quote');
const tweetButton = document.getElementById('tweet-quote');

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function displayQuote() {
  const randomQuote = getRandomQuote();
  quoteElement.textContent = randomQuote;
}
newQuoteButton.addEventListener('click', displayQuote);
