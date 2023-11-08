/**
 * Parses the color from the tooltip to apply to the item name
 *
 * @param inputString The toolTipString from wow-head
 * @returns The parsed color as a HEX color (egg: #fffff)
 */
export const parseColor = (inputString: string) => {
  let startIndex: number = inputString?.indexOf('|cff') + 4;
  let secondPipeIndex: number = inputString?.indexOf('|', startIndex);

  // Extract the substring between |cff and the second |
  let extractedSubstring: string = inputString?.substring(
    startIndex,
    secondPipeIndex,
  );
  return `#${extractedSubstring}`;
};


/**
 * Formats a date
 *
 * @param date Formats the date
 * @returns { string } The date formatted
 */
export const formatDate = (date: Date): string => {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  const formattedDate = `${month}/${day}/${year}`;
  return formattedDate;
};
