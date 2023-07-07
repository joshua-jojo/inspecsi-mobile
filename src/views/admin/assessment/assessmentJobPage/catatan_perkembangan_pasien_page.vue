<script lang="ts" setup>
import axios from 'axios';
import useForm from 'form-helper-axios';
import { ref, watchEffect } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
store.state.judul_job = "Catatan Perkembangan Pasien"
const KepalaRuangan = store.state.user?.role?.nama == "kepala ruangan"

const props = defineProps({
    id : String
})

const date_now = new Date()
const tahun = date_now.getFullYear();
const bulan = date_now.getMonth();
const tanggal = date_now.getDate();
const date_set = `${tahun}-${bulan < 10 ? '0' + bulan : bulan}-${tanggal < 10 ? '0' + tanggal : tanggal}`

const data_form: any = ref({
    identitas_pasien_id: props.id,
    tanggal: date_set,
    implementasi: '',
    soap_subjektif: '',
    soap_objek: '',
    soap_assessment: '',
    soap_plan: '',
})

const disabled_button = ref(true)

const form = useForm(data_form.value)

const add = async () => {
    form.post('assessment-data/catatan-perkembangan-pasien', {
        onSuccess: () => {
            form.reset()
            document.getElementById('modal')?.click()
            get_catatan()
        }
    })
}

const data_catatan: any = ref([])

const get_catatan = () => {
    axios({
        url: 'assessment-data/get-catatan-perkembangan-pasien',
        method: 'post',
        data: {
            identitas_pasien_id: props.id
        }
    }).then((res) => {
        data_catatan.value = res.data.data
    })
}

watchEffect(() => {
    const { tanggal, implementasi, soap_subjektif, soap_objek, soap_assessment, soap_plan } = form

    if (tanggal && implementasi && soap_subjektif && soap_objek && soap_assessment && soap_plan) {
        disabled_button.value = false
    }
    else {
        disabled_button.value = true
    }
})

get_catatan()
</script>
<template lang="">
    <div class="flex flex-col gap-8">
        <label for="modal" class="btn btn-success" v-if="!KepalaRuangan">tambah  Catatan</label>
        <div class="flex flex-col gap-2">
            <div class="card shadow-md" v-for="(item, index) in data_catatan" :key="index">
                <div class="card-body">
                    <div class="overflow-auto">
                        <table class="table table-compact table-zebra w-full">
                            <tbody>
                                <tr>
                                    <th>Diagnosa</th>
                                    <td>:</td>
                                    <td>{{index + 1}}</td>
                                </tr>
                                <tr>
                                    <th>Tanggal</th>
                                    <td>:</td>
                                    <td>{{item.tanggal}}</td>
                                </tr>
                                <tr>
                                    <th>Implementasi</th>
                                    <td>:</td>
                                    <td>{{item.implementasi}}</td>
                                </tr>
                                <tr>
                                    <th class="font-bold">
                                        SOAP
                                    </th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Subjektif</th>
                                    <td>:</td>
                                    <td>{{item.soap_subjektif}}</td>
                                </tr>
                                <tr>
                                    <th>Objek</th>
                                    <td>:</td>
                                    <td>{{item.soap_objek}}</td>
                                </tr>
                                <tr>
                                    <th>Assessment</th>
                                    <td>:</td>
                                    <td>{{item.soap_assessment}}</td>
                                </tr>
                                <tr>
                                    <th>Plan</th>
                                    <td>:</td>
                                    <td>{{item.soap_plan}}</td>
                                </tr>
                            </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <input type="checkbox" id="modal" class="modal-toggle" />
    <div class="modal">
        <div class="modal-box">
            <div class="flex flex-col gap-2">
        <div class="form-control">
            <label class="label capitalize">tanggal</label>
            <input type="date" v-model="form.tanggal" class="input input-bordered">
        </div>
        <div class="form-control">
            <label class="label capitalize">implementasi</label>
            <input type="text" v-model="form.implementasi" class="input input-bordered">
        </div>
        <div class="form-control">
                <label class="label">SOAP</label>
                <div class="ml-4">
                    <div class="form-control">
                        <label class="label capitalize">subjektif</label>
                        <textarea v-model="form.soap_subjektif" class="textarea textarea-bordered"></textarea>
                    </div>
                    <div class="form-control">
                        <label class="label capitalize">objek</label>
                        <input type="text" v-model="form.soap_objek" class="input input-bordered">
                    </div>
                    <div class="form-control">
                        <label class="label capitalize">assessment</label>
                        <input type="text" v-model="form.soap_assessment" class="input input-bordered">
                    </div>
                    <div class="form-control">
                        <label class="label capitalize">plan</label>
                        <input type="text" v-model="form.soap_plan" class="input input-bordered">
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-action">
            <button :disabled="disabled_button" @click="add" class="btn">Simpan</button>
            <label for="modal" class="btn btn-error">Close</label>
        </div>
    </div>
    </div>
</template>