import React from 'react';
import { Paper, Typography, Link } from '@mui/material';
import { Info as InfoIcon } from '@mui/icons-material';

const ClientPortalBanner = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        mb: 4,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        backgroundColor: 'info.lighter',
        border: '1px solid',
        borderColor: 'info.light',
        borderRadius: 1,
      }}
    >
      <InfoIcon color="info" />
      <Typography color="info.dark">
        The Client Portal is now live! Share it with your clients to provide them with 24/7 access to their case information.{' '}
        <Link href="#" underline="hover" color="info.dark" sx={{ fontWeight: 500 }}>
          Learn more
        </Link>
      </Typography>
    </Paper>
  );
};

export default ClientPortalBanner; 