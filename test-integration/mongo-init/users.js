const database = db.getSiblingDB('application_database');

database.getCollection('users').insert({
  username: 'test-user',
  password: 'password',
  name: 'User'
})
