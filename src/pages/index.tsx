import Link from 'next/link';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import urlSlug from 'url-slug';
import { Head } from '../components/head';
import { Nav } from '../components/nav';
import styles from './index.module.scss';
import { MoviePreviewInterface } from '../types/Movie';

async function getMovies(): Promise<MoviePreviewInterface[]> {
  const res = await fetch('http://localhost:3000/api/movies');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const movies = (await res.json()) as MoviePreviewInterface[];
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return movies;
}

const PageIndex = () => {
  const { data: movies, isLoading } = useQuery<MoviePreviewInterface[]>('movies', getMovies);
  if (!movies || isLoading) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <Head title="Home" />
      <Nav />
      {movies.map((movie) => (
        <div key={movie.title}>
          <p className={styles.card}>
            <Link href={`/movies/${urlSlug(movie.title)}`}>
              <a>
                <strong>{movie.title}</strong>
              </a>
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('movies', getMovies);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
export default PageIndex;
