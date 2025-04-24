export class HttpError extends Error {
  statusCode: number;
  additionalData: any;

  constructor(statusCode: number, message: string, additionalData: any = {}) {
    super(message);
    this.statusCode = statusCode;
    this.additionalData = additionalData;
  }
}

export function createHttpError(
  statusCode: number,
  message: string,
  additionalData: any = {},
) {
  return new HttpError(statusCode, message, additionalData);
}
