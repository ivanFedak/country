import {useState,useCallback} from "react";
import configApi from "./configApi";

const useHttp = () => {

    const [process,setProcess] = useState('idle');

    const request = useCallback(async (url,params) => {
        setProcess('loading');
        // const setting = configApi._baseUrl + url + '/' + params;
        const setting = configApi._baseUrl + url;
        try{
            const response = await fetch(setting);
            const data = await response.json();
            setProcess('idle')
            return data;
        }catch(e){
            setProcess('error');
            console.log(`Error in 'httpHook', error - ${e}`);
            throw e;
        }
    },[]);

    const clearError = useCallback(() =>setProcess('idle'),[]);

    return {request,clearError,process};
};

export default useHttp;
