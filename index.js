class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberColor: 1,
      numberQuote: 1,
      tracker: 0,
    };
    this.generateRandom = this.generateRandom.bind(this);
  }

  generateRandom() {
    this.setState({
      numberColor: Math.floor(Math.random() * 12),
      numberQuote: Math.floor(Math.random() * 17),
      tracker: 1,
    });
  }

  render() {
    if (this.state.tracker == 0) {
      this.generateRandom();
    }
    const QUOTES = [
      ["The purpose of our lives is to be happy.", "Dalai Lama"],
      [
        "Life is what happens when you're busy making other plans.",
        "John Lennon",
      ],
      ["Get busy living or get busy dying.", "Stephen King"],
      [
        "You only live once, but if you do it right, once is enough.",
        "Mae West",
      ],
      [
        "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        "Thomas A. Edison",
      ],
      [
        "If you want to live a happy life, tie it to a goal, not to people or things.",
        "Albert Einstein",
      ],
      [
        "Never let the fear of striking out keep you from playing the game.",
        "Babe Ruth",
      ],
      [
        "Money and success don’t change people; they merely amplify what is already there.",
        "Will Smith",
      ],
      [
        "Not how long, but how well you have lived is the main thing.",
        "Seneca",
      ],
      [
        "If life were predictable it would cease to be life, and be without flavor.",
        "Eleanor Roosevelt",
      ],
      [
        "In order to write about life first you must live it.",
        "Ernest Hemingway",
      ],
      [
        "The big lesson in life, baby, is never be scared of anyone or anything.",
        "Frank Sinatra",
      ],
      [
        "Curiosity about life in all of its aspects, I think, is still the secret of great creative people.",
        "Leo Burnett",
      ],
      [
        "Life is not a problem to be solved, but a reality to be experienced.",
        "Soren Kierkegaard",
      ],
      ["The unexamined life is not worth living.", "Socrates"],
      [
        "The way I see it, if you want the rainbow, you gotta put up with the rain.",
        "Dolly Parton",
      ],
      [
        "Don’t settle for what life gives you; make life better and build something.",
        "Ashton Kutcher",
      ],
    ];

    const COLORS = [
      "orange",
      "mediumvioletred",
      "steelblue",
      "indianRed",
      "LightPink",
      "olive",
      "teal",
      "violet",
      "steelblue",
      "yellowgreen",
      "plum",
      "palevioletred",
    ];

    let bgColor = {
      backgroundColor: COLORS[this.state.numberColor],
    };
    let textColor = {
      color: COLORS[this.state.numberColor],
    };

    let textQ = QUOTES[this.state.numberQuote][0];
    let textA = QUOTES[this.state.numberQuote][1];

    return (
      <div id="host-layer" style={bgColor}>
        <div
          id="quote-box"
          className="position-absolute top-50 start-50 translate-middle container"
        >
          <div id="text" style={textColor}>
            <i class="fa-solid fa-angles-left"></i> {textQ}{" "}
            <i class="fa-solid fa-angles-right"></i>
          </div>
          <div id="author" style={textColor}>
            {textA}
          </div>
          <div id="buttons">
            <a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote">
              <i class="fa-brands fa-square-twitter" style={textColor}></i>
            </a>
            <button
              id="new-quote"
              className="btn"
              style={bgColor}
              onClick={this.generateRandom}
            >
              New quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MyApp />, document.getElementById("machine-app"));
