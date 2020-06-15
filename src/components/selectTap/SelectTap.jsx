import React from 'react'
import styled, {css} from 'styled-components'

import TapButton from '../tapButton/TapButton'

const SelectTapStyled = styled.div`

.container-select-tap{
  position: relative;
  margin-top: 120px;
  .container-tap{
    display: flex;
    justify-content: space-between;
    .container-paper{
      position: relative;
      z-index: 2;
    }
    .container-scissor{
      position: relative;
      z-index: 2;
    }
  }
  .container-line{
    position:relative;
  }
  .container-tap-center{
    display: flex;
    margin-top: 30px;
    justify-content: center;
    .container-rock{
      position: relative;
      z-index: 2;
    }
  }
  .lines{
    background: #192B44;
    position: absolute;
    width: 250px;
    left: 32px;
    height: 17px;
    margin-top: -245px;
    &::before{
      position: absolute;
      content: '';
      width: 250px;
      height: 17px;
      background: green;
      transform: rotate(60deg);
      transform-origin: left top;
    }
    &::after{
      position: absolute;
      content: '';
      background-color: blue;
      width: 250px;
      height: 17px;
      transform: rotate(-60deg);
      transform-origin: right top;
    }
  }
}
`;

function SelectTap() {
  return (
    <SelectTapStyled>
      <div className="container-select-tap" >
        <div className="container-tap">
          <TapButton type={'paper'} />
          <TapButton type={'scissor'} />
        </div>
        <div className="container-tap-center">
          <TapButton type={'rock'}/>
        </div>
        {/* <span className="lines"></span> */}
      </div>
    </SelectTapStyled>
  )
}

export default SelectTap
