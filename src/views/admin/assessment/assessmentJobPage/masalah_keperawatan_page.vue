<script lang="ts" setup>
import useForm from 'form-helper-axios';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore()
const router = useRouter()
store.state.judul_job = "Masalah Keperawatan";

const data_diagnosa = [
    {
        title: true,
        kode: null,
        keterangan: "Respirasi"
    },
    {
        title: false,
        kode: "0001",
        keterangan: "Bersihan Jalan Napas Tidak Efektif"
    },
    {
        title: false,
        kode: "0002",
        keterangan: "Gangguan Penyapihan Ventilator"
    },
    {
        title: false,
        kode: "0003",
        keterangan: "Gangguan Pertukaran Gas"
    },
    {
        title: false,
        kode: "0004",
        keterangan: "Gangguan Ventilasi spontan"
    },
    {
        title: false,
        kode: "0005",
        keterangan: "pola napas tidak efektif"
    },
    {
        title: false,
        kode: "0006",
        keterangan: "risiko aspirasi"
    },
    {
        title: true,
        kode: null,
        keterangan: "sirkulasi"
    },
    {
        title: false,
        kode: "0007",
        keterangan: "gangguan sirkulasi spontan"
    },
    {
        title: false,
        kode: "0008",
        keterangan: "penurunan curah jantung"
    },
    {
        title: false,
        kode: "0009",
        keterangan: "perfusi perifer tidak efektif"
    },
    {
        title: false,
        kode: "0010",
        keterangan: "risiko gangguan sirkulasi spontan"
    },
    {
        title: false,
        kode: "0011",
        keterangan: "risiko penurunan curah jantung"
    },
    {
        title: false,
        kode: "0012",
        keterangan: "risiko pendarahan"
    },
    {
        title: false,
        kode: "0013",
        keterangan: "risiko perfusi gastrointestinal tidak efektif"
    },
    {
        title: false,
        kode: "0014",
        keterangan: "risiko perfusi miokard tidak efektif"
    },
    {
        title: false,
        kode: "0015",
        keterangan: "risiko perfusi perifer tidak efektif"
    },
    {
        title: false,
        kode: "0016",
        keterangan: "risiko perfusi renal tidak efektif"
    },
    {
        title: false,
        kode: "0017",
        keterangan: "risiko perfusi serebral tidak efektif"
    },
    {
        title: true,
        kode: null,
        keterangan: "nutrisi / cairan"
    },
    {
        title: false,
        kode: "0018",
        keterangan: "berat badan lebih"
    },
    {
        title: false,
        kode: "0019",
        keterangan: "defisit nutrisi"
    },
    {
        title: false,
        kode: "0020",
        keterangan: "diare"
    },
    {
        title: false,
        kode: "0021",
        keterangan: "disfungsi motilitas gastrointestinal"
    },
    {
        title: false,
        kode: "0022",
        keterangan: "hipervolemia"
    },
    {
        title: false,
        kode: "0023",
        keterangan: "hipovolemia"
    },
    {
        title: false,
        kode: "0024",
        keterangan: "ikterik neonatus"
    },
    {
        title: false,
        kode: "0025",
        keterangan: "kesiapan peningkatan keseimbangan cairan"
    },
    {
        title: false,
        kode: "0026",
        keterangan: "kesiapan peningkatan nutrisi"
    },
    {
        title: false,
        kode: "0027",
        keterangan: "ketikdakstabilan kafar glukosa darah"
    },
    {
        title: false,
        kode: "0028",
        keterangan: "menyusui efektif"
    },
    {
        title: false,
        kode: "0029",
        keterangan: "menyusui tidak efektif"
    },
    {
        title: false,
        kode: "0030",
        keterangan: "obesitas"
    },
    {
        title: false,
        kode: "0031",
        keterangan: "risiko berat badan lebih"
    },
    {
        title: false,
        kode: "0032",
        keterangan: "risiko defisit nutrisi"
    },
    {
        title: false,
        kode: "0033",
        keterangan: "risiko disfungsi motilitas gastrointestinal"
    },
    {
        title: false,
        kode: "0034",
        keterangan: "risiko hipovolemia"
    },
    {
        title: false,
        kode: "0035",
        keterangan: "risiko ikterik neonatus"
    },
    {
        title: false,
        kode: "0036",
        keterangan: "risko ketidakseimbangan cairan"
    },
    {
        title: false,
        kode: "0037",
        keterangan: "risiko ketidakseimbangan elektrolit"
    },
    {
        title: false,
        kode: "0038",
        keterangan: "risiko ketidakstabilan kadar glukosa darah"
    },
    {
        title: false,
        kode: "0039",
        keterangan: "risiko syok"
    },
    {
        title: true,
        kode: null,
        keterangan: "eliminasi"
    },
    {
        title: false,
        kode: "0040",
        keterangan: "gangguan eliminasi urin"
    },
    {
        title: false,
        kode: "0041",
        keterangan: "inkontinensia fekal"
    },
    {
        title: false,
        kode: "0042",
        keterangan: "inkontinensia urin berlanjut"
    },
    {
        title: false,
        kode: "0043",
        keterangan: "inkontinensia urin fungsional"
    },
    {
        title: false,
        kode: "0044",
        keterangan: "inkontinensia urin berlebih"
    },
    {
        title: false,
        kode: "0045",
        keterangan: "inkontinensia urin refleks"
    },
    {
        title: false,
        kode: "0046",
        keterangan: "inkontinensia urin stres"
    },
    {
        title: false,
        kode: "0047",
        keterangan: "inkontinensia urin urgensi"
    },
    {
        title: false,
        kode: "0048",
        keterangan: "kesiapan peningkatan eliminasi urin"
    },
    {
        title: false,
        kode: "0049",
        keterangan: "konstipasi"
    },
    {
        title: false,
        kode: "0050",
        keterangan: "retensi urin"
    },
    {
        title: false,
        kode: "0051",
        keterangan: "risiko inkontinensia urin urgensi"
    },
    {
        title: false,
        kode: "0052",
        keterangan: "risiko konstipasi"
    },
    {
        title: true,
        kode: null,
        keterangan: "aktifitas dan istirahat"
    },
    {
        title: false,
        kode: "0053",
        keterangan: "disorganisasi perilaku bayi"
    },
    {
        title: false,
        kode: "0054",
        keterangan: "gangguan mobilitas fisik"
    },
    {
        title: false,
        kode: "0055",
        keterangan: "gangguan pola tidur"
    },
    {
        title: false,
        kode: "0056",
        keterangan: "intoleransi aktivitas"
    },
    {
        title: false,
        kode: "0057",
        keterangan: "keletihan"
    },
    {
        title: false,
        kode: "0058",
        keterangan: "kesiapan peningkatan tidur"
    },
    {
        title: false,
        kode: "0059",
        keterangan: "risiko disorganisasi perilaku bayi"
    },
    {
        title: false,
        kode: "0060",
        keterangan: "risiko intoleransi aktifitas"
    },
    {
        title: true,
        kode: "006",
        keterangan: "neurosensori"
    },
    {
        title: false,
        kode: "0061",
        keterangan: "disrefleksia otonom"
    },
    {
        title: false,
        kode: "0062",
        keterangan: "gangguan memori"
    },
    {
        title: false,
        kode: "0063",
        keterangan: "gangguan menelan"
    },
    {
        title: false,
        kode: "0064",
        keterangan: "konfusi akut"
    },
    {
        title: false,
        kode: "0065",
        keterangan: "konfusi kronis"
    },
    {
        title: false,
        kode: "0066",
        keterangan: "penurunan kapasitas adaptif intrakarnial"
    },
    {
        title: false,
        kode: "0067",
        keterangan: "risiko disfungsi neurovaskuler perifer"
    },
    {
        title: false,
        kode: "0068",
        keterangan: "risiko konfusi akut"
    },
    {
        title: true,
        kode: "006",
        keterangan: "reproduksi dan seksualitas"
    },
    {
        title: false,
        kode: "0069",
        keterangan: "disfungsi seksual"
    },
    {
        title: false,
        kode: "0070",
        keterangan: "kesiapan persalinan"
    },
    {
        title: false,
        kode: "0071",
        keterangan: "pola seksual tidak efektif"
    },
    {
        title: false,
        kode: "0072",
        keterangan: "risiko disfungsi seksual"
    },
    {
        title: false,
        kode: "0073",
        keterangan: "risiko kehamilan tidak dikehendaki"
    },
    {
        title: true,
        kode: "007",
        keterangan: "nyeri dan kenyamanan"
    },
    {
        title: false,
        kode: "0074",
        keterangan: "gangguan rasa nyaman"
    },
    {
        title: false,
        kode: "0075",
        keterangan: "ketidak nyamanan pasca partum"
    },
    {
        title: false,
        kode: "0076",
        keterangan: "nausea"
    },
    {
        title: false,
        kode: "0077",
        keterangan: "nyeri akut"
    },
    {
        title: false,
        kode: "0078",
        keterangan: "nyeri kronis"
    },
    {
        title: false,
        kode: "0079",
        keterangan: "nyeri melahirkan"
    },
    {
        title: true,
        kode: "008",
        keterangan: "integritas ego"
    },
    {
        title: false,
        kode: "0080",
        keterangan: "ansietas"
    },
    {
        title: false,
        kode: "0081",
        keterangan: "berduka"
    },
    {
        title: false,
        kode: "0082",
        keterangan: "distres spiritual"
    },
    {
        title: false,
        kode: "0083",
        keterangan: "gangguan citra tubuh"
    },
    {
        title: false,
        kode: "0084",
        keterangan: "gangguan identitas diri"
    },
    {
        title: false,
        kode: "0085",
        keterangan: "gangguan persepsi sensori"
    },
    {
        title: false,
        kode: "0086",
        keterangan: "harga diri rendah kronis"
    },
    {
        title: false,
        kode: "0087",
        keterangan: "harga diri rendah situasional"
    },
    {
        title: false,
        kode: "0088",
        keterangan: "keputusasaan"
    },
    {
        title: false,
        kode: "0089",
        keterangan: "kesiapan peningkatan konsep diri"
    },
    {
        title: false,
        kode: "0090",
        keterangan: "kesiapan peningkatan koping keluarga"
    },
    {
        title: false,
        kode: "0091",
        keterangan: "kesiapan peningkatan koping komunitas"
    },
    {
        title: false,
        kode: "0092",
        keterangan: "ketidakberdayaan"
    },
    {
        title: false,
        kode: "0093",
        keterangan: "ketidakmampuan koping keluarga"
    },
    {
        title: false,
        kode: "0094",
        keterangan: "koping defensif"
    },
    {
        title: false,
        kode: "0095",
        keterangan: "koping komunitas tidak efektif"
    },
    {
        title: false,
        kode: "0096",
        keterangan: "koping tidak efektif"
    },
    {
        title: false,
        kode: "0097",
        keterangan: "penurunan koping keluarga"
    },
    {
        title: false,
        kode: "0098",
        keterangan: "penyangkalan tidak efektif"
    },
    {
        title: false,
        kode: "0099",
        keterangan: "perilaku kesehatan cenderung beresiko"
    },
    {
        title: false,
        kode: "0100",
        keterangan: "risiko distres spiritual"
    },
    {
        title: false,
        kode: "0101",
        keterangan: "risiko harga diri rendah kronis"
    },
    {
        title: false,
        kode: "0102",
        keterangan: "risiko harga diri rendah situasional"
    },
    {
        title: false,
        kode: "0103",
        keterangan: "risiko ketidakberdayaan"
    },
    {
        title: false,
        kode: "0104",
        keterangan: "sindrom pasca trauma"
    },
    {
        title: true,
        kode: "010",
        keterangan: "pertumbuhan dan perkembangan"
    },
    {
        title: false,
        kode: "0105",
        keterangan: "gangguan tumbuh kembang"
    },
    {
        title: false,
        kode: "0106",
        keterangan: "risiko gangguan perkembangan"
    },
    {
        title: false,
        kode: "0107",
        keterangan: "risiko gangguan pertumbuhan"
    },
    {
        title: true,
        kode: "010",
        keterangan: "kebersihan diri"
    },
    {
        title: false,
        kode: "0108",
        keterangan: "defisit perawatan diri"
    },
    {
        title: true,
        kode: "010",
        keterangan: "penyuluhan dan pembelajaran"
    },
    {
        title: false,
        kode: "0109",
        keterangan: "defisit kesehatan komunitas"
    },
    {
        title: false,
        kode: "0110",
        keterangan: "defisit pengetahuan"
    },
    {
        title: false,
        kode: "0111",
        keterangan: "kesiapan peningkatan manajemen kesehatan"
    },
    {
        title: false,
        kode: "0112",
        keterangan: "kesiapan peningkatan pengetahuan"
    },
    {
        title: false,
        kode: "0113",
        keterangan: "ketidakpatuhan"
    },
    {
        title: false,
        kode: "0114",
        keterangan: "manajemen kesehatan keluarga tidak efektif"
    },
    {
        title: false,
        kode: "0115",
        keterangan: "manajemen kesehatan tidak efektif"
    },
    {
        title: false,
        kode: "0116",
        keterangan: "pemeliharaan kesehatan tidak efektif"
    },
    {
        title: true,
        kode: null,
        keterangan: "interaksi sosial"
    },
    {
        title: false,
        kode: "0117",
        keterangan: "gangguan interaksi sosial"
    },
    {
        title: false,
        kode: "0118",
        keterangan: "gangguan komunikasi verbal"
    },
    {
        title: false,
        kode: "0119",
        keterangan: "gangguan proses keluarga"
    },
    {
        title: false,
        kode: "0120",
        keterangan: "isolasi sosial"
    },
    {
        title: false,
        kode: "0121",
        keterangan: "kesiapan peningkatan menjadi orang tua"
    },
    {
        title: false,
        kode: "0122",
        keterangan: "kesiapan peningkatan proses keluarga"
    },
    {
        title: false,
        kode: "0123",
        keterangan: "ketegangan peran pemberi asuhan"
    },
    {
        title: false,
        kode: "0124",
        keterangan: "penampilan peran tidak efektif"
    },
    {
        title: false,
        kode: "0125",
        keterangan: "pencapaian peran menjadi orang tua"
    },
    {
        title: false,
        kode: "0126",
        keterangan: "risiko gangguan perlekatan"
    },
    {
        title: false,
        kode: "0127",
        keterangan: "risiko proses pengasuhan tidak efektif"
    },
]
const diagnosa: any = ref([])
const select_diagnosa: any = ref(null);

