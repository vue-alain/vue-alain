<template>
  <div class="about">
    <h1>This is an 卡片列表 page</h1>
  </div>
</template>


<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

import moment from 'moment';
import axios from 'axios';

@Component({
  components: {
  },
})
export default class CardList extends Vue {

  private mounted(){
  }

}
</script>