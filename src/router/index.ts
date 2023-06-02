import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/firsttime'
  },
  {
    path: '/firsttime',
    name: 'firsttime',
    component: () => import('../views/first time/firstTimePage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/loginPage.vue')
  },
  {
    path: '/kepalaruangan',
    name: 'admin',
    component: () => import('../views/layout/adminLayout.vue'),
    children: [
      {
        path: '/home',
        name: 'admin.home',
        component: () => import('../views/admin/dashboard/dashboardPage.vue')
      },
      {
        path: '/archive',
        name: 'admin.archive',
        component: () => import('../views/admin/archive/archivePage.vue')
      },
      {
        path: '/archive/rolelist/:id',
        name: 'admin.archive.rolelist',
        props: true,
        component: () => import('../views/admin/assessment/assessmentRoleListPage.vue'),
      },
      {
        path: '/users',
        name: 'admin.users',
        component: () => import('../views/admin/users/usersPage.vue')
      },
      {
        path: '/profile',
        name: 'admin.profile',
        component: () => import('../views/admin/profile/profilePage.vue')
      },
      {
        path: '/job',
        name: 'admin.job',
        component: () => import("../views/admin/assessment/assessmentJobPage/jobLayout.vue"),
        children: [
          {
            path: 'identitaspasien',
            name: "admin.job.identitaspasien",
            component: () => import("../views/admin/assessment/assessmentJobPage/identitasPasienPage.vue")
          },
          {
            path: 'riwayatkesehatan',
            name: "admin.job.riwayatkesehatan",
            component: () => import("../views/admin/assessment/assessmentJobPage/riwayatKesehatan.vue")
          },
          {
            path: 'statusfisik',
            name: "admin.job.statusfisik",
            component: () => import("../views/admin/assessment/assessmentJobPage/statusFisikPage.vue")
          },
          {
            path: 'psikososialspiritual',
            name: "admin.job.psikososialspiritual",
            component: () => import("../views/admin/assessment/assessmentJobPage/psikoSosialSpiritualPage.vue")
          },
          {
            path: 'ekonomi',
            name: "admin.job.ekonomi",
            component: () => import("../views/admin/assessment/assessmentJobPage/ekonomiPage.vue")
          },
          {
            path: 'riwayatalergi',
            name: "admin.job.riwayatalergi",
            component: () => import("../views/admin/assessment/assessmentJobPage/riwayatAlergiPage.vue")
          },
          {
            path: 'asesmennyeri',
            name: "admin.job.asesmennyeri",
            component: () => import("../views/admin/assessment/assessmentJobPage/asesmenNyeripage.vue")
          },
          {
            path: 'kebutuhanedukasi',
            name: "admin.job.kebutuhanedukasi",
            component: () => import("../views/admin/assessment/assessmentJobPage/kebutuhanEdukasiPage.vue")
          },
          {
            path: 'perencanaanpemulanganpasien',
            name: "admin.job.perencanaanpemulanganpasien",
            component: () => import("../views/admin/assessment/assessmentJobPage/perencanaanPemulanganPasienPage.vue")
          },
          {
            path: 'riwayatpenggunaanobat',
            name: "admin.job.riwayatpenggunaanobat",
            component: () => import("../views/admin/assessment/assessmentJobPage/riwayatPenggunaanObatPage.vue")
          },
          {
            path: 'hasilpemeriksaanpenunjang',
            name: "admin.job.hasilpemeriksaanpenunjang",
            component: () => import("../views/admin/assessment/assessmentJobPage/hasilPemeriksaanPenunjangPage.vue")
          },
        ]
      },
    ]
  },
  {
    path: '/assessment',
    name: 'assessment',
    component: () => import('../views/admin/assessment/assessmentPage.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(() => {
  document.getElementById('screenLayout')?.scrollIntoView({ behavior: 'smooth' });
})

export default router
