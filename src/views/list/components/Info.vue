<template>
    <div class="headerInfo">
        <span>{{title}}</span>
        <p>{{value}}</p>
        <em v-if="bordered" />
    </div>
</template>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

@Component({
  components: {
  },
})
export default class Info extends Vue {

    @Prop({
        type: String,
        default: null,
    })
    private title!: string;

    @Prop({
        type: String,
        default: null,
    })
    private value!: string;

    @Prop({
        type: Boolean,
        default: false,
    })
    private bordered!: boolean;

}
</script>
