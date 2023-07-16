import moon from "../assets/Group 3 (2).svg";
import { useGetData } from "../hooks/useGetData";
import Form from "../components/Form";
import Filter from "../components/Filter";
import Menu from '../components/Menu'
import SingleCountry from '../components/SingleCountry'
const Main = () => {
  const limit = 8
  const start = 1
  const { data } = useGetData(`http://13.51.196.53:8080/countries/`);

  console.log(data && data);
  const countries = data?.data
  return (
    <div className="">
      <Menu></Menu>
      {/* MENU */}
      
      <div className="flex justify-between items-center container">
        <Form></Form>
        <Filter></Filter>
      </div>

      {/* flags grid */}
      <div className=" grid grid-cols-4 gap-4 container">
        {countries &&
          countries.map((item) => {
            return (
              <div key={item._id} className="bg-slate-200">
                <div className="w-56 p-5">
                  <img  src={item.flags.png} alt="" className='max-w-full img' />
                  <h1>{item.name.common}</h1>
                  <p>Population: {item.population}</p>
                  <p>Region:{item.region}</p>
                  <p>Capital: {item.capital}</p>
                </div>
              </div>
            );
          })}
      </div>
      <SingleCountry></SingleCountry>
    </div>
    
  );
};

export default Main;
