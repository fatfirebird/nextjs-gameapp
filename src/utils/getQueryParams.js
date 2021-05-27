/**
 * Функция извлечения гет параметров из строки, используется для пагинации
 * @param {string} query
 * @returns {string}
 */
export default function getQueryParams(query) {
  if (typeof query !== 'string') return ''
  const paramsStart = query.indexOf('?')
  return paramsStart ? query.slice(paramsStart) : ''
}
