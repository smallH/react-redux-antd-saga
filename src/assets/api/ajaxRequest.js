import axios from 'axios';
// import qs from 'qs';

const ajaxRequest = (url='', data={}, type='GET') => {
    let promise;
    return new Promise((resolve, reject)=>{
        if(type.toUpperCase() === 'GET'){
            promise = axios({
                method: type,
                url,
                params: {...data}
            });
        }else if(type.toUpperCase() === 'POST' || type.toUpperCase() === 'DELETE' || type.toUpperCase() === 'PUT' || type.toUpperCase() === 'PATCH'){
            promise = axios({
                method: type,
                url,
                // 方式一 服务端接收JSON格式请求体数据
                headers: {
                    'Content-Type':'application/json; charset=UTF-8',
                    'Accept': 'application/json; charset=UTF-8'
                },
                data: {...data}
                // 方式二 服务端接收键值格式请求体数据
                // headers: {
                //     'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
                //     'Accept': 'application/json; charset=UTF-8'
                // },
                // data: qs.stringify({...data})
            });
        }else{
            promise = Promise.reject('请求方法入参错误:', type);
        }

        promise.then((response)=>{
            if(response.status >= 200 && response.status < 300) {
                resolve(response.data);
            }else{
                reject(response);
            }
        }).catch((error)=>{
            reject(error);
        });
    });
};

export default ajaxRequest;