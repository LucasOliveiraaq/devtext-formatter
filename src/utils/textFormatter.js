export const toUpper = (text) => {
  return text.toUpperCase();
};

export const toLower = (text) => {
  return text.toLowerCase();
};

export const toCamelCase = (text) => {
  return text
    .split(" ")
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join("");
};

export const toSnakeCase = (text) => {
  return text.toLowerCase().trim().replace(/\s+/g, "_");
};

export const removeExtraSpaces = (text) => {
  return text.replace(/\s+/g, " ").trim();
};
