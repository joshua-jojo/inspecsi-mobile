<template>
    <div class="px-4">
        <div class="flex flex-col gap-5">
        <div class="flex flex-col gap-2">
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Data Subjektif</span>
                </label>
                <input type="text" v-model="data.subjektif" class="input input-bordered">
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Data Objektif</span>
                </label>
                <input type="text" v-model="data.objektif" class="input input-bordered">
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Penyebab / Etiologi</span>
                </label>
                <input type="text" v-model="data.penyebab" class="input input-bordered">
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Masalah / Problem</span>
                </label>
                <input type="text" v-model="data.masalah" class="input input-bordered">
            </div>
            <button :disabled="block" @click="add" class="btn btn-primary">Simpan</button>
        </div>
        <div class="flex flex-col gap-2">
            <div class="flex flex-col w-full card shadow-md" v-for="(item, index) in data_analisis" :key="index">
                <div class="card-body">
                    <div class="card-title">Analisis {{ index+1 }}</div>
                    <div class="overflow-auto">
                        <table class="table table-compact table-zebra w-full">
                        <tbody>
                            <tr>
                            <th>Subjektif</th>
                            <th>:</th>
                            <td>{{ item.subjektif }}</td>
                        </tr>
                        <tr>
                            <th>Objektif</th>
                            <th>:</th>
                            <td>{{ item.objektif }}</td>
                        </tr>
                        <tr>
                            <th>Penyebab</th>
                            <th>:</th>
                            <td>{{ item.penyebab }}</td>
                        </tr>
                        <tr>
                            <th>Masalah</th>
                            <th>:</th>
                            <td>{{ item.masalah }}</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <!-- <div class="flex overflow-hidden gap-2">
                        <div class="w-[90px] ">Subjektif</div>
                        <div class="w-[10px] ">:</div>
                        <div class="w-full">{{ item.subjektif }}</div>
                    </div>
                    <div class="flex overflow-hidden gap-2">
                        <div class="w-[90px] ">Objektif</div>
                        <div class="w-[10px] ">:</div>
                        <div class="w-full">{{ item.subjektif }}</div>
                    </div>
                    <div class="flex overflow-hidden gap-2">
                        <div class="w-[90px] ">Penyebab</div>
                        <div class="w-[10px] ">:</div>
                        <div class="w-full">{{ item.subjektif }}</div>
                    </div>
                    <div class="flex overflow-hidden gap-2">
                        <div class="w-[90px] ">Masalah</div>
                        <div class="w-[10px] ">:</div>
                        <div class="w-full">{{ item.subjektif }}</div>
                    </div> -->
                </div>
            </div>
        </div>
        <button :disabled="!data_analisis.length" @click="finish" class="btn btn-block my-1 btn-primary">Selesai</button>
        <div class="btn btn-block my-1 btn-outline btn-primary" @click="router.back()"> back </div>
    </div>
    </div>
</template>
<script lang="ts" setup>
import useForm from 'form-helper-axios';
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore()
const router = useRouter()
store.state.judul_job = "Analisis Data";

const data_analisis: any = ref([])

const default_data = {
    subjektif: null,
    objektif: null,
    penyebab: null,
    masalah: null,
}
const data = ref(default_data)
const block = ref(true)

const add = () => {
    if (!block.value) {
        data_analisis.value.push({
            ...data.value
        })
        data.value.subjektif = null
        data.value.objektif = null
        data.value.penyebab = null
        data.value.masalah = null
    }
}
const finish = () => {
    const data_form = {
        identitas_pasien_id : store.state.assessment.pasien_id,
        data : data_analisis.value,
    }
    const form = useForm(data_form)
    form.post('assessment-data/analisis-data',{
        onSuccess : () => {
            router.push({
                name : 'admin.job.masalah_keperawatan'
            })
        }
    });
}

watchEffect(() => {
    const { subjektif, objektif, penyebab, masalah } = data.value
    if (subjektif && objektif && penyebab && masalah) {
        block.value = false
    } else {
        block.value = true
    }
})
</script>
<style lang="">
    
</style>