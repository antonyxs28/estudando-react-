import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404</h1>
      <p>page not found</p>
      <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>
        to back
      </Link>
    </div>
  );
}