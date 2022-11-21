<template>
    <h2>{{ txt }}</h2>
</template>

<script>
export default {
    name: 'fancy text',
    props: {
        txt: {
            type: String,
            required: true,
            default: 'Default Text',
            validator: (value) => value.length > 4
        },
        num: Number,
    }
}
</script>
