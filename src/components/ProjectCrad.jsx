import { ExternalLink } from 'lucide-react'

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-xl border border-neutral-800 bg-base-200 shadow-md p-4 space-y-2">
      <h2 className="text-lg font-semibold text-primary">{project.title}</h2>
      <p className="text-sm text-neutral-400">{project.desc}</p>

      {/* Technology Badges */}
      <div className="flex flex-wrap gap-2">
        {project.tech?.map((tech, index) => (
          <span
            key={index}
            className="badge badge-outline text-xs px-2 py-1 rounded-md border border-primary text-primary"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center pt-2">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-outline"
        >
          Source Code <ExternalLink size={16} />
        </a>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-outline"
        >
          Live Demo <ExternalLink size={16} />
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
