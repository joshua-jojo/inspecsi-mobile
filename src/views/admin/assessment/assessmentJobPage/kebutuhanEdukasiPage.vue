<script lang="ts" setup>
import useForm from 'form-helper-axios';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore()
const router = useRouter()
const kebutuhan_edukasi = ref(store.state.assessment.informasi.kebutuhan_edukasi);
const dataEdukasi = ["Perawatan", 'Nutrisi', 'Manajemen Nyeri', 'Perawatan Luka', 'Pengobatan', 'Aktivitas dan Latihan', 'Pencegahan Infeksi', 'lainnya'];
const lainnya = ref(false);

store.state.judul_job = "kebutuhan edukasi"

async function nextPage() {
    const data = kebutuhan_edukasi.value
    data.identitas_pasien_id = await store.state.assessment.pasien_id
    const form = useForm(data)
    form.post('assessment-data/kebutuhan-edukasi', {
        onSuccess: () => {
            router.push({
                name: "admin.job.perencanaanpemulanganpasien"
            })
        }
    })
}

watch(() => kebutuhan_edukasi.value.pilihan, () => {
    const data = kebutuhan_edukasi.value.pilihan.find((element: any) => {
        if (element == 'lainnya') {
            return 123;
        }
    });

    lainnya.value = data == "lainnya"
    
})
</script>

<template>
    <div class="px-4">
        <div class="form-control">
        <label class="label w-max gap-2 capitalize" v-for="(item) in dataEdukasi" :key="item">
            <input type="checkbox" class="checkbox" v-model="kebutuhan_edukasi.pilihan" :value="item">
            <span>{{ item }}</span>
        </label>
    </div>
    <div class="form-control" v-if="lainnya" :key="`${lainnya}`">
        <label class="label">Sebutkan</label>
        <input type="text" class="input input-bordered" v-model="kebutuhan_edukasi.tambahan">
    </div>

    <button class="btn btn-block my-1 btn-primary mt-5" @click="nextPage">Next</button>
    <div class="btn btn-block my-1 btn-outline btn-primary" @click="router.back()"> back </div>
    </div>
</template>