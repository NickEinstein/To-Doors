import { useEffect, useState } from "react";
import { getCountdown } from "utils/DateUtils";

/**
 * @param {any} date
 * @param {{interval: number}} option
 */
function useCountdown(date, option = {}) {
  const { interval = 1000 } = option;
  const [state, setState] = useState(() => ({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    status: CountdownStatus.IDLE,
    started: false,
    inProgress: false,
    ended: false,
  }));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const countdown = getCountdown(
        new Date(),
        date ? new Date(date) : new Date()
      );
      const inProgress =
        countdown.days > 0 ||
        countdown.hours > 0 ||
        countdown.minutes > 0 ||
        countdown.seconds >= 0;

      if (inProgress) {
        setState((p) => ({
          ...p,
          ...countdown,
          status: CountdownStatus.IN_PROGRESS,
        }));
      } else {
        setState((p) => ({
          ...p,
          status:
            p.status === CountdownStatus.IDLE
              ? CountdownStatus.COMPLETED_IDLE
              : CountdownStatus.COMPLETED,
        }));
        clearInterval(intervalId);
      }
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [date, interval]);

  return {
    ...state,
    idle: state.status === CountdownStatus.IDLE,
    inProgress: state.status === CountdownStatus.IN_PROGRESS,
    completed: state.status === CountdownStatus.COMPLETED,
    completed_idle: state.status === CountdownStatus.COMPLETED_IDLE,
  };
}

export default useCountdown;

const CountdownStatus = {
  IDLE: "IDLE",
  IN_PROGRESS: "IN_PROGRESS",
  COMPLETED: "COMPLETED",
  COMPLETED_IDLE: "COMPLETED_IDLE",
};
