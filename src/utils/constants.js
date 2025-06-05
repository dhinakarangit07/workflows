export const APP_NAME = 'CLH Legal Management';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  CASES: '/cases',
  IMPORTANT_CASES: '/cases/important',
  CAUSE_LIST: '/cases/cause-list',
  COURT_DETAILS: '/court-details',
  CLIENT_PORTAL: '/client-portal',
  CASE_TYPE_MASTER: '/masters/case-type',
  PS_COMPANY_MASTER: '/masters/ps-company',
};

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
  },
  CASES: {
    LIST: '/cases',
    IMPORTANT: '/cases/important',
    CAUSE_LIST: '/cases/cause-list',
  },
  MASTERS: {
    CASE_TYPES: '/masters/case-types',
    PS_COMPANIES: '/masters/ps-companies',
  },
};

export const STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
}; 