const { default: Image } = require("next/image");

const TitleSection = ({ children, classes }) => {
  return <h2 className={`section__title ${classes}`}>{children}</h2>;
};

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

const HeaderButton = ({ buttonAlign, children }) => {
  return <button className={`header__cta ${buttonAlign}`}>{children}</button>;
};

const SectionButton = ({ children }) => {
  return <button className="section__button">{children}</button>;
};

export { TitleSection, ImageSection, HeaderButton, SectionButton };
