<script setup>
import { items, currIndex } from '../state.js'

let desc_str = "";

function onDescriptionChange(e) {
    string = e.value;
}
function onClick(e) {
    //console.log(e);
    items.value[currIndex.num].description = desc_str;
}
</script>

<template>
    <button class="ListButton" @click="e => onClick(e)">Update Description</button>
    <label className="MarkAsDone">
        <input v-model="desc_str" type="text" />
    </label>
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