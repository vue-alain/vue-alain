<template>
  <div>
  <dy-form :formSchema="schema" :uiSchema="uiSchema"
    @onSuccess="handleSuccess"
    :submiting="submiting"
  ></dy-form>

  </div>

</template>

<style lang="less">

</style>

<script  lang="tsx">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

import DyForm from '@/components/dynamicform/DyForm.vue';

@Component({
    components:{
      DyForm
    }
})
export default class DynamicForm extends Vue {

  private form:any = null;

  private formItemLayout: any = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 7 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
      md: { span: 10 },
    },
  };

  get formData(): any{
    return {
      name:'关云长'
    };
  }

  get uiSchema():any {
    return {
      name:{
        itemattrs:{
          ...this.formItemLayout,
          fieldDecoratorId:'name',
          fieldDecoratorOptions:{
            initialValue:this.formData.name,
            rules: [{ required: true, message: '请输入姓名' }]
          }
        },
        widgetattrs:{
          placeholder:'请填写姓名',
        }
      }
    }
  }

  get schema(): any{
    return {
      properties:{
        name:{
          type: 'string',
          title:'姓名',
        },
        age:{
          type: 'number',
          title:'年龄',
          ui:{
            itemattrs:{
              ...this.formItemLayout
            },
            widgetattrs:{
              min:0,
              max:100
            }
          }
        },
        range:{
          type: 'daterange',
          title:'起止日期',
          ui:{
            itemattrs:{
              ...this.formItemLayout
            },
            widgetattrs:{
              style:{width: '100%'},
            placeholder:['开始日期', '结束日期']
            }
          }
        },
        remark:{
          type: 'textarea',
          title:'目标描述',
          ui:{
            itemattrs:{
              ...this.formItemLayout
            },
            widgetattrs:{
              style:{'min-height': '32px'},
              placeholder:'请输入你的阶段性工作目标',
              rows:4
            }
          }
        },
      },

    };
  }

  private submiting:boolean = false;

  private handleSuccess(values: any){
    this.submiting=true;
    setTimeout(()=>{
      this.submiting= false;
    },1000);
  }

}
</script>