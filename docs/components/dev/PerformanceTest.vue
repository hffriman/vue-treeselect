<template>
  <treeselect aria-label="Select options" :options="options" :multiple="true" />
</template>

<script>
  import { generateOptions } from '../utils'

  export default {
    data: () => ({
      options: generateOptions(1, 500),
    }),
  }
</script>
