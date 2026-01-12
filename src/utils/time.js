const MILLISECONDS_IN_SECOND = 1000
const MILLISECONDS_IN_MINUTE = 60 * MILLISECONDS_IN_SECOND

export const formatDuration = (milliseconds) => {
  if (milliseconds <= 0) {
    return '0s'
  }

  const minutes = Math.floor(milliseconds / MILLISECONDS_IN_MINUTE)
  const seconds = Math.floor(
    (milliseconds % MILLISECONDS_IN_MINUTE) / MILLISECONDS_IN_SECOND
  )

  if (minutes === 0) {
    return `${seconds}s`
  }

  return `${minutes}m ${seconds}s`
}
