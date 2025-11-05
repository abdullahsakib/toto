const API_BASE = "https://toto-1-ce43.onrender.com";

export async function fetchTodos() {
  const res = await fetch(`${API_BASE}/todos/`);
  return res.json();
}

export async function createTodo(title) {
  const res = await fetch(`${API_BASE}/todos/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  });
  return res.json();
}

export async function toggleTodo(id, completed) {
  const res = await fetch(`${API_BASE}/todos/${id}/`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed })
  });
  return res.json();
}

export async function deleteTodo(id) {
  await fetch(`${API_BASE}/todos/${id}/`, { method: 'DELETE' });
}
