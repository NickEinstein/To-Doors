import { throttle } from "./Utils";

class IdleTimer {
  constructor({
    timeout,
    onTimeout,
    onLoadTimeout,
    setExpiredTime,
    getExpiredTime,
    localStorageKey,
  }) {
    this.timeout = timeout || 60 * 1000;
    this.onTimeout = onTimeout;
    this.onLoadTimeout = onLoadTimeout;
    this.setExpiredTime = setExpiredTime || this._setExpiredTime;
    this.getExpiredTime = getExpiredTime || this._getExpiredTime;
    this.localStorageKey = localStorageKey || "_IDLE_EXPIRED_TIME";
    this.eventHandler = this.updateExpiredTime.bind(this);

    // const expiredTime = this.getExpiredTime() || 0;
    // if (expiredTime > 0 && expiredTime <= Date.now()) {
    //   if (this.onLoadTimeout) {
    //     this.onLoadTimeout();
    //   }
    //   return;
    // }

    this.start();
  }

  updateExpiredTime = throttle(() => {
    this.setExpiredTime(Date.now() + this.timeout);
  }, 1000);

  start() {
    this.updateExpiredTime();
    this.interval = setInterval(() => {
      const expiredTime = this.getExpiredTime() || 0;
      if (expiredTime <= Date.now()) {
        if (this.onTimeout) {
          this.onTimeout(expiredTime);
        }
        this.cleanUp();
      }
    }, 1000);
    this.tracker();
  }

  tracker() {
    window.addEventListener("mousemove", this.eventHandler);
    window.addEventListener("scroll", this.eventHandler);
    window.addEventListener("keydown", this.eventHandler);
  }

  cleanUp() {
    clearInterval(this.interval);
    window.removeEventListener("mousemove", this.eventHandler);
    window.removeEventListener("scroll", this.eventHandler);
    window.removeEventListener("keydown", this.eventHandler);
  }

  _setExpiredTime(expiredTime) {
    localStorage.setItem(this.localStorageKey, expiredTime);
  }

  _getExpiredTime() {
    return parseInt(localStorage.getItem(this.localStorageKey) || 0, 10);
  }
}

export default IdleTimer;
