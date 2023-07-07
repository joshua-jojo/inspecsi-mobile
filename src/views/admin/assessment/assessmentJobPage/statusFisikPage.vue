<script lang="ts" setup>
import useForm from 'form-helper-axios';
import { watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore()
const router = useRouter()
const respirasi = store.state.assessment.informasi.status_fisik.respirasi
const sirkulasi = store.state.assessment.informasi.status_fisik.sirkulasi
const nutrisiCairan = store.state.assessment.informasi.status_fisik.nutrisi_dan_cairan
const eliminasi = store.state.assessment.informasi.status_fisik.eliminasi
const aktifitas_dan_istirahat = store.state.assessment.informasi.status_fisik.aktifitas_dan_istirahat
const neusensori = store.state.assessment.informasi.status_fisik.neusensori
const reproduksi_dan_seksualitas = store.state.assessment.informasi.status_fisik.reproduksi_dan_seksualitas


store.state.judul_job = "Status Fisik / Kebutuhan Fisiologis"

// respirasi.batuk.status = true
// respirasi.batuk.lama_sakit = 2022
// respirasi.sputum.status = true
// respirasi.sputum.jenis_sputum = 'kental'
// respirasi.sesak_nafas.status = true
// respirasi.sesak_nafas.keterangan = 'kental'
// respirasi.penggunaan_alat_bantu_nafas = true

// sirkulasi.tekanan_darah = '1'
// sirkulasi.suhu = '1'
// sirkulasi.nadi = '1'
// sirkulasi.pernapasan = '1'
// sirkulasi.spo2 = '1'
// sirkulasi.crt = '1'
// sirkulasi.akral = 'dingin'

// nutrisiCairan.kesulitan_minum = true
// nutrisiCairan.status_puasa = true
// nutrisiCairan.turgor_kulit = "menurun"
// nutrisiCairan.edema.status = true
// nutrisiCairan.edema.keterangan = true
// nutrisiCairan.muntah.status = true
// nutrisiCairan.muntah.keterangan = true
// nutrisiCairan.kebutuhan_nutrisi = "parenteral"
// nutrisiCairan.tb =12
// nutrisiCairan.bb =12

// eliminasi.bab.status = 'konsistensi dan warna'
// eliminasi.bab.konsistensi = 1232
// eliminasi.bab.warna = 1232
// eliminasi.bab.frekuensi_diare = 1232
// eliminasi.bak.status = 'frekuensi'

// aktifitas_dan_istirahat.pola_tidur =123
// aktifitas_dan_istirahat.durasi =123
// aktifitas_dan_istirahat.gangguan_tidur.status =true
// aktifitas_dan_istirahat.gangguan_tidur.gangguan =true

// neusensori.kesadaran = true

// reproduksi_dan_seksualitas.status = 'ya'
// reproduksi_dan_seksualitas.gangguan = 'ya'

async function nextPage() {
    const data = await store.state.assessment.informasi.status_fisik
    data.identitas_pasien_id = await store.state.assessment.pasien_id
    const form =  useForm(data)
    form.post('assessment-data/status-fisik-fisiologis',{
        onSuccess : () => {
            router.push({
                name: 'admin.job.psikososialspiritual'
            })
        }   
    })
}

watchEffect(() => {
    const bb = nutrisiCairan.bb;
    const tb = nutrisiCairan.tb;

    nutrisiCairan.imt = bb / tb

    if (!nutrisiCairan.imt) {
        nutrisiCairan.imt = 0
    }
})
</script>

<template>
    <div class="px-4">
        <div class="form-control mb-8">

<label class="label font-bold capitalize text-lg">1. respirasi</label>
<div class="form-control">
    <label class="label capitalize">batuk</label>
    <div class="flex flex-row capitalize gap-5">
        <label class="label gap-2">
            <input v-model="respirasi.batuk.status" type="radio" class="radio" name="batuk" :value="true">
            <span>ya</span>
        </label>
        <label class="label gap-2">
            <input v-model="respirasi.batuk.status" type="radio" class="radio" name="batuk" :value="false">
            <span>tidak</span>
        </label>
    </div>
</div>

<div class="form-control" v-if="respirasi.batuk.status">
    <label class="label">Lama Sakit</label>
    <input type="text" class="input input-bordered" v-model="respirasi.batuk.lama_sakit">
</div>

<div class="form-control">
    <label class="label capitalize">sputum</label>
    <div class="flex flex-row capitalize gap-5">
        <label class="label gap-2">
            <input v-model="respirasi.sputum.status" type="radio" class="radio" name="sputum" :value="true">
            <span>ada</span>
        </label>
        <label class="label gap-2">
            <input v-model="respirasi.sputum.status" type="radio" class="radio" name="sputum" :value="false">
            <span>tidak</span>
        </label>
    </div>
</div>

<div class="form-control" v-if="respirasi.sputum.status">
    <label class="label capitalize">keterangan sputum</label>
    <div class="flex flex-row capitalize gap-5">
        <label class="label gap-2">
            <input v-model="respirasi.sputum.jenis_sputum" type="radio" class="radio" name="sputum_ket"
                value="kental">
            <span>kental</span>
        </label>
        <label class="label gap-2">
            <input v-model="respirasi.sputum.jenis_sputum" type="radio" class="radio" name="sputum_ket"
                value="encer">
            <span>encer</span>
        </label>
        <label class="label gap-2">
            <input v-model="respirasi.sputum.jenis_sputum" type="radio" class="radio" name="sputum_ket"
                value="darah">
            <span>darah</span>
        </label>
    </div>
</div>

<div class="form-control">
    <label class="label capitalize">sesak nafas</label>
    <div class="flex flex-row capitalize gap-5">
        <label class="label gap-2">
            <input v-model="respirasi.sesak_nafas.status" type="radio" class="radio" name="sesak nafas"
                :value="true">
            <span>ya</span>
        </label>
        <label class="label gap-2">
            <input v-model="respirasi.sesak_nafas.status" type="radio" class="radio" name="sesak nafas"
                :value="false">
            <span>tidak</span>
        </label>
    </div>
</div>

<div class="form-control" v-if="respirasi.sesak_nafas.status">
    <label class="label">Keterangan</label>
    <input type="text" v-model="respirasi.sesak_nafas.keterangan" class="input input-bordered">
</div>

<div class="form-control">
    <label class="label capitalize">penggunaan alat bantu nafas</label>
    <div class="flex flex-row capitalize gap-5">
        <label class="label gap-2">
            <input v-model="respirasi.penggunaan_alat_bantu_nafas" type="radio" class="radio"
                name="penggunaan_alat_bantu_nafas" :value="true">
            <span>ya</span>
        </label>
        <label class="label gap-2">
            <input v-model="respirasi.penggunaan_alat_bantu_nafas" type="radio" class="radio"
                name="penggunaan_alat_bantu_nafas" :value="false">
            <span>tidak</span>
        </label>
    </div>
</div>
</div>

<div class="form-control mb-8">

<label class="label font-bold capitalize text-lg">2. Sirkulasi</label>
<div class="form-control">
    <label class="label capitalize">tekanan darah</label>
    <input type="text" class="input input-bordered" v-model="sirkulasi.tekanan_darah">
</div>
<div class="form-control">
    <label class="label capitalize">suhu</label>
    <input type="text" class="input input-bordered" v-model="sirkulasi.suhu">
</div>
<div class="form-control">
    <label class="label capitalize">nadi</label>
    <input type="text" class="input input-bordered" v-model="sirkulasi.nadi">
</div>
<div class="form-control">
    <label class="label capitalize">pernapasan</label>
    <input type="text" class="input input-bordered" v-model="sirkulasi.pernapasan">
</div>
<div class="form-control">
    <label class="label uppercase">spo2</label>
    <input type="text" class="input input-bordered" v-model="sirkulasi.spo2">
</div>
<div class="form-control">
    <label class="label uppercase">crt</label>
    <input type="text" class="input input-bordered" v-model="sirkulasi.crt">
</div>
<div class="form-control">
    <label class="label capitalize">akral</label>
    <div class="flex flex-row capitalize gap-5">
        <label class="label gap-2">
            <input v-model="sirkulasi.akral" type="radio" class="radio" name="akral" value="hangat">
            <span>Hangat</span>
        </label>
        <label class="label gap-2">
            <input v-model="sirkulasi.akral" type="radio" class="radio" name="akral" value="dingin">
            <span>dingin</span>
        </label>
    </div>
</div>
</div>

<div class="form-control mb-8">

<label class="label font-bold capitalize text-lg">3. nutrisi dan cairan</label>
<div class="form-control">
    <label class="label capitalize">Kesulitan Minum</label>
    <div class="flex flex-row capitalize gap-5">
        <label class="label gap-2">
            <input v-model="nutrisiCairan.kesulitan_minum" type="radio" class="radio" name="minum" :value="true">
            <span>ya</span>
        </label>
        <label class="label gap-2">
            <input v-model="nutrisiCairan.kesulitan_minum" type="radio" class="radio" name="minum" :value="false">
            <span>tidak</span>
        </label>
    </div>
</div>

<div class="form-control">
    <label class="label capitalize">status puasa</label>
    <div class="flex flex-row capitalize gap-5">
        <label class="label gap-2">
            <input v-model="nutrisiCairan.status_puasa" type="radio" class="radio" name="puasa" :value="true">
            <span>ya</span>
        </label>
        <label class="label gap-2">
            <input v-model="nutrisiCairan.status_puasa" type="radio" class="radio" name="puasa" :value="false">
            <span>tidak</span>
        </label>
    </div>
</div>

<div class="form-control">
    <label class="label capitalize">turgor kulit</label>
    <div class="flex flex-row capitalize gap-5">
        <label class="label gap-2">
            <input v-model="nutrisiCairan.turgor_kulit" type="radio" class="radio" name="turgor" value="baik">
            <span>baik</span>
        </label>
        <label class="label gap-2">
            <input v-model="nutrisiCairan.turgor_kulit" type="radio" class="radio" name="turgor" value="menurun">
            <span>menurun</span>
        </label>
    </div>
</div>

<div class="form-control">
    <label class="label capitalize">Edema</label>
    <div class="flex flex-row capitalize gap-5">
        <label class="label gap-2">
            <input v-model="nutrisiCairan.edema.status" type="radio" class="radio" name="edema" :value="true">
            <span>ya</span>
        </label>
        <label class="label gap-2">
            <input v-model="nutrisiCairan.edema.status" type="radio" class="radio" name="edema" :value="false">
            <span>tidak</span>
        </label>
    </div>
</div>

<div class="form-control" v-if="nutrisiCairan.edema.status">
    <label class="label capitalize">derajat piting edema</label>
    <input type="text" class="input input-bordered" v-model="nutrisiCairan.edema.keterangan">
</div>

<div class="form-control">
    <label class="label capitalize">muntah</label>
    <div class="flex flex-row capitalize gap-5">
        <label class="label gap-2">
            <input v-model="nutrisiCairan.muntah.status" type="radio" class="radio" name="muntah" :value="true">
            <span>ya</span>
        </label>
        <label class="label gap-2">
            <input v-model="nutrisiCairan.muntah.status" type="radio" class="radio" name="muntah" :value="false">
            <span>tidak</span>
        </label>
    </div>
</div>

<div class="form-control" v-if="nutrisiCairan.muntah.status">
    <label class="label capitalize">Frekuensi</label>
    <input type="text" class="input input-bordered" v-model="nutrisiCairan.muntah.keterangan">
</div>

<div class="form-control">
    <label class="label capitalize">Kebutuhan Nutrisi</label>
    <div class="flex flex-row capitalize gap-5">
        <label class="label gap-2">
            <input v-model="nutrisiCairan.kebutuhan_nutrisi" type="radio" class="radio" name="Kebutuhan Nutrisi"
                value="enterasi">
            <span>enterasi</span>
        </label>
        <label class="label gap-2">
            <input v-model="nutrisiCairan.kebutuhan_nutrisi" type="radio" class="radio" name="Kebutuhan Nutrisi"
                value="parenteral">
            <span>parenteral</span>
        </label>
    </div>
</div>

<div class="form-control">
    <label class="label">TB</label>
    <input type="number" class="input input-bordered" v-model="nutrisiCairan.tb">
</div>

<div class="form-control">
    <label class="label">BB</label>
    <input type="number" class="input input-bordered" v-model="nutrisiCairan.bb">
</div>

<div class="form-control">
    <label class="label">IMT</label>
    <select class="select select-bordered select-disabled" disabled>
        <option v-if="!nutrisiCairan.tb">Masukkan TB</option>
        <option v-else-if="!nutrisiCairan.bb">Masukkan BB</option>
        <option v-else-if="nutrisiCairan.imt < 18" selected>Underweight</option>
        <option v-else-if="nutrisiCairan.imt >= 18 && nutrisiCairan.imt <= 25" selected>Normal</option>
        <option v-else-if="nutrisiCairan.imt >= 26 && nutrisiCairan.imt <= 27" selected>Overweight</option>
        <option v-else-if="nutrisiCairan.imt >= 28" selected>Obesitas</option>
    </select>
</div>

</div>

<div class="form-control mb-8">
<label class="label font-bold capitalize text-lg">4. Eliminasi</label>
<div class="form-control">
    <label class="label uppercase">BAB</label>
    <label class="label w-max gap-2">
        <input type="radio" class="radio" name="bab" v-model="eliminasi.bab.status" value="tidak ada masalah">
        <span>Tidak ada masalah</span>
    </label>

    <label class="label w-max gap-2">
        <input type="radio" class="radio" name="bab" v-model="eliminasi.bab.status" value="konsistensi dan warna">
        <span>Konsistensi .... warna ....</span>
    </label>

    <label class="label w-max gap-2">
        <input type="radio" class="radio" name="bab" v-model="eliminasi.bab.status" value="frekuensi">
        <span>Frequensi ....</span>
    </label>

    <label class="label w-max gap-2">
        <input type="radio" class="radio" name="bab" v-model="eliminasi.bab.status" value="konstipasi">
        <span>Konstipasi</span>
    </label>

    <label class="label w-max gap-2">
        <input type="radio" class="radio" name="bab" v-model="eliminasi.bab.status" value="diare">
        <span>Diare</span>
    </label>
</div>

<div class="form-control" v-if="eliminasi.bab.status == 'konsistensi dan warna'">
    <label class="label">Konsistensi</label>
    <input type="text" class="input input-bordered" v-model="eliminasi.bab.konsistensi">
</div>

<div class="form-control" v-if="eliminasi.bab.status == 'konsistensi dan warna'">
    <label class="label">Warna</label>
    <input type="text" class="input input-bordered" v-model="eliminasi.bab.warna">
</div>

<div class="form-control" v-if="eliminasi.bab.status == 'frekuensi'">
    <label class="label">Frekuensi</label>
    <input type="text" class="input input-bordered" v-model="eliminasi.bab.frekuensi">
</div>

<div class="form-control" v-if="eliminasi.bab.status == 'diare'">
    <label class="label">Frekuensi Diare</label>
    <input type="text" class="input input-bordered" v-model="eliminasi.bab.frekuensi_diare">
</div>

<div class="form-control mt-5">
    <label class="label uppercase">BAK</label>
    <label class="label w-max gap-2">
        <input type="radio" class="radio" name="bak" v-model="eliminasi.bak.status" value="tidak ada masalah">
        <span>Tidak ada masalah</span>
    </label>

    <label class="label w-max gap-2">
        <input type="radio" class="radio" name="bak" v-model="eliminasi.bak.status" value="frekuensi">
        <span>Frekuensi</span>
    </label>

    <label class="label w-max gap-2">
        <input type="radio" class="radio" name="bak" v-model="eliminasi.bak.status" value="warna urine">
        <span>Warna Urine</span>
    </label>

    <label class="label w-max gap-2">
        <input type="radio" class="radio" name="bak" v-model="eliminasi.bak.status" value="retensi urine">
        <span>Retensi Urine</span>
    </label>

    <label class="label w-max gap-2">
        <input type="radio" class="radio" name="bak" v-model="eliminasi.bak.status" value="haematuri">
        <span>Haematuri</span>
    </label>

    <label class="label w-max gap-2">
        <input type="radio" class="radio" name="bak" v-model="eliminasi.bak.status" value="poli uri">
        <span>Poli Uri</span>
    </label>

    <label class="label w-max gap-2">
        <input type="radio" class="radio" name="bak" v-model="eliminasi.bak.status" value="inkotinensia">
        <span>Inkotinensia</span>
    </label>

    <label class="label w-max gap-2">
        <input type="radio" class="radio" name="bak" v-model="eliminasi.bak.status" value="nocturi">
        <span>Nocturi</span>
    </label>
</div>
</div>

<div class="form-control mb-8">

<label class="label font-bold capitalize text-lg">5. Aktivitas & Istirahat</label>
<div class="form-control">
    <label class="label capitalize">pola tidur</label>
    <input type="text" class="input input-bordered" v-model="aktifitas_dan_istirahat.pola_tidur">
</div>

<div class="form-control">
    <label class="label capitalize">durasi</label>
    <input type="text" class="input input-bordered" v-model="aktifitas_dan_istirahat.durasi">
</div>

<div class="form-control">
    <label class="label capitalize">gangguan tidur</label>
    <label class="label capitalize w-max gap-2">
        <input type="radio" name="tidur" class="radio" v-model="aktifitas_dan_istirahat.gangguan_tidur.status"
            :value="true">
        <span>ya</span>
    </label>
    <label class="label capitalize w-max gap-2">
        <input type="radio" name="tidur" class="radio" v-model="aktifitas_dan_istirahat.gangguan_tidur.status"
            :value="false">
        <span>tidak</span>
    </label>
</div>

<div class="form-control" v-if="aktifitas_dan_istirahat.gangguan_tidur.status">
    <label class="label capitalize">sebutkan gangguan</label>
    <input type="text" class="input input-bordered" v-model="aktifitas_dan_istirahat.gangguan_tidur.gangguan">
</div>
</div>

<div class="form-control mb-8">

<label class="label font-bold capitalize text-lg">6. Neusensori</label>
<div class="form-control">
    <label class="label">Kesadaran</label>
    <input type="text" class="input input-bordered" v-model="neusensori.kesadaran">
</div>
</div>

<div class="form-control mb-8">

<label class="label font-bold capitalize text-lg">7. Reproduksi & Seksualitas</label>
<div class="form-control">
    <label class="label capitalize w-max gap-2">
        <input type="radio" class="radio" name="seksual" v-model="reproduksi_dan_seksualitas.status"
            value="tidak ada gangguan">
        <span>tidak ada gangguan</span>
    </label>
    <label class="label capitalize w-max gap-2">
        <input type="radio" class="radio" name="seksual" v-model="reproduksi_dan_seksualitas.status" value="ya">
        <span>Ya</span>
    </label>
</div>
<div class="form-control" v-if="reproduksi_dan_seksualitas.status == 'ya'">
    <label class="label">Sebutkan Gangguan</label>
    <input type="text" class="input input-bordered" v-model="reproduksi_dan_seksualitas.gangguan">
</div>
</div>

<button class="btn btn-block my-1 btn-primary mt-5" @click="nextPage">Next</button>
<div class="btn btn-block my-1 btn-outline btn-primary" @click="router.back()"> back </div>
    </div>
</template>