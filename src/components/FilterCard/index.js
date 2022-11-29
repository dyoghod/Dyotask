import React from 'react'
import * as S from './styles'

import filter from '../../assets/icons8-filter-50.png'




function FilterCard({title, actived}) {
  return (
    <S.Container actived={actived}>
      <img src={filter} alt="filter"/>
      <span>{title}</span>
    </S.Container>
    )
}

export default FilterCard;