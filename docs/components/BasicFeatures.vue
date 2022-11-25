<template>
  <div>
    <treeselect
      :multiple="true"
      :options="options"
      placeholder="Select your favourite(s)..."
      v-model="value"
      />
    <treeselect-value :value="value" />
  </div>
</template>

<script>
  export default {
    data: () => ({
      value: [],
      options: [ {
        id: 'fruits',
        label: 'Fruits',
        children: [],
      }, {
        id: 'vegetables',
        label: 'Vegetables',
        children: [ {
          id: 'corn',
          label: 'Corn 🌽',
        }, {
          id: 'carrot',
          label: 'Carrot 🥕',
        }, {
          id: 'eggplant',
          label: 'Eggplant 🍆',
        }, {
          id: 'tomato',
          label: 'Tomato 🍅',
        } ],
      } ],
    }),
  }
</script>
