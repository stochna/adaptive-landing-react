import { useState, useEffect } from 'react';
import Course0 from './../assets/photos/Course0.jpg';
import Course1 from './../assets/photos/Course1.jpg';
import Course2 from './../assets/photos/Course2.jpg';
import Course3 from './../assets/photos/Course3.jpg';
import Course4 from './../assets/photos/Course4.jpg';
import Filter from './../components/Filter';
import FilteredList from './../components/FilteredList';

const Courses = props => {
  const {
    thisRef,
    setFilter,
    scrollPageIntoView,
  } = props;

  const coursesList = [
    {
      id: 0,
      name: 'Standart',
      description: {
        price: 7200,
        teachersCount: 3,
        length: 3,
        lessonsPerWeekCount: 3,
        about: 'знайомство з рівнем',
      },
      img: Course0,
    },
    {
      id: 1,
      name: 'Step by Step',
      description: {
        price: 8500,
        teachersCount: 3,
        length: 6,
        lessonsPerWeekCount: 3,
        about: 'опанування рівня',
      },
      img: Course1,
    },
    {
      id: 2,
      name: 'Full Immersion',
      description: {
        price: 11200,
        teachersCount: 5,
        length: 11,
        lessonsPerWeekCount: 3,
        about: 'максимум результату',
      },
      img: Course2,
    },
    {
      id: 3,
      name: 'Fast & Furious',
      description: {
        price: 6500,
        teachersCount: 2,
        length: 1,
        lessonsPerWeekCount: 5,
        about: 'акцент на speaking',
      },
      img: Course3,
    },
    {
      id: 4,
      name: 'English for IT',
      description: {
        price: 6500,
        teachersCount: 2,
        length: 1,
        lessonsPerWeekCount: 1,
        about: 'акцент на tech',
      },
      img: Course4,
    },
  ];

  const [filtersList, setFiltersList] = useState(
    [
      {
        id: 'length',
        unit: 'міс',
        defaultName: 'Будь-яка тривалість',
        options: [],
      },
      {
        id: 'teachersCount',
        unit: 'вч',
        defaultName: 'Будь-яка кількість вчителів',
        options: [],
      },
      {
        id: 'price',
        unit: 'грн',
        defaultName: 'Будь-яка ціна',
        options: [],
      },
    ]
  );

  const setThisFilter = (filterID, optionName) => setFilter(setFiltersList, filterID, optionName);

  useEffect(() => {
    setFiltersList(currentFiltersList => currentFiltersList.map(filter => (
      {
        ...filter,
        options: coursesList
          .map((course, i) => (
          {
            id: i,
            name: `${course.description[filter.id]} ${filter.unit}`,
            value: course.description[filter.id],
            isOn: false,
          }
        ))
          .filter((option, i, arr) => arr.lastIndexOf(arr.find(opt => opt.value === option.value)) === i),
      }
    )))
  }, []);

  return (
    <div
      ref={thisRef}
      className='page page_courses'
    >
    <div className='page__header'>
      <div className='page__title'>
        {
          'Курси'
        }
      </div>
      <div className='page__list page__list_scrollable_true'>
        {
          filtersList.map(filter => (
            <Filter
              key={`courses-filter-${filter.id}`}
              filter={filter}
              setFilter={setThisFilter}
              parentRef={thisRef}
            />
          ))
        }
      </div>
    </div>
    <div className='page__body'>
      <div className='page__list page__list_scrollable_true'>
        <FilteredList
          itemsList={coursesList}
          filtersList={filtersList}
          scrollPageIntoView={scrollPageIntoView}
        />
      </div>
    </div>
    </div>
  )
};

export default Courses;
