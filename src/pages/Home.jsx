import { Link } from 'react-router-dom';

export const Home = () => {

     // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

    return (
      <main>
        <div>Домашняя страница 🐷</div>
        <div>
      {[].map(movie => {
        return (
          <Link key={movie} to={`${movie}`}>
            {movie}
          </Link>
        );
      })}
    </div>
      </main>
    );
  };
  export default Home