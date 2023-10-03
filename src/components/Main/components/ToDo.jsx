import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";

export const ToDoApp = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(storedTasks);
    }, []);

    const addTask = () => {
        if (newTask.trim() === "") {
            alert("Write new task please");
            return;
        }

        const updateTasks = [...tasks, newTask];
        setTasks(updateTasks);

        localStorage.setItem("tasks", JSON.stringify(updateTasks));

        setNewTask("");
    };

    return (
        <div>
            <h1>To-Do Book</h1>
            <ul>
                <li>
                    <Link to="/">Create task manager</Link>
                </li>
                <li>
                    <Link to="/tasks">Get tasks</Link>
                </li>
            </ul>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <input
                                type="text"
                                placeholder="Add task"
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)}
                            />
                            <button onClick={addTask}>Add</button>
                        </div>
                    }
                />
                <Route
                    path="/tasks"
                    element={
                        <ul>
                            {tasks.map((task, index) => {
                                return <li key={index}>{task}</li>;
                            })}
                        </ul>
                    }
                />
            </Routes>
        </div>
    );
};
