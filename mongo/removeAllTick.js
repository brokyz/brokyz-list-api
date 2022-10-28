import { MongoClient } from 'mongodb'

var url = 'mongodb://brokyz:Zbq260217@192.144.138.47:27017'

export async function removeAllTick() {
  const client = new MongoClient(url)
  const collection = client.db('brokyzList').collection('todos')
  const query = {
    done: 'true',
  }
  const result = await collection.deleteMany(query)
  client.close()
  return result
}
// removeAllTick()
