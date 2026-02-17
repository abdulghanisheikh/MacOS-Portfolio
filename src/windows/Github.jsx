import MacWindow from "./MacWindow";
import githubData from "../../assets/github.json";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

function Card({id = 1, image = "", title = "", description = "", techStack = [], repo = "", live = ""}) {

    return <div className="card p-2 tracking-tight flex flex-col gap-8 max-w-[49%] min-w-[30%] bg-zinc-900 rounded-md">

        {/* Project Info - Title, Description */}
        <div className="flex flex-col gap-4">
            <img src={image} className="h-60 w-full object-cover object-center" alt="" />
            <div className="flex flex-col gap-1 overflow-auto-y">
                <h1 className="text-3xl font-semibold px-3">{title}</h1>
                <p className="text-xs tracking-wide leading-4.2 px-3 opacity-40">{description}</p>
            </div>
        </div>
        
        {/* Tech tags */}
        <div className="tags flex flex-wrap justify-start items-start gap-3.5 px-4">
            {
                techStack.map(tech => <p className="py-1 px-2 rounded-sm bg-emerald-800/20 hover:bg-emerald-800/50 duration-300 ease-in-out border text-xs border-emerald-800 hover:border-emerald-700 text-white">{tech}</p>)
            }
        </div>

        {/* Project URLs */}
        <div className="urls flex justify-between items-center px-3 text-sm">
            <a href={repo} target="_blank" className="flex items-center justify-center gap-1 bg-blue-800/20 border border-blue-600 hover:border-blue-500 hover:bg-blue-600/20 duration-300 ease-in-out rounded-sm py-1 px-2">
                <p>Repository</p>
                <FaGithub size={17} />
            </a>
            <a href={live} target="_blank" className="flex items-center justify-center gap-1 bg-blue-800/20 border border-blue-600 hover:border-blue-500 hover:bg-blue-600/20 duration-300 ease-in-out rounded-sm py-1 px-2">
                <p>{live ? "Live Demo" : "Null"}</p>
                {
                    live && <FaExternalLinkAlt size={17} />
                }
            </a>
        </div>
    </div>
}

export default function Github() {
    return <MacWindow>
        <div className="cards flex flex-wrap justify-start items-start gap-3 p-5 pb-50">
            { 
                githubData.map((data, index) => {
                    return <Card key={index} id={data.id} image={data.image} title={data.title} description={data.description} techStack={data.techStack} repo={data.repoLink} live={data.liveDemo}></Card>
                })
            }
        </div>
    </MacWindow>
}