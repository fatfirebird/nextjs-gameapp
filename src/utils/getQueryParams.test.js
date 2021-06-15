import getQueryParams from './getQueryParams'

test('it should only works with strings', () => {
  expect(getQueryParams({})).toBe('')

  expect(getQueryParams(1)).toBe('')
  expect(getQueryParams(NaN)).toBe('')

  expect(getQueryParams([])).toBe('')
  expect(getQueryParams(null)).toBe('')
})

test('it should work correct with query strings', () => {
  const correctQueryString = 'https://url?param=123,param2=231'
  const incorrectQueryString = 'dsffds18973'

  expect(getQueryParams(incorrectQueryString)).toBe('')

  expect(getQueryParams(correctQueryString)).toBe('?param=123,param2=231')
})
