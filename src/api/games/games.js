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
    return Request.get('/games', {
      params: {
        ordering,
        page,
      },
    })
  }

  /**
   *
   * @param {number} id игры
   *
   * Получение детальной информации об игре
   */
  static getGameDetail(id) {
    return Request.get(`/games/${id}`)
  }

  /**
   *
   * @param {number} id игры
   *
   * Получение детальной информации об игре
   */
  static geGameScreens(id) {
    return Request.get(`/games/${id}/screenshots`)
  }
}
