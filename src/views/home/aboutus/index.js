import React from 'react';
import PropTypes from 'prop-types';
import url from 'url';
import { Button } from 'antd';

class AboutUS extends React.Component {

    _openNewWin = () => {
        // 跳转至新窗口
        var url = './#/home/hot';
        var win = window.open(url, '_blank');
        win.focus();

        // 本地窗口跳转,使用createHashHistory
        // history.push({pathname:'/home/hot', state:{ pageInfo:''}});
    }

    render(){
        console.log('location:', this.props.location);
        console.log('location.params:', url.parse(this.props.location.search, true).query); // 将路径?问号后面的键值字符串转为对象格式
        return(
           <div>
                <div>AboutUS</div>
                <Button type="danger" onClick={this._openNewWin}>打开新页面</Button>
           </div>
        );
    }
}

AboutUS.propTypes = {
    location: PropTypes.object
};

export default AboutUS;