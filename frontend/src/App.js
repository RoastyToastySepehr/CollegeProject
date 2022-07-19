import Header from "./components/Header.jsx";
import RoutesHandler from "./RoutesHandler.jsx";
import { ThemeProvider } from "react-bootstrap";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider dir="rtl">
        <Header className="header" />
        <div style={{paddingBottom:"166px"}}>
        <RoutesHandler />
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
