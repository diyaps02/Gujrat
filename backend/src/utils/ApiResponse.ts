/** 
* Sends the response to the client in a well formatted way  
*
* @param {number} statuscode
* @param {string} message
* The default message is "Success"
* @param {any} data
*/
class ApiResponse {
  statuscode: number;
  message: string;
  data: any;
  constructor(statuscode: number, message: string = "Success", data: any) {
    this.statuscode = statuscode;
    this.message = message;
    this.data = data;
  }
}

export default ApiResponse;
