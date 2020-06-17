<template>
    <div class="tips">
        <div id="tips"   class="disvisible"></div>
    </div>
</template>

<script>
export default {
    name:'MyTips'
}
</script>

<style>
    #tips{
        position:fixed;
        background: green;
        top:40%;
        left:42%;
        transition:all 1.0s ease-in-out
    }
    #tips:after{
        top:200px;
        left:150px;
    }
    .disvisible{
        visibility:hidden;
    }
    .visible{
        visibility: visible;
    }
</style>