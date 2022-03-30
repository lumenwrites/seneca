import { useState } from 'react'
import questions from 'data/questions.json'

export default function Toggles() {
  const [toggles, setToggles] = useState(questions[0].toggles)
  return (
    <div className="toggles">
      {toggles.map((toggle) => (
        <Toggle
          key={toggle.id}
          toggle={toggle}
          toggles={toggles}
          setToggles={setToggles}
        />
      ))}
    </div>
  )
}

function Toggle({ toggle, toggles, setToggles }) {
  const optionWidth = 100 / toggle.options.length
  function selectOption(idx) {
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
  return (
    <div className="toggle">
      <div className="options">
        {toggle.options.map((option, idx) => (
          <div
            key={idx}
            className={`option ${
              idx === toggle.selectedOption ? 'active' : ''
            }`}
            onClick={() => selectOption(idx)}
          >
            {option}
          </div>
        ))}
      </div>
      <div
        className="activeBG"
        style={{
          width: `${optionWidth}%`,
          left: `${toggle.selectedOption * optionWidth}%`,
        }}
      />
    </div>
  )
}
