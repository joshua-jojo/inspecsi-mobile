<template lang="">
    <div class="relative justify-between items-center h-[5rem] my-[1rem]">
        <div
            @click="route.push({ name: 'admin.menu' })"
            class="absolute text-3xl ml-[6%] flex items-center h-[5rem] my-[1rem]">
            <IonIcon :icon="arrowBack"></IonIcon>
        </div>
        <div class="grid place-items-center h-[10%]">
            <div class="flex justify-between items-center h-[5rem] my-[1rem]">
                <div class="flex flex-col drop-shadow-sm">
                    <div class="font-poppins-bold capitalize text-2xl">
                        Profile
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div
        class="card flex justify-between gap-2 my-8 bg-primary rounded-[2rem] shadow">
        <div class="card-body flex flex-col gap-3 p-11">
            <div class="grid place-items-center gap-6">
                <div class="flex justify-center items-center h-[8rem]">
                    <div
                        class="avatar placeholder"
                        v-if="!store.state.user?.foto">
                        <div
                            class="bg-base-300 text-neutral-content rounded-full w-40">
                            <span class="text-6xl">{{
                                store.state.user?.name.slice(0, 1)
                            }}</span>
                        </div>
                    </div>
                    <div class="avatar placeholder" v-else>
                        <div
                            class="bg-base-300 text-neutral-content rounded-full w-40">
                            <img
                                :src="store.state.user?.foto"
                                class="h-full w-full object-cover" />
                        </div>
                    </div>
                </div>
                <div
                    class="grid place-items-center capitalize font-poppins-bold text-white gap-1">
                    <div class="text-[28px] text-center">
                        {{ store.state.user?.name }}
                    </div>
                    <div class="text-[17px]">
                        {{ store.state.user?.role?.nama }}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="grid place-items-center gap-3 px-2 mb-5">
        <div
            v-show="false"
            class="card bg-[#E9F8F9] w-full text-primary text-xl shadow">
            <div
                class="px-6 py-4 flex capitalize font-poppins-semibold h-[5rem] gap-8 items-center">
                <div
                    class="flex justify-center items-center h-full shadow w-[2rem]">
                    <img
                        src="../../../assets/icons/icon_list_.svg"
                        class="h-[40%]"
                        alt=""
                        srcset="" />
                </div>
                <div class="">ubah bio</div>
            </div>
        </div>
        <div class="card bg-[#E9F8F9] w-full text-primary text-xl shadow">
            <label
                for="ubah_foto"
                class="capitalize font-poppins-semibold btn btn-primary btn-outline">
                <div
                    class="flex justify-center items-center h-full w-[2rem]"></div>
                <div class="">Ubah Foto</div>
            </label>
        </div>
        <div class="card bg-[#E9F8F9] w-full text-primary text-xl shadow">
            <label
                for="ubah profil"
                @click="getUser"
                class="capitalize font-poppins-semibold btn btn-primary btn-outline">
                <div class="flex justify-center items-center h-full w-[2rem]">
                    <!-- <img src="../../../assets/icons/icon_lockclosed_.svg" class="h-[60%]" alt="" srcset=""> -->
                </div>
                <div class="">Ubah Profil</div>
            </label>
        </div>
        <div class="card bg-[#E9F8F9] w-full text-primary text-xl shadow">
            <label
                for="ubahPassword"
                class="capitalize font-poppins-semibold btn btn-primary btn-outline">
                <div class="flex justify-center items-center h-full w-[2rem]">
                    <img
                        src="../../../assets/icons/icon_lockclosed_.svg"
                        class="h-[60%]"
                        alt=""
                        srcset="" />
                </div>
                <div class="">Ubah password</div>
            </label>
        </div>
    </div>

    <modalComponent id="ubahPassword" title="Ubah Password">
        <div class="form-control">
            <label class="label"> Password Lama </label>
            <input
                v-model="formPassword.old_password"
                type="password"
                class="input input-bordered"
                placeholder="Masukkan Password Lama" />
            <label class="label" v-if="formPassword.errors.old_password">
                <span class="label-text text-error">Password Lama</span>
            </label>
        </div>
        <div class="form-control">
            <label class="label"> Password baru </label>
            <input
                type="password"
                v-model="formPassword.password"
                class="input input-bordered"
                placeholder="Masukkan password baru" />
            <label class="label" v-if="formPassword.errors.password">
                <span class="label-text text-error">Password baru</span>
            </label>
        </div>
        <div class="form-control">
            <label class="label"> Konfirmasi password baru </label>
            <input
                type="password"
                v-model="formPassword.password_confirmation"
                class="input input-bordered"
                placeholder="Konfirmasi password baru" />
        </div>
        <template v-slot:action>
            <button
                class="btn btn-primary"
                @click="submitChangePassword"
                :class="{
                    'loading btn-disabled': formPassword.processing,
                }">
                Simpan
            </button>
        </template>
    </modalComponent>

    <modalComponent id="ubah_foto" title="Ubah Foto Profil">
        <div class="flex justify-center items-center gap-12 flex-col">
            <div
                class="flex justify-center items-center h-[8rem] drop-shadow-md">
                <div
                    class="h-32 w-32 overflow-hidden rounded-full"
                    v-if="ubahFotoProfil.preview">
                    <img
                        :src="ubahFotoProfil.preview"
                        class="w-full h-full object-cover" />
                </div>
                <div class="avatar placeholder" v-else>
                    <div
                        v-if="!store.state.user?.foto"
                        class="bg-base-300 text-neutral-content rounded-full w-32">
                        <span class="text-6xl">{{
                            store.state.user?.name.slice(0, 1)
                        }}</span>
                    </div>
                    <div class="h-32 w-32 overflow-hidden rounded-full" v-else>
                        <img
                            :src="store.state.user?.foto"
                            class="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
            <div class="form-control w-full">
                <div class="text-sm italic opacity-60 mb-2">
                    *login kembali setelah mengubah profil
                </div>
                <input
                    type="file"
                    class="file-input file-input-bordered"
                    @change="getImage($event.target.files)" />
                <label class="text-error">
                    {{ ubahFotoProfil.errors.foto }}
                </label>
            </div>
        </div>

        <template v-slot:action>
            <button
                class="btn btn-success"
                @click="submitImage"
                :class="{
                    'btn-disabled loading': ubahFotoProfil.processing,
                }">
                Simpan
            </button>
        </template>
    </modalComponent>

    <modalComponent id="ubah profil" title="Ubah Data Profil">
        <div class="text-sm italic opacity-60">
            *login kembali setelah mengubah profil
        </div>
        <div class="flex flex-col gap-4">
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Nama</span>
                </label>
                <input
                    type="text"
                    class="input input-bordered input-sm"
                    v-model="ubahProfil.name" />
                <label class="label">
                    <span class="label-text-alt text-error">{{
                        ubahProfil.errors.name
                    }}</span>
                </label>
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Email</span>
                </label>
                <input
                    type="text"
                    class="input input-bordered input-sm"
                    v-model="ubahProfil.email" />
                <label class="label">
                    <span class="label-text-alt text-error">{{
                        ubahProfil.errors.email
                    }}</span>
                </label>
            </div>
        </div>

        <template v-slot:action>
            <button
                @click="submitUpdateProfil"
                :class="{
                    'loading btn-disabled': ubahProfil.processing,
                }"
                class="btn btn-success">
                Simpan
            </button>
        </template>
    </modalComponent>
