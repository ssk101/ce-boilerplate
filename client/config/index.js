const script = document.querySelector('script[src="/application.js"]')
const {
  root,
} = script.dataset

export default {
  root,
  fallbackValue: '-',
  dateFormat: 'YYYY/MM/DD HH:mm:ss',
  pageLimit: 15,
}
