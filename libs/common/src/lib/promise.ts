export const resolve = async <Resolved>(
  promise: () => Promise<Resolved>
): Promise<[Resolved | undefined, unknown | undefined]> => {
  try {
    const result = await promise();
    return [result, undefined];
  } catch (error) {
    return [undefined, error];
  }
};
