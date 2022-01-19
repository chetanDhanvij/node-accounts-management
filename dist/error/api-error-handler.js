const { ApiError } = require("./ApiError");
export function apiErrorHandler(err, req, res, next) {
    if (err instanceof ApiError) {
        res.status(err.code).json(err);
        return;
    }
    res.status(500).json('something went wrong');
}
