import {useState } from "react"
import "./App.css"
// import { faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
// import { faMagnifyingGlass } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = () => {

    const [search, setSearch] = useState("")

    const handleSearch = (e)=> {
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    const searchBtn = ()=> {
        console.log("click")
        setSearch("")
    
    }
    

    return (
        <>
        <div className="searchContainer">
            <input className="searchInput"
            value={search} 
            type="text" 
            placeholder="Enter city"
            onChange={(e)=> handleSearch(e)} />
            <button className="searchBtn" onClick={searchBtn}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
        </>
    )
}

export default Search