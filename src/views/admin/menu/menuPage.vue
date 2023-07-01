<template lang="">
    <div class="flex justify-between items-center h-[5rem] my-[1rem]">
        <div class="flex flex-col drop-shadow-sm">
            <div class="font-poppins-bold capitalize text-2xl text-[#537FE7]">
                welcome,
            </div>
            <div class="capitalize font-poppins-bold text-xl">
                {{store.state.user?.role?.nama}}
            </div>
        </div>
        <div class="flex justify-center items-center h-full drop-shadow-md">
            <img src="https://picsum.photos/200" class="h-[70%] rounded-full" alt="" srcset="">
        </div>
    </div>
    <div class="w-full h-max grid grid-cols-2 gap-4">
        <div class="card shadow-md p-4" @click="dashboard" v-if="KepalaRuangan || KetuaTim">
            <div class="card-body h-[150px] p-4 flex flex-col">
                <img src="../../../assets/icons/menu-dashboard.svg" class="h-[80%]">
                <div class="text-center h-max">Dashboard</div>
            </div>
        </div>
        <div class="card shadow-md p-4" @click="assessment"  v-if="KepalaRuangan">
            <div class="card-body h-[150px] p-4 flex flex-col">
                <img src="../../../assets/icons/menu-assessment.svg" class="h-[80%]">
                <div class="text-center h-max">Assessment</div>
            </div>
        </div>
        <div class="card shadow-md p-4" @click="archive" v-if="KepalaRuangan || KetuaTim">
            <div class="card-body h-[150px] p-4 flex flex-col">
                <img src="../../../assets/icons/menu-archive.svg" class="h-[80%]">
                <div class="text-center h-max">Archive</div>
            </div>
        </div>
        <div class="card shadow-md p-4" @click="users" v-if="Admin || SuperAdmin">
            <div class="card-body h-[150px] p-4 flex flex-col">
                <img src="../../../assets/icons/menu-users.svg" class="h-[80%]">
                <div class="text-center h-max">Users</div>
            </div>
        </div>
        <div class="card shadow-md p-4" @click="profile">
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