import { useState, useRef } from 'react';
import Teacher0 from './../assets/photos/Teacher0.jpg';
import Teacher1 from './../assets/photos/Teacher1.jpg';
import Teacher2 from './../assets/photos/Teacher2.jpg';
import Teacher3 from './../assets/photos/Teacher3.jpg';
import Teacher4 from './../assets/photos/Teacher4.jpg';
import FilteredList from './../components/FilteredList';
import Filter from './../components/Filter';

const Teachers = props => {
  const {
    thisRef,
    setFilter,
  } = props;

  const teachersList = [
    {
      id: 0,
      name: 'Кевін',
      mark: 'native',
      description: {
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        isNative: true,
      },
      img: Teacher0,
    },
    {
      id: 1,
      name: 'Сара',
      description: {
        about: 'Quo aperiam numquam ad nesciunt mollitia in galisum numquam ab consequatur totam et quis autem et fuga laudantium.',
        isNative: false,
      },
      img: Teacher1,
    },
    {
      id: 2,
      name: 'Джессіка',
      description: {
        about: 'Et dolor voluptas et galisum iste est quasi impedit ut molestiae corrupti enim architecto ab voluptatem quod in culpa explicabo.',
        isNative: false,
      },
      img: Teacher2,
    },
    {
      id: 3,
      name: 'Паркер',
      description: {
        about: 'Sunt debitis sit minus dolorem ea autem doloremque qui illo dolore ut repellat veritatis sit neque doloremque sit dolorem eaque.',
        isNative: true,
      },
      img: Teacher3,
    },
    {
      id: 4,
      name: 'Пітер',
      description: {
        about: 'Aut omnis consectetur cum ipsa deserunt qui tempore nulla est voluptas iusto sit dolorem aliquid sit earum nulla',
        isNative: true,
      },
      img: Teacher4,
    },
  ];

  const [filtersList, setFiltersList] = useState(
    [
      {
        id: 'isNative',
        defaultName: 'Усі вчителі',
        options: [
          {
            id: 0,
            name: 'Pro вчителі',
            value: false,
            isOn: false,
          },
          {
            id: 1,
            name: 'Native вчителі',
            value: true,
            isOn: false,
          },
        ],
      },
    ]
  );

  const setThisFilter = (filterID, optionName) => setFilter(setFiltersList, filterID, optionName);

  return (
    <div
      ref={thisRef}
      className='page page_teachers'
    >
      <div className='page__header'>
        <div className='page__title'>
          {
            'Наші вчителі'
          }
        </div>
        <div className='page__filters'>
        <div className='page__list page__list_scrollable_true'>
          {
            filtersList.map(filter => (
              <Filter
                key={`teachers-filter-${filter.id}`}
                filter={filter}
                setFilter={setThisFilter}
                parentRef={thisRef}
              />
            ))
          }
        </div>
        </div>
      </div>
      <div className='page__body'>
        <FilteredList
          itemsList={teachersList}
          filtersList={filtersList}
        />
      </div>
      <div className='page__footer'>
      </div>
    </div>
  )
};

export default Teachers;
