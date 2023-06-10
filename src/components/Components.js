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
      <div className="components__image-content">
        <div
          className={`components__image-box ${firstColor} ${firstBox}`}
        ></div>
        <div
          className={`components__image-box ${secondColor} ${secondBox}`}
        ></div>
        <Image src={image} alt="Section Image" className="components__image" />
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

const SmallButton = ({ children, classname }) => {
  return <button className={`button__small ${classname}`}>{children}</button>;
};

export { ImageSection, HeaderButton, SmallButton, SectionButton };
