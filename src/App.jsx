import Home from "./Pages/Home";
import TheNavbar from "./components/TheNavbar";


function App() {
  return (
    <>
      <TheNavbar/>
      <section className="container mx-auto">
        <Home/>
      </section>
    </>
  );
}

export default App;
