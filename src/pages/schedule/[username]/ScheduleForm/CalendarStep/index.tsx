import { Calendar } from '../../../../../components/Calendar'
import { Container } from './styles'

export function CalendarStep() {
  return (
    <Container isTimePickerOpen={false}>
      <Calendar />
    </Container>
  )
}
