import foto from "./png/Rectangle 15.png";
import foto1 from "./png/Rectangle 16.png";
import foto2 from "./png/Rectangle 17.png";

export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <h1>Licenses</h1>
        </div>
        <div className="app">
          <div>
            <img src={foto} />
          </div>
          <div>
            <img src={foto1} />
          </div>
          <div>
            {" "}
            <img src={foto2} />
          </div>
          <div>
            <button type="button" className="button">
              Upgrade Now
            </button>
          </div>
        </div>
      </nav>
      <div className="box">
        <div>Subscription</div>
        <div>Outright</div>
        <div>Offline Activation</div>
      </div>
    </header>
  );
}
