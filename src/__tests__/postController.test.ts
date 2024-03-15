import { createPost, getPosts } from "../controllers/postController";
import { mockRequest, mockResponse } from "../utils/testUtils";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe("PostController", () => {
  let token: any;
  let userId: any;

  beforeAll(async () => {
    const email = `test${Date.now()}@example.com`;
    const user = await prisma.user.create({
      data: {
        name: "Test User",
        email: email,
        password: "password",
      },
    });
    userId = user.id;
    token = "some-generated-token-for-testing";
  });

  describe("createPost", () => {
    it("should create a new post and return status 201", async () => {
      const req = mockRequest({
        user: { id: userId },
        body: { title: "New Post", content: "Content of the new post" },
      });
      const res = mockResponse();

      await createPost(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          title: "New Post",
          content: "Content of the new post",
          userId: expect.any(String),
        })
      );
    });

    it("should not create a post if user is not authenticated and return status 403", async () => {
      const req = mockRequest({
        body: {
          title: "Unauthorized Post",
          content: "Content of unauthorized post",
        },
      });
      const res = mockResponse();

      await createPost(req, res);

      expect(res.status).toHaveBeenCalledWith(403);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: "User must be logged in to create a post",
        })
      );
    });
  });

  describe("getPosts", () => {
    it("should get all posts and return status 200", async () => {
      const req = mockRequest();
      const res = mockResponse();

      await getPosts(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(
        expect.arrayContaining([
          expect.objectContaining({
            title: expect.any(String),
            content: expect.any(String),
            author: expect.objectContaining({
              id: expect.any(String),
              email: expect.any(String),
              name: expect.any(String),
            }),
          }),
        ])
      );
    });
  });
});
