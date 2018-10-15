// Making Objects By Hand

let prince = {
  name: 'Prince',
  role: 'Lead Instructor',
  hobby: 'petting corgis'
}

function onWeekends() {
  return `On weekends, I like ${this.hobby}`
}

prince.onWeekends = onWeekends

