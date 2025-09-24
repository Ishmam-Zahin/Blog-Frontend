'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '@/app/_lib/store'

export default function StoreProvider({
  children,
  token
}: {
  children: React.ReactNode
  token: string | undefined
}) {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore({token})
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}