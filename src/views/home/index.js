import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NoMatch from './nomatch';

class Home extends React.Component {

    render(){
        return(
            <div>
                <div>
                    <ul>
                        {/* 参数传递的两种方式 */}
                        <li><Link to={`${this.props.match.path}/search/001`}>Search</Link></li>
                        <li><Link to={`${this.props.match.path}/hot`} target='_blank'>Hot</Link></li>
                        <li><Link to={{
								pathname: this.props.match.path+'/aboutus',
								search: '?sid=002',
								state: { searchState: {sid:'002'} }
							}}>AboutUS</Link></li>
                    </ul>
                </div>
                <br />
                <br />
                <br />
                <hr />
                <div>
                    <Switch>
                        {/* <Route exact path={`${this.props.match.path}`} component={Search}></Route>
                        <Route path={`${this.props.match.path}/search/:sid`} component={Search}></Route>
                        <Route path={`${this.props.match.path}/hot`} component={Hot}></Route>
                        <Route path={`${this.props.match.path}/aboutus`} component={AboutUS}></Route> */}
                        {
                            this.props.routes.map((route, index)=>{
                                return (
                                    <Route 
                                        key={index} 
                                        exact={route.exact?route.exact:false} 
                                        path={`${this.props.match.path}`+ route.path}
                                        render={(props)=>(
                                            // 如需重定向，可在此加判断语句，使用<Redirect>标签跳转其它路由页面 
                                            <route.component {...props} routes={Array.isArray(route.routes)?route.routes:[]} />  
                                        )}  
                                    />
                                );
                            })
                        }
                        <Route component={NoMatch}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    match: PropTypes.object,
    routes: PropTypes.array
};

export default Home;