import React from 'react'
import styled from 'styled-components'

const ScoreStyled = styled.div`
  color:black;
  background: white;
  width: 100px;
  border-radius: 5px;
  line-height: 3px;
  text-align: center;
  padding-top: 10px;
  .title-score{
    font-size: 12px;
    letter-spacing: 2px;
    color: var(--blue-ligth)
  }
  .score{
    font-size: 40px;
    color: var(--grey-dark);
    font-weight: var(--font-weight-bold);
  }
`;

function Score() {
  return (
    <ScoreStyled>
      <h3 className="title-score">
        SCORE
      </h3>
      <h1 className="score" >
        12
      </h1>
    </ScoreStyled>
  )
}



export default Score
