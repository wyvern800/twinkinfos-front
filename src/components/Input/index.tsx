import React, { SetStateAction, Dispatch, useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import * as Styled from './styles';
import back from '../../services/back';

type InputProps = {
  classes: any[];
  setBuilds: Dispatch<SetStateAction<any>>;
  setLoaded: Dispatch<SetStateAction<boolean>>;
  setSearching: Dispatch<SetStateAction<boolean>>;
};

const Input = ({
  classes,
  setBuilds,
  setLoaded,
  setSearching,
}: InputProps): any => {
  const [lastSelectedClass, setLastSelectedClass] = useState('');

  const handleOnSelect = async (className: any) => {
    if (lastSelectedClass !== className.name) setLastSelectedClass('');
    if (lastSelectedClass === className.name) return;

    setSearching(true);
    await back.getAllBuilds(className.name).then((res: any) => {
      // If no builds are returned, then say
      if (res.data.length === 0) {
        //toast.error('There are no builds for this class yet.');
        setSearching(false);
        setLoaded(false);
        return;
      }

      setTimeout(() => {
        setBuilds(res.data);
        setSearching(false);
        setLoaded(true);
        setLastSelectedClass(className.name);
      }, 1000);
    });
  };

  const formatResult = (item: any) => {
    return (
      <>
        <span
          style={{ display: 'flex', textAlign: 'left', alignItems: 'center' }}
        >
          <img
            src={item.icon}
            alt={item.name}
            style={{ marginRight: '5px', width: '20px', borderRadius: '10px' }}
          />
          {item.name}
        </span>
      </>
    );
  };

  return (
    <>
      <Styled.MainDiv>
        <Styled.WrapperSearch>
          <ReactSearchAutocomplete
            items={classes}
            onSelect={handleOnSelect}
            autoFocus
            formatResult={formatResult}
            styling={{
              searchIconMargin: '10px 12px 0 11px',
              clearIconMargin: '3px 8px 0 0',
              backgroundColor: '#36384A',
              color: 'white',
              border: '0',
              hoverBackgroundColor: '#36384A',
              zIndex: 100,
            }}
            showIcon={false}
            showNoResults
            showNoResultsText="No builds were found."
            className="customName"
            placeholder="Which class does your twink have?"
          />
        </Styled.WrapperSearch>
      </Styled.MainDiv>
    </>
  );
};

export default Input;
