import Api from "@/apis/Api";


export const getAllCar= async ({ commit, rootState },category) => {
    try {
        const response = await Api.get(`/all-car?catgory=${category.categoryId}`, {
            headers: {
                Authorization: 'Bearer ' + rootState.login.token,
            }
        });
        if (response.data.status == 'success') {
            return response.data.data;
        }
    } catch (error) {
        console.error("Error fetching car:", error);
        if(error?.response?.status == 401){
            localStorage.removeItem('token')
            let responseMessage = {
                status: error.response.status,
                message: error.response.data.message
            }
            commit("toastAlert", responseMessage, { root: true });
        }
        throw error;
    }
};



export const storeCar = async ({ commit, rootState }, payload) => {

    try {
        const response = await Api.post('/create/car',payload, {
            headers: {
                Authorization: 'Bearer ' + rootState.login.token,
            }
        });
        if (response) {
            let responseMessage = {
                status: response.status,
                message: response.data.message
            }
            commit("toastAlert", responseMessage, { root: true });
            return response;
        }
    } catch (error) {
        console.error("Error fetching feedback:", error);
    }
};

export const getCar= async ({ commit, rootState },id) => {

    try {
        const response = await Api.get(`/show/car/${id}`, {
            headers: {
                Authorization: 'Bearer ' + rootState.login.token,
            }
        });
        if (response.data.status == 'success') {
            return response.data.category;
        }
    } catch (error) {
        let responseMessage = {
            status: '500',
            error: 'Something went wrong!'
        }
        commit("toastAlert", responseMessage, { root: true });
        throw error
    }
};

export const updateCar = async ({ commit, rootState }, payload) => {

    try {
        const response = await Api.post('/update/car',payload, {
            headers: {
                Authorization: 'Bearer ' + rootState.login.token,
            }
        });
        if (response) {
            let responseMessage = {
                status: response.status,
                message: response.data.message
            }
            commit("toastAlert", responseMessage, { root: true });
            return response;
        }
    } catch (error) {
        console.error("Error fetching feedback:", error);
    }
};

export const deleteCar= async ({ commit, rootState },id) => {

    try {
        const response = await Api.post('/car/delete',id, {
            headers: {
                Authorization: 'Bearer ' + rootState.login.token,
            }
        });
        if (response) {
            let responseMessage = {
                status: '200',
                message: 'Car deleted Successfully!'
            }
            commit("toastAlert", responseMessage, { root: true });
            return response;
        }
        return response;
    } catch (error) {
        console.error("Error fetching:", error);
    }
};
