export interface FiltersProps {
  changeFilter: (filter: 'All' | 'Completed' | 'Uncompleted') => void
  filters: 'All' | 'Completed' | 'Uncompleted'
}