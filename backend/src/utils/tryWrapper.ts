type AsyncFunction<T> = () => Promise<T>;
type PromiseOrFunction<T> = Promise<T> | AsyncFunction<T>;
/**
 * This is a wrapper for try catch for more linear coding
 * 
 * @param promiseOrFn - A promise or a function
 * @returns [result, null]
 */
export const tryWrapper = async <T>(promiseOrFn: PromiseOrFunction<T>): Promise<[T | null, Error | null]> => {
  try {
    const result = await (typeof promiseOrFn === 'function' ? promiseOrFn() : promiseOrFn);
    return [result, null];
  } catch (error) {
    return [null, error as Error];
  }
};
