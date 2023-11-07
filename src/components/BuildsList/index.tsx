import React, { useState, useEffect, useMemo } from 'react';
import * as Styled from './styles';
import {
  Switch,
  FormGroup,
  Stack,
  Typography,
  Divider,
  Chip,
  Avatar,
  Skeleton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { equipment } from '../../utils/constants';
import { SwitchProps, Theme } from '@mui/material';
import Alternatives from '../Alternatives';
import { parseColor } from '../../utils/utils';
interface MaterialUISwitchProps extends SwitchProps {
  theme?: Theme;
  value: boolean;
  onChange: (event: any, checked: any) => void;
}

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

const MaterialUISwitch: any = styled(
  ({ theme, value, onChange, ...props }: MaterialUISwitchProps) => (
    <Switch checked={value} onChange={onChange} {...props} />
  ),
)(({ theme }: any) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

type BuildsListProps = {
  buildsList: any[];
  searching: any;
  loaded: any;
};

export const BuildsList = ({
  buildsList,
  loaded,
  searching,
}: BuildsListProps): any => {
  const [isHorde, setIsHorde] = useState<boolean>(false);

  const changeIsHorde = (e: any, checked: any) => {
    setIsHorde(checked);
  };

  useEffect(() => {
    console.log(isHorde);
    console.log(loaded);
    console.log(searching);
  }, [isHorde, loaded, searching]);

  /**
   * Constructs all skeletons for the build
   */

  const getSkeletons: any = useMemo(() => {
    const components = [];
    for (let i = 0; i < 14; i++) {
      components.push(
        <div key={i}>
          <Typography sx={{ marginTop: '20px', width: '100%' }}>
            <Skeleton />
          </Typography>

          <Skeleton sx={{ marginBottom: 1 }}>
            <Typography>Best in Slot:</Typography>
          </Skeleton>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Skeleton variant="circular">
              <Avatar sx={{ width: 24, height: 24 }} />
            </Skeleton>
            <Skeleton sx={{ marginLeft: 1 }}>
              <Typography>Best in Slot:</Typography>
            </Skeleton>
          </div>

          <Skeleton sx={{ marginTop: 2 }}>
            <Typography>Alternatives: (Click to Expand)</Typography>
          </Skeleton>
        </div>,
      );
    }
    return components;
  }, []);

  return (
    <Styled.Wrapper>
      {loaded && !searching && (
        <>
          <FormGroup>
            <Stack direction="row" spacing={1} alignItems="center">
              <MaterialUISwitch
                value={isHorde}
                onChange={(e: any, checked: any) => changeIsHorde(e, checked)}
              />
            </Stack>
          </FormGroup>
        </>
      )}
      {!loaded && searching && (
        <Skeleton>
          <Switch />
        </Skeleton>
      )}

      {loaded && (
        <>
          <Typography
            sx={{ marginTop: 2 }}
          >{`${buildsList[0]?.className}'s Twink Builds`}</Typography>
        </>
      )}
      {!loaded && searching && (
        <Skeleton>
          <Typography>Anyplayer's Twinks Builds</Typography>
        </Skeleton>
      )}

      {loaded && (
        <Typography sx={{ marginBottom: 2 }}>
          Race:{' '}
          {isHorde ? buildsList[0]?.hordeRace : buildsList[0]?.allianceRace}
        </Typography>
      )}
      {!loaded && searching && (
        <Skeleton>
          <Typography>Race: Horde</Typography>
        </Skeleton>
      )}

      {loaded && (
        <Root>
          {buildsList.length ? (
            <>
              {Object.entries(buildsList[0]).map(
                ([buildObjectKey, buildObjectValue]: any, indexBuild) => {
                  if (equipment.includes(buildObjectKey)) {
                    return (
                      <div key={indexBuild}>
                        <Divider textAlign="center">
                          <Chip
                            label={buildObjectKey
                              ?.replace('1', ' I')
                              ?.replace('2', ' II')
                              .toUpperCase()}
                          />
                        </Divider>
                        <Typography sx={{ fontWeight: 'bold' }}>
                          Best in Slot
                        </Typography>
                        {isHorde ? (
                          <Styled.Tooltip
                            href={`https://www.wowhead.com/wotlk/item=${buildObjectValue?.hordeItem?.itemId}`}
                            data-wowhead={`item=${buildObjectValue?.hordeItem?.itemId}`}
                            target="_blank"
                          >
                            <Avatar
                              alt={buildObjectValue?.hordeItem?.name}
                              src={buildObjectValue?.hordeItem?.icon}
                              sx={{ width: 24, height: 24 }}
                            />
                            <Typography
                              sx={{
                                color: parseColor(
                                  buildObjectValue?.hordeItem?.itemLink,
                                ),
                                marginLeft: 1,
                              }}
                            >
                              [{buildObjectValue?.hordeItem?.name}]
                            </Typography>
                          </Styled.Tooltip>
                        ) : (
                          <Styled.Tooltip
                            href={`https://www.wowhead.com/wotlk/item=${buildObjectValue?.allianceItem?.itemId}`}
                            data-wowhead={`item=${buildObjectValue?.allianceItem?.itemId}`}
                            target="_blank"
                          >
                            <Avatar
                              alt={buildObjectValue?.allianceItem?.name}
                              src={buildObjectValue?.allianceItem?.icon}
                              sx={{ width: 24, height: 24 }}
                            />
                            <Typography
                              sx={{
                                color: parseColor(
                                  buildObjectValue?.allianceItem?.itemLink,
                                ),
                                marginLeft: 1,
                              }}
                            >
                              [{buildObjectValue?.allianceItem?.name}]
                            </Typography>
                          </Styled.Tooltip>
                        )}

                        <Alternatives
                          buildObjectValue={buildObjectValue}
                          isHorde={isHorde}
                          searched={loaded}
                          loaded={loaded}
                          searching={searching}
                        />
                      </div>
                    );
                  }
                },
              )}
            </>
          ) : (
            <>No builds</>
          )}
        </Root>
      )}
      {!loaded && searching && <>{getSkeletons}</>}
    </Styled.Wrapper>
  );
};

export default BuildsList;
