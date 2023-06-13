<script lang="ts" setup>
import useForm from 'form-helper-axios';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore()
const router = useRouter()
const riwayatKesehatan = store.state.assessment.informasi.riwayat_kesehatan

store.state.judul_job = "riwayat kesehatan"
riwayatKesehatan.identitas_pasien_id = store.state.assessment.pasien_id

// riwayatKesehatan.keluhan_utama = "123"
// riwayatKesehatan.riwayat_kesehatan_sekarang = "123"
// riwayatKesehatan.riwayat_kesehatan_sekarang = "123"
// riwayatKesehatan.riwayat_kesehatan_dulu.penyakit_genetik.status = true
// riwayatKesehatan.riwayat_kesehatan_dulu.penyakit_genetik.keterangan = 123
// riwayatKesehatan.riwayat_kesehatan_dulu.penyakit_genetik.sejak_kapan = 123
// riwayatKesehatan.riwayat_kesehatan_dulu.trauma = true
// riwayatKesehatan.riwayat_kesehatan_dulu.operasi = true
// riwayatKesehatan.riwayat_kesehatan_dulu.lainnya.status = true
// riwayatKesehatan.riwayat_kesehatan_dulu.lainnya.penyakit.keterangan = 123
// riwayatKesehatan.riwayat_kesehatan_keluarga = 123
// riwayatKesehatan.auto_anamnesa.status = false
// riwayatKesehatan.auto_anamnesa.pemberi_informasi = 123


function nextPage() {
    const form = useForm(riwayatKesehatan);
    form.post('assessment-data/riwayat-kesehatan',{
        onSuccess : () => {
            router.push({
                name: 'admin.job.statusfisik'
            })
        }
    })
}

</script>

<template>
    <div class="form-control">
        <label class="label capitalize">keluhan utama</label>
        <input v-model="riwayatKesehatan.keluhan_utama" type="text" class="input input-bordered">
    </div>

    <div class="form-control">
        <label class="label capitalize">Riwayat Kesehatan Sekarang</label>
        <textarea v-model="riwayatKesehatan.riwayat_kesehatan_sekarang" class="textarea textarea-bordered"> </textarea>
    </div>

    <div class="form-control">
        <label class="label capitalize w-max gap-2">
            <input v-model="riwayatKesehatan.riwayat_kesehatan_dulu.penyakit_genetik.status" type="checkbox"
                class="checkbox" />
            <span>Penyakit termasuk penyakit genetik</span>
        </label>
    </div>

    <template v-if="riwayatKesehatan.riwayat_kesehatan_dulu.penyakit_genetik.status">
        <div class="form-control">
            <label class="label capitalize">Sebutkan Penyakit</label>
            <input v-model="riwayatKesehatan.riwayat_kesehatan_dulu.penyakit_genetik.keterangan" type="text"
                class="input input-bordered">
        </div>

        <div class="form-control">
            <label class="label capitalize">sejak kapan</label>
            <textarea v-model="riwayatKesehatan.riwayat_kesehatan_dulu.penyakit_genetik.sejak_kapan"
                class="textarea textarea-bordered"> </textarea>
        </div>
    </template>

    <div class="form-control flex flex-row gap-4">
        <label class="label capitalize w-max gap-2">
            <input v-model="riwayatKesehatan.riwayat_kesehatan_dulu.trauma" type="checkbox" class="checkbox" />
            <span>Trauma</span>
        </label>
        <label class="label capitalize w-max gap-2">
            <input v-model="riwayatKesehatan.riwayat_kesehatan_dulu.operasi" type="checkbox" class="checkbox" />
            <span>Operasi</span>
        </label>
        <label class="label capitalize w-max gap-2">
            <input v-model="riwayatKesehatan.riwayat_kesehatan_dulu.lainnya.status" type="checkbox" class="checkbox" />
            <span>lainnya</span>
        </label>
    </div>

    <template v-if="riwayatKesehatan.riwayat_kesehatan_dulu.lainnya.status">
        <div class="form-control">
            <label class="label capitalize">Sebutkan Penyakit</label>
            <input v-model="riwayatKesehatan.riwayat_kesehatan_dulu.lainnya.penyakit.keterangan" type="text"
                class="input input-bordered">
        </div>

        <div class="form-control">
            <label class="label capitalize">sejak kapan</label>
            <textarea v-model="riwayatKesehatan.riwayat_kesehatan_dulu.lainnya.penyakit.sejak_kapan"
                class="textarea textarea-bordered"> </textarea>
        </div>
    </template>

    <div class="form-control">
        <label class="label capitalize">riwayat kesehatan keluarga</label>
        <textarea v-model="riwayatKesehatan.riwayat_kesehatan_keluarga" class="textarea textarea-bordered"> </textarea>
    </div>

    <div class="form-control">
        <label class="label capitalize w-max gap-2">
            <input v-model="riwayatKesehatan.auto_anamnesa.status" type="radio" name="radio-1" class="radio" checked
                :value="true" />
            <span>Auto Anamnesa jika pasien kompeten</span>
        </label>
    </div>

    <div class="form-control">
        <label class="label capitalize w-max gap-2">
            <input v-model="riwayatKesehatan.auto_anamnesa.status" type="radio" name="radio-1" class="radio"
                :value="false" />
            <span>Auto Anamnesa jika pasien tidak kompeten</span>
        </label>
    </div>

    <template v-if="!riwayatKesehatan.auto_anamnesa.status">
        <div class="form-control">
            <label class="label capitalize">Nama Pemberi informasi</label>
            <input v-model="riwayatKesehatan.auto_anamnesa.pemberi_informasi" type="text" class="input input-bordered">
        </div>
    </template>
    
    <button class="btn btn-primary mt-5" @click="nextPage">Next</button>
    <div class="btn btn-outline btn-primary" @click="router.back()"> back </div>
</template>