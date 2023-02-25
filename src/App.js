import "./App.css"
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
function App() {
  return (
    <>
    <div className="App">
      <Header/>
      <div id="about"><About/>
      </div>
      {/* <div id="skills">
        <Skills/>
      </div> */}
      <div id="contact">
        <Contact/>
      </div>
    </div>
    </>
  );
}

export default App;
