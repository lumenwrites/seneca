import { useState, useEffect, createContext, useContext } from 'react'

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

export default function Question() {
  // let randomQuestion = questions[Math.floor(Math.random() * questions.length)]
  const [toggles, setToggles] = useState(questions[0].toggles)

  // Calculate percentage of correct answers, and set background based on that
  const correctAnswers = toggles.filter(
    (t) => t.selectedOption === t.correctOption
  )
  const correctness = correctAnswers.length / toggles.length
  let correctnessClass = ''
  if (correctness > 0) correctnessClass = 'partially-correct'
  if (correctness === 1) correctnessClass = 'correct'
  const isLocked = correctness === 1
  return (
    <TogglesContext.Provider value={{ toggles, setToggles, isLocked }}>
      <div className={`question ${correctnessClass}`}>
        <Toggles />
      </div>
    </TogglesContext.Provider>
  )
}
