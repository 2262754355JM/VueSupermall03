<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      :class="{ active: number == index }"
      v-for="(item, index) in titles"
      :key="index"
    >
      <span @click="numbers(index)">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
    };
  },

  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    numbers(index) {
      this.number = index;
      this.$emit('tabclick',index);
    },
  },
};
</script>
<style scoped>
.tab-control {
  display: flex;
  z-index: 9;
}

.tab-control-item {
  flex: 1;
  text-align: center;
  color: rgb(109, 109, 109);
  height: 40px;
  line-height: 40px;
  font-size: 15px;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: var(--color-tint);
}

.active span {
  border-bottom: 2px solid;
  border-bottom-color: var(--color-tint);
}
</style>