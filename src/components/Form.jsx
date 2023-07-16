import search from '../assets/search.svg'
const Form = () => {
  return (
    <div>
        <div className='flex gap-4 container p-5 w-72 rounded-lg bg-white  m-auto'>
            <img src={search} alt="" />
            <input className='outline-none ' placeholder='Search for a country...' type="text" />
        </div>
    </div>
  )
}

export default Form