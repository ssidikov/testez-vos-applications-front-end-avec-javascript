import { isInTestEnv } from ".index";

describe("isInTestEnv Unit Test Suites", () => {
  it("should be in test env", () => {
    expect(isInTestEnv()).toBe(true);
  });

  it("should not be in test env", () => {
    process.env.NODE_ENV = "dev";
    expect(isInTestEnv()).not.toBe(true);
  });
});
