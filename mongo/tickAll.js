import { MongoClient } from 'mongodb'

var url = 'mongodb://brokyz:Zbq260217@192.144.138.47:27017'

export async function tickAll(done) {
  const client = new MongoClient(url)
  const collection = client.db('brokyzList').collection('todos')
  const filter = {}
  const updateDoc = {
    $set: {
      done,
    },
  }
  const result = await collection.updateMany(filter, updateDoc)
  client.close()
  console.log(result)
  return result
}
