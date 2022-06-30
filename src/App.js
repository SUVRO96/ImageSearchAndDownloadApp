import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App bg-dark">
        <br />
        <h1>myImg</h1>
        <Search />
        <br />
        <Footer />
      </div>
    </>
  );
}

export default App;
