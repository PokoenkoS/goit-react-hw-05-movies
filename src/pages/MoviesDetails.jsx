import { Link, Outlet, useParams } from 'react-router-dom';

export const MoviesDetails = () => {
  const { movieId } = useParams();

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return (
    <>
      <h1>MoviesDetails: {movieId}</h1>
      <ul>
        <li>
          <Link to="cast">Акторський склад</Link>
        </li>
        <li>
          <Link to="review">Огляди</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

