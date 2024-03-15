import { createUser, loginUser } from "../controllers/userController";
import {
  mockRequest,
  mockResponse,
  generateRandomEmail,
} from "../utils/testUtils";

const randomEmail = generateRandomEmail();
describe("UserController", () => {
  describe("createUser", () => {
    it("should create a new user with a random email and return status 201", async () => {
      const req = mockRequest({
        body: {
          name: "Test User",
          email: randomEmail,
          password: "password",
        },
      });
      const res = mockResponse();

      await createUser(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          name: "Test User",
          email: randomEmail,
        })
      );
    });

    it("should not allow creating a user with an email that already exists", async () => {
      const req = mockRequest({
        body: {
          name: "Another Test User",
          email: randomEmail,
          password: "password123",
        },
      });
      const res = mockResponse();

      await createUser(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: "Email already in use",
        })
      );
    });
  });

  describe("loginUser", () => {
    it("should log in an existing user and return a JWT token", async () => {
      const req = mockRequest({
        body: { email: "test@example.com", password: "password" },
      });
      const res = mockResponse();
      await loginUser(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          token: expect.any(String),
        })
      );
    });

    it("should not log in with incorrect password and return status 401", async () => {
      const req = mockRequest({
        body: { email: "test@example.com", password: "wrongpassword" },
      });
      const res = mockResponse();
      await loginUser(req, res);
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: "Invalid credentials",
        })
      );
    });
  });
});
