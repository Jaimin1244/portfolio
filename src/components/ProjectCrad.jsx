import { ExternalLink } from 'lucide-react'
import React, { useState } from 'react'

const ProjectCrad = ({project}) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="rounded-xl border border-neutral-800 bg-base-200 shadow-md p-4 space-y-2">
        <h2 className="text-lg font-semibold text-primary">{project.title}</h2>
        <p className="text-sm text-neutral-400">{project.desc}</p>
        <div className="flex justify-between items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="btn btn-sm btn-outline"
          >
            Preview
          </button>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline"
          >
            View <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-base-100 rounded-xl p-4 w-[90%] h-[90%] relative">
            <button
              onClick={() => setIsOpen(false)}
              className="btn btn-sm btn-circle absolute top-4 right-4"
            >
              ✕
            </button>
            <iframe
              src={project.link}
              title={project.title}
              className="w-full h-full rounded-md border border-neutral-700"
            ></iframe>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectCrad