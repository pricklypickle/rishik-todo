
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPage from "./NoPage";
import Todo from "./Todo";
import TodoList from './TodoList';

import { ReactDOM } from "react";

    
 function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList />} />
            <Route path="todo" element={<Todo />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
  );
}
export default App
