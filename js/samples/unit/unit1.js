/**
 *
 * @param {string} name
 */
export const sayHello = (name) => {
  if (!name) {
    return "Hello, World";
  }

  if (name === "Sardor") {
    return "Hello, Sardor";
  }

  if (name === "Alexander") {
    return "Hello, Alexander";
  }

  return `Hello, ${name}`;
};
