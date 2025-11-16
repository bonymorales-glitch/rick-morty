import { useDeferredValue, useEffect, useMemo, useState } from "react"
import useFetch from "./hooks/useFetch.ts/useFetch";
import type { Location } from "./types/location.interface";
import getRandomNumber from "./utils/getRamdomNumber";
import Loader from "./componentes/ui/Loader";
import ErrorMessage from "./componentes/ui/ErrorMessage";
import LocationInfo from "./componentes/LocationInfo";
import ResidentCard from "./componentes/ResidentCard";
import LocationForm from "./componentes/LocationForm";
import Pagination from "./componentes/ui/pagination";


function App() {
  const [locationId, setLocationId]= useState<number>(getRandomNumber(126));
  const url = `https://rickandmortyapi.com/api/location/${locationId}`;
  const{ data: location, error, loading, getData:getLocation} = useFetch<Location>();
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(()=> {
    getLocation(url)
  },[url, getLocation])

  const deferredLocation = useDeferredValue(location)

  const residentsPerPage = 5;
  const totalResidents = deferredLocation?.residents.length ?? 0;
  const totalPages = Math.ceil(totalResidents / residentsPerPage);
  const paginatedResidents = deferredLocation?.residents.slice(
    (currentPage - 1) * residentsPerPage,
    currentPage * residentsPerPage,
  );

  const rederedResidents = useMemo(()=> {
    if (!deferredLocation?.residents.length) {
    return (
      < ErrorMessage
      message={`La ubicacion: ${deferredLocation?.name} no tiene residentes `}/>
    );

  }
    return paginatedResidents?.map((url) =>(
    <ResidentCard key={url} url={url}/>
    ));
},[paginatedResidents, deferredLocation]);

    return (

      <main className="min-h-screen flex-col items-center justify-center bg-gray-100">
        <header>
          <img className="" src="../public/img/rick.png" alt="Encabezado rick and morty" />
        </header>
      <div className="bg-amber-400 w-full h-12"><h1 className="text-3xl font-bold text-white text-center text-shadow-lg">Proyecto Rick And Morty</h1></div>
      
      <LocationForm setLocationId = {setLocationId} />
      {
        loading?(
          <Loader message="Subiendo Informacion ...."/>
        ): error ? (
        <ErrorMessage message="Error al cargar datos" />
        ):(
          <>
          <LocationInfo location={location} />
          <section>
           {rederedResidents }
          </section>
          </>
        )
      }

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}
		
    </main>
  )
}

export default App
