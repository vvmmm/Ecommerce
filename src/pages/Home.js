import React from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductContext';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import img1 from '../assets/image3.png'
import img2 from '../assets/image4.png'
import img3 from '../assets/image5.png'
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  background: #f8f9fa;
  text-align: center;
  height="200px"
`;

const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: 100% 100%;
`;


const FeaturedProducts = styled.div`
  padding: 2rem 0;
`;

const Home = () => {
  const { products, loading, error } = useProducts();
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      <HeroSection >
                <div id="carouselExampleCaptions" className="carousel slide container">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <Image src={img1} alt="" />
                <div className="carousel-caption d-none d-md-block text-success bg bg-dark">
                    <h1>Welcome to E-Shop</h1>
                    <p>Discover amazing products at great prices</p>
                </div>
                </div>
                <div className="carousel-item">
                <Image src={img2} alt="" />

                <div className="carousel-caption d-none d-md-block text-success bg bg-dark">
                    <h1>Welcome to E-Shop</h1>
                    <p>Discover amazing products at great prices</p>
                </div>
                </div>
                <div className="carousel-item">
                <Image src={img3} alt="" />

                <div className="carousel-caption d-none d-md-block text-success bg bg-dark">
                    <h1>Welcome to E-Shop</h1>
                    <p>Discover amazing products at great prices</p>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bg bg-dark rounded-circle p-4" aria-hidden="true"></span>
                <span className="visually-hidden ">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon bg bg-dark rounded-circle p-4" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
                    
      </HeroSection>

      <FeaturedProducts className="container my-4 px-3 rounded-3 border border-secondary">
        <h2>Featured Products</h2>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <div className="product-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
        <div className='container d-flex justify-content-center'><Link to="/products" className='border-bottom border-dark'>View All</Link></div>
      </FeaturedProducts>
 
      <FeaturedProducts className="container  my-4 px-3 rounded-3 border border-secondary">
        <h2>Top Selling</h2>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <div className="product-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
         <div className='container d-flex justify-content-center'><Link to="/products" className='border-bottom border-dark'>View All</Link></div>
      </FeaturedProducts>
    </div>
  );
};

export default Home;