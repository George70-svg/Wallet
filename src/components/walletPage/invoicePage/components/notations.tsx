import React from 'react'
import { StyledNotations } from '@components/walletPage/invoicePage/components/styles/notations.styled'
import { NotationItem } from '@components/walletPage/invoicePage/components/notation'
import { useSelector } from 'react-redux'
import { IStore } from '@store/store'

export function NotationsWidget() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  return (
    <StyledNotations colorTheme={colorTheme}>
      <NotationItem category='taxi' iconColor='#F45B69' date='07.03.2023' value={-23.15} currency='$' />
      <NotationItem category='market' iconColor='#7A6174' date='06.03.2023' value={-120.51} currency='$' />
      <NotationItem category='coffee' iconColor='#0C6291' date='05.03.2023' value={-10.1} currency='$' />
      <NotationItem category='restaurant' iconColor='#0C6291' date='05.03.2023' value={-10.1} currency='$' />
      <NotationItem category='taxi' iconColor='#F45B69' date='07.03.2023' value={-23.15} currency='$' />
      <NotationItem category='market' iconColor='#7A6174' date='06.03.2023' value={-120.51} currency='$' />
      <NotationItem category='coffee' iconColor='#0C6291' date='05.03.2023' value={-10.1} currency='$' />
      <NotationItem category='taxi' iconColor='#F45B69' date='07.03.2023' value={-23.15} currency='$' />
      <NotationItem category='market' iconColor='#7A6174' date='06.03.2023' value={-120.51} currency='$' />
      <NotationItem category='coffee' iconColor='#0C6291' date='05.03.2023' value={-10.1} currency='$' />
      <NotationItem category='restaurant' iconColor='#0C6291' date='05.03.2023' value={-10.1} currency='$' />
      <NotationItem category='taxi' iconColor='#F45B69' date='07.03.2023' value={-23.15} currency='$' />
      <NotationItem category='market' iconColor='#7A6174' date='06.03.2023' value={-120.51} currency='$' />
      <NotationItem category='coffee' iconColor='#0C6291' date='05.03.2023' value={-10.1} currency='$' />
      <NotationItem category='taxi' iconColor='#F45B69' date='07.03.2023' value={-23.15} currency='$' />
      <NotationItem category='market' iconColor='#7A6174' date='06.03.2023' value={-120.51} currency='$' />
      <NotationItem category='coffee' iconColor='#0C6291' date='05.03.2023' value={-10.1} currency='$' />
      <NotationItem category='restaurant' iconColor='#0C6291' date='05.03.2023' value={-10.1} currency='$' />
      <NotationItem category='taxi' iconColor='#F45B69' date='07.03.2023' value={-23.15} currency='$' />
      <NotationItem category='market' iconColor='#7A6174' date='06.03.2023' value={-120.51} currency='$' />
      <NotationItem category='coffee' iconColor='#0C6291' date='05.03.2023' value={-10.1} currency='$' />
      <NotationItem category='taxi' iconColor='#F45B69' date='07.03.2023' value={-23.15} currency='$' />
      <NotationItem category='market' iconColor='#7A6174' date='06.03.2023' value={-120.51} currency='$' />
      <NotationItem category='coffee' iconColor='#0C6291' date='05.03.2023' value={-10.1} currency='$' />
      <NotationItem category='restaurant' iconColor='#0C6291' date='05.03.2023' value={-10.1} currency='$' />
      <NotationItem category='taxi' iconColor='#F45B69' date='07.03.2023' value={-23.15} currency='$' />
      <NotationItem category='market' iconColor='#7A6174' date='06.03.2023' value={-120.51} currency='$' />
      <NotationItem category='coffee' iconColor='#0C6291' date='05.03.2023' value={-10.1} currency='$' />
    </StyledNotations>
  )
}
