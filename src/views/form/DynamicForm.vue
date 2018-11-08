<template>
  <div>
  <dy-form :formSchema="schema" :uiSchema="uiSchema"
    @onSuccess="handleSuccess"
    :submiting="submiting"
  ></dy-form>


    <a-card :bordered="false" title="动态表单 demo">
      <form-schema ref="formSchema" :schema="schema2"
        :components="components">
      </form-schema>

    </a-card>

  </div>

</template>

<style lang="less">

</style>

<script  lang="tsx">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

import AntdUIComponents from '@/components/dynamicform/AntdUIComponents';
import FormSchema, { Components } from '@formschema/native';

/*
import {
  Form,
  FormItem,
  Input,
  Radio,
  Checkbox,
  Select,
  Option,
  Button
} from 'element-ui'

FormSchema.setComponent('label', FormItem)*/

/*
FormSchema.setComponent('form', 'a-form',(vm: any)=>{});

// http://element.eleme.io/#/en-US/component/form#validation
FormSchema.setComponent('label', 'a-form-item');

FormSchema.setComponent('email', 'a-input');
FormSchema.setComponent('text', 'a-input');
FormSchema.setComponent('textarea', 'a-input');
FormSchema.setComponent('checkbox', 'a-checkbox');
FormSchema.setComponent('switch', 'a-switch');
FormSchema.setComponent('radio', 'a-radio');
FormSchema.setComponent('select', 'a-select');
*/

// FormSchema.setComponent('email', 'el-input');

import DyForm from '@/components/dynamicform/DyForm.vue';

@Component({
    components: {
      DyForm,
      FormSchema,
    },
})
export default class DynamicForm extends Vue {

  private form: any = null;

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

  get components() {
    // const compos= new Components();
    const components = AntdUIComponents(Components);
      console.log(components);
    return components;
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

  private schema2: any ={
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "title": "Newsletter Subscription",
  "description": "Sign up for free newsletters and get more delivered to your inbox",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 8,
      "maxLength": 80,
      "title": "Full Name",
      "attrs": {
        "placeholder": "Your Full Name",
        "title": "Please enter your full name"
      }
    },
    "email": {
      "type": "string",
      "format": "email",
      "maxLength": 120,
      "title": "Email",
      "default": "demsking@gmail.com",
      "attrs": {
        "type": "email",
        "placeholder": "Your Email",
        "title": "Please enter your email"
      }
    },
    "datetime": {
      "type": "string",
      "format": "date-time",
      "title": "Activity time",
      "attrs": {
        "type": "datetime-local"
      }
    },
    "delivery": {
      "type": "boolean",
      "title": "Instant delivery",
      "default": false
    },
    "lists": {
      "type": "string",
      "title": "List",
      "enum": ["Daily New", "Promotion"],
      "attrs": {
        "placeholder": "Select your list subscription",
        "title": "Please select your list subscription"
      }
    },
    "listValues": {
      "type": "string",
      "title": "List Values",
      "enum": [
        { "value": "daily", "label": "Daily News" },
        { "value": "promotion", "label": "Promotion" }
      ],
      "attrs": {
        "placeholder": "Select your list subscription",
        "title": "Please select your list subscription"
      }
    },
    "source": {
      "type": "string",
      "maxLength": 120,
      "title": "Source",
      "description": "Ex. Using the NPM Search Engine",
      "attrs": {
        "type": "textarea",
        "placeholder": "How did you hear about us?"
      }
    },
    "password": {
      "type": "string",
      "title": "password",
      "default": "hello",
      "attrs": {
        "type": "password"
      }
    },
    "aList": {
      "type": "array",
      "title": "Array field",
      "minItems": 2,
      "maxItems": 5,
      "items": {
        "type": "string"
      },
      "attrs": {
        "typeX": "password"
      }
    },
    "regex": {
      "type": "string",
      "title": "regex",
      "pattern": "[a-e]+"
    },
    "multipleCheckbox": {
      "type": "array",
      "title": "Checkboxes",
      "anyOf": [
        { "value": "daily", "label": "Daily News" },
        { "value": "promotion", "label": "Promotion" }
      ]
    },
    "groupedRadio": {
      "type": "array",
      "title": "Frequence",
      "oneOf": [
        { "value": "daily", "label": "Daily News" },
        { "value": "weekly", "label": "Weekly News" }
      ]
    },
    "agree": {
      "type": "boolean",
      "title": "Agree",
      "description": "You agree to receive occasional updates and special offers for vue-json-schema updates.",
      "default": false,
      "attrs": {
        "type": "checkbox"
      }
    }
  },
  "additionalProperties": false,
  "required": ["name", "email", "lists", "aList"]
}
;


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