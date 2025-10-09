// eslint-disable-next-line @typescript-eslint/no-explicit-any
const hasFilter = (filter: any) =>
  Object.values(filter).some((value) => value !== undefined);
