<template>
  <component :is="dynamicComponent"></component>
</template>
<script>

export default {
  props: ['comp'],
  computed: {
    dynamicComponent() {
      return () => import(`@/${this.comp.path}`);
    }
  }
};
</script>
