import React from 'react';
import './Home.css'; 
import dogImage from '../img/istockphoto.jpg';

const Home = () => (
  <div className="home-container">
    <header className="hero-section">
      <img 
        src={dogImage}  
        alt="Alimentos para Perros" 
        className="hero-image" 
      />
      <div className="hero-text">
        <h1>Bienvenido a la Tienda de Alimentos para Mascotas</h1>
        <p>Ofrecemos los mejores productos para mantener a tu perro sano y feliz.</p>
      </div>
    </header>
    
    <section className="about-section">
      <h2>La Historia de la Relación entre Humanos y Perros</h2>
      <p>
        Los perros han sido compañeros leales de los humanos durante miles de años. 
        Desde sus orígenes como lobos hasta su papel actual como mascotas cariñosas, 
        su evolución ha sido notable. Hoy en día, cuidar de su salud y bienestar 
        es una de nuestras prioridades.
      </p>
      <p>
        En nuestra tienda, entendemos la importancia de una alimentación adecuada 
        para su desarrollo y felicidad. Cada producto que ofrecemos está diseñado 
        para cubrir las necesidades nutricionales de las diferentes razas y etapas de vida.
      </p>
    </section>
  </div>
);

export default Home;
