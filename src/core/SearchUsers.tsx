import React,{useEffect , useState , useCallback} from 'react'
import { useDebouncedCallback } from 'use-debounce';

const searchIcon = require("./../assets/images/search-icon.png") as string;


const SearchUsers = ({onChange} : any) => {

    const [value, setValue] = useState('');
    const debounced = useDebouncedCallback((value) => setValue(value),500);

    useEffect(() => {onChange(value)}, [value])
  
  

  return (
    <form className='w-72 border-surface-300 p-1 border rounded-xl flex items-center py-1 px-2' action="">
        <img className='w-5 h-5' src={searchIcon} alt="seacrh" />
        <input onChange={({target}) => debounced(target.value)} className='bg-transparent outline-none placeholder-surface-500 w-full text-surface-500 px-2' placeholder='جستجو' type="text" />
    </form>
  )
}

export default SearchUsers