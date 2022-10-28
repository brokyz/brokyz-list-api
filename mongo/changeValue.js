import { MongoClient } from 'mongodb'

var url = 'mongodb://brokyz:Zbq260217@192.144.138.47:27017'

export async function changeValue(id, value) {
  const client = new MongoClient(url)
  const collection = client.db('brokyzList').collection('todos')
  const filter = {
    id,
  }
  const updateDoc = {
    $set: {
      value,
    },
  }
  const result = await collection.updateOne(filter, updateDoc)
  client.close()
  console.log(result)
  return result
}
