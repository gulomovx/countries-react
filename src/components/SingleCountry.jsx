import Menu from "./Menu"
import back from '../assets/Shape (1).svg'
import useGetData from '../hooks/useGetData'


const SingleCountry = () => {
  return (
    <div className="">
        <Menu></Menu>
        <div className="flex justify-between container">

         <div className=" cursor-pointer bg-white flex gap-2 p-2  w-24 rounded-lg">
          <img src={back} alt=""  />
          <p>Back</p>
         </div>
         
        </div >

        {/* flag */}
        <div className="container ">
          <div>
           {/* <img src={item.flags.png} alt="" /> */}
          </div>
          <div>
            {/* info */}
            <useGetData>
                <img src={item.flags.png} alt="" />
            </useGetData>
            <div></div>
            <div></div>
          </div>

        </div>
    </div>
  )
}

export default SingleCountry