function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

function formatDateStr(date) {
  var d = new Date(date),
    month = d.getMonth(),
    day = d.getDate(),
    year = d.getFullYear();

  var dayPostfix;
  switch (day) {
    case day === 1:
      dayPostfix = "st";
      break;
    case day === 2:
      dayPostfix = "nd";
      break;
    case day === 3:
      dayPostfix = "rd";
      break;
    default:
      dayPostfix = "th";
      break;
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${monthNames[month]} ${day}${dayPostfix}, ${year}`;
}

export { formatDate, formatDateStr };
