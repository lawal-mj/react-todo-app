import Header from "./components/Header";
import Input from "./components/Input";
import Task from "./components/Task";


export default function App(){
    return (
        <div className="container-fluid todo-container">
            <Header />
            <Input />
            <Task />
        </div>
    )

}