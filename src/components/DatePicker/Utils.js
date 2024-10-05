import { dayName } from "./Const";
export const getNumberOfDays = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getSortedDays = (year, month) => {
//   const dayIndex = getNumberOfDays(year, month);
  const dayIndex = new Date(year, month, 1).getDay();
  const firstHalf = dayName?.slice(dayIndex);
  return [...firstHalf, ...dayName?.slice(0, dayIndex)];
};

export const Range = (start, end) => {
  const length = Math.abs((end - start) / 1);
  const { result } = Array.from({ length: length }).reduce(
    ({ result, current }) => ({
      result: [...result, current],
      current: current + 1,
    }),
    { result: [], current: start }
  );
  return result;
};
