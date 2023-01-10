import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import ContactForm from "./pages/ContactForm/ContactForm";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header
        home={`Home Page`}
        about={`About Me`}
        skils={`Skills`}
        project={`Projects`}
        contact={`Contact Form`}
      />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;