import store from "@/store";
import { Preferences } from "@capacitor/preferences";
import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/firsttime",
    },
    {
        path: "/firsttime",
        name: "firsttime",
        component: () => import("../views/first time/firstTimePage.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/login/loginPage.vue"),
    },
    {
        path: "/kepalaruangan",
        name: "admin",
        component: () => import("../views/layout/adminLayout.vue"),
        children: [
            {
                path: "/materi",
                name: "admin.materi",
                component: () => import("../views/admin/materi/materiPage.vue"),
            },
            {
                path: "/menu",
                name: "admin.menu",
                component: () => import("../views/admin/menu/menuPage.vue"),
            },
            {
                path: "/home",
                name: "admin.home",
                component: () =>
                    import("../views/admin/dashboard/dashboardPage.vue"),
            },
            {
                path: "/archive",
                name: "admin.archive",
                component: () =>
                    import("../views/admin/archive/archivePage.vue"),
            },
            {
                path: "/archive/rolelist/:id",
                name: "admin.archive.rolelist",
                props: true,
                component: () =>
                    import(
                        "../views/admin/assessment/assessmentRoleListPage.vue"
                    ),
            },
            {
                path: "/users",
                name: "admin.users",
                component: () => import("../views/admin/users/usersPage.vue"),
            },
            {
                path: "/profile",
                name: "admin.profile",
                component: () =>
                    import("../views/admin/profile/profilePage.vue"),
            },
            {
                path: "/job",
                name: "admin.job",
                component: () =>
                    import(
                        "../views/admin/assessment/assessmentJobPage/jobLayout.vue"
                    ),
                children: [
                    {
                        path: "identitaspasien",
                        name: "admin.job.identitaspasien",
                        component: () =>
                            import(
                                "../views/admin/assessment/assessmentJobPage/identitasPasienPage.vue"
                            ),
                    },
                    {
                        path: "riwayatkesehatan",
                        name: "admin.job.riwayatkesehatan",
                        component: () =>
                            import(
                                "../views/admin/assessment/assessmentJobPage/riwayatKesehatan.vue"
                            ),
                    },
                    {
                        path: "statusfisik",
                        name: "admin.job.statusfisik",
                        component: () =>
                            import(
                                "../views/admin/assessment/assessmentJobPage/statusFisikPage.vue"
                            ),
                    },
                    {
                        path: "psikososialspiritual",
                        name: "admin.job.psikososialspiritual",
                        component: () =>
                            import(
                                "../views/admin/assessment/assessmentJobPage/psikoSosialSpiritualPage.vue"
                            ),
                    },
                    {
                        path: "ekonomi",
                        name: "admin.job.ekonomi",
                        component: () =>
                            import(
                                "../views/admin/assessment/assessmentJobPage/ekonomiPage.vue"
                            ),
                    },
                    {
                        path: "riwayatalergi",
                        name: "admin.job.riwayatalergi",
                        component: () =>
                            import(
                                "../views/admin/assessment/assessmentJobPage/riwayatAlergiPage.vue"
                            ),
                    },
                    {
                        path: "asesmennyeri",
                        name: "admin.job.asesmennyeri",
                        component: () =>
                            import(
                                "../views/admin/assessment/assessmentJobPage/asesmenNyeripage.vue"
                            ),
                    },
                    {
                        path: "kebutuhanedukasi",
                        name: "admin.job.kebutuhanedukasi",
                        component: () =>
                            import(
                                "../views/admin/assessment/assessmentJobPage/kebutuhanEdukasiPage.vue"
                            ),
                    },
                    {
                        path: "perencanaanpemulanganpasien",
                        name: "admin.job.perencanaanpemulanganpasien",
                        component: () =>
                            import(
                                "../views/admin/assessment/assessmentJobPage/perencanaanPemulanganPasienPage.vue"
                            ),
                    },
                    {
                        path: "riwayatpenggunaanobat",
                        name: "admin.job.riwayatpenggunaanobat",
                        component: () =>
                            import(
                                "../views/admin/assessment/assessmentJobPage/riwayatPenggunaanObatPage.vue"
                            ),
                    },
                    {
                        path: "hasilpemeriksaanpenunjang",
                        name: "admin.job.hasilpemeriksaanpenunjang",
                        component: () =>
                            import(
                                "../views/admin/assessment/assessmentJobPage/hasilPemeriksaanPenunjangPage.vue"
                            ),
                    },
                    {
                        path: "analisis_data",
                        name: "admin.job.analisis_data",
                        component: () =>
                            import(
                                "../views/admin/assessment/assessmentJobPage/analisis_data_page.vue"
                            ),
                    },
                    {
                        path: "masalah_keperawatan",
                        name: "admin.job.masalah_keperawatan",
                        component: () =>
                            import(
                                "../views/admin/assessment/assessmentJobPage/masalah_keperawatan_page.vue"
                            ),
                    },
                    {
                        path: "catatan_perkembangan_pasien/:id",
                        name: "admin.job.catatan_perkembangan_pasien",
                        component: () =>
                            import(
                                "../views/admin/assessment/assessmentJobPage/catatan_perkembangan_pasien_page.vue"
                            ),
                        props: true,
                    },
                    {
                        path: "assessment_view_select/:id",
                        name: "admin.job.assessment_view_select",
                        component: () =>
                            import(
                                "../views/admin/assessment/assessment_view_page.vue"
                            ),
                        props: true,
                    },
                    {
                        path: "assessment_view_catatan_pasien/:id",
                        name: "admin.job.assessment_view_catatan_pasien",
                        component: () =>
                            import(
                                "../views/admin/assessment/assessment_view_catatan_pasien.vue"
                            ),
                        props: true,
                    },
                    {
                        path: "assessment_view_data_pasien/:id",
                        name: "admin.job.assessment_view_data_pasien",
                        component: () =>
                            import(
                                "../views/admin/assessment/assessment_view_data_pasien.vue"
                            ),
                        props: true,
                    },
                ],
            },
        ],
    },
    {
        path: "/assessment",
        children: [
            {
                path: "",
                name: "assessment",
                component: () =>
                    import("../views/admin/assessment/assessmentPage.vue"),
            },
        ],
    },
    {
        path: "/petunjuk",
        children: [
            {
                path: "",
                name: "petunjuk",
                component: () =>
                    import("../views/admin/petunjuk/petunjukPage.vue"),
            },
        ],
    },
    {
        path: "/tentang",
        children: [
            {
                path: "",
                name: "tentang",
                component: () =>
                    import("../views/admin/tentang/tentangPage.vue"),
            },
        ],
    },
    {
        path: "/penilaian",
        children: [
            {
                path: "/:id",
                name: "penilaian",
                component: () =>
                    import("../views/admin/penilaian/penilaianPage.vue"),
                props: true,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

const getLogin = async () => {
    const { value }: any = await Preferences.get({ key: "login" });
    const data: any = await JSON.parse(value);
    return data;
};
const first_install = async () => {
    const { value }: any = await Preferences.get({ key: "first_install" });
    const data: any = await JSON.parse(value);
    return data;
};



router.beforeEach(async (to, from) => {
    document
        .getElementById("screenLayout")
        ?.scrollIntoView({ behavior: "smooth" });
    if (to.name == "firsttime") {
        const data_login: any = await getLogin();
        if (data_login) {
            store.state.user = await data_login.user;
            store.state.token = await data_login.token;
            return { name: "admin.menu" };
        }

        if(await first_install()){
          return {
            name : "login"
          }
        }
    }
});

export default router;
