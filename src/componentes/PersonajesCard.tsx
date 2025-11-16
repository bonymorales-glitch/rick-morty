import type { Personajes } from "../types/Personajes.interface";

interface PersonajesCardProps {
	personajes: Personajes;
}

export default function PersonajesCard({ personajes }: PersonajesCardProps) {
	return (
		<article className="bg-slate-800 rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:scale-105 transition-transform max-w-52 mx-auto">
			<img
				src={personajes.results[0].image}
				alt={`${personajes.results[0].name}` }
				className="rounded-full w-24 h-24 mb-3 border-2 border-slate-700"
			/>
			<h2 className="font-semibold text-lg">
				{personajes.results[0].name}
			</h2>
			<p className="text-slate-400 text-sm">{personajes.results[0].origin.name}</p>
			
		</article>
	);
}
