import Api from "@/apis/Api";

export const login = async ({  commit },payload) => {
    try {
          const  response = await Api.post('/Auth/login',payload)
        if(response.status === 200){
            localStorage.setItem('token',response.data.token)
            commit("setToken", response.data.token);
            let responseMessage = {
                status: response.status,
                message: response.data.message
            }
            commit("toastAlert", responseMessage, { root: true });
        }
        return response;
    } catch (error) {
        console.log('asas',error)
        throw error
    }
}

export const register = async ({  commit },payload) => {
    try {
          const  response = await Api.post('/Auth/register',payload)
        if(response.status === 200){
            console.log('asas',response)
            localStorage.setItem('token',response.data.token)
            commit("setToken", response.data.token);
            let responseMessage = {
                status: response.status,
                message: response.data.message
            }
            console.log('responseError',responseMessage)
            commit("toastAlert", responseMessage, { root: true });
        }
        return response;
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getLoginUser= async ({ commit, rootState }) => {

    try {
        const response = await Api.get('/Auth/user', {
            headers: {
                Authorization: 'Bearer ' + rootState.login.token,
            }
        });
        if (response) {
            commit('setUser', response.data.user);
        }
    } catch (error) {
        console.error("Error fetching:", error);
    }
};

export const logOut = async ({state, commit }) => {
    try {
          const  response = await Api.get('/Auth/logout',{
            headers: {
                Authorization: 'Bearer ' + state.token,
            }
          })
        if(response.status === 200){
            localStorage.removeItem('token')
            let responseMessage = {
                status: response.status,
                message: response.data.message
            }
            commit("toastAlert", responseMessage, { root: true });
        }
        return response;
    } catch (error) {
        console.log('asas',error)
        throw error
    }
}
