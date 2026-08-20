import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { taskSchema } from "../schemas/taskSchema";
const formatDate = (date) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
const isOverdue = (dueDate, completed) => {
  if (!dueDate || completed) return false;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const due = new Date(dueDate);
  due.setHours(0, 0, 0, 0);

  return due < today;
};
function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("Medium");
  const [taskDueDate, setTaskDueDate] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [errors, setErrors] = useState({});

  // ADD TASK
  const handleAddTask = () => {
    const taskData = {
      title: taskTitle,
      description: taskDescription,
      priority: taskPriority,
      dueDate: taskDueDate,
    };

    const result = taskSchema.safeParse(taskData);

    if (!result.success) {
      const fieldErrors = {};

      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0]] = issue.message;
      });

      setErrors(fieldErrors);
      return;
    }

    // Clear previous errors
    setErrors({});

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      description: taskDescription,
      priority: taskPriority,
      dueDate: taskDueDate,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    // Clear form
    setTaskTitle("");
    setTaskDescription("");
    setTaskDueDate("");
  };

  // EDIT TASK - LOAD DATA INTO FORM
  const handleEditTask = (task) => {
    setTaskTitle(task.title);
    setTaskDescription(task.description);
    setTaskPriority(task.priority);
    setTaskDueDate(task.dueDate);
    setEditingTaskId(task.id);
    setErrors({});
  };

  // UPDATE TASK
  const handleUpdateTask = () => {
    const taskData = {
      title: taskTitle,
      description: taskDescription,
      priority: taskPriority,
      dueDate: taskDueDate,
    };

    const result = taskSchema.safeParse(taskData);

    if (!result.success) {
      const fieldErrors = {};

      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0]] = issue.message;
      });

      setErrors(fieldErrors);
      return;
    }

    // Clear previous errors
    setErrors({});

    setTasks(
      tasks.map((task) =>
        task.id === editingTaskId
          ? {
              ...task,
              title: taskTitle,
              description: taskDescription,
              priority: taskPriority,
              dueDate: taskDueDate,
            }
          : task,
      ),
    );

    // Clear form
    setTaskTitle("");
    setTaskDescription("");
    setTaskDueDate("");
    setEditingTaskId(null);
  };

  // PENDING / COMPLETED
  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  // DELETE TASK
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Tasks
      </Typography>

      {/* TASK FORM */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        {/* TITLE */}
        <TextField
          label={editingTaskId === null ? "Enter task" : "Edit task"}
          value={taskTitle}
          onChange={(event) => setTaskTitle(event.target.value)}
          error={Boolean(errors.title)}
          helperText={errors.title}
        />

        {/* DESCRIPTION */}
        <TextField
          label="Description"
          value={taskDescription}
          onChange={(event) => setTaskDescription(event.target.value)}
          multiline
          rows={3}
          error={Boolean(errors.description)}
          helperText={errors.description}
        />

        {/* DUE DATE */}
        <TextField
          label="Due Date"
          type="date"
          value={taskDueDate}
          onChange={(event) => setTaskDueDate(event.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          error={Boolean(errors.dueDate)}
          helperText={errors.dueDate}
        />

        {/* PRIORITY */}
        <FormControl sx={{ minWidth: 150 }} error={Boolean(errors.priority)}>
          <InputLabel>Priority</InputLabel>

          <Select
            value={taskPriority}
            label="Priority"
            onChange={(event) => setTaskPriority(event.target.value)}
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </FormControl>

        {/* ADD / SAVE BUTTON */}
        <Button
          variant="contained"
          onClick={editingTaskId === null ? handleAddTask : handleUpdateTask}
        >
          {editingTaskId === null ? "Add Task" : "Save Task"}
        </Button>
      </Box>

      {/* TASK LIST */}
      <Box sx={{ mt: 3 }}>
        {tasks.map((task) => (
          <Box
            key={task.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
              border: "1px solid #ddd",
              borderRadius: 2,
              p: 2,
              mb: 1,
              flexWrap: "wrap",
            }}
          >
            {/* TASK INFORMATION */}
            <Box>
              <Typography
                sx={{
                  textDecoration: task.completed ? "line-through" : "none",
                  fontWeight: 600,
                }}
              >
                {task.title}
              </Typography>

              <Typography variant="body2">{task.description}</Typography>

              <Typography variant="body2">
                Due: {formatDate(task.dueDate)}
              </Typography>

              {isOverdue(task.dueDate, task.completed) && (
                <Typography variant="body2" color="error">
                  Overdue
                </Typography>
              )}
              <Typography variant="body2">Priority: {task.priority}</Typography>

              <Typography
                variant="body2"
                sx={{
                  fontWeight: 500,
                }}
              >
                Status: {task.completed ? "Completed" : "Pending"}
              </Typography>
            </Box>

            {/* TASK BUTTONS */}
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                variant="outlined"
                onClick={() => handleToggleTask(task.id)}
              >
                {task.completed ? "Mark Pending" : "Complete"}
              </Button>

              <Button variant="outlined" onClick={() => handleEditTask(task)}>
                Edit
              </Button>

              <Button
                variant="outlined"
                color="error"
                onClick={() => handleDeleteTask(task.id)}
              >
                Delete
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Tasks;
