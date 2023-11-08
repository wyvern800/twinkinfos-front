import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Divider } from '@mui/material';

const StyledRating: any = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

const CustomizedRating = (): JSX.Element => {
  return (
    <>
      <Divider sx={{marginTop: 5}} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            '& > legend': { mt: 2 },
          }}
        >
          <StyledRating
            name="customized-color"
            defaultValue={2}
            getLabelText={(value: number) =>
              `${value} Heart${value !== 1 ? 's' : ''}`
            }
            precision={0.5}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            sx={{ marginTop: 5 }}
          />
        </Box>
      </div>
    </>
  );
};

export default CustomizedRating;
