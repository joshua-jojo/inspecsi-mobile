<script lang="ts" setup>
import useForm from 'form-helper-axios';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore()
const router = useRouter()
const asesmen_nyeri = store.state.assessment.informasi.asesmen_nyeri;

store.state.judul_job = "asesmen nyeri"

async function nextPage() {
    const data = asesmen_nyeri
    data.identitas_pasien_id = await store.state.assessment.pasien_id
    const form = useForm(data)
    form.post('assessment-data/nyeri', {
        onSuccess: () => {
            router.push({
                name: "admin.job.kebutuhanedukasi"
            })
        }
    })
}
</script>

<template>
    <div class="form-control capitalize">
        <label class="label">Apakah ada keluhan nyeri</label>
        <label class="label w-max gap-2">
            <input type="radio" class="radio" name="alergi" v-model="asesmen_nyeri.status" :value="true">
            <span>ya</span>
        </label>
        <label class="label w-max gap-2">
            <input type="radio" class="radio" name="alergi" v-model="asesmen_nyeri.status" :value="false">
            <span>tidak</span>
        </label>
    </div>

    <div class="form-control" v-if="asesmen_nyeri.status">
        <label class="label capitalize">Sejak kapan mengeluh nyeri</label>
        <input type="text" class="input input-bordered" v-model="asesmen_nyeri.kapan">
    </div>

    <div class="form-control" v-if="asesmen_nyeri.status">
        <label class="label capitalize">Apa faktor pencetus nyeri</label>
        <input type="text" class="input input-bordered" v-model="asesmen_nyeri.faktor">
    </div>

    <div class="form-control" v-if="asesmen_nyeri.status">
        <label class="label capitalize">Jelaskan karakteristik nyeri</label>
        <input type="text" class="input input-bordered" v-model="asesmen_nyeri.karakteristik">
    </div>

    <div class="form-control" v-if="asesmen_nyeri.status">
        <label class="label capitalize">Dimana lokasi nyeri</label>
        <input type="text" class="input input-bordered" v-model="asesmen_nyeri.lokasi">
    </div>

    <div class="form-control" v-if="asesmen_nyeri.status">
        <label class="label capitalize">Berapa skala nyeri</label>
        <input type="text" class="input input-bordered" v-model="asesmen_nyeri.skala">
    </div>

    <div class="form-control" v-if="asesmen_nyeri.status">
        <label class="label capitalize">Bagaimana durasi, lama nyeri</label>
        <input type="text" class="input input-bordered" v-model="asesmen_nyeri.durasi">
    </div>

    <button class="btn btn-primary mt-5" @click="nextPage">Next</button>
    <div class="btn btn-outline btn-primary" @click="router.back()"> back </div>
</template>