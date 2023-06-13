
<template>
    <div
        class="h-full w-full z-50 absolute overflow-hidden flex justify-center items-center bg-white"
    >
        <div class="loader w-full">
            <div class="loader-text">{{props.title}}</div>
            <div class="loader-bar" v-if="props.status"></div>
            <div class="btn btn-outline btn-primary" v-else @click="emit('refresh')">refresh</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    const props = defineProps({
        title :String,
        status :Boolean,
    })
    const emit = defineEmits(['refresh']);
</script>
<style scoped>
.loader {
    /* background-color: blue; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.loader-text {
    @apply text-primary;
    font-size: 24px;
    margin-bottom: 20px;
    align-self: center;
}

.loader-bar {
    width: 30%;
    height: 10px;
    border-radius: 5px;
    @apply bg-primary;
    animation: loader-bar-animation 2s ease-in-out infinite;
}

@keyframes loader-bar-animation {
    0% {
        /* transform: translateX(-100%) rotate(270deg); */
        transform: translateX(-100%);
    }

    50% {
        /* transform: translateX(100%) rotate(-90deg); */
        transform: translateX(100%);
    }

    100% {
        /* transform: translateX(-100%) rotate(270deg); */
        transform: translateX(-100%);
    }
}
</style>
