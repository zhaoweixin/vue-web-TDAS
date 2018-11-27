<template>
    <div id = "bodyleft" class="sidebar">
        <vs-row vs-justify="center">
                <vs-col vs-type="flex" vs-justify="center" vs-align="center">
                    <vs-upload action="http://localhost:3000/api/changeavatar" @on-success="successUpload"/>
                    <div slot="footer">
                    </div>
                </vs-col>
        </vs-row>
    </div>
</template>
<script>

export default {
    methods:{
    successUpload(event){
      console.log(event)
      let img = event.target.files[0];
      let size = img.size;
      let Form = new FormData();
      Form.append('avatar', img, this.avatar_name);
      API.successUpload(Form)
        .then((response) => {
            console.log('this is response' + response)
        })
        .catch((error) => {
            console.log('this is the:' + error)
        })
      this.$vs.notify({color:'success',title:'Upload Success',text:'Lorem ipsum dolor sit amet, consectetur'})
    }
  }
}
</script>
<style scoped lang="stylus">
    #bodyleft{
        float: left;
        width: 15%;
        height: 50%;
    }
</style>