import React, { useEffect, useState } from 'react'
import { Col } from 'styled-bootstrap-grid'
import { useRouter } from 'next/router'

import { Games } from '../../api/games'
import { Card } from '../../components/Card'
import { Box } from '../../components/UI/Box'
import { Button } from '../../components/UI/Button/Button'
import r from '../../utils/toRem'
import { ORDERING_OPTIONS, PLATFORM_OPTIONS } from './CardListOptions'
import { SInput } from '../../components/UI/Input'
import { SDropdown } from '../../components/UI/Drodown'

export const CardList = ({ initialData, next, initialFilters }) => {
  // лень делать редакс тулкит для хелло ворлда, но с сагой там была бы сущность game и UI.
  // UI для отслеживания состояния экшена, game для хранения детальной + главной
  const [cards, setCards] = useState(initialData)
  const [nextLink, setNext] = useState(next)
  const [filters, setFilters] = useState({ ...initialFilters })
  const [gameName, setGameName] = useState('')

  const router = useRouter()

  useEffect(() => {
    router.push(
      {
        query: {
          ...filters,
        },
      },
      null,
      { shallow: true },
    )
  }, [filters])

  const handleLoadMore = async () => {
    if (next) {
      const {
        data: { results, next },
      } = await Games.getGamesList({ ...filters })
      setCards([...cards, ...results])
      setNext(next)
      setFilters({ ...filters, page: +filters.page + 1 })
    }
  }

  const handleFilter = async (newFilter) => {
    const search = { ...filters, page: 1, ...newFilter }

    const {
      data: { results, next },
    } = await Games.getGamesList(search)

    setCards(results)
    setNext(next)
  }

  // сортировки и поиска по имени нет в апи, нет смысла делать это на клиенте когда есть 50+ элементов
  const filterByName = () => cards.filter(({ name }) => name.toLowerCase().includes(gameName.toLowerCase()))

  const filteredCards = gameName ? filterByName(cards) : cards
  return (
    <>
      <Col col={12}>
        <Box>
          <SDropdown
            onChange={({ value }) => {
              setFilters({ ...filters, ordering: value })
              handleFilter({ ordering: value })
            }}
            value={filters.ordering}
            options={ORDERING_OPTIONS}
            placeholder="Фильтр"
            mb={r(12)}
          />
          <SDropdown
            options={PLATFORM_OPTIONS}
            onChange={({ value }) => {
              setFilters({ ...filters, platforms: value })
              handleFilter({ platforms: value })
            }}
            value={filters.platforms}
            placeholder="Платформа"
            mb={r(12)}
          />
          <SInput
            type="text"
            onChange={(e) => setGameName(e.target.value)}
            value={gameName}
            width="100%"
            placeholder="Поиск игры из списка"
            mb={r(24)}
          />
        </Box>
      </Col>

      {filteredCards?.length ? (
        filteredCards.map(({ id, rating, name, background_image }) => (
          <Col xs={12} md={6} lg={3} key={id}>
            <Card slug={id} rating={rating} name={name} imageLink={background_image} />
          </Col>
        ))
      ) : (
        <Box>Ничего не найдено</Box>
      )}

      <Col xs={12}>
        {nextLink ? (
          <Box display="flex" justifyContent="center">
            <Button onClick={handleLoadMore}>Загрузить еще</Button>
          </Box>
        ) : (
          <></>
        )}
      </Col>
    </>
  )
}
