import React, { SetStateAction, Dispatch, useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import * as Styled from './styles';
import back from '../../services/back';
import { toast } from 'react-toastify';

type InputProps = {
  classes: any[];
  setBuilds: Dispatch<SetStateAction<any>>;
  setLoaded: Dispatch<SetStateAction<boolean>>;
  setSearching: Dispatch<SetStateAction<boolean>>;
  buildsList: any[];
};

const Input = ({
  classes,
  setBuilds,
  setLoaded,
  setSearching,
  buildsList
}: InputProps): any => {
  const [lastSelectedClass, setLastSelectedClass] = useState('');

  const handleOnSelect = async (className: any) => {
    if (buildsList[0]?.className === className.name) return;
    if (lastSelectedClass !== className.name) setLastSelectedClass('');
    if (lastSelectedClass === className.name) return;

    await back.getAllBuilds(className.name).then((res: any) => {
      setSearching(true);
      // If no builds are returned, then say
      if (res.data.length !== 0) {
        setTimeout(() => {
          setBuilds(res.data);
          setSearching(false);
          setLoaded(true);
          setLastSelectedClass(className.name);
        }, 1000);
      } else {
        toast.error('There are no builds for this class yet.');
        setSearching(false);
        //setLoaded(false);
      }
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
