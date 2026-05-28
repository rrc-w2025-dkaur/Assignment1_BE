import { describe, it, expect } from "@jest/globals";
import request from "supertest";
import app from "../src/app";

describe("Health Check", () => {
  it("should return status ok", async () => {
    const res = await request(app).get("/health");

    expect(res.status).toBe(200);
    expect(res.body.status).toBe("ok");
  });
});