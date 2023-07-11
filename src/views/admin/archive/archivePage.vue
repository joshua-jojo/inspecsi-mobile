<template lang="">
    <div
        class="relative justify-between items-center bg-primary text-primary-content h-[6rem]"
    >
        <div
            @click="router.push({ name: 'admin.menu' })"
            class="absolute text-3xl ml-[6%] flex items-center h-[5rem] my-[1rem]"
        >
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

    <div class="px-4">
        <div class="flex justify-between gap-2 my-4">
            <input
                v-model="cari"
                type="text"
                placeholder="Search"
                class="input text-[20px] font-poppins bg-[#E9F8F9] input-bordered w-full border-2 border-primary rounded-xl"
            />
            <button class="btn btn-primary text-2xl">
                <IonIcon :icon="search"></IonIcon>
            </button>
        </div>

        <div class="grid place-items-center gap-4 mb-4">
            <div
                v-show="false"
                class="card bg-primary w-full drop-shadow-gray-700 drop-shadow-md font-poppins text-white"
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
                                {{ item.judul }}
                            </div>
                            <div class="flex items-center gap-2">
                                <IonIcon :icon="calendarOutline"></IonIcon>
                                {{
                                    moment(item.waktu_buat).format("D MMM YYYY")
                                }}
                                -
                                {{
                                    moment(item.waktu_berakhir).format(
                                        "D MMM YYYY"
                                    )
                                }}
                            </div>
                            <div
                                class="flex justify-between items-center flex-row gap-2"
                            >
                                <div
                                    class="badge badge-sm capitalize badge-success"
                                    v-if="job.complete == '1'"
                                >
                                    complete
                                </div>
                                <div
                                    class="badge badge-sm capitalize badge-error"
                                    v-else
                                >
                                    uncomplete
                                </div>
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
                <template v-for="item in dataAssessment" :key="item.id">
                    <div
                        @click="toAssessmentRoleList(item)"
                        class="card bg-[#E9F8F9] w-full drop-shadow-md font-poppins text-black"
                    >
                        <div class="card-body">
                            <div class="card-title">
                                {{ item.judul }}
                            </div>
                            <div class="flex items-center gap-2">
                                <IonIcon :icon="calendarOutline"></IonIcon>
                                {{
                                    moment(item.waktu_buat).format("D MMM YYYY")
                                }}
                                -
                                {{
                                    moment(item.waktu_berakhir).format(
                                        "D MMM YYYY"
                                    )
                                }}
                            </div>
                            <div
                                class="flex justify-between items-center flex-row gap-2"
                            >
                                <div
                                    class="badge badge-sm capitalize badge-success"
                                    v-if="item.complete == '1'"
                                >
                                    complete
                                </div>
                                <div
                                    class="badge badge-sm capitalize badge-error"
                                    v-else
                                >
                                    uncomplete
                                </div>
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
                </template>
            </transition-group>
        </div>
    </div>
</template>
<script lang="ts" setup>
import moment from "moment";
import { search, calendarOutline, arrowBack } from "ionicons/icons";
import { IonIcon } from "@ionic/vue";
import { ref, watch } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();
const dataAssessment = ref([]);
const getAssessment = async () => {
    const data = await axios({
        method: "post",
        url: "assessment/all",
        data: {
            cari: cari.value,
        },
    });

    dataAssessment.value = data.data.data;
};

const cari = ref("");

const toAssessmentRoleList = (job: any) => {
    if (isKepalaRuangan) {
        router.push({
            name: "admin.job.assessment_view_select",
            params: {
                id: job?.identitas_pasien?.id
                    ? job.identitas_pasien.id
                    : "null",
            },
        });
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

const getMeAssessment = async () => {
    const data = await axios({
        url: "assessment/me",
        method: "post",
        data: { date: "all" },
    });

    dataAssessment.value = data.data.data;
};
const isKepalaRuangan = store.state.user?.role_id == 3;

if (isKepalaRuangan) {
    getAssessment();
} else {
    getMeAssessment();
}

watch(
    () => cari.value,
    () => getAssessment()
);
</script>
<style lang=""></style>
