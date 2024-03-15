import { Request, Response } from "express";

export const mockRequest = (options = {}) => {
  return {
    ...options,
  } as Request;
};

export const mockResponse = () => {
  const res = {} as Response;
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

export function generateRandomEmail() {
  const randomString = Math.random().toString(36).substring(2, 15);
  return `${randomString}@example.com`;
}
