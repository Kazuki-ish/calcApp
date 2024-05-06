<script setup lang="ts">
import { onMounted } from 'vue'
import { useCalcModel } from '../stores/calcModel'
const calc = useCalcModel()

onMounted(() => {})

function setMode(num: number) {
    calc.setMode(num)
}
</script>

<template>
    <div class="mode-buttons c-inner">
        <button
            class="mode-buttons__btn"
            @click="setMode(1)"
            :class="{ '-active': calc.calcMode == 1 }"
        >
            <p>+</p>
        </button>
        <button
            class="mode-buttons__btn"
            @click="setMode(2)"
            :class="{ '-active': calc.calcMode == 2 }"
        >
            <p>-</p>
        </button>
        <button
            class="mode-buttons__btn"
            @click="setMode(3)"
            :class="{ '-active': calc.calcMode == 3 }"
        >
            <p>×</p>
        </button>
        <button
            class="mode-buttons__btn"
            @click="setMode(4)"
            :class="{ '-active': calc.calcMode == 4 }"
        >
            <p>/</p>
        </button>
        <button
            class="mode-buttons__btn"
            @click="setMode(5)"
            :class="{ '-active': calc.calcMode == 5 }"
        >
            <p>%</p>
        </button>
    </div>
</template>

<style lang="scss">
.mode-buttons {
    display: grid;
    gap: 0.3rem;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.mode-buttons__btn {
    font-size: 22px;
    border: solid 1px black;
    border-radius: 4px;
    height: 30px;
    min-width: 54px;
    line-height: 30px;
    padding: 0;
    &.-active {
        background: #fbb161;
    }
}
</style>
