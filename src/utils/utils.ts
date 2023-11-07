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
