import BackTop from "components/content/backTop/backTop";

export const backTop={
data(){
  return{
    isshow: false,
  }
},
components:{
  BackTop,
},
methods: {
  backClick() {
    this.$refs.scroll.scrollTop(0, 0);
  },
},
}