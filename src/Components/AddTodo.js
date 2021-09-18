import React,{useState} from "react";


const AddTodo = (props) => {
const[title, setTitle] = useState("");
const [desc, setDesc] = useState("");


const submit = (event) => {
    event.preventDefault()
    if(!title || !desc){
        alert("Title or description cannot be blank")
    }
    else{
    props.addTodo(title, desc);
    setTitle('');
    setDesc('');
    }
}

const titleChangeHandler = (event) => {
setTitle(event.target.value);
}

const descChangeHandler = (event) => {
    setDesc(event.target.value);

}

  return (
    <div className="container my-3">
      <h4>Add a Todo</h4>
      <form onSubmit = {submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            value = {title}
            onChange = {titleChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value = {desc}
            onChange = {descChangeHandler}
          />
        </div>
        <button type="submit" className="btn btn-success btn-sm">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
