import { Box } from "@mui/material";
import ProjectCard from "./ProjectCard";
import projectsData from "../../data/projects.json";

function Projects() {
  return (
    <Box
      component="section"
      id="projects"
      sx={{
        padding: {
          xs: "4rem 1.5rem",
          md: "6rem 3rem",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 8, md: 12 },
        }}
      >
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Box>
    </Box>
  );
}

export default Projects;
