import licenses1 from "./tast_data (2).json";
import "./App.css";
import SystemName from "./SystemName";
import Licenses2 from "./Licenses2";
import Header from "./Header";
import JamesMainMackbook from "./JamesMainMackbook";
import Licenses from "./Licenses";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <SystemName />
        <JamesMainMackbook />
        <JamesMainMackbook />
      </Container>
    </div>
  );
}

export default App;
