import axios from 'axios';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';

async function getData() {
  const { data } = await axios.get('https://jsonplaceholder.ir/posts');

  return data;
}
export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('users', getData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
}

export default function Home({ users }) {
  const { data, isLoading, error } = useQuery('users', getData, users);

  if (isLoading) return 'loading...';
  if (error) return 'error';
  return data.map((item) => <li key={item.id}>{(item.title, item.body)}</li>);
}
