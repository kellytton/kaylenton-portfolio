import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ProjectCard from "./ProjectCard";
import projectsData from "../../data/projects.json";

const INITIAL_PROJECTS_COUNT = 3;

function Projects() {
  const [expanded, setExpanded] = useState(false);
  const hasMoreProjects = projectsData.length > INITIAL_PROJECTS_COUNT;
  const visibleProjects = expanded
    ? projectsData
    : projectsData.slice(0, INITIAL_PROJECTS_COUNT);

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
          gap: { xs: 12, sm: 16, md: 20, lg: 24 },
        }}
      >
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Box>

      {/* Show More / Show Less Button */}
      {hasMoreProjects && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: { xs: 8, sm: 10, md: 12 },
          }}
        >
          <Button
            onClick={() => setExpanded(!expanded)}
            endIcon={expanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            sx={{
              backgroundColor: "transparent",
              color: "#000",
              fontFamily: '"Space Mono", monospace',
              fontSize: { xs: "0.875rem", sm: "1rem" },
              padding: "0.75rem 2rem",
              borderRadius: "50px",
              border: "1.5px solid #000",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "rgba(16, 192, 223, 0.1)",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(91, 192, 190, 0.2)",
              },
            }}
          >
            {expanded
              ? "Show Less"
              : `Show ${projectsData.length - INITIAL_PROJECTS_COUNT} More`}
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default Projects;
