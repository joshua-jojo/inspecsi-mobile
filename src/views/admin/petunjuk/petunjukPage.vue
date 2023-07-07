<script lang="ts" setup>
import { arrowBack } from "ionicons/icons";
import { IonIcon } from "@ionic/vue";
import {useRouter} from 'vue-router'

const router = useRouter()
</script>
<template lang="">
    <div
        class="relative justify-between items-center bg-primary text-primary-content h-[6rem] w-full"
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
                        Petunjuk
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="min-h-screen bg-[#E3EBFE]">
        <img src="../../../assets/petunjuk.png" alt="">
    </div>
</template>
