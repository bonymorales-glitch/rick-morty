import type { Location } from "../types/location.interface";
import Loader from "./ui/Loader";

interface LocationInfoProps{
    location: Location | null;
}

const LocationInfo = ({location}: LocationInfoProps) => {
 
    if (!location) return <Loader message= "Trayendo Informacion de la ubicacion... " />
  return (
    <section className="bg-blue-300 max-h-screen max-w-100 p-6 rounded-xl shadow-[0_20px_30px_-10px_rgba(0,0,0,0.7)] border-black mb-2 ">
        <h2 className="text-2xl font-bold mb-4 underline decoration-green-800">{location.name}</h2>
        <ul className="px-2">
            <li><strong>Id Location: </strong>{location.id}</li>
            <li><strong>Type : </strong>{location.type}</li>
            <li><strong>Dimension : </strong>{location.dimension}</li>
            <li><strong>Polulation : </strong>{location.residents.length}</li>
        </ul>
       
    </section>
  )
}

export default LocationInfo
