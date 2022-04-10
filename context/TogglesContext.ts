import { createContext, useContext } from 'react'

export const TogglesContext = createContext({
  toggles: [],
  setToggles: (prev) => { },
  isLocked: false,
})

export function useTogglesContext() {
  return useContext(TogglesContext)
}
