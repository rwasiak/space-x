import { Link } from 'react-router-dom';

export function PageNotFound() {
  return (
    <div>
      <Link to="/">Back to homepage</Link>
      <p>Page not found</p>
    </div>
  );
}
