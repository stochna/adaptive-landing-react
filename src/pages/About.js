import { useState, useEffect } from 'react';
import BG3 from './../assets/backgrounds/BG3.png';
import About0 from './../assets/icons/About0.png';
import About1 from './../assets/icons/About1.png';
import About2 from './../assets/icons/About2.png';
import About3 from './../assets/icons/About3.png';
import About4 from './../assets/icons/About4.png';
import Slider from './../components/Slider';

const About = props => {
  const {
    thisRef,
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
      icon: About0,
    },
    {
      id: 1,
      title: 'Зона комфорту',
      message: `Curabitur quis ullamcorper ante. Donec auctor venenatis cursus.
        Donec quis porta eros, ut ultrices nulla. Suspendisse cursus quam lorem,
        id sagittis purus interdum vitae. Praesent orci mauris, efficitur vel laoreet
        ullamcorper, suscipit nec tortor.`,
      icon: About1,
    },
    {
      id: 2,
      title: 'Друзі й емоції',
      message: `Quisque volutpat tempus lobortis. Nullam rutrum aliquam ligula.
        Sed sed turpis non nibh blandit dictum. Nulla mollis egestas sapien at porttitor.
        Pellentesque sit amet quam elit.`,
      icon: About2,
    },
    {
      id: 3,
      title: 'Офіційний результат',
      message: `Pellentesque sodales neque id enim congue, ac tristique lacus semper.
        Suspendisse id eros urna. Nunc ultrices, erat at ultricies euismod, ex
        lorem facilisis nibh, id luctus odio dui quis ante. Donec tortor justo,
        ullamcorper et tristique vel, congue sed purus.`,
      icon: About3,
    },
    {
      id: 4,
      title: 'Англіська по-новому',
      message: `Pellentesque nec rhoncus nisl. Curabitur tincidunt ipsum volutpat
        feugiat rhoncus. In quis augue sed mauris gravida dictum vitae sit amet
        tellus. Mauris luctus pretium dui. Curabitur eu bibendum ex. Nullam a
        ligula aliquam, rutrum enim a, mollis massa.`,
      icon: About4,
    },
  ];

  useSliderAutoPlay(slidesList.length, currentSlideID, setCurrentSlideID);

  return (
    <div
      ref={thisRef}
      className='page page_about page_with-bg-img'
      style={
        {
          backgroundImage: `url(${BG3})`,
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
