const FeatureCard = ({ icon: Icon, title, body }) => {
  return (
    <article className="feature-card">
      <span className="feature-icon">
        <Icon aria-hidden="true" />
      </span>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  )
}

export default FeatureCard
