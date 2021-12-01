export function getAll() {
  return fetch('http://localhost:4000/todo').then((res) => res.json())
}

export function create(item) {
  return fetch('http://localhost:4000/todo', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  }).then((res) => res.json())
}

export function update(item) {
  return fetch(`http://localhost:4000/todo/${item.id}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  }).then((res) => res.json())
}

export function remove(id) {
  return fetch(`http://localhost:4000/todo/${id}`, {
    method: 'DELETE'
  }).then((res) => res.json())
}
