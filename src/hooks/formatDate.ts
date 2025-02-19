export const formatDate = (date: string) => {
  const [day, month, year] = date.split('.').map(Number)
  const taskDate = new Date(year, month - 1, day)

  const today = new Date()
  const yesterday = new Date()
  yesterday.setDate(today.getDate() - 1)

  today.setHours(0, 0, 0, 0)
  yesterday.setHours(0, 0, 0, 0)
  taskDate.setHours(0, 0, 0, 0)

  if (taskDate.getTime() === today.getTime()) {
    return 'Сегодня'
  } else if (taskDate.getTime() === yesterday.getTime()) {
    return 'Вчера'
  } else {
    return date
  }
}