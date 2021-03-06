import React from 'react';
import PropTypes from 'prop-types';
import Content from '@/components/Content';

class Search extends React.Component {
    render(){
        console.log('match:', this.props.match);
        return(
           <div>
                <Content /> 
                <div>Search</div>
                <div>
                    <div>CSS测试</div>
                </div>
                <img style={{ width: '150px',height: '100px'}} src= {process.env.PUBLIC_URL + '/assets/static_logo.jpg'}/>
           </div>
        );
    }

    getChildContext() {
		return {
			router: this.props
		};
	}

}

Search.propTypes = {
    match: PropTypes.object
};

Search.childContextTypes = {
	router: PropTypes.object
};

export default Search;