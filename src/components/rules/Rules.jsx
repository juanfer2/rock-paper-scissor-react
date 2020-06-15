import React, {useState} from 'react'
import styled, {css} from 'styled-components'

import RulesModal from './RulesModal'

const RulesStyled = styled.div`
  position: relative;
  text-align: center;
  .container-rules{
    margin-top: 40%;
    left: 0; 
    right: 0; 
    .btn{
      border: 1px solid white;
      border-radius: 10px;
      background: none;
      color: white;
      padding-top: 13px;
      padding-bottom: 13px;
      padding-left: 40px;
      padding-right: 40px;
      letter-spacing: 2px;
      text-decoration: none;
      &:hover{
        background: white;
        color: var(--grey-dark);
      }
    }
    .btn-rules{
      font-size: 16px;
      font-weight: 600;
    }
  }
`;


function Rules() {
  const [show, setShow] = useState(false)

  return (
    <RulesStyled>
      <div className="container-rules">
        <button 
        onClick={ () => setShow(true) }
        className="btn btn-rules" >
          RULES
        </button>
      </div>
      <RulesModal setShow={setShow}  show={show} />
    </RulesStyled>
  )
}

export default Rules
