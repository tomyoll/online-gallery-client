import React from 'react';
import {FormControl, FormControlLabel, FormLabel, IconButton, MenuItem, RadioGroup} from "@mui/material";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Menu from '@mui/material/Menu';
import Radio from '@mui/material/Radio';
const PageSettingsButton = ({handleClick, anchorEl, handleClose, open}) => {
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <SettingsOutlinedIcon/>
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuItem>
          <FormControl>
            <FormLabel>Grid mode</FormLabel>
            <RadioGroup
              row
              name="row-radio-buttons-group"
              defaultValue={localStorage.getItem('gridMode') || 'standard'}
              onChange={(e) => localStorage.setItem('gridMode', e.target.value)}
            >
              <FormControlLabel value="standard" control={<Radio />} label="Standard" />
              <FormControlLabel value="alternative" control={<Radio />} label="Alternative" />
            </RadioGroup>
          </FormControl>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default PageSettingsButton;
