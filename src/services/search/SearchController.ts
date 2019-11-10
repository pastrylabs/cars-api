import { getCars } from "./providers/JsonDataProvider";

export const getCarsByName = async (query: string) => {
  return await getCars(query);
};
