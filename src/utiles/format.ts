import TimeAgo, { type DateInput } from 'javascript-time-ago'
import zh from 'javascript-time-ago/locale/zh'

export function formatNumber(num = 0) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

TimeAgo.addDefaultLocale(zh)
TimeAgo.addLocale(zh)
const timeAgo = new TimeAgo('zh')

export default function formatTime(time: DateInput): string {
  return timeAgo.format(time)
}
