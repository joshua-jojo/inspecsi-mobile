<script lang="ts" setup>
import { useStore } from 'vuex';
import {useRouter} from 'vue-router'
import { arrowBack } from 'ionicons/icons';
import { IonIcon } from '@ionic/vue';

const store = useStore();
const router = useRouter();

</script>

<template>
    <div class="flex gap-4 items-center bg-primary text-primary-content h-[6rem] ">
        <div
            @click="router.back()"
            class="text-3xl ml-[6%] flex items-center h-[5rem] my-[1rem]"
        >
            <IonIcon :icon="arrowBack"></IonIcon>
        </div>
        <div>
            <div class="font-poppins-bold text-center">
                {{ store.state.judul_job }}
            </div>
        </div>
    </div>
    
    <div class="py-6 flex flex-col gap-2 bg-white">
        <router-view></router-view>
    </div>

</template>