<script setup>
import { onMounted } from 'vue'
import { items, currIndex } from '../state.js'

</script>

<template>
    <div className="PageHeader">Your List: {{ items.value[currIndex.num].title }}</div>
</template>

<style scoped>
.PageHeader {
  border: 1px solid black;
  text-align: center;
}
</style>