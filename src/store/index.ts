import { createStore } from 'vuex'
const store = createStore({
    state() {
        return {
            user: {},
            token: null,
            assessment: {
                id:null,
                pasien_id:null,
                pasien: {
                    nama: null,
                    no_rm: null,
                    tanggal_lahir: null,
                    diagnosa_medis: null,
                    ruang_rawat: null,
                    pendidikan: null,
                    tanggal_masuk: null,
                    tanggal_asesmen: null,
                },
                informasi: {
                    riwayat_kesehatan: {
                        keluhan_utama: "",
                        riwayat_kesehatan_sekarang: "",
                        riwayat_kesehatan_dulu: {
                            penyakit_genetik: {
                                status: null,
                                keterangan: "",
                                sejak_kapan: "",
                            },
                            trauma: false,
                            operasi: false,
                            lainnya: {
                                status: false,
                                penyakit: {
                                    keterangan: "",
                                    sejak_kapan: "",
                                }
                            },
                        },
                        riwayat_kesehatan_keluarga: null,
                        auto_anamnesa: {
                            status: true,
                            pemberi_informasi: null,
                        }
                    },
                    status_fisik: {
                        respirasi: {
                            batuk: {
                                status : false,
                                lama_sakit : null
                            },
                            sputum: {
                                status : false,
                                jenis_sputum : null
                            },
                            sesak_nafas: {
                                status : false,
                                keterangan : null
                            },
                            penggunaan_alat_bantu_nafas: false,
                        },
                        sirkulasi: {
                            tekanan_darah: null,
                            suhu: null,
                            nadi: null,
                            pernapasan: null,
                            spo2: null,
                            crt: null,
                            akral: "hangat",
                        },
                        nutrisi_dan_cairan: {
                            kesulitan_minum: false,
                            status_puasa: false,
                            turgor_kulit: "baik",
                            edema: {
                                status : false,
                                keterangan : null
                            },
                            muntah: {
                                status : false,
                                keterangan : null
                            },
                            kebutuhan_nutrisi: "enterasi",
                            tb: null,
                            bb: null,
                            imt: null,
                        },
                        eliminasi: {
                            bab: {
                                status : "tidak ada masalah",

                            },
                            bak: {
                                status : "tidak ada masalah",
                            },
                        },
                        aktifitas_dan_istirahat: {
                            pola_tidur: null,
                            durasi: null,
                            gangguan_tidur: {
                                status : false
                            },
                        },
                        neusensori: {
                            kesadaran: null,
                            cgs: null,
                            kekuatan_otot: null,
                        },
                        reproduksi_dan_seksualitas: {
                            status : "tidak ada gangguan"
                        },
                    },
                    psiko_sosial_spiritual: {
                        psikologis: {
                            status : 'tenang',
                        },
                        sosial: {
                            status_perkawinan: null,
                            pola_interaksi: "baik",
                            support_system: "keluarga",
                        },
                        spiritual: {
                            agama: null,
                            keyakinan_pelayanan_kesehatan: null,
                            kebutuhan_kerohanian: null,
                            kebutuhan_privasi_khusus: null,
                        }
                    },
                    ekonomi: {
                        status_pekerjaan: null,
                        pembiayaan_kesehatan: null,
                        penanggung_jawab_pasian: null,
                    },
                    riwayat_alergi: {
                        status: false,
                        alergi: null,
                        reaksi_alergi: null,
                    },
                    asesmen_nyeri: {
                        status :  false
                    },
                    kebutuhan_edukasi: {
                        pilihan: []
                    },
                    perencanaan_pemulangan_pasien: [],
                    riwayat_penggunaan_obat: {
                        obat: [],
                        asesmen_populasi_khusus: {
                            populasi : [],
                            tambahan : null
                        },
                    },
                    hasil_pemeriksaan_lanjutan: {
                        labolatorium: null,
                        rongent: null,
                        lainnya: null,
                    },
                    analisa_data: [],
                },
                analisa: {
                    fisiologis: {
                        respirasi: null,
                        sirkulasi: null,
                        nutrisi_atau_cairan: null,
                        eliminasi: null,
                        neurosensori: null,
                        reproduksi_seksualitas: null,
                    },
                    psikologis: {
                        nyeri_kenyamanan: null,
                        itegritas_ego: null,
                        pertumbuhan_perkembangan: null,
                    },
                    relasional: {
                        interaksi_sosial: null,
                    },
                    perilaku: {
                        kebersihan_diri: null,
                        penyuluhan_pembelajaran: null,
                    },
                    lingkungan: {
                        keamanan_proteksi: null,
                    }
                }
            },
            judul_job: null
        }
    },
    getters: {
        // resetAssessment: (state) => {
        //     state.assessment = {
        //         pasien: {
        //             nama: null,
        //             no_rm: null,
        //             tanggal_lahir: null,
        //             diagnosa_medis: null,
        //             ruang_rawat: null,
        //             pendidikan: null,
        //             tanggal_masuk: null,
        //             tanggal_asesmen: null,
        //         },
        //         informasi: {
        //             riwayat_kesehatan: {
        //                 keluhan_utama: null,
        //                 riwayat_kesehatan_sekarang: null,
        //                 riwayat_kesehatan_dulu: {
        //                     penyakit_genetik: {
        //                         status: null,
        //                         keterangan: null,
        //                         sejak_kapan: null,
        //                     },
        //                     trauma: null,
        //                     operasi: null,
        //                     lainnya: [],
        //                 },
        //                 riwayat_kesehatan_keluarga: null,
        //                 keterangan: null,
        //                 auto_anamnesa: {
        //                     status: null,
        //                     pemberi_informasi: null,
        //                 }
        //             },
        //             status_fisik: {
        //                 respirasi: {
        //                     batuk: null,
        //                     sputum: null,
        //                     sesak_nafas: null,
        //                     penggunaan_alat_bantu_nafas: null,
        //                 },
        //                 sirkulasi: {
        //                     tekanan_darah: null,
        //                     suhu: null,
        //                     nadi: null,
        //                     pernapasan: null,
        //                     spo2: null,
        //                     crt: null,
        //                     akral: null,
        //                 },
        //                 nutrisi_dan_cairan: {
        //                     kesulitan_minum: null,
        //                     status_puasa: null,
        //                     turgor_kulit: null,
        //                     edema: null,
        //                     muntah: null,
        //                     kebutuhan_nutrisi: null,
        //                     tb: null,
        //                     bb: null,
        //                     imt: null,
        //                 },
        //                 eliminasi: {
        //                     bab: {
        //                         tidak_ada_masalah: null,
        //                         konsistensi: null,
        //                         frekuensi: null,
        //                         konstipasi: null,
        //                         diare: null,
        //                     },
        //                     bak: {
        //                         tidak_ada_masalah: null,
        //                         frekuensi: null,
        //                         warna_urine: null,
        //                         retensi_urine: null,
        //                         haematuri: null,
        //                         inkontinensia: null,
        //                         poli_uri: null,
        //                         nocturi: null,
        //                     },
        //                 },
        //                 aktifitas_dan_istirahat: {
        //                     pola_tidur: null,
        //                     durasi: null,
        //                     gangguan_tidur: null,
        //                 },
        //                 neusensori: {
        //                     kesadaran: null,
        //                     cgs: null,
        //                     kekuatan_otot: null,
        //                 },
        //                 reproduksi_dan_seksualitas: null,
        //             },
        //             psiko_sosial_spiritual: {
        //                 psikologis: null,
        //                 sosial: {
        //                     status_perkawinan: null,
        //                     pola_interaksi: null,
        //                     support_system: null,
        //                 },
        //                 spiritual: {
        //                     agama: null,
        //                     keyakinan_pelayanan_kesehatan: null,
        //                     kebutuhan_kerohanian: null,
        //                     kebutuhan_privasi_khusus: null,
        //                 }
        //             },
        //             ekonomi: {
        //                 status_pekerjaan: null,
        //                 pembiayaan_kesehatan: null,
        //                 penanggung_jawab_pasian: null,
        //             },
        //             riwayat_alergi: {
        //                 status: null,
        //                 alergi: null,
        //                 reaksi_alergi: null,
        //             },
        //             asesmen_nyeri: {
        //                 kapan: null,
        //                 faktor: null,
        //                 karakteristik: null,
        //                 lokasi: null,
        //                 skala: null,
        //                 durasi: null,
        //             },
        //             kebutuhan_edukasi: {
        //                 perawatan: null,
        //                 nutrisi: null,
        //                 manajemen_nyeri: null,
        //                 perawatan_luka: null,
        //                 pengobatan: null,
        //                 aktifitas_dan_latihan: null,
        //                 pencegahan_infeksi: null,
        //                 lainnya: null,
        //             },
        //             perencanaan_pemulangan_pasien: {
        //                 umur_diatas_65: null,
        //                 keterbatasan_mobilitas: null,
        //                 perawatan_pengobatan_lanjutan: null,
        //                 bantuan_aktifitas: null,
        //             },
        //             riwayat_penggunaan_obat: {
        //                 obat: [],
        //                 asesmen_populasi_khusus: null,
        //             },
        //             hasil_pemeriksaan_lanjutan: {
        //                 labolatorium: null,
        //                 rongent: null,
        //                 lainnya: null,
        //             },
        //             analisa_data: [],
        //         },
        //         analisa: {
        //             fisiologis: {
        //                 respirasi: null,
        //                 sirkulasi: null,
        //                 nutrisi_atau_cairan: null,
        //                 eliminasi: null,
        //                 neurosensori: null,
        //                 reproduksi_seksualitas: null,
        //             },
        //             psikologis: {
        //                 nyeri_kenyamanan: null,
        //                 itegritas_ego: null,
        //                 pertumbuhan_perkembangan: null,
        //             },
        //             relasional: {
        //                 interaksi_sosial: null,
        //             },
        //             perilaku: {
        //                 kebersihan_diri: null,
        //                 penyuluhan_pembelajaran: null,
        //             },
        //             lingkungan: {
        //                 keamanan_proteksi: null,
        //             }
        //         }
        //     }
        // }
    }
})

export default store