import { Box, Typography, Chip, useMediaQuery, useTheme } from "@mui/material";

function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const chips = [
    {
      label: isMobile ? "B.S. in Information Science" : "Bachelor of Science in Information Science",
    },
    { label: "Tampa, FL" },
    { label: "Social Media Strategist Award" },
  ];
  return (
    <Box
      component="section"
      id="about"
      sx={{
        padding: {
          xs: "6rem 2rem",
          sm: "8rem 3rem",
          md: "10rem 5rem",
          lg: "12rem 8rem",
        },
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 4, md: 10, lg: 14 },
          alignItems: "start",
        }}
      >
        {/* Left: About Content */}
        <Box sx={{ mt: { xs: 0, md: "-3rem" } }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Public Sans", sans-serif',
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
              color: "#000",
              mb: 3,
            }}
          >
            ABOUT
          </Typography>

          <Typography
            sx={{
              fontFamily: '"Space Mono", monospace',
              fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
              color: "#000",
              lineHeight: 1.8,
              mb: 2,
            }}
          >
            Hi, I'm Kaylen Ton. I'm an information science student, concentrated
            in data science and analytics, set to graduate in the summer of
            2026.
          </Typography>

          <Typography
            sx={{
              fontFamily: '"Space Mono", monospace',
              fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
              color: "#000",
              lineHeight: 1.8,
              mb: 3,
            }}
          >
            I am driven by my curiosity and willingness to work with real, raw
            data. Super raw. Ugly raw. I turn data into information and
            information into valuable, actionable insights.
          </Typography>

          {/* Glass Morphism Chips */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
            {chips.map((chip) => (
              <Chip
                key={chip.label}
                label={chip.label}
                sx={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: { xs: "0.75rem", sm: "0.875rem" },
                  color: "#000",
                  background: "rgba(255, 255, 255, 0.25)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "20px",
                  py: 0.5,
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Right: Image */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
          }}
        >
          <Box
            component="img"
            src="/src/assets/about/about-img.jpg"
            alt="Kaylen Ton"
            sx={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default About;
