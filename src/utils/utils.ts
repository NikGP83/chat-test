export const getTime = (mls: number): string => {
  const date = new Date(mls);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return hours + ':' + minutes;
};
