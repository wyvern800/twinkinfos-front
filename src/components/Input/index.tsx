import React, { SetStateAction, Dispatch } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { toast } from 'react-toastify';
import * as Styled from './styles';
import back from '../../services/back';

type InputProps = {
  classes: any[];
  setBuilds: Dispatch<SetStateAction<any>>;
  setSelectedClass: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

const Input = ({
  classes,
  setBuilds,
  setSelectedClass,
  setLoading,
}: InputProps): any => {
  const handleOnSelect = async (className: any) => {
    setLoading(true);
    await back
      .getAllBuilds(className.name)
      .then((res: any) => {
        setBuilds(res.data);
        setSelectedClass(className.name);

        // If no builds are returned, then say
        if (res.data.length === 0) {
          toast.error('There are no builds for this class yet.');
        }
      })
      .finally(() => {
        setLoading(false);
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
        />
      </Styled.WrapperSearch>
    </Styled.MainDiv>
  );
};

export default Input;
