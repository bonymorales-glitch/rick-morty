import { useRef } from "react";

interface LocationFormProps{
    setLocationId: (value: number) => void;
}

const LocationForm = ({setLocationId}: LocationFormProps) => {
    const inputId = useRef <HTMLInputElement>(null);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        if(inputId.current?.value){
            setLocationId(Number(inputId.current.value.trim()));
        }
    };

  return (
    <div className="flex justify-end mt-2">
        <form
            onSubmit={handleSubmit}
            className="flex gap-y-4 w-65 ml-6 gap-2"
        >  
         <input 
            ref={inputId}     
            type="number" 
            min={1}
            max={126}
            placeholder="Numero Location"
            className="w-full rounded-l-md text-black focus:ring-2 focus:ring-green-400  border-cyan-400 border-2 placeholder-gray-400"
          />
         <button
            type="submit"
            className="cursor-pointer bg-cyan-600 text-gray-800 hover:bg-green-700 px-4 py-2 rounded-r-md font-semibold transition-colors"
            >
                Buscar
         </button>
        </form>
    </div>
  )
}

export default LocationForm
