import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import BG0 from './../assets/backgrounds/BG0.png';
import BG1 from './../assets/backgrounds/BG1.png';
import BG2 from './../assets/backgrounds/BG2.png';
import Button from './../components/Button';

const Main = props => {
  const {
    thisRef,
    scrollPageIntoView,
    useSliderAutoPlay,
  } = props;

  const [currentSlideID, setCurrentSlideID] = useState(0);

  const slidesList =  [
    {
      id: 0,
      title: `Англійська
        для всіх рівнів`,
      message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.`,
      bg: BG0,
    },
    {
      id: 1,
      title: `Поглиблені
        спецкурси`,
      message: `Nunc ultrices, erat at ultricies euismod, ex lorem facilisis nibh,
        id luctus odio dui quis ante. Donec tortor justo, ullamcorper et tristique
        vel, congue sed purus. Pellentesque nec rhoncus nisl. Curabitur tincidunt
        ipsum volutpat feugiat rhoncus.`,
      bg: BG1,
    },
    {
      id: 2,
      title: `Графік
        обираєш ти`,
      message: `Ut non urna accumsan, egestas felis ac, ultrices elit. Maecenas
        viverra est et leo pharetra, pulvinar convallis erat imperdiet. Nulla
        mollis elit vel quam bibendum, sed tempus tortor imperdiet. Nullam
        aliquam massa lorem, at eleifend magna cursus non.`,
      bg: BG2,
    },
  ];

  const sliderButtonsList = [
    {
      value: 'Детальніше',
      clickHandler: () => scrollPageIntoView('courses'),
    },
    {
      value: 'Записатися',
      clickHandler: () => scrollPageIntoView('join'),
    },
  ];

  useSliderAutoPlay(slidesList.length, currentSlideID, setCurrentSlideID);

  return (
    <div ref={thisRef}>
      {
        slidesList.map(slide => (
         <CSSTransition
          key={`slide-${slide.id}`}
          in={currentSlideID === slide.id}
          timeout={3000}
          classNames='slider-transition'
         >
          <div
            className={`page page_main page_with-bg-img page_shown_${slide.id === currentSlideID}`}
            style={
              {
                backgroundImage: `url(${slide.bg})`,
              }
            }
          >
            <div className='page__header'>
              <div className='page__title'>
                {
                  slide.title
                }
              </div>
            </div>
            <div className='page__body'>
              <div className='page__message'>
                {
                  slide.message
                }
              </div>
              <div className='page__button-group'>
                {
                  sliderButtonsList.map((button, i) => (
                    <Button
                      key={`main-page-button-${i}`}
                      value={button.value}
                      clickHandler={button.clickHandler}
                    />
                  ))
                }
              </div>
            </div>
            <div className='page__footer'>
              <div className='page__switchers-group'>
                {
                  slidesList.map(slide => (
                    <div
                      key={`page-switcher-${slide.id}`}
                      className={`page__switcher page__switcher_active_${slide.id === currentSlideID}`}
                      onClick={() => setCurrentSlideID(slide.id)}
                    >
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          </CSSTransition>
        ))
      }
    </div>
  )
};

export default Main;
