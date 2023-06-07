<script lang="ts" setup>
import { defineProps, ref } from 'vue';
import { arrowBack } from 'ionicons/icons';
import { IonIcon } from '@ionic/vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const props: any = defineProps({
    id: String
});
const router = useRouter()
const store = useStore()

// eslint-disable-next-line
store.state.assessment.id = props.id
const myId = store.state?.user?.id;
const kepalaRuangan = store.state.user.role_id == 3
const dataAssessmentJob = ref([]);
const getDataAssessmentJob = async () => {
    const data = await axios({
        url: 'assessmentjob/find',
        method: "post",
        data: { assessment_id: props.id }
    });
    dataAssessmentJob.value = data.data.data.assessment_job;
};
const completeTask = (data: any) => {
    const complete = data == 1
    return {
        "bg-red-100": !complete,
        "bg-green-300": complete,
    }
}
const goToBack = () => {
    router.push({
        name: 'admin.archive'
    });
}

const showData = (data: any) => {

    if (kepalaRuangan) {
        return true
    }
    else {
        return data.user_id == myId
    }
}
const go = async (data: any,data_assessment : any) => {
    if (kepalaRuangan) {
        if (data) {
            router.push({
                name: 'admin.job.assessment_view_select',
                params : {
                    id : data_assessment.identitas_pasien.id
                }
            })

        }

    } else {
        if (!data) {
            store.state.assessment.id = data_assessment.id
            router.push({ name: 'admin.job.identitaspasien' })
        }
        else {
            store.state.assessment.pasien_id = await data_assessment.identitas_pasien.id
            // console.log(data_assessment);
            router.push({
                name: 'admin.job.catatan_perkembangan_pasien'
            })
        }
    }
}

getDataAssessmentJob()

</script>

<template>
    <div class="w-full h-[100%] relative">
        <div class="absolute text-[#537FE7] text-4xl ml-[6%] flex items-center h-[5rem] my-[1rem]" @click="goToBack">
            <IonIcon :icon="arrowBack"></IonIcon>
        </div>
        <div class="grid place-items-center h-[10%]">
            <div class="flex justify-between items-center h-[5rem] my-[1rem]">
                <div class="flex flex-col drop-shadow-sm">
                    <div class="font-poppins-bold capitalize text-2xl text-[#537FE7]">
                        List Assessment
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 gap-4 mt-10 pb-[2rem]">
            <transition-group name="row">
                <template v-for="item in dataAssessmentJob" :key="item.id">
                    <div @click="go((item as any).complete,item)" v-if="showData(item)"
                        class="card w-full text-[#537FE7] text-xl drop-shadow-md"
                        :class="completeTask((item as any).complete)">
                        <div
                            class="px-6 py-4 flex flex-row capitalize font-poppins-semibold h-[5rem] gap-4 items-center justify-start w-full">
                            <div
                                class="flex justify-center items-center h-full w-full max-w-[50px] drop-shadow-md overflow-hidden">
                                <img src="https://picsum.photos/200" class="h-full rounded-full w-full" alt="" srcset="">
                            </div>
                            <div class="text-ellipsis overflow-hidden w-full">
                                {{ (item as any).user.name }}
                            </div>
                        </div>
                    </div>
                </template>
            </transition-group>
        </div>
    </div>
</template>