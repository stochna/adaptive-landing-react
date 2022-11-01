import { useState } from 'react';
import BG4 from './../assets/backgrounds/BG4.png';
import Reviewer0 from './../assets/icons/Reviewer0.png';
import Reviewer1 from './../assets/icons/Reviewer1.png';
import Reviewer2 from './../assets/icons/Reviewer2.png';
import Reviewer3 from './../assets/icons/Reviewer3.png';
import Reviewer4 from './../assets/icons/Reviewer4.png';
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
      title: '“Найкращі курси”',
      message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        aliquam faucibus magna, quis mattis orci venenatis at. Nulla a ultrices
        lectus, nec hendrerit est.`,
      icon: Reviewer0,
    },
    {
      id: 1,
      title: '“Exciting experience”',
      message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
      icon: Reviewer1,
    },
    {
      id: 2,
      title: '“Amazing”',
      message: `Etiam sit amet enim vitae quam tincidunt congue eu vitae dolor.
        Vestibulum ac tempus nulla. Maecenas vel laoreet sem. Mauris efficitur
        ullamcorper turpis eget vehicula.`,
      icon: Reviewer2,
    },
    {
      id: 3,
      title: '“Рекомендуватиму друзям”',
      message: `Phasellus lorem ipsum, aliquet a dapibus in, facilisis sit amet leo.
        Donec scelerisque risus rutrum ligula tempor molestie. Nam eu malesuada est.
        Nulla sed magna elit.`,
      icon: Reviewer3,
    },
    {
      id: 4,
      title: '“Задоволений результатом”',
      message: `Duis facilisis efficitur justo, eu gravida lacus sodales eu. Sed
        vestibulum commodo risus nec volutpat. Sed euismod lectus sit amet eros
        imperdiet, eu efficitur tellus consectetur.`,
      icon: Reviewer4,
    },
  ];

  useSliderAutoPlay(slidesList.length, currentSlideID, setCurrentSlideID);

  return (
    <div
      ref={thisRef}
      className='page page_reviews page_with-bg-img'
      style={
        {
          backgroundImage: `url(${BG4})`,
        }
      }
    >
      <div className='page__header'>
        <div className='page__title'>
          {
            'Відгуки'
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
