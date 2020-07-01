const getToDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

const getFromDate = () => {
  const date = new Date();
  const currentTime = date.getTime();
  const week = (7 * 24 * 60 * 60 * 1000);
  const differenceTime = currentTime - week;
  const sevenDayAgo = new Date(differenceTime);
  const day = sevenDayAgo.getDate();
  const month = sevenDayAgo.getMonth() + 1;
  const year = sevenDayAgo.getFullYear();
  return `${year}-${month}-${day}`;
};

export {
  getToDate,
  getFromDate,
};
