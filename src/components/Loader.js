const Loader = props => {
  const {
    icons,
  } = props;

  const getLoaderContainerHeight = () => window.innerHeight;

  return (
    <div
      className='loader__container'
      styles={
        {
          height: getLoaderContainerHeight(),
        }
      }
    >
      <img
        alt=''
        src={icons.Loader0}
        className='loader__icon loader__icon_rotating'
      ></img>
    </div>
  )
};

export default Loader;
