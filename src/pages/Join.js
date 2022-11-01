import { useState } from 'react';
import BG5 from './../assets/backgrounds/BG5.png';
import Button from './../components/Button';

const Join = props => {
  const {
    thisRef,
  } = props;

  const isValid = field => {
    const {
      id,
      value,
    } = field;

    switch (id) {
      case 'name':
        const name = value.trim();
        return (
          name && !/\d/g.test(name) && (name.length > 1) && (name.length < 75)
        );
      case 'phone-number':
        const number = value;
        return (
          ((number.slice(0, 1) === '0') && (number.length === 10))
          ||
          ((number.slice(0, 3) === '380') && (number.length === 12))
        );
      default:
        return false;
    };
  };

  const [fieldsList, setFieldsList] = useState(
    [
      {
        id: 'name',
        type: 'text',
        name: 'Ім`я',
        value: '',
      },
      {
        id: 'phone-number',
        type: 'tel',
        name: 'Номер телефону',
        value: '',
      },
    ]
  );

  const submitHandler = () => {
    if (!fieldsList.map(field => isValid(field)).includes(false)) {
      alert('Ваша заявка успішно відправлена! Чекайте на дзвінок нашого менеджера.');
      return;
    } else {
      alert('Будь ласка, перевірте, чи правильно Ви заповнили форму.');
      return;
    };
  };

  const changeHandler = (e, fieldName) => setFieldsList(currentFieldsList => (
    currentFieldsList.map(field => {
      if (field.name === fieldName) {
          return (
            {
              ...field,
              value: e.target.value,
            }
          );
        } else {
          return field;
        };
      })
  ));

  return (
    <div
      ref={thisRef}
      className='page page_join page_with-bg-img'
      style={
        {
          backgroundImage: `url(${BG5})`,
        }
      }
    >
      <div className='page__header'>
        <div className='page__title'>
          {
            `Запишися
            на пробне заняття`
          }
        </div>
      </div>
      <div className='page__body'>
        <form className='page__form'>
          {
            fieldsList.map(field => (
              <label
                key={`form-field-${field.name}`}
                htmlFor={field.name}
              >
                <span>
                  {
                    field.name
                  }
                </span>
                <input
                  id={field.name}
                  type={field.type}
                  value={field.value}
                  onChange={e => changeHandler(e, field.name)}
                ></input>
              </label>
            ))
          }
          <Button
            value='Записатися'
            selfClassName='form__button'
            clickHandler={submitHandler}
          />
        </form>
      </div>
    </div>
  )
};

export default Join;
