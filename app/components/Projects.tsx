const Projects = () => {
  const projects = [
    {
      title: 'Home Network Setup',
      description: 'Designed and implemented a secure home network with VLANs, firewall, and NAS.',
      technologies: ['pfSense', 'Ubiquiti UniFi', 'FreeNAS'],
    },
    {
      title: 'Automated Backup System',
      description: 'Created a Python script for automated backups of critical systems to cloud storage.',
      technologies: ['Python', 'AWS S3', 'Cron'],
    },
    {
      title: 'IT Helpdesk Ticketing System',
      description: 'Implemented and customized an open-source ticketing system for a small business.',
      technologies: ['osTicket', 'PHP', 'MySQL'],
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-6 bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="mb-2">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span key={techIndex} className="bg-green-500 text-black px-2 py-1 rounded text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;