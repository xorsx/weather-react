import Weather from "./Weather";
import "./index.css";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <div class="container">
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
    </div>
  );
}

export default App;
