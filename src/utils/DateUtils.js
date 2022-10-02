/**
 *
 * @param {Date | string | number} from
 * @param {Date | string | number} to
 */
export function getCountdown(from, to) {
  const oneSecondInMilli = 1000,
    oneMinuteInMilli = oneSecondInMilli * 60,
    oneHourInMilli = oneMinuteInMilli * 60,
    oneDayInMilli = oneHourInMilli * 24;

  const _from = new Date(from),
    _to = new Date(to),
    _fromTime = _from.getTime(),
    _toTime = _to.getTime(),
    distance = _toTime - _fromTime;

  const days = Math.floor(distance / oneDayInMilli),
    hours = Math.floor((distance % oneDayInMilli) / oneHourInMilli),
    minutes = Math.floor((distance % oneHourInMilli) / oneMinuteInMilli),
    seconds = Math.floor((distance % oneMinuteInMilli) / oneSecondInMilli);

  return { days, hours, minutes, seconds };
}
