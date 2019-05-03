import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { checkToken } from '../reducers/auth/actions';
import { sagaProduct } from '../reducers/products/actions';
import { Button } from 'antd';

class Content extends React.Component {

    static propTypes = {
        tokenData: PropTypes.object,
        checkToken: PropTypes.func,
        sagaProduct: PropTypes.func,
        products: PropTypes.array
    }

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    // 在挂载组件钩子函数中改变Redux状态并不会触发重新挂载
    componentDidMount(){
        console.log('this.context.router:',this.context.router);
    }

    _stateChangeHandle = () => {
        this.props.checkToken('newtoken');
    }

    _postHandle = () => {
        this.props.sagaProduct();
    }

    render(){
        const { tokenData, products} = this.props;
        console.log(products);
        return(
            <div>
                <div>[{tokenData.token}]身份，验证次数:{tokenData.haveCheckedTime}</div>
                <button onClick={this._stateChangeHandle}>点击验证</button>
                <button onClick={this._postHandle}>POST请求</button>
                <Button>黄泽平Click</Button>
                <h1>标题1</h1>
                <h2>标题2</h2>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    tokenData: state.auth.token,
    products: state.products
});

export default connect(mapStateToProps, { checkToken, sagaProduct })(Content);