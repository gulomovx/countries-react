import search from '../assets/search.svg'
import down from '../assets/Group 2 (1).svg'
const Filter = () => {
  return (
    <div className=' '>
      
      

      <div className=' '>
        <select className='p-5 w-72 rounded-lg' name="select" id="select">
          <option value="">Filter by region</option>
          <option defaultValue="africa">Africa</option>
          <option defaultValue="america">America</option>
          <option defaultValue="asia">Asia</option>
          <option defaultValue="europe">Europe</option>
          <option defaultValue="oceania">Oceania</option>
        </select>
      </div>



        




    </div>
  )
}

export default Filter