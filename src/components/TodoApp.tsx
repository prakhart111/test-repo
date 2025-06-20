import React from 'react';
import { CheckSquare, Trash2 } from 'lucide-react';
import { useTodos } from '../hooks/useTodos';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import TodoStats from './TodoStats';

const TodoApp: React.FC = () => {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodos();

  const hasTodos = todos.length > 0;
  const hasCompletedTodos = todos.some(todo => todo.completed);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CheckSquare className="text-blue-600" size={32} />
            <h1 className="text-3xl font-bold text-gray-800">Todo List</h1>
          </div>
          <p className="text-gray-600">Stay organized and get things done!</p>
        </div>

        {/* Todo Form */}
        <div className="mb-8">
          <TodoForm onAddTodo={addTodo} />
        </div>

        {/* Todo Stats */}
        <TodoStats todos={todos} />

        {/* Clear Completed Button */}
        {hasCompletedTodos && (
          <div className="mb-6 flex justify-end">
            <button
              onClick={clearCompleted}
              className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-200"
            >
              <Trash2 size={16} />
              Clear Completed
            </button>
          </div>
        )}

        {/* Todo List */}
        <div className="space-y-3">
          {!hasTodos ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <CheckSquare size={64} className="mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-500 mb-2">
                No todos yet
              </h3>
              <p className="text-gray-400">
                Add your first todo above to get started!
              </p>
            </div>
          ) : (
            todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
