<template lang="">
    <div class="h-screen flex flex-col justify-center items-center w-full">
        <div class="h-full w-full overflow-auto scrollbar-hide relative">
            <router-view v-slot="{ Component }">
                <transition name="slidepage">
                    <div :key="$route.name" class="absolute w-full h-full bg-white">
                        <component :is="Component" />
                    </div>
                </transition>
            </router-view>
        </div>
        <div class="bg-white h-[10%] grid place-items-center w-full" v-if="false">
            <div class="h-[70%] w-[90%] px-[4%] bg-[#537FE7] rounded-full grid place-items-center" :class="gridCols">
                <router-link v-if="KepalaRuangan || KetuaTim" :to="{name : 'admin.home'}" class="h-full grid place-items-center relative w-full">
                    <img src="../../assets/icons/home.svg" class="h-[36%] z-10" alt="" srcset="">
                    <div class="z-0 bg-blue-400 absolute h-[80%] w-[80%] rounded-full" v-if="$route.name == 'admin.home'">
                    </div>
                </router-link>
                <router-link v-if="KepalaRuangan || KetuaTim" :to="{name : 'admin.archive'}" class="h-full grid place-items-center mr-3 w-full relative">
                    <img src="../../assets/icons/archives.svg" class="h-[36%] z-10" alt="" srcset="">
                    <div class="z-0 bg-blue-400 absolute h-[80%] w-[80%] rounded-full" v-if="$route.name == 'admin.archive'"></div>
                </router-link>
                <router-link v-if="KepalaRuangan" :to="{name : 'assessment'}" class="h-full grid place-items-center">
                    <img src="../../assets/icons/assessment.svg" class="scale-75" alt="" srcset="">
                </router-link>
                <router-link v-if="Admin || SuperAdmin" :to="{name : 'admin.users'}" class="h-full grid place-items-center ml-3 w-full relative">
                    <img src="../../assets/icons/user.svg" alt="" class="h-[33%] z-10" srcset="" >
                    <div class="z-0 bg-blue-400 absolute h-[80%] w-[80%] rounded-full" v-if="$route.name == 'admin.users'"></div>
                </router-link>
                <router-link :to="{name : 'admin.profile'}" class="h-full grid place-items-center relative w-full">
                    <img src="../../assets/icons/profile.svg" alt="" srcset="" class="h-[40%] z-10">
                    <div class="z-0 bg-blue-400 absolute h-[80%] w-[80%] rounded-full" v-if="$route.name == 'admin.profile'"></div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useStore } from 'vuex';

const store = useStore()

const KepalaRuangan = store.state.user?.role?.nama == "kepala ruangan"
const Admin = store.state.user?.role?.nama == "admin"
const SuperAdmin = store.state.user?.role?.nama == "super admin"
const KetuaTim = store.state.user?.role?.nama == "ketua tim"

const gridCols = {
    "grid-cols-3" : (KetuaTim),
    "grid-cols-4" : (KepalaRuangan),
    "grid-cols-2" : (Admin || SuperAdmin),
}
</script>
<style>
.slidepage-enter-from {
    transform: translateX(150%);
    opacity: 0;
    z-index: 10;
}

.slidepage-enter-to {
    transform: translateX(0);
    opacity: 1;
    z-index: 10;
}
.slidepage-leave-from {
    z-index: 0;
}
.slidepage-leave-to {
    z-index: 0;
}

.slidepage-leave-active {
    animation: slide-in-right .7s cubic-bezier(1.000, 0.000, 0.000, 1.000) both reverse .8s
}

.slidepage-enter-active {
    animation: slide-in-right .7s cubic-bezier(1.000, 0.000, 0.000, 1.000) both
}

@keyframes slide-in-right {
    0% {
        transform: translateX(150%);
        opacity: 0
    }

    100% {
        transform: translateX(0);
        opacity: 1
    }
}</style>