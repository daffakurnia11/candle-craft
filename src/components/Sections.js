const { default: Image } = require("next/image");

const ImageSection = ({
  image,
  firstColor,
  secondColor,
  firstBox,
  secondBox,
}) => {
  return (
    <>
      <div className="section__image-content">
        <div className={`section__image-box ${firstColor} ${firstBox}`}></div>
        <div className={`section__image-box ${secondColor} ${secondBox}`}></div>
        <Image src={image} alt="Section Image" className="section__image" />
      </div>
    </>
  );
};

const HeaderButton = ({ buttonAlign, children, className }) => {
  return (
    <button className={`button__black ${buttonAlign} ${className}`}>
      {children}
    </button>
  );
};

const SectionButton = ({ children, className }) => {
  return <button className={`button__white ${className}`}>{children}</button>;
};

export { ImageSection, HeaderButton, SectionButton };
