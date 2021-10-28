import React from 'react';
import { Container } from 'reactstrap';

import HeroSection from './HeroSection';
import CategorySlider from './CategorySlider';
import Location from '../../component/Location/Location.js';
import ProductCards from '../../container/ProductCards';
import Specials from './Specials';
import ProductsTags from './ProductsTags';
import HeroBanner from './HeroBanner';

const index = () => {
  return (
    <main style={{ background: '#F7F8F7' }}>
      <Container>
        <HeroBanner />
        <HeroSection />
        <CategorySlider />
        <Location />
        <ProductCards />
        <Specials />
        <ProductsTags />
      </Container>
    </main>
  );
};

export default index;
