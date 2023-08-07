<template>
    <div class="h-screen">
        <div
            class="h-[17%] grid place-items-center uppercase font-fugazone text-4xl text-[#537FE7]"
        >
            inspecsi
        </div>
        <swiper
            :spaceBetween="30"
            :pagination="{
                clickable: true,
            }"
            :modules="modules"
            class="mySwiper h-[65%]"
        >
            <swiper-slide>
                <slide1></slide1>
            </swiper-slide>
            <swiper-slide>
                <slide2></slide2>
            </swiper-slide>
            <swiper-slide>
                <slide3></slide3>
            </swiper-slide>
            <swiper-slide>
                <slide4></slide4>
            </swiper-slide>
        </swiper>
        <div class="h-[15%] grid place-items-center">
            <button
                @click="go_login"
                class="btn btn-primary rounded-full gap-2 w-[40%]"
            >
                <div class="text-lg">skip</div>
                <IonIcon :icon="arrowForward"></IonIcon>
            </button>
        </div>
    </div>
</template>
<script lang="ts">
import { IonIcon } from "@ionic/vue";
import { arrowForward } from "ionicons/icons";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import slide1 from "./slide_1.vue";
import slide2 from "./slide_2.vue";
import slide3 from "./slide_3.vue";
import slide4 from "./slide_4.vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import router from "@/router";
import { Preferences } from "@capacitor/preferences";

export default {
    components: {
        slide1,
        slide2,
        slide3,
        slide4,
        Swiper,
        SwiperSlide,
        IonIcon,
    },
    setup() {
        const go_login = () => {
            router.push({
                name: "login",
            });
        };
        const first_install = async () => {
            await Preferences.set({
                key: "first_install",
                value: JSON.stringify(true),
            });
        };
        first_install()
        return {
            modules: [Pagination],
            arrowForward,
            go_login,
        };
    },
};
</script>
