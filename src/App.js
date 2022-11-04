import { useRef, useState, useEffect } from 'react';
import './styles/css/styles.css';
import * as backgrounds from './assets/backgrounds/backgrounds';
import * as icons from './assets/icons/icons';
import * as photos from './assets/photos/photos';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Main from './pages/Main';
import Welcome from './pages/Welcome';
import About from './pages/About';
import Courses from './pages/Courses';
import Reviews from './pages/Reviews';
import Teachers from './pages/Teachers';
import Join from './pages/Join';

const App = () => {
  const appRef = useRef(null);

  const [windowSize, setWindowSize] = useState(
    {
      height: 0,
      width: 0,
    }
  );
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);

  const useWindowSize = () => {
    useEffect(() => {
      const updateSize = () => setWindowSize(
        {
          height: window.innerHeight,
          width: window.innerWidth,
        }
      );

      window.addEventListener('resize', updateSize);

      updateSize();
    }, []);
  };
  const useImageLoader = () => {
    const images = [backgrounds, icons, photos].map(mod => Object.values(mod)).flat();

    const loadImage = src => new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve();
      img.src = src;
    });

    useEffect(() => {
      Promise
        .all(
          Object
            .entries(images)
            .map(([, src]) => loadImage(src))
          )
        .then(() => setAreImagesLoaded(true));
    }, []);
  };
  const useSliderAutoPlay = (slidesCount, currentSlideID, setCurrentSlideID, playSpeed = 5000) => {
    useEffect(() => {
      const getNextSlideID = currentSlideID => {
        const nextID = currentSlideID + 1;
        const nextSlideID = slidesCount === nextID ? 0 : nextID;

        return nextSlideID;
      };

      const interval = setInterval(() => {
        setCurrentSlideID(currentSlideID => getNextSlideID(currentSlideID));
      }, playSpeed);

      return () => clearInterval(interval);
    }, [currentSlideID]);
  };

  const setFilter = (setFilter, filterID, optionName) => {
    setFilter(currentFiltersList => currentFiltersList.map(filter => {
      console.log(filterID);
      if (filter.id === filterID) {
        return (
          {
            ...filter,
            options: filter.options.map(option => {
              if (option.name === optionName) {
                return (
                  {
                    ...option,
                    isOn: !option.isOn,
                  }
                )
              } else {
                return option;
              };
            }),
          }
        );
      } else {
        return filter;
      };
    }));
  };

  const scrollPageIntoView = pageName => {
    const pageEl = pages[pageName].ref.current;

    if (pageEl) {
      pageEl.scrollIntoView(
        {
          block: 'start',
          behavior: 'smooth',
        }
      )
    };
  };

  const pages = {
    main: {
      component: Main,
      ref: useRef(null),
      selfProps: {
        backgrounds,
        useSliderAutoPlay,
      },
    },
    welcome: {
      component: Welcome,
      ref: useRef(null),
      selfProps: {
        photos,
      },
    },
    about: {
      component: About,
      ref: useRef(null),
      selfProps: {
        icons,
        backgrounds,
        useSliderAutoPlay,
      },
    },
    courses: {
      component: Courses,
      ref: useRef(null),
      selfProps: {
        photos,
        setFilter,
      },
    },
    reviews: {
      component: Reviews,
      ref: useRef(null),
      selfProps: {
        icons,
        backgrounds,
        useSliderAutoPlay,
      },
    },
    teachers: {
      component: Teachers,
      ref: useRef(null),
      selfProps: {
        photos,
        setFilter,
      },
    },
    join: {
      component: Join,
      ref: useRef(null),
      selfProps: {
        windowSize,
        icons,
        backgrounds,
      },
    },
  };

  const defaultPageProps = {
    scrollPageIntoView,
  };

  useWindowSize();
  useImageLoader();

  return (
    areImagesLoaded ?
    <div
      ref={appRef}
      className='App'
    >
      <Navbar
        windowSize={windowSize}
        icons={icons}
        scrollPageIntoView={scrollPageIntoView}
      />
      {
        Object
          .entries(pages)
          .map(([pageName, pageEntries]) => {
          const [PageComponent, pageRef, pageSelfProps] = Object.values(pageEntries);

          return (
            <PageComponent
              key={`page-${pageName}`}
              thisRef={pageRef}
              {...defaultPageProps}
              {...pageSelfProps}
            />
          )
        })
      }
    </div>
    :
    <Loader
      icons={icons}
    />
  );
}

export default App;
