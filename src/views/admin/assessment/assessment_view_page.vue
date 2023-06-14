<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter()
const props = defineProps({
    id : String
})
const store = useStore()
store.state.judul_job = "Menu";

const go_catatan = () => {
    router.push({
        name : 'admin.job.assessment_view_catatan_pasien',
        params : {
            id : props.id
        }
    })
}

const go_data = () => {
    router.push({
        name : 'admin.job.assessment_view_data_pasien',
        params : {
            id : props.id
        }
    })
}
</script>
<template lang="">
    <div class="flex flex-col gap-5">
        <button @click="go_data" class="btn btn-primary">Data Pasien</button>
        <button @click="go_catatan" class="btn btn-primary">catatan perkembangan Pasien</button>
    </div>
</template>