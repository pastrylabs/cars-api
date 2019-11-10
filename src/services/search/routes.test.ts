import express, { Router } from "express";
import request from "supertest";
import { applyMiddleware, applyRoutes } from "../../utils";
import middleware from "../../middleware";
import errorHandlers from "../../middleware/errorHandlers";
import routes from "../../services/search/routes";

jest.mock("../../../cars.json", () => [
  {
    carId: "18784431-efe4-412b-b84e-b03cf8aac29c",
    make: "Foo",
    makeId: "9d127faf-c61a-42e8-8dd9-29ec60d2a2da",
    model: "Bar",
    bodyType: "Wagon",
    bodyTypeId: "499d471d-f412-469f-86fa-6cb458feb6e0",
    price: 89999,
    keywords: ["tightknit", "deviled", "scrawny", "queasy", "pelting"]
  }
]);

describe("routes", () => {
  let router: Router;

  beforeEach(() => {
    router = express();
    applyMiddleware(middleware, router);
    applyRoutes(routes, router);
    applyMiddleware(errorHandlers, router);
  });

  test("a valid string query", async () => {
    const response = await request(router).get("/api/v1/search?q=Foo%20Bar");
    expect(response.status).toEqual(200);
  });

  test("a non-existing api method", async () => {
    const response = await request(router).get("/api/v11/search");
    expect(response.status).toEqual(404);
  });

  test("an empty string", async () => {
    const response = await request(router).get("/api/v1/search?q=");
    expect(response.status).toEqual(400);
  });
});
