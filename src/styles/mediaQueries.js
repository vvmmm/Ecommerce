export const breakpoints = {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  };
  
  export const mediaQueries = key => style => `
    @media (min-width: ${breakpoints[key]}) {
      ${style}
    }
  `;