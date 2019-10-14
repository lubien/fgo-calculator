<template>
  <span>{{ displayNumber | number }}</span>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      default: 0
    }
  },

  data: () => ({
    displayNumber: 0,
    interval: false
  }),

  created() {
    this.displayNumber = this.number ? this.number : 0;
  },

  watch: {
    number() {
      clearInterval(this.interval);

      if (this.number == this.displayNumber) {
        return;
      }

      this.interval = setInterval(() => {
        if (this.displayNumber != this.number) {
          var change = (this.number - this.displayNumber) / 2.5;

          change = change >= 0 ? Math.ceil(change) : Math.floor(change);

          this.displayNumber = this.displayNumber + change;
        }
      }, 20);
    }
  },

  filters: {

    number(n) {
      return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
</script>
