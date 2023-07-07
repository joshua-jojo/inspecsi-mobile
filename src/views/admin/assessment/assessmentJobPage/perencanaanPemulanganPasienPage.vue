<script lang="ts" setup>

import useForm from 'form-helper-axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore()
const router = useRouter()
const perencanaan_pemulangan_pasien = ref(store.state.assessment.informasi.perencanaan_pemulangan_pasien);
const listPerencanaan = [
    "Umur diatas 65",
    "Keterbatasan Mobilitas",
    "Perawatan atau Pengobatan lanjutan",
    "Bantuan untuk melakukan aktivitas sehari-hari",
];

store.state.judul_job = "kebutuhan Perencanaan Pemulangan Pasien (P3) / (Discharge Planning)"

async function nextPage() {
    const data : any = {
        opsi : perencanaan_pemulangan_pasien.value
    }
    data.identitas_pasien_id = await store.state.assessment.pasien_id
    const form = useForm(data)
    form.post('assessment-data/perencanaan-pemulangan-pasien', {
        onSuccess: () => {
            router.push({
                name: "admin.job.riwayatpenggunaanobat"
            })
        }
    })
}
</script>

<template>
    <div class="px-4">
        <div class="form-control">
        <label class="label"> Kriteria Pemulangan Kritis</label>
        <label class="label gap-2 w-max capitalize" v-for="(item, index) in listPerencanaan" :key="index">
            <input type="checkbox" class="checkbox" v-model="perencanaan_pemulangan_pasien" :value="item"> {{ item }}
        </label>
    </div>
    <button class="btn btn-block my-1 btn-primary mt-5" @click="nextPage">Next</button>
    <div class="btn btn-block my-1 btn-outline btn-primary" @click="router.back()"> back </div>
    </div>
</template>