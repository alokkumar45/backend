class ApiError extends Error {
    constructor(
        statusCode,
        message = " Something went wrong",
        error = [],
        statck = ""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.success = false;
        this.errors = error;
        this.message = message;
        this.stack = statck;

        if (stack) {
            this.stack = stack;
        }
        else{
            Error.captureStackTrace(this, this.constructor);
        }

    }
}
export { ApiError };