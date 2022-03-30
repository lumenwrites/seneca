// import Toggles from 'components/Toggles'
import dynamic from 'next/dynamic'
const Toggles = dynamic(() => import('../components/Toggles'), { ssr: false })

export default function Home() {
  return (
    <div className={'question'}>
      <Toggles />
    </div>
  )
}
