function zeroPad(i) {
  if (i < 10) {
    i = "0" + i
  };

  return i;
}


const PAGE_OPENING_TIME = new Date();


function startTime() {
  const diffSecondRaw = (Date.now() - PAGE_OPENING_TIME.getTime()) / 1000;

  const diffHour = Math.floor(diffSecondRaw / 60 / 60);
  const diffMin = Math.floor((diffSecondRaw - diffHour*60*60) / 60);
  const diffSecond = Math.floor((diffSecondRaw - diffHour*60*60 - diffMin*60));

  const diffString = zeroPad(diffHour) + ":" + zeroPad(diffMin) + ":" + zeroPad(diffSecond);


  if (diffHour === 0) {
    document.getElementById('counter').innerHTML = zeroPad(diffMin) + ":" + zeroPad(diffSecond);
  }
  else {
    document.getElementById('counter').innerHTML = diffString;
  }
  setTimeout(startTime, 500);
}

function getTimeOfTheDay() {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateAsString = PAGE_OPENING_TIME.toLocaleDateString('fr-FR', options);

  return dateAsString + ' ' + zeroPad(PAGE_OPENING_TIME.getHours()) + ':' + zeroPad(PAGE_OPENING_TIME.getMinutes());
}


document.getElementById('date-of-the-day').innerHTML = getTimeOfTheDay()

startTime();