import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
    return (
        <section id="hero" className='scroll-mt-24'>
            <div className="flex flex-col-reverse lg:flex-row w-full max-w-7xl mx-auto items-center justify-between gap-10 lg:gap-24 mt-10 lg:mt-20 px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col items-start gap-4 w-full lg:w-auto">
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-700 font-bold">
                        Hello, I'm
                    </p>
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-700 font-bold">
                        Vansh Chauhan 👋
                    </p>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-3 font-bold">
                        A{" "}
                        <Typewriter
                            words={[
                                "Full Stack Developer",
                                "Competitive Programming Enthusiast",
                            ]}
                            cursor={false}
                            loop={0}
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                        <span className="animate-pulse font-medium">|</span>
                    </p>
                    <p className="text-slate-600 max-w-xl text-base sm:text-lg leading-relaxed mt-3">
                        I enjoy turning ideas into functional and user-friendly web applications. With a strong foundation in the MERN stack, Data Structure And Algorithms, Object-Oriented Programming, and Database Management Systems, I'm constantly learning, building projects, and sharpening my problem-solving skills.
                    </p>
                    <div className="flex flex-wrap gap-4 sm:gap-8 lg:gap-18 mt-3">
                        <button className="block bg-[#13242C] text-white rounded-full px-4 py-4 transition-transform duration-300 hover:scale-105">
                            Download My Resume
                        </button>
                        <a href="#contact">
                            <button className="block bg-[#13242C] text-white rounded-full px-4 py-4 transition-transform duration-300 hover:scale-105">
                                Get In Touch
                            </button>
                        </a>
                    </div>
                    <div className="flex items-center ml-1 sm:ml-3 gap-6 sm:gap-10 mt-3">
                        <a href='https://github.com/vansh-chauhan01' target='_blank'>
                            <GitHubIcon fontSize='large' />
                        </a>
                        <a href='https://www.linkedin.com/in/vansh-chauhan-aa9227204/' target='blank'>
                            <LinkedInIcon fontSize='large' />
                        </a>
                        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=98vansh98@gmail.com' target='_blank'>
                            <EmailIcon fontSize='large' />
                        </a>
                    </div>
                </div>

                <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-100 lg:h-100 rounded-full overflow-hidden flex-shrink-0">
                    <img
                        src="\IMG_20260727_141906.png"
                        alt="Vansh Chauhan"
                        className="w-48 h-48 sm:w-64 sm:h-64 lg:w-100 lg:h-100 aspect-square object-cover rounded-full shrink-0 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;