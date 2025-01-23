interface YearOption {
  value: number;
  label: string;
};

const generateYearOptions = (): YearOption[] =>
  [...Array(new Date().getFullYear() - 2015 + 1).keys()].map((i) => ({
    value: 2015 + i,
    label: (2015 + i).toString(),
  }));

export default generateYearOptions;