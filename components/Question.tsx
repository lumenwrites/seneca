import { useState, createContext, useContext } from 'react'

import questions from 'data/questions.json'

import dynamic from 'next/dynamic'
const Toggles = dynamic(() => import('../components/Toggles'), { ssr: false })

const TogglesContext = createContext({
  toggles: [],
  setToggles: (prev) => {},
  isLocked: false,
})

export function useTogglesContext() {
  return useContext(TogglesContext)
}

export interface IToggle {
  id: number
  correctOption: number
  selectedOption: number
  options: string[]
}

export default function Question() {
  const [toggles, setToggles] = useState<IToggle[]>(questions[0].toggles)
  const [activeQuestion, setActiveQuestion] = useState(0)
  // Calculate percentage of correct answers, and set background based on that
  const correctAnswers = toggles.filter(
    (t) => t.selectedOption === t.correctOption
  )
  const correctness = correctAnswers.length / toggles.length
  let correctnessClass = ''
  if (correctness > 0) correctnessClass = 'partially-correct'
  if (correctness === 1) correctnessClass = 'correct'
  const isLocked = correctness === 1

  function randomizeQuestion() {
    setActiveQuestion((prev) => {
      let activeQuestion
      if (prev + 1 === questions.length) {
        activeQuestion = 0
      } else {
        activeQuestion = prev + 1
      }
      setToggles(questions[activeQuestion].toggles)
      return activeQuestion
    })
  }

  return (
    <TogglesContext.Provider value={{ toggles, setToggles, isLocked }}>
      <div className={`question ${correctnessClass}`}>
        <Toggles />
      </div>
      <button className="randomize" onClick={randomizeQuestion}>
        Next Question
      </button>
    </TogglesContext.Provider>
  )
}
