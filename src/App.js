import "./App.css";

function App({ state, actions }) {
  return (
    <div className="App">
      <header className="App-header">
        {state?.microfrontendTitle || "nav_bar"}
      </header>
    </div>
  );
}

export default App;
