const users = [
  {
    id: 1,
    name: 'Alice',
    age: 21
  },
  {
    id: 2,
    name: 'Bob',
    age: 22
  },
  {
    id: 3,
    name: 'Charlie',
    age: 23
  },
  {
    id: 4,
    name: 'Daniel',
    age: 24
  },
  {
    id: 5,
    name: 'Ethan',
    age: 25
  }
]

exports.getUsers = function () {
  return users
}

exports.getUser = function (id) {
  return users[id-1]
}
