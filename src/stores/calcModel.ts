import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCalcModel = defineStore('calc', () => {
    let calcMode = ref(0)
    let displayNum = ref(0)
    let calculatedNum = ref(0)
    let inputNum = ref(0)
    let formula = ref<string[]>([])

    const formatLength = (value: number) => {
        const numLength = value.toString().length
        const decimalLength = Number.isInteger(value)
            ? 0
            : value.toString().split('.')[1]?.length || 0
        // .で文字列を分割し、そのうち小数点部分の長さを取得

        if (decimalLength >= 4) {
            return Math.round(value * 1000) / 1000 // 小数点が4桁以上の場合数値を四捨五入
        }
        if (numLength >= 13) {
            return 0 // 整数が1兆を超えたら0を返す
        }
        return value
    }

    const setDisplayNum = (value: number) => {
        displayNum.value = value
        inputNum.value = 0
    }

    const setMode = (mode: number) => {
        calcMode.value = mode
        const formattedValue = formatLength(inputNum.value)
        // 計算式を分岐
        switch (calcMode.value) {
            case 1:
                formula.value.push(formattedValue.toString())
                formula.value.push('+')
                break
            case 2:
                formula.value.push(formattedValue.toString())
                formula.value.push('-')
                break
            case 3:
                formula.value.push(formattedValue.toString())
                formula.value.push('*')
                break
            case 4:
                formula.value.push(formattedValue.toString())
                formula.value.push('/')
                break
            case 5:
                formula.value.push(formattedValue.toString())
                formula.value.push('%')
                break
        }
        inputNum.value = 0
    }
    const resetFomula = () => {
        formula.value.length = 0
    }
    const calcNum = () => {
        if (inputNum.value !== 0) {
            formula.value.push(inputNum.value.toString())
            // 現在入力されている数値も計算式に入れる
        }

        const joinedFormula = formula.value.join('')
        // 配列を連結

        const result = new Function('return ' + joinedFormula)()
        // 文字列から関数を生成して計算

        setDisplayNum(result)
        resetFomula()
        // リアクティブシステム発火のため外部関数を使用

        inputNum.value = 0
        // 入力を初期化　こちらはv-model
    }
    const clearNum = () => {
        setDisplayNum(0)
        resetFomula()
        setMode(0)
    }

    return {
        calcMode,
        displayNum,
        calculatedNum,
        inputNum,
        formula,
        formatLength,
        setDisplayNum,
        setMode,
        calcNum,
        clearNum
    }
})
