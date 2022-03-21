import Toggles from 'components/Toggles'
import questions from 'data/questions.json'

export default function Home() {
  return (
    <div className={'question'}>
      <Toggles toggles={questions[0].toggles} />
    </div>
  )
}
