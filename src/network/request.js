import axios from 'axios'

export function request(config){
    // 1.创建axios的实例
    const instance = axios.create({
        
        baseURL: "http://152.136.185.210:7878/api/hy66", 
        timeout: 10000
      });

      
      instance.interceptors.request.use(
        config => {
          //console.log(config);
          return config;
        },
        err => {
          console.log(err);
        }
      );
    
      // 4.响应拦截
      instance.interceptors.response.use(
        res => {
          //console.log(result);
          return res.data;
        },
        err => {
          console.log(err);
        }
      );
    
      // 5.返回实例
      return instance(config);
}