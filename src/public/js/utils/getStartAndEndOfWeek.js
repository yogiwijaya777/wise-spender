function getStartAndEndOfWeek(date) {
  const startOfWeek = new Date(date);
  const endOfWeek = new Date(date);

  const dayOfWeek = date.getDay() === 0 ? 7 : date.getDay();

  startOfWeek.setDate(date.getDate() - dayOfWeek + 1);
  endOfWeek.setDate(date.getDate() - dayOfWeek + 7);

  const formatDate = (d) => d.toISOString().split("T")[0];

  return {
    startOfWeek: formatDate(startOfWeek),
    endOfWeek: formatDate(endOfWeek),
  };
}

export default getStartAndEndOfWeek;
