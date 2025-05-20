import ProjectCard from "../components/ProjectCrad";

const projects = [
  {
    id: 1,
    title: "Realtime Chat App",
    desc: "Online chating app for text messages and images.",
    link: "https://github.com/Jaimin1244/realtime-chat-app",
  },
  {
    id: 2,
    title: "Khanban Board",
    desc: "A simple khanban board with the help of TailwindCss and SortableJs.",
    link: "https://kanban-board-flame-six.vercel.app/",
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
