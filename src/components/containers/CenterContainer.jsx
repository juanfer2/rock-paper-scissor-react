import React from 'react'
import styled, {css} from 'styled-components'
const CenterContainerStyled = styled.div`
  max-width: 700px;
  margin: auto;
`;
function CenterContainer({children}) {
  return (
    <CenterContainerStyled>
      {children}
    </CenterContainerStyled>
  )
}

export default CenterContainer
