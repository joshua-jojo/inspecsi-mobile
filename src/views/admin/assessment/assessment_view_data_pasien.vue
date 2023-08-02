<script lang="ts" setup>
import axios from "axios";
import { ref } from "vue";
import { useStore } from "vuex";
import loading_component from "@/component/loading_component.vue";

const props = defineProps({
    id: String,
});
const store = useStore();

store.state.judul_job = "Data Pasien";

const data_pasien = ref();
const loading = ref({
    status: true,
    title: "loading",
    show : true
});

const get_data = () => {
    loading.value.status = true;
    loading.value.title = "Loading";
    axios({
        url: "assessment-data/get-data-pasien",
        method: "post",
        data: {
            identitas_pasien_id: props.id,
        },
    }).then(
        (res) => {
            data_pasien.value = res.data.data;
            loading.value.show = false;
        },
        () => {
            console.log('error');
            
            loading.value.show = true;
            loading.value.status = false;
            loading.value.title = "Koneksi error. Segarkan halaman";
        }
    );
    setTimeout(() => {
        if (!data_pasien.value) {
            loading.value.show = true;
            loading.value.status = false;
            loading.value.title = "Koneksi error. Segarkan halaman";
        }
    }, 30000);
};

get_data();
</script>
<template lang="">
    <div class="px-4">
        <loading_component
        @refresh="get_data"
        v-if="loading.show"
        :status="loading.status"
        :title="loading.title"
        :key="loading.title"
    />
    <div class="flex flex-col gap-8" v-else>
        <div class="flex flex-col gap-2">
            <div class="uppercase font-bold my-4 text-center">
                identitas pasien
            </div>
            <div class="overflow-x-auto">
                <table class="table table-compact table-zebra w-full">
                <tbody>
                    <tr>
                        <td class="capitalize font-semibold">nama pasien</td>
                        <td class="">:</td>
                        <td class="w-full">{{ data_pasien?.nama }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">No. RM</td>
                        <td class="">:</td>
                        <td class="w-full">{{ data_pasien?.no_rm }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Tanggal Lahir</td>
                        <td class="">:</td>
                        <td class="w-full">{{ data_pasien?.tanggal_lahir }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Diagnosa Medis</td>
                        <td class="">:</td>
                        <td class="w-full">
                            {{ data_pasien?.diagnosa_medis }}
                        </td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Ruang Rawat</td>
                        <td class="">:</td>
                        <td class="w-full">{{ data_pasien?.ruang_rawat }}</td>
                    </tr>
                    <tr>
                        <td class="capitalize font-semibold">pendidikan</td>
                        <td class="">:</td>
                        <td class="w-full">{{ data_pasien?.pendidikan }}</td>
                    </tr>
                    <tr>
                        <td class="capitalize font-semibold">tanggal masuk</td>
                        <td class="">:</td>
                        <td class="w-full">{{ data_pasien?.tanggal_masuk }}</td>
                    </tr>
                    <tr>
                        <td class="capitalize font-semibold">
                            tanggal assessment
                        </td>
                        <td class="">:</td>
                        <td class="w-full">
                            {{ data_pasien?.tanggal_asesmen }}
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>

            <div class="flex flex-col gap-2 max-w-full overflow-hidden">
                <div
                    class="uppercase font-bold my-4 text-center overflow-hidden"
                >
                    Riwayat Kesehatan
                </div>
                <div class="overflow-x-auto">
                    <table class="table table-compact w-full">
                        <tbody>
                            <tr>
                                <td class="capitalize font-semibold">keluhan utama</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="w-full">{{ data_pasien?.riwayat_kesehatan?.keluhan_utama }}</td>
                            </tr>
                            <tr>
                                <td class="capitalize font-semibold">riwayat kesehatan sekarang</td>
                            </tr>
                                <tr class="active capitalize">
                                    <td class="w-full">{{
                                        data_pasien?.riwayat_kesehatan
                                            ?.riwayat_kesehatan_sekarang
                                    }}</td>
                                </tr>
                            <tr>
                                <td class="capitalize font-semibold">riwayat kesehatan terdahulu</td>
                            </tr>
                            <tr>
                                <td class="capitalize font-semibold">penyakit genetik</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="w-full">{{
                                data_pasien?.riwayat_kesehatan
                                    ?.penyakit_genetik >= 1
                                    ? "Ada"
                                    : "Tidak Ada"
                            }}</td>
                            </tr>
                            <tr v-if="data_pasien?.riwayat_kesehatan?.penyakit_genetik > 0">
                                <td class="capitalize font-semibold">keterangan penyakit genetik</td>
                            </tr>
                            <tr class="active capitalize" v-if="data_pasien?.riwayat_kesehatan?.penyakit_genetik > 0">
                                <td class="w-full">
                                    {{
                                data_pasien?.riwayat_kesehatan
                                    ?.penyakit_genetik_keterangan
                            }}
                                </td>
                            </tr>
                            <tr v-if="data_pasien?.riwayat_kesehatan?.penyakit_genetik > 0">
                                <td class="capitalize font-semibold">sejak kapan penyakit genetik</td>
                            </tr>
                            <tr class="active capitalize" v-if="data_pasien?.riwayat_kesehatan?.penyakit_genetik > 0">
                                <td class="w-full">
                                    {{
                                data_pasien?.riwayat_kesehatan
                                    ?.penyakit_genetik_sejak_kapan
                            }}
                                </td>
                            </tr>
                            <tr>
                                <td class="capitalize font-semibold">Trauma</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="w-full">
                                    {{
                                data_pasien?.riwayat_kesehatan?.trauma > 0
                                    ? "Ada"
                                    : "Tidak Ada"
                            }}
                                </td>
                            </tr>
                            <tr>
                                <td class="capitalize font-semibold">Operasi</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="w-full">
                                    {{
                                data_pasien?.riwayat_kesehatan?.operasi > 0
                                    ? "Ada"
                                    : "Tidak Ada"
                            }}
                                </td>
                            </tr>
                            <tr>
                                <td class="capitalize font-semibold">Lainnya</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="w-full">
                                    {{
                                data_pasien?.riwayat_kesehatan?.lainnya > 0
                                    ? "Ada"
                                    : "Tidak Ada"
                            }}
                                </td>
                            </tr>
                            <tr v-if="data_pasien?.riwayat_kesehatan?.lainnya > 0">
                                <td class="capitalize font-semibold">Penyakit Lainnya</td>
                            </tr>
                            <tr class="active capitalize" v-if="data_pasien?.riwayat_kesehatan?.lainnya > 0">
                                <td class="w-full">
                                    {{
                                data_pasien?.riwayat_kesehatan?.lainnya_penyakit
                            }}
                                </td>
                            </tr>
                            <tr v-if="data_pasien?.riwayat_kesehatan?.lainnya > 0">
                                <td class="capitalize font-semibold">Sejak Kapan</td>
                            </tr>
                            <tr class="active capitalize" v-if="data_pasien?.riwayat_kesehatan?.lainnya > 0">
                                <td class="w-full">
                                    {{
                                data_pasien?.riwayat_kesehatan?.lainnya_kapan
                            }}
                                </td>
                            </tr>
                            <tr>
                                <td class="capitalize font-semibold">Auto Anamnesa Jika Kompeten</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="w-full">
                                    {{
                                data_pasien?.riwayat_kesehatan?.auto_anamnesa > 0
                                    ? "Ada"
                                    : "Tidak Ada"
                            }}
                                </td>
                            </tr>
                            <tr>
                                <td class="capitalize font-semibold">Auto Anamnesa Jika Tidak Kompeten</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="w-full">
                                    {{
                                data_pasien?.riwayat_kesehatan?.auto_anamnesa > 0
                                    ? "Tidak Ada"
                                    : "Ada"
                            }}
                                </td>
                            </tr>
                            <tr v-if="data_pasien?.riwayat_kesehatan?.auto_anamnesa == 0">
                                <td class="capitalize font-semibold">Sejak Kapan</td>
                            </tr>
                            <tr class="active capitalize" v-if="data_pasien?.riwayat_kesehatan?.auto_anamnesa == 0">
                                <td class="w-full">
                                    {{
                                data_pasien?.riwayat_kesehatan?.pemberi_informasi
                            }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="flex flex-col gap-2 max-w-full overflow-hidden">
                <div
                    class="uppercase font-bold my-4 text-center overflow-hidden"
                >
                    Status Fisik
                </div>
                <div class="overflow-x-auto">
                    <table class="table table-compact w-full">
                        <tbody>
                            <tr>
                                <td class="capitalize font-semibold" colspan="3">Respirasi</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Batuk</td>
                                <td>:</td>
                                <td>
                                    {{ data_pasien?.status_fisik?.batuk > 0
                                    ? "Ya"
                                    : "Tidak"
                                    }}</td>
                            </tr>
                            <tr class="active capitalize" v-if="data_pasien?.status_fisik?.batuk > 0">
                                <td class="capitalize">Lama Sakit</td>
                                <td>:</td>
                                <td>{{ data_pasien?.status_fisik?.batuk_lama_sakit }}</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Sputum</td>
                                <td>:</td>
                                <td>
                                    {{ data_pasien?.status_fisik?.sputum > 0
                                    ? "Ya"
                                    : "Tidak"
                                    }}</td>
                            </tr>
                            <tr class="active capitalize" v-if="data_pasien?.status_fisik?.sputum > 0">
                                <td class="capitalize">Jenis Sputum</td>
                                <td>:</td>
                                <td>{{ data_pasien?.status_fisik?.sputum_jenis_sputum }}</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">sesak nafas</td>
                                <td>:</td>
                                <td>
                                    {{ data_pasien?.status_fisik?.sesak_nafas > 0
                                    ? "Ya"
                                    : "Tidak"
                                    }}</td>
                            </tr>
                            <tr class="active capitalize" v-if="data_pasien?.status_fisik?.sesak_nafas > 0">
                                <td class="capitalize">sejak kapan</td>
                                <td>:</td>
                                <td>{{ data_pasien?.status_fisik?.sesak_nafas_keterangan }}</td>
                            </tr>
                            <tr class="active capitalize" v-if="data_pasien?.status_fisik?.sesak_nafas > 0">
                                <td class="capitalize">Penggunaan alat bantu nafas</td>
                                <td>:</td>
                                <td>{{
                                data_pasien?.status_fisik
                                    ?.penggunaan_alat_bantu_nafas > 0
                                    ? "Ya"
                                    : "Tidak"
                            }}</td>
                            </tr>
                            <tr>
                                <td class="capitalize font-semibold" colspan="3">Sirkulasi</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Tekanan Darah</td>
                                <td>:</td>
                                <td>
                                    {{ data_pasien?.status_fisik?.tekanan_darah }}
                                </td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Suhu</td>
                                <td>:</td>
                                <td>{{ data_pasien?.status_fisik?.suhu }}</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Nadi</td>
                                <td>:</td>
                                <td>
                                    {{ data_pasien?.status_fisik?.nadi
                                    }}</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Pernapasan</td>
                                <td>:</td>
                                <td>{{ data_pasien?.status_fisik?.pernapasan }}</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">SpO2</td>
                                <td>:</td>
                                <td>
                                    {{ data_pasien?.status_fisik?.spo2
                                    }}</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">CRT</td>
                                <td>:</td>
                                <td>{{ data_pasien?.status_fisik?.crt }}</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Akral</td>
                                <td>:</td>
                                <td>{{
                                data_pasien?.status_fisik
                                    ?.akral
                            }}</td>
                            </tr>
                            <tr>
                                <td class="capitalize font-semibold" colspan="3">Nutrisi & Cairan</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Kesulitan Minum</td>
                                <td>:</td>
                                <td>
                                    {{
                                data_pasien?.status_fisik?.kesulitan_minum ==
                                "false"
                                    ? "tidak"
                                    : "ya"
                            }}
                                </td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Status Puasa</td>
                                <td>:</td>
                                <td>
                                    {{
                                data_pasien?.status_fisik?.status_puasa ==
                                "false"
                                    ? "tidak"
                                    : "ya"
                            }}
                                </td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Turgor Kulit</td>
                                <td>:</td>
                                <td>
                                    {{
                                data_pasien?.status_fisik?.turgor_kulit
                            }}
                                </td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Edema</td>
                                <td>:</td>
                                <td>
                                    {{
                                data_pasien?.status_fisik?.edema > 0
                                    ? "ya"
                                    : "tidak"
                            }}
                                </td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Derajat Piting Edema</td>
                                <td>:</td>
                                <td>
                                    {{
                                data_pasien?.status_fisik?.edema_keterangan
                            }}
                                </td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Derajat Piting Edema</td>
                                <td>:</td>
                                <td>
                                    {{
                                data_pasien?.status_fisik?.edema_keterangan
                            }}
                                </td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Muntah</td>
                                <td>:</td>
                                <td>
                                    {{
                                data_pasien?.status_fisik?.muntah > 0
                                    ? "ya"
                                    : "tidak"
                            }}
                                </td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Frekuensi Muntah</td>
                                <td>:</td>
                                <td>
                                    {{
                                data_pasien?.status_fisik?.muntah_keterangan
                            }}
                                </td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Kebutuhan Nutrisi</td>
                                <td>:</td>
                                <td>
                                    {{
                                data_pasien?.status_fisik?.kebutuhan_nutrisi
                            }}
                                </td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Tinggi Badan</td>
                                <td>:</td>
                                <td>
                                    {{
                                data_pasien?.status_fisik?.tb
                            }}
                                </td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Berat Badan</td>
                                <td>:</td>
                                <td>
                                    {{
                                data_pasien?.status_fisik?.bb
                            }}
                                </td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">IMT</td>
                                <td>:</td>
                                <td>
                                    {{
                                data_pasien?.status_fisik?.imt < 18 ? "Underweight" : data_pasien?.status_fisik?.imt >= 18 &&
                                    data_pasien?.status_fisik?.imt <= 25 ? "Normal" : "Obesitas"
                            }}
                                </td>
                            </tr>
                            <tr>
                                <td class="capitalize font-semibold" colspan="3">Eliminasi</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">BAB</td>
                                <td>:</td>
                                <td>
                                    {{ data_pasien?.status_fisik?.bab_status }}
                                </td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Konsistensi BAB</td>
                                <td>:</td>
                                <td>
                                    {{ data_pasien?.status_fisik?.bab_konsistensi }}
                                </td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Warna BAB</td>
                                <td>:</td>
                                <td>
                                    {{ data_pasien?.status_fisik?.bab_warna }}
                                </td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Frekuensi BAB</td>
                                <td>:</td>
                                <td>
                                    {{ data_pasien?.status_fisik?.bab_frekuensi }}
                                </td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Frekuensi Diare</td>
                                <td>:</td>
                                <td>
                                    {{ data_pasien?.status_fisik?.bab_frekuensi_diare }}
                                </td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">BAK</td>
                                <td>:</td>
                                <td>
                                    {{ data_pasien?.status_fisik?.bak_status }}
                                </td>
                            </tr>
                            <tr>
                                <td class="capitalize font-semibold" colspan="3">Aktifitas & Istirahat</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Pola Tidur</td>
                                <td>:</td>
                                <td>
                                    {{
                                data_pasien?.status_fisik?.aktifitas_pola_tidur
                            }}
                                </td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Durasi Tidur</td>
                                <td>:</td>
                                <td>
                                    {{ data_pasien?.status_fisik?.aktifitas_durasi }}
                                </td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Gangguan Tidur</td>
                                <td>:</td>
                                <td>
                                    {{
                                data_pasien?.status_fisik?.tidur_status
                                    ? "ya"
                                    : "tidak"
                            }}
                                </td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Penyebab Gangguan Tidur</td>
                                <td>:</td>
                                <td>
                                    {{ data_pasien?.status_fisik?.tidur_gangguan }}
                                </td>
                            </tr>
                            <tr>
                                <td class="capitalize font-semibold" colspan="3">Neusensori</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Kesadaran</td>
                                <td>:</td>
                                <td>
                                    {{ data_pasien?.status_fisik?.kesadaran }}
                                </td>
                            </tr>
                            <tr>
                                <td class="capitalize font-semibold" colspan="3">Reproduksi & Seksualitas</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize" colspan="3">{{
                                data_pasien?.status_fisik?.reproduksi_dan_seksualitas
                            }}</td>
                            </tr>
                            <tr v-if="data_pasien?.status_fisik?.reproduksi_dan_seksualitas == 'ya'">
                                <td class="capitalize font-semibold" colspan="3">Gangguan Reproduksi & Seksualitas</td>
                            </tr>
                            <tr v-if="data_pasien?.status_fisik?.reproduksi_dan_seksualitas == 'ya'" class="active capitalize">
                                <td class="capitalize" colspan="3">
                                    {{
                                data_pasien?.status_fisik
                                    ?.reproduksi_dan_seksualitas_gangguan
                            }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="flex flex-col gap-2 max-w-full overflow-hidden">
                    <div
                        class="uppercase font-bold my-4 text-center overflow-hidden"
                    >
                        psiko - sosial - spiritual
                    </div>
                    <div class="overflow-x-auto">
                        <table class="table table-compact w-full">
                            <tbody>
                                <tr>
                                <td class="capitalize font-semibold" colspan="3">Psikologis</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Status Psikologis</td>
                                <td>:</td>
                                <td>
                                    {{
                                    data_pasien?.psiko_sosial_spiritual
                                        ?.psikologis_status
                                }}</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Dilaporkan Ke</td>
                                <td>:</td>
                                <td>
                                    {{
                                    data_pasien?.psiko_sosial_spiritual
                                        ?.psikologis_dilaporkan
                                }}</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Lain-lain</td>
                                <td>:</td>
                                <td>
                                    {{
                                    data_pasien?.psiko_sosial_spiritual
                                        ?.psikologis_sebutkan
                                }}</td>
                            </tr>
                            <tr>
                            <td class="capitalize font-semibold" colspan="3">Sosial</td>
                        </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Status Perkawinan</td>
                                <td>:</td>
                                <td>
                                    {{
                                    data_pasien?.psiko_sosial_spiritual
                                        ?.sosial_status_perkawinan
                                }}</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Pola Interaksi</td>
                                <td>:</td>
                                <td>
                                    {{
                                    data_pasien?.psiko_sosial_spiritual
                                        ?.sosial_pola_interaksi
                                }}</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Support System</td>
                                <td>:</td>
                                <td>
                                    {{
                                    data_pasien?.psiko_sosial_spiritual
                                        ?.sosial_support_system
                                }}</td>
                            </tr>
                            <tr>
                            <td class="capitalize font-semibold" colspan="3">Sosial</td>
                        </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Agama</td>
                                <td>:</td>
                                <td>
                                    {{
                                    data_pasien?.psiko_sosial_spiritual
                                        ?.spiritual_agama
                                }}</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Agama</td>
                                <td>:</td>
                                <td>
                                    {{
                                    data_pasien?.psiko_sosial_spiritual
                                        ?.spiritual_agama
                                }}</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Keyakinan Yg Dianut</td>
                                <td>:</td>
                                <td>
                                    {{
                                    data_pasien?.psiko_sosial_spiritual
                                        ?.spiritual_keyakinan_pelayanan_kesehatan
                                }}</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Kebutuhan Kerohanian</td>
                                <td>:</td>
                                <td>
                                    {{
                                    data_pasien?.psiko_sosial_spiritual
                                        ?.spiritual_kebutuhan_kerohanian
                                }}</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Kebutuhan Privasi Khusus</td>
                                <td>:</td>
                                <td>
                                    {{
                                    data_pasien?.psiko_sosial_spiritual
                                        ?.spiritual_kebutuhan_privasi_khusus
                                }}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!--  -->

                <div class="flex flex-col gap-2 max-w-full overflow-hidden">
                    <div
                        class="uppercase font-bold my-4 text-center overflow-hidden"
                    >
                        Ekonomi
                    </div>
                    <div class="overflow-x-auto">
                        <table class="table table-compact w-full">
                            <tbody>
                            <tr class="active capitalize">
                                <td class="capitalize">Status Pekerjaan</td>
                                <td>:</td>
                                <td>
                                    {{ data_pasien?.ekonomi?.status_pekerjaaan }}</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Jaminan Kesehatan</td>
                                <td>:</td>
                                <td>
                                    {{ data_pasien?.ekonomi?.pembiayaan_kesehatan }}</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Penanggung Jawab</td>
                                <td>:</td>
                                <td>
                                    {{
                                    data_pasien?.ekonomi
                                        ?.penanggung_jawab_pasien
                                }}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!--  -->

                <div class="flex flex-col gap-2 max-w-full overflow-hidden">
                    <div
                        class="uppercase font-bold my-4 text-center overflow-hidden"
                    >
                        Riwayat Alergi
                    </div>
                    <div class="overflow-x-auto">
                        <table class="table table-compact w-full">
                            <tbody>
                            <tr class="active capitalize">
                                <td class="capitalize">Mempunyai Alergi</td>
                                <td>:</td>
                                <td>
                                    {{
                                    data_pasien?.alergi?.status ? "Tidak" : "Ya"
                                }}</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Keterangan Alergi</td>
                                <td>:</td>
                                <td>
                                    {{ data_pasien?.alergi?.alergi }}</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Reaksi Alergi</td>
                                <td>:</td>
                                <td>
                                    {{ data_pasien?.alergi?.reaksi_alergi }}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!--  -->

                <div class="flex flex-col gap-2 max-w-full overflow-hidden">
                    <div
                        class="uppercase font-bold my-4 text-center overflow-hidden"
                    >
                        assessment nyeri
                    </div>
                    <div class="overflow-x-auto">
                        <table class="table table-compact w-full">
                            <tbody>
                            <tr class="active capitalize">
                                <td class="capitalize">Mempunyai Nyeri</td>
                                <td>:</td>
                                <td>
                                    {{
                                    data_pasien?.nyeri?.status ? "ya" : "tidak"
                                }}</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Sejak Kapan</td>
                                <td>:</td>
                                <td>
                                    {{ data_pasien?.nyeri?.kapan }}</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Faktor Pencetus Nyeri</td>
                                <td>:</td>
                                <td>
                                    {{ data_pasien?.nyeri?.faktor }}</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Karakteristik Nyeri</td>
                                <td>:</td>
                                <td>
                                    {{ data_pasien?.nyeri?.karakteristik }}</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Lokasi Nyeri</td>
                                <td>:</td>
                                <td>
                                    {{ data_pasien?.nyeri?.lokasi }}</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Skala Nyeri</td>
                                <td>:</td>
                                <td>
                                    {{ data_pasien?.nyeri?.skala }}</td>
                            </tr>
                            <tr class="active capitalize">
                                <td class="capitalize">Durasi Nyeri</td>
                                <td>:</td>
                                <td>
                                    {{ data_pasien?.nyeri?.durasi }}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!--  -->

                <div class="flex flex-col gap-2 max-w-full overflow-hidden">
                    <div
                        class="uppercase font-bold my-4 text-center overflow-hidden"
                    >
                        kebutuhan edukasi
                    </div>
                    <div class="overflow-x-auto">
                        <table class="table table-compact w-full">
                            <tbody>
                            <tr class="active capitalize">
                                <td class="capitalize">Kebutuhan Edukasi</td>
                                <td>:</td>
                                <td>
                                    {{ data_pasien?.kebutuhan_edukasi?.pilihan }}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!--  -->

                <div class="flex flex-col gap-2 max-w-full overflow-hidden">
                    <div
                        class="uppercase font-bold my-4 text-center overflow-hidden"
                    >
                        Perencanaan Pemulangan Pasien (P3)<br/>(Discharge
                        Planning)
                    </div>
                    <div class="overflow-x-auto">
                        <table class="table table-compact w-full">
                            <tbody>
                                <tr>
                                <td class="capitalize font-semibold" colspan="3">Kriteria Pemulangan Kritis</td>
                            </tr>
                                <tr class="active" v-for="(
                                        item, index
                                    ) in data_pasien?.perencanaan_pemulangan_pasien
                                        ? data_pasien?.perencanaan_pemulangan_pasien
                                        : 0"
                                    :key="index">
                                <td class="capitalize" colspan="3">- {{ item.opsi }}</td>
                            </tr>
                            <tr>
                                <td class="capitalize font-semibold" colspan="3">Discard Planning</td>
                            </tr>
                            <tr class="active">
                                <td class="capitalize" colspan="3">
                                    {{
                                    data_pasien?.perencanaan_pemulangan_pasien
                                        .length
                                        ? "tidak"
                                        : "ya"
                                }}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!--  -->

                <div class="flex flex-col gap-2 max-w-full overflow-hidden">
                    <div
                        class="uppercase font-bold my-4 text-center overflow-hidden"
                    >
                        Riwayat Penggunaan obat
                    </div>
                    <div class="overflow-x-auto">
                        <table class="table table-compact w-full">
                            <tbody>
                                <tr class="active">
                                <td class="capitalize font-semibold" >Penggunaan Obat</td>
                                <td>:</td>
                                <td>{{ data_pasien?.penggunaan_obat.length }}</td>
                            </tr>
                                <tr v-if="data_pasien?.penggunaan_obat.length > 0">
                                <td class="capitalize font-semibold" colspan="3">Obat Yang Digunakan</td>
                            </tr>
                            <tr class="active" v-if="data_pasien?.penggunaan_obat.length > 0">
                                <td class="capitalize">Nama Obat</td>
                                <td class="capitalize">Dosis Obat</td>
                                <td class="capitalize">Asal Obat</td>
                            </tr>
                                <template v-if="data_pasien?.penggunaan_obat.length > 0">
                                    <tr class="active" v-for="(
                                    item, index
                                ) in data_pasien?.penggunaan_obat"
                                :key="index">
                                <td class="capitalize">{{ item.nama }}</td>
                                <td class="capitalize">{{ item.dosis }}</td>
                                <td class="capitalize">{{ item.asal }}</td>
                            </tr>
                                </template>
                            <tr v-if="data_pasien?.penggunaan_obat.length > 0">
                                <td class="capitalize font-semibold" colspan="3">assessment populasi khusus</td>
                            </tr>
                            <template v-if="data_pasien?.penggunaan_obat.length > 0">
                                <tr class="active" v-for="(
                                        item, index
                                    ) in data_pasien?.populasi_khusus"
                                    :key="index">
                                <td class="capitalize" colspan="3">
                                    - {{ item.populasi }}
                                </td>
                            </tr>
                            </template>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!--  -->

                <div class="flex flex-col gap-2 max-w-full overflow-hidden">
                    <div
                        class="uppercase font-bold my-4 text-center overflow-hidden"
                    >
                        Analisis Data
                    </div>
                    <div class="overflow-x-auto">
                        <table class="table table-compact w-full">
                            <tbody>
                                <template v-for="(item, index) in data_pasien?.analisis_data"
                            :key="index">
                                        <tr>
                                            <th colspan="3" >Analisis {{index+1}}</th>
                                        </tr>
                                        <tr class="active">
                                            <td>Subjektif</td>
                                            <td>:</td>
                                            <td>{{item.subjektif}}</td>
                                        </tr>
                                        <tr class="active">
                                            <td>Objektif</td>
                                            <td>:</td>
                                            <td>{{item.objektif}}</td>
                                        </tr>
                                        <tr class="active">
                                            <td>Penyebab</td>
                                            <td>:</td>
                                            <td>{{item.penyebab}}</td>
                                        </tr>
                                        <tr class="active">
                                            <td>Masalah</td>
                                            <td>:</td>
                                            <td>{{item.masalah}}</td>
                                        </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!--  -->

                <div class="flex flex-col gap-2 max-w-full overflow-hidden">
                    <div
                        class="uppercase font-bold my-4 text-center overflow-hidden"
                    >
                        Diagnosa / Masalah keperawatan
                    </div>
                    <div class="overflow-x-auto">
                        <table class="table table-compact w-full">
                            <tbody>
                                <tr>
                                <th>Kode</th>
                                <th colspan="2">Keterangan</th>
                            </tr>
                                <template v-for="(
                                item, index
                            ) in data_pasien?.masalah_keperawatan"
                            :key="index">
                                    <tr class="active capitalize">
                                        <td>{{ item.kode }}</td>
                                        <td colspan="2">{{ item.keterangan }}</td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
