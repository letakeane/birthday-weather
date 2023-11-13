import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { getWeather } from './apiCalls.js';

dayjs.extend(customParseFormat);
const dateString = dayjs().format('YYYY-MM-DD');
const zip = document.querySelector('#zip');
const submit = document.querySelector('#submit');

submit.addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();
  if (zip.value) {
    const zipcode = zip.value;
    getWeather(zipcode, dateString).then(results => {
      console.log(results)
      zip.value = '';
    })
  } else {
    alert('Please input a zip code.')
  }
}