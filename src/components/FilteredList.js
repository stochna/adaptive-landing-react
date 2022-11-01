import Card from './Card';

const FilteredList = props => {
  const {
    itemsList,
    filtersList,
    scrollPageIntoView,
  } = props;

  const clickHandler = () => scrollPageIntoView('join');

  const getFilteredList = itemsList => {
    const filtersOnList = filtersList.filter(filter => filter.options.findIndex(opt => opt.isOn) !== -1);

    let currentItemsList = itemsList;

    const applyFilter = (list, filter) => {
      const optionsOnList = filter.options.filter(opt => opt.isOn);

      currentItemsList = list.filter(item => {
        const itemChecked = optionsOnList.map(opt => opt.value === item.description[filter.id]);
        return itemChecked.includes(true);
      });
    };

    if (filtersOnList.length) {
      for (let i = 0; i <= filtersOnList.length; i++) {
        applyFilter(currentItemsList, filtersOnList[i]);

        if (i === filtersOnList.length - 1) {
          return currentItemsList;
        };
      }
    } else {
      return itemsList;
    };
  };

  return (
    <div className='page__list page__list_scrollable_true'>
      {
        getFilteredList(itemsList).map(item => (
          <Card
            key={`teacher-card-${item.id}`}
            card={item}
            clickHandler={clickHandler}
          />
        ))
      }
    </div>
  )
};

export default FilteredList;
