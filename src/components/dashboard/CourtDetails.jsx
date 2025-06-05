import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

const tableHeaders = [
  'State',
  'District',
  'Court Complex',
  'Establishment',
  'Advocate Name',
  'State Code',
  'Bar Code',
  'Year',
  'Last Sync',
  'Status',
];

const CourtDetails = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    state: '',
    district: '',
    courtComplex: '',
    advocateName: '',
    stateCode: '',
    barCode: '',
    year: '',
    cnr: '',
    importDecidedCases: false,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'importDecidedCases' ? checked : value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log(formData);
    handleClose();
  };

  return (
    <Box>
      <Typography
        variant="h6"
        sx={{
          mb: 3,
          fontWeight: 600,
          color: 'text.primary',
          textTransform: 'uppercase',
        }}
      >
        COURT DETAILS
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Free yourself from the hassle of adding cases manually. Provide your practicing court details
          and the cases will be fetched automatically from e-court as and when they are registered.
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 3 }}>
          Note: This feature is available from BASIC plan and above.
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
          sx={{ mb: 3 }}
        >
          Add Now
        </Button>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {tableHeaders.map((header) => (
                  <TableCell key={header}>{header}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Add table rows here when data is available */}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Add District Court Details</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="District"
                name="district"
                value={formData.district}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Court Complex"
                name="courtComplex"
                value={formData.courtComplex}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Advocate Name"
                name="advocateName"
                value={formData.advocateName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="State Code"
                name="stateCode"
                placeholder="e.g. MAH"
                value={formData.stateCode}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Bar Code"
                name="barCode"
                value={formData.barCode}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Year"
                name="year"
                placeholder="yyyy"
                value={formData.year}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="CNR"
                name="cnr"
                value={formData.cnr}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.importDecidedCases}
                    onChange={handleChange}
                    name="importDecidedCases"
                  />
                }
                label="Import decided cases"
              />
            </Grid>
          </Grid>
          <Typography
            variant="body2"
            color="warning.main"
            sx={{ mt: 2, backgroundColor: 'warning.lighter', p: 2, borderRadius: 1 }}
          >
            Cases get synced automatically every 3 hrs. Please wait for at least 3 hours for the cases
            to get added. For any queries, please contact support on +91 963638 24223
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            Save Details
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CourtDetails; 