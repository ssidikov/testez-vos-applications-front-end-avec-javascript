import { getAge } from "./unit2";

describe("getAge Unit Test Suites", () => {
  it('should render "Vous avez actuellement 28 ans"', () => {
    expect(getAge(27)).toBe("Vous avez actuellement 28 ans");
  });
});
