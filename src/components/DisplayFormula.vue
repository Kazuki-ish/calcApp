<script setup lang="ts">
import { useCalcModel } from '../stores/calcModel'
const calc = useCalcModel()
let formula = calc.formula
</script>

<template>
    <ul class="display-num">
        <li class="display-num__value" v-for="item in formula">{{ item }}</li>
        <li class="display-num__value" v-if="formula.length == 0">{{ calc.displayNum }}</li>
    </ul>
</template>

<style lang="scss">
.display-num {
    text-align: right;
    display: flex;
    justify-content: end;
}

.display-num__value {
    display: block;
    font-size: 32px;
    line-height: 1;
}
</style>
