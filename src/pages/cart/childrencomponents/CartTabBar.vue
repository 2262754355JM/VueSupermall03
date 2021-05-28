<template>
  <div id="carttabbar">
    <div class="totalPrice">
      <input type="checkbox" v-model="checkall" @click="checkAll2" />
      <span class="allcheck">全选</span>
      <span class="price">合计：￥{{ totalPrice }}</span>
    </div>
    <div class="totalCount">去计算{{ "(" + totalCount + ")" }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartList: [],
      // checkall: false,
    };
  },
  created() {
    this.cartList = this.$store.state.cartList;
  },
  mounted() {
    //     this.$bus.$on("check", () => {
    //       if (
    //         this.cartList.length === 0 ||
    //         this.cartList.filter((item) => item.check == false).length
    //       ) {
    //         this.checkall = false;
    //       } else {
    //         this.checkall = true;
    //       }
    //     });
    //  console.log('我执行了一次')
  },
  computed: {
    totalPrice() {
      return this.cartList
        .filter((item) => {
          return item.check;
        })
        .reduce((preValue, item) => {
          return preValue + item.price.replace(/[^0-9./]/gi, "") * item.count;
        }, 0)
        .toFixed(2);
    },
    totalCount() {
      return this.cartList
        .filter((item) => {
          return item.check;
        })
        .reduce((pre, item) => {
          return pre + item.count;
        }, 0);
    },
    checkall: {
      get() {
        if (this.cartList.length === 0) {
          return false;
        }
        return !this.cartList.filter((item) => {
          return item.check == false;
        }).length;
      },
      set (val) {
        for (let index = 0; index < this.cartList.length; index++) {
          this.cartList[index].check = val;
        }
      },
    },
  },
  methods: {
    checkAll2() {
      // this.checkall = !this.checkall;
      // for (let index = 0; index < this.cartList.length; index++) {
      //   this.cartList[index].check = this.checkall;
      // }
    },
  },

  // activated() {
  //   if (this.cartList.length === 0) {
  //     this.checkall = false;
  //   } else if (!this.cartList.filter((item) => item.check == false).length) {
  //     this.checkall = true;
  //   }
  // },
};
</script>

<style scoped>
#carttabbar {
  z-index: 9;
  display: flex;
}

.totalPrice {
  flex: 1;
  line-height: 40px;
  background-color: rgb(252, 233, 233);
  font-size: 14px;
  display: flex;
  align-items: center;
}

.price {
  font-size: 14px;
}
.allcheck {
  margin-right: 10px;
}

.totalCount {
  flex: 1;
  text-align: center;
  line-height: 40px;
  background-color: var(--color-tint);
  color: white;
}

input {
  margin: 10px;
}
</style>