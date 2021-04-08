import {html, render} from 'lit-html'
import moment from 'moment'

const spaRoot = document.querySelector('.spa-root')

const diff = moment().diff(moment.unix(0), 'days')

if (diff % 2 === 0) {
  render(html`<div class="arrow"></div>`, spaRoot!)
} else {
  render(html`<div class="arrow flip"></div>`, spaRoot!)
}
