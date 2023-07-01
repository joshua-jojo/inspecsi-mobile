<template lang="">
     <div class="relative justify-between items-center h-[5rem] my-[1rem]">
        <div @click="router.push({name : 'admin.menu'})" class="absolute text-3xl ml-[6%] flex items-center h-[5rem] my-[1rem]">
                <IonIcon :icon="arrowBack"></IonIcon>
        </div>
        <div class="grid place-items-center h-[10%]">
            <div class="flex justify-between items-center h-[5rem] my-[1rem]">
                <div class="flex flex-col drop-shadow-sm">
                    <div class="font-poppins-bold capitalize text-2xl">
                        Users
                    </div>
                </div>
            </div>
        </div>
    </div>

   <div class="flex justify-between gap-2 my-4">
       <input type="text" placeholder="Search" class="input text-[20px] font-poppins bg-[#E9F8F9] input-bordered w-full border-[2.5px] border-primary rounded-xl">
       <button class="btn btn-primary rounded-xl text-2xl">
           <IonIcon :icon="search"></IonIcon>
       </button>
   </div>

   <div class="grid place-items-center gap-3 mb-5">
    <div class="card w-full text-white text-xl shadow mb-7">
        <label for="tambah" class="btn btn-primary capitalize font-poppins-semibold ">
            buat user baru 
        </label>
    </div>
    <template  v-for="(item) in dataAllUser" :key="item.id">
        <div class="card bg-[#E9F8F9] w-full text-primary shadow">
            <div class="px-6 py-4 flex flex-row capitalize font-poppins-semibold h-[5rem] gap-4 items-center justify-start w-full">
                <div class="flex justify-center items-center h-full w-full max-w-[50px] shadow overflow-hidden">
                    <img src="https://picsum.photos/200" class="h-full rounded-full w-full" alt="" srcset="">
                </div>
                <div class="text-ellipsis overflow-hidden w-full">
                    {{item.name}}
                </div>
                <label for="hapus" class="btn btn-sm btn-square btn-error" @click="getHapus(item)" v-if="!isMe(item) && SuperAdmin">
                    <ion-icon size="small" :icon="trash"></ion-icon>
                </label>
            </div>
        </div>
    </template>
   </div>

   <modalComponent id="tambah" title="tambah user">
    <div class="form-control font-poppins-semibold">
        <label class="label capitalize">Nama</label>
        <input type="text" class="input input-bordered" placeholder="Masukkan nama" v-model="buatUser.name">
        <label class="label" v-if="buatUser.errors.name"><span class="label-text-alt text-error">{{buatUser.errors.name}}</span></label>
    </div>
    <div class="form-control font-poppins-semibold">
        <label class="label capitalize">email</label>
        <input type="text" class="input input-bordered" placeholder="Masukkan email" v-model="buatUser.email">
        <label class="label" v-if="buatUser.errors.email"><span class="label-text-alt text-error">{{buatUser.errors.email}}</span></label>
    </div>
    <div class="form-control font-poppins-semibold">
        <label class="label capitalize">role</label>
        <select class="input input-bordered capitalize" v-model="buatUser.role_id">
            <option :value="null" disabled>Pilih role</option>
            <template v-for="(item) in dataRole" :key="item.id">
                <option :value="item.id">{{item.nama}}</option>
            </template>
        </select>
        <label class="label" v-if="buatUser.errors.role_id"><span class="label-text-alt text-error">{{buatUser.errors.role_id}}</span></label>
    </div>
    <div class="form-control font-poppins-semibold">
        <label class="label capitalize">password</label>
        <input type="password" class="input input-bordered" placeholder="Masukkan password" v-model="buatUser.password">
        <label class="label" v-if="buatUser.errors.password"><span class="label-text-alt text-error">{{buatUser.errors.password}}</span></label>
    </div>
    <div class="form-control font-poppins-semibold">
        <label class="label capitalize">konfirmasi password</label>
        <input type="password" class="input input-bordered" placeholder="konfirmasi password" v-model="buatUser.password_confirmation">
    </div>
    <template v-slot:action>
        <button class="btn btn-success" @click="sendNewUser()">simpan</button>
    </template>
   </modalComponent>

   <modalComponent :title="`Hapus user ${hapusUser.nama}`" id="hapus">

    <template v-slot:action>
        <button @click="submitHapus" :class="{'loading btn-disabled' : hapusUser.processing}" class="btn btn-error">konfirmasi</button>
    </template>
   </modalComponent>
</template>
<script lang="ts" setup>
import { search,arrowBack } from 'ionicons/icons';
import { IonIcon } from '@ionic/vue';
import modalComponent from '@/views/components/modal/modalComponent.vue';
import { trash } from 'ionicons/icons';
import useForm from 'form-helper-axios'
import axios from 'axios';
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore()
const router = useRouter()
const SuperAdmin = store.state.user?.role?.nama == "super admin"
const dataRole = ref();
const dataAllUser = ref();

const getDataRole = async () => {
    axios.post("role/all").then((response) => {
        dataRole.value = response.data.data
    })
}

const getDataAllUser = async () => {
    axios.post("user/all").then((response) => {
        dataAllUser.value = response.data.data
    })
}

const buatUser = useForm({
    name: null,
    email: null,
    password: null,
    password_confirmation: null,
    role_id: null,
})

function sendNewUser() {
    buatUser.post("auth/register", {
        onSuccess: () => {
            document.getElementById('tambah')?.click()
            buatUser.reset()
            getDataAllUser()
        }
    })
}

const hapusUser = useForm({
    id: null,
    nama: null,
})
const getHapus = (data: any) => {
    hapusUser.id = data.id
    hapusUser.nama = data.name
}

const submitHapus = () => {
    hapusUser.post("/user/delete", {
        onSuccess: () => {
            document.getElementById("hapus")?.click()
            getDataAllUser()
        }
    })
}

const isMe = (data: any) => {
    return data.id == store.state.user?.id
}
getDataRole()
getDataAllUser()
</script>
<style lang="">
   
</style>