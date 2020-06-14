import React from 'react'
import styled from 'styled-components'

import Score from './Score'


const HeaderStyled = styled.div`
  border: 2px solid hsl(217, 16%, 45%);
  border-radius: 5px;
  padding: 20px;
  .title{
    font-size: 20px;
    line-height: 16px;
  }
  display: flex;
  justify-content: space-between;
`;


function Header() {
  return (
    <HeaderStyled>
      <h3 className="title">
        ROCK
        <br/>
        PAPER
        <br/>
        SCISSORS
      </h3>
    <Score/>
    </HeaderStyled>
  )
}

export default Header
