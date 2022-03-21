import { useState } from "react"

export default function Toggles({ toggles }) {
  const [selectedOption, setSelectedOption] = useState(0)
  return (
    <div className="toggles">
      {toggles.map((t) => (
        <Toggle toggle={t} selectedOption={selectedOption} />
      ))}
    </div>
  )
}

function Toggle({ toggle, selectedOption }) {
  return (
    <div className="toggle">
      {toggle.options.map((option, idx) => (
        <div className={`option ${idx === selectedOption ? "active" : ""}`}>{option}</div>
      ))}
    </div>
  )
}
