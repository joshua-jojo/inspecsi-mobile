<template lang="">
    <div
        class="relative justify-between items-center h-[6rem] bg-primary text-primary-content w-full">
        <div
            class="absolute text-3xl ml-[6%] mr-[6%] flex items-center justify-between h-[5rem] my-[1rem] w-[88%]">
            <IonIcon @click="router.back()" :icon="arrowBack"></IonIcon>
        </div>
        <div class="grid place-items-center h-[10%]">
            <div class="flex justify-between items-center h-[5rem] my-[1rem]">
                <div class="flex flex-col drop-shadow-sm">
                    <div class="font-poppins-bold capitalize text-2xl">
                        Penilaian
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-2 px-4 gap-8 flex flex-col">
        <div class="flex flex-col gap-2 capitalize">
            <div class="">
                Identitas Pasien :
                {{
                    !isKepalaRuangan
                        ? penilaian.pertanyaan_1 == "1"
                            ? "Lengkap"
                            : "Tidak Lengkap"
                        : ""
                }}
            </div>
            <div class="flex flex-row gap-9" v-if="isKepalaRuangan">
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan1"
                        v-model="penilaian.pertanyaan_1"
                        :value="1"
                        class="radio" />
                    Lengkap
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan1"
                        v-model="penilaian.pertanyaan_1"
                        :value="0"
                        class="radio" />
                    Tidak Lengkap
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 capitalize">
            <div class="">
                Alasan pasien masuk RS :
                {{
                    !isKepalaRuangan
                        ? penilaian.pertanyaan_2 == "1"
                            ? "Lengkap"
                            : "Tidak Lengkap"
                        : ""
                }}
            </div>
            <div class="flex flex-row gap-9" v-if="isKepalaRuangan">
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan2"
                        v-model="penilaian.pertanyaan_2"
                        :value="1"
                        class="radio" />
                    Lengkap
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan2"
                        v-model="penilaian.pertanyaan_2"
                        :value="0"
                        class="radio" />
                    Tidak Lengkap
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 capitalize">
            <div class="">
                Riwayat Penyakit saat ini :
                {{
                    !isKepalaRuangan
                        ? penilaian.pertanyaan_3 == "1"
                            ? "Lengkap"
                            : "Tidak Lengkap"
                        : ""
                }}
            </div>
            <div class="flex flex-row gap-9" v-if="isKepalaRuangan">
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan3"
                        v-model="penilaian.pertanyaan_3"
                        :value="1"
                        class="radio" />
                    Lengkap
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan3"
                        v-model="penilaian.pertanyaan_3"
                        :value="0"
                        class="radio" />
                    Tidak Lengkap
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 capitalize">
            <div class="">
                Riwayat Kesehatan Masa lalu :
                {{
                    !isKepalaRuangan
                        ? penilaian.pertanyaan_4 == "1"
                            ? "Lengkap"
                            : "Tidak Lengkap"
                        : ""
                }}
            </div>
            <div class="flex flex-row gap-9" v-if="isKepalaRuangan">
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan4"
                        v-model="penilaian.pertanyaan_4"
                        :value="1"
                        class="radio" />
                    Lengkap
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan4"
                        v-model="penilaian.pertanyaan_4"
                        :value="0"
                        class="radio" />
                    Tidak Lengkap
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 capitalize">
            <div class="">
                Pemeriksaan Fisik head to toe :
                {{
                    !isKepalaRuangan
                        ? penilaian.pertanyaan_5 == "1"
                            ? "Lengkap"
                            : "Tidak Lengkap"
                        : ""
                }}
            </div>
            <div class="flex flex-row gap-9" v-if="isKepalaRuangan">
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan5"
                        v-model="penilaian.pertanyaan_5"
                        :value="1"
                        class="radio" />
                    Lengkap
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan5"
                        v-model="penilaian.pertanyaan_5"
                        :value="0"
                        class="radio" />
                    Tidak Lengkap
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 capitalize">
            <div class="">
                Data Psikologis :
                {{
                    !isKepalaRuangan
                        ? penilaian.pertanyaan_6 == "1"
                            ? "Lengkap"
                            : "Tidak Lengkap"
                        : ""
                }}
            </div>
            <div class="flex flex-row gap-9" v-if="isKepalaRuangan">
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan6"
                        v-model="penilaian.pertanyaan_6"
                        :value="1"
                        class="radio" />
                    Lengkap
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan6"
                        v-model="penilaian.pertanyaan_6"
                        :value="0"
                        class="radio" />
                    Tidak Lengkap
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 capitalize">
            <div class="">
                Hasil pemeriksaan Penunjang :
                {{
                    !isKepalaRuangan
                        ? penilaian.pertanyaan_7 == "1"
                            ? "Lengkap"
                            : "Tidak Lengkap"
                        : ""
                }}
            </div>
            <div class="flex flex-row gap-9" v-if="isKepalaRuangan">
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan7"
                        v-model="penilaian.pertanyaan_7"
                        :value="1"
                        class="radio" />
                    Lengkap
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan7"
                        v-model="penilaian.pertanyaan_7"
                        :value="0"
                        class="radio" />
                    Tidak Lengkap
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 capitalize">
            <div class="">
                Terapi dan pengobatan :
                {{
                    !isKepalaRuangan
                        ? penilaian.pertanyaan_8 == "1"
                            ? "Lengkap"
                            : "Tidak Lengkap"
                        : ""
                }}
            </div>
            <div class="flex flex-row gap-9" v-if="isKepalaRuangan">
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan8"
                        v-model="penilaian.pertanyaan_8"
                        :value="1"
                        class="radio" />
                    Lengkap
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan8"
                        v-model="penilaian.pertanyaan_8"
                        :value="0"
                        class="radio" />
                    Tidak Lengkap
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 capitalize">
            <div class="">
                Identifikasi data senjang (data subjektif & objektif) :
                {{
                    !isKepalaRuangan
                        ? penilaian.pertanyaan_9 == "1"
                            ? "Lengkap"
                            : "Tidak Lengkap"
                        : ""
                }}
            </div>
            <div class="flex flex-row gap-9" v-if="isKepalaRuangan">
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan9"
                        v-model="penilaian.pertanyaan_9"
                        :value="1"
                        class="radio" />
                    Lengkap
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan9"
                        v-model="penilaian.pertanyaan_9"
                        :value="0"
                        class="radio" />
                    Tidak Lengkap
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 capitalize">
            <div class="">
                Ketepatan menuliskan penyebab/ Etiologi :
                {{
                    !isKepalaRuangan
                        ? penilaian.pertanyaan_10 == "1"
                            ? "Lengkap"
                            : "Tidak Lengkap"
                        : ""
                }}
            </div>
            <div class="flex flex-row gap-9" v-if="isKepalaRuangan">
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan10"
                        v-model="penilaian.pertanyaan_10"
                        :value="1"
                        class="radio" />
                    Lengkap
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan10"
                        v-model="penilaian.pertanyaan_10"
                        :value="0"
                        class="radio" />
                    Tidak Lengkap
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 capitalize">
            <div class="">
                Ketepatan menuliskan masalah keperawatan :
                {{
                    !isKepalaRuangan
                        ? penilaian.pertanyaan_11 == "1"
                            ? "Lengkap"
                            : "Tidak Lengkap"
                        : ""
                }}
            </div>
            <div class="flex flex-row gap-9" v-if="isKepalaRuangan">
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan11"
                        v-model="penilaian.pertanyaan_11"
                        :value="1"
                        class="radio" />
                    Lengkap
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan11"
                        v-model="penilaian.pertanyaan_11"
                        :value="0"
                        class="radio" />
                    Tidak Lengkap
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 capitalize">
            <div class="">
                Mencerminkan rumusan PE/ PES beerdasarkan SDKI :
                {{
                    !isKepalaRuangan
                        ? penilaian.pertanyaan_12 == "1"
                            ? "Lengkap"
                            : "Tidak Lengkap"
                        : ""
                }}
            </div>
            <div class="flex flex-row gap-9" v-if="isKepalaRuangan">
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan12"
                        v-model="penilaian.pertanyaan_12"
                        :value="1"
                        class="radio" />
                    Lengkap
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan12"
                        v-model="penilaian.pertanyaan_12"
                        :value="0"
                        class="radio" />
                    Tidak Lengkap
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 capitalize">
            <div class="">
                Ketepatan merumuskan prioritas masalah :
                {{
                    !isKepalaRuangan
                        ? penilaian.pertanyaan_3 == "1"
                            ? "Lengkap"
                            : "Tidak Lengkap"
                        : ""
                }}
            </div>
            <div class="flex flex-row gap-9" v-if="isKepalaRuangan">
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan13"
                        v-model="penilaian.pertanyaan_13"
                        :value="1"
                        class="radio" />
                    Lengkap
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan13"
                        v-model="penilaian.pertanyaan_13"
                        :value="0"
                        class="radio" />
                    Tidak Lengkap
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 capitalize">
            <div class="">
                Menuliskan nama dan menandatangani dokumentasi :
                {{
                    !isKepalaRuangan
                        ? penilaian.pertanyaan_4 == "1"
                            ? "Lengkap"
                            : "Tidak Lengkap"
                        : ""
                }}
            </div>
            <div class="flex flex-row gap-9" v-if="isKepalaRuangan">
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan14"
                        v-model="penilaian.pertanyaan_14"
                        :value="1"
                        class="radio" />
                    Lengkap
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan14"
                        v-model="penilaian.pertanyaan_14"
                        :value="0"
                        class="radio" />
                    Tidak Lengkap
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 capitalize">
            <div class="">
                Membuat tujuan :
                {{
                    !isKepalaRuangan
                        ? penilaian.pertanyaan_15 == "1"
                            ? "Lengkap"
                            : "Tidak Lengkap"
                        : ""
                }}
            </div>
            <div class="flex flex-row gap-9" v-if="isKepalaRuangan">
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan15"
                        v-model="penilaian.pertanyaan_15"
                        :value="1"
                        class="radio" />
                    Lengkap
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan15"
                        v-model="penilaian.pertanyaan_15"
                        :value="0"
                        class="radio" />
                    Tidak Lengkap
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 capitalize">
            <div class="">
                Membuat kriteria hasil berdasarka SLKI :
                {{
                    !isKepalaRuangan
                        ? penilaian.pertanyaan_16 == "1"
                            ? "Lengkap"
                            : "Tidak Lengkap"
                        : ""
                }}
            </div>
            <div class="flex flex-row gap-9" v-if="isKepalaRuangan">
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan16"
                        v-model="penilaian.pertanyaan_16"
                        :value="1"
                        class="radio" />
                    Lengkap
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan16"
                        v-model="penilaian.pertanyaan_16"
                        :value="0"
                        class="radio" />
                    Tidak Lengkap
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 capitalize">
            <div class="">
                Rencana keperawatan melibatkan pasien dan keluarga :
                {{
                    !isKepalaRuangan
                        ? penilaian.pertanyaan_17 == "1"
                            ? "Lengkap"
                            : "Tidak Lengkap"
                        : ""
                }}
            </div>
            <div class="flex flex-row gap-9" v-if="isKepalaRuangan">
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan17"
                        v-model="penilaian.pertanyaan_17"
                        :value="1"
                        class="radio" />
                    Lengkap
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan17"
                        v-model="penilaian.pertanyaan_17"
                        :value="0"
                        class="radio" />
                    Tidak Lengkap
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 capitalize">
            <div class="">
                Rencana tindakan mencerminkan tindakan mandiri dan kolaborasi :
                {{
                    !isKepalaRuangan
                        ? penilaian.pertanyaan_18 == "1"
                            ? "Lengkap"
                            : "Tidak Lengkap"
                        : ""
                }}
            </div>
            <div class="flex flex-row gap-9" v-if="isKepalaRuangan">
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan18"
                        v-model="penilaian.pertanyaan_18"
                        :value="1"
                        class="radio" />
                    Lengkap
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan18"
                        v-model="penilaian.pertanyaan_18"
                        :value="0"
                        class="radio" />
                    Tidak Lengkap
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 capitalize">
            <div class="">
                Menuliskan nama dan menandatangan dokumentasi :
                {{
                    !isKepalaRuangan
                        ? penilaian.pertanyaan_19 == "1"
                            ? "Lengkap"
                            : "Tidak Lengkap"
                        : ""
                }}
            </div>
            <div class="flex flex-row gap-9" v-if="isKepalaRuangan">
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan19"
                        v-model="penilaian.pertanyaan_19"
                        :value="1"
                        class="radio" />
                    Lengkap
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan19"
                        v-model="penilaian.pertanyaan_19"
                        :value="0"
                        class="radio" />
                    Tidak Lengkap
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 capitalize">
            <div class="">
                Kesesuaian tindakan dengan perencanaan :
                {{
                    !isKepalaRuangan
                        ? penilaian.pertanyaan_20 == "1"
                            ? "Lengkap"
                            : "Tidak Lengkap"
                        : ""
                }}
            </div>
            <div class="flex flex-row gap-9" v-if="isKepalaRuangan">
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan20"
                        v-model="penilaian.pertanyaan_20"
                        :value="1"
                        class="radio" />
                    Lengkap
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan20"
                        v-model="penilaian.pertanyaan_20"
                        :value="0"
                        class="radio" />
                    Tidak Lengkap
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 capitalize">
            <div class="">
                Mendokumentasikan tindakan secara terperinci (tanggal,jam,
                uaraian tindakan / hasil) :
                {{
                    !isKepalaRuangan
                        ? penilaian.pertanyaan_21 == "1"
                            ? "Lengkap"
                            : "Tidak Lengkap"
                        : ""
                }}
            </div>
            <div class="flex flex-row gap-9" v-if="isKepalaRuangan">
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan21"
                        v-model="penilaian.pertanyaan_21"
                        :value="1"
                        class="radio" />
                    Lengkap
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan21"
                        v-model="penilaian.pertanyaan_21"
                        :value="0"
                        class="radio" />
                    Tidak Lengkap
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 capitalize">
            <div class="">
                Melaksanakan tindakan kolaboratif sesuai kebutuhan :
                {{
                    !isKepalaRuangan
                        ? penilaian.pertanyaan_22 == "1"
                            ? "Lengkap"
                            : "Tidak Lengkap"
                        : ""
                }}
            </div>
            <div class="flex flex-row gap-9" v-if="isKepalaRuangan">
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan22"
                        v-model="penilaian.pertanyaan_22"
                        :value="1"
                        class="radio" />
                    Lengkap
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan22"
                        v-model="penilaian.pertanyaan_22"
                        :value="0"
                        class="radio" />
                    Tidak Lengkap
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 capitalize">
            <div class="">
                Memberikan Pendidikan Kesehatan sesuai rencana :
                {{
                    !isKepalaRuangan
                        ? penilaian.pertanyaan_23 == "1"
                            ? "Lengkap"
                            : "Tidak Lengkap"
                        : ""
                }}
            </div>
            <div class="flex flex-row gap-9" v-if="isKepalaRuangan">
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan23"
                        v-model="penilaian.pertanyaan_23"
                        :value="1"
                        class="radio" />
                    Lengkap
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan23"
                        v-model="penilaian.pertanyaan_23"
                        :value="0"
                        class="radio" />
                    Tidak Lengkap
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 capitalize">
            <div class="">
                Menuliskan nama dan menandatangani dokumentasi :
                {{
                    !isKepalaRuangan
                        ? penilaian.pertanyaan_24 == "1"
                            ? "Lengkap"
                            : "Tidak Lengkap"
                        : ""
                }}
            </div>
            <div class="flex flex-row gap-9" v-if="isKepalaRuangan">
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan24"
                        v-model="penilaian.pertanyaan_24"
                        :value="1"
                        class="radio" />
                    Lengkap
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan24"
                        v-model="penilaian.pertanyaan_24"
                        :value="0"
                        class="radio" />
                    Tidak Lengkap
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 capitalize">
            <div class="">
                Membuat catatan perkembangan SOAP mengacu pada kriteria hasil :
                {{
                    !isKepalaRuangan
                        ? penilaian.pertanyaan_25 == "1"
                            ? "Lengkap"
                            : "Tidak Lengkap"
                        : ""
                }}
            </div>
            <div class="flex flex-row gap-9" v-if="isKepalaRuangan">
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan25"
                        v-model="penilaian.pertanyaan_25"
                        :value="1"
                        class="radio" />
                    Lengkap
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan25"
                        v-model="penilaian.pertanyaan_25"
                        :value="0"
                        class="radio" />
                    Tidak Lengkap
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 capitalize">
            <div class="">
                Memodifikasi rencana tindakan :
                {{
                    !isKepalaRuangan
                        ? penilaian.pertanyaan_26 == "1"
                            ? "Lengkap"
                            : "Tidak Lengkap"
                        : ""
                }}
            </div>
            <div class="flex flex-row gap-9" v-if="isKepalaRuangan">
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan26"
                        v-model="penilaian.pertanyaan_26"
                        :value="1"
                        class="radio" />
                    Lengkap
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan26"
                        v-model="penilaian.pertanyaan_26"
                        :value="0"
                        class="radio" />
                    Tidak Lengkap
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 capitalize">
            <div class="">
                Menuliskan nama dan menandatangani dokumentasi :
                {{
                    !isKepalaRuangan
                        ? penilaian.pertanyaan_27 == "1"
                            ? "Lengkap"
                            : "Tidak Lengkap"
                        : ""
                }}
            </div>
            <div class="flex flex-row gap-9" v-if="isKepalaRuangan">
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan27"
                        v-model="penilaian.pertanyaan_27"
                        :value="1"
                        class="radio" />
                    Lengkap
                </div>
                <div class="flex gap-2 justify-center items-center">
                    <input
                        type="radio"
                        name="pertanyaan27"
                        v-model="penilaian.pertanyaan_27"
                        :value="0"
                        class="radio" />
                    Tidak Lengkap
                </div>
            </div>
        </div>
    </div>
    <div class="mt-20 flex flex-col gap-4 mb-10 px-8">
        <div class="">Jumlah : {{ formatNilai(jumlah) }}</div>
        <div class="form-control">
            <label class="label">Tanggapan Supervisi</label>
            <textarea
                v-if="isKepalaRuangan"
                class="textarea textarea-bordered"
                v-model="penilaian.tanggapan"></textarea>
            <div class="max-w-full break-words overflow-hidden" v-else>
                {{ penilaian.tanggapan }}
            </div>
        </div>
        <div class="form-control">
            <label class="label">Saran dan tidaklanjut</label>
            <textarea
                v-if="isKepalaRuangan"
                class="textarea textarea-bordered"
                v-model="penilaian.saran"></textarea>
            <div class="max-w-full break-words overflow-hidden" v-else>
                {{ penilaian.saran }}
            </div>
        </div>
        <button
            v-if="isKepalaRuangan"
            class="btn btn-primary"
            :class="{
                'btn-disabled': disabled_button,
                'btn-disabled loading': submit_action,
            }"
            @click="submit">
            simpan
        </button>
    </div>
