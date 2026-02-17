import {Rnd} from "react-rnd";

const MacWindow = ({ children }) => {
    return <Rnd
    default = {{
      width: "50vw",
      height: "60vh",
      x: "300",
      y: "200"
    }}
    >
      <div className="flex flex-col bg-black rounded-sm text-white overflow-hidden h-full w-full">
        <nav className="bg-zinc-800 text-gray-100 py-3 px-2 gap-8 flex items-center">
          <div className="dots flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-full cursor-pointer bg-red-500"></div>
            <div className="w-2.5 h-2.5 rounded-full cursor-pointer bg-yellow-400"></div>
            <div className="w-2.5 h-2.5 rounded-full cursor-pointer bg-green-600"></div>
          </div>
          <div className="title text-sm">
            <p>abdulghani</p>
          </div>
        </nav>
        <div className="mainContext overflow-y-auto">
            {children}
        </div>
      </div>
    </Rnd>
}

export default MacWindow;