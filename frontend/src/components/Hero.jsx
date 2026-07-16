import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Hero = ()=>{
    return (
        <section id = "hero">
            <div className="flex w-full max-w-7xl mx-auto items-center justify-between gap-24 mt-20 px-12">
            <div className="flex flex-col items-start gap-4">
                <p className="text-6xl text-slate-700 font-bold">Hello, I'm</p>
                <p className="text-6xl text-slate-700 font-bold">Vansh Chauhan 👋</p>
                <p className="text-4xl mt-3 text-[oklch(oklch(43.7%_0.078_188.216))] font-bold">A Full Stack Developer</p>
                <p className="text-slate-600 max-w-xl text-lg leading-relaxed mt-3 ">
            I enjoy turning ideas into functional and user-friendly web applications. With a strong foundation in the MERN stack, Data Structure And Algorithms, Object-Oriented Programming, and Database Management Systems, I'm constantly learning, building projects, and sharpening my problem-solving skills.
                </p>
                <div className="flex gap-18 mt-3">
                    <button className="block bg-[#13242C] text-white rounded-full px-4 py-4 transition-transform duration-300 hover:scale-105">
                    Download My Resume
                    </button>
                    <button className="block bg-[#13242C] text-white rounded-full px-4 py-4 transition-transform duration-300 hover:scale-105">
                        Get In Touch
                    </button>
                </div>
                <div className="flex items-center ml-3 gap-10 mt-3">
                    <a href='https://github.com/vansh-chauhan01' target='_blank'>
                        <GitHubIcon fontSize='large'/>
                    </a>
                    <a>
                        <LinkedInIcon fontSize='large'/>
                    </a>
                    <a href='https://mail.google.com/mail/?view=cm&fs=1&to=98vansh98@gmail.com' target='_blank'>
                        
                        <EmailIcon fontSize='large'/>
                    </a>
                </div>
                
            </div>

            <div className="w-100 h-100 rounded-full overflow-hidden flex-shrink-0">
                <img
                src="/1784024760979.png"
                alt="Vansh Chauhan"
                className="w-100 h-100 aspect-square object-cover rounded-full shrink-0  transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl"
                />
            </div>

        </div>
        </section>
    
        
    )
}

export default Hero;