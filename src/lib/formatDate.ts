export const formatDate = (payload: string, languange: string = "en-US") => {
  if (payload) {
    const date = new Date(payload);
    return new Intl.DateTimeFormat(languange, {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  }
  return "uknown";
};
