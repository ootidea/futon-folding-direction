import {html, render} from 'lit-html'
import moment from 'moment'

update()

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    update()
  }
})

function update() {
  const spaRoot = document.querySelector('.spa-root')

  const diff = moment().diff(moment('2021-04-01', 'YYYY-MM-DD'), 'days')

  if (diff % 2 === 0) {
    render(html`<img src="./front-arrow.svg" alt="" />`, spaRoot!)
  } else {
    render(html`<img src="./back-arrow.svg" alt="" />`, spaRoot!)
  }
}
