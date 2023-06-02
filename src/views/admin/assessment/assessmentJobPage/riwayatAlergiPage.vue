<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore()
const router = useRouter()
const riwayat_alergi = store.state.assessment.informasi.riwayat_alergi

store.state.judul_job = "riwayat alergi"

function nextPage() {
    router.push({
        name: "admin.job.asesmennyeri"
    })
}
</script>

<template>
    <div class="form-control capitalize">
        <label class="label">Mengalami Alergi</label>
        <label class="label w-max gap-2">
            <input type="radio" class="radio" name="alergi" v-model="riwayat_alergi.status" :value="true">
            <span>ya</span>
        </label>
        <label class="label w-max gap-2">
            <input type="radio" class="radio" name="alergi" v-model="riwayat_alergi.status" :value="false">
            <span>tidak</span>
        </label>
    </div>
    <div class="form-control" v-if="riwayat_alergi.status">
        <label class="label capitalize">sebutkan</label>
        <input type="text" class="input input-bordered" v-model="riwayat_alergi.alergi">
    </div>
    <div class="form-control" v-if="riwayat_alergi.status">
        <label class="label capitalize">reaksi alergi</label>
        <input type="text" class="input input-bordered" v-model="riwayat_alergi.reaksi_alergi">
    </div>

    <button class="btn btn-primary mt-5" @click="nextPage">Next</button>
</template>