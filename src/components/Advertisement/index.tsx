import React, { useState } from 'react';
import * as Styled from './styles';

type AdvertisementProps = {
  loading: boolean;
  horizontal?: boolean;
  left?: string;
  right?: string;
};

const Advertisement = ({
  loading,
  horizontal,
  left,
  right,
}: AdvertisementProps) => {
  const [enabled,] = useState(false);

  return (
    <>
      {enabled && (
        <Styled.Advertise
          loading={loading}
          horizontal={horizontal}
          left={left}
          right={right}
        >
          ADS
        </Styled.Advertise>
      )}
    </>
  );
};

export default Advertisement;
