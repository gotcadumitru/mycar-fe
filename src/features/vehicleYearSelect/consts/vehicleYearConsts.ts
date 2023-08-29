export const vehicleYearOptions = Array.from(
  { length: new Date().getFullYear() - 1970 },
  (_, index) => ({
    value: 1971 + index,
    label: (1971 + index).toString(),
  }),
)
