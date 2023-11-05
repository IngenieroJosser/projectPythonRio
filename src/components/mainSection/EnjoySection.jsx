const EnjoySection = ({ title, description, image }) => {
  return (
    <>
      <div className="enjoy-section">
        <div className="enjoy-content">
          <div className="right-content">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <div className="left-content">
            <img src={image} alt="Imagen del banner de la derecha" />
          </div>
        </div>
      </div>
    </>
  );
};

export default EnjoySection;
