import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
} from '@material-ui/core';
import { lightGreen} from '@material-ui/core/colors';
import { withTheme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';

const app = ({ theme, headingIcon, handleHeadingIconClick }) => {
  const StyledSearch = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
  `;

  const StyledInput = styled.div`
    display: flex;
    align-items: center;
    border-radius: 5px;
    background-color: ${lightGreen[200]};
  `;

  const StyledSearchIcon = styled(SearchIcon)`
    margin: 8px;
  `;

  const StyledInputBase = styled(InputBase)`
    width: 120px;
    ${props => props.theme.breakpoints.up('sm')} {
      :focus-within {
        width: 200px;
      }
    }
  `;

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleHeadingIconClick}
          aria-label="menu"
        >
          {headingIcon}
        </IconButton>
        <Typography variant="h6">
          NextJS PWA
        </Typography>
        <StyledSearch>
          <StyledInput>
            <StyledSearchIcon />
            <StyledInputBase
              theme={theme}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </StyledInput>
        </StyledSearch>
      </Toolbar>
    </AppBar>
  );
}

export default withTheme(app);
