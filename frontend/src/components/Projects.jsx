import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const projects = [
    {
        name: "Scribble Kit",
        description: "Developed a fullStack application for real-time collaborative Canvas application. The project is built with TypeScript, WebSockets , PostgreSQL, Prisma ORM, Node.js, Express.js  enabling seamless real-time collaboration, efficient data persistence, JWT authentication, and a robust backend architecture.",
        image: "/thumbnail.png",
        liveLink: "https://drawing-app-taupe-nu.vercel.app/",
        gitHubLink: "https://github.com/vansh-chauhan01/drawingApp",
    },
    {
        name: "Video Share",
        description: "Developed a full-stack YouTube-inspired video sharing platform using the MERN stack. Implemented secure user authentication with JWT and Google Sign-In using Firebase Authentication. Managed application state with Redux Toolkit and stored video files efficiently using Supabase Storage. Features include video upload, playback, search, user authentication, and a responsive user interface.",
        image: "/Screenshot 2026-07-16 120007.png",
        liveLink: "https://video-share-x7kf.vercel.app/",
        gitHubLink: "https://github.com/vansh-chauhan01/video-share",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-16 lg:py-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center text-slate-700">
                Projects
            </h2>

            <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-6 sm:gap-8">
                {projects.map((project) => (
                    <div
                        key={project.name}
                        className="w-full sm:w-104 lg:w-115 h-auto rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >
                        {/* Image */}
                        <img
                            src={project.image}
                            alt={project.name}
                            className="mt-5 sm:mt-7 w-full h-48 sm:h-56 lg:h-64 object-cover border-b border-gray-200"
                        />

                        {/* Content */}
                        <div className="p-5 sm:p-6 flex flex-col flex-1">
                            <h3 className="text-xl sm:text-2xl font-semibold text-slate-800">
                                {project.name}
                            </h3>

                            <p className="text-gray-600 leading-6 sm:leading-7 mt-3 sm:mt-4 flex-1 font-medium text-sm sm:text-base">
                                {project.description}
                            </p>

                            {/* Buttons */}
                            <div className="mt-6 sm:mt-8 mb-5 sm:mb-7 flex flex-wrap gap-3 sm:gap-4">
                                <button
                                    onClick={() =>
                                        window.open(project.gitHubLink, "_blank", "noopener,noreferrer")
                                    }
                                    className="flex items-center px-4 sm:px-5 py-2.5 sm:py-3 gap-2 border border-gray-300 rounded-xl hover:bg-gray-100 transition text-sm sm:text-base"
                                >
                                    <GitHubIcon fontSize="small" />GitHub
                                </button>

                                <button
                                    onClick={() =>
                                        window.open(project.liveLink, "_blank", "noopener,noreferrer")
                                    }
                                    className="flex items-center px-4 sm:px-5 py-2.5 sm:py-3 gap-2 bg-black text-white rounded-xl hover:bg-gray-800 transition text-sm sm:text-base"
                                >
                                    <OpenInNewIcon fontSize="small" />Live Demo
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;