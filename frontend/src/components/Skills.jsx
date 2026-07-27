const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Tailwind css", "Redux tool kit", "Java Script", "CSS3", "React Router"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "typeScript", "WebSockets", "RESTful APIs", "JWT", "Multer"],
    },
    {
      title: "Database",
      skills: ["Postgres SQL", "Prisma", "MongoDB", "Supabase"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub", "Vercel", "Render", "Postman", "Fire Base"],
    },
  ];

  const badgeClasses =
    "inline-flex items-center rounded-xl border border-gray-200 bg-white px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-gray-800 transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm";

  return (
    <section id="Skills" className="max-w-4xl mx-auto px-6 sm:px-8 scroll-mt-24">
      <div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-700 text-center">
          Technical Skills
        </h2>

        {skillCategories.map((category) => (
          <div key={category.title} className="mt-3 mb-6 sm:mb-8">
            <p className="text-lg sm:text-xl lg:text-2xl text mt-4 sm:mt-5">
              {category.title}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
              {category.skills.map((skill) => (
                <span key={skill} className={badgeClasses}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;