import { useRef, useState, useEffect } from 'react';
import './styles/css/styles.css';
import Navbar from './components/Navbar';
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
        useSliderAutoPlay,
      },
    },
    welcome: {
      component: Welcome,
      ref: useRef(null),
      selfProps: null,
    },
    about: {
      component: About,
      ref: useRef(null),
      selfProps: {
        useSliderAutoPlay,
      },
    },
    courses: {
      component: Courses,
      ref: useRef(null),
      selfProps: {
        setFilter,
      },
    },
    reviews: {
      component: Reviews,
      ref: useRef(null),
      selfProps: {
        useSliderAutoPlay,
      },
    },
    teachers: {
      component: Teachers,
      ref: useRef(null),
      selfProps: {
        setFilter,
      },
    },
    join: {
      component: Join,
      ref: useRef(null),
      selfProps: {
        windowSize,
      },
    },
  };

  const defaultPageProps = {
    scrollPageIntoView,
  };

  useWindowSize();

  return (
    <div
      ref={appRef}
      className='App'
    >
      <Navbar
        windowSize={windowSize}
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
  );
}

export default App;
