import React, { SetStateAction, Dispatch } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { toast } from 'react-toastify';
import * as Styled from './styles';
import back from '../../services/back';

type InputProps = {
  classes: any[];
  setBuilds: Dispatch<SetStateAction<any>>;
  setLoaded: Dispatch<SetStateAction<boolean>>;
  setSearching: Dispatch<SetStateAction<boolean>>;
  loaded: any;
};

const Input = ({
  classes,
  setBuilds,
  setLoaded,
  setSearching,
  loaded
}: InputProps): any => {
  const handleOnSelect = async (className: any) => {
    setSearching(true);
    await back.getAllBuilds(className.name).then((res: any) => {
      // If no builds are returned, then say
      if (res.data.length === 0) {
        toast.error('There are no builds for this class yet.');
        setSearching(false);
        setLoaded(false);
        return;
      }
      setBuilds(res.data);
      setSearching(false);
      setLoaded(true);
    })
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

  return !loaded ? (
    <>
      <Styled.MainDiv>
        <h1>Which class does your twink have?</h1>
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
            }}
            showIcon={false}
            showNoResults
            showNoResultsText="No builds were found."
            className='customName'
          />
        </Styled.WrapperSearch>
      </Styled.MainDiv>
    </>
  ) : (
    <></>
  );
};

export default Input;
