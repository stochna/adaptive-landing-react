import { useState } from 'react';
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
      title: '“Найкращі курси”',
      message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        aliquam faucibus magna, quis mattis orci venenatis at. Nulla a ultrices
        lectus, nec hendrerit est.`,
      icon: icons.Reviewer0,
    },
    {
      id: 1,
      title: '“Exciting experience”',
      message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
      icon: icons.Reviewer1,
    },
    {
      id: 2,
      title: '“Amazing”',
      message: `Etiam sit amet enim vitae quam tincidunt congue eu vitae dolor.
        Vestibulum ac tempus nulla. Maecenas vel laoreet sem. Mauris efficitur
        ullamcorper turpis eget vehicula.`,
      icon: icons.Reviewer2,
    },
    {
      id: 3,
      title: '“Рекомендуватиму друзям”',
      message: `Phasellus lorem ipsum, aliquet a dapibus in, facilisis sit amet leo.
        Donec scelerisque risus rutrum ligula tempor molestie. Nam eu malesuada est.
        Nulla sed magna elit.`,
      icon: icons.Reviewer3,
    },
    {
      id: 4,
      title: '“Задоволений результатом”',
      message: `Duis facilisis efficitur justo, eu gravida lacus sodales eu. Sed
        vestibulum commodo risus nec volutpat. Sed euismod lectus sit amet eros
        imperdiet, eu efficitur tellus consectetur.`,
      icon: icons.Reviewer4,
    },
  ];

  useSliderAutoPlay(slidesList.length, currentSlideID, setCurrentSlideID);

  return (
    <div
      ref={thisRef}
      className='page page_reviews page_with-bg-img'
      style={
        {
          backgroundImage: `url(${backgrounds.BG4})`,
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
