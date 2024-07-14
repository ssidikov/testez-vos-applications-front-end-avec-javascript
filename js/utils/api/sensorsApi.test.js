import { retrieveSensorsData } from "./sensorsApi";
import { data } from "../../../data/mock-homepage-data";

describe("sensorsApi Unit Test Suites", () => {
  it("should return the mocked data", () => {
    expect(retrieveSensorsData()).toBe(data.facades);
  });
});
