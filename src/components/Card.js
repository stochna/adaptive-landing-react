const Card = props => {
  const {
    card,
    clickHandler,
  } = props;

  const getCardDescription = card => {
    const description = [];

    if (typeof card.description === 'object') {
      Object.entries(card.description).forEach(([prop, val]) => {
        switch (prop) {
          case 'teachersCount':
            description.push(`${val}  ${val <= 1 ? 'вчитель' : val >= 5 ? 'різних вчителів' : 'різні вчителі'}`);
            break;
          case 'length':
            description.push(`${val} ${val <= 1 ? 'місяць' : val >= 5 ? 'місяців' : 'місяці'} занять`);
            break;
          case 'lessonsPerWeekCount':
            description.push(`${val} ${val <= 4 ? 'заняття' : 'занять'} на тиждень`);
            break;
          case 'about':
            description.push(`${val}`);
            break;
          default:
            break;
        };
      });
    } else {
      description.push(card.description);
    }

    return description.map(d => {
      return (
        <div key={`card-${d.slice(0, 7)}`}>
          {
            d
          }
        </div>
      )
    });
  };

  const getNeatPrice = price => `${price.toString().replace(/\d{3}$/, ' $&')} грн`;

  return (
    <div className='card__container'>
      <div className='card__photo'>
        <img
          alt=''
          src={card.img}
        >
        </img>
      </div>
      <div className='card__title'>
        {
          card.name
        }
      </div>
      <div className='card__description'>
        {
          getCardDescription(card)
        }
      </div>
      <div className='card__bottom'>
        {
          card.description.price &&
          <>
            <div className='card__price'>
              {
                getNeatPrice(card.description.price)
              }
            </div>
            <div
              className='page__button card__button button'
              onClick={clickHandler}
            >
              {
                `Детальніше`
              }
            </div>
          </>
        }
      </div>
    </div>
  )
};

export default Card;
