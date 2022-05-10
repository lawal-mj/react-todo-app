import Header from "./components/Header";
import Input from "./components/Input";
import Task from "./components/Task";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <Header />
      <Input />
      <Task />
    </div>
  );
}
