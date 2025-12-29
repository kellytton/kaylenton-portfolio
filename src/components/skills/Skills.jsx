import { Box, Typography } from "@mui/material";

const skillsData = {
  dataProcessing: {
    title: "DATA PROCESSING",
    wordCount: 2,
    items: [
      "Git, GitHub",
      "Web scraping",
      "Data wrangling",
      "Predictive analytics",
      "Machine learning",
      "Statistical modeling",
      "Data & text mining",
      "Data visualization",
    ],
  },
  technologies: {
    title: "TECHNOLOGIES",
    wordCount: 1,
    items: [
      { label: "R", value: "RStudio" },
      { label: "Wrangling", value: "tidyverse" },
      { label: "SQL", value: "PostgreSQL, Access" },
      { label: "Visualization", value: "ggplot2, Tableau" },
    ],
  },
  miscellaneous: {
    title: "MISCELLANEOUS",
    wordCount: 1,
    items: [
      "Graphic design (Adobe, Canva)",
      "SEO",
      "Technical & creative writing",
    ],
  },
};

// Section header style (bold - for "SKILLS" header)
const sectionHeaderStyles = {
  fontFamily: '"Public Sans", sans-serif',
  fontWeight: 700,
  fontStyle: "italic",
  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
  color: "#000",
  mb: 5,
};

// Category title styles (semi-bold - for DATA PROCESSING, TECHNOLOGIES, etc.)
const getCategoryTitleStyles = (maxLines) => ({
  fontFamily: '"Public Sans", sans-serif',
  fontWeight: 600,
  fontStyle: "italic",
  fontSize: {
    xs: maxLines === 1 ? "clamp(1.25rem, 8vw, 2rem)" : "clamp(1.5rem, 6vw, 2rem)",
    sm: "2.5rem",
    md: "3rem",
    lg: "3.5rem",
  },
  color: "#000",
  mb: 3,
  // Ensure text doesn't exceed max lines
  whiteSpace: maxLines === 1 ? "nowrap" : "normal",
});

const itemTextStyles = {
  fontFamily: '"Space Mono", monospace',
  fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem", lg: "1.25rem" },
  color: "#000",
  wordBreak: "break-word",
};

function Skills() {
  return (
    <Box
      component="section"
      id="skills"
      sx={{
        padding: {
          xs: "5rem 2rem",
          sm: "6rem 3rem",
          md: "8rem 5rem",
          lg: "10rem 8rem",
        },
        overflowX: "hidden",
      }}
    >
      {/* Section Header */}
      <Typography variant="h2" sx={sectionHeaderStyles}>
        SKILLS
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 5, md: 8 },
          maxWidth: "100%",
        }}
      >
        {/* Left Column: Data Processing + Miscellaneous */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
            minWidth: 0,
          }}
        >
          {/* Data Processing */}
          <Box>
            <Typography
              variant="h3"
              sx={getCategoryTitleStyles(skillsData.dataProcessing.wordCount)}
            >
              {skillsData.dataProcessing.title}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              {skillsData.dataProcessing.items.map((item) => (
                <Typography key={item} sx={itemTextStyles}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Miscellaneous */}
          <Box>
            <Typography
              variant="h3"
              sx={getCategoryTitleStyles(skillsData.miscellaneous.wordCount)}
            >
              {skillsData.miscellaneous.title}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              {skillsData.miscellaneous.items.map((item) => (
                <Typography key={item} sx={itemTextStyles}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Right Column: Technologies */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "flex-start", md: "flex-end" },
            minWidth: 0,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              ...getCategoryTitleStyles(skillsData.technologies.wordCount),
              textAlign: { xs: "left", md: "right" },
            }}
          >
            {skillsData.technologies.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
              textAlign: { xs: "left", md: "right" },
            }}
          >
            {skillsData.technologies.items.map((item) => (
              <Typography key={item.label} sx={itemTextStyles}>
                {item.label} | {item.value}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Skills;
