// API Configuration
export const API_BASE_URL =
  import.meta.env?.VITE_API_BASE_URL || 'http://localhost:3000/api';

// Transaction Categories
export const TRANSACTION_CATEGORIES = {
  FOOD: 'Food & Dining',
  TRANSPORT: 'Transportation',
  SHOPPING: 'Shopping',
  BILLS: 'Bills & Utilities',
  ENTERTAINMENT: 'Entertainment',
  HEALTH: 'Healthcare',
  EDUCATION: 'Education',
  TRAVEL: 'Travel',
  OTHER: 'Other',
};

// Math Constants
export const RAD = Math.PI / 180;

// Account Types
export const ACCOUNT_TYPES = {
  CHECKING: 'checking',
  SAVINGS: 'savings',
  CREDIT: 'credit',
};

// Transaction Types
export const TRANSACTION_TYPES = {
  DEPOSIT: 'deposit',
  WITHDRAWAL: 'withdrawal',
  TRANSFER: 'transfer',
  PAYMENT: 'payment',
};
export const tabs = [
  { id: 'all', label: 'All Transactions' },
  { id: 'income', label: 'Income' },
  { id: 'expense', label: 'Expense' },
];

// Status Types
export const STATUS_TYPES = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  FROZEN: 'frozen',
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed',
};

// Currency
export const CURRENCIES = {
  USD: 'USD',
  EUR: 'EUR',
  GBP: 'GBP',
  JPY: 'JPY',
};

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_DATA: 'user_data',
  THEME: 'theme',
  LANGUAGE: 'language',
};

// Theme
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
};

export const GENERAL = {
  name: 'BankDash.',
};
