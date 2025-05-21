import React from 'react'

const Technologies = (props) => {

  const skills = [
    "React", "ASP.NET MVC", "SQL Server", "Node.js", "Tailwind CSS", "Bootstrap", "Entity Framework", "Postman"
  ];

  return (
    <section {...props} id="technologies" className="max-w-4xl mx-auto my-10 text-center space-y-6">
      <h2 className="text-3xl font-bold">Technologies I Work With</h2>
      <p className="text-gray-400">Here are some of the tools and technologies I use regularly:</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-white">
        {skills.map((skill) => {
          return (
            <div className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">{skill}</div>
          );
        })}
      </div>
    </section>
  )
}

export default Technologies