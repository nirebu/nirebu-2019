<template>
    <time>{{require('moment')(time).format('Do MMM YYYY')}}</time>
</template>

<script>
export default {
    props: {
        time: Date
    }
}
</script>

<style>

</style>
