import { MongoClient } from 'mongodb'

var url = 'mongodb://brokyz:Zbq260217@192.144.138.47:27017'

export async function getTodos() {
  const client = new MongoClient(url)
  const collection = client.db('brokyzList').collection('todos')
  const query = {}
  const cursor = collection.find(query)

  if ((await collection.countDocuments()) === 0) {
    console.log('No documents found!')
  }
  const todos = []
  await cursor.forEach(it => {
    todos.push(it)
  })
  client.close()
  return todos
}
