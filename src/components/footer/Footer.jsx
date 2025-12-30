import { Box, Typography, Link } from "@mui/material";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      id="contacts"
      sx={{
        padding: {
          xs: "4rem 2rem",
          sm: "5rem 3rem",
          md: "6rem 5rem",
          lg: "8rem 8rem",
        },
      }}
    >
      {/* Top divider line */}
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "#000",
          mb: 4,
        }}
      />

      {/* Footer content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "flex-end" },
          gap: { xs: 4, md: 2 },
        }}
      >
        {/* Left: Contact info */}
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Public Sans", sans-serif',
              fontWeight: 500,
              fontStyle: "italic",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
              color: "#000",
              mb: 2,
            }}
          >
            LET'S CONNECT
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Link
              href="mailto:kaylent2k@gmail.com"
              sx={{
                fontFamily: '"Space Mono", monospace',
                fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
                color: "#000",
                textDecoration: "none",
                transition: "color 0.2s",
                "&:hover": {
                  color: "#0ea4bf",
                },
              }}
            >
              kaylent2k@gmail.com
            </Link>
            <Link
              href="https://www.linkedin.com/in/kaylenton/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontFamily: '"Space Mono", monospace',
                fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
                color: "#000",
                textDecoration: "none",
                transition: "color 0.2s",
                "&:hover": {
                  color: "#0ea4bf",
                },
              }}
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/KaylenTon"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontFamily: '"Space Mono", monospace',
                fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
                color: "#000",
                textDecoration: "none",
                transition: "color 0.2s",
                "&:hover": {
                  color: "#0ea4bf",
                },
              }}
            >
              GitHub
            </Link>
            <Link
              href="/src/assets/resume.pdf"
              download
              sx={{
                fontFamily: '"Space Mono", monospace',
                fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
                color: "#000",
                textDecoration: "none",
                transition: "color 0.2s",
                "&:hover": {
                  color: "#0ea4bf",
                },
              }}
            >
              Resume
            </Link>
          </Box>
        </Box>

        {/* Right: Copyright */}
        <Typography
          sx={{
            fontFamily: '"Public Sans", monospace',
            fontSize: { xs: "0.75rem", sm: "0.875rem" },
            color: "#000",
            textAlign: { xs: "left", md: "right" },
          }}
        >
          © {currentYear} Kaylen Ton. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
