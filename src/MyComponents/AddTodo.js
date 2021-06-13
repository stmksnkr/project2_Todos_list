import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
    const [title,SetTitle] = useState("");
    const [desc,SetDesc] = useState("");
      
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc)
        {
            alert("Title or Description is blank")
        }
        else{
        addTodo(title,desc)
        SetTitle("");
        SetDesc("");
        }
    }
    return (
        <div className="container">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlfor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{SetTitle(e.target.value)}} class="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                    <div  className="mb-3">
                        <label htmlfor="desc" className="form-label">Todo Description</label>
                        <input width type="text" value={desc} onChange={(e)=>{SetDesc(e.target.value)}} class="form-control" id="desc" />
                    </div>
                    <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
