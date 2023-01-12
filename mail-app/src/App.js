import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import Footer from "./components/Footer/Footer"
import Priority from "./Priority";


function App() {
	return (
		<>
			<Header/>
			<h1 className="font-bold text-lg text-center justify-center">Mail App</h1>
			<div className="scroll-smooth overflow-x-hidden">
				<Priority />
			</div>
			<Footer/>

		</>
	);
}

export default App;
