import React from 'react';
import { Button, Icon } from 'antd';

class MyButton extends React.Component {

    render(){
        return(
            <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="danger">Danger</Button>
                <Button type="dashed" icon="download" shape='circle' size='default'></Button>
                <Button.Group>
                    <Button type="danger"><Icon type='left' />后退</Button>
                    <Button type="danger">前进<Icon type='right' /></Button>
                </Button.Group>
            </div>
        );
    }
}

export default MyButton;