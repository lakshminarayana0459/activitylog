import React from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

import './chat.css'


class Container extends React.Component {


    render(){
        return(
            <div>
                <div className='wrapper'> 
                <div className='leftwrapper'>
                <LeftPanel />
                </div>
                <div className='rightwrapper'>
                <RightPanel />
                </div>
                </div>
                
            </div>
        )
    }
}

export default Container;
