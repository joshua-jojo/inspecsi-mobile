<template lang="">
    <teleport to='body'> 
        <input type="checkbox" :id="props.id" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box">
                <h3 class="font-bold text-lg font-poppins-bold capitalize">{{props.title}}</h3>
                    <div class="py-4">
                        <slot></slot>
                    </div>
                <div class="modal-action">
                    <slot name="action"></slot>
                    <label :for="props.id" class="btn">Close</label>
                </div>
            </div>
        </div>
    </teleport>
</template>
<script lang="ts" setup>
const props = defineProps({
    id : String,
    title : {
        type : String,
        default : 'Insert title'
    },
})
</script>