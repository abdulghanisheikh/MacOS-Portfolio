import {Rnd} from "react-rnd";

const MacWindow = ({ children }) => {
    return <Rnd>
      <div className="flex flex-col bg-zinc-900 rounded-sm text-white w-100 h-80 overflow-hidden">
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
        <div className="mainContext px-2 py-1 overflow-y-auto">
            {children}
        </div>
      </div>
    </Rnd>
}

export default MacWindow;