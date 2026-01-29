import Dock from "./components/Dock";

const App=()=>{
  return <main className="relative bg-[url('mac-wallpaper.jpg')] h-screen w-screen flex flex-col object-center object-cover">
    <Dock></Dock>
  </main>
}

export default App;