const TaskCategory = tasks => {
  const progressing = [];
  const todos = [];
  const completed = [];
  tasks.map(task => {
    let remaining =
      task.subtasks.length -
      task.subtasks.filter(subtask => subtask.done).length;
    if (remaining == 0) {
      completed.push({...task});
    } else if (remaining == task.subtasks.length) todos.push({...task});
    else progressing.push({...task});
  });
  return {
    progressing,
    todos,
    completed,
  };
};
export default TaskCategory;
