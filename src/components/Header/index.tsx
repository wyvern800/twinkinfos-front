import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { Tooltip } from '@mui/material';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ? children : <></>}
    </Slide>
  );
}

export default function HideAppBar(props?: Props) {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuOtherTools = [
    {
      title: 'Reputation calculator',
      url: '/reputation-calc',
    },
  ];

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{ backgroundColor: 'rgb(34, 36, 49)' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Tooltip title="by wyvern800">
              <Typography
                variant="h6"
                component="div"
                onClick={() => {
                  history.push('/');
                }}
                sx={{ cursor: 'pointer' }}
              >
                WoW Twinks
              </Typography>
            </Tooltip>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                cursor: 'pointer',
              }}
            >
              <Button
                onClick={handleClick}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                Other Tools
              </Button>
            </Box>
            <div></div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {menuOtherTools.map((opt: any, index: any) => {
          return (
            <MenuItem
              key={index}
              onClick={() => {
                history.push(opt.url);
              }}
            >
              {opt.title}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}
