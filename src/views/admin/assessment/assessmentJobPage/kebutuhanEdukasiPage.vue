<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore()
const router = useRouter()
const kebutuhan_edukasi = ref(store.state.assessment.informasi.kebutuhan_edukasi);
const dataEdukasi = ["Perawatan", 'Nutrisi', 'Manajemen Nyeri', 'Perawatan Luka', 'Pengobatan', 'Aktivitas dan Latihan', 'Pencegahan Infeksi','lainnya'];
const lainnya = ref(false);

store.state.judul_job = "kebutuhan edukasi"

function nextPage() {
    router.push({
        name: "admin.job.perencanaanpemulanganpasien"
    })
}

watch(() => kebutuhan_edukasi.value.pilihan, () => {
    kebutuhan_edukasi.value.pilihan.find((element : any) => {
        if(element == 'lainnya'){
            return lainnya.value = true
        }
        lainnya.value = false
    });
})
</script>

<template>
    <div class="form-control">
        <label class="label w-max gap-2 capitalize" v-for="(item) in dataEdukasi" :key="item">
            <input type="checkbox" class="checkbox" v-model="kebutuhan_edukasi.pilihan" :value="item">
            <span>{{ item }}</span>
        </label>
    </div>
    <div class="form-control" v-if="lainnya">
        <label class="label">Sebutkan</label>
        <input type="text" class="input input-bordered" v-model="kebutuhan_edukasi.tambahan">
    </div>

    <button class="btn btn-primary mt-5" @click="nextPage">Next</button>
</template>