export const isEmptyPagination = (pagination: object) => {
  return Object.entries(pagination).length === 0;
};

export const hyphenToUpper = (str: String) => {
  const upperWord = str
    .split('-')
    .map(function capitalize(part) {
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(' ');

  return upperWord;
};
