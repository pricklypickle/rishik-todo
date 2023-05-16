
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPage from "./NoPage";
import Todo from "./Todo";
import TodoList from './TodoList';

import { ReactDOM } from "react";

    
export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList />} />

          <Route path="/todo" element={<Todo />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
