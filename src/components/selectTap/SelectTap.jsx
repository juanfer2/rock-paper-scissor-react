import React from 'react'

import TapButton from '../tapButton/TapButton'

function SelectTap() {
  return (
    <div>
      <div className="container-tap">
        <TapButton type={'paper'} />
        <TapButton type={'scissor'} />
      </div>
      <div className="container-tap-center">
        <TapButton type={'rock'}/>
      </div>
    </div>
  )
}

export default SelectTap
