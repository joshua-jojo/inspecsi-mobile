<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore()
const router = useRouter()
const ekonomi = store.state.assessment.informasi.ekonomi

store.state.judul_job = "Ekonomi";

function nextPage() {
    router.push({
        name: "admin.job.riwayatalergi"
    })
}
</script>

<template>
    <div class="form-control">
        <label class="label">Status Pekerjaan</label>
        <input type="text" class="input input-bordered" v-model="ekonomi.status_pekerjaaan">
    </div>
    <div class="form-control">
        <label class="label">Pembiayaan/Jaminan Kesehatan</label>
        <input type="text" class="input input-bordered" v-model="ekonomi.pembiayaan_kesehatan">
    </div>
    <div class="form-control">
        <label class="label">Penanggung Jawab Pasien</label>
        <input type="text" class="input input-bordered" v-model="ekonomi.penanggung_jawab_pasian">
    </div>

    <button class="btn btn-primary mt-5" @click="nextPage">Next</button>
</template>