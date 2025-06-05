import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  useTheme,
  useMediaQuery,
  Avatar,
  Menu,
  MenuItem,
  Button,
  Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  Dashboard as DashboardIcon,
  CalendarToday,
  Gavel,
  Search,
  Notifications,
  People,
  AccountBalance,
  Add,
  Settings,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = ({ onMobileMenuClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [casesMenuAnchorEl, setCasesMenuAnchorEl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCasesMenuClick = (event) => {
    setCasesMenuAnchorEl(event.currentTarget);
  };

  const handleCasesMenuClose = () => {
    setCasesMenuAnchorEl(null);
  };

  const handleCasesNavigation = (path) => {
    navigate(path);
    handleCasesMenuClose();
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { text: 'Calendar', icon: <CalendarToday />, path: '/calendar' },
    { text: 'Fields', icon: <Settings />, path: '/fields' },
    { text: 'Add Case', icon: <Add />, path: '/add-case' },
    { text: 'Search', icon: <Search />, path: '/search' },
    { text: 'Reminders', icon: <Notifications />, path: '/reminders' },
    { text: 'Clients', icon: <People />, path: '/clients' },
    { text: 'Advocates', icon: <AccountBalance />, path: '/advocates' },
    { text: 'Invoice', icon: <AccountBalance />, path: '/Invoice' },
  ];

  const casesSubMenuItems = [
    { text: 'Important Cases', path: '/cases/important-cases' },
    { text: 'Cause List', path: '/cases/cause-list' },
    { text: 'All Cases', path: '/cases/all-cases' },
    { text: 'Today Cases', path: '/cases/today-cases' },
    { text: 'Tomorrow Cases', path: '/cases/tomorrow-cases' },
    { text: 'Date Awaited Cases', path: '/cases/date-awaited-cases' },
    { text: 'Decided Cases', path: '/cases/decided-cases' },
    { text: 'Abandoned Cases', path: '/cases/abandoned-cases' },
    { text: 'Assigned Cases', path: '/cases/assigned-cases' },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        zIndex: theme.zIndex.drawer + 2,
        backgroundColor: 'background.paper',
        color: 'text.primary',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={onMobileMenuClick}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ fontWeight: 600, mr: 4 }}
          >
            CLH
          </Typography>
          {!isMobile && (
            <Stack direction="row" spacing={1}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  startIcon={item.icon}
                  onClick={() => navigate(item.path)}
                  sx={{
                    color: location.pathname === item.path ? 'primary.main' : 'text.secondary',
                    '&:hover': {
                      backgroundColor: 'primary.lighter',
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
              <Button
                startIcon={<Gavel />}
                endIcon={<KeyboardArrowDownIcon />}
                onClick={handleCasesMenuClick}
                sx={{
                  color: location.pathname.startsWith('/cases') ? 'primary.main' : 'text.secondary',
                  '&:hover': {
                    backgroundColor: 'primary.lighter',
                  },
                }}
              >
                Cases
              </Button>
              <Menu
                anchorEl={casesMenuAnchorEl}
                open={Boolean(casesMenuAnchorEl)}
                onClose={handleCasesMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                {casesSubMenuItems.map((item) => (
                  <MenuItem
                    key={item.text}
                    onClick={() => handleCasesNavigation(item.path)}
                    selected={location.pathname === item.path}
                  >
                    {item.text}
                  </MenuItem>
                ))}
              </Menu>
            </Stack>
          )}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>J</Avatar>
          <Typography variant="subtitle2" sx={{ mr: 0.5 }}>
            JOHN
          </Typography>
          <IconButton
            size="small"
            onClick={handleClick}
            sx={{ ml: -1 }}
          >
            <KeyboardArrowDownIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={() => {
              handleClose();
              navigate('/logout');
            }}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 