</template>
<script lang="ts" setup>
    import { arrowBack } from "ionicons/icons";
    import { IonIcon } from "@ionic/vue";
    import { useRouter } from "vue-router";
    import { useStore } from "vuex";
    import { ref, watchEffect } from "vue";
    import axios from "axios";

    const router = useRouter();
    const store = useStore();
    const props = defineProps({
        id: String,
    });

    const formatNilai = (data: any) => {
        return Intl.NumberFormat("id-ID", {
            maximumFractionDigits: 0,
        }).format(data ? data : 0);
    };

    const penilaian = ref(store.state.penilaian);
    const jumlah = ref(0);
    const disabled_button = ref(true);
    const submit_action = ref(false);
    const data_penilaian: any = ref(null);

    const isKepalaRuangan = store.state.user?.role_id == 3;

    const get_penilaian = () => {
        axios({
            method: "post",
            url: "penilaian/get",
            data: {
                id: props.id,
            },
        }).then((res) => {
            data_penilaian.value = res.data.data;

            penilaian.value.pertanyaan_1 = data_penilaian.value?.pertanyaan_1;
            penilaian.value.pertanyaan_2 = data_penilaian.value?.pertanyaan_2;
            penilaian.value.pertanyaan_3 = data_penilaian.value?.pertanyaan_3;
            penilaian.value.pertanyaan_4 = data_penilaian.value?.pertanyaan_4;
            penilaian.value.pertanyaan_5 = data_penilaian.value?.pertanyaan_5;
            penilaian.value.pertanyaan_6 = data_penilaian.value?.pertanyaan_6;
            penilaian.value.pertanyaan_7 = data_penilaian.value?.pertanyaan_7;
            penilaian.value.pertanyaan_8 = data_penilaian.value?.pertanyaan_8;
            penilaian.value.pertanyaan_9 = data_penilaian.value?.pertanyaan_9;
            penilaian.value.pertanyaan_10 = data_penilaian.value?.pertanyaan_10;
            penilaian.value.pertanyaan_11 = data_penilaian.value?.pertanyaan_11;
            penilaian.value.pertanyaan_12 = data_penilaian.value?.pertanyaan_12;
            penilaian.value.pertanyaan_13 = data_penilaian.value?.pertanyaan_13;
            penilaian.value.pertanyaan_14 = data_penilaian.value?.pertanyaan_14;
            penilaian.value.pertanyaan_15 = data_penilaian.value?.pertanyaan_15;
            penilaian.value.pertanyaan_16 = data_penilaian.value?.pertanyaan_16;
            penilaian.value.pertanyaan_17 = data_penilaian.value?.pertanyaan_17;
            penilaian.value.pertanyaan_18 = data_penilaian.value?.pertanyaan_18;
            penilaian.value.pertanyaan_19 = data_penilaian.value?.pertanyaan_19;
            penilaian.value.pertanyaan_20 = data_penilaian.value?.pertanyaan_20;
            penilaian.value.pertanyaan_21 = data_penilaian.value?.pertanyaan_21;
            penilaian.value.pertanyaan_22 = data_penilaian.value?.pertanyaan_22;
            penilaian.value.pertanyaan_23 = data_penilaian.value?.pertanyaan_23;
            penilaian.value.pertanyaan_24 = data_penilaian.value?.pertanyaan_24;
            penilaian.value.pertanyaan_25 = data_penilaian.value?.pertanyaan_25;
            penilaian.value.pertanyaan_26 = data_penilaian.value?.pertanyaan_26;
            penilaian.value.pertanyaan_27 = data_penilaian.value?.pertanyaan_27;
            penilaian.value.tanggapan = data_penilaian.value?.tanggapan;
            penilaian.value.saran = data_penilaian.value?.saran;
            penilaian.value.jawaban = data_penilaian.value?.jawaban;
        });
    };

    const submit = () => {
        submit_action.value = true;
        penilaian.value.assessment_job = props.id;
        axios({
            method: "post",
            url: "/penilaian",
            data: penilaian.value,
        })
            .then(() => {
                submit_action.value = false;
                router.back();
            })
            .catch(() => {
                submit_action.value = false;
            });
    };

    watchEffect(() => {
        if (data_penilaian.value && !penilaian.value) {
            penilaian.value.pertanyaan_1 = data_penilaian.value?.pertanyaan_1;
            penilaian.value.pertanyaan_2 = data_penilaian.value?.pertanyaan_2;
            penilaian.value.pertanyaan_3 = data_penilaian.value?.pertanyaan_3;
            penilaian.value.pertanyaan_4 = data_penilaian.value?.pertanyaan_4;
            penilaian.value.pertanyaan_5 = data_penilaian.value?.pertanyaan_5;
            penilaian.value.pertanyaan_6 = data_penilaian.value?.pertanyaan_6;
            penilaian.value.pertanyaan_7 = data_penilaian.value?.pertanyaan_7;
            penilaian.value.pertanyaan_8 = data_penilaian.value?.pertanyaan_8;
            penilaian.value.pertanyaan_9 = data_penilaian.value?.pertanyaan_9;
            penilaian.value.pertanyaan_10 = data_penilaian.value?.pertanyaan_10;
            penilaian.value.pertanyaan_11 = data_penilaian.value?.pertanyaan_11;
            penilaian.value.pertanyaan_12 = data_penilaian.value?.pertanyaan_12;
            penilaian.value.pertanyaan_13 = data_penilaian.value?.pertanyaan_13;
            penilaian.value.pertanyaan_14 = data_penilaian.value?.pertanyaan_14;
            penilaian.value.pertanyaan_15 = data_penilaian.value?.pertanyaan_15;
            penilaian.value.pertanyaan_16 = data_penilaian.value?.pertanyaan_16;
            penilaian.value.pertanyaan_17 = data_penilaian.value?.pertanyaan_17;
            penilaian.value.pertanyaan_18 = data_penilaian.value?.pertanyaan_18;
            penilaian.value.pertanyaan_19 = data_penilaian.value?.pertanyaan_19;
            penilaian.value.pertanyaan_20 = data_penilaian.value?.pertanyaan_20;
            penilaian.value.pertanyaan_21 = data_penilaian.value?.pertanyaan_21;
            penilaian.value.pertanyaan_22 = data_penilaian.value?.pertanyaan_22;
            penilaian.value.pertanyaan_23 = data_penilaian.value?.pertanyaan_23;
            penilaian.value.pertanyaan_24 = data_penilaian.value?.pertanyaan_24;
            penilaian.value.pertanyaan_25 = data_penilaian.value?.pertanyaan_25;
            penilaian.value.pertanyaan_26 = data_penilaian.value?.pertanyaan_26;
            penilaian.value.pertanyaan_27 = data_penilaian.value?.pertanyaan_27;
            penilaian.value.tanggapan = data_penilaian.value?.tanggapan;
            penilaian.value.saran = data_penilaian.value?.saran;
            penilaian.value.jawaban = data_penilaian.value?.jawaban;
        }
        const {
            pertanyaan_1,
            pertanyaan_2,
            pertanyaan_3,
            pertanyaan_4,
            pertanyaan_5,
            pertanyaan_6,
            pertanyaan_7,
            pertanyaan_8,
            pertanyaan_9,
            pertanyaan_10,
            pertanyaan_11,
            pertanyaan_12,
            pertanyaan_13,
            pertanyaan_14,
            pertanyaan_15,
            pertanyaan_16,
            pertanyaan_17,
            pertanyaan_18,
            pertanyaan_19,
            pertanyaan_20,
            pertanyaan_21,
            pertanyaan_22,
            pertanyaan_23,
            pertanyaan_24,
            pertanyaan_25,
            pertanyaan_26,
            pertanyaan_27,
            saran,
            tanggapan,
        } = penilaian.value;
        jumlah.value = 0;
        jumlah.value =
            ((pertanyaan_1 +
                pertanyaan_2 +
                pertanyaan_3 +
                pertanyaan_4 +
                pertanyaan_5 +
                pertanyaan_6 +
                pertanyaan_7 +
                pertanyaan_8 +
                pertanyaan_9 +
                pertanyaan_10 +
                pertanyaan_11 +
                pertanyaan_12 +
                pertanyaan_13 +
                pertanyaan_14 +
                pertanyaan_15 +
                pertanyaan_16 +
                pertanyaan_17 +
                pertanyaan_18 +
                pertanyaan_19 +
                pertanyaan_20 +
                pertanyaan_21 +
                pertanyaan_22 +
                pertanyaan_23 +
                pertanyaan_24 +
                pertanyaan_25 +
                pertanyaan_26 +
                pertanyaan_27) /
                48) *
            100;
        penilaian.value.jumlah = jumlah.value;
        if (saran && tanggapan) {
            disabled_button.value = false;
        } else {
            disabled_button.value = true;
        }
    });

    get_penilaian();
</script>
<style lang=""></style>
