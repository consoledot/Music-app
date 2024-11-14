export const formatDuration = (duration: number) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;

  return {
    minutes: `${minutes} minutes`,
    full: `${minutes}: ${seconds.toString().padStart(2, "0")}`,
  };
};

export const getPercentage = (curr: number, total: number) => {
  return (curr / total) * 100;
};
