import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import data from "./data/data";

const App = () => {
  return (
    <main className="h-auto w-full bg-slate-800">
      <Navbar data={data.navigation} />
      <Hero data={data.hero} />
    </main>
  );
};

export default App;
