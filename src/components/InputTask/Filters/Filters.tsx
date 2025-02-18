import React from 'react'
import { FilterButton } from '../../../ui/FilterButton/FilterButton'
import styled from 'styled-components'

const allFilters = [
  { id: 1, text: 'Все', textColorHover: '#FFFFFF', color: '#30324B', backgroundHover: '#575A84', borderFocus: '#A4A4A4' },
  { id: 2, text: 'Выполнено', textColorHover: '#6AD400', color: '#6AD400', backgroundHover: '#CEFF9D', borderFocus: '#CEFF9D' },
  { id: 3, text: 'Не выполнено', textColorHover: '#FF2F2F', color: '#FF2F2F', backgroundHover: '#FFB8B8', borderFocus: '#FFB8B8' },
]

const StyledContainerFilters = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  width: 100%;
  gap: 15px;
  margin-top: 68px;
`

export const Filters: React.FC = () => {
  return (
    <StyledContainerFilters>
      {allFilters.map((filter) => (
        <FilterButton key={filter.id} idButton={filter.id} text={filter.text} textColorHover={filter.textColorHover} color={filter.color} backgroundHover={filter.backgroundHover} borderFocus={filter.borderFocus} />
      ))}
    </StyledContainerFilters>
  )
}
