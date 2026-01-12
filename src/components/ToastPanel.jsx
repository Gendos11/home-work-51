import { toast } from 'react-toastify'
import { FiCheckCircle, FiAlertTriangle, FiXCircle } from 'react-icons/fi'

const ToastPanel = () => {
  return (
    <section className="panel">
      <header className="panel-header">
        <h2>Quick nudges</h2>
        <p>Use Toastify for clear, friendly feedback.</p>
      </header>
      <div className="button-grid">
        <button
          className="button success"
          type="button"
          onClick={() => toast.success('Nice! Your playlist is locked in.')}
        >
          <FiCheckCircle aria-hidden="true" /> Success toast
        </button>
        <button
          className="button warning"
          type="button"
          onClick={() => toast.warning('Heads up: you are nearing your break.')}
        >
          <FiAlertTriangle aria-hidden="true" /> Warning toast
        </button>
        <button
          className="button danger"
          type="button"
          onClick={() => toast.error('Oops, your timer failed to sync.')}
        >
          <FiXCircle aria-hidden="true" /> Error toast
        </button>
      </div>
    </section>
  )
}

export default ToastPanel
