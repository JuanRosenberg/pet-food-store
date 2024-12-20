// src/components/ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams(); // Obtener el id de la raza de perro desde la URL
  const [dog, setDog] = useState(null); // Estado para almacenar la raza de perro
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const fetchDogDetails = async () => {
      try {
        // Cambia aquí para usar la API de The Dog API
        const response = await fetch(`https://api.thedogapi.com/v1/breeds/${id}`, {
          headers: {
            'x-api-key': 'TU_API_KEY' // Necesitas agregar tu API key aquí
          }
        });

        if (!response.ok) {
          throw new Error('Error al obtener los detalles del perro');
        }

        const data = await response.json();
        setDog(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDogDetails();
  }, [id]);

  // Si está cargando, mostramos un mensaje
  if (loading) {
    return <p>Cargando detalles del perro...</p>;
  }

  // Si hay un error, mostramos el mensaje de error
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Si hay datos, mostramos los detalles
  return (
    <div className="product-detail">
      {dog ? (
        <>
          <h2>{dog.name}</h2>
          <img src={dog.image?.url} alt={dog.name} width="300" />
          <p><strong>Temperamento:</strong> {dog.temperament}</p>
          <p><strong>Vida promedio:</strong> {dog.life_span}</p>
          <p><strong>Origen:</strong> {dog.origin}</p>
          <p><strong>Descripción:</strong> {dog.description}</p>
        </>
      ) : (
        <p>No se encontraron detalles del perro.</p>
      )}
    </div>
  );
};

export default ProductDetail;
