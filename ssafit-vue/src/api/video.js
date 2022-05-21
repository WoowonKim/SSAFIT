import { axiosService } from '@/api'

const ROOT_URL = process.env.VUE_APP_API_SERVER;

export default {
  getVideoList() {
    return axiosService.get(ROOT_URL + `/video`);
  },
  getVideo(youtubeId) {
    return axiosService.get(ROOT_URL + `/video/${youtubeId}`);
  },
  createVideo(video) {
    return axiosService.post(ROOT_URL + `/video`, video);
  },
  getZzim(userId) {
    return axiosService.get(ROOT_URL + `/video/zzim/${userId}`);
  },
  insertZzim(userId, youtubeId) {
    return axiosService.post(ROOT_URL
      + `/video/zzim/${userId}/${youtubeId}`);
  },
  deleteZzim(userId, youtubeId) {
    return axiosService.delete(ROOT_URL
      + `/video/zzim/${userId}/${youtubeId}`);
  }
}