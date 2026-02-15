import MacWindow from "./MacWindow";
import githubData from "../../assets/github.json";

function Card({id = 1, image = "", title = "", description = "", techStack = [], repo = "", live = ""}) {

    return <div className="card p-2 tracking-tight flex flex-col justify-center gap-5 w-[48%] bg-zinc-900 rounded-md text-sm overflow-y-auto">

        {/* Project Info - Title, Description */}
        <div className="flex flex-col gap-1">
            <img src={image} className="h-50 w-full object-cover object-center" alt="" />
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p className="text-xs tracking-normal">{description}</p>
        </div>
        
        {/* Tech tags */}
        <div className="tags flex flex-wrap justify-around items-center gap-1.5">
            {
                techStack.map(tech => <p className="p-1 rounded-sm bg-blue-900 text-white">{tech}</p>)
            }
        </div>

        {/* Project URLs */}
        <div className="urls flex justify-between items-center">
            <a href={repo}>Repository</a>
            <a href={live}>{live ? "Live Demo" : "Null"}</a>
        </div>
    </div>
}

export default function Github() {
    return <MacWindow>
        <div className="cards flex flex-wrap justify-start items-start gap-2 p-5">
            {
                githubData.map((data, index) => {
                    return <Card key={index} id={data.id} image={data.image} title={data.title} description={data.description} techStack={data.techStack} repo={data.repoLink} live={data.liveDemo}></Card>
                })
            }
        </div>
    </MacWindow>
}