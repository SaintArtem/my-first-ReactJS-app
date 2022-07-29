import axios from "axios";

const instance = axios.create({
      withCredentials: true,
      baseURL: 'https://social-network.samuraijs.com/api/1.0/',
      headers: { "API-KEY": 'be6ef8df-6795-4d5c-bfe5-1437bbcb4eed' },
});

export const userAPI = {
      getUsers(currentPage = 1, pageSize) {
            return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                  .then(response => response.data);
      },

      unfollowUser(userId) {
            return instance.delete(`follow/${userId}`).then(response => response.data);
      },

      followUser(userId) {
            return instance.post(`follow/${userId}`).then(response => response.data);
      },

      ifLoggedIn() {
            return instance.get(`auth/me`).then(response => response.data);
      },

      getProfile(profileId) {
            return instance.get(`profile/${profileId}`).then(response => response.data);
      }
};

