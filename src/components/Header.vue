<template>
    <div>
      <a-menu
        v-model="current"
        mode="horizontal"
     >
   <a-menu-item key="logo">
     <Logo />  
    </a-menu-item>
    <a-menu-item key="mail">
      <a-icon type="mail" />Wallet   
    </a-menu-item>
    <a-menu-item key="app" >
      <a-icon type="appstore" />Market  
    </a-menu-item>
     <a-menu-item key="browser">
       <a-icon type="global" />browser   
    </a-menu-item>
    <a-menu-item key="me">
       <a-icon type="user" />me    
    </a-menu-item>
  </a-menu>
    </div>
</template>
<script>
import Logo from './Logo'
export default {
    data(){
        return {
            title:'Eos park title',
            current:[]
        }
    },
    components:{
        Logo
    }
}
</script>

