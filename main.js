import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const quoteData = [
  {
    text: "''The greater danger for most of us isn’t that our aim is too high and miss it, but that it is too low and we reach it.''",
    author: "- Michelangelo",
  },
  {
    text: "''It always seems impossible until it’s done.''",
    author: "- Nelson Mandela",
  },
  {
    text: "''Always remember that your present situation is not your final destination. The best is yet to come.''",
    author: "- Zig Zigler",
  },
  {
    text: "''When you lost sight of your path, listen for the destination in your heart.''",
    author: "- Allen Walker, 'D-gray Man'.",
  },
  {
    text: "''Know that a rose without thorns has never been plucked''",
    author: "- Shota Rustaveli",
  },
  {
    text: "''That which we give makes us richer, that which is hoarded is lost. რასაცა გასცემ შენია, რაც არა დაკარგულია''",
    author: "- Shota Rustaveli",
  },
  {
    text: "''Only cattle forget the past, do not think about the future, and are satisfied with the present alone. მხოლოდ პირუტყვი ივიწყებს წარსულს, არ ჰფიქრობს მომავალზე და მარტო აწმყოთია კმაყოფილი.''",
    author: "- Ilia Chavchavadze",
  },
  {
    text: "''Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure. It is our light, not our darkness that most frightens us. We ask ourselves, Who am I to be brilliant, gorgeous, talented, and fabulous? Actually, who are you not to be? You are a child of God. Your playing small does not serve the world. There is nothing enlightened about shrinking so that other people will not feel insecure around you. We are all meant to shine, as children do. We were born to make manifest the glory of God that is within us. It is not just in some of us; it is in everyone and as we let our own light shine, we unconsciously give others permission to do the same. As we are liberated from our own fear, our presence automatically liberates others.''",
    author: "- Marianne Williamson",
  },
  {
    text: "''Nana korobi, ya oki - Fall down seven times, stand up eight.''",
    author: "- Japanese Proverb",
  },
  {
    text: "''A person who never made a mistake never tried anything new.''",
    author: "- Albert Einstein",
  },
];

const QuoteBox = ({ quote, handleNewQuote }) => (
  <div id="quote-box">
    <p id="text">{quote.text}</p>
    <h2 id="author">{quote.author}</h2>
    <div class="actions">
      <button id="new-quote" class="button" onClick={handleNewQuote}>
        New Quote
      </button>
      <a
        href="https://twitter.com/intent/tweet"
        id="tweet-quote"
        target="_blank"
      >
        Tweet
      </a>
    </div>
  </div>
);

const getRandomIndex = () =>
  Math.round(Math.random() * (quoteData.length - 1 - 0) + 0);

const App = () => {
  const [quote, setQuote] = React.useState(quoteData[getRandomIndex()]);
  const handleNewQuote = () => {
    setQuote(quoteData[getRandomIndex()]);
  };
  return (
    <div class="main">
      <QuoteBox quote={quote} handleNewQuote={handleNewQuote} />
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#app"));
