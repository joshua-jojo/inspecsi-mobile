<script lang="ts" setup>
import useForm from 'form-helper-axios';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore()
const router = useRouter()
const hasil_pemeriksaan_lanjutan = store.state.assessment.informasi.hasil_pemeriksaan_lanjutan

store.state.judul_job = "Hasil Pemeriksaan Penunjang";

async function nextPage() {
    const data = hasil_pemeriksaan_lanjutan
    data.identitas_pasien_id = await store.state.assessment.pasien_id
    const form = useForm(data)
    form.post('assessment-data/hasil-pemeriksaan-penunjang',{
        onSuccess : () => {
            router.push({
                name: "admin.job.analisis_data",
            })
        }
    })
}
</script>

<template>
    <div class="form-control">
        <label class="label">Labolatorium</label>
        <input type="text" class="input input-bordered" v-model="hasil_pemeriksaan_lanjutan.labolatorium">
    </div>

    <div class="form-control">
        <label class="label">Rongent</label>
        <input type="text" class="input input-bordered" v-model="hasil_pemeriksaan_lanjutan.rongent">
    </div>

    <div class="form-control">
        <label class="label">Lainnya</label>
        <input type="text" class="input input-bordered" v-model="hasil_pemeriksaan_lanjutan.lainnya">
    </div>

    <button class="btn btn-primary mt-5" @click="nextPage">Next</button>
</template>