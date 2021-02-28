<template>
    <div>
        <BounceLoader :loading="isLoading" :color="'#68d391'" :size="100"/>
        <Table v-if="!isLoading"
            :assets="assets" 
        />
    </div>
</template>
<script>
import Table from '../components/Table'
import api from '../utils/api';
export default {
    name: 'Home',
    components: {
        Table
    },
    data() {
        return {
            assets: [],
            isLoading: false
        }
    },
    mounted() {
        this.isLoading = true;
        api.getApi().then(res => (this.assets = res))
        .finally(() => this.isLoading = false)
    }    
    
}
</script>