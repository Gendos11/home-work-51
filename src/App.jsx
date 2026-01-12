import { FiCoffee, FiFeather, FiZap } from 'react-icons/fi'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import FeatureCard from './components/FeatureCard'
import IdleTimerCard from './components/IdleTimerCard'
import SessionForm from './components/SessionForm'
import ToastPanel from './components/ToastPanel'

function App() {
  const features = [
    {
      icon: FiZap,
      title: 'Sprint planning',
      body: 'Set a clear goal and commit to a timed focus burst.',
    },
    {
      icon: FiCoffee,
      title: 'Human breaks',
      body: 'Idle detection nudges you to reset before fatigue hits.',
    },
    {
      icon: FiFeather,
      title: 'Creative flow',
      body: 'Playful cues make the session feel more intentional.',
    },
  ]

  return (
    <div className="app">
      <header className="hero">
        <div>
          <p className="eyebrow">Focus fuel for creators</p>
          <h1>Studio Sprint</h1>
          <p className="subtitle">
            A mini dashboard that blends focus planning, idle awareness, and
            gentle feedback to keep creative sessions on track.
          </p>
        </div>
        <div className="hero-tags">
          <span>React Icons</span>
          <span>React Toastify</span>
          <span>React Idle Timer</span>
        </div>
      </header>

      <section className="features">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </section>

      <section className="grid">
        <SessionForm />
        <ToastPanel />
        <IdleTimerCard />
      </section>

      <ToastContainer position="bottom-right" autoClose={3500} theme="colored" />
    </div>
  )
}

export default App
