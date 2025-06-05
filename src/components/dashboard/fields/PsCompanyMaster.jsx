import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Chip,
  Grid,
  Tooltip,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
} from '@mui/icons-material';

// Mock data - replace with API call
const mockCompanies = [
  {
    id: 1,
    name: 'Swift Process Servers',
    contactPerson: 'Michael Brown',
    phone: '+1 234-567-8901',
    email: 'contact@swiftprocess.com',
    address: '789 Service Road, Chicago, IL 60601',
    status: 'Active',
    jurisdiction: 'Illinois',
  },
  {
    id: 2,
    name: 'Legal Process Solutions',
    contactPerson: 'Sarah Wilson',
    phone: '+1 234-567-8902',
    email: 'info@legalprocess.com',
    address: '456 Court Street, New York, NY 10001',
    status: 'Active',
    jurisdiction: 'New York',
  },
  // Add more mock data as needed
];

const PsCompanyMaster = () => {
  const [companies, setCompanies] = useState(mockCompanies);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);
  const [editingCompany, setEditingCompany] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    contactPerson: '',
    phone: '',
    email: '',
    address: '',
    status: 'Active',
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
  };

  const handleOpen = (company = null) => {
    if (company) {
      setEditingCompany(company);
      setFormData({
        name: company.name,
        contactPerson: company.contactPerson,
        phone: company.phone,
        email: company.email,
        address: company.address,
        status: company.status,
      });
    } else {
      setEditingCompany(null);
      setFormData({
        name: '',
        contactPerson: '',
        phone: '',
        email: '',
        address: '',
        status: 'Active',
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingCompany(null);
    setFormData({
      name: '',
      contactPerson: '',
      phone: '',
      email: '',
      address: '',
      status: 'Active',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCompany) {
      // Update existing company
      setCompanies((prev) =>
        prev.map((company) =>
          company.id === editingCompany.id
            ? { ...company, ...formData }
            : company
        )
      );
    } else {
      // Add new company
      const newCompany = {
        id: companies.length + 1,
        ...formData,
      };
      setCompanies((prev) => [...prev, newCompany]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setCompanies((prev) => prev.filter((company) => company.id !== id));
  };

  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchTerm) ||
      company.contactPerson.toLowerCase().includes(searchTerm) ||
      company.jurisdiction.toLowerCase().includes(searchTerm)
  );

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h4">
          Process Server Companies
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpen()}
        >
          Add Company
        </Button>
      </Box>

      <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
        <TextField
          size="small"
          placeholder="Search companies..."
          value={searchTerm}
          onChange={handleSearch}
          sx={{ width: 300 }}
          InputProps={{
            startAdornment: <SearchIcon color="action" sx={{ mr: 1 }} />,
          }}
        />
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Company Name</TableCell>
              <TableCell>Contact Person</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCompanies
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((company) => (
                <TableRow key={company.id}>
                  <TableCell>{company.name}</TableCell>
                  <TableCell>{company.contactPerson}</TableCell>
                  <TableCell>{company.phone}</TableCell>
                  <TableCell>{company.email}</TableCell>
                  <TableCell>
                    <Chip
                      label={company.status}
                      color={company.status === 'Active' ? 'success' : 'default'}
                      size="small"
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Tooltip title="Edit">
                      <IconButton
                        size="small"
                        onClick={() => handleOpen(company)}
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton
                        size="small"
                        onClick={() => handleDelete(company.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredCompanies.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <form onSubmit={handleSubmit}>
          <DialogTitle>
            {editingCompany ? 'Edit Company' : 'Add Company'}
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="name"
              label="Company Name"
              type="text"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              name="contactPerson"
              label="Contact Person"
              type="text"
              fullWidth
              value={formData.contactPerson}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              name="phone"
              label="Phone"
              type="tel"
              fullWidth
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              name="email"
              label="Email"
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              name="address"
              label="Address"
              type="text"
              fullWidth
              multiline
              rows={3}
              value={formData.address}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              name="status"
              label="Status"
              select
              fullWidth
              value={formData.status}
              onChange={handleChange}
              required
              SelectProps={{
                native: true,
              }}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </TextField>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained">
              {editingCompany ? 'Update' : 'Add'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
};

export default PsCompanyMaster; 