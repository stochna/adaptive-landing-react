import { useState, useEffect } from 'react';
import Slider from './../components/Slider';

const About = props => {
  const {
    thisRef,
    icons,
    backgrounds,
    useSliderAutoPlay,
  } = props;
  const [currentSlideID, setCurrentSlideID] = useState(0);

  const slidesList = [
    {
      id: 0,
      title: 'Швидкий старт',
      message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        aliquam faucibus magna, quis mattis orci venenatis at. Nulla a ultrices
        lectus, nec hendrerit est. Donec id ligula vitae tellus placerat cursus.`,
      icon: icons.About0,
    },
    {
      id: 1,
      title: 'Зона комфорту',
      message: `Curabitur quis ullamcorper ante. Donec auctor venenatis cursus.
        Donec quis porta eros, ut ultrices nulla. Suspendisse cursus quam lorem,
        id sagittis purus interdum vitae. Praesent orci mauris, efficitur vel laoreet
        ullamcorper, suscipit nec tortor.`,
      icon: icons.About1,
    },
    {
      id: 2,
      title: 'Друзі й емоції',
      message: `Quisque volutpat tempus lobortis. Nullam rutrum aliquam ligula.
        Sed sed turpis non nibh blandit dictum. Nulla mollis egestas sapien at porttitor.
        Pellentesque sit amet quam elit.`,
      icon: icons.About2,
    },
    {
      id: 3,
      title: 'Офіційний результат',
      message: `Pellentesque sodales neque id enim congue, ac tristique lacus semper.
        Suspendisse id eros urna. Nunc ultrices, erat at ultricies euismod, ex
        lorem facilisis nibh, id luctus odio dui quis ante. Donec tortor justo,
        ullamcorper et tristique vel, congue sed purus.`,
      icon: icons.About3,
    },
    {
      id: 4,
      title: 'Англіська по-новому',
      message: `Pellentesque nec rhoncus nisl. Curabitur tincidunt ipsum volutpat
        feugiat rhoncus. In quis augue sed mauris gravida dictum vitae sit amet
        tellus. Mauris luctus pretium dui. Curabitur eu bibendum ex. Nullam a
        ligula aliquam, rutrum enim a, mollis massa.`,
      icon: icons.About4,
    },
  ];

  useSliderAutoPlay(slidesList.length, currentSlideID, setCurrentSlideID);

  return (
    <div
      ref={thisRef}
      className='page page_about page_with-bg-img'
      style={
        {
          backgroundImage: `url(${backgrounds.BG3})`,
        }
      }
    >
      <div className='page__header'>
        <div className='page__title'>
          {
            'Про школу'
          }
        </div>
      </div>
      <div className='page__body'>
        <Slider
          slidesList={slidesList}
          currentSlideID={currentSlideID}
          setCurrentSlideID={setCurrentSlideID}
        />
      </div>
      <div className='page__footer'>
      </div>
    </div>
  )
};

export default About;
