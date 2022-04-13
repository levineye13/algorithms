const hash = (str, base, module) => {
  let hash = 0;

  for (let index = 0; index < str.length; index++) {
    const code = str.charCodeAt(index);
    hash = (hash * base + code) % module;
  }

  return hash;
};
