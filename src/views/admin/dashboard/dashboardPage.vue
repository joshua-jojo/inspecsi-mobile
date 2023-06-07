<template lang="">
    <div class="flex justify-between items-center h-[5rem] my-[1rem]">
        <div class="flex flex-col drop-shadow-sm">
            <div class="font-poppins-bold capitalize text-4xl text-[#537FE7]">
                welcome,
            </div>
            <div class="capitalize font-poppins-bold text-2xl">
                {{store.state.user?.role?.nama}}
            </div>
        </div>
        <div class="flex justify-center items-center h-full drop-shadow-md">
            <img src="https://picsum.photos/200" class="h-[70%] rounded-full" alt="" srcset="">
        </div>
    </div>
    <div class="grid place-items-center grid-cols-7 drop-shadow-sm mb-10">
        <template v-for="(item,index) in rangeSeminggu" :key="index">
            <div @click="getByDay(item)" class="flex font-poppins flex-col justify-center p-4 items-center gap-1 w-full text-[#537FE7]" :class="{'bg-[#537FE7] card text-white' : item.active,'text-red-500' : item.hari == 'Ming','text-[#537FE7]' : item.hari != 'Ming'}">
                <div class="text-lg">
                    {{item.hari}}
                </div>
                <div class="text-lg">
                    {{item.tanggal}}
                </div>
            </div>
        </template>
    </div>
    <div class="grid place-items-center gap-4 mb-4">
        <div v-show="false" class="card bg-[#537FE7] w-full drop-shadow-gray-700 drop-shadow-md font-poppins text-white">
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
                        {{item?.judul}}
                    </div>
                    <div class="flex items-center gap-2">
                        <IonIcon :icon="calendarOutline"></IonIcon>
                        {{moment(item?.waktu_buat).format('D MMM YYYY')}}
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
import { calendarOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/vue';
import moment from 'moment';
import { ref } from 'vue';
import { useStore } from 'vuex'
import axios from 'axios';
import { useRouter } from 'vue-router';

const store = useStore()
const router = useRouter()
const rangeSeminggu: any = ref([]);

const tanggal = () => {
    const days = ["Ming", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
    const waktuSekarang = new Date()
    const indexHari = waktuSekarang.getDay()

    if (indexHari > 0) {
        const hariSenin = new Date(waktuSekarang.setDate(waktuSekarang.getDate() - (indexHari)))
        for (let index = 0; index < 7; index++) {
            const dataLoop = new Date(hariSenin.setDate(hariSenin.getDate() + 1))
            const month = (dataLoop.getMonth() + 1)

            const dataHari = {
                fullDate: `${dataLoop.getFullYear()}-${month}-${dataLoop.getDate()}`,
                hari: days[dataLoop.getDay()],
                tanggal: dataLoop.getDate(),
                active: (new Date()).getDate() == dataLoop.getDate()
            }
            rangeSeminggu.value.push(dataHari)
        }
    } else {
        const hariSenin = new Date(waktuSekarang.setDate(waktuSekarang.getDate()+1))
        for (let index = 0; index < 7; index++) {
            const dataLoop = new Date(hariSenin.setDate(hariSenin.getDate() - 1))
            const month = (dataLoop.getMonth() + 1)

            const dataHari = {
                fullDate: `${dataLoop.getFullYear()}-${month}-${dataLoop.getDate()}`,
                hari: days[dataLoop.getDay()],
                tanggal: dataLoop.getDate(),
                active: (new Date()).getDate() == dataLoop.getDate()
            }
            rangeSeminggu.value = [dataHari,...rangeSeminggu.value]
        }
    }
}
function getByDay(date: any) {
    date.active = true
    rangeSeminggu.value.forEach((element: any) => {
        if (element.tanggal != date.tanggal) {
            element.active = false
        }
    });
    if(isKepalaRuangan){
        getAssessment(date.fullDate)
    }
    else {
        getMeAssessment(date.fullDate)
    }
}

const dataAssessment = ref([]);
const getAssessment = async (date: any) => {
    const data = await axios({
        url: 'assessment/filter',
        method: 'post',
        data: { date: date },
    })

    dataAssessment.value = data.data.data;
}
const dateNow = new Date()
const toAssessmentRoleList = (id: any) => {
    router.push({
        name: 'admin.archive.rolelist',
        params: { id: `${id}` }
    })
}

const getMeAssessment = async(date : any) => {
    const data = await axios({
        url  : 'assessment/me',
        method : 'post',
        data: { date: date },
    })

    dataAssessment.value = data.data.data;
}
const isKepalaRuangan = store.state.user?.role_id == 3

if(isKepalaRuangan){
    getAssessment(`${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()}`)
}else {
    getMeAssessment(`${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()}`)
}

tanggal()
</script>
<style lang="">
    
</style>