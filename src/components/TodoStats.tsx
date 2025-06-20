import React from 'react';
import { Todo } from '../types/todo';

interface TodoStatsProps {
  todos: Todo[];
}

const TodoStats: React.FC<TodoStatsProps> = ({ todos }) => {
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const pendingTodos = totalTodos - completedTodos;

  if (totalTodos === 0) return null;

  return (
    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
      <div className="flex flex-wrap gap-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="font-medium">Total:</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
            {totalTodos}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium">Completed:</span>
          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full">
            {completedTodos}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium">Pending:</span>
          <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full">
            {pendingTodos}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TodoStats;
