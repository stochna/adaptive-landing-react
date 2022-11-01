const Button = props => {
  const {
    value = 'Записатися',
    selfClassName = '',
    clickHandler = () => false,
  } = props;

  return (
    <div
      className={`button ${selfClassName}`}
      onClick={clickHandler}
    >
      {
        value
      }
    </div>
  )
};

export default Button;
