import ProjectCard from "../components/ProjectCrad";

const projects = [
  {
    id: 1,
    title: "Chatty",
    desc: "Online chating app for text messages and images.",
    github: "https://github.com/Jaimin1244/realtime-chat-app",
    link: "/notfound",
    tech: ['React', 'Node.js', 'MongoDb', 'Tailwind CSS', 'Socket.io', 'Jwt Auth', 'Lucide Icons', 'React Hot Toast', 'Axios', 'Zustand'],
  },
   {
    id: 2,
    title: "ZenStay",
    desc: "A complete hotel booking and managemt website for both HotelOwners and Customers.",
    github: "https://github.com/Jaimin1244/ZenStay---A-Hotel-Booking-Management-System",
    link: "/notfound",
    tech: ['ASP.NET', 'Entity Framework', 'C#', 'Razor Pages', 'Ajax/jQuery'],
  },
  {
    id: 3,
    title: "Khanban Board",
    desc: "A simple khanban board with the help of TailwindCss and SortableJs.",
    github: "https://github.com/Jaimin1244/kanban-board",
    link: "https://kanban-board-flame-six.vercel.app/",
    tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'Sortable Js'],
  },
  {
    id: 4,
    title: "Saas Landing Page",
    desc: "A simple khanban board with the help of TailwindCss and SortableJs.",
    github: "https://github.com/Jaimin1244/SaasLandingPage",
    link: "https://saas-landing-page-topaz-eight.vercel.app/",
    tech: ['React', 'Tailwind CSS', 'Motion', 'React Icons'],
  },
];

const Projects = (props) => {
  return (
    <section {...props} id="projects" className="max-w-5xl mx-auto space-y-6 text-center px-4">
      <h1 className="text-4xl font-bold">My Projects</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
