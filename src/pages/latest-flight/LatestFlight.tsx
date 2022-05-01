import { useQuery } from 'react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

export function LatestFlight() {
  const { data, isLoading, isError, error } = useQuery('latest-flight', async ({ signal }) => {
    return axios.get('/launches/latest', { signal }).then((res) => res.data);
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return (
      <p>
        Error: <pre>{JSON.stringify(error, null, 2)}</pre>
      </p>
    );
  }

  return (
    <div>
      <Link to="/">Back to homepage</Link>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
