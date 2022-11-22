<template>
  <treeselect aria-label="Select options. Navigate with arrow buttons and select with Enter. Use right arrow to open supercategories." :options="options" :multiple="true" />
</template>

<script>
  import { generateOptions } from '../utils'

  export default {
    data: () => ({
      options: generateOptions(1, 500),
    }),
  }
</script>