</template>
<script lang="ts" setup>
    import { useStore } from "vuex";
    import { useRouter } from "vue-router";
    import modalComponent from "@/views/components/modal/modalComponent.vue";
    import useForm from "form-helper-axios";
    import axios from "axios";
    import { IonIcon } from "@ionic/vue";
    import { arrowBack } from "ionicons/icons";
    import { Preferences } from "@capacitor/preferences";
    import router from "@/router";

    const store = useStore();
    const route = useRouter();

    const formPassword = useForm({
        old_password: null,
        password: null,
        password_confirmation: null,
    });

    const submitChangePassword = () => {
        formPassword.post("/user/password/ubah", {
            onSuccess: (res: any) => {
                document.getElementById("ubahPassword")?.click();
                axios.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${res.token}`;
            },
        });
    };

    const ubahProfil = useForm({
        id: null,
        name: "",
        email: "",
    });

    const getUser = async () => {
        const { value } = await Preferences.get({ key: "login" });
        const dataUser: any = await JSON.parse(value as any);
        ubahProfil.id = dataUser?.user.id;
        ubahProfil.name = dataUser?.user.name;
        ubahProfil.email = dataUser?.user.email;
    };

    const submitUpdateProfil = () => {
        ubahProfil.post("/profil/ubah-profil", {
            onSuccess: () => {
                document.getElementById("ubah profil")?.click();
                Preferences.remove({ key: "login" });
                router.push("/login");
            },
            onError: (response: any) => {
                console.log(response);
            },
        });
    };

    const ubahFotoProfil = useForm({
        id: null,
        foto: null,
        preview: null,
    });

    const getImage = async (fileData: any) => {
        const [file] = fileData;
        ubahFotoProfil.foto = file;
        ubahFotoProfil.id = store.state.user?.id;
        ubahFotoProfil.preview = URL.createObjectURL(file);
    };

    const submitImage = () => {
        ubahFotoProfil.post("/profil/foto-profil", {
            onSuccess: () => {
                document.getElementById("ubah_foto")?.click();
                router.push("/login");
            },
        });
    };
</script>
<style lang=""></style>
