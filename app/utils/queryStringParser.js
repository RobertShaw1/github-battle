/**
 * A utility for getting data from the url search params
 * @returns {Object} An object containing the {@link https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams URLSearchParams} construct and, key value pairs of the query string from **window.location.search**
 *
 * @author Robert Shaw https://github.com/RobertShaw1
 * @inspiration {@link https://www.npmjs.com/package/qs qs.parse}
 */
export const queryStringParser = () => {
  const urlSearchParams = new URLSearchParams(window.location.search)

  const result = { urlSearchParams }
  urlSearchParams.forEach((value, key) => {
    result[key] = value
  })

  return result
}
