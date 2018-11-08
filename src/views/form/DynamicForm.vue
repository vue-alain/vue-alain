<template>
  <div>

    <a-card :bordered="false" title="动态表单 demo">
  <dy-form :formSchema="schema" :uiSchema="uiSchema"
    @onSuccess="handleSuccess"
    :submiting="submiting"
  ></dy-form>
    </a-card>

  </div>

</template>

<style lang="less">

</style>

<script  lang="tsx">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

import DyForm from '@/components/dynamicform/DyForm.vue';

@Component({
    components: {
      DyForm,
    },
})
export default class DynamicForm extends Vue {

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

  get formData(): any {
    return {
      name: '关云长',
    };
  }

  // 动态表单 ui schema，描述表单展示
  get uiSchema(): any {
    return {
      name: {
        itemattrs: {
          ...this.formItemLayout,
        },
        widgetattrs: {
          placeholder: '请填写姓名',
        },
      },
      password: {
        errors: {
          minLength: '密码长度至少6位',
          maxLength: '密码长度最多10位',
          pattern: '密码必须是字母',
        },
      },
    };
  }

  // 动态表单 json schema，描述表单填写数据的数据结构
  get schema(): any {
    return {
      required: ['name'],
      properties: {
        name: {
          type: 'string',
          title: '姓名',
          ui: {
            errors: {
              required: '姓名为必填项',
            },
          },
        },
        password: {
          type: 'string',
          title: '密码[长度|正则 验证]',
          minLength: 6,
          maxLength: 10,
          pattern: '^[A-Za-z]+$',
          ui: {
            itemattrs: {
              ...this.formItemLayout,
            },
          },
        },
        age: {
          type: 'number',
          title: '年龄',
          ui: {
            itemattrs: {
              ...this.formItemLayout,
            },
            widgetattrs: {
              min: 0,
              max: 100,
            },
          },
        },
        age1: {
          type: 'number',
          title: '年龄1[最大最小值验证]',
          maximum: 100,
          minimum: 16,
          ui: {
            errors: {
              minimum: '年龄必须满16',
              maximum: '年龄必须小于100',
            },
            itemattrs: {
              ...this.formItemLayout,
            },
          },
        },
        range: {
          type: 'daterange',
          title: '起止日期',
          ui: {
            itemattrs: {
              ...this.formItemLayout,
            },
            widgetattrs: {
              style: {width: '100%'},
              placeholder: ['开始日期', '结束日期'],
            },
          },
        },
        remark: {
          type: 'textarea',
          title: '目标描述',
          ui: {
            itemattrs: {
              ...this.formItemLayout,
            },
            widgetattrs: {
              style: {'min-height': '32px'},
              placeholder: '请输入你的阶段性工作目标',
              rows: 4,
            },
          },
        },
        switch: {
          type: 'boolean',
          ui: {
            itemattrs: {
              ...this.formItemLayout,
            },
          },
        },
        slider: {
          type: 'slider',
          ui: {
            itemattrs: {
              ...this.formItemLayout,
            },
            widgetattrs: {
              marks: { 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' },
            },
          },
        },
        rate: {
          type: 'rate',
          ui: {
            itemattrs: {
              ...this.formItemLayout,
            },
            widgetattrs: {
              allowHalf: true,
            },
          },
        },
        select: {
          type: 'select',
          enum: [
            { label: 'Red', value: 'red'},
            { label: 'Green', value: 'green'},
            { label: 'Blue', value: 'blue'},
          ],
          ui: {
            itemattrs: {
              ...this.formItemLayout,
            },
            widgetattrs: {
            },
          },
        },
        select2: {
          type: 'select',
          title: 'Select[multiple]',
          enum: [
            { label: 'Red', value: 'red'},
            { label: 'Green', value: 'green'},
            { label: 'Blue', value: 'blue'},
          ],
          ui: {
            itemattrs: {
              ...this.formItemLayout,
            },
            widgetattrs: {
              mode: 'multiple',
            },
          },
        },
        radio: {
          type: 'radio',
          title: 'radio',
          enum: [
            { label: 'item 1', value: 'a'},
            { label: 'item 2', value: 'b'},
            { label: 'item 3', value: 'c'},
          ],
          ui: {
            itemattrs: {
              ...this.formItemLayout,
            },
            widgetattrs: {
            },
          },
        },
        radio2: {
          type: 'radio',
          title: 'radio[button]',
          enum: [
            { label: 'item 1', value: 'a'},
            { label: 'item 2', value: 'b'},
            { label: 'item 3', value: 'c'},
          ],
          ui: {
            button: true,
            itemattrs: {
              ...this.formItemLayout,
            },
            widgetattrs: {
            },
          },
        },
        file1: {
          type: 'string',
          title: '上传文件',
          ui: {
            widget: 'upload',
            itemattrs: {
              ...this.formItemLayout,
            },
          },
        },
        file2: {
          type: 'string',
          title: '上传文件2',
          ui: {
            widget: 'uploaddragger',
            itemattrs: {
              ...this.formItemLayout,
            },
          },
        },
      },

    };
  }

  private submiting: boolean = false;

  private handleSuccess(values: any) {
    // tslint:disable-next-line:no-console
    console.log(values);

    this.submiting = true;
    setTimeout(() => {
      this.submiting = false;
    }, 1000);
  }

}
</script>