import { useState } from 'react'
import { toast } from 'react-toastify'
import { FiPlay, FiStopCircle } from 'react-icons/fi'

const DEFAULT_FORM = {
  goal: 'Deep work',
  duration: 45,
  vibe: 'Lo-fi beats',
}

const SessionForm = () => {
  const [form, setForm] = useState(DEFAULT_FORM)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    toast.success(
      `Session started: ${form.goal} for ${form.duration} minutes with ${form.vibe}.`
    )
  }

  const handleEnd = () => {
    toast.warning('Session paused. Take a breather before you jump back in.')
  }

  return (
    <section className="panel">
      <header className="panel-header">
        <h2>Plan a focus sprint</h2>
        <p>Lock in a goal and start a timed session.</p>
      </header>
      <form className="session-form" onSubmit={handleSubmit}>
        <label className="field">
          Goal
          <select name="goal" value={form.goal} onChange={handleChange}>
            <option>Deep work</option>
            <option>Sketching</option>
            <option>Learning</option>
            <option>Admin reset</option>
          </select>
        </label>
        <label className="field">
          Duration (minutes)
          <input
            type="number"
            min="15"
            max="120"
            name="duration"
            value={form.duration}
            onChange={handleChange}
          />
        </label>
        <label className="field">
          Vibe
          <input
            type="text"
            name="vibe"
            value={form.vibe}
            onChange={handleChange}
            placeholder="Lo-fi beats"
          />
        </label>
        <div className="button-row">
          <button className="button primary" type="submit">
            <FiPlay aria-hidden="true" /> Start session
          </button>
          <button className="button ghost" type="button" onClick={handleEnd}>
            <FiStopCircle aria-hidden="true" /> Pause
          </button>
        </div>
      </form>
    </section>
  )
}

export default SessionForm
