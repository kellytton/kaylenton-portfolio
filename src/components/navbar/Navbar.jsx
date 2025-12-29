import { Box, Link } from '@mui/material';

function Navbar() {
  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'CONTACTS', href: '#contacts' },
  ];

  return (
    <Box
      component="nav"
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: { xs: '1.5rem', md: '2rem 3rem' },
        gap: 2,
      }}
    >
      <Box
        sx={{
          flex: 1,
          height: '1px',
          backgroundColor: '#000',
        }}
      />
      <Box
        component="ul"
        sx={{
          display: 'flex',
          listStyle: 'none',
          gap: { xs: 2, md: 4 },
          margin: 0,
          padding: 0,
        }}
      >
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              sx={{
                textDecoration: 'none',
                color: '#000',
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 500,
                fontSize: { xs: '0.875rem', md: '1rem' },
                letterSpacing: '0.05em',
                '&:hover': {
                  opacity: 0.7,
                },
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </Box>
    </Box>
  );
}

export default Navbar;
