<script lang="ts" setup>
import { arrowBack } from "ionicons/icons";
import { IonIcon } from "@ionic/vue";
import {useRouter} from 'vue-router'

const router = useRouter()
</script>
<template lang="">
    <div
        class="relative justify-between items-center h-[6rem] bg-primary text-primary-content w-full"
    >
        <div
            class="absolute text-3xl ml-[6%] mr-[6%] flex items-center justify-between h-[5rem] my-[1rem] w-[88%]"
        >
            <IonIcon
                @click="router.push({ name: 'admin.menu' })"
                :icon="arrowBack"
            ></IonIcon>
        </div>
        <div class="grid place-items-center h-[10%]">
            <div class="flex justify-between items-center h-[5rem] my-[1rem]">
                <div class="flex flex-col drop-shadow-sm">
                    <div class="font-poppins-bold capitalize text-2xl">
                        Tentang
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <img src="../../../assets/logo.png" alt="" class="mt-20">
        <p class="text-center font-bold text-md">Aplikasi Mobile Supervisi Keperawatan</p>
        <p class="text-center my-4">v1.0.0</p>
    </div>
</template>
