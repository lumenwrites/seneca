import { FC } from 'react'
import { useTogglesContext } from './Question'
import { IToggle } from './Question'

interface ToggleProps {
  toggle: IToggle
}

export const Toggle:FC<ToggleProps> = ({ toggle }) => {
  const { isLocked, setToggles } = useTogglesContext()
  const optionSize = 100 / toggle.options.length

  function selectOption(idx) {
    if (isLocked) return
    setToggles((prev) => {
      const updatedToggles = prev.map((t) => {
        if (t.id === toggle.id) {
          return { ...toggle, selectedOption: idx }
        }
        return t
      })
      return updatedToggles
    })
  }

  let activeBackgroundStyles = {
    width: `${optionSize}%`,
    left: `${toggle.selectedOption * optionSize}%`,
  } as any
  // Responsive styles
  if (window.innerWidth < 700) {
    activeBackgroundStyles = {
      height: `${optionSize}%`,
      top: `${toggle.selectedOption * optionSize}%`,
    }
  }
  
  return (
    <div className="toggle">
      <div className="options">
        {toggle.options.map((option, idx) => {
          let className = 'option'
          if (idx === toggle.selectedOption) className += ' active'
          if (isLocked) className += ' locked'
          return (
            <div
              key={idx}
              className={className}
              onClick={() => selectOption(idx)}
            >
              {option}
            </div>
          )
        })}
      </div>
      <div className="activeBG" style={activeBackgroundStyles} />
    </div>
  )
}
