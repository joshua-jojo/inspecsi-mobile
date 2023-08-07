<template lang="">
    <div class="h-[240px] w-full bg-primary rounded-b-[80px] text-primary-content">
        <div class="flex justify-between items-center h-[5rem] px-5 pt-16">
            <div class="flex flex-col drop-shadow-sm">
                <div class="font-poppins-bold capitalize text-2xl">
                    welcome,
                </div>
                <div class="capitalize font-poppins-bold text-xl">
                    {{store.state.user?.name}}
                </div>
            </div>
            <div class="avatar online placeholder">
                <div class="bg-base-300 text-neutral-content rounded-full w-16">
                    <span class="text-2xl capitalize font-bold">{{store.state.user?.name.charAt(0)}}</span>
                </div>
            </div> 
        </div>
    </div>
    <div class="w-full h-max grid grid-cols-2 gap-4 -mt-20 px-5">
        <div class="card shadow-md bg-base-100 p-4" @click="materi" v-if="KepalaRuangan || KetuaTim">
            <div class="card-body h-[150px] p-4 flex flex-col">
                <img src="../../../assets/icons/menu-materi.png" class="h-[80%]">
                <div class="text-center h-max">Materi</div>
            </div>
        </div>
        <div class="card shadow-md bg-base-100 p-4" @click="assessment"  v-if="KepalaRuangan || KetuaTim">
            <div class="card-body h-[150px] p-4 flex flex-col">
                <img src="../../../assets/icons/menu-assessment.png" class="h-[80%]">
                <div class="text-center h-max">Assessment</div>
            </div>
        </div>
        <div class="card shadow-md bg-base-100 p-4" @click="archive" v-if="KepalaRuangan || KetuaTim">
            <div class="card-body h-[150px] p-4 flex flex-col">
                <img src="../../../assets/icons/menu-archive.png" class="h-[80%]">
                <div class="text-center h-max">Archive </div>
            </div>
        </div>
        <div class="card shadow-md bg-base-100 p-4" @click="users" v-if="Admin || SuperAdmin">
            <div class="card-body h-[150px] p-4 flex flex-col">
                <img src="../../../assets/icons/menu-profile.svg" class="h-[80%]">
                <div class="text-center h-max">Users</div>
            </div>
        </div>
        <div class="card shadow-md bg-base-100 p-4" @click="profile">
            <div class="card-body h-[150px] p-4 flex flex-col">
                <img src="../../../assets/icons/menu-password.svg" class="h-[80%]">
                <div class="text-center h-max -mt-2">Ubah Password</div>
            </div>
        </div>
        <div class="card shadow-md bg-base-100 p-4" @click="petunjuk">
            <div class="card-body h-[150px] p-4 flex flex-col">
                <img src="../../../assets/icons/menu-petunjuk.svg" class="h-[80%]">
                <div class="text-center h-max">Petunjuk</div>
            </div>
        </div>
        <div class="card shadow-md bg-base-100 p-4" @click="tentang">
            <div class="card-body h-[150px] p-4 flex flex-col">
                <img src="../../../assets/icons/menu-tentang.png" class="h-[80%]">
                <div class="text-center h-max">Tentang</div>
            </div>
        </div>
        <div class="card shadow-md bg-base-100 p-4" @click="logout">
            <div class="card-body h-[150px] p-4 flex flex-col">
                <img src="../../../assets/icons/menu-logout.svg" class="h-[80%]">
                <div class="text-center h-max">Logout</div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
import { Preferences } from "@capacitor/preferences";

const deleteLogin = async () => {
  await Preferences.remove({ key: 'login' });
};

const store = useStore()
const router = useRouter()
const assessment = () => {
    router.push({
        name : "admin.home"
    })
}
const archive = () => {
    router.push({
        name : "admin.archive"
    })
}
const users = () => {
    router.push({
        name : "admin.users"
    })
}
const profile = () => {
    router.push({
        name : "admin.profile"
    })
}
const materi = () => {
    router.push({
        name : "admin.materi"
    })
}
const petunjuk = () => {
    router.push({
        name : "petunjuk"
    })
}
const tentang = () => {
    router.push({
        name : "tentang"
    })
}
const logout = async() => {
    await router.push({
        name: 'login'
    })
    store.state.user =  {}
    store.state.token = null
    await deleteLogin()
}

const KepalaRuangan = store.state.user?.role?.nama == "kepala ruangan"
const Admin = store.state.user?.role?.nama == "admin"
const SuperAdmin = store.state.user?.role?.nama == "super admin"
const KetuaTim = store.state.user?.role?.nama == "ketua tim"
</script>
<style lang="">
    
</style>