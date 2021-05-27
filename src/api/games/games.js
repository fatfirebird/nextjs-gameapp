import Request from '../request'

export class Games {
  /**
   * Получение списка игр
   * @param {*} Объект, содержащий в себе сортировку ordering, страницу
   *
   * Виды сортировки:
   * По рейтингу: rating/-rating
   * По дате релиза: released/-released
   */
  static getGamesList({ ordering, page = 1 }) {
    console.log(Request.url)
    return Request.get('/games', {
      params: {
        ordering,
        page,
      },
    })
  }
}
