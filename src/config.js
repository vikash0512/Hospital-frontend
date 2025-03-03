// API configuration
export const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://hospital-management-backend-27yr.onrender.com/api/v1'
  : 'http://localhost:3001/api/v1'; 