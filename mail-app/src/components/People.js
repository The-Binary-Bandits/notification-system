import React from "react";

function People({ people, deletePeople }) {
	return (
		<>
			<li className='flex justify-between bg-slate-200 p-4 my-2 capitalize'>
				<div className='flex'>
					<p className='ml-2 cursor-pointer'>{people.text}</p>
				</div>
				<button className="cursor-pointer items-center" onClick={() => deletePeople(people.id)}>
					{
						<svg
							width="30"
							height="30"
							viewBox="0 0 80 80"
							fill="none"
							className="fill-red-700"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M63.3333 13.3333H51.6666L48.3333 10H31.6666L28.3333 13.3333H16.6666V20H63.3333M20 63.3333C20 65.1014 20.7023 66.7971 21.9526 68.0474C23.2028 69.2976 24.8985 70 26.6666 70H53.3333C55.1014 70 56.7971 69.2976 58.0473 68.0474C59.2976 66.7971 60 65.1014 60 63.3333V23.3333H20V63.3333Z"
								fill=""
							/>
						</svg>
					}
				</button>
			</li>
		</>
	);
}

export default People;
