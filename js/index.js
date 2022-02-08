const ks = ['Xin Yang', 'Yang Xin', '杨鑫']
const styles = [
  {
  },
  {
    fontSize: '16px',
    color: '#006699',
    fontWeight: 'bold',
  },
  {
    color: 'rgb(192,0,0)',
    fontStyle: 'oblique',
    fontWeight: 'bold',
  },
]
function goBack() {
  window.location.href = '../index.html#Research Projects'
}
function textBold(s) {
  for (var i = 0; i < ks.length; ++i) {
    const k = ks[i]
    if (s.indexOf(k) != -1) return s.replace(k, '<b>' + k + '</b>')
  }
  return s
}