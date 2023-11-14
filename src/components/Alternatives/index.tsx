import React, { useState } from 'react';
import { Typography, Avatar, Skeleton, Checkbox } from '@mui/material';
import * as Styled from './styles';
import { parseColor } from '../../utils/utils';

const Alternatives = ({
  searched,
  buildObjectValue,
  isHorde,
  loaded,
  searching,
}: any) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {loaded && (
        <>
          {Object.values(buildObjectValue?.alternatives)?.filter(
            (altValue: any) =>
              isHorde
                ? altValue?.type === 'hordeItem' && isHorde
                : altValue?.type === 'allianceItem' && !isHorde,
          )?.length ? (
            <>
              <Typography
                onClick={() => setExpanded(!expanded)}
                sx={{
                  fontWeight: 'bold',
                  marginTop: 2,
                  cursor: 'pointer',
                }}
              >
                Alternatives: (Click to {expanded ? 'Collapse' : 'Expand'})
              </Typography>

              {expanded && (
                <>
                  {Object.entries(buildObjectValue?.alternatives)
                    .filter(([altKey, altValue]: any) =>
                      isHorde
                        ? altValue?.type === 'hordeItem' && isHorde
                        : altValue?.type === 'allianceItem' && !isHorde,
                    )
                    .map(([altKey, altValue]: any, index) => {
                      if (altValue !== null && altKey !== undefined) {
                        return (
                          <div key={index}>
                            <Styled.Tooltip
                              // key={index}
                              href={`https://www.wowhead.com/wotlk/item=${altValue?.itemId}`}
                              data-wowhead={`item=${altValue?.itemId}`}
                              data-type="item"
                              data-wh-icon-added="true"
                              style={{
                                backgroundImage:
                                  'url(&quot;https://wow.zamimg.com/images/wow/icons/tiny/inv_jewelry_ring_10.gif&quot;)',
                                width: '100%',
                              }}
                              target="_blank"
                            >
                              <>
                                {searched ? (
                                  <>
                                    <Typography sx={{ marginLeft: 1 }}>
                                      {altValue?.priority}.
                                    </Typography>
                                    <Avatar
                                      alt={altValue?.name}
                                      src={altValue?.icon}
                                      sx={{
                                        width: 24,
                                        height: 24,
                                        marginLeft: 1,
                                      }}
                                    />
                                  </>
                                ) : (
                                  <>
                                    <Skeleton variant="circular">
                                      <Avatar />
                                    </Skeleton>
                                  </>
                                )}
                              </>
                              <Typography
                                sx={{
                                  color: parseColor(
                                    isHorde
                                      ? altValue?.itemLink
                                      : altValue?.itemLink,
                                  ),
                                  marginLeft: 1,
                                }}
                              >
                                [{isHorde ? altValue?.name : altValue?.name}]
                              </Typography>
                              <Checkbox
                                inputProps={{ 'aria-label': 'controlled' }}
                                sx={{ display: 'none' }}
                              />
                            </Styled.Tooltip>

                            { altValue?.notes && altValue?.notes !== '' && <Typography
                              sx={{
                                fontWeight: 'bold',
                                fontSize: '0.7rem',
                              }}
                            >
                              Notes:{' '}
                              <span
                                style={{
                                  fontWeight: 'normal',
                                  fontSize: '0.8rem',
                                }}
                              >
                                {altValue?.notes}
                              </span>
                            </Typography>}
                          </div>
                        );
                      }
                      return [altKey, altValue];
                    })}
                </>
              )}
            </>
          ) : (
            <></>
          )}
        </>
      )}

      {!loaded && searching && (
        <Skeleton variant="circular">
          <Avatar sx={{ width: 24, height: 24 }} />
        </Skeleton>
      )}
    </>
  );
};

export default Alternatives;
