import MacWindow from "./MacWindow";
import githubData from "../../assets/github.json";

function Card({image, title, description, techStack, repo, live}) {
    return <div className="card bg-zinc-800 text-sm">
        <img src={image} className="h-1/3 w-full object-cover object-center" alt="" />
        <h1 className="text-xl">{title}</h1>
        <p>{description}</p>
        
        <div className="tags flex flex-wrap justify-between items-center gap-1">
            {
                techStack.map(tech => <p className="p-1 rounded-sm bg-blue-900 text-white">{tech}</p>)
            }
        </div>

        <div className="urls flex justify-between items-center">
            <a href={repo}></a>
            <a href={live}></a>
        </div>
    </div>
}

export default function Github() {
    return <MacWindow>
        <div className="cards flex flex-wrap items-center justify-center gap-2 p-1">
            {
                githubData.map((data, index) => {
                    return <Card key={index} img={data.image} title={data.title} description={data.description} techStack={data.techStack} repo={data.repoLink} live={data.liveDemo}></Card>
                })
            }
        </div>
    </MacWindow>
}