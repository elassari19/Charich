'use client'

import React from 'react'
import { RootState } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch, UnknownAction } from '@reduxjs/toolkit'

interface Props {
  sliceTarget: string
  children: (
    store: RootState,
    dispatch: Dispatch<UnknownAction>,
    sliceTarget: string
  ) => React.ReactNode
}

const ReduxContext = ({ children, sliceTarget }: Props) => {

  const dispatch = useDispatch()
  const store = useSelector((state: RootState) => state)

  return (
    <>
      {children(store, dispatch, sliceTarget)}
    </>
  )
}

export default ReduxContext