class ApiResponse {
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.errors = errors;
        this.success = statusCode >= 200 && statusCode < 300;
    }
}
export { ApiResponse };