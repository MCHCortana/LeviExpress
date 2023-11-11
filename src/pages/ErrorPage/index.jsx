import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <main>
      <h1>404 Stránka nenalezena</h1>
      <h2>Asi je něco špatně</h2>
      <h2>
        <Link to="/">Zpět na hlavní stránku</Link>
      </h2>
    </main>
  );
};
