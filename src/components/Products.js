import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.thedogapi.com/v1/breeds')
      .then(response => response.json())
      .then(data => {
        setBreeds(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los productos.</p>;

  return (
    <div>
      <h2>Razas de Perros</h2>
      <ul>
        {breeds.map(breed => (
          <li key={breed.id}>
            <Link to={`/products/${breed.id}`}>
              <h3>{breed.name}</h3>
              {breed.image && (
                <img src={breed.image.url} alt={breed.name} width="100" />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
