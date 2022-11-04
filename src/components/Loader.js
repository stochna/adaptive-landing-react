import { useState, useEffect } from 'react';

const Loader = props => {
  const {
    icons,
  } = props;

  const getLoaderContainerHeight = () => window.innerHeight;

  const [isLoaderMessageShown, setIsLoaderMessageShown] = useState(false);

  const useLoaderTimeout = time => {
    useEffect(() => {
      const timeout = setTimeout(() => setIsLoaderMessageShown(true), time);

      return () => clearTimeout(timeout);
    }, [])
  };

  useLoaderTimeout(5000);

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
      <div
        className={`loader__message loader__message_shown_${isLoaderMessageShown}`}
      >
        {
          `Завантаження займає забагато часу.
          Будь ласка, перезавантажте сторінку.`
        }
      </div>
    </div>
  )
};

export default Loader;
