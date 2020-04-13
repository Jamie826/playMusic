<template>
  <div class="top">
    <div class="left_box">
      <div class="icon">
        <span class="icon_home">
           <img src="../assets/01.ico.png" alt="">
        </span>
        <span class="icon_sami">
           <img src="../assets/02.ico.png" alt="">
        </span>
        <span class="icon_full">
          <img src="../assets/03.ico.png" alt="">
        </span>
      </div>
      <div class="left_right">
        <span class="left">
          <img src="../assets/04.ico.png" alt="">
        </span>
        <span class="right">
          <img src="../assets/05.ico.png" alt="">
        </span>
      </div>
    </div>
    <div class="right_box">
      <el-input  
        v-model="inputValue" 
        clearable
        @change="toSearch"
         prefix-icon="el-icon-search"
        placeholder="请输入内容"
        ></el-input>
    </div>
   
  </div>
</template>

<script>
export default {
    name: 'top',
    data(){
      return{
        inputValue:""
      }
    },
    methods:{
      toSearch(){
        console.log(this.inputValue)
        // if(this.inputValue==""){
        //   this.$message({
        //       message: '请输入内容哦！',
        //       type: 'warning'
        //   })
        // }else{
        //   this.$router.push('/result')
        // }

      }
    }
};

</script>

<style>


  
</style>