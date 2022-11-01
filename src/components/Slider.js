import { CSSTransition } from 'react-transition-group';

const Slider = props => {
  const {
    slidesList,
    currentSlideID,
    setCurrentSlideID,
  } = props;

  const currentSlide = slidesList.find(slide => slide.id === currentSlideID);

  const clickHandler = id => setCurrentSlideID(id);

  return (
    <div className='slider__container'>
      <div className='slider__list'>
        {
          slidesList.map(slide => (
            <div
              key={`slider-${slide.id}`}
              className={`slider__icon slider__icon_active_${slide.id === currentSlideID}`}
              onClick={() => clickHandler(slide.id)}
            >
              <img
                alt=''
                src={slide.icon}
              ></img>
            </div>
          ))
        }
      </div>
      <div className='slider__content'>
        {
          slidesList.map(slide => (
            <CSSTransition
             key={`slide-${slide.id}-${slide.title}`}
             in={slide.id === currentSlideID}
             timeout={3000}
             classNames='slider-transition'
             unmountOnExit
            >
              <div
                key={`slide-${slide.id}-${slide.title}`}
                className={`slider__block slider__block_shown_${slide.id === currentSlideID}`}
              >
                <div className='slider__title'>
                  {
                    slide.title
                  }
                </div>
                <div className='slider__message'>
                  {
                    slide.message
                  }
                </div>
              </div>
              </CSSTransition>
            ))
          }
      </div>
    </div>
  )
};

export default Slider;
