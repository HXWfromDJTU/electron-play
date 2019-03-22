<template>
    <div>
        <Header />
       <div>
        <a-input-group compact>
    <a-select defaultValue="Option1">
      <a-select-option value="Option1">导入钱包</a-select-option>
      <a-select-option value="Option2">输入私钥</a-select-option>
    </a-select>
    <a-input style="width: 50%" defaultValue="请输入你的值" />
  </a-input-group>
       </div>
    </div>
</template>
<script>
import Header from './components/header'
export default {
    data(){
        return {
            content:'EOS PARK'
        }
    },
    components:{
        Header
    }
}
</script>

