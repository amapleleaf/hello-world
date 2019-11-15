<template>
    <el-menu
        :collapse="isSidebarNavCollapse"
        background-color="#304156"
        text-color="#eee"
        active-text-color="#4dbcff"
        :default-active="currentMenu"
    >
        <DynamicMenu :menuList="sidebarMenuqwe"></DynamicMenu>
    </el-menu>
</template>

<script>
import DynamicMenu from '@/components/dynamic-menu'
import { mapState } from 'vuex'

export default {
    data() {
        return {
            isCollapse: true
        }
    },
    computed: {
        ...mapState(['isSidebarNavCollapse']),
        ...mapState(['sidebarMenuqwe', 'currentMenu'])
    },
    methods: {},
    components: {
        DynamicMenu
    }
}
</script>
