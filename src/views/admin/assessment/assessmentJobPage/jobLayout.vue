<script lang="ts" setup>
import { useStore } from 'vuex';
import {useRouter} from 'vue-router'
import { arrowBack } from 'ionicons/icons';
import { IonIcon } from '@ionic/vue';

const store = useStore();
const router = useRouter();

</script>

<template>
    <div class="relative justify-between items-center bg-primary text-primary-content h-[6rem] ">
        <div
            @click="router.back()"
            class="absolute text-3xl ml-[6%] flex items-center h-[5rem] my-[1rem]"
        >
            <IonIcon :icon="arrowBack"></IonIcon>
        </div>
        <div class="grid place-items-center h-[10%]">
            <div class="flex justify-between items-center h-[5rem] my-[1rem]">
                <div class="flex flex-col drop-shadow-sm">
                    <div class="font-poppins-bold capitalize text-lg">
                        {{ store.state.judul_job }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="py-6 flex flex-col gap-2 bg-white">
        <router-view></router-view>
    </div>

</template>