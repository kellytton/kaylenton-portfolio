import { Box, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import projectsData from "../../data/projects.json";

function Projects() {
  return (
    <Box
      component="section"
      id="projects"
      sx={{
        padding: {
          xs: "6rem 2rem",
          sm: "8rem 3rem",
          md: "10rem 5rem",
          lg: "12rem 8rem",
        },
      }}
    >
      {/* Section Header */}
      <Typography
        variant="h2"
        sx={{
          fontFamily: '"Public Sans", sans-serif',
          fontWeight: 700,
          fontStyle: "italic",
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
          color: "#000",
          mb: 5,
        }}
      >
        PROJECTS
      </Typography>

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
