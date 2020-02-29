const server = require("../api/server.js");
const request = require("supertest");
const db = require("../database/dbConfig.js");

describe('register functionality', () => {
  

    it("should return json", async () => {
        const res = await request(server)
            .post("/api/auth/register")
            .send({
                name: "2",
                password: "2"
            });
        expect(res.type).toBe("application/json");
    });


});

describe("login functionality", () => {
    it("should return status 200", async () => {
        const res = await request(server)
            .post("/api/auth/login")
            .send({ name: "2", password: "2" });

        expect(res.status).toBe(200);
    });

    it("should return a token", async () => {
        const res = await request(server)
            .post("/api/auth/login")
            .send({ name: "2", password: "2" });

        expect(res.body.token).toBeTruthy();
    });

    it("should return json", async () => {
        const res = await request(server)
            .post("/api/auth/login")
            .send({ name: "2", password: "2" });

        expect(res.type).toBe("application/json");
    });
});
