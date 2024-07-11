import { sayHello } from "./unit1";

// describe("SayHello Unit Test Suites", () => {
//   it("should be true", () => {
//     expect(true).toBe(true);
//   });
// });

describe("SayHello Unit Test Suites", () => {
  it("should return 'Hello, World'", () => {
    expect(sayHello()).toBe("Hello, World");
  });

  it("should return 'Hello, Sardor'", () => {
    expect(sayHello("Sardor")).toBe("Hello, Sardor");
  });
});
