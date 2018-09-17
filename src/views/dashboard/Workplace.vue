<template>
  <div class="about">
    <h1>This is an 仪表盘 page</h1>

  </div>
</template>


<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';
const appModule = namespace('app');

@Component({
    components: {
    },
})
export default class Dashboard extends Vue {

    constructor() {
        super();
    }
}
</script>
