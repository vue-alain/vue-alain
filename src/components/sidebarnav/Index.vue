<template>
<ul class="sidebar-nav">
  <template v-for="(group,index1) of list">
    <template v-if="group._hidden !== true">
      <li class="sidebar-nav__item sidebar-nav__group-title" :key="`group-${index1}`" v-if="group.group">
        <span>{{ group.text }}</span>
      </li>
      <template v-for="(child1,index2) of group.children">
          <!--[routerLinkActiveOptions]="{exact: child1.linkExact}"-->
        <li :key="`child1-${index2}`" v-if="child1._hidden !== true" routerLinkActive="sidebar-nav__selected"
             
            class="sidebar-nav__item"
            :class="{'sidebar-nav__open':child1._open}"
            >
          <!-- link -->
          <!--[routerLink]="child1.link"-->
          <a v-if="child1._type === 1" @click="onSelect(child1)" 
             :target="child1.target">
            <i v-if="!collapsed" :class="child1.icon"></i>
            <a-tooltip v-if="collapsed" placement="right" :title="child1.text">
              <span>
                <i :class="child1.icon"></i>
              </span>
            </a-tooltip>
            <span>{{ child1.text }}</span>
          </a>
          <!-- external link -->
          <a v-if="child1._type === 2" :href="child1.externalLink" :target="child1.target"
             data-type="external">
            <i v-if="!collapsed" :class="child1.icon"></i>
            <a-tooltip v-if="collapsed" placement="right" :title="child1.text">
              <span>
                <i :class="child1.icon"></i>
              </span>
            </a-tooltip>
            <span>{{ child1.text }}</span>
          </a>
          <!-- has children link -->
          <a v-if="child1._type === 3" class="sidebar-nav__sub-title" @click="toggleOpen(child1)"
             @mouseenter="showSubMenu($event, child1)">
            <i :class="child1.icon"></i>
            <span>{{ child1.text }}</span>
          </a>
          <!-- badge -->
          <div v-if="child1.badge" :title="child1.badge" class="badge"
          :class="[{'badge-dot':child1.badgeDot},`badge-${child1.badgeStatus}`]">
            <em>{{child1.badge}}</em>
          </div>
          <!-- Level 2 -->
          <ul v-if="child1._type === 3" class="sidebar-nav sidebar-nav__sub" :class="[`sidebar-nav__depth${child1._depth}`]">
            <template v-for="(child2,index3) of child1.children">
                <!--[routerLinkActiveOptions]="{exact: child2.linkExact}"-->
              <li :key="`child2${index3}`" v-if="child2._hidden !== true" 
                    routerLinkActive="sidebar-nav__selected"
                   class="sidebar-nav__item"
                   :class="{'sidebar-nav__open':child2._open}">
                <!-- link -->
                <!--[routerLink]="child2.link"-->
                <a v-if="child2._type === 1" @click="onSelect(child2)" 
                   :target="child2.target">{{child2.text }}</a>
                <!-- external link -->
                <a v-if="child2._type === 2" :href="child2.externalLink" :target="child2.target"
                   data-type="external">{{child2.text }}</a>
                <!-- has children link -->
                <a v-if="child2._type === 3" class="sidebar-nav__sub-title" @click="toggleOpen(child2)">
                  {{ child2.text }}
                </a>
                <!-- badge -->
                <div v-if="child2.badge" :title="child2.badge" class="badge"
                    :class="[{'badge-dot':child2.badgeDot},`badge-${child2.badgeStatus}`]">
                  <em>{{child2.badge}}</em>
                </div>
                <!-- Level 3 -->
                <ul v-if="child2._type === 3" class="sidebar-nav sidebar-nav__sub" :class="[`sidebar-nav__depth${child2._depth}`]">
                  <template v-for="(child3,index4) of child2.children">
                      <!--[routerLinkActiveOptions]="{exact: child3.linkExact}"-->
                    <li :key="`child3-${index4}`" v-if="child3._hidden !== true" routerLinkActive="sidebar-nav__selected"
                         class="sidebar-nav__item"
                         :class="{'sidebar-nav__open':child3._open}">
                      <!-- link -->
                      <!--[routerLink]="child3.link"-->
                      <a v-if="child3._type === 1" @click="onSelect(child3)" 
                         :target="child3.target">{{child3.text }}</a>
                      <!-- external link -->
                      <a v-if="child3._type === 2" :href="child3.externalLink" :target="child3.target"
                         data-type="external">{{child3.text }}</a>
                      <!-- badge -->
                      <div v-if="child3.badge" :title="child3.badge" class="badge"
                            :class="[{'badge-dot':child3.badgeDot},`badge-${child3.badgeStatus}`]">
                        <em>{{child3.badge}}</em>
                      </div>
                    </li>
                  </template>
                </ul>
              </li>
            </template>
          </ul>
        </li>
      </template>
    </template>
  </template>
</ul>
</template>

<style lang="less">
</style>

<script lang="tsx">
import {
    Component,
    Prop,
    Vue,
    Emit,
} from 'vue-property-decorator';
import * as _ from 'lodash';

@Component({})
export default class SidebarNav extends Vue {

    @Prop({
        type: Array,
        default() {
            return [];
        },
    })
    private list!: any[];

    private onSelect(child: any) {}

    private toggleOpen(child: any) {}

    private showSubMenu(e: any, child: any) {}

    private mounted() {

    }

}
</script>
