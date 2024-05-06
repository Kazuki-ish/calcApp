<script setup lang="ts">
import DisplayFom from './DisplayFormula.vue'
import InputNum from './InputNumber.vue'
import modeBtns from './ModeButtons.vue'
import calcBtn from './CalcButton.vue'
import clearBtn from './ClearButton.vue'
</script>

<template>
    <section class="l-inner">
        <DisplayFom />
        <InputNum />
        <modeBtns />
        <div class="result-buttons c-inner">
            <calcBtn />
            <clearBtn />
        </div>
    </section>
</template>

<style lang="scss">
.l-inner {
    border: 1px solid black;
    border-radius: 12px;
    margin: auto;
    max-width: calc(300px + 32px);
    padding: 16px;
}
.c-inner {
    margin-top: 1rem;
}
.result-buttons {
    display: grid;
    gap: 0.3rem;
    grid-template-columns: 1fr 1fr;
}
</style>
