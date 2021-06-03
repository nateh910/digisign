class BaseError {}
class NotImplementedError extends BaseError {}
class NotAuthorizedError extends BaseError {}
class NotFoundError extends BaseError {}

export {
    NotImplementedError,
    NotAuthorizedError,
    NotFoundError
}