import Link from 'next/link';
import { GetServerSidePropsResult, GetServerSidePropsContext, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'node:querystring';
import urlSlug from 'url-slug';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { MovieFullInterface, MoviePreviewInterface } from '../../types/Movie';

function getMovie(title: string): () => Promise<MovieFullInterface> {
  return async () => {
    const res = await fetch(`http://localhost:3000/api/movie/${title}`);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const movie = (await res.json()) as MovieFullInterface;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    return movie;
  };
}

const PageIndex = ({ title }: { title: string }) => {
  const { data: movie, isLoading } = useQuery<MoviePreviewInterface>('movies', getMovie(title));
  if (!movie || isLoading) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <Link href="/">
        <a>Back</a>
      </Link>
      <h2>{movie.title}</h2>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/movies');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const movies = (await res.json()) as MoviePreviewInterface[];
  return {
    paths: movies.map(({ title }) => `/movies/${urlSlug(title)}`),
    fallback: true,
  };
};

export const getStaticProps = async ({
  params,
}: GetServerSidePropsContext<ParsedUrlQuery>): Promise<
  GetServerSidePropsResult<{ title: string; dehydratedState: unknown }>
> => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('movies', getMovie(params.title as string));

  return {
    props: {
      title: params.title as string,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default PageIndex;
