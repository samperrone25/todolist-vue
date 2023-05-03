<script setup>
import { items, currIndex } from '../state.js'

function onClick(e) {
    items.value[currIndex.num].done = true;
}
</script>

<template>
    <div className="MarkAsDone">
        <button class="ListButton" @click="e => onClick(e)">Mark As Done</button>
    </div>
</template>

<style scoped>
.ListButton {
  width: content;
  height: 25px;
  border-radius: 4px;
  border-color: black;
  margin-right: 20px;
}
</style>