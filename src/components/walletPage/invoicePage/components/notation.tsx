import React from 'react'
import { StyledNotationItem } from '@components/walletPage/invoicePage/components/styles/notation.styled'
import Icons from '@icons/icons'
import { capitalizeFirstLetter } from '@components/utils/common'

type PropsType = {
  iconColor: string
  category: string
  date: string
  value: number
  currency: string
}

export function NotationItem(props: PropsType) {

  return (
    <StyledNotationItem>
      <div className='right-container'>
        <div className='icon-container'>
          <div style={{ backgroundColor: props.iconColor }}>
            <Icons name={props.category} color='#fff' size='32' className='icon' />
          </div>
        </div>

        <div className='category-container'>
          <p className='category'>{capitalizeFirstLetter(props.category)}</p>
          <p className='date'>{props.date}</p>
        </div>
      </div>

      <div className='left-container'>
        <div className='money-container'>
          <p>
            {props.value.toFixed(2)}
            {props.currency}
          </p>
        </div>
      </div>
    </StyledNotationItem>
  )
}
