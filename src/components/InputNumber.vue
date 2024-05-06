<script setup lang="ts">
import { useCalcModel } from '../stores/calcModel'

const calc = useCalcModel()
</script>

<template>
    <div class="input-num c-inner">
        <input
            type="number"
            class="input-num__input"
            v-model.number="calc.inputNum"
            ref="inputValue"
        />
    </div>
</template>

<style lang="scss" scoped>
.input-num {
    display: flex;
}
.input-num__input {
    font-size: 24px;
    text-align: right;
    width: 100%;
}
.input-num__btn {
    width: 20%;
}
</style>
