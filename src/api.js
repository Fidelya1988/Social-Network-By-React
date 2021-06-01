import * as axios from 'axios';

const instance = axios.create({
    baseURL: ' https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '70e2a518-6193-4a91-a19a-9d35f334d0dd'
    }

})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
      return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {

                return response.data;
            })

    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`).then(response=>{
            return response.data;
        })
       
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`).then(response=>{
            return response.data;
        })
       
    }
   
  
}


export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`).then(response=> {
            return response.data;
        })

    }
}


export const authAPI = {
    getAuth() {
      return instance.get(`auth/me`).then(responce=>{
          return responce.data;
      })
       
    }
}
