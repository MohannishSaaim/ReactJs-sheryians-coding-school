import React from 'react'
import CenterCard from './centerCard'

const Center = (props) => {
    console.log(props.cardData)
  return (
    <div className='ml-6 flex gap-8'>
      {
        props.cardData.map((card) => {
          return (
            <div key={card.id}>
              <CenterCard cardData={card} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Center
