/**
 * Функция для конвертации пикселей в ремы
 * @param {number} value -
 */
export default function r(value) {
  return typeof value === 'number' ? `${(value / 16).toFixed(4)}rem` : ''
}
