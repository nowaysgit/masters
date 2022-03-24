export const numberFormat = (number: string) => {
  return number.replace(
    /(?:([\d]{1,}?))??(?:([\d]{1,3}?))??(?:([\d]{1,3}?))??(?:([\d]{2}))??([\d]{2})$/,
    (all, a, b, c, d, e) => {
      return (
        (a ? "+" + a + " (" : "") +
        (b ? b + ") " : "") +
        (c ? c + "-" : "") +
        (d ? d + "-" : "") +
        e
      );
    }
  );
};

export const timeFormat = (number: number) => {
  const date = new Date(number);
  return `${date.getHours()}:${date.getMinutes()}`;
};
