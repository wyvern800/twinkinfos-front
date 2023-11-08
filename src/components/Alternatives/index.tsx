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
          {buildObjectValue?.alternatives?.length ? (
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
                        ? altValue?.hordeItem && altValue?.hordeItem?.isHorde
                        : altValue?.allianceItem &&
                          !altValue?.allianceItem?.isHorde,
                    )
                    .map(([altKey, altValue]: any, index) => {
                      if (altValue !== null && altKey !== undefined) {
                        return (
                          <Styled.Tooltip
                            key={index}
                            href={`https://www.wowhead.com/wotlk/item=${
                              isHorde
                                ? altValue?.hordeItem?.itemId
                                : altValue?.allianceItem?.itemId
                            }`}
                            data-wowhead={`item=${
                              isHorde
                                ? altValue?.hordeItem?.itemId
                                : altValue?.allianceItem?.itemId
                            }`}
                            target="_blank"
                          >
                            <>
                              {searched ? (
                                <>
                                  <Typography sx={{ marginLeft: 1}}>{altValue?.priority}.</Typography>
                                  <Avatar
                                    alt={
                                      isHorde
                                        ? altValue?.hordeItem?.name
                                        : altValue?.allianceItem?.name
                                    }
                                    src={
                                      isHorde
                                        ? altValue?.hordeItem?.icon
                                        : altValue?.allianceItem?.icon
                                    }
                                    sx={{ width: 24, height: 24, marginLeft: 1 }}
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
                                    ? altValue?.hordeItem?.itemLink
                                    : altValue?.allianceItem?.itemLink,
                                ),
                                marginLeft: 1,
                              }}
                            >
                              [
                              {isHorde
                                ? altValue?.hordeItem?.name
                                : altValue?.allianceItem?.name}
                              ]
                            </Typography>
                            <Checkbox
                                inputProps={{ 'aria-label': 'controlled' }}
                              />
                          </Styled.Tooltip>
                        );
                      }
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
