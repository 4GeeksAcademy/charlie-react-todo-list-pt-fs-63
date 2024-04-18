import React from "react";
import { useState } from "react";

const Home = () => {

	const [list, setList] = useState(["Delete this!"])
	const [inputValue, setInputValue] = useState("")

	const handleAddItem = () => {
		setList([...list, inputValue])
		setInputValue("")
	}
	const validateInput = () => {
		inputValue === "" ? alert("The input cannot be empty") : handleAddItem()
	}
	const handleKeyEnter = (e) => {
		if (e.key === "Enter") {
			validateInput();
		}
	}
	const handleDelete = (id) => {
		setList(list.filter((_elem, index) => index !== id))
	}

	const checkItemNumber = () => {
		if (list.length === 0) {
			return "No tasks, add a task"
		} else return `${list.length} ${list.length === 1 ? "item" : "items"} left`
	}

	return (
		<div className="text-center pt-5">
			<h1 className="text-secondary font-monospace mb-0">ToDo List</h1>
			<small className="text-secondary font-monospace">By Charlie</small>
			<div className="col-7 col-xl-5 mx-auto mt-3 d-flex flex-column">
				<input id="input" type="text" className="form-control border rounded-0 py-3 px-4 fs-5" placeholder="What needs to be done?" 
				onChange={e => 
				setInputValue(e.target.value)} value={inputValue} onKeyDown={handleKeyEnter}/>
				<ul id="list" className="list-group">{list.map((elem, id) => (
					<li id="list-item" className="text-start list-group-item rounded-0 border-top-0 d-flex align-items-center justify-content-between" key={id}>
						<span className="ms-4 fs-5">{elem}</span>
						<button onClick={() => handleDelete(id)} className="btn-close me-2 hoverX"></button>
					</li>
				))}</ul>
					<p className="text-secondary text-end border border-top-0 pe-4">{checkItemNumber()}</p>
			</div>
		</div>
	);
};

export default Home;
