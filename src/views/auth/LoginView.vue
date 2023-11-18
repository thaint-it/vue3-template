<template>
  <div class="login w-screen h-screen">
    <div class="w-full h-2/3">
      <img class="w-full h-full" src="@/assets/images/login-bg.jpg" />
    </div>
    <div
      class="login-form absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-items-center"
    >
      <div class="login-title flex flex-col justify-items-center items-center text-white">
        <img class="logout-button mb-2" src="@/assets/images/logout-button.svg" />
        <div>Quản lý Thông Tin</div>
        <div>BẮC TRÀ MY</div>
        <div class="form w-full flex flex-col">
          <div class="sm:col-span-3">
            <label for="first-name" class="text-sm font-medium">Tên đăng nhập</label>
            <div class="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                v-model="username"
                class="block w-full text-black rounded-md border-0 py-1.5 text-gray-900 focus-visible:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6 p-2"
              />
              <span class="mt-2 text-sm text-red-600 dark:text-red-500">{{ usernameError }}</span>
            </div>
          </div>
          <div class="sm:col-span-3">
            <label for="password">Mật khẩu</label>
            <div class="mt-2">
              <input
                type="password"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                v-model="password"
                class="block w-full p-2 text-black rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <span class="mt-2 text-sm text-red-600 dark:text-red-500">{{ passwordError }}</span>
            </div>
          </div>
          <div class="login-action flex flex-col items-center">
            <a class="cursor-pointer text-white font-semibold mt-2 mb-2">Quên mật khẩu</a>
            <button
              type="submit"
              @click="onLogin"
              class="rounded-md w-fit text-blue-500 bg-white px-3 py-2 text-sm font-semibold text-pr shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useAuthStore } from '@/store'
import type { ILoginForm } from '@/utils/types'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { login, setRFToken, setAccessToken } from '@/api/auth'
import router from '@/router'
import '@/api/mock'
const auth = useAuthStore()

// validation
const validationSchema = yup.object({
  username: yup.string().required('Vui lòng nhập tên đăng nhập'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
})
const { handleSubmit } = useForm<ILoginForm>({ validationSchema })
const { value: username, errorMessage: usernameError } = useField<string>('username')
const { value: password, errorMessage: passwordError } = useField<string>('password')

// handle login
const onLogin = handleSubmit(async (values) => {
  const data = await login(values)
  debugger
  if (data) {
    // set token to store
    auth.setAuth(data)
    setAccessToken(data.accessToken)
    setRFToken(data.refreskToken)
    // redirect to homepage
    router.push({ path: '/' })
  }
})
</script>

<style>
.login-form {
  width: 552px;
  height: 487px;
  padding: 30px 100px;
  border-radius: 16px;
  background: #0072ff;
}
.logout-button {
  width: 52px;
  height: 37px;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
