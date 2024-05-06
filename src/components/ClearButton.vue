<script setup lang="ts">
import { useCalcModel } from '../stores/calcModel'
const calc = useCalcModel()

function clearNum() {
    calc.clearNum()
}
</script>
<template>
    <div class="clear-button">
        <button class="clear-button__btn" @click="clearNum()">C</button>
    </div>
</template>

<style lang="scss">
.clear-button {
    min-width: 8rem;
}
.clear-button__btn {
    font-size: 22px;
    width: 100%;
}
</style>
