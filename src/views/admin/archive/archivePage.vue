<template lang="">
     <div class="relative justify-between items-center h-[5rem] my-[1rem]">
        <div @click="router.push({name : 'admin.menu'})" class="absolute text-3xl ml-[6%] flex items-center h-[5rem] my-[1rem]">
                <IonIcon :icon="arrowBack"></IonIcon>
        </div>
        <div class="grid place-items-center h-[10%]">
            <div class="flex justify-between items-center h-[5rem] my-[1rem]">
                <div class="flex flex-col drop-shadow-sm">
                    <div class="font-poppins-bold capitalize text-2xl">
                        Archive
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="flex justify-between gap-2 my-4">
        <input type="text" placeholder="Search" class="input text-[20px] font-poppins bg-[#E9F8F9] input-bordered w-full border-2 border-primary rounded-xl">
        <button class="btn btn-primary text-2xl">
            <IonIcon :icon="search"></IonIcon>
        </button>
    </div>

    <div class="grid place-items-center gap-4 mb-4">
        <div v-show="false" class="card bg-primary w-full drop-shadow-gray-700 drop-shadow-md font-poppins text-white">
            <div class="card-body">
                <div class="card-title">
                    Supervisi Dokumentasi Asuhan Keperawatan
                </div>
                <div class="flex items-center gap-2">
                    <IonIcon :icon="calendarOutline"></IonIcon>
                    {{moment().format('D MMM YYYY')}}
                </div>
                <div class="flex justify-end items-center flex-row gap-2">
                    <div class=" font-poppins-semibold capitalize grid place-items-center">ketua tim</div>
                    <div class="h-[2.4rem]">
                        <img src="https://picsum.photos/200" class="h-full rounded-full" alt="" srcset="">
                    </div>
                </div>
            </div>
        </div>
        <transition-group name="row">
            <div @click="toAssessmentRoleList(item.id)" class="card bg-[#E9F8F9] w-full drop-shadow-md font-poppins text-black" v-for="(item) in dataAssessment" :key="item.id">
                <div class="card-body">
                    <div class="card-title">
                        {{item.judul}}
                    </div>
                    <div class="flex items-center gap-2">
                        <IonIcon :icon="calendarOutline"></IonIcon>
                        {{moment(item.waktu_buat).format('D MMM YYYY')}}
                    </div>
                    <div class="flex justify-end items-center flex-row gap-2">
                        <div class=" font-poppins font-semibold capitalize grid place-items-center">{{item?.user?.name}}</div>
                        <div class="h-[2.4rem]">
                            <img src="https://picsum.photos/200" class="h-full rounded-full" alt="" srcset="">
                        </div>
                    </div>
                </div>
            </div>
        </transition-group>
    </div>
</template>
<script lang="ts" setup>
import moment from 'moment';
import { search, calendarOutline,arrowBack } from 'ionicons/icons';
import { IonIcon } from '@ionic/vue';
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter()
const store = useStore();
const dataAssessment = ref([]);
const getAssessment = async () => {
    const data = await axios({
        method: "post",
        url: "assessment/all",
    });

    dataAssessment.value = data.data.data;
}

const toAssessmentRoleList = (id: any) => {
    router.push({
        name: 'admin.archive.rolelist',
        params: { id: `${id}` }
    })
}

const getMeAssessment = async() => {
    const data = await axios({
        url  : 'assessment/me',
        method : 'post',
        data : {date : 'all'}
    })

    dataAssessment.value = data.data.data;
}
const isKepalaRuangan = store.state.user?.role_id == 3

if(isKepalaRuangan){
    getAssessment()
}else {
    getMeAssessment()
}
</script>
<style lang="">
    
</style>