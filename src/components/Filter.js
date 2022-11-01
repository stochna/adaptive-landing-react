import { useState, useRef, useEffect } from 'react';

const Filter = props => {
  const {
    filter,
    setFilter,
    parentRef,
  } = props;

  const filterContainer = useRef(null);

  const [isContainerOpen, setIsContainerOpen] = useState(false);

  const clickHandler = option => {
    if (isContainerOpen) {
      setFilter(filter.id, option.name);
    } else {
      setIsContainerOpen(true);
    };
  };

  const optionsList = filter.options.sort((a, b) => a.value - b.value);
  const optionsOnList = optionsList.filter(option => option.isOn);

  const getOptionsOnStr = () => {
    const initArr = optionsList;
    const optionsOnArr = optionsOnList;

    const rows = [];

    const findRows = () => {
      let initSearchIndex = 0;

      const findRow = () => {
        const row = [];

        optionsOnArr
          .slice(initSearchIndex)
          .every((opt, i, thisArr) => {
            const optionsOnArrIdx = optionsOnArr.indexOf(opt);

            const prevOpt = thisArr[i - 1];

            const isFirstOpt = !prevOpt;
            const isNextOpt = !!(prevOpt && ((initArr.indexOf(opt) - initArr.indexOf(prevOpt)) === 1));
            const isLastOpt = optionsOnArrIdx === (optionsOnArr.length - 1);


            if (isFirstOpt || isNextOpt) {
              row.push(opt);

              if (isLastOpt) {
                initSearchIndex = optionsOnArrIdx + 1;
                return false;
              };

              return true;
            } else {
              initSearchIndex = optionsOnArrIdx;
              return false;
            };
          });

        rows.push(row);

        if (initSearchIndex <= optionsOnArr.length - 1) {
          findRow(initSearchIndex);
        };
      };

      findRow();
    };

    findRows();

    const str = rows
      .map(row => row.length > 1 ? `${row[0].name} - ${row[row.length-1].name}` : `${row[0].name}`)
      .join('; ');

    return str;
  };

  useEffect(() => {
    const parentEl = parentRef.current;
    const filterContainerEl = filterContainer.current;

    const isClickInTarget = (target, e) => target.current && (target.current === e.target || target.current.contains(e.target));

    const outerClickHandler = e => filterContainer && !isClickInTarget(filterContainer, e) && setIsContainerOpen(false);

    if (isContainerOpen) {
      parentEl.addEventListener('click', outerClickHandler);
    } else {
      parentEl.removeEventListener('click', outerClickHandler);
    };
  }, [isContainerOpen]);

  return (
    <div
      ref={filterContainer}
      className={`filter__container filter__container_open_${isContainerOpen}`}
    >
      {
        isContainerOpen ?
        <>
          {
            optionsList.map(option => {
              return (
                <div
                  key={`filter-${filter.id}-option-${option.name}`}
                  className={`filter__option filter__option_is-on_${option.isOn}`}
                  onClick={() => clickHandler(option)}
                >
                  {
                    option.name
                  }
                </div>
              )
            })
          }
        </>
        :
        <div
          className={`filter__option filter__option_is-on_true`}
          onClick={clickHandler}
        >
          {
            optionsList.filter(option => option.isOn).length ?
            getOptionsOnStr()
            :
            filter.defaultName
          }
        </div>
      }
    </div>
  )
};

export default Filter;
