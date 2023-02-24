import "./App.css"
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
  return (
    <>
    <div className="App">
      <Header/>
      <div id="about"><About/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
    </div>
    </>
  );
}

export default App;
