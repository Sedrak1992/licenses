import licenses1 from "./tast_data (2).json";
import "./App.css";
import SystemName from "./SystemName";
import Licenses2 from "./Licenses2";
import Header from "./Header";
import JamesMainMackbook from "./JamesMainMackbook";
import Licenses from "./Licenses";

function App() {
  return (
    <div className="App">
      <Header />
      <SystemName />
      <JamesMainMackbook />
      <Licenses />
      <Licenses2 />
    </div>
  );
}

export default App;
