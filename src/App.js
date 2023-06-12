import "./styles.css";

function App() {
  return (
    <div className="hero">
      <div className="container">
        <div className="randomNum">
          <p>
            Random Number <span>0</span>
          </p>
        </div>
        <div className="numContainer">
          <div>
            <p>Min:</p>
            <input type="number" value={0} />
          </div>
          <div>
            <p>Max:</p>
            <input type="number" value={0} />
          </div>
        </div>
        <button>Get Random Number</button>
      </div>
    </div>
  );
}

export default App;
