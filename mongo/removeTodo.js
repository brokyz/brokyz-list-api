import { MongoClient } from 'mongodb'

var url = 'mongodb://brokyz:Zbq260217@192.144.138.47:27017'

export async function removeTodo(id) {
  const client = new MongoClient(url)
  const collection = client.db('brokyzList').collection('todos')
  const query = {
    id,
  }
  const result = await collection.deleteOne(query)
  client.close()
  if (result.deletedCount === 1) {
    return 'Successfully deleted one document.'
  } else {
    return 'No documents matched the query. Deleted 0 documents.'
  }
}
