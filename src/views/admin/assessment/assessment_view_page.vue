<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const props = defineProps({
    id: String,
});
const store = useStore();
store.state.judul_job = "Menu";

const go_catatan = () => {
    router.push({
        name: "admin.job.catatan_perkembangan_pasien",
        params: {
            id: props.id,
        },
    });
    // router.push({
    //     name : 'admin.job.assessment_view_catatan_pasien',
    //     params : {
    //         id : props.id
    //     }
    // })
};

const go_data = () => {
    router.push({
        name: "admin.job.assessment_view_data_pasien",
        params: {
            id: props.id,
        },
    });
};
const penilaian = () => {
    router.push({
        name: "penilaian",
        params: {
            id: props.id,
        },
    });
};
</script>
<template lang="">
    <div class="px-4">
        <div class="flex flex-col gap-5">
        <button
            @click="go_data"
            :class="{ 'btn-disabled': props.id == 'null' }"
            class="btn btn-primary"
        >
            {{ props.id != "null" ? "Data Pasien" : "Belum Ada Data" }}
        </button>
        <button
            @click="go_catatan"
            :class="{ 'btn-disabled': props.id == 'null' }"
            class="btn btn-primary"
        >
            {{
                props.id != "null"
                    ? "Catatan perkembangan pasien"
                    : "Belum Ada Catatan"
            }}
        </button>
        <button
            @click="penilaian"
            :class="{ 'btn-disabled': props.id == 'null' }"
            class="btn btn-block my-1 btn-primary"
        >
            {{ props.id != "null" ? "Penilaian" : "Belum Ada Penilaian" }}
        </button>
        <button class="btn-block my-1 btn" @click="router.back()">Back</button>
    </div>
    </div>
</template>
