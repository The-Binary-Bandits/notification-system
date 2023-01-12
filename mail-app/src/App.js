import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import Footer from "./components/Footer/Footer"
import Priority from "./Priority";


function App() {
	return (
		<>
			<h1 className="font-bold text-lg justify-center">Mail App</h1>
			<Header/>
			<Main/>
			<Footer/>

			<div className="scroll-smooth overflow-x-hidden">
				<Priority />
			</div>

		</>
	);
}

export default App;
