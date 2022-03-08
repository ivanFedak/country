import useHttp from "./useHttpHook";

const useCountry = () => {

    const {request,clearError,process} = useHttp();

    const getAll = () => {
        const url = 'all';
        return request(url);
    };

    const getByRegion = (region) => {
        const url = `region/${region}`;
        return request(url);
    }

    const getByName = (name) => {
        const url = `name/${name}`;
        return request(url);
    }

    const getByCode = (codes) => {
        const url = `alpha?codes=${codes.join(',')}`
        return request(url);
    }

    return {getAll,getByRegion,getByName,getByCode,clearError,process};
};
export default useCountry;