<template>
    <button>
        <slot>
            Default
        </slot>
    </button>
</template>
<script>
export default {
    name: 'custom button',
    props: {
        msg: String
    }
}
</script>
