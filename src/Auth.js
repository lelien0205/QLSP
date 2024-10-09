export const getAuth = (param) =>{
    if(param === undefined || param === null){
        return "";
    }
    return {
        headers:{Authorization:"Basic "+btoa(param)}
    };
}