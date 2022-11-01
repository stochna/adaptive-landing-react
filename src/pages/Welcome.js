import Welcome1 from './../assets/photos/Welcome1.jpg';
import Button from './../components/Button';

const Welcome = props => {
  const {
    thisRef,
  } = props;

  const lorem = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.`,
    `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
    dolore eu fugiat nulla pariatur.`,
    `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.`,
  ];

  return (
    <div
      ref={thisRef}
      className='page page_welcome'
    >
      <div className='page__header'>
        <div className='page__title'>
          {
            'Welcome'
          }
        </div>
      </div>
      <div className='page__body'>
        <div className='page__message'>
          {
            lorem.map((par, i) => (
              <div key={`welcome-message-${i}`}>
                {
                  par
                }
              </div>
            ))
          }
        </div>
        <div className='page__photo'>
          <img
            alt=''
            src={Welcome1}
          ></img>
        </div>
        <div className='page__button'>
          <Button
            value='Записатися'
          />
        </div>
      </div>
    </div>
  )
};

export default Welcome;
