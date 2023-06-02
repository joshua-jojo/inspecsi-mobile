<script lang="ts" setup>
import { useStore } from 'vuex';

const store = useStore();

</script>

<template>
    <div class="font-poppins-bold text-center uppercase text-2xl p-5" id="screenLayout">
        {{ store.state.judul_job }}
    </div>

    <div class="py-6 flex flex-col gap-2 bg-white">
        <router-view></router-view>
    </div>

</template>