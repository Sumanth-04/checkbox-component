import React from 'react';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem } from 'rc-menu';
import 'rc-dropdown/assets/index.css';
import './CSS/Drpdown.css'

class Drpdown extends React.Component {
    render(){
       
        return(
            <div>
                <Dropdown overlay={
                    <Menu>
                        <MenuItem key="1">1st item</MenuItem>
                        <MenuItem key="2">2nd item</MenuItem>
                    </Menu>
                }>
                   <button className='button'>
                        Actions
                    </button>
                </Dropdown>
            </div>

        );
    }
}

export default Drpdown;