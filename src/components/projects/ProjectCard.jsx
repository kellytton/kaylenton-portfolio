import { useState } from "react";
import { Box, Typography, IconButton, Link } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function ProjectCard({ project }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === project.slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? project.slides.length - 1 : prev - 1
    );
  };

  // Dynamically import slide images
  const getSlideUrl = (slideName) => {
    return `/src/assets/projects/${project.id}/${slideName}`;
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: { xs: 4, md: 10, lg: 14 },
        alignItems: "start",
      }}
    >
      {/* Left: Slideshow */}
      <Box>
        {/* Slides Container */}
        <Box
          sx={{
            position: "relative",
            backgroundColor: "#d9d9d9",
            aspectRatio: "16/9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Background decorative box */}
          <Box
            sx={{
              position: "absolute",
              top: "-10px",
              right: "-10px",
              width: "60%",
              height: "40%",
              backgroundColor: "#666",
              zIndex: 0,
            }}
          />

          {/* Main slide */}
          <Box
            component="img"
            src={getSlideUrl(project.slides[currentSlide])}
            alt={`${project.name} slide ${currentSlide + 1}`}
            sx={{
              position: "relative",
              zIndex: 1,
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />

          {/* Navigation arrow */}
          {project.slides.length > 1 && (
            <IconButton
              onClick={nextSlide}
              sx={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                color: "#fff",
                backgroundColor: "rgba(0,0,0,0.3)",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.5)",
                },
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          )}

          {project.slides.length > 1 && (
            <IconButton
              onClick={prevSlide}
              sx={{
                position: "absolute",
                left: 8,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                color: "#fff",
                backgroundColor: "rgba(0,0,0,0.3)",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.5)",
                },
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
          )}
        </Box>

        {/* Caption */}
        <Typography
          sx={{
            fontFamily: '"Space Mono", monospace',
            fontSize: { xs: "0.875rem", md: "1rem" },
            color: "#000",
            mt: 2,
            textAlign: "right",
          }}
        >
          Did I mention I am a Certified Microsoft Office Specialist? You can
          count on me for PowerPoint skills.
        </Typography>
      </Box>

      {/* Right: Project Info */}
      <Box sx={{ mt: { xs: 0, md: "-5rem" } }}>
        {/* Project Name */}
        <Typography
          variant="h3"
          sx={{
            fontFamily: '"Public Sans", sans-serif',
            fontWeight: 600,
            fontStyle: "italic",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
            color: "#000",
            mb: 2,
          }}
        >
          {project.name}
        </Typography>

        {/* Skills */}
        <Box sx={{ mb: 1 }}>
          <Typography
            component="span"
            sx={{
              fontFamily: '"Public Sans", sans-serif',
              fontWeight: 700,
              fontSize: { xs: "0.875rem", md: "1rem" },
              color: "#000",
            }}
          >
            DEMONSTRATED SKILLS:
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Space Mono", monospace',
              fontSize: { xs: "0.875rem", md: "1rem" },
              color: "#000",
            }}
          >
            {project.skills.join(" | ")}
          </Typography>
        </Box>

        {/* Packages (if any) */}
        {project.packages && project.packages.length > 0 && (
          <Box sx={{ mb: 2 }}>
            <Typography
              component="span"
              sx={{
                fontFamily: '"Public Sans", sans-serif',
                fontWeight: 700,
                fontSize: { xs: "0.875rem", md: "1rem" },
                color: "#000",
              }}
            >
              PACKAGES:
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Space Mono", monospace',
                fontSize: { xs: "0.875rem", md: "1rem" },
                color: "#000",
              }}
            >
              {project.packages.join(" | ")}
            </Typography>
          </Box>
        )}

        {/* Description */}
        <Typography
          sx={{
            fontFamily: '"Space Mono", monospace',
            fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
            color: "#000",
            lineHeight: 1.6,
            mb: 5,
            mt: 2,
            textAlign: "justify",
          }}
        >
          {project.description}
        </Typography>

        {/* Links */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            fontFamily: '"Space Mono", monospace',
            fontSize: { xs: "0.75rem", sm: "0.875rem" },
            textAlign: { xs: "left", md: "right" },
          }}
        >
          {project.githubUrl && (
            <Typography
              sx={{
                fontFamily: '"Space Mono", monospace',
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
              }}
            >
              FOR THE .README AND FILES →{" "}
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#000",
                  textDecoration: "underline",
                  fontWeight: 500,
                  transition: "color 0.2s, font-weight 0.2s",
                  "&:hover": {
                    color: "#0ea4bf",
                    fontWeight: 700,
                  },
                }}
              >
                MY GITHUB REPOSITORY
              </Link>
            </Typography>
          )}
          {project.blogUrl && (
            <Typography
              sx={{
                fontFamily: '"Space Mono", monospace',
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
              }}
            >
              FOR A CODE WALKTHROUGH →{" "}
              <Link
                href={project.blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#000",
                  textDecoration: "underline",
                  fontWeight: 500,
                  transition: "color 0.2s, font-weight 0.2s",
                  "&:hover": {
                    color: "#0ea4bf",
                    fontWeight: 700,
                  },
                }}
              >
                MY SUBSTACK BLOG POST
              </Link>
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectCard;
