// frontend/src/api.js

import axios from 'axios';

// Set up the base URL for your backend API
const API_URL = 'http://localhost:5000/tasks'; // Replace with your actual backend URL

// Function to fetch all tasks
export const getTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Return the tasks from the API response
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error; // Propagate the error for handling in the component
  }
};

// Function to create a new task
export const createTask = async (text) => {
  try {
    const response = await axios.post(API_URL, { text });
    return response.data; // Return the newly created task
  } catch (error) {
    console.error("Error creating task:", error);
    throw error; // Propagate the error
  }
};

// Function to update an existing task
export const updateTask = async (id, text, completed) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, { text, completed });
    return response.data; // Return the updated task
  } catch (error) {
    console.error("Error updating task:", error);
    throw error; // Propagate the error
  }
};

// Function to delete a task
export const deleteTask = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error; // Propagate the error
  }
};
