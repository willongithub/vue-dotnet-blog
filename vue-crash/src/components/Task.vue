<template>
  <div
    @dblclick="$emit('toggle-reminder', task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <h3>
      {{ task.text }}
      <!-- <i @click="$emit('delete-task', task.id)" class="fas fa-times"></i> -->
    </h3>
    <p>{{ task.time }}</p>
    <br />
    <Button @click="$emit('delete-task', task.id)" text="Delete" color="red" />
  </div>
</template>

<script>
import Button from "./Button";

export default {
  name: "Task",
  props: {
    task: Object,
  },
  components: {
    Button,
  },
  //   methods: {
  //       onDelete(id) {
  //           this.$emit('delete-task', id)
  //       }
  //   }
};
</script>

<style scoped>
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 12px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.9);
}
.btn-block {
  display: block;
  width: 100%;
}
/* .fas {
  color: red;
} */
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task.reminder {
  border-left: 10px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>