import { useState } from 'react';
import Navbar0 from './../assets/icons/Navbar0.png';

const Navbar = props => {
  const {
    windowSize,
    scrollPageIntoView,
  } = props;

  const [isMobNavbarOpen, setIsMobNavbarOpen] = useState(false);

  const linksList = [
    {
      name: 'Про школу',
      id: 'about',
      isActive: false,
    },
    {
      name: 'Курси',
      id: 'courses',
      isActive: false,
    },
    {
      name: 'Відгуки',
      id: 'reviews',
      isActive: false,
    },
    {
      name: 'Вчителі',
      id: 'teachers',
      isActive: false,
    },
    {
      name: 'Записатися',
      id: 'join',
      isActive: true,
    },
  ];

  const switcherClickHandler = () => setIsMobNavbarOpen(currentIsMobNavbarOpen => !currentIsMobNavbarOpen);

  const linkClickHandler = pageName => {
    scrollPageIntoView(pageName);

    if (isMobNavbarOpen) {
      switcherClickHandler();
    };
  };

  const getNavbarHeight = () => {
    if (isMobNavbarOpen) {
      return window.innerHeight;
    } else {
      const endpoints = {
        tablet: 641,
        desktop: 1008,
        macbook: 1512,
      };

      if (windowSize.width >= endpoints.macbook) {
        return '140px';
      } else if (windowSize.width >= endpoints.desktop) {
        return '130px';
      } else if (windowSize.width >= endpoints.tablet) {
        return '120px';
      }
    };
  };

  return (
    <div
      className={`navbar__container navbar__container_open_${isMobNavbarOpen}`}
      style={
        {
          height: getNavbarHeight(),
        }
      }
    >
      <div
        className='navbar__switcher'
        onClick={switcherClickHandler}
      >
        <img
          alt=''
          src={Navbar0}
        ></img>
      </div>
      {
        linksList.map(link => (
          <span
            key={link.name}
            className={`navbar__link navbar__link_active_${link.isActive}`}
            onClick={() => linkClickHandler(link.id)}
          >
            {
              link.name
            }
          </span>
        ))
      }
    </div>
  )
};

export default Navbar;
