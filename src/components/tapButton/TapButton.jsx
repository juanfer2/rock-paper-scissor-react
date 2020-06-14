import React from 'react'
import styled, {css} from 'styled-components'

import PaperIcon from './buttonIcons/PaperIcon'
import RockIcon from './buttonIcons/RockIcon'
import ScissorIcon from './buttonIcons/ScissorIcon'
const TapButtonStyled = styled.div`
  ${props =>
    props &&
    css`
      box-shadow: ${props.shadowColor} 0px 5px 0px;
      background: -webkit-linear-gradient(49deg, var(${props.startColor}) 0%, var(${props.endColor})  100%);
  `};
  padding: 20px;
  width: 100px;
  height: 100px;
  position: relative;
  text-align: center;
  border-radius: 90px;
  .container-icon{
    position: absolute;
    background: white;
    height: 80%;
    width: 80%;
    border-radius: 90px;
    text-align: center;
    left: 15px;
    top: 15px;
    box-shadow: inset #BABFD4 0px 7px 3px 0px;
    .icon{
      margin-top: 25px;
    }
    .rock-icon{
      margin-top: 32px;
    }
  }
  /* border-image-source: linear-gradient(to left, #743ad5, #d53a9d); */
`;

//background-image: linear-gradient(45deg, var(--color-success) 0%, #b63ae1 51%, var(--color-primary) 100%);


function TapButton({type}) {

  switch (type) {
    case 'rock':
      return (
        <TapButtonStyled
        startColor={'--startRedGradient'}
        endColor={'--endRedGradient'}
        shadowColor={'#980E31'}
        >
          <div className="container-icon" >
            <RockIcon 
            className="icon"/>
          </div>
        </TapButtonStyled>
      )
    case 'paper':
      return (
        <TapButtonStyled
        startColor={'--startBlueGradient'}
        endColor={'--endBlueGradient'}
        shadowColor={'rgb(37, 67, 195)'}
        >
          <div className="container-icon" >
            <PaperIcon className="icon"/>
          </div>
        </TapButtonStyled>
      )
    case 'scissor':
      return (
        <TapButtonStyled
        startColor={'--startYelllowGradient'}
        endColor={'--endYellowGradient'}
        shadowColor={'#C76C14'}
        >
          <div className="container-icon" >
            <ScissorIcon className="icon"/>
          </div>
        </TapButtonStyled>
      )
    default:
      return null;
  }
}

export default TapButton
