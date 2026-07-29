import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 text-center">
          Get In Touch
        </h2>

        <div className="w-full max-w-2xl mt-8 sm:mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
            Contact Information
          </h3>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
            Have a project in mind or exploring new opportunities?
            I'd love to hear your ideas and discuss how we can work together.
          </p>

          <div className="mt-6 sm:mt-8 space-y-5 sm:space-y-8">

           
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=98vansh98@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 sm:gap-5 rounded-2xl bg-white p-4 sm:p-5 shadow-sm border border-slate-200 hover:shadow-md transition"
            >
              <div className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <EmailIcon fontSize="medium" />
              </div>
              <div className="min-w-0">
                <p className="text-lg sm:text-xl font-semibold text-slate-800">Email</p>
                <p className="text-blue-600 text-sm sm:text-base break-all">98vansh98@gmail.com</p>
              </div>
            </a>

           
            <a
              href="https://github.com/vansh-chauhan01"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 sm:gap-5 rounded-2xl bg-white p-4 sm:p-5 shadow-sm border border-slate-200 hover:shadow-md transition"
            >
              <div className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                <GitHubIcon />
              </div>
              <div className="min-w-0">
                <p className="text-lg sm:text-xl font-semibold text-slate-800">GitHub</p>
                <p className="text-slate-600 text-sm sm:text-base break-all">https://github.com/vansh-chauhan01</p>
              </div>
            </a>

            
            <a
              href="https://www.linkedin.com/in/vansh-chauhan-aa9227204/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 sm:gap-5 rounded-2xl bg-white p-4 sm:p-5 shadow-sm border border-slate-200 hover:shadow-md transition"
            >
              <div className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                <LinkedInIcon />
              </div>
              <div className="min-w-0">
                <p className="text-lg sm:text-xl font-semibold text-slate-800">LinkedIn</p>
                <p className="text-slate-600 text-sm sm:text-base break-all">@vansh-chauhan-aa9227204</p>
              </div>
            </a>

           
            <a
              href="http://instagram.com/vansh_chauhan69/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 sm:gap-5 rounded-2xl bg-white p-4 sm:p-5 shadow-sm border border-slate-200 hover:shadow-md transition"
            >
              <div className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-pink-100 text-pink-600">
                <InstagramIcon />
              </div>
              <div className="min-w-0">
                <p className="text-lg sm:text-xl font-semibold text-slate-800">Instagram</p>
                <p className="text-slate-600 text-sm sm:text-base break-all">@vansh_chauhan69</p>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
