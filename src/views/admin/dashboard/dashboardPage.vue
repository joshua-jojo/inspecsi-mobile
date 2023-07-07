<template lang="">
    <div
        class="bg-primary relative justify-between items-center h-[5rem] w-full text-primary-content"
    >
        <div
            class="absolute text-3xl ml-[6%] mr-[6%] flex items-center justify-between h-[5rem] my-[1rem] w-[88%]"
        >
            <IonIcon
                @click="router.push({ name: 'admin.menu' })"
                :icon="arrowBack"
            ></IonIcon>
            <div
                class="flex justify-center items-center"
                v-if="isKepalaRuangan"
                @click="router.push({ name: 'assessment' })"
            >
                <IonIcon
                    :icon="add"
                ></IonIcon>
                <div class="text-sm">Create</div>
            </div>
        </div>
        <div class="grid place-items-center h-[10%]">
            <div class="flex justify-between items-center h-[5rem] my-[1rem]">
                <div class="flex flex-col drop-shadow-sm">
                    <div class="font-poppins-bold capitalize text-2xl">
                        Assessment
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div
        class="grid place-items-center grid-cols-7 drop-shadow-sm mb-4 pb-2 border-b-2 bg-primary"
    >
        <template v-for="(item, index) in rangeSeminggu" :key="index">
            <div
                @click="getByDay(item)"
                class="flex font-poppins flex-col justify-center p-4 items-center gap-1 w-full text-[#537FE7]"
                :class="{
                    'bg-base-100 card text-primary': item.active,
                    'text-red-500': item.hari == 'Ming',
                    'text-base-100': item.hari != 'Ming',
                }"
            >
                <div class="text-lg">
                    {{ item.hari }}
                </div>
                <div class="text-lg">
                    {{ item.tanggal }}
                </div>
            </div>
        </template>
    </div>
    <div class="grid place-items-center gap-4 mb-4 mx-4">
        <div
            v-show="false"
            class="card bg-[#537FE7] w-full drop-shadow-gray-700 drop-shadow-md font-poppins text-white"
        >
            <div class="card-body">
                <div class="card-title">
                    Supervisi Dokumentasi Asuhan Keperawatan
                </div>
                <div class="flex items-center gap-2">
                    <IonIcon :icon="calendarOutline"></IonIcon>
                    {{ moment().format("D MMM YYYY") }}
                </div>
                <div class="flex justify-end items-center flex-row gap-2">
                    <div
                        class="font-poppins-semibold capitalize grid place-items-center"
                    >
                        ketua tim
                    </div>
                    <div class="h-[2.4rem]">
                        <img
                            src="https://picsum.photos/200"
                            class="h-full rounded-full"
                            alt=""
                            srcset=""
                        />
                    </div>
                </div>
            </div>
        </div>
        <transition-group name="row" v-if="isKepalaRuangan">
            <template v-for="item in dataAssessment" :key="item.id">
                <div
                    @click="toAssessmentRoleList(job)"
                    class="card bg-[#E9F8F9] w-full drop-shadow-md font-poppins text-black"
                    v-for="(job, index) in item.assessment_job"
                    :key="index"
                >
                    <div class="card-body">
                        <div class="card-title">
                            {{ item?.judul }}
                        </div>
                        <div class="flex items-center gap-2">
                            <IonIcon :icon="calendarOutline"></IonIcon>
                            {{ moment(item?.waktu_buat).format("D MMM YYYY") }}
                        </div>
                        <div
                            class="flex justify-between items-center flex-row gap-2"
                        >
                            <div class="badge badge-sm capitalize badge-success" v-if="job.complete">complete</div>
                            <div class="badge badge-sm capitalize badge-error" v-else>uncomplete</div>
                            <div
                                class="font-poppins font-semibold capitalize grid place-items-center"
                                v-if="isKepalaRuangan"
                            >
                                PIC : {{ job?.user?.name }}
                            </div>
                            <div
                                class="font-poppins font-semibold capitalize grid place-items-center"
                                v-else
                            >
                                from : {{ item?.user?.name }}
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </transition-group>
        <transition-group name="row" v-else>
            <div
                @click="toAssessmentRoleList(item)"
                class="card bg-[#E9F8F9] w-full drop-shadow-md font-poppins text-black"
                v-for="item in dataAssessment"
                :key="item.id"
            >
                <div class="card-body">
                    <div class="card-title">
                        {{ item?.judul }}
                    </div>
                    <div class="flex items-center gap-2">
                        <IonIcon :icon="calendarOutline"></IonIcon>
                        {{ moment(item?.waktu_buat).format("D MMM YYYY") }}
                    </div>
                    <div
                        class="flex justify-between items-center flex-row gap-2"
                    >
                        <div class="badge badge-sm badge-success capitalize" v-if="item.complete == '1'">complete</div>
                        <div class="badge badge-sm badge-error capitalize" v-else>uncomplete</div>
                        <div
                            class="font-poppins font-semibold capitalize grid place-items-center"
                            v-if="isKepalaRuangan"
                        >
                            PIC : {{ item?.user?.name }}
                        </div>
                        <div
                            class="font-poppins font-semibold capitalize grid place-items-center"
                            v-else
                        >
                            from : {{ item?.user?.name }}
                        </div>
                    </div>
                </div>
            </div>
        </transition-group>
    </div>
