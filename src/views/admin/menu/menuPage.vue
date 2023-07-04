<template lang="">
    <div class="h-[240px] w-full bg-primary rounded-b-[80px]">
        <div class="flex justify-between items-center h-[5rem] my-[1rem] px-5 pt-16">
            <div class="flex flex-col drop-shadow-sm">
                <div class="font-poppins-bold capitalize text-2xl text-base-100">
                    welcome,
                </div>
                <div class="capitalize font-poppins-bold text-xl text-base-100">
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
        <div class="card shadow-md bg-base-100 p-4" @click="dashboard" v-if="KepalaRuangan || KetuaTim">
            <div class="card-body h-[150px] p-4 flex flex-col">
                <img src="../../../assets/icons/menu-dashboard.svg" class="h-[80%]">
                <div class="text-center h-max">Materi</div>
            </div>
        </div>
        <div class="card shadow-md bg-base-100 p-4" @click="assessment"  v-if="KepalaRuangan">
            <div class="card-body h-[150px] p-4 flex flex-col">
                <img src="../../../assets/icons/menu-assessment.svg" class="h-[80%]">
                <div class="text-center h-max">Assessment</div>
            </div>
        </div>
        <div class="card shadow-md bg-base-100 p-4" @click="archive" v-if="KepalaRuangan || KetuaTim">
            <div class="card-body h-[150px] p-4 flex flex-col">
                <img src="../../../assets/icons/menu-archive.svg" class="h-[80%]">
                <div class="text-center h-max">Archive</div>
            </div>
        </div>
        <div class="card shadow-md bg-base-100 p-4" @click="users" v-if="Admin || SuperAdmin">
            <div class="card-body h-[150px] p-4 flex flex-col">
                <img src="../../../assets/icons/menu-users.svg" class="h-[80%]">
                <div class="text-center h-max">Users</div>
            </div>
        </div>
        <div class="card shadow-md bg-base-100 p-4" @click="profile">
            <div class="card-body h-[150px] p-4 flex flex-col">
                <img src="../../../assets/icons/menu-profile.svg" class="h-[80%]">
                <div class="text-center h-max">Profile</div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';

const store = useStore()
const router = useRouter()

const dashboard = () => {
    router.push({
        name : "admin.home"
    })
}
const assessment = () => {
    router.push({
        name : "assessment"
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

const KepalaRuangan = store.state.user?.role?.nama == "kepala ruangan"
const Admin = store.state.user?.role?.nama == "admin"
const SuperAdmin = store.state.user?.role?.nama == "super admin"
const KetuaTim = store.state.user?.role?.nama == "ketua tim"
</script>
<style lang="">
    
</style>