import SignIn from "./index";

// Écrivez votre test ici
describe("SignIn Snapshot Test Suites", () => {
  it("should match snapshot", () => {
    expect(SignIn).toMatchInlineSnapshot(`
Object {
  "render": [Function],
}
`);
  });
});
