import React, { useState } from 'react'
import { StyledNotationItem } from '@components/walletPage/invoicePage/components/styles/notation.styled'
import Icons from '@icons/icons'

type PropsType = {
  iconColor: string
  category: string
  date: string
  value: number
  currency: string
}

export function NotationItem(props: PropsType) {
  const [showDeleteContainer, setShowDeleteContainer] = useState(false)

  function handleMouseEnter() {
    setShowDeleteContainer(true)
  }

  function handleMouseLeave() {
    setShowDeleteContainer(false)
  }

  return (
    <StyledNotationItem
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='right-container'>
        <div className='icon-container'>
          <div style={{ backgroundColor: props.iconColor }}>
            <Icons name={props.category} color='#fff' size='32' className='icon' />
          </div>
        </div>

        <div className='category-container'>
          <p className='category'>{props.category.charAt(0).toUpperCase() + props.category.slice(1)}</p>
          <p className='date'>{props.date}</p>
        </div>
      </div>

      <div className='left-container'>
        {!showDeleteContainer && (<div className='money-container'>
          <p>{props.value.toFixed(2)}{props.currency}</p>
        </div>)}

        {showDeleteContainer &&(<div className='delete-container'>
          <Icons name='delete' color='#fff' size='24' className='icon' />
        </div>)}
      </div>
    </StyledNotationItem>
  )
}
