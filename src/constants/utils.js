export const formatDuration = (millis) => {
  const seconds = millis / 1000;
  const minsRemaining = Math.round(seconds / 60);
  const secRemaining = Math.round(seconds % 60);
  const mins = minsRemaining > 9 ? minsRemaining : `0${minsRemaining}`;
  const secs = secRemaining > 9 ? secRemaining : `0${secRemaining}`;
  return `${mins}:${secs}`;
};
