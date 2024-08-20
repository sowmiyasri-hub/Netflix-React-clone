
import movies from '../Movies';
import MovieCard from '../components/MovieCard'
import Navbar from './Navbar';
function Home(){
    return(
        <>
        <Navbar/>

        <div className="w-[90vw]  mx-auto flex gap-4 mt-10 justify-center flex-wrap">
            {
                movies.map(movie=><MovieCard slug={movie.slug} img={movie.img}/>)
            }
        </div>
       
        </>
    )
}
export default Home;