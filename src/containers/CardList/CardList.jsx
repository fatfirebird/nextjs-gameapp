import React, { useEffect, useState } from 'react'
import Dropdown from 'react-dropdown'
import { Col } from 'styled-bootstrap-grid'
import { useRouter } from 'next/router'

import { Games } from '../../api/games'
import { Card } from '../../components/Card'
import { Box } from '../../components/UI/Box'
import { Button } from '../../components/UI/Button/Button'
import getQueryParams from '../../utils/getQueryParams'

const options = [
  {
    value: '',
    label: 'По умолчанию',
  },
  {
    value: 'rating',
    label: 'Рейтинг по возрастанию',
  },
  {
    value: '-rating',
    label: 'Рейтинг по убыванию',
  },
  {
    value: 'released',
    label: 'Дата релиза по возрастанию',
  },
  {
    value: '-released',
    label: 'Дата релиза по убыванию',
  },
]

export const CardList = ({ initialData, next, initialOrdering }) => {
  // лень делать редакс тулкит
  const [cards, setCards] = useState(initialData)
  const [nextLink, setNext] = useState(next)
  const [ordering, setOrdering] = useState(initialOrdering)

  const router = useRouter()

  useEffect(() => {
    router.push(
      {
        query: {
          page: getNextPageNumber(nextLink) - 1,
          ordering,
        },
      },
      null,
      { shallow: true },
    )
  }, [ordering, nextLink])

  const getNextPageNumber = (nextPage) => {
    const query = getQueryParams(nextPage)
    return query.slice(query.indexOf('page=') + 5)
  }

  const handleLoadMore = async () => {
    const nextPage = getNextPageNumber(nextLink)

    if (nextPage) {
      const {
        data: { results, next },
      } = await Games.getGamesList({ page: nextPage })
      setCards([...cards, ...results])
      setNext(next)
    }
  }

  const handleFilter = async (ordering) => {
    const {
      data: { results, next },
    } = await Games.getGamesList({ page: 1, ordering })
    setCards(results)
    setNext(next)
  }

  return (
    <>
      <Col col={12}>
        <Box>
          <Dropdown
            onChange={({ value }) => {
              setOrdering(value)
              handleFilter(value)
            }}
            value={ordering}
            options={options}
            placeholder="Фильтр"
          />
        </Box>
      </Col>

      {cards.map(({ id, rating, name, background_image }) => (
        <Col xs={12} md={6} lg={3} key={id}>
          <Card slug={id} rating={rating} name={name} imageLink={background_image} />
        </Col>
      ))}

      {nextLink ? (
        <Box mx="auto">
          <Button onClick={handleLoadMore}>Загрузить еще</Button>
        </Box>
      ) : (
        <></>
      )}
    </>
  )
}
