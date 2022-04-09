import { useTogglesContext } from './Question'
import { Toggle } from './Toggle'

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
