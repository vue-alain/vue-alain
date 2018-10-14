<template>
    <div class="page-header">
        
    <slot name="breadcrumb" v-if="!breadcrumb">
        <!--
      <nz-breadcrumb *ngIf="paths && paths.length > 0">
        <nz-breadcrumb-item *ngFor="let i of paths">
          <ng-container *ngIf="i.link">
            <a [routerLink]="i.link">{{i.title}}</a>
          </ng-container>
          <ng-container *ngIf="!i.link">{{i.title}}</ng-container>
        </nz-breadcrumb-item>
      </nz-breadcrumb>
      -->
    </slot>
    <div class="page-header__detail">
      <div class="page-header__logo">
        <slot name="logo"></slot>
      </div>
      <div class="page-header__main">
        <div class="page-header__row">
          <h1 class="page-header__title">
            <slot name="title">
              {{title}}
            </slot>
          </h1>
          <div class="page-header__action">
            <slot name="action" class="page-header__action"></slot>
          </div>
        </div>
        <div class="page-header__row">
          <div class="page-header__desc" >
            <slot name="content">
              {{content}}
            </slot>
          </div>
          <div v-if="extra" class="page-header__extra">
            <slot name="extra"></slot>
          </div>
        </div>
      </div>
    </div>
    <slot name="tab"></slot>
    </div>
</template>

<style lang="less">
@import '../../assets/theme/styles/index.less';

@page-header-bg: #fff;//#fafbfc;// #fff;


 .page-header {
  display: block;
  background-color: #fafbfc;//@page-header-bg;
  padding: 16px 32px 0 32px;
  border-bottom: @border-width-base @border-style-base @border-color-split;
    margin-right: -24px;
    margin-left: -24px;
    margin-bottom: 24px;
  .ant-breadcrumb {
    margin-bottom: 16px;
  }
  .ant-tabs {
    margin: 0 0 -17px -8px;
    .ant-tabs-bar {
      border-bottom: @border-width-base @border-style-base @border-color-split;
    }
  }
  &__detail {
    display: flex;
  }
  &__row {
    display: flex;
    width: 100%;
  }
  &__logo {
    flex: 0 1 auto;
    margin-right: 16px;
    padding-top: 1px;
    img {
      width: 28px;
      height: 28px;
      border-radius: @border-radius-base;
      display: block;
    }
  }
  &__title {
    font-size: 20px;
    font-weight: 500;
    color: @heading-color;
    small {
      font-weight: normal;
      font-size: 14px;
      padding-left: @layout-gutter;
    }
  }
  &__action {
    margin-left: 56px;
    min-width: 266px;
    nz-popconfirm:not(:last-child),
    .ant-btn-group:not(:last-child),
    .ant-btn:not(:last-child) {
      margin-right: 8px;
    }
    .ant-btn-group > .ant-btn {
      margin-right: 0;
    }
  }

  &__title,
  &__desc {
    flex: auto;
  }

  &__action,
  &__extra,
  &__main {
    flex: 0 1 auto;
  }

  &__main {
    width: 100%;
  }

  &__title,
  &__action {
    margin-bottom: 16px;
  }

  &__logo,
  &__desc,
  &__extra {
    margin-bottom: 16px;
  }

  &__action,
  &__extra {
    text-align: right;
  }

  &__extra {
    margin-left: 88px;
    min-width: 242px;
  }

  @media screen and (max-width: 1200) {
    &__extra {
      margin-left: 44px;
    }
  }
  @media screen and (max-width: 992) {
    &__extra {
      margin-left: 20px;
    }
  }
  @media screen and (max-width: 768) {
    &__row {
      display: block;
    }
    &__action,
    &__extra {
      margin-left: 0;
      text-align: left;
    }
  }
  @media screen and (max-width: 576) {
    &__detail {
      display: block;
    }
  }
  @media screen and (max-width: 575) {
    &__action {
      .ant-btn-group,
      .ant-btn {
        display: block;
        margin-bottom: 8px;
      }
      .ant-btn-group > .ant-btn {
        display: inline-block;
        margin-bottom: 0;
      }
    }
  }
}
</style>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component({})
export default class PageHeader extends Vue {

    private breadcrumb: boolean = false;

    private logo: boolean = false;

    private action: boolean = true;

    @Prop({type: Boolean, default: true})
    private extra: boolean = true;

    @Prop({type: String, default: null})
    private title!: string;

    @Prop({type: String, default: null})
    private content!: string;

    private titleTpl: string = '';
}
</script>
