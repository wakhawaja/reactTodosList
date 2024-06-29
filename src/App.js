import './App.css';
import { useState } from "react";
import Header from './Components/Header';
import Body from './Components/Body';
import { Footer } from './Components/Footer';

const App = () => {
  const onDelete = (todo) => {
    // console.log("on Delete of ", todo);
    // todos.splice(todos.indexOf(todo), 1);
    setTodos(todos.filter((e) => { return e !== todo; }));
  }
  const [todos, setTodos] = useState([
    { sno: 1, title: "Goto market", desc: "You need to goto market to get this job done." },
    { sno: 2, title: "Goto school", desc: "You need to goto school to get this job done." },
    { sno: 3, title: "Goto station", desc: "You need to goto station to get this job done." }
  ]);
  return (
    <div className="App">
      <Header title="My Todos List" searchBar={false} />
      <Body todos={todos} onDelete={onDelete} />
      <Footer />
    </div>);
};

export default App;