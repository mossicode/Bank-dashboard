// User related types - JSDoc comments for better IDE support
/**
 * @typedef {Object} User
 * @property {string} id - User unique identifier
 * @property {string} name - User's full name
 * @property {string} email - User's email address
 * @property {string} [avatar] - User's profile picture URL
 * @property {'admin' | 'user'} role - User's role in the system
 */

/**
 * @typedef {Object} Account
 * @property {string} id - Account unique identifier
 * @property {string} accountNumber - Account number
 * @property {'checking' | 'savings' | 'credit'} accountType - Type of account
 * @property {number} balance - Current account balance
 * @property {string} currency - Currency code (USD, EUR, etc.)
 * @property {'active' | 'inactive' | 'frozen'} status - Account status
 * @property {string} createdAt - Account creation date
 */

/**
 * @typedef {Object} Transaction
 * @property {string} id - Transaction unique identifier
 * @property {string} accountId - Associated account ID
 * @property {'deposit' | 'withdrawal' | 'transfer' | 'payment'} type - Transaction type
 * @property {number} amount - Transaction amount
 * @property {string} currency - Currency code
 * @property {string} description - Transaction description
 * @property {string} category - Transaction category
 * @property {'pending' | 'completed' | 'failed'} status - Transaction status
 * @property {string} timestamp - Transaction timestamp
 * @property {string} [reference] - Optional reference number
 */

/**
 * @typedef {Object} DashboardStats
 * @property {number} totalBalance - Total balance across all accounts
 * @property {number} monthlyIncome - Monthly income
 * @property {number} monthlyExpenses - Monthly expenses
 * @property {number} accountCount - Number of accounts
 * @property {number} transactionCount - Number of transactions
 */

/**
 * @typedef {Object} ApiResponse
 * @template T
 * @property {T} data - Response data
 * @property {string} message - Response message
 * @property {boolean} success - Success status
 */

/**
 * @typedef {Object} PaginatedResponse
 * @template T
 * @property {T[]} data - Array of data items
 * @property {number} total - Total number of items
 * @property {number} page - Current page number
 * @property {number} limit - Items per page
 * @property {number} totalPages - Total number of pages
 */
