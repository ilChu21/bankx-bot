export const roundDown = (num: number, decimals: number): string => {
  const factor = Math.pow(10, decimals);
  const roundedDownNum = Math.floor(num * factor) / factor;
  return roundedDownNum.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

export const formatNumberWithSuffix = (value: number): string => {
  const suffixes = ['', 'K', 'M', 'B', 'T'];

  let formattedValue = value;
  let suffixIndex = 0;

  while (formattedValue >= 1000) {
    formattedValue /= 1000;
    suffixIndex++;
  }

  return `${formattedValue.toFixed(3)}${suffixes[suffixIndex]}`;
};
