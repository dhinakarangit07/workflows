import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';

const statItems = [
  {
    title: 'Running Cases',
    count: 1,
    description: 'You have 1 running case scheduled for today.',
  },
  {
    title: "Today's Cases",
    count: 0,
    description: 'You have no cases scheduled for today.',
  },
  {
    title: "Tomorrow's Cases",
    count: 0,
    description: 'You have no cases scheduled for tomorrow.',
  },
  {
    title: 'Decided Cases',
    count: 0,
    description: 'You have no decided cases.',
  },
];

const DashboardStats = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h6"
        sx={{
          mb: 3,
          fontWeight: 600,
          color: 'text.primary',
          textTransform: 'uppercase',
        }}
      >
        RUNNING CASES
      </Typography>
      <Grid container spacing={3}>
        {statItems.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.title}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: '100%',
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                borderTop: 4,
                borderTopColor: 'primary.main',
              }}
            >
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ mb: 1, fontWeight: 500 }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="h3"
                sx={{ mb: 1, fontWeight: 600 }}
                color="text.primary"
              >
                {item.count}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DashboardStats; 