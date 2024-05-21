'use client'

import React from 'react'
import { RootState } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch, UnknownAction } from '@reduxjs/toolkit'

interface Props {
  children: (
    store: RootState,
    dispatch: Dispatch<UnknownAction>,
  ) => React.ReactNode
}

const ReduxContext = ({ children }: Props) => {

  const dispatch = useDispatch()
  const store = useSelector((state: RootState) => state)

  return (
    <>
      {children(store, dispatch)}
    </>
  )
}

export default ReduxContext