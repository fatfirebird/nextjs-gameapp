import r from './toRem'

test('it should convert number to string', () => {
  expect(r(16)).toBe('1.0000rem')

  const px24 = (24 / 16).toFixed(4).toString() + 'rem'
  expect(r(24)).toBe(px24)

  expect(r(0)).toBe('0.0000rem')
})

test('it should empty string with non number', () => {
  expect(r('10')).toBe('')

  expect(r({ 10: 10 })).toBe('')

  expect(r(null)).toBe('')

  expect(r('12rem')).toBe('')

  expect(r(NaN)).toBe('')
})
