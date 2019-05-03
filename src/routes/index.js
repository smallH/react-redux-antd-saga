import React from 'react';
import Loadable from 'react-loadable';
import Login from '../views/login';
import Home from '../views/home';

// 加载过渡显示组件
const LoadingComp = ({
	isLoading,
	error
}) => {
	if(isLoading) {
		return <div>Loading...</div>;
	} else if(error) {
		return <div>Sorry, there was a problem loading the page.</div>;
	} else {
		return null;
	}
};

// 模块文件拆分实现懒加载
const Search = Loadable({
    loader: () => import('../views/home/search'),
    loading: LoadingComp
});
const Hot = Loadable({
    loader: () => import('../views/home/hot'),
    loading: LoadingComp
});
const AboutUS = Loadable({
    loader: () => import('../views/home/aboutus'),
    loading: LoadingComp
});

// 路由配置
const routes = [
    { path:'/', component:Login, exact: true },
    { path:'/login', component:Login },
    { path:'/home', component:Home, routes:[
        { path:'/', component: Search, exact: true },
        { path:'/search/:sid', component: Search},
        { path:'/hot', component:Hot },
        { path:'/aboutus', component:AboutUS }
    ]}
];

export default routes;