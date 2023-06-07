<script lang="ts" setup>
import axios from 'axios';
import { ref } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
    id: String
})
const store = useStore()

store.state.judul_job = "Data Pasien";

const data_pasien = ref()

const get_data = () => {
    axios({
        url: 'assessment-data/get-data-pasien',
        method: 'post',
        data: {
            identitas_pasien_id: props.id
        }
    }).then(
        (res) => {
            data_pasien.value = res.data.data
        }
    )
}

get_data()
</script>
<template lang="">
    <div class="flex flex-col gap-8">

      <div class="flex flex-col gap-2">
        <div class="uppercase font-bold my-4 text-center">identitas pasien</div>
        <table class="table table-compact table-zebra w-full">
            <tbody>
                <tr>
                    <td class="capitalize font-semibold">nama pasien</td>
                    <td class="">:</td>
                    <td class="w-full">{{data_pasien?.nama}}</td>
                </tr>
                <tr>
                    <td class="font-semibold">No. RM</td>
                    <td class="">:</td>
                    <td class="w-full">{{data_pasien?.no_rm}}</td>
                </tr>
                <tr>
                    <td class="font-semibold">Tanggal Lahir</td>
                    <td class="">:</td>
                    <td class="w-full">{{data_pasien?.tanggal_lahir}}</td>
                </tr>
                <tr>
                    <td class="font-semibold">Diagnosa Medis</td>
                    <td class="">:</td>
                    <td class="w-full">{{data_pasien?.diagnosa_medis}}</td>
                </tr>
                <tr>
                    <td class="font-semibold">Ruang Rawat</td>
                    <td class="">:</td>
                    <td class="w-full">{{data_pasien?.ruang_rawat}}</td>
                </tr>
                <tr>
                    <td class="capitalize font-semibold">pendidikan</td>
                    <td class="">:</td>
                    <td class="w-full">{{data_pasien?.pendidikan}}</td>
                </tr>
                <tr>
                    <td class="capitalize font-semibold">tanggal masuk</td>
                    <td class="">:</td>
                    <td class="w-full">{{data_pasien?.tanggal_masuk}}</td>
                </tr>
                <tr>
                    <td class="capitalize font-semibold">tanggal assessment</td>
                    <td class="">:</td>
                    <td class="w-full">{{data_pasien?.tanggal_asesmen}}</td>
                </tr>
            </tbody>
        </table>

        <div class="flex flex-col gap-2 max-w-full overflow-hidden">
            <div class="uppercase font-bold my-4 text-center overflow-hidden">Riwayat Kesehatan</div>
            <div class="flex flex-col gap-2">
                <div class="flex gap-2">
                    <div class="w-[180px] capitalize font-semibold">keluhan utama</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.riwayat_kesehatan.keluhan_utama}}</div>
                </div>
                <div class="flex gap-2">
                    <div class="w-[180px] capitalize font-semibold">riwayat kesehatan sekarang</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.riwayat_kesehatan.riwayat_kesehatan_sekarang}}</div>
                </div>
                <div class="flex gap-2">
                    <div class="w-[180px] capitalize font-semibold">riwayat kesehatan dahulu</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] capitalize">penyakit genetik</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.riwayat_kesehatan.penyakit_genetik > 1 ? 'ya' : 'tidak'}}</div>
                </div>
                <div class="flex gap-2 ml-3" v-if="data_pasien?.riwayat_kesehatan.penyakit_genetik">
                    <div class="w-[180px] capitalize">Keterangan penyakit genetik</div>
                    <div class="">:</div>
                    <div class="w-full">{{data_pasien?.riwayat_kesehatan.penyakit_genetik_keterangan}}</div>
                </div>
                <div class="flex gap-2 ml-3" v-if="data_pasien?.riwayat_kesehatan.penyakit_genetik">
                    <div class="w-[180px] capitalize">Sejak kapan penyakit genetik</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.riwayat_kesehatan.penyakit_genetik_sejak_kapan}}</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] capitalize">trauma</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.riwayat_kesehatan.trauma > 0 ? 'ya' : 'tidak'}}</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] capitalize">operasi</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.riwayat_kesehatan.operasi > 0 ? 'ya' : 'tidak'}}</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] capitalize">Lainnya</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.riwayat_kesehatan.lainnya > 0 ? 'ya' : 'tidak'}}</div>
                </div>
                <div class="flex gap-2 ml-3" v-if="data_pasien?.riwayat_kesehatan.lainnya">
                    <div class="w-[180px] capitalize">penyakit lainnya</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.riwayat_kesehatan.lainnya_penyakit}}</div>
                </div>
                <div class="flex gap-2 ml-3" v-if="data_pasien?.riwayat_kesehatan.lainnya">
                    <div class="w-[180px] capitalize">sejak kapan</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.riwayat_kesehatan.lainnya_kapan}}</div>
                </div>
                <div class="flex gap-2">
                    <div class="w-[180px] capitalize font-semibold">auto anamnesa jika kompeten</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.riwayat_kesehatan.auto_anamnesa > 0 ? 'ya' : 'tidak'}}</div>
                </div>
                <div class="flex gap-2">
                    <div class="w-[180px] capitalize font-semibold">auto anamnesa jika tidak kompeten</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.riwayat_kesehatan.auto_anamnesa > 0 ? 'tidak' : 'ya'}}</div>
                </div>
                <div class="flex gap-2 ml-3" v-if="data_pasien?.riwayat_kesehatan.auto_anamnesa == 0">
                    <div class="w-[180px] capitalize">sejak kapan</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.riwayat_kesehatan.pemberi_informasi}}</div>
                </div>

            </div>
        </div>

        <div class="flex flex-col gap-2 max-w-full overflow-hidden">
            <div class="uppercase font-bold my-4 text-center overflow-hidden">Status Fisik</div>
            <div class="flex flex-col gap-2">
                <div class="flex gap-2">
                    <div class="w-[180px] capitalize font-semibold">Respirasi</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] capitalize">Batuk</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.batuk}}</div>
                </div>
                <div class="flex gap-2 ml-3" v-if="data_pasien?.status_fisik.batuk">
                    <div class="w-[180px] capitalize">Lama sakit</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.batuk_lama_sakit}}</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] capitalize">sputum</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.sputum > 0 ? 'ya' : 'tidak'}}</div>
                </div>
                <div class="flex gap-2 ml-3" v-if="data_pasien?.status_fisik.sputum">
                    <div class="w-[180px] capitalize">Jenis sputum</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.sputum_jenis_sputum}}</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] capitalize">sesak nafas</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.sesak_nafas > 0 ? 'ya' : 'tidak'}}</div>
                </div>
                <div class="flex gap-2 ml-3" v-if="data_pasien?.status_fisik.sesak_nafas">
                    <div class="w-[180px] capitalize">sejak kapan</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.sesak_nafas_keterangan}}</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] capitalize">penggunaan alat bantu nafas</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.penggunaan_alat_bantu_nafas > 0 ? 'ya' : 'tidak'}}</div>
                </div>

                <!--  -->

                <div class="flex gap-2">
                    <div class="w-[180px] capitalize font-semibold">sirkulasi</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] capitalize">tekanan darah</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.tekanan_darah}}</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] capitalize">suhu</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.suhu}}</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] capitalize">nadi</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.nadi}}</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] capitalize">pernapasan</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.pernapasan}}</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px]">SpO2</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.spo2}}</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] capitalize">CRT</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.crt}}</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] capitalize">Akral</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.akral}}</div>
                </div>

                <!--  -->

                <div class="flex gap-2">
                    <div class="w-[180px] capitalize font-semibold">nutrisi & cairan</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] capitalize">kesulitan minum</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.kesulitan_minum == 'false' ? 'tidak' : 'ya'}}</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] capitalize">status puasa</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.status_puasa == 'false' ? 'tidak' : 'ya'}}</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] capitalize">turgor kulit</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.turgor_kulit}}</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] capitalize">edema</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.edema > 0 ? 'ya' : 'tidak'}}</div>
                </div>
                <div class="flex gap-2 ml-3" v-if="data_pasien?.status_fisik.edema">
                    <div class="w-[180px] capitalize">derajat piting edema</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.edema_keterangan}}</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] capitalize">muntah</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.muntah > 0 ? 'ya' : 'tidak'}}</div>
                </div>
                <div class="flex gap-2 ml-3" v-if="data_pasien?.status_fisik.muntah">
                    <div class="w-[180px] capitalize">frekuensi muntah</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.muntah_keterangan}}</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] capitalize">kebutuhan nutrisi</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.kebutuhan_nutrisi}}</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] uppercase">tb</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.tb}}</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] uppercase">bb</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.bb}}</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] uppercase">imt</div>
                    <div class="">:</div>
                    <div class="w-max">
                        <div class="" v-if="data_pasien?.status_fisik.imt < 18"> underweight</div>
                        <div class="" v-else-if="data_pasien?.status_fisik.imt >= 18 && data_pasien?.status_fisik.imt <=25"> normal</div>
                        <div class="" v-else-if="data_pasien?.status_fisik.imt >= 26 && data_pasien?.status_fisik.imt <=27"> overweight</div>
                        <div class="" v-else-if="data_pasien?.status_fisik.imt > 27 "> obesitas</div>
                    </div>
                </div>

                <!--  -->

                <div class="flex gap-2">
                    <div class="w-[180px] capitalize font-semibold">eliminasi</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] uppercase">bab</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.bab_status}}</div>
                </div>
                <div class="flex gap-2 ml-6" v-if="data_pasien?.status_fisik.bab_status == 'konsistensi dan warna'">
                    <div class="w-[180px] capitalize">konsistensi bab</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.bab_konsistensi}}</div>
                </div>
                <div class="flex gap-2 ml-6" v-if="data_pasien?.status_fisik.bab_status == 'konsistensi dan warna'">
                    <div class="w-[180px] capitalize">warna bab</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.bab_warna}}</div>
                </div>
                <div class="flex gap-2 ml-6" v-if="data_pasien?.status_fisik.bab_status == 'frekuensi'">
                    <div class="w-[180px] capitalize">frekuensi bab</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.bab_frekuensi}}</div>
                </div>
                <div class="flex gap-2 ml-6" v-if="data_pasien?.status_fisik.bab_status == 'diare'">
                    <div class="w-[180px] capitalize">frekuensi diare</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.bab_frequensi_diare}}</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] uppercase">bak</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.bak_status}}</div>
                </div>

                <!--  -->

                <div class="flex gap-2">
                    <div class="w-[180px] capitalize font-semibold">aktifitas & istirahat</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] capitalize">pola tidur</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.aktifitas_pola_tidur}}</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] capitalize">durasi</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.aktifitas_durasi}}</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] capitalize">ganguan tidur</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.tidur_status ? 'ya' : 'tidak'}}</div>
                </div>
                <div class="flex gap-2 ml-3" v-if="data_pasien?.status_fisik.tidur_status">
                    <div class="w-[180px] capitalize">penyebab ganguan tidur</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.tidur_gangguan}}</div>
                </div>

                <!--  -->

                <div class="flex gap-2">
                    <div class="w-[180px] capitalize font-semibold">neusensori</div>
                </div>
                <div class="flex gap-2 ml-3">
                    <div class="w-[180px] capitalize">kesadaran</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.kesadaran}}</div>
                </div>

                <!--  -->

                <div class="flex gap-2">
                    <div class="w-[180px] capitalize font-semibold">reproduksi & seksualitas</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.reproduksi_dan_seksualitas}}</div>
                </div>
                <div class="flex gap-2 ml-3" v-if="data_pasien?.status_fisik.reproduksi_dan_seksualitas == 'ya'">
                    <div class="w-[180px] capitalize">gangguan</div>
                    <div class="">:</div>
                    <div class="w-max">{{data_pasien?.status_fisik.reproduksi_dan_seksualitas_gangguan}}</div>
                </div>

            </div>

            <!--  -->

            <div class="flex flex-col gap-2 max-w-full overflow-hidden">
                <div class="uppercase font-bold my-4 text-center overflow-hidden">psiko - sosial - spiritual</div>
                <div class="flex flex-col gap-2">
                    <div class="flex gap-2">
                        <div class="w-[180px] capitalize font-semibold">Psikologis</div>
                        <div class="">:</div>
                        <div class="w-max">{{data_pasien?.psiko_sosial_spiritual.psikologis_status}}</div>
                    </div>
                    <div class="flex gap-2 ml-3" v-if="data_pasien?.psiko_sosial_spiritual.psikologis_status == 'kecendrungan bunuh diri'">
                        <div class="w-[180px] capitalize">Dilaporkan ke</div>
                        <div class="">:</div>
                        <div class="w-max">{{data_pasien?.psiko_sosial_spiritual.psikologis_dilaporkan}}</div>
                    </div>
                    <div class="flex gap-2 ml-3" v-if="data_pasien?.psiko_sosial_spiritual.psikologis_status == 'lain-lain'">
                        <div class="w-[180px] capitalize">sebutkan</div>
                        <div class="">:</div>
                        <div class="w-max">{{data_pasien?.psiko_sosial_spiritual.psikologis_sebutkan}}</div>
                    </div>

                    <!--  -->

                    <div class="flex gap-2">
                        <div class="w-[180px] capitalize font-semibold">sosial</div>
                    </div>
                    <div class="flex gap-2 ml-3">
                        <div class="w-[180px] capitalize ">status perkawinan</div>
                        <div class="">:</div>
                        <div class="w-max">{{data_pasien?.psiko_sosial_spiritual.sosial_status_perkawinan}}</div>
                    </div>
                    <div class="flex gap-2 ml-3">
                        <div class="w-[180px] capitalize ">pola interaksi</div>
                        <div class="">:</div>
                        <div class="w-max">{{data_pasien?.psiko_sosial_spiritual.sosial_pola_interaksi}}</div>
                    </div>
                    <div class="flex gap-2 ml-3">
                        <div class="w-[180px] capitalize ">support system</div>
                        <div class="">:</div>
                        <div class="w-max">{{data_pasien?.psiko_sosial_spiritual.sosial_support_system}}</div>
                    </div>

                    <!--  -->

                    <div class="flex gap-2">
                        <div class="w-[180px] capitalize font-semibold">spiritual</div>
                    </div>
                    <div class="flex gap-2 ml-3">
                        <div class="w-[180px] capitalize ">agama</div>
                        <div class="">:</div>
                        <div class="w-max">{{data_pasien?.psiko_sosial_spiritual.spiritual_agama}}</div>
                    </div>
                    <div class="flex gap-2 ml-3">
                        <div class="w-[180px] capitalize ">nilai / keyakinan yang dianut terhadap pelayanan kesehatan</div>
                        <div class="">:</div>
                        <div class="w-max">{{data_pasien?.psiko_sosial_spiritual.spiritual_keyakinan_pelayanan_kesehatan}}</div>
                    </div>
                    <div class="flex gap-2 ml-3">
                        <div class="w-[180px] capitalize ">kebutuhan kerohanian</div>
                        <div class="">:</div>
                        <div class="w-max">{{data_pasien?.psiko_sosial_spiritual.spiritual_kebutuhan_kerohanian}}</div>
                    </div>
                    <div class="flex gap-2 ml-3">
                        <div class="w-[180px] capitalize ">kebutuhan privasi khusus</div>
                        <div class="">:</div>
                        <div class="w-max">{{data_pasien?.psiko_sosial_spiritual.spiritual_kebutuhan_privasi_khusus}}</div>
                    </div>

                </div>
            </div>

            <!--  -->

            <div class="flex flex-col gap-2 max-w-full overflow-hidden">
                <div class="uppercase font-bold my-4 text-center overflow-hidden">Ekonomi</div>
                <div class="flex flex-col gap-2">
                    <div class="flex gap-2">
                        <div class="w-[180px] capitalize font-semibold">status pekerjaan</div>
                        <div class="">:</div>
                        <div class="w-max">{{data_pasien?.ekonomi.status_pekerjaaan}}</div>
                    </div>
                    <div class="flex gap-2">
                        <div class="w-[180px] capitalize font-semibold">pembiayaan / jaminan kesehatan</div>
                        <div class="">:</div>
                        <div class="w-max">{{data_pasien?.ekonomi.pembiayaan_kesehatan}}</div>
                    </div>
                    <div class="flex gap-2">
                        <div class="w-[180px] capitalize font-semibold">penanggung jawab pasien</div>
                        <div class="">:</div>
                        <div class="w-max">{{data_pasien?.ekonomi.penanggung_jawab_pasien}}</div>
                    </div>
                </div>
            </div>

            <!--  -->

            <div class="flex flex-col gap-2 max-w-full overflow-hidden">
                <div class="uppercase font-bold my-4 text-center overflow-hidden">Riwayat Alergi</div>
                <div class="flex flex-col gap-2">
                    <div class="flex gap-2">
                        <div class="w-[180px] capitalize font-semibold">Alergi</div>
                        <div class="">:</div>
                        <div class="w-max">{{data_pasien?.alergi.status ? 'ya' : 'tidak'}}</div>
                    </div>
                    <div class="flex gap-2 ml-3" v-if="data_pasien?.alergi.status">
                        <div class="w-[180px] capitalize">alergi</div>
                        <div class="">:</div>
                        <div class="w-max">{{data_pasien?.alergi.alergi}}</div>
                    </div>
                    <div class="flex gap-2 ml-3" v-if="data_pasien?.alergi.status">
                        <div class="w-[180px] capitalize">reaksi alergi</div>
                        <div class="">:</div>
                        <div class="w-max">{{data_pasien?.alergi.reaksi_alergi}}</div>
                    </div>
                </div>
            </div>

            <!--  -->

            <div class="flex flex-col gap-2 max-w-full overflow-hidden">
                <div class="uppercase font-bold my-4 text-center overflow-hidden">assessment nyeri</div>
                <div class="flex flex-col gap-2">
                    <div class="flex gap-2">
                        <div class="w-[180px] capitalize font-semibold">nyeri</div>
                        <div class="">:</div>
                        <div class="w-max">{{data_pasien?.nyeri.status ? 'ya' : 'tidak'}}</div>
                    </div>
                    <div class="flex gap-2 ml-3" v-if="data_pasien?.nyeri.status">
                        <div class="w-[180px] capitalize">sejak kapan</div>
                        <div class="">:</div>
                        <div class="w-max">{{data_pasien?.nyeri.kapan}}</div>
                    </div>
                    <div class="flex gap-2 ml-3" v-if="data_pasien?.nyeri.status">
                        <div class="w-[180px] capitalize">faktor pencetus nyeri</div>
                        <div class="">:</div>
                        <div class="w-max">{{data_pasien?.nyeri.faktor}}</div>
                    </div>
                    <div class="flex gap-2 ml-3" v-if="data_pasien?.nyeri.status">
                        <div class="w-[180px] capitalize">karakteristik nyeri</div>
                        <div class="">:</div>
                        <div class="w-max">{{data_pasien?.nyeri.karakteristik}}</div>
                    </div>
                    <div class="flex gap-2 ml-3" v-if="data_pasien?.nyeri.status">
                        <div class="w-[180px] capitalize">lokasi nyeri</div>
                        <div class="">:</div>
                        <div class="w-max">{{data_pasien?.nyeri.lokasi}}</div>
                    </div>
                    <div class="flex gap-2 ml-3" v-if="data_pasien?.nyeri.status">
                        <div class="w-[180px] capitalize">skala nyeri</div>
                        <div class="">:</div>
                        <div class="w-max">{{data_pasien?.nyeri.skala}}</div>
                    </div>
                    <div class="flex gap-2 ml-3" v-if="data_pasien?.nyeri.status">
                        <div class="w-[180px] capitalize">durasi / lama nyeri</div>
                        <div class="">:</div>
                        <div class="w-max">{{data_pasien?.nyeri.durasi}}</div>
                    </div>
                </div>
            </div>

             <!--  -->

             <div class="flex flex-col gap-2 max-w-full overflow-hidden">
                <div class="uppercase font-bold my-4 text-center overflow-hidden">kebutuhan edukasi</div>
                <div class="flex flex-col gap-2">
                    <div class="flex gap-2">
                        <div class="w-[180px] capitalize font-semibold">kebutuhan edukasi</div>
                        <div class="">:</div>
                        <div class="w-max">{{data_pasien?.kebutuhan_edukasi.pilihan}}</div>
                    </div>
                </div>
            </div>

             <!--  -->

             <div class="flex flex-col gap-2 max-w-full overflow-hidden">
                <div class="uppercase font-bold my-4 text-center overflow-hidden">Perencanaan Pemulangan Pasien (P3) / (Discharge Planning)</div>
                <div class="flex flex-col gap-2">
                    <div class="flex gap-2">
                        <div class="w-[180px] capitalize font-semibold">Kriteria Pemulangan Kritis</div>
                        <div class="">:</div>
                        <div class="w-max">
                            <div class="" v-for="(item, index) in data_pasien?.perencanaan_pemulangan_pasien" :key="index">- {{item.opsi}}</div>
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <div class="w-[180px] capitalize font-semibold">discard plainning </div>
                        <div class="">:</div>
                        <div class="w-max">
                            {{data_pasien?.perencanaan_pemulangan_pasien.length ? 'tidak' : 'ya'}}
                        </div>
                    </div>
                </div>
            </div>

            <!--  -->

            <div class="flex flex-col gap-2 max-w-full overflow-hidden">
                <div class="uppercase font-bold my-4 text-center overflow-hidden">Riwayat Penggunaan obat</div>
                <div class="flex flex-col gap-2">
                    <div class="flex gap-2">
                        <div class="w-[180px] capitalize font-semibold">penggunaan obat</div>
                        <div class="">:</div>
                        <div class="w-max">{{data_pasien?.penggunaan_obat.length}}</div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <div class="font-semibold capitalize">obat yang digunakan</div>
                        <div class="card shadow-md m-2" v-for="(item, index) in data_pasien?.penggunaan_obat" :key="index">
                            <div class="card-body">
                                <div class="flex gap-2">
                                    <div class="w-[60px] capitalize font-semibold">nama</div>
                                    <div class="">:</div>
                                    <div class="w-max">{{item.nama}}</div>
                                </div>
                                <div class="flex gap-2">
                                    <div class="w-[60px] capitalize font-semibold">dosis</div>
                                    <div class="">:</div>
                                    <div class="w-max">{{item.dosis}}</div>
                                </div>
                                <div class="flex gap-2">
                                    <div class="w-[60px] capitalize font-semibold">sumber</div>
                                    <div class="">:</div>
                                    <div class="w-max">{{item.asal}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <div class="w-[180px] capitalize font-semibold">assessment populasi khusus</div>
                        <div class="">:</div>
                        <div class="w-max">
                            <div class="" v-for="(item, index) in data_pasien?.populasi_khusus" :key="index">- {{item.populasi}}</div>
                        </div>
                    </div>
                </div>
            </div>

            <!--  -->

            <div class="flex flex-col gap-2 max-w-full overflow-hidden">
                <div class="uppercase font-bold my-4 text-center overflow-hidden">Analisis Data</div>
                <div class="flex flex-col gap-2">
                    <div class="card shadow-md m-2" v-for="(item, index) in data_pasien?.analisis_data" :key="index">
                            <div class="card-body">
                                <div class="flex gap-2">
                                    <div class="w-[60px] capitalize font-semibold">subjektif</div>
                                    <div class="">:</div>
                                    <div class="w-max">{{item.subjektif}}</div>
                                </div>
                                <div class="flex gap-2">
                                    <div class="w-[60px] capitalize font-semibold">objektif</div>
                                    <div class="">:</div>
                                    <div class="w-max">{{item.objektif}}</div>
                                </div>
                                <div class="flex gap-2">
                                    <div class="w-[60px] capitalize font-semibold">penyebab</div>
                                    <div class="">:</div>
                                    <div class="w-max">{{item.penyebab}}</div>
                                </div>
                                <div class="flex gap-2">
                                    <div class="w-[60px] capitalize font-semibold">masalah</div>
                                    <div class="">:</div>
                                    <div class="w-max">{{item.masalah}}</div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

             <!--  -->

             <div class="flex flex-col gap-2 max-w-full overflow-hidden">
                <div class="uppercase font-bold my-4 text-center overflow-hidden">daignosa / Masalah keperawatan</div>
                <div class="flex flex-col gap-2">
                    <div class="flex gap-2" v-for="(item, index) in data_pasien?.masalah_keperawatan" :key="index">
                        <div class="badge">{{item.kode}}</div>
                        <div class="">-</div>
                        <div class="w-max">{{item.keterangan}}</div>
                    </div>
                </div>
            </div>

             <!--  -->

        </div>

      </div>

    </div>
</template>