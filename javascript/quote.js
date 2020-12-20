const quotes = [
  {
    quote: `There are two ways to write error-free programs; only the third one works.`,
    author: `Alan J. Perlis`
  },
  {
    quote: `It’s not a bug – it’s an undocumented feature.`,
    author: `Anonymous`
  },
  {
    quote: `A good programmer is someone who always looks both ways before crossing a one-way street.`,
    author: `Doug Linder`
  },
  {
    quote: `Programming is like sex. One mistake and you have to support it for the rest of your life.`,
    author: `Michael Sinz`
  },
  {
    quote: `Deleted code is debugged code.`,
    author: `Jeff Sickel`
  },
  {
    quote: `If debugging is the process of removing software bugs, then programming must be the process of putting them in.`,
    author: `Edsger Dijkstra`
  },
  {
    quote: `Software undergoes beta testing shortly before it’s released. Beta is Latin for “still doesn’t work.`,
    author: `Anonymous`
  },
  {
    quote: `The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.`,
    author: `Seymour Cray`
  },
  {
    quote: `Software and cathedrals are much the same – first we build them, then we pray.`,
    author: `Sam Redwine`
  },
  {
    quote: `There is an easy way and a hard way. The hard part is finding the easy way.`,
    author: `Dr. Lloyd`
  },
  {
    quote: `There are only two kinds of languages: the ones people complain about and the ones nobody uses.`,
    author: `Bjarne Stroustrup`
  },
  {
    quote: `When we had no computers, we had no programming problem either.`,
    author: `Edsger W. Dijkstra`
  },
  {
    quote: `Commenting your code is like cleaning your bathroom - you never want to do it, but it really does create a more pleasant experience for you and your guests.`,
    author: `Ryan Campbell`
  },
  {
    quote: `Progress isn't made by early risers. It's made by lazy men trying to find easier ways to do something.`,
    author: `Robert Heinlein`
  },
  {
    quote: `The best code is no code at all.`,
    author: `Anonymous`
  }
]

const quoteContainer = document.getElementById('quote-container');
const newQuoteBtn = document.getElementById('new-quote');
const quoteText = document.getElementById('quote-main');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');

newQuoteBtn.addEventListener('click', () => {
  let random = Math.floor(Math.random() * quotes.length);

  
  quoteText.innerHTML = quotes[random].quote;
  authorText.innerHTML = quotes[random].author;

  if (random.quoteText.length > 120) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
});

// TWEET QUOTE
function tweetQuote() {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank');
}

twitterBtn.addEventListener('click', tweetQuote);