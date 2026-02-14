import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Github from "./windows/Github";

const App = () => {
  return <main className="relative bg-[url('mac-wallpaper.jpg')] h-screen w-screen flex flex-col object-center object-cover">
    <Nav />
    <Github />
    <Dock />
  </main>
}

export default App;