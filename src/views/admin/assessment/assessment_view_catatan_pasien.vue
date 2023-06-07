<script lang="ts" setup>
import axios from 'axios';
import { ref } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
    id: String
})
const store = useStore()
store.state.judul_job = "Catatan perkembangan pasien";

const data_catatan = ref([]);

const get_data = () => {
    axios({
        url: 'assessment-data/get-catatan-perkembangan-pasien',
        method: 'post',
        data: {
            identitas_pasien_id: props.id
        }
    }).then(
        (res) => {
            data_catatan.value = res.data.data
        }
    )
}
get_data()
</script>
<template lang="">
    <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
            <div class="card shadow-md" v-for="(item, index) in data_catatan" :key="index">
                <div class="card-body">
                    <div class="flex gap-2 w-full">
                        <div class="w-[160px] capitalize">
                            diagnosa
                        </div>
                        <div class="">
                            :
                        </div>
                        <div class="w-full">
                            {{index + 1}}
                        </div>
                    </div>
                    <div class="flex gap-2 w-full">
                        <div class="w-[160px] capitalize">
                            tanggal
                        </div>
                        <div class="">
                            :
                        </div>
                        <div class="w-full">
                            {{item.tanggal}}
                        </div>
                    </div>
                    <div class="flex gap-2 w-full">
                        <div class="w-[160px] capitalize">
                            implementasi
                        </div>
                        <div class="">
                            :
                        </div>
                        <div class="w-full">
                            {{item.implementasi}}
                        </div>
                    </div>
                    <div class="flex flex-col gap-2 mt-4">
                        <div class="font-semibold">SOAP</div>
                        <div class="flex gap-2 w-full">
                            <div class="w-[160px] capitalize">
                                subjektif
                            </div>
                            <div class="">
                                :
                            </div>
                            <div class="w-full">
                                {{item.soap_subjektif}}
                            </div>
                        </div>
                        <div class="flex gap-2 w-full">
                            <div class="w-[160px] capitalize">
                                objek
                            </div>
                            <div class="">
                                :
                            </div>
                            <div class="w-full">
                                {{item.soap_objek}}
                            </div>
                        </div>
                        <div class="flex gap-2 w-full">
                            <div class="w-[160px] capitalize">
                                assessment
                            </div>
                            <div class="">
                                :
                            </div>
                            <div class="w-full">
                                {{item.soap_assessment}}
                            </div>
                        </div>
                        <div class="flex gap-2 w-full">
                            <div class="w-[160px] capitalize">
                                plan
                            </div>
                            <div class="">
                                :
                            </div>
                            <div class="w-full">
                                {{item.soap_plan}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>