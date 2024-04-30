import state from "./state.js"
import * as events from "./events.js"
import * as timer from "./timer.js"

export function play(minutes, seconds) {
  if (minutes) state.minutes = minutes
  if (seconds) state.seconds = seconds

  timer.updateDisplay()

  events.registerControls()
}
