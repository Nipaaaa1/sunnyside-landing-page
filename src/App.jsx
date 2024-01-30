import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <main className="h-auto w-full bg-slate-800">
      <Navbar />
      <Hero />
    </main>
  );
};

export default App;
