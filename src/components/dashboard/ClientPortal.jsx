import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Tabs,
  Tab,
  Divider,
} from '@mui/material';
import {
  Person as PersonIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Business as BusinessIcon,
  Description as DescriptionIcon,
  Gavel as GavelIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material';

const ClientPortal = () => {
  const [tabValue, setTabValue] = React.useState(0);

  // Mock data - replace with actual API data later
  const clientInfo = {
    name: 'John Smith',
    company: 'Smith Enterprises',
    email: 'john.smith@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Business Ave, Suite 100, City, State 12345',
    cases: [
      {
        id: 1,
        number: 'CLH-2024-001',
        title: 'Smith vs. State',
        status: 'Active',
        nextHearing: '2024-04-15',
      },
      {
        id: 2,
        number: 'CLH-2024-002',
        title: 'Property Dispute',
        status: 'Pending',
        nextHearing: '2024-04-18',
      },
    ],
    documents: [
      {
        id: 1,
        name: 'Contract Agreement.pdf',
        type: 'PDF',
        size: '2.5 MB',
        uploadedOn: '2024-03-15',
      },
      {
        id: 2,
        name: 'Court Filing.docx',
        type: 'DOCX',
        size: '1.8 MB',
        uploadedOn: '2024-03-20',
      },
    ],
    appointments: [
      {
        id: 1,
        title: 'Case Review Meeting',
        date: '2024-04-10',
        time: '10:00 AM',
        status: 'Scheduled',
      },
      {
        id: 2,
        title: 'Document Review',
        date: '2024-04-12',
        time: '02:00 PM',
        status: 'Pending',
      },
    ],
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const ClientInfo = () => (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Avatar sx={{ width: 64, height: 64, bgcolor: 'primary.main', mr: 2 }}>
            <PersonIcon sx={{ fontSize: 40 }} />
          </Avatar>
          <Box>
            <Typography variant="h5">{clientInfo.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {clientInfo.company}
            </Typography>
          </Box>
        </Box>

        <List>
          <ListItem>
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText
              primary="Address"
              secondary={clientInfo.address}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText
              primary="Email"
              secondary={clientInfo.email}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText
              primary="Phone"
              secondary={clientInfo.phone}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );

  const CasesList = () => (
    <List>
      {clientInfo.cases.map((case_) => (
        <Paper key={case_.id} sx={{ mb: 2 }}>
          <ListItem>
            <ListItemIcon>
              <GavelIcon />
            </ListItemIcon>
            <ListItemText
              primary={case_.title}
              secondary={`Case Number: ${case_.number}`}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Chip
                label={case_.status}
                color={case_.status === 'Active' ? 'success' : 'warning'}
                size="small"
              />
              <Typography variant="caption" color="text.secondary">
                Next Hearing: {case_.nextHearing}
              </Typography>
            </Box>
          </ListItem>
        </Paper>
      ))}
    </List>
  );

  const DocumentsList = () => (
    <List>
      {clientInfo.documents.map((doc) => (
        <Paper key={doc.id} sx={{ mb: 2 }}>
          <ListItem>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText
              primary={doc.name}
              secondary={`Type: ${doc.type} • Size: ${doc.size}`}
            />
            <Typography variant="caption" color="text.secondary">
              Uploaded: {doc.uploadedOn}
            </Typography>
          </ListItem>
        </Paper>
      ))}
    </List>
  );

  const AppointmentsList = () => (
    <List>
      {clientInfo.appointments.map((appointment) => (
        <Paper key={appointment.id} sx={{ mb: 2 }}>
          <ListItem>
            <ListItemIcon>
              <ScheduleIcon />
            </ListItemIcon>
            <ListItemText
              primary={appointment.title}
              secondary={`${appointment.date} at ${appointment.time}`}
            />
            <Chip
              label={appointment.status}
              color={appointment.status === 'Scheduled' ? 'success' : 'warning'}
              size="small"
            />
          </ListItem>
        </Paper>
      ))}
    </List>
  );

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Client Portal
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <ClientInfo />
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              variant="fullWidth"
            >
              <Tab label="Cases" />
              <Tab label="Documents" />
              <Tab label="Appointments" />
            </Tabs>
            <Divider />
            <Box sx={{ p: 2 }}>
              {tabValue === 0 && <CasesList />}
              {tabValue === 1 && <DocumentsList />}
              {tabValue === 2 && <AppointmentsList />}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ClientPortal; 