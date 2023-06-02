<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter()
const psiko_sosial_spiritual = store.state.assessment.informasi.psiko_sosial_spiritual;
const sosial = store.state.assessment.informasi.psiko_sosial_spiritual.sosial;
const spiritual = store.state.assessment.informasi.psiko_sosial_spiritual.spiritual;

store.state.judul_job = "Psiko Sosial Spiritual"

function nextPage() {
    router.push({
        name : "admin.job.ekonomi"
    })
}
</script>

<template>
    <div class="form-control mb-4">
        <label class="label capitalize">1. Psikologi</label>
        <label class="label capitalize w-max gap-2">
            <input v-model="psiko_sosial_spiritual.psikologis.status" type="radio" class="radio" name="psikologi"
                value="tenang">
            <span>tenang</span>
        </label>
        <label class="label capitalize w-max gap-2">
            <input v-model="psiko_sosial_spiritual.psikologis.status" type="radio" class="radio" name="psikologi"
                value="cemas">
            <span>cemas</span>
        </label>
        <label class="label capitalize w-max gap-2">
            <input v-model="psiko_sosial_spiritual.psikologis.status" type="radio" class="radio" name="psikologi"
                value="takut">
            <span>takut</span>
        </label>
        <label class="label capitalize w-max gap-2">
            <input v-model="psiko_sosial_spiritual.psikologis.status" type="radio" class="radio" name="psikologi"
                value="marah /agresif">
            <span>marah /agresif</span>
        </label>
        <label class="label capitalize w-max gap-2">
            <input v-model="psiko_sosial_spiritual.psikologis.status" type="radio" class="radio" name="psikologi"
                value="kecendrungan bunuh diri">
            <span>kecendrungan bunuh diri</span>
        </label>
        <label class="label capitalize w-max gap-2">
            <input v-model="psiko_sosial_spiritual.psikologis.status" type="radio" class="radio" name="psikologi"
                value="lain lain">
            <span>lain lain</span>
        </label>

        <div class="form-control" v-if="psiko_sosial_spiritual.psikologis.status == 'kecendrungan bunuh diri'">
            <label class="label">Dilaporkan</label>
            <input type="text" class="input input-bordered" v-model="psiko_sosial_spiritual.psikologis.dilaporkan">
        </div>
        <div class="form-control" v-if="psiko_sosial_spiritual.psikologis.status == 'lain lain'">
            <label class="label">Sebutkan</label>
            <input type="text" class="input input-bordered" v-model="psiko_sosial_spiritual.psikologis.sebutkan">
        </div>

    </div>

    <div class="form-control mb-4">
        <label class="label capitalize">2. Sosial</label>
        <div class="form-control">
            <label class="label">Status Perkawinan</label>
            <input type="text" class="input input-bordered" v-model="sosial.status_perkawinan">
        </div>
        <div class="form-control">
            <label class="label capitalize">pola interaksi</label>
            <label class="label capitalize w-max gap-2">
                <input v-model="sosial.pola_interaksi" type="radio" class="radio" name="pola interaksi" value="baik">
                <span>baik</span>
            </label>
            <label class="label capitalize w-max gap-2">
                <input v-model="sosial.pola_interaksi" type="radio" class="radio" name="pola interaksi" value="buruk">
                <span>buruk</span>
            </label>
        </div>
        <div class="form-control">
            <label class="label capitalize">Support system</label>
            <label class="label capitalize w-max gap-2">
                <input v-model="sosial.support_system" type="radio" class="radio" name="support" value="keluarga">
                <span>keluarga</span>
            </label>
            <label class="label capitalize w-max gap-2">
                <input v-model="sosial.support_system" type="radio" class="radio" name="support"
                    value="panti sosial / jompo">
                <span>panti sosial / jompo</span>
            </label>
            <label class="label capitalize w-max gap-2">
                <input v-model="sosial.support_system" type="radio" class="radio" name="support" value="terlantar">
                <span>terlantar</span>
            </label>
        </div>
    </div>

    <div class="form-control mb-4">
        <label class="label capitalize">3. Spiritual</label>
        <div class="form-control">
            <label class="label">Agama</label>
            <input type="text" class="input input-bordered" v-model="spiritual.agama">
        </div>
        <div class="form-control">
            <label class="label">Nilai/Keyakinan yang dianut terhadap pelayanan kesehatan</label>
            <input type="text" class="input input-bordered" v-model="spiritual.keyakinan_pelayanan_kesehatan">
        </div>
        <div class="form-control">
            <label class="label">Kebutuhan Kerohanian</label>
            <input type="text" class="input input-bordered" v-model="spiritual.kebutuhan_kerohanian">
        </div>
        <div class="form-control">
            <label class="label">Kebutuhan Privasi Khusus</label>
            <input type="text" class="input input-bordered" v-model="spiritual.kebutuhan_privasi_khusus">
        </div>
    </div>

    <button class="btn btn-primary mt-5" @click="nextPage">Next</button>
</template>