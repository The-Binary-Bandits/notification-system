import React from "react";
import { useState } from "react";
import { db } from "./firebase";
import {
	query,
	collection,
	onSnapshot,
	doc,
	addDoc,
	deleteDoc,
} from "firebase/firestore";
import { useEffect } from "react";
import People from "./components/People";

function Priority() {
	const [peoples, setpeoples] = useState([]);
	const [input, setInput] = useState("");

	// Create people
	const createpeople = async (e) => {
		e.preventDefault(e);
		if (input === "" || input.trim() === "") {
			alert("Please enter a valid people");
			setInput("");
			return;
		}
		await addDoc(collection(db, "peoples"), {
			text: input,
		});
		setInput("");
	};

	// Read people from firebase
	useEffect(() => {
		const q = query(collection(db, "peoples"));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			let peoplesArr = [];
			querySnapshot.forEach((doc) => {
				peoplesArr.push({ ...doc.data(), id: doc.id });
			});
			setpeoples(peoplesArr);
		});
		return () => unsubscribe();
	}, []);

	// Delete people
	const deletepeople = async (id) => {
		await deleteDoc(doc(db, "peoples", id));
	};
	return (
		<>
			<div className="w-[100vw] h-[100vh] space-y-5 bg-slate-500">
				<h1 className="font-semibold text-center text-5xl text-white">
					Priority Mail
				</h1>
				<div className="h-[90%] w-[90%] bg-white rounded-md m-auto">
					<form>
						<div className="flex items-center justify-center ">
							<input
								value={input}
								onChange={(e) => setInput(e.target.value)}
								type="search"
								className="h-16 bg rounded-3xl w-4/5 p-2 pl-8 bg-slate-200 mt-4"
								placeholder="Search for people . . . ."
							/>
							<button
								onClick={createpeople}
								className="bg-slate-500 text-white items-center flex mt-4 ml-6 rounded-3xl h-16 w-16"
							>
								<svg
									width="82"
									height="82"
									viewBox="0 0 82 82"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M64.9167 44.4098H44.4167V64.9098H37.5834V44.4098H17.0834V37.5765H37.5834V17.0765H44.4167V37.5765H64.9167V44.4098Z"
										fill="white"
									/>
								</svg>
							</button>
						</div>
					</form>
					<ul>
						{peoples.map((people, index) => (
							<People key={index} people={people} deletePeople={deletepeople} />
						))}
					</ul>
					{peoples.length < 1 ? null : (
						<p className="text-center p-2 bottom-4 z-50 select-none items-center right-[46%] absolute">{`${peoples.length} People Added`}</p>
					)}
				</div>
			</div>
		</>
	);
}

export default Priority;
