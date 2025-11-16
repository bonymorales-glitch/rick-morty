import { useEffect } from "react";
import useFetch from "../hooks/useFetch.ts/useFetch";
import ErrorMessage from "./ui/ErrorMessage";
import Loader from "./ui/Loader";
import type { Resident } from "../types/residentInterface";

interface ResidentCardProps{
    url: string;
}

const ResidentCard = ({url}: ResidentCardProps) => {
  const {data: resident, error, loading, getData: getResident} = useFetch<Resident>();
  useEffect(()=> {
    getResident(url);
  },[url, getResident])

  if (loading) return <Loader message ="Subiendo Residents...."/>
  if (error) return <ErrorMessage message="Error al mostrar el resident"/>
  if (!resident) return <ErrorMessage message="Sin informacion"/>
  
    return (
      <article className="flex justify-center">
      <div className="m-4">
         <img className=" border-yellow-400 border-8 rounded-full shadow-[0_20px_30px_-10px_rgba(0,0,0,0.7)] transition-transform"src={resident.image} alt={resident.name} />
      </div>
        <header className="flex flex-col p-6 mt-20 px-2">
          
            <h2 className="underline outline-offset-8 decoration-2 decoration-green-800 uppercase">{resident.name}</h2>
            <p><strong>Estado: </strong><span className={`absolute ${resident.status === 'Alive' ? 'text-amber-500': resident.status=== 'Dead' ? 'text-red-500': 'text-gray-500'}`}> {resident.status}</span></p>
            <p ><strong>Origen: </strong>{resident.origin.name}</p>
            <p><strong>Episodios: </strong>{resident.episode.length}</p>
            
        </header>
    </article>
  )
}

export default ResidentCard
