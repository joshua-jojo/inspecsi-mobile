<script lang="ts" setup>
import useForm from 'form-helper-axios';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore()
const router = useRouter()
const riwayat_penggunaan_obat = ref(store.state.assessment.informasi.riwayat_penggunaan_obat)
const lainnya = ref(false)
const obat = ref({
    nama: null,
    dosis: null,
    asal: null,
})
const populasi = [
    "Geriatrik",
    "Kemoterapi",
    "Hemodialisa",
    "Terminal",
    "Perioperatif",
    "Lainnya",
]

store.state.judul_job = "Riwayat Penggunaan Obat";

async function nextPage() {
    const data_form: any = {
        obat: riwayat_penggunaan_obat.value.obat,
        asesmen_populasi_khusus : riwayat_penggunaan_obat.value.asesmen_populasi_khusus
    }
    data_form.identitas_pasien_id = await store.state.assessment.pasien_id
    const form = useForm(data_form)
    form.post('assessment-data/riwayat-penggunaan-obat', {
        onSuccess: () => {
            router.push({
                name: "admin.job.hasilpemeriksaanpenunjang"
            })
        }
    })
}
function resetObat() {
    obat.value = {
        nama: null,
        dosis: null,
        asal: null,
    }
}
function tambahObat() {
    const { nama, dosis, asal } = obat.value
    if (nama && dosis && asal) {
        riwayat_penggunaan_obat.value.obat.push(obat.value)
        resetObat();
    }
}
function hapusDaftarObat(index: number) {
    riwayat_penggunaan_obat.value.obat.splice(index, 1)
}

watch(() => riwayat_penggunaan_obat.value.asesmen_populasi_khusus.populasi, async() => {
    const populasi = await riwayat_penggunaan_obat.value.asesmen_populasi_khusus.populasi.find((element: any) => {
        if (element == "Lainnya") {
            return element;
        }
    });
    if(populasi){
        lainnya.value = true;
    }else {
        lainnya.value = false;
    }
    
})
</script>

<template>
    <div class="form-control">
        <label class="label text-lg font-semibold">Penggunaan Obat</label>
        <div class="card shadow-lg mt-2" v-for="(item, index) in riwayat_penggunaan_obat.obat" :key="index">
            <div class="card-body">
                <div class="card-title text-sm">Nama Obat : {{ item.nama }}</div>
                <div class="card-title text-sm">Dosis : {{ item.dosis }}</div>
                <div class="card-title text-sm">Asal / Sumber Obat : {{ item.asal }}</div>
                <div class="flex justify-end">
                    <div class="btn btn-warning btn-xs w-max" @click="hapusDaftarObat(index)">hapus</div>
                </div>
            </div>
        </div>
        <div class="form-control mt-6">
            <label class="label">Nama Obat</label>
            <input type="text" class="input input-bordered" v-model="obat.nama">
        </div>
        <div class="form-control">
            <label class="label">Dosis</label>
            <input type="text" class="input input-bordered" v-model="obat.dosis">
        </div>
        <div class="form-control">
            <label class="label">Asal /Sumber Obat</label>
            <input type="text" class="input input-bordered" v-model="obat.asal">
        </div>
    </div>
    <button class="btn btn-success" @click="tambahObat()">+ penggunaan obat</button>

    <div class="form-control mt-6">
        <label class="label">Asesmen Populasi Khusus</label>
        <div class="flex flex-col gap-2">
            <label class="class flex flex-row" v-for="(item, index) in populasi" :key="index" :for="item">
                <input type="checkbox" :id="item" class="checkbox"
                    v-model="riwayat_penggunaan_obat.asesmen_populasi_khusus.populasi" :value="item"> {{ item }}
            </label>
        </div>
    </div>
    <div class="form-control mt-6" v-if="lainnya">
        <label class="label">Sebutkan</label>
        <input type="text" class="input input-bordered" v-model="riwayat_penggunaan_obat.asesmen_populasi_khusus.tambahan">
    </div>
    <button class="btn btn-primary mt-5" @click="nextPage">Next</button>
    <div class="btn btn-outline btn-primary" @click="router.back()"> back </div>
</template>