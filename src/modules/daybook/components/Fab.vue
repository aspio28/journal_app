<template>
    <button class="btn btn-primary">
        <div>
            {{ text }}
        </div>
    </button>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                default: "Agregar"
            }
    }
    }
</script>

<style lang="scss" scoped>

button {
    border-radius: 100%;
    bottom: 20px;
    height: 80px;
    position: fixed;
    right: 20px;
    width: 80px;
}
</style>