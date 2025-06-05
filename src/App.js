import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/dashboard/Home';
import CourtDetails from './components/dashboard/CourtDetails';
import ClientPortal from './components/dashboard/ClientPortal';
import CaseTypeMaster from './components/dashboard/fields/CaseTypeMaster';
import PsCompanyMaster from './components/dashboard/fields/PsCompanyMaster';
import { AuthProvider, useAuth } from './context/AuthContext';
import ImportantCases from './components/dashboard/Cases/ImportantCases';
import CauseList from './components/dashboard/Cases/CauseList';
import CaseLayout from './components/dashboard/Cases/CaseLayout';
import AllCases from './components/dashboard/Cases/AllCases';


// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Dashboard Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            >
              <Route index element={<Home />} />
              <Route path="court-details" element={<CourtDetails />} />
              <Route path="client-portal" element={<ClientPortal />} />
              <Route path="masters">
                <Route path="case-type" element={<CaseTypeMaster />} />
                <Route path="ps-company" element={<PsCompanyMaster />} />
              </Route>
            </Route>

            {/* Cases Routes - Full Pages */}
            <Route
              path="/cases/important-cases"
              element={
                <ProtectedRoute>
                  <CaseLayout>
                    <ImportantCases />
                  </CaseLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/cases/cause-list"
              element={
                <ProtectedRoute>
                  <CaseLayout>
                    <CauseList />
                  </CaseLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/cases/all-cases"
              element={
                <ProtectedRoute>
                  <CaseLayout>
                    <AllCases />
                  </CaseLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/cases/today-cases"
              element={
                <ProtectedRoute>
                  <CaseLayout>
                    <ImportantCases />
                  </CaseLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/cases/tomorrow-cases"
              element={
                <ProtectedRoute>
                  <CaseLayout>
                    <ImportantCases />
                  </CaseLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/cases/date-awaited-cases"
              element={
                <ProtectedRoute>
                  <CaseLayout>
                    <ImportantCases />
                  </CaseLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/cases/decided-cases"
              element={
                <ProtectedRoute>
                  <CaseLayout>
                    <ImportantCases />
                  </CaseLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/cases/abandoned-cases"
              element={
                <ProtectedRoute>
                  <CaseLayout>
                    <ImportantCases />
                  </CaseLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/cases/assigned-cases"
              element={
                <ProtectedRoute>
                  <CaseLayout>
                    <ImportantCases />
                  </CaseLayout>
                </ProtectedRoute>
              }
            />

            {/* Redirect root to dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App; 