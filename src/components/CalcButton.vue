<script setup lang="ts">
import { useCalcModel } from '../stores/calcModel'
const calc = useCalcModel()

function setCalc() {
    calc.calcNum()
}
</script>

<template>
    <div class="calc-button">
        <button class="calc-button__btn" @click="setCalc()">=</button>
    </div>
</template>

<style lang="scss" scoped>
.calc-button {
    min-width: 8rem;
}
.calc-button__btn {
    font-size: 22px;
    width: 100%;
}
</style>
