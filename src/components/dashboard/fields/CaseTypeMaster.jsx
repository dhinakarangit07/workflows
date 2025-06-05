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
  Tooltip,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
} from '@mui/icons-material';

// Mock data - replace with API call
const mockCaseTypes = [
  {
    id: 1,
    code: 'CIV',
    name: 'Civil Case',
    description: 'Cases related to civil matters between parties',
    status: 'Active',
  },
  {
    id: 2,
    code: 'CRM',
    name: 'Criminal Case',
    description: 'Cases related to criminal offenses',
    status: 'Active',
  },
  {
    id: 3,
    code: 'FAM',
    name: 'Family Case',
    description: 'Cases related to family matters and disputes',
    status: 'Active',
  },
  // Add more mock data as needed
];

const CaseTypeMaster = () => {
  const [caseTypes, setCaseTypes] = useState(mockCaseTypes);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);
  const [editingCaseType, setEditingCaseType] = useState(null);
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    description: '',
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

  const handleOpen = (caseType = null) => {
    if (caseType) {
      setEditingCaseType(caseType);
      setFormData({
        code: caseType.code,
        name: caseType.name,
        description: caseType.description,
      });
    } else {
      setEditingCaseType(null);
      setFormData({
        code: '',
        name: '',
        description: '',
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingCaseType(null);
    setFormData({
      code: '',
      name: '',
      description: '',
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
    if (editingCaseType) {
      // Update existing case type
      setCaseTypes((prev) =>
        prev.map((ct) =>
          ct.id === editingCaseType.id
            ? { ...ct, ...formData }
            : ct
        )
      );
    } else {
      // Add new case type
      const newCaseType = {
        id: caseTypes.length + 1,
        ...formData,
        status: 'Active',
      };
      setCaseTypes((prev) => [...prev, newCaseType]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setCaseTypes((prev) => prev.filter((ct) => ct.id !== id));
  };

  const filteredCaseTypes = caseTypes.filter(
    (ct) =>
      ct.code.toLowerCase().includes(searchTerm) ||
      ct.name.toLowerCase().includes(searchTerm) ||
      ct.description.toLowerCase().includes(searchTerm)
  );

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h4">
          Case Types
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpen()}
        >
          Add Case Type
        </Button>
      </Box>

      <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
        <TextField
          size="small"
          placeholder="Search case types..."
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
              <TableCell>Code</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCaseTypes
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((caseType) => (
                <TableRow key={caseType.id}>
                  <TableCell>{caseType.code}</TableCell>
                  <TableCell>{caseType.name}</TableCell>
                  <TableCell>{caseType.description}</TableCell>
                  <TableCell>
                    <Chip
                      label={caseType.status}
                      color={caseType.status === 'Active' ? 'success' : 'default'}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Tooltip title="Edit">
                      <IconButton
                        size="small"
                        onClick={() => handleOpen(caseType)}
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton
                        size="small"
                        onClick={() => handleDelete(caseType.id)}
                      >
                        <DeleteIcon fontSize="small" />
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
          count={filteredCaseTypes.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <form onSubmit={handleSubmit}>
          <DialogTitle>
            {editingCaseType ? 'Edit Case Type' : 'Add Case Type'}
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="code"
              label="Code"
              type="text"
              fullWidth
              value={formData.code}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              name="name"
              label="Name"
              type="text"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              name="description"
              label="Description"
              type="text"
              fullWidth
              multiline
              rows={3}
              value={formData.description}
              onChange={handleChange}
              required
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained">
              {editingCaseType ? 'Update' : 'Add'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
};

export default CaseTypeMaster; 