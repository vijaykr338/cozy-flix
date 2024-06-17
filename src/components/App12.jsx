import { useEffect, useState } from 'react'
import { Auth } from './auth'
import { db } from '../../config/firebase-config'
import { getDocs, collection } from 'firebase/firestore'

function App() {
 const [movieList, setMovieList] = useState([])

 const moviesCollectionRef = collection(db, "movies")

 useEffect(() => {
  const getMovieList = async () => {
    //READ
    //SET THE MOVIE LIST
    try{
        const data = await getDocs(moviesCollectionRef)
        const filteredData = data.docs.map((doc)=>({...doc.data(), id:doc.id,}))
        console.log(filteredData)
        setMovieList(filteredData)
    } catch(err){
      console.log(err, "Some dogshit happened")
    }
  
  }

  getMovieList();
 }, [])
  
  
  return (
    <div>
      <Auth></Auth>
       <div className='mx-4 my-4'> Showing some data</div>
       {
        movieList.map((movie)=>{
          return(
            <li>
            <h1>Movie Name: {movie.title}</h1>
            <h1>Release Date: {movie.releaseDate}</h1>
            <h1>Oscar: {movie.recievedOscar ? "Yes" : " No"}</h1>
          </li>
          )
         
        })
       }
       <div>
        <p>For Adding stuff to the database</p>
       </div>
    </div>
  )
}

export default App
