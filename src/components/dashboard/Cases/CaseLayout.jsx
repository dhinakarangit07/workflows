import React from 'react';
import { Box, CssBaseline, useTheme } from '@mui/material';
import Header from '../partials/Header';
import Footer from '../partials/Footer';

const CaseLayout = ({ children }) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      <CssBaseline />
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          width: '100%',
          position: 'relative',
          zIndex: theme.zIndex.appBar - 2,
        }}
      >
        {children}
        <Footer />
      </Box>
    </Box>
  );
};

export default CaseLayout; 