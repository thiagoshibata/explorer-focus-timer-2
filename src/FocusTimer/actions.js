import state from "./state.js"
import * as timer from "./timer.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")

  timer.countDownd()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  state.minutes = 25
  state.seconds = 0
  timer.updateDisplay()
}

export function advance() {
  state.minutes += 5
  timer.updateDisplay()
}

export function back() {
  if (state.minutes >= 5) {
    state.minutes -= 5
    timer.updateDisplay()
  }
}

export function playForest() {
  state.isMute = document.documentElement.classList.toggle("forest")
  if (state.isMute) {
    sounds.soundForest.play()
    return
  }
  sounds.soundForest.pause()
}

export function playRain() {
  state.isMute = document.documentElement.classList.toggle("rain")
  if (state.isMute) {
    sounds.soundRain.play()
    return
  }
  sounds.soundRain.pause()
}

export function playCoffeShop() {
  state.isMute = document.documentElement.classList.toggle("coffe-shop")
  if (state.isMute) {
    sounds.soundCoffeShop.play()
    return
  }
  sounds.soundCoffeShop.pause()
}

export function playFire() {
  state.isMute = document.documentElement.classList.toggle("fire")
  if (state.isMute) {
    sounds.soundFire.play()
    return
  }
  sounds.soundFire.pause()
}
