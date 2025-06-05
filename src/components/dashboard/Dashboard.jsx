import React, { useState } from 'react';
import { Box, CssBaseline, useTheme, useMediaQuery } from '@mui/material';
import Header from './partials/Header';
import Footer from './partials/Footer';
import DashboardStats from './DashboardStats';
import ClientPortalBanner from './ClientPortalBanner';
import CourtDetails from './CourtDetails';

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      <CssBaseline />
      <Header onMobileMenuClick={handleDrawerToggle} />
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
        <DashboardStats />
        <ClientPortalBanner />
        <CourtDetails />
        <Footer />
      </Box>
    </Box>
  );
};

export default Dashboard;