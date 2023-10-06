<template lang="">
        <div
                class="min-h-screen bg-primary flex flex-col py-5 justify-center overflow-auto items-center gap-5"
        >
                <div
                        class="flex flex-col md:flex-row md:gap-20 justify-center items-center"
                >
                        <div class="w-full">
                                <div
                                        class="font-fugazone text-white flex items-center flex-col drop-shadow-lg"
                                >
                                        <div class="text-5xl">INSPECSI</div>
                                        <div
                                                class="text-[16.5px] -translate-y-[5px]"
                                        >
                                                Aplikasi Supervisi Keperawatan
                                        </div>
                                </div>
                                <div class="flex justify-center p-2">
                                        <img
                                                src="../../assets/logo_login.png"
                                                width="300"
                                        />
                                </div>
                        </div>
                        <div class="w-full">
                                <div
                                        class="alert alert-error w-[90%]"
                                        v-if="formLogin.message"
                                >
                                        <span class="capitalize text-xs">{{
                                                formLogin.message
                                        }}</span>
                                </div>
                                <div class="card card-compact bg-white">
                                        <div class="card-body">
                                                <div class="form-control">
                                                        <label
                                                                class="ml-4 capitalize font-bold text-md bg-white w-max px-1 translate-y-1"
                                                        >
                                                                <div
                                                                        class="translate-y-2 text-primary"
                                                                >
                                                                        Email
                                                                </div>
                                                        </label>
                                                        <input
                                                                type="email"
                                                                placeholder="Masukkan Email"
                                                                id="email"
                                                                class="input bg-[#E9F8F9] input-bordered border-[#537FE7] border-2"
                                                                v-model="
                                                                        formLogin.email
                                                                "
                                                        />
                                                        <label
                                                                v-if="
                                                                        formLogin
                                                                                .errors
                                                                                .email
                                                                "
                                                                class="label"
                                                                ><span
                                                                        class="label-text-alt text-error"
                                                                        >{{
                                                                                formLogin
                                                                                        .errors
                                                                                        .email
                                                                        }}</span
                                                                ></label
                                                        >
                                                </div>
                                                <div class="form-control">
                                                        <label
                                                                class="ml-4 capitalize font-bold text-md bg-white w-max px-1 translate-y-1"
                                                        >
                                                                <div
                                                                        class="translate-y-2 text-primary"
                                                                >
                                                                        Password
                                                                </div>
                                                        </label>
                                                        <input
                                                                type="password"
                                                                placeholder="Masukkan Password"
                                                                class="input bg-[#E9F8F9] input-bordered border-[#537FE7] border-2"
                                                                v-model="
                                                                        formLogin.password
                                                                "
                                                        />
                                                        <label
                                                                v-if="
                                                                        formLogin
                                                                                .errors
                                                                                .password
                                                                "
                                                                class="label"
                                                                ><span
                                                                        class="label-text-alt text-error"
                                                                        >{{
                                                                                formLogin
                                                                                        .errors
                                                                                        .password
                                                                        }}</span
                                                                ></label
                                                        >
                                                </div>
                                                <div
                                                        class="flex justify-center mt-4"
                                                >
                                                        <button
                                                                class="btn bg-primary btn-ghost text-white w-full"
                                                                @click="login()"
                                                        >
                                                                login
                                                        </button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
</template>
<script setup lang="ts">
import router from "@/router";
import axios from "axios";
import useForm from "form-helper-axios";
import { useStore } from "vuex";
import { Preferences } from "@capacitor/preferences";

const saveLogin = async (data: any) => {
        await Preferences.set({
                key: "login",
                value: JSON.stringify(data),
        });
};

const store = useStore();
const formLogin = useForm({
        email: null,
        password: null,
});

function login() {
        formLogin.post("auth/login", {
                onSuccess: (response: any) => {
                        store.state.user = response.user;
                        store.state.token = response.token;

                        saveLogin({
                                user: response.user,
                                token: response.token,
                        });
                        if (
                                store.state.user.role.nama != "admin" &&
                                store.state.user.role.nama != "super admin"
                        ) {
                                router.push({
                                        name: "admin.menu",
                                });
                        } else {
                                router.push({
                                        name: "admin.menu",
                                });
                        }
                        axios.defaults.headers.common[
                                "Authorization"
                        ] = `Bearer ${response.token}`;
                },
        });
}
</script>
<style lang=""></style>
