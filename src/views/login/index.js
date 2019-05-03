import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import styles from './index.module.scss';


class Login extends React.Component {

    _loginHandle = () => {
        this.props.history.push({
			pathname: '/home/'
		});
    };

    render(){
        const netImg = 'http://www.th7.cn/d/file/p/2016/09/14/799df1da7a4f3684d56e52ba00fe0830.jpg';
        const iconBo = true;
        return(
            <div>
                <div>Login</div>
                <Button onClick={this._loginHandle}>登录并进入Home页面</Button>
                <div className={styles.container}>
                    <div className={styles.child}>CSS测试</div>
                </div>
                <div>
                    <img className={styles.staticlogo} src= {process.env.PUBLIC_URL + 'assets/static_logo.jpg'}/>
                    <img className={styles.staticlogo} src= {require('../../assets/image/src_logo.jpg')} />
                    <img className={styles.staticlogo} src= {netImg} />
                </div>
                <div>
                    {/* 使用字符串模板修改icon样式, JSX{}内可加三元表达式用于判断 */}
                    <i className= {`icon iconfont icon-icon_tianqi_qing ${iconBo?styles.iconStyle:''}`} />
                    <i className='icon iconfont icon-icon_tianqi_xue' />
                    <i className='icon iconfont icon-icon_tianqi_yin' />
                    <i className='icon iconfont icon-icon_tianqi_yu' />
                    <i className='icon iconfont icon-icon_tianqi_bingbao' />
                    <i className='icon iconfont icon-icon_tianqi_duoyun' />
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    history: PropTypes.object
};

export default Login;