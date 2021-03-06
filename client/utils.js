const dayOfWeekMap = {
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  7: 'Sunday',
};
function parseDate(dateObj) {
  const dayOfWeek = dayOfWeekMap[dateObj.getDay()];
  const day = dateObj.getDate();
  const month = dateObj.getMonth();
  const year = dateObj.getFullYear();
  const output = `${dayOfWeek} ${day}-${month}-${year}`;
  return output;
}

function shortenText(text, characterLimit) {
  if (text.length > characterLimit) {
    return text.slice(0, characterLimit) + '...';
  } else {
    return text;
  }
}

export { dayOfWeekMap, parseDate, shortenText };
