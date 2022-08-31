
export function formatDate (date,fmt) {
  if (date==null) date = new Date();
  let dateSeparator = "-";
  let timeSeparator = ":";
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let strDate = date.getDate();
  let hours =date.getHours();
  let minutes = date.getMinutes();
  let seconds=date.getSeconds();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }

  return year + dateSeparator + month + dateSeparator + strDate;
}
