
const projects = [
    {
        name : "Sync Space",
        description : "Built a full-stack real-time communication platform using MongoDB, Express.js, React, and Node.js. Integrated WebRTC for peer-to-peer video calling, Socket.IO for real-time messaging and signaling, and JWT for secure authentication. Designed a responsive interface with features including one-to-one video calls, instant chat, and user authentication.",
        image : "/Screenshot 2026-07-16 123300.png",
        liveLink : "https://sync-space-eight-red.vercel.app/",
        gitHubLink : "https://github.com/vansh-chauhan01/SyncSpace"
    },
    {
        name : "Video Share",
        description : "Developed a full-stack YouTube-inspired video sharing platform using the MERN stack. Implemented secure user authentication with JWT and Google Sign-In using Firebase Authentication. Managed application state with Redux Toolkit and stored video files efficiently using Supabase Storage. Features include video upload, playback, search, user authentication, and a responsive user interface.",
        image : "/Screenshot 2026-07-16 120007.png",
        liveLink : "https://video-share-x7kf.vercel.app/",
        gitHubLink : "https://github.com/vansh-chauhan01/video-share"
    },
]



const Projects = ()=>{
    return (
       <section id="projects" className="max-w-7xl mx-auto py-20">
            <h2 className="text-4xl font-semibold text-center text-slate-700">
                Projects
            </h2>

            <div className="mt-12 flex flex-wrap justify-center gap-8">
                {projects.map((project) => (
                <div
                    key={project.name}
                    className="h-180 w-115 rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                    {/* Image */}
                    <img
                    src={project.image}
                    alt={project.name}
                    className="mt-7 w-full h-64 object-cover border-b border-gray-200"
                    />

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-2xl font-semibold text-slate-800">
                        {project.name}
                    </h3>

                    <p className="text-gray-600 leading-7 mt-4 flex-1 font-medium">
                        {project.description}
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 mb-7 flex gap-4">
                        <button
                        onClick={() =>
                            window.open(project.gitHubLink, "_blank", "noopener,noreferrer")
                        }
                        className="px-5 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
                        >
                        GitHub
                        </button>

                        <button
                        onClick={() =>
                            window.open(project.liveLink, "_blank", "noopener,noreferrer")
                        }
                        className="px-5 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
                        >
                        Live Demo
                        </button>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;