import 'babel-polyfill';

export default (fn, cache = {}) => async (...args) => {
  const cacheKey = JSON.stringify(args);
  return cache[cacheKey] || (cache[cacheKey] = await fn(...args));
}
