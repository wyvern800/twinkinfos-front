import React, { useState, useMemo } from 'react';
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
  Checkbox
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { equipment } from '../../utils/constants';
import { SwitchProps, Theme } from '@mui/material';
import Alternatives from '../Alternatives';
import { parseColor } from '../../utils/utils';
import alliance from '../../assets/alliance.png';
import horde from '../../assets/horde.png';
// import RateBuild from '../RateBuild';
import { formatDate } from '../../utils/utils';

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
)(({ theme, value }: any) => ({
  width: 62,
  height: 34,
  padding: 7,
  marginLeft: '-5px !important',
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('${horde}')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#464752' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? value
          ? '#36384A;'
          : '#36384A;'
        : '#001e3c',
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
      backgroundImage: `url('${alliance}')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#464752' : '#aab4be',
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

  /**
   * Constructs all skeletons for the build
   */

  const getSkeletons: any = useMemo(() => {
    const components = [];
    for (let i = 0; i < 14; i++) {
      components.push(
        <div key={i}>
          <Divider textAlign="center">
            <Chip
              label={
                <Skeleton>
                  <Typography>Finger</Typography>
                </Skeleton>
              }
            />
          </Divider>

          <Skeleton sx={{ marginBottom: 1 }}>
            <Typography>Best in Slot:</Typography>
          </Skeleton>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Skeleton variant="circular">
              <Avatar sx={{ width: 24, height: 24 }} />
            </Skeleton>
            <Skeleton sx={{ marginLeft: 1 }}>
              <Typography>Best in Slot: Axe</Typography>
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
          <FormGroup sx={{ marginTop: 2, marginBottom: 2 }}>
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
        <Skeleton sx={{ marginTop: 2, marginBottom: 2 }}>
          <Switch />
        </Skeleton>
      )}

      {loaded && (
        <>
          <Typography sx={{ marginTop: 2 }}>
            <strong>Class:</strong> {buildsList[0]?.className}
          </Typography>
        </>
      )}
      {!loaded && searching && (
        <Skeleton>
          <Typography sx={{ marginTop: 2 }}>Class: Hunter</Typography>
        </Skeleton>
      )}

      {loaded && (
        <Typography sx={{ marginBottom: 2 }}>
          <strong>Race:</strong>{' '}
          {isHorde ? buildsList[0]?.hordeRace : buildsList[0]?.allianceRace}
        </Typography>
      )}
      {!loaded && searching && (
        <Skeleton>
          <Typography sx={{ marginBottom: 2 }}>Race: Horde</Typography>
        </Skeleton>
      )}

      {loaded && (
        <Typography sx={{ marginBottom: 2 }}>
          <strong>Last Update:</strong> {formatDate(buildsList[0]?.updatedAt)}
        </Typography>
      )}
      {!loaded && searching && (
        <Skeleton>
          <Typography sx={{ marginBottom: 2 }}>
            Last Update: 2023-11-06
          </Typography>
        </Skeleton>
      )}

      {loaded && (
        <Root>
          {buildsList?.length ? (
            <>
              {Object.entries(buildsList[0]).map(
                ([buildObjectKey, buildObjectValue]: any, indexBuild) => {
                  if (equipment.includes(buildObjectKey)) {
                    const itemToShow = buildsList[0][
                      buildObjectKey
                    ]?.items?.find((i: any) =>
                      isHorde
                        ? i.type === 'hordeItem'
                        : i.type === 'allianceItem',
                    );
                    console.log(itemToShow);

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
                        {buildObjectKey && itemToShow && (
                          <>
                            <Typography sx={{ fontWeight: 'bold' }}>
                              Best in Slot
                            </Typography>

                            <Styled.Tooltip
                              href={`https://www.wowhead.com/wotlk/item=${itemToShow?.itemId}`}
                              data-wowhead={`item=${itemToShow?.itemId}`}
                              target="_blank"
                            >
                              <Avatar
                                alt={itemToShow?.name}
                                src={itemToShow?.icon}
                                sx={{ width: 24, height: 24 }}
                              />
                              <Typography
                                sx={{
                                  color: parseColor(itemToShow?.itemLink),
                                  marginLeft: 1,
                                }}
                              >
                                [{itemToShow?.name}]
                              </Typography>
                              <Checkbox
                                inputProps={{ 'aria-label': 'controlled' }}
                                sx={{ display: 'none' }}
                              />
                            </Styled.Tooltip>
                            {itemToShow?.notes && itemToShow?.notes !== '' && (
                              <Typography
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
                                  {itemToShow?.notes}
                                </span>
                              </Typography>
                            )}
                          </>
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
                  return <></>;
                },
              )}
            </>
          ) : (
            <>No builds</>
          )}
        </Root>
      )}
      {!loaded && searching && <>{getSkeletons}</>}

      {/*loaded && !searching && <RateBuild />*/}
    </Styled.Wrapper>
  );
};

export default BuildsList;
