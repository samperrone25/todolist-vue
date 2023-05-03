<script setup>
import { items, currIndex } from '../state';


let title = "";
let desc = "";
let timestamp = null;

function onClick(e) {
    // in future call api for new item
    timestamp = new Date().getTime();
    let newItem = {id: items.value.length, title: title, description: desc, done: false, timestamp: timestamp};
    items.value.push(newItem);
    currIndex.num = items.value.length - 1;
}

</script>

<template>
    <div className="NewItemForm">
        <label>Title</label>
        <input className="FieldText" v-model="title" type="text" />
        <br>
        <label>Description</label>
        <input className="FieldText" v-model="desc" type="text" />
        <br>
        <button className="ListButton" @click="e => onClick(e)">Create</button>
    </div>
</template>

<style scoped>
.NewItemForm {
  margin: 10px;
}
.FieldText {
  margin: 5px;
}
.ListButton {
  width: content;
  height: 25px;
  border-radius: 4px;
  border-color: black;
  margin-right: 20px;
}
</style>