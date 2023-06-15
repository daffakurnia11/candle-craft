import Image from "next/image";

const ImageSection = ({
  image,
  firstColor,
  secondColor,
  firstBox,
  secondBox,
  ...props
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
        <Image
          src={image}
          width={300}
          height={300}
          alt="Section Image"
          className="components__image"
          style={props.style}
        />
      </div>
    </>
  );
};

const HeaderButton = ({ buttonAlign, ...props }) => {
  return (
    <button
      className={`button__black ${buttonAlign} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
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
