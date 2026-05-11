import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/todos';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  // Fetch todos from server
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(API_URL);
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  // Create
  const addTodo = async (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    try {
      const response = await axios.post(API_URL, { text: task });
      setTodos([response.data, ...todos]);
      setTask('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  // Delete
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  // Update (Toggle Completion)
  const toggleComplete = async (todo) => {
    try {
      const response = await axios.put(`${API_URL}/${todo._id}`, { 
        completed: !todo.completed 
      });
      setTodos(todos.map(t => 
        t._id === todo._id ? response.data : t
      ));
    } catch (error) {
      console.error('Error toggling completion:', error);
    }
  };

  // Update (Edit Text)
  const startEdit = (todo) => {
    setEditId(todo._id);
    setEditText(todo.text);
  };

  const saveEdit = async (id) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, { text: editText });
      setTodos(todos.map(t => 
        t._id === id ? response.data : t
      ));
      setEditId(null);
      setEditText('');
    } catch (error) {
      console.error('Error saving edit:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center mb-4 fw-bold text-primary">Smart Task Manager</h2>
              
              <form onSubmit={addTodo} className="input-group mb-4">
                <input 
                  type="text" 
                  className="form-control form-control-lg border-0 bg-light rounded-start-pill ps-4" 
                  placeholder="What needs to be done?" 
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
                <button 
                  className="btn btn-primary px-4 fw-bold rounded-end-pill" 
                  type="submit"
                >
                  Add Task
                </button>
              </form>

              <div className="list-group list-group-flush rounded-3 overflow-hidden">
                {todos.length === 0 ? (
                  <div className="text-center text-muted py-5">
                    <p className="mb-0">No tasks yet. Add one above!</p>
                  </div>
                ) : (
                  todos.map((todo) => (
                    <div 
                      key={todo._id} 
                      className={`list-group-item d-flex align-items-center justify-content-between p-3 border-bottom ${todo.completed ? 'bg-light' : ''}`}
                    >
                      <div className="d-flex align-items-center flex-grow-1 overflow-hidden">
                        <input 
                          type="checkbox" 
                          className="form-check-input me-3 cursor-pointer" 
                          checked={todo.completed}
                          onChange={() => toggleComplete(todo)}
                        />
                        {editId === todo._id ? (
                          <input 
                            type="text" 
                            className="form-control form-control-sm me-2"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            onBlur={() => saveEdit(todo._id)}
                            onKeyPress={(e) => e.key === 'Enter' && saveEdit(todo._id)}
                            autoFocus
                          />
                        ) : (
                          <span 
                            className={`text-truncate ${todo.completed ? 'text-decoration-line-through text-muted' : 'fw-semibold'}`}
                            onClick={() => startEdit(todo)}
                            style={{ cursor: 'pointer' }}
                          >
                            {todo.text}
                          </span>
                        )}
                      </div>
                      <div className="ms-2 flex-shrink-0">
                        <button 
                          className="btn btn-sm btn-outline-danger border-0 rounded-circle" 
                          onClick={() => deleteTodo(todo._id)}
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {todos.length > 0 && (
                <div className="mt-4 pt-3 border-top d-flex justify-content-between align-items-center">
                  <small className="text-muted">
                    {todos.filter(t => !t.completed).length} tasks remaining
                  </small>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
