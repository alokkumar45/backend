class ApiResponse {
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400;
        // ✅ Removed this.errors — ApiResponse doesn't need errors
        //    errors belong in ApiError class
    }
}

export { ApiResponse };