import { IToggle } from 'components/Question';
import { createContext, useContext } from 'react'

interface ITogglesContext {
  toggles: IToggle[],
  setToggles: React.Dispatch<React.SetStateAction<IToggle[]>>,
  isLocked: boolean
}

export const TogglesContext = createContext<ITogglesContext>({
  toggles: [],
  setToggles: () => { },
  isLocked: false,
})

export function useTogglesContext() {
  return useContext(TogglesContext)
}
