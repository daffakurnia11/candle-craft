const Heading = ({ level, children, className }) => {
  switch (level) {
    case 1:
      return <h1 className={`heading-1 ${className}`}>{children}</h1>;
    case 2:
      return <h2 className={`heading-2 ${className}`}>{children}</h2>;
    case 3:
      return <h3 className={`heading-3 ${className}`}>{children}</h3>;
    case 4:
      return <h4 className={`heading-4 ${className}`}>{children}</h4>;
    case 5:
      return <h5 className={`heading-5 ${className}`}>{children}</h5>;
    default:
      return <h6 className={`heading-6 ${className}`}>{children}</h6>;
  }
};

const Paragraph = ({ level, children, className }) => {
  switch (level) {
    case 2:
      return <p className={`body-2 ${className}`}>{children}</p>;
    default:
      return <p className={`body-1 ${className}`}>{children}</p>;
  }
};

export { Heading, Paragraph };
