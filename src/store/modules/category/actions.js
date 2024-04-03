import Api from "@/apis/Api";




export const getAllCategory= async ({ commit, rootState }) => {

    try {
        const response = await Api.get(`/all-category`, {
            headers: {
                Authorization: 'Bearer ' + rootState.login.token,
            }
        });
        if (response) {
            commit('setCategory', response.data.data);
            return response
        }
    } catch (error) {
        console.error("Error fetching:", error);
    }
};

export const storeCategory = async ({ commit, rootState }, payload) => {

    try {
        const response = await Api.post('/create/category',payload, {
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

export const editCategory= async ({ commit, rootState },id) => {

    try {
        const response = await Api.get(`/show/category/${id}`, {
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
        console.error("Error fetching:", error);
        throw error;
    }
};

export const updateCategory = async ({ commit, rootState }, payload) => {

    try {
        const response = await Api.post('/update/category',payload, {
            headers: {
                Authorization: 'Bearer ' + rootState.login.token,
            }
        });
        if (response.data.status == 'success') {
            // console.log('re',response.data.status == 'success')
            let responseMessage = {
                status: response.status,
                message: response.data.message
            }
            commit("toastAlert", responseMessage, { root: true });
            return response;
        }
    } catch (error) {
        console.error("Error fetching feedback:", error);
        throw error;
    }
};

export const deleteCategory= async ({ commit, rootState },id) => {

    try {
        const response = await Api.post('/category/delete',id, {
            headers: {
                Authorization: 'Bearer ' + rootState.login.token,
            }
        });
        if (response) {
            let responseMessage = {
                status: '200',
                message: 'Category deleted Successfully!'
            }
            commit("toastAlert", responseMessage, { root: true });
            return response;
        }
        return response;
    } catch (error) {
        console.error("Error fetching:", error);
    }
};
