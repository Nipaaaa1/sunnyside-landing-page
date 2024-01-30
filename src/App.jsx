import Logo from "/logo.svg";
import HamburgerMenu from "/images/icon-hamburger.svg";

const App = () => {
  return ( <main className="w-full h-auto bg-slate-800">
    <nav className="w-full h-auto flex p-5 items-center justify-between">
      <img className="h-6 w-max" src={Logo} alt="Logo" />
      <img className="h-4 w-max" src={HamburgerMenu} alt="Hamburger Menu" />
    </nav>
  </main> );
}
 
export default App;