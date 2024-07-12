import { sayHello } from "./unit1";

describe("Hello test", () => {
  it('should return "Hello, World"', () => {
    expect(sayHello()).toBe("Hello, World");
  });

  it('should be "Hello, Sardor"', () => {
    expect(sayHello("Sardor")).toBe("Hello, Sardor");
  });

  it('should be "Hello, Alexander"', () => {
    expect(sayHello("Alexander")).toBe("Hello, Alexander");
  });
});
