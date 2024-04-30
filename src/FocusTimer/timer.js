import state from "./state.js"
import * as el from "./elements.js"
import { reset } from "./actions.js"

export function countDownd() {
  clearTimeout(state.countdowndID)
  if (!state.isRunning) {
    return
  }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  state.minutes = minutes
  state.seconds = seconds

  seconds--

  if (seconds < 0) {
    seconds = 59
    minutes--
  }
  if (minutes < 0) {
    reset()
    return
  }
  updateDisplay(minutes, seconds)
  state.countdowndID = setTimeout(() => countDownd(), 1000)
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}
