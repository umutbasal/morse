import './style.css'
import { codesToText } from './morse'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1></h1>
    <h3></h3>
    <h2 style="word-spacing: 1em;">.--. .-. . ... ... / ... .--. .- -.-. .</h2>
    <p>press space</p>
  </div>
`

// morse code
enum Morse {
  DOT = '.',
  DASH = '-',
  SPACE = ' '
}

let events: KeyboardEvent[] = []
let timestamp = 0

function eventHandler(event: KeyboardEvent) {
  renderMorse()
  // if delete key
  if (event.key === 'Backspace' && event.type === 'keydown') {
    document.querySelector('h1')!.textContent = document.querySelector('h1')!.textContent?.slice(0, -1) || '';
    return
  }
  // space
  if (event.key != ' ') {
    return
  }

  events.push(event)

  if (event.type === 'keyup') {
    const morse = events.filter(e => e.type === 'keydown').length === 1 ? Morse.DOT : Morse.DASH
    if (event.timeStamp - timestamp > 1000) {
      document.querySelector('h1')!.textContent += Morse.SPACE
    }
    document.querySelector('h1')!.textContent += morse
    timestamp = event.timeStamp
    events = []
  }
  renderMorse()
}

document.addEventListener('keydown', eventHandler)
document.addEventListener('keyup', eventHandler)
document.addEventListener('keypress', eventHandler)



function renderMorse() {
  const codes = document.querySelector('h1')!.textContent?.split(' ')
  document.querySelector('h3')!.textContent = codesToText(codes!)
}
