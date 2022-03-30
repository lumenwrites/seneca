import { useState, useEffect, createContext, useContext } from 'react'

import questions from 'data/questions.json'

import dynamic from 'next/dynamic'
const Toggles = dynamic(() => import('../components/Toggles'), { ssr: false })

const TogglesContext = createContext({
  toggles: [],
  setToggles: (prev) => {},
})

export function useTogglesContext() {
  return useContext(TogglesContext)
}

export default function Question() {
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)]
  const [toggles, setToggles] = useState(randomQuestion.toggles)
  
  // Calculate percentage of correct answers, and set background based on that
  const correctAnswers = toggles.filter(
    (t) => t.selectedOption === t.correctOption
  )
  const correctness = correctAnswers.length / toggles.length
  let correctnessClass = ''
  if (correctness > 0) correctnessClass = 'partially-correct'
  if (correctness === 1) correctnessClass = 'correct'

  console.log(correctness)
  return (
    <TogglesContext.Provider value={{ toggles, setToggles }}>
      <div className={`question ${correctnessClass}`}>
        <Toggles />
      </div>
    </TogglesContext.Provider>
  )
}
