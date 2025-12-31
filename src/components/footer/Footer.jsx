import { Box, Typography, Link } from "@mui/material";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      id="contacts"
      sx={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top section with divider - no gradient */}
      <Box
        sx={{
          padding: {
            xs: "4rem 2rem 0",
            sm: "5rem 3rem 0",
            md: "6rem 5rem 0",
            lg: "8rem 8rem 0",
          },
        }}
      >
        {/* Top divider line */}
        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "#000",
          }}
        />
      </Box>

      {/* Gradient background - covers entire footer including above divider */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `
            linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.3) 15%, transparent 30%),
            radial-gradient(ellipse 80% 120% at 10% 90%, rgba(16, 192, 223, 0.28) 0%, transparent 55%),
            radial-gradient(ellipse 60% 80% at 90% 40%, rgba(91, 79, 217, 0.32) 0%, transparent 50%),
            radial-gradient(ellipse 100% 60% at 50% 100%, rgba(125, 253, 204, 0.25) 0%, transparent 45%),
            radial-gradient(ellipse 50% 70% at 70% 80%, rgba(16, 192, 223, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse 70% 50% at 20% 50%, rgba(91, 79, 217, 0.18) 0%, transparent 55%),
            radial-gradient(ellipse 40% 90% at 85% 90%, rgba(125, 253, 204, 0.2) 0%, transparent 50%)
          `,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Footer content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          padding: {
            xs: "2rem 2rem 4rem",
            sm: "2rem 3rem 5rem",
            md: "2rem 5rem 6rem",
            lg: "2rem 8rem 8rem",
          },
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
              href="/assets/resume.pdf"
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
