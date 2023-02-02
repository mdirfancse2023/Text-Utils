import logo from "./logo.svg";
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import Footer from "./components/Footer"
import "./App.css";
function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <TextForm/>
      <Footer/>
    </>
  );
}
export default App;
