<template lang="">
    <div class="h-screen bg-primary flex flex-col justify-center items-center gap-7">
        <div class="font-fugazone text-white flex items-center flex-col drop-shadow-lg">
            <div class="text-6xl">
                INSPECSI
            </div>
            <div class="text-[16.5px] -translate-y-[5px]">
                Aplikasi Supervisi Keperawatan
            </div>
        </div>
        <div class="h-[30%]">
            <img src="../../assets/login_img.svg" class="h-full" alt="" srcset="">
        </div>
        <div class="card bg-white w-11/12 rounded-[2rem]">
            <div class="card-body">
                <div class="alert alert-error shadow-lg text-left" v-if="formLogin.message">
                    <span>{{formLogin.message}}</span>
                </div>
                <div class="form-control">
                    <label class="ml-4 capitalize font-bold text-md bg-white w-max px-1 translate-y-1">
                        <div class="translate-y-2 text-primary">
                            Email
                        </div>
                    </label>
                    <input type="email" placeholder="Masukkan Email" id="email" class="input bg-[#E9F8F9] input-bordered border-[#537FE7] border-2 rounded-2xl" v-model="formLogin.email">
                    <label v-if="formLogin.errors.email" class="label"><span class="label-text-alt text-error">{{formLogin.errors.email}}</span></label>
                </div>
                <div class="form-control">
                    <label class="ml-4 capitalize font-bold text-md bg-white w-max px-1 translate-y-1">
                        <div class="translate-y-2 text-primary">
                            Password
                        </div>
                    </label>
                    <input type="password" placeholder="Masukkan Password" class="input bg-[#E9F8F9] input-bordered border-[#537FE7] border-2 rounded-2xl" v-model="formLogin.password">
                    <label v-if="formLogin.errors.password" class="label"><span class="label-text-alt text-error">{{formLogin.errors.password}}</span></label>
                </div>
                <div class="flex justify-center mt-[2rem]">
                    <button class="btn bg-primary btn-ghost text-white w-full rounded-[1.5rem]" @click="login()">login</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import router from '@/router';
import axios from 'axios';
import useForm from 'form-helper-axios';
import { useStore } from "vuex"

const store = useStore()
const formLogin = useForm({
    // email: "kepala@kepala.com",
    // password: 123123123,
    email: null,
    password: null,
})

function login() {
    formLogin.post('auth/login', {
        onSuccess: (response: any) => {

            store.state.user = response.user
            store.state.token = response.token
            if (store.state.user.role.nama != "admin" && store.state.user.role.nama != "super admin") {
                router.push({
                    name: 'admin.menu'
                })
            }else {
                router.push({
                    name : 'admin.menu'
                })
            }
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.token}`;
        }
    })
}
</script>
<style lang="">
    
</style>