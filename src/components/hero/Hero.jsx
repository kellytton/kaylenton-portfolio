import { Box, Typography, Button } from "@mui/material";

function Hero() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: { xs: "2rem 2rem", sm: "3rem 3rem", md: "3rem 5rem", lg: "4rem 8rem" },
        minHeight: "70vh",
      }}
    >
      {/* Title Section */}
      <Box>
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Public Sans", sans-serif',
            fontWeight: 700,
            fontSize: { xs: "3.5rem", sm: "5rem", md: "7rem", lg: "8rem" },
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            color: "#5B4FD9",
          }}
        >
          DATA
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Public Sans", sans-serif',
            fontWeight: 700,
            fontSize: { xs: "3.5rem", sm: "5rem", md: "7rem", lg: "8rem" },
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            color: "#000",
          }}
        >
          SCIENTIST
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Public Sans", sans-serif',
            fontWeight: 700,
            fontSize: { xs: "3.5rem", sm: "5rem", md: "7rem", lg: "8rem" },
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            color: "#000",
          }}
        >
          ANALYST
        </Typography>
      </Box>

      {/* Bottom Section: Buttons + Tagline */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "flex-start" },
          gap: { xs: 4, md: 2 },
          mt: 4,
        }}
      >
        {/* CTA Buttons */}
        <Box sx={{ display: "flex", gap: { xs: 1.5, sm: 2 } }}>
          <Button
            href="https://www.linkedin.com/in/kaylenton/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: "#10C0DF",
              color: "#000",
              fontFamily: '"Public Sans", sans-serif',
              fontWeight: 600,
              fontSize: { xs: "0.875rem", sm: "1rem", md: "1.1rem" },
              padding: {
                xs: "0.6rem 1.5rem",
                sm: "0.7rem 2rem",
                md: "0.8rem 2.5rem",
              },
              borderRadius: "50px",
              border: "1.5px solid #000",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#0ea4bfff",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(91, 192, 190, 0.4)",
              },
            }}
          >
            LinkedIn
          </Button>
          <Button
            href="https://github.com/KaylenTon"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: "#10C0DF",
              color: "#000",
              fontFamily: '"Public Sans", sans-serif',
              fontWeight: 600,
              fontSize: { xs: "0.875rem", sm: "1rem", md: "1.1rem" },
              padding: {
                xs: "0.6rem 1.5rem",
                sm: "0.7rem 2rem",
                md: "0.8rem 2.5rem",
              },
              borderRadius: "50px",
              border: "1.5px solid #000",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#0ea4bfff",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(91, 192, 190, 0.4)",
              },
            }}
          >
            GitHub
          </Button>
        </Box>

        {/* Tagline Section */}
        <Box
          sx={{
            textAlign: { xs: "left", md: "right" },
            // On mobile/tablet, take full width but keep navbar-like spacing
            width: { xs: "calc(100% + 4rem)", md: "auto" },
            mx: { xs: "-2rem", md: 0 },
            px: { xs: "2rem", md: 0 },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "1px",
              backgroundColor: "#000",
              mb: 2,
            }}
          />
          <Typography
            sx={{
              fontFamily: '"Space Mono", monospace',
              fontSize: {
                xs: "1rem",
                sm: "1.25rem",
                md: "clamp(0.9rem, 1.8vw, 1.5rem)",
              },
              lineHeight: 1.5,
              color: "#000",
            }}
          >
            I've always been an observer in this world.
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Space Mono", monospace',
              fontSize: {
                xs: "1rem",
                sm: "1.25rem",
                md: "clamp(0.9rem, 1.8vw, 1.5rem)",
              },
              lineHeight: 1.5,
              color: "#000",
            }}
          >
            I want to mine ⛏️ for answers and insights.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
