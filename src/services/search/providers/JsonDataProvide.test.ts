import { getCars } from "./JsonDataProvider";

jest.mock("../../../../cars.json", () => [
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

describe("JsonDataProvider", () => {
  test("returns matching car info", async () => {
    const result = await getCars("Foo Bar");
    expect(result).toEqual([
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
  });
});