</template>
<script lang="ts" setup>
import { arrowBack, calendarOutline, add } from "ionicons/icons";
import { IonIcon } from "@ionic/vue";
import moment from "moment";
import { ref } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const rangeSeminggu: any = ref([]);

const tanggal = () => {
    const days = ["Ming", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
    const waktuSekarang = new Date();
    const indexHari = waktuSekarang.getDay();

    if (indexHari > 0) {
        const hariSenin = new Date(
            waktuSekarang.setDate(waktuSekarang.getDate() - indexHari)
        );
        for (let index = 0; index < 7; index++) {
            const dataLoop = new Date(
                hariSenin.setDate(hariSenin.getDate() + 1)
            );
            const month = dataLoop.getMonth() + 1;

            const dataHari = {
                fullDate: `${dataLoop.getFullYear()}-${month}-${dataLoop.getDate()}`,
                hari: days[dataLoop.getDay()],
                tanggal: dataLoop.getDate(),
                active: new Date().getDate() == dataLoop.getDate(),
            };
            rangeSeminggu.value.push(dataHari);
        }
    } else {
        const hariSenin = new Date(
            waktuSekarang.setDate(waktuSekarang.getDate() + 1)
        );
        for (let index = 0; index < 7; index++) {
            const dataLoop = new Date(
                hariSenin.setDate(hariSenin.getDate() - 1)
            );
            const month = dataLoop.getMonth() + 1;

            const dataHari = {
                fullDate: `${dataLoop.getFullYear()}-${month}-${dataLoop.getDate()}`,
                hari: days[dataLoop.getDay()],
                tanggal: dataLoop.getDate(),
                active: new Date().getDate() == dataLoop.getDate(),
            };
            rangeSeminggu.value = [dataHari, ...rangeSeminggu.value];
        }
    }
};
function getByDay(date: any) {
    date.active = true;
    rangeSeminggu.value.forEach((element: any) => {
        if (element.tanggal != date.tanggal) {
            element.active = false;
        }
    });
    if (isKepalaRuangan) {
        getAssessment(date.fullDate);
    } else {
        getMeAssessment(date.fullDate);
    }
}

const dataAssessment = ref([]);
const getAssessment = async (date: any) => {
    const data = await axios({
        url: "assessment/filter",
        method: "post",
        data: { date: date },
    });

    dataAssessment.value = data.data.data;
};
const dateNow = new Date();
const toAssessmentRoleList = (job: any) => {
    if (isKepalaRuangan) {
        router.push({ name: "admin.job.assessment_view_select",params : {
                id : job?.identitas_pasien?.id ? job.identitas_pasien.id : 'null'
        } });
    } else {
        if (job.complete == "0") {
            store.state.assessment.id = job.id;
            router.push({ name: "admin.job.identitaspasien" });
        } else {
            router.push({
                name: "admin.job.assessment_view_select",
                params: {
                    id: job.pasien?.id,
                },
            });
        }
    }
};

const getMeAssessment = async (date: any) => {
    const data = await axios({
        url: "assessment/me",
        method: "post",
        data: { date: date },
    });

    dataAssessment.value = data.data.data;
};
const isKepalaRuangan = store.state.user?.role_id == 3;

if (isKepalaRuangan) {
    getAssessment(
        `${dateNow.getFullYear()}-${
            dateNow.getMonth() + 1
        }-${dateNow.getDate()}`
    );
} else {
    getMeAssessment(
        `${dateNow.getFullYear()}-${
            dateNow.getMonth() + 1
        }-${dateNow.getDate()}`
    );
}

tanggal();
</script>
<style lang=""></style>
