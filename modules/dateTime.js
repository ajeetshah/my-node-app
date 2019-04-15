exports.myDateTime = function() {
  return Date()
}

exports.getDate_YYYYMMDD = function() {
  let d = new Date();
  return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
}
