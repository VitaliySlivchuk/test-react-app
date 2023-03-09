import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home';
import About from './About';
import Products from './Products';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};
