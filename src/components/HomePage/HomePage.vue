<template>
    <div>
        <body-left/>
        <body-middle/>
        <body-bottom/>
    </div> 
</template>
<script>
import BodyLeft from '../../common/BodyLeft/BodyLeft'
import BodyMiddle from '../../common/BodyMiddle/BodyMiddle'
import BodyBottom from '../../common/BodyBottom/BodyBottom'
export default{
    name: 'homepage',
    components: {
        BodyLeft,
        BodyMiddle,
        BodyBottom
    }
}
</script>

<style>
</style>