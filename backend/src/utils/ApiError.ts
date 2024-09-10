/**
 * Sends the error in a proper format  
 *   
 * @param {number} statusCode 
 * This is the status code of the error  
 * @param {string} message
 * This is the message of the error to be sent to the frontend
 * @param {any[]} error 
 * List of errors if 
 * @param {string} stack
 * This is the error stack
 */

class ApiError extends Error {
  statusCode: number;
  data: null;
  success: boolean;
  error: any[];
  constructor(
    statusCode: number,
    message: string = "Something went wrong",
    error: any[] = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.error = error;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
