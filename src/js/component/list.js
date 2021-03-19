import React, { useState, useEffect } from "react";

export function CreateList() {
	const [input, setInput] = useState("");
	const [task, setTask] = useState([]);
	const [count, setCount] = useState(0);

	const handleSubmit = () => {
		if (input != "") {
			let newArray = [...task, { label: input, done: false }];
			setTask(newArray);

			setInput("");

			setCount(count + 1);
		}
	};

	const DeleteInput = index => {
		task.splice(index, 1);
		setTask([...task]);

		setCount(count - 1);
	};

	return (
		<div className="container-fluid card p-0">
			<div className="card-header">
				<h1 className="card-title text-secondary">TODO</h1>
			</div>
			<div className="card-body pt-0 px-0">
				<input
					className="w-100 border p-3 m-0 font-weight-light text-secondary display-5"
					type="text"
					placeholder="What needs to be done?"
					onChange={e => setInput(e.target.value)}
					onKeyPress={e => (e.key === "Enter" ? handleSubmit() : "")}
					value={input}
				/>
				{task.map((Element, i) => (
					<h5
						className="card-text border w-100 mb-0 p-3 font-weight-light text-secondary text-capitalize"
						id={i}
						onClick={e => DeleteInput(e.target.id)}
						key={i}>
						{" "}
						{Element.label}
					</h5>
				))}

				<div className="pt-3 pl-3 pb-0 text-muted">
					<small> {count} item left</small>
				</div>
			</div>
		</div>
	);
}
