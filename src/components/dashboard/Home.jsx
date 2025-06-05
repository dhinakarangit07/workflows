import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  Alert,
} from '@mui/material';
import {
  Gavel as GavelIcon,
  EventNote as EventNoteIcon,
  AccountBalance as AccountBalanceIcon,
  People as PeopleIcon,
} from '@mui/icons-material';

const StatCard = ({ title, value, description, icon: Icon }) => (
  <Card>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Icon sx={{ color: 'primary.main', mr: 1 }} />
        <Typography variant="h6" color="text.secondary">
          {title}
        </Typography>
      </Box>
      <Typography variant="h4" component="div" sx={{ mb: 1 }}>
        {value}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const Home = () => {
  // Mock data - replace with actual API data later
  const stats = [
    {
      title: 'Active Cases',
      value: '156',
      description: '12 new cases this month',
      icon: GavelIcon,
    },
    {
      title: 'Upcoming Hearings',
      value: '23',
      description: 'Next 7 days',
      icon: EventNoteIcon,
    },
    {
      title: 'Court Updates',
      value: '8',
      description: 'Recent notifications',
      icon: AccountBalanceIcon,
    },
    {
      title: 'Client Meetings',
      value: '15',
      description: 'Scheduled this week',
      icon: PeopleIcon,
    },
  ];

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Dashboard Overview
      </Typography>

      <Alert severity="info" sx={{ mb: 4 }}>
        Welcome to CLH Legal Management System. You have 3 important case updates pending review.
      </Alert>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
            <StatCard {...stat} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Recent Activities
            </Typography>
            <Typography variant="body2" color="text.secondary">
              • New case file uploaded for Smith vs. State<br />
              • Court hearing scheduled for Johnson's case<br />
              • Document review completed for Corporate Matter #45<br />
              • Client meeting summary added for ABC Corp
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Quick Links
            </Typography>
            <Typography variant="body2" color="text.secondary">
              • View Important Cases<br />
              • Check Today's Cause List<br />
              • Access Client Portal<br />
              • Update Court Details
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home; 