import { useEffect, useRef, useState } from 'react'
import { useIdleTimer } from 'react-idle-timer'
import { FiActivity, FiMoon } from 'react-icons/fi'
import { toast } from 'react-toastify'
import { formatDuration } from '../utils/time'

const IDLE_TIMEOUT = 15000
const UPDATE_INTERVAL = 500

const IdleTimerCard = () => {
  const [isIdle, setIsIdle] = useState(false)
  const [lastActive, setLastActive] = useState(Date.now())
  const [remaining, setRemaining] = useState(IDLE_TIMEOUT)
  const notifiedIdle = useRef(false)

  const { getRemainingTime } = useIdleTimer({
    timeout: IDLE_TIMEOUT,
    throttle: UPDATE_INTERVAL,
    onIdle: () => {
      setIsIdle(true)
      notifiedIdle.current = true
      toast.warning('You have been idle for 15 seconds. Time to stretch?')
    },
    onActive: () => {
      setIsIdle(false)
      setLastActive(Date.now())
      if (notifiedIdle.current) {
        toast.success('Welcome back! Ready for the next sprint?')
        notifiedIdle.current = false
      }
    },
    onAction: () => setLastActive(Date.now()),
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(getRemainingTime())
    }, UPDATE_INTERVAL)

    return () => clearInterval(interval)
  }, [getRemainingTime])

  return (
    <section className="panel idle-panel">
      <header className="panel-header">
        <h2>Idle pulse</h2>
        <p>React Idle Timer keeps focus sessions honest.</p>
      </header>
      <div className="idle-status">
        <div className={`status-pill ${isIdle ? 'idle' : 'active'}`}>
          {isIdle ? <FiMoon aria-hidden="true" /> : <FiActivity aria-hidden="true" />}
          {isIdle ? 'Idle' : 'Active'}
        </div>
        <div>
          <p className="status-label">Time until idle</p>
          <p className="status-value">{formatDuration(remaining)}</p>
        </div>
        <div>
          <p className="status-label">Last activity</p>
          <p className="status-value">{new Date(lastActive).toLocaleTimeString()}</p>
        </div>
      </div>
    </section>
  )
}

export default IdleTimerCard
