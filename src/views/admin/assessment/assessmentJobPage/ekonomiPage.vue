<script lang="ts" setup>
import useForm from 'form-helper-axios';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore()
const router = useRouter()
const ekonomi = store.state.assessment.informasi.ekonomi

// ekonomi.status_pekerjaaan = 213
// ekonomi.pembiayaan_kesehatan = 213
// ekonomi.penanggung_jawab_pasien = 213

store.state.judul_job = "Ekonomi";

async function nextPage() {
    const data = ekonomi
    data.identitas_pasien_id = await store.state.assessment.pasien_id
    const form = useForm(data)
    form.post("assessment-data/ekonomi", {
        onSuccess: () => {
            router.push({
                name: "admin.job.riwayatalergi"
            })
        }
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
        <input type="text" class="input input-bordered" v-model="ekonomi.penanggung_jawab_pasien">
    </div>

    <button class="btn btn-primary mt-5" @click="nextPage">Next</button>
</template>