<script setup>
import { items, currIndex } from '../state.js'
import { reactive } from 'vue'

function onClick(e) {
    items.value = items.value.filter((item, i) => i != currIndex.num);
}
</script>

<template>
    <div className="DeleteItem">
        <button class="ListButton" @click="e => onClick(e)">DeleteItem</button>
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