
export default function Portfolio() {
  const projects = [
    {
      title: "Aarohan Library",
      desc: "Real-time seat booking mobile app with half/full day slots, live availability, and role-based access.",
      points: [
        "Implemented Firebase Google Authentication for secure user login",
        "Built Firestore-based booking system with real-time seat availability",
        "Developed separate User & Admin panels for booking, management, and cancellations",
        "Integrated Hive for local storage to cache bookings and improve offline performance",
        "Used Cloudinary for image handling and efficient media storage",
      ],
      tech: ["Flutter", "Provider", "Firebase Auth", "Firestore", "Hive", "Cloudinary"],
      link: "https://play.google.com/store/apps/details?id=com.aarohan.aarohanlibrary",
      linkLabel: "View on Play Store",
    },
    {
      title: "Smart Scriber",
      desc: "Subscription and expense tracking app with analytics dashboards (Currently under Play Store testing).",
      points: [
        "Designed advanced analytics screen to track user activity, subscriptions, and spending patterns",
        "Built using BLoC architecture for scalable and maintainable state management",
        "Integrated Firebase Authentication and real-time database for secure data handling",
        "Implemented Cloudinary for image upload and management",
        "Added cached image handling for optimized performance and faster loading",
      ],
      tech: ["Flutter", "BLoC", "Firebase", "Cloudinary", "Cached Images"],
      link: "https://drive.google.com/file/d/136D_hVqvq2x26WplqJzeaayW3n9sslkF/view",
      linkLabel: "View Demo (Drive)",
    },
    {
      title: "Intern Project App",
      desc: "Currently developing a production-level mobile application during internship with cross-functional collaboration.",
      points: [
        "Collaborating with backend developers for API design and integration",
        "Working closely with UI/UX designers to implement pixel-perfect interfaces",
        "Building scalable architecture with clean code practices",
        "Optimizing performance and ensuring smooth user experience",
      ],
      tech: ["Flutter", "APIs", "BLoC"],
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-5 border-b border-gray-800">
        <h1 className="text-xl font-bold">Amitesh Yadav</h1>
        <div className="space-x-4 text-sm">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#experience" className="hover:text-blue-400">Experience</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-20 px-5">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm Amitesh Yadav
        </h2>
        <p className="text-gray-400 text-lg">
          Flutter Developer | Mobile App Specialist
        </p>
        <a
          href="#"
          className="inline-block mt-6 px-6 py-2 bg-blue-500 rounded-xl hover:bg-blue-600 transition"
        >
          Download Resume
        </a>
      </section>

      {/* About */}
      <section id="about" className="px-5 md:px-20 py-16">
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-400 leading-relaxed">
          Flutter Developer with experience in building scalable mobile
          applications using clean architecture and BLoC state management. Skilled
          in Firebase and Supabase integrations, real-time systems, and
          performance optimization. Passionate about creating intuitive UI and
          impactful user experiences.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="px-5 md:px-20 py-16 bg-gray-800">
        <h3 className="text-2xl font-semibold mb-6">Skills</h3>
        <div className="flex flex-wrap gap-4">
          {[
            "Flutter",
            "Dart",
            "BLoC",
            "Firebase",
            "Supabase",
            "JavaScript",
            "TypeScript",
            "Node.js",
            "MongoDB",
            "MySQL",
            "Git",
          ].map((skill) => (
            <span key={skill} className="px-4 py-2 bg-gray-700 rounded-xl text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience (Moved Up) */}
      <section id="experience" className="px-5 md:px-20 py-16 bg-gray-800">
        <h3 className="text-2xl font-semibold mb-6">Experience</h3>
        <div className="bg-gray-900 p-5 rounded-2xl">
          <h4 className="text-lg font-bold">Flutter Developer Intern</h4>
          <p className="text-gray-400 text-sm mb-2">Welldone Healthcare (Startup)</p>
          <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
            <li>Built scalable Flutter app using feature-based architecture</li>
            <li>Implemented BLoC for clean state management</li>
            <li>Collaborated with backend developers for API integration</li>
            <li>Worked with UI/UX designers for better user experience</li>
            <li>Integrated Razorpay payment gateway</li>
            <li>Developed analytics dashboards with chart libraries</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-5 md:px-20 py-16">
        <h3 className="text-2xl font-semibold mb-6">Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-5 rounded-2xl shadow-lg">
              <h4 className="text-lg font-bold mb-2">{project.title}</h4>
              <p className="text-gray-400 text-sm mb-3">{project.desc}</p>
              <ul className="text-gray-400 text-sm mb-3 list-disc list-inside">
                {project.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs bg-gray-700 px-2 py-1 rounded-lg">
                    {t}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm text-blue-400 hover:underline"
                >
                  {project.linkLabel}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="px-5 md:px-20 py-16">
        <h3 className="text-2xl font-semibold mb-4">Education</h3>
        <p className="text-gray-400">
          B.Tech in Computer Science (2023 - 2027) <br />
          IERT Prayagraj | CGPA: 7.1
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="px-5 md:px-20 py-16 bg-gray-800 text-center">
        <h3 className="text-2xl font-semibold mb-4">Contact</h3>
        <p className="text-gray-400">amiteshyadav24042022@gmail.com</p>
        <p className="text-gray-400">+91 9918344513</p>
      </section>

      {/* Footer */}
      <footer className="text-center py-5 border-t border-gray-800 text-gray-500 text-sm">
        © 2026 Amitesh Yadav
      </footer>
    </div>
  );
}
