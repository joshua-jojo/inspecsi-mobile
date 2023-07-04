<template lang="">
     <div class="relative justify-between items-center h-[5rem] my-[1rem] w-full">
        <div class="absolute text-3xl ml-[6%] mr-[6%] flex items-center justify-between h-[5rem] my-[1rem] w-[88%]">
                <IonIcon @click="router.push({name : 'admin.menu'})" :icon="arrowBack"></IonIcon>
        </div>
        <div class="grid place-items-center h-[10%]">
            <div class="flex justify-between items-center h-[5rem] my-[1rem]">
                <div class="flex flex-col drop-shadow-sm">
                    <div class="font-poppins-bold capitalize text-2xl">
                        Materi
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div
        class="w-full h-[250px] overflow-hidden my-2 flex justify-center items-center px-5"
    >
        <video
            src="../../../assets/opening.mp4"
            class="w-full rounded-xl"
            controls
        ></video>
    </div>
</template>
<script setup lang="ts">
import { arrowBack } from 'ionicons/icons';
import { IonIcon } from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter()
</script>
<style lang=""></style>
