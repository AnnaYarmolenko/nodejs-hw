import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({
      err: err.message || err.name,
    });
    return;
  }
  console.error('Error middleware:', err.message);
  res.status(500).json({
    err: err.message,
  });
};
