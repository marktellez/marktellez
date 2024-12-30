export default function Home() {
  const currentWork = {
    title: "VoxBird AI",
    url: "https://voxbird.ai",
    description: "Building and coding advanced AI voice models and ML pipelines. Writing code daily for dataset curation, model training, and production systems.",
    tags: ["Machine Learning", "AI Models", "Data Engineering"]
  };

  const archivedWork = [
    {
      title: "DevmentorLive",
      url: "https://devmentor.live",
      description: "Developed and coded a complete mentorship platform from scratch. Built the entire stack while helping developers master modern tech through hands-on coding sessions.",
      tags: ["Full Stack", "Education", "Tech Mentoring"]
    },
    {
      title: "Codementor",
      url: "https://www.codementor.io/@marktellez",
      description: "Top-rated mentor with over 500 five-star reviews and 3000+ live coding sessions. Helped developers solve complex programming challenges across multiple languages and frameworks.",
      tags: ["Programming", "Mentoring", "Problem Solving"]
    }
  ];

  const expertise = [
    {
      area: "AI & ML",
      skills: ["Model Development", "ML Systems", "Data Pipeline Code"]
    },
    {
      area: "Programming",
      skills: ["Functional Programming", "LISP", "JavaScript", "Python"]
    },
    {
      area: "Engineering",
      skills: ["10x Developer", "System Architecture", "Clean Code"]
    }
  ];

  const highlights = [
    "Hands-on programmer since 1997, coding daily across all roles",
    "Expert in functional programming and LISP principles",
    "10x developer known for elegant, efficient solutions",
    "Building ML systems and coding AI pipelines since 2021",
    "Creator and lead developer of VoxBird AI technology"
  ];

  return (
    <div className="min-h-screen">
      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center space-y-8 p-8 max-w-3xl mx-auto">
          <div className="mx-auto w-32 h-32 mb-8 overflow-hidden rounded-full border-2 border-white/20">
            <img
              src="/marktellez.jpg"
              alt="Mark Tellez"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-6xl font-bold tracking-tight">Mark Tellez</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            10x developer and autodidact, writing code daily since 1997.
            From LISP to machine learning, building elegant solutions at VoxBird.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/marktellez"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-all"
            >
              GitHub
            </a>
            <a
              href="mailto:mark@devmentor.live"
              className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-8 py-16 space-y-24">
        <section>
          <h2 className="text-2xl font-bold mb-12">VoxBird AI</h2>
          <div className="space-y-4">
            <a
              href={currentWork.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <p className="text-white/80 text-lg mb-4">
                {currentWork.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {currentWork.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-12">Experience</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {expertise.map(({ area, skills }) => (
              <div key={area} className="space-y-4">
                <h3 className="text-lg font-semibold">{area}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-12">Highlights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center space-x-4">
                <span className="text-white/20">•</span>
                <p>{highlight}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-12">Archived Projects</h2>
          <div className="space-y-8">
            {archivedWork.map((work) => (
              <a
                key={work.title}
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <h3 className="text-xl font-bold mb-4 group-hover:text-sky-300">
                  {work.title}
                </h3>
                <p className="text-white/60">
                  {work.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {work.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
          <p className="text-white/80 mb-8">
            Currently focused full-time on AI voice technology at VoxBird.
            Feel free to reach out for AI and ML discussions or speaking opportunities.
          </p>
          <a
            href="mailto:mark@devmentor.live"
            className="inline-block px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-all"
          >
            Email Me
          </a>
        </section>
      </main>

      <footer className="border-t border-white/10 mt-16">
        <div className="max-w-4xl mx-auto px-8 py-8 text-center text-white/60">
          <p>© {new Date().getFullYear()} Mark Tellez</p>
        </div>
      </footer>
    </div>
  );
}
