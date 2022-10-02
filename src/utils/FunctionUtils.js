/**
 * @template C
 * @param {C} callback
 * @param {number} wait
 * @returns {C & {flush: Function, cancel: Function}}
 */
export function debounce(callback, wait = 0) {
  let debounceTimer;
  let triggerArgs;
  let triggerThis;

  function trigger(...arg) {
    triggerArgs = arg;
    triggerThis = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      callback.apply(triggerThis, triggerArgs);
    }, wait);
  }

  trigger.cancel = () => clearTimeout(debounceTimer);
  trigger.flush = () => {
    clearTimeout(debounceTimer);
    callback.apply(triggerThis, triggerArgs);
  };

  return trigger;
}

export function throttle(callback, wait = 0) {
  let throttleTimer;
  let triggerArgs;
  let triggerThis;
  function trigger() {
    triggerArgs = arguments;
    triggerThis = this;
    if (throttleTimer) return;
    throttleTimer = true;
    setTimeout(() => {
      callback.apply(triggerThis, triggerArgs);
      throttleTimer = false;
    }, wait);
  }

  trigger.cancel = () => clearTimeout(throttleTimer);
  trigger.flush = () => {
    clearTimeout(throttleTimer);
    callback.apply(triggerThis, triggerArgs);
  };

  return trigger;
}
