<template>
    <div :class="{navCollapsed:isSidebarNavCollapse}">
        <sidebarNav  class="sidebar"/>
        <mainContent/>
    </div>
</template>

<script>
import sidebarNav from './component/sidebar-nav'
import mainContent from './component/main-content/index'
import dynamicRouter from '@/dynamic-router'
import router, { DynamicRoutes } from '@/router'
import { mapState } from 'vuex'
export default {
    data() {
        return {}
    },
    computed: {
        ...mapState('permission',['isSidebarNavCollapse'])
    },
    components: {
        sidebarNav,
        mainContent
    }
}
</script>

<style lang="scss" scoped>

</style>
