import { useTogglesContext } from './Question'

export default function Toggles() {
  const { toggles } = useTogglesContext()

  return (
    <div className={`toggles`}>
      {toggles.map((toggle) => (
        <Toggle key={toggle.id} toggle={toggle} />
      ))}
    </div>
  )
}

function Toggle({ toggle }) {
  const { toggles, isLocked, setToggles } = useTogglesContext()
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
  // Responsive
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
