import { useState } from "react";

export default function SearchBar(props) {
   // console.log(props);
   const [id, setId] = useState('')

   function handleChange(evento){
      // console.log(evento.target.value);
      setId(evento.target.value)
   }

   const search = () => {
      props.onSearch(id)
      setId('')
   }

   return (
      <div>
         <input type='search' onChange={handleChange} placeholder="Ingresa un ID" value={id} />
         <button onClick={search}>Agregar</button>
      </div>
   );
}
