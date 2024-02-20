import recordData from '../../data/records.json' assert { type: 'json' }
import { v4 as uuid } from 'uuid'

const createRecord = (title, artist, year, genre) => {
  const newRecord = {
    id: uuid(),
    title,
    artist,
    year,
    genre
  }

  recordData.records.push(newRecord)
  return newRecord
}

export default createRecord
