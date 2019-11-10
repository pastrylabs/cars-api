import path from "path";

// Can easily extend this provider to accept sortBy as second parameter
// Based on the sortBy paramter the collection will be sorted
export const getCars = async (query: string) => {
  const { default: cars } = await import(path.resolve("cars.json"));
  const [make, model] = query.split(" ");
  return cars.filter((x: any) => x.make === make && x.model === model);
};
