<script setup>
import { items, currIndex } from '../state.js'
</script>

<template>
    <div className="CurrItemBox">Current Item: {{ items.value[currIndex.num].title }}</div>
</template>

<style scoped>
.CurrItemBox {
      border: 1px solid black;
      padding: 10px;
      margin-bottom: 10px;
  }
</style>