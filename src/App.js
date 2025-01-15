import Weather from "./Weather";
import "./index.css";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <header>
        <form className="search-form" id="search-form">
          <input
            type="search"
            placeholder="Enter a city..."
            required
            className="search-form-input"
            id="search-input"
          />
          <input type="submit" value="Search" className="search-form-button" />
        </form>
      </header>
      <Weather defaultCity="New York" />
      <footer>
        Built by{" "}
        <a href="https://github.com/xorsx" target="_blank" rel="noreferrer">
          Olivia Swann
        </a>{" "}
        open-sourced on{" "}
        <a
          href="https://github.com/xorsx/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://famous-lily-90279c.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
