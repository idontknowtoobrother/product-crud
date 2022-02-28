<template>
  <div>
    <label for="input-with-list">Input with datalist</label>
    <b-form-input
      list="input-list"
      id="input-with-list"
      v-model="value"
    ></b-form-input>
    <b-form-datalist id="input-list" :options="options"></b-form-datalist>
    <b-card>
      <pre>
        {{ value }}
      </pre>
    </b-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: null,
      options: ['Apple', 'Banana', 'Grape', 'Kiwi', 'Orange']
    }
  }
}
</script>
<style></style>
