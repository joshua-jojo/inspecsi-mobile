<script lang="ts" setup>
import useForm from 'form-helper-axios';
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore()
const router = useRouter()
store.state.judul_job = "identitas pasien"

const dataPasien = store.state.assessment.pasien;
const nextButton = ref(false)
const cekData = () => {
    const { nama, no_rm, tanggal_lahir, diagnosa_medis, ruang_rawat, pendidikan, tanggal_masuk, tanggal_asesmen } = dataPasien
    if (nama && no_rm && tanggal_lahir && diagnosa_medis && ruang_rawat && pendidikan && tanggal_masuk && tanggal_asesmen) {
        nextButton.value = false
    }
    else {
        nextButton.value = true
    }
}
// dataPasien.nama = "123"
// dataPasien.no_rm = "123"
// dataPasien.tanggal_lahir = "2023-09-09"
// dataPasien.diagnosa_medis = "123"
// dataPasien.ruang_rawat = "123"
// dataPasien.pendidikan = "123"
// dataPasien.tanggal_masuk = "2023-09-10"
// dataPasien.tanggal_asesmen = "2023-09-11"

dataPasien['assessment_id'] = store.state.assessment.id
const nextPage = () => {
    const form = useForm(dataPasien)
    form.post("assessment-data/identitas-pasien", {
        onSuccess: async (res: any) => {
            store.state.assessment.pasien_id = await res.pasien_id

            router.push({
                name: 'admin.job.riwayatkesehatan'
            })
        }
    })
}
watchEffect(() => {
    cekData()
})
</script>

<template>
    <div class="px-4">
        <div class="form-control">
        <label class="label">
            Nama Pasien
        </label>
        <input type="text" v-model="dataPasien.nama" class="input input-bordered w-full">
    </div>

    <div class="form-control">
        <label class="label">
            No. RM
        </label>
        <input type="text" v-model="dataPasien.no_rm" class="input input-bordered w-full">
    </div>

    <div class="form-control">
        <label class="label">
            Tanggal Lahir
        </label>
        <input type="date" v-model="dataPasien.tanggal_lahir" class="input input-bordered w-full">
    </div>

    <div class="form-control">
        <label class="label">
            Diagnosa Medis
        </label>
        <input type="text" v-model="dataPasien.diagnosa_medis" class="input input-bordered w-full">
    </div>

    <div class="form-control">
        <label class="label">
            Ruang Rawat
        </label>
        <input type="text" v-model="dataPasien.ruang_rawat" class="input input-bordered w-full">
    </div>

    <div class="form-control">
        <label class="label">
            Pendidikan
        </label>
        <input type="text" v-model="dataPasien.pendidikan" class="input input-bordered w-full">
    </div>

    <div class="form-control">
        <label class="label">
            Tanggal Masuk
        </label>
        <input type="date" v-model="dataPasien.tanggal_masuk" class="input input-bordered w-full">
    </div>

    <div class="form-control">
        <label class="label">
            Tanggal asesmen
        </label>
        <input type="date" v-model="dataPasien.tanggal_asesmen" class="input input-bordered w-full">
    </div>

    <button :disabled="nextButton" class="btn btn-block btn-primary mt-5"
        @click="nextPage">Next</button>
    </div>
</template>