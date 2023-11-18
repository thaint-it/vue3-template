import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse
} from 'axios'
import { getAccessToken, getRFToken, setAccessToken } from './auth'
import { APIErrorCode } from '@/utils/enum'

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_AXIOS_BASE_URL
})

export class APIError<T = any> extends Error {
  constructor(
    public status: number,
    public errorCode: APIErrorCode,
    public data?: T,
    message?: string
  ) {
    super(message)
  }
}

// list api doesn't need to add token in header
const unAuthApis = ['login/']
// axios service handle logic befor call api and error after call api
class AxiosService {
  tokenType = 'Bearer'
  // Will be used by this service for making API calls
  axiosIns: AxiosInstance | undefined = undefined

  // For Refreshing Token
  isAlreadyFetchingAccessToken = false

  // For Refreshing Token
  subscribers: any = []

  private onAccessTokenFetched(accessToken: string) {
    this.subscribers = this.subscribers.filter((callback: any) => callback(accessToken))
  }

  private addSubscriber(callback: any) {
    this.subscribers.push(callback)
  }

  constructor(axiosIns: AxiosInstance) {
    this.axiosIns = axiosIns
    // before call api
    this.axiosIns.interceptors.request.use(
      async (config) => {
        // add token to header
        if (!unAuthApis.find((x) => x === config.url)) {
          if (config && config.headers) {
            config.headers.Authorization = `${this.tokenType} ${getAccessToken()}`
          }
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    // using for fake data
    this.axiosIns.interceptors.response.use((v) => {
      if (v.data?.code === 401) {
        localStorage.removeItem('token')
        return v.data
      }
      if (v.status === 200) {
        return v.data
      }

      return Promise.reject(v)
    })

    // after call api
    // this.axiosIns.interceptors.response.use(
    //   (response: AxiosResponse) => {
    //     return response.data?.data;
    //   },
    //   (error: AxiosError) => {
    //     debugger
    //     if (!unAuthApis.find((x) => x === error?.config?.url)) {
    //       const { response, config, message } = error;
    //       if (response && config) {
    //         const originalRequest: AxiosRequestConfig = config;
    //          // unauthorize
    //         if (response.status === 401) {
    //           if (!this.isAlreadyFetchingAccessToken) {
    //             this.isAlreadyFetchingAccessToken = true;
    //             // call api refresh token
    //             this.axiosIns &&
    //               this.axiosIns
    //                 .post('refresh-token', {
    //                   refresh_token: getRFToken(),
    //                 })
    //                 .then((r: any) => {
    //                   this.isAlreadyFetchingAccessToken = false;
    //                   // Update accessToken in localStorage
    //                     setAccessToken(r.access_token)
    //                   // recall api
    //                   this.onAccessTokenFetched(r.access_token);
    //                 })
    //                 .catch(() => {
    //                   // logout
    //                 });
    //           }

    //           const retryOriginalRequest = new Promise((resolve) => {
    //             this.addSubscriber((accessToken: string) => {
    //               if (originalRequest && originalRequest.headers) {
    //                 originalRequest.headers.Authorization = `${this.tokenType} ${accessToken}`;
    //               }
    //               this.axiosIns && resolve(this.axiosIns(originalRequest));
    //             });
    //           });
    //           return retryOriginalRequest;
    //         }
    //         // not found
    //         if (response.status === 404) {
    //           return Promise.reject(
    //             new APIError(
    //               response.status,
    //               APIErrorCode.NotFound,
    //               response.data,
    //               message
    //             )
    //           );
    //         }
    //       }
    //     }
    //     return Promise.reject(error);
    //   }
    // );
  }
}
new AxiosService(request)
export default request