const delete_diagnosa = (index: any) => {
    diagnosa.value.splice(index, 1)
}

const selesai = () => {
    const data  = {
        data : diagnosa.value,
        identitas_pasien_id : store.state.assessment.pasien_id,
    }
    const form = useForm(data)
    form.post("assessment-data/masalah-keperawatan",{
        onSuccess : () => {
            store.getters.resetAssessment
            router.push(`/archive`)
        }
    })
}

watch(() => select_diagnosa.value,
    async (pilih: any) => {
        if (pilih) {
            await diagnosa.value.push(pilih)
            select_diagnosa.value = null
        }
    })
</script>
<template lang="">
    <div class="flex flex-col gap-8">
        <div class="form-control">
            <label class="label">Pilih Diagnosa</label>
            <select v-model="select_diagnosa" class="select select-bordered">
                <option disabled :value="null">Pilih Diagnosa</option>
                <template v-for="(item, index) in data_diagnosa" :key="index">
                    <option v-if="item.title" disabled class="font-bold capitalize bg-base-300">{{item.keterangan}}</option>
                    <option v-else :value="{kode : item.kode, keterangan : item.keterangan}" class="capitalize">{{item.kode}} - {{item.keterangan}}</option>
                </template>
            </select>
        </div>
        <div class="flex flex-col gap-2">
            <div class="font-bold">Diagnosa </div>
            <div class="flex gap-2" v-for="(item, index) in diagnosa" :key="index">
                <div class="w-max">
                    <div class="badge badge-neutral">{{item.kode}}</div>
                </div>
                <div class="w-full capitalize">{{item.keterangan}}</div>
                <div class="w-max">
                    <button class="btn btn-xs btn-error" @click="delete_diagnosa(index)">hapus</button>
                </div>
            </div>
        </div>
        <button :disabled="!diagnosa.length" @click="selesai" class="btn btn-primary">simpan</button>
    </div>
</template>