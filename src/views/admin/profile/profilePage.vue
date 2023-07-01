<template lang="">
     <div class="relative justify-between items-center h-[5rem] my-[1rem]">
        <div @click="route.push({name : 'admin.menu'})" class="absolute text-3xl ml-[6%] flex items-center h-[5rem] my-[1rem]">
                <IonIcon :icon="arrowBack"></IonIcon>
        </div>
        <div class="grid place-items-center h-[10%]">
            <div class="flex justify-between items-center h-[5rem] my-[1rem]">
                <div class="flex flex-col drop-shadow-sm">
                    <div class="font-poppins-bold capitalize text-2xl">
                        Profile
                    </div>
                </div>
            </div>
        </div>
    </div>

   <div class="card flex justify-between gap-2 my-8 bg-[#537FE7] rounded-[2rem] drop-shadow-md">
       <div class="card-body flex flex-col gap-3 p-11">
            <div class="grid place-items-center gap-6">
                <div class="flex justify-center items-center h-[8rem] drop-shadow-md">
                    <img src="https://picsum.photos/200" class="h-full rounded-full" alt="" srcset="">
                </div>
                <div class="grid place-items-center capitalize font-poppins-bold text-white gap-1">
                    <div class="text-[28px] text-center">{{store.state.user?.name}}</div>
                    <div class="text-[17px]">{{store.state.user?.role?.nama}}</div>
                </div>
            </div>
       </div>
   </div>

   <div class="grid place-items-center gap-3 px-2 mb-5">
        <div v-show="false" class="card bg-[#E9F8F9] w-full text-[#537FE7] text-xl drop-shadow-md">
            <div class="px-6 py-4 flex capitalize font-poppins-semibold h-[5rem] gap-8 items-center">
                <div class="flex justify-center items-center h-full drop-shadow-md w-[2rem]">
                    <img src="../../../assets/icons/icon_list_.svg" class="h-[40%]" alt="" srcset="">
                </div>
                <div class="">
                    ubah bio
                </div>
            </div>
        </div>
        <div class="card bg-[#E9F8F9] w-full text-[#537FE7] text-xl drop-shadow-md">
            <label for="ubahPassword" class="px-6 py-4 flex capitalize font-poppins-semibold h-[5rem] gap-8 items-center">
                <div class="flex justify-center items-center h-full drop-shadow-md w-[2rem]">
                    <img src="../../../assets/icons/icon_lockclosed_.svg" class="h-[60%]" alt="" srcset="">
                </div>
                <div class="">
                    ubah password
                </div>
            </label>
        </div>

    <div @click="logout()" class="card bg-[#537FE7] w-full text-white text-xl drop-shadow-lg mt-14">
        <div class="p-6 grid place-items-center capitalize font-poppins-semibold">
            Log out
        </div>
    </div>
   </div>

<modalComponent id="ubahPassword" title="Ubah Password">
    <div class="form-control">
        <label class="label">
            Password Lama
        </label>
        <input v-model="formPassword.old_password" type="text" class="input input-bordered" placeholder="Masukkan Password Lama">
        <label class="label" v-if="formPassword.errors.old_password">
            <span class="label-text text-error">Password Lama</span>
        </label>
    </div>
    <div class="form-control">
        <label class="label">
            Password baru
        </label>
        <input type="text" v-model="formPassword.password" class="input input-bordered" placeholder="Masukkan password baru">
        <label class="label" v-if="formPassword.errors.password">
            <span class="label-text text-error">Password baru</span>
        </label>
    </div>
    <div class="form-control">
        <label class="label">
            Konfirmasi password baru
        </label>
        <input type="text" v-model="formPassword.password_confirmation" class="input input-bordered" placeholder="Konfirmasi password baru">
    </div>
    <template v-slot:action>
        <button class="btn btn-success" @click="submitChangePassword" :class="{'loading btn-disabled' : formPassword.processing}">Simpan</button>
    </template>
</modalComponent>
</template>
<script lang="ts" setup>
import { useStore } from "vuex"
import { useRouter } from "vue-router"
import modalComponent from "@/views/components/modal/modalComponent.vue"
import useForm from "form-helper-axios"
import axios from "axios"
import { IonIcon } from "@ionic/vue"
import { arrowBack } from "ionicons/icons"

const store = useStore()
const route = useRouter()

const logout = () => {
    store.state.user = {}
    store.state.token = null
    route.push({
        name: 'login'
    })
}
const formPassword = useForm({
    old_password : null,
    password : null,
    password_confirmation : null,
})

const submitChangePassword = () => {
    formPassword.post("/user/password/ubah",{
        onSuccess : (res : any) => {
            document.getElementById("ubahPassword")?.click();
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.token}`;
            
        }
    })
}
</script>
<style lang="">
   
</style>