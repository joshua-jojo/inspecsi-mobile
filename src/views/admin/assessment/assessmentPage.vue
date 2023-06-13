<template lang="">
    <div class="bg-[#537FE7] h-screen absolute w-full min-h-[900px]">
        <div class="w-full h-[100%] relative">
            <div @click="router.push({name : 'admin.home'})" class="absolute text-white text-3xl ml-[6%] flex items-center h-[5rem] my-[1rem]">
                <IonIcon :icon="arrowBack"></IonIcon>
            </div>
            <div class="grid place-items-center h-[10%]">
                <div class="flex justify-between items-center h-[5rem] my-[1rem]">
                    <div class="flex flex-col drop-shadow-sm">
                        <div class="font-poppins-bold capitalize text-2xl text-white">
                            assessment
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center flex-col items-center gap-5 h-[30%]">
                <div class="form-control w-[70%]">
                    <label class="label text-white capitalize font-poppins-bold">
                        subject
                    </label>
                    <input type="text" v-model="createAssessment.judul" class="input w-full capitalize font-poppins-bold" placeholder="type here">
                </div>
                <div class="form-control w-[70%]">
                    <label class="label text-white capitalize font-poppins-bold">
                        date time
                    </label>
                    <input type="date"  v-model="createAssessment.waktu_buat" class="input w-full capitalize font-poppins-bold" placeholder="type here">
                </div>
            </div>

            <div class="bg-white h-[60%] rounded-t-3xl relative">
                <div class="grid place-items-center capitalize font-poppins-bold text-[#537FE7] h-[10%] text-xl">
                    ketua tim 
                </div>

                <div class="flex justify-center h-full">
                    <div class="mt-4 grid grid-cols-2 place-items-center gap-3 w-[90%]  max-h-[70%] overflow-auto">
                        <div @click="isActive(item)" class="w-full text-center font-poppins-semibold capitalize p-1 rounded-full" v-for="(item, index) in dataKetuaTim" :key="index" :class="{'bg-[#537FE7] text-white' : item.active,'bg-[#E9F8F9]' : !item.active}">{{item.name}}</div>
                    </div>
                </div>

                <div class="absolute bottom-0 w-full grid place-items-center h-[10%] mb-3">
                    <div v-if="disabledButton" class="bg-[#a6a9af] font-poppins-bold capitalize text-white text-2xl w-[90%] text-center grid place-items-center h-full rounded-full">
                        kirim
                    </div>
                    <div @click="submitAssessment" v-else class="bg-[#537FE7] font-poppins-bold capitalize text-white text-2xl w-[90%] text-center grid place-items-center h-full rounded-full">
                        kirim
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { arrowBack } from 'ionicons/icons';
import { IonIcon } from '@ionic/vue';
import router from '@/router';
import { ref,watchEffect } from 'vue';
import axios from 'axios';
import useForm from 'form-helper-axios';

const dataKetuaTim = ref([])
const getKetuaTim = async() => {
    const data  = await axios({
        method : "post",
        url : "/ketuatim/all",
    })
    dataKetuaTim.value = data.data.data
}
const isActive = async(data : any) => {
    data['active'] =  !data['active']
    createAssessment.user = []
    await dataKetuaTim.value.filter((element:any) => {
        if(element["active"]){
            createAssessment.user.push(element.id)
        }
    });
}

const createAssessment = useForm({
    judul : null,
    waktu_buat : null,
    user : []
})

const submitAssessment = ()  => {
    createAssessment.post("assessment/create",{
        onSuccess : () => {
            router.push({
                name : "admin.archive"
            })
        }
    })
}

const disabledButton = ref(true)

watchEffect(() => {
    disabledButton.value = !(createAssessment.judul && createAssessment.waktu_buat && createAssessment.user.length);
})

getKetuaTim()
</script>
<style lang="">
    
</style>