<template>
  <div>
    <a-form @submit="handleSubmit" hideRequiredMark style="margin-top: 8px" :autoFormCreate="(form)=>{this.form = form}">
          
          <DyFormitemWapper :formitems="dyShchema"></DyFormitemWapper>
          
          <a-form-item 
              v-bind="formItemLayout" 
              label="标题">
              <a-input placeholder="给目标起个名字" />
            </a-form-item>



<!--  
            <a-form-item 
              v-bind="formItemLayout"  
              label="起止日期"
              fieldDecoratorId="date"
              :fieldDecoratorOptions="{rules: [{ required: true, message: '请选择起止日期' }]}">
              <a-range-picker style="width: '100%'" :placeholder="['开始日期', '结束日期']" />
            </a-form-item>

            <a-form-item v-bind="formItemLayout" 
              label="目标描述"
              fieldDecoratorId="goal"
              :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入目标描述' }]}">
              <a-textarea
                  style="min-height: 32px"
                  placeholder="请输入你的阶段性工作目标"
                  :rows="4"
                />
            </a-form-item>

            <a-form-item  v-bind="formItemLayout"  
              label="衡量标准"
              fieldDecoratorId="standard"
              :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入衡量标准' }]}">
              <a-textarea style="min-height: 32px" placeholder="请输入衡量标准" :rows="4" />
            </a-form-item>
            
            <a-form-item
              v-bind="formItemLayout"
              fieldDecoratorId="client"
            >
              <span 
               slot="label">
                  客户
                  <em class="ptional">
                    （选填）
                    <a-tooltip title="目标的服务对象">
                      <a-icon type="info-circle-o" :style="{ marginRight: 4 }" />
                    </a-tooltip>
                  </em>
                </span>
              <a-input placeholder="请描述你服务的客户，内部客户直接 @姓名／工号" />
            </a-form-item>

            <a-form-item
              v-bind="formItemLayout"
              fieldDecoratorId="invites"
            >
              <span slot="label">
                  邀评人
                  <em class="optional">（选填）</em>
                </span>
              <a-input placeholder="请直接 @姓名／工号，最多可邀请 5 人" />
            </a-form-item>
            
            <a-form-item
              v-bind="formItemLayout"
              fieldDecoratorId="weight"
            >
            <span slot="label">
                  权重
                  <em class="optional">（选填）</em>
                </span>
              <a-input-number placeholder="请输入" :min="0" :max="100" />
              <span class="ant-form-text">%</span>
            </a-form-item>
           
            
            <a-form-item v-bind="formItemLayout"
              fieldDecoratorId="public" label="目标公开" help="客户、邀评人默认被分享">
              <div>
                <a-radio-group defaultValue="1">
                    <a-radio value="1">公开</a-radio>
                    <a-radio value="2">部分公开</a-radio>
                    <a-radio value="3">不公开</a-radio>
                  </a-radio-group>
                  
               <a-form-item :style="{ marginBottom: 0 }"  fieldDecoratorId="publicUsers">
                  <a-select
                      mode="multiple"
                      placeholder="公开给"
                      :style="{margin: '8px 0',
                        display: form && form.getFieldValue('public') === '2' ? 'block' : 'none'
                      }"
                    >
                      <a-select-option value="1">同事甲</a-select-option>
                      <a-select-option value="2">同事乙</a-select-option>
                      <a-select-option value="3">同事丙</a-select-option>
                    </a-select>
                </a-form-item> 
               
              </div>
            </a-form-item> 

              -->

            
            <component v-bind:is="formItems"></component>
            <a-form-item style="margin-top: 32px">
              <a-button type="primary" htmlType="submit" >
                提交
              </a-button>
              <a-button style="margin-left: 8px">保存</a-button>
            </a-form-item>
            
          </a-form>
         
  </div>
</template>

<style lang="less">

</style>

<script  lang="tsx">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

import DyFormitemWapper from './dycompoents/DyFormitemWapper.vue';

@Component({
    components:{
      DyFormitemWapper,
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

  get dyShchema(): any[] {
    
    return [
      {
        type:'string',
        ui:{
          type:'input'
        }
      },
      {
        type:'number',
        ui:{
          type:'input'
        }
      },
    ];
  }

  get schema(): any{
    return {
      propiters:[
        {
          type: 'string',
          label:'姓名',
          layout:this.formItemLayout,
          attrs:{
            placeholder:'请填写姓名'
          }
        },
        {
          type: 'number',
          label:'年龄',
          layout:this.formItemLayout,
          attrs:{
            min:0,
            max:100,
          }
        },
        {
          type: 'daterange',
          label:'起止日期',
          layout:this.formItemLayout,
          attrs:{
            style:{width: '100%'},
            placeholder:['开始日期', '结束日期']
          }
        },
        {
          type: 'textarea',
          label:'目标描述',
          layout:this.formItemLayout,
          attrs:{
            style:{'min-height': '32px'},
            placeholder:'请输入你的阶段性工作目标',
            rows:4
          }
        },
        {
          type: 'radio',
          label:'目标公开',
          layout:this.formItemLayout,
          default:'1',
          source:[
            {label:'公开',value:'1'},
            {label:'部分公开',value:'2'},
            {label:'不公开',value:'3'},
          ],
        },
        {
          type: 'select',
          label:'公开给',
          layout:this.formItemLayout,
          default:'',
          mode:'multiple',
          source:[
            {label:'甲',value:'1'},
            {label:'乙',value:'2'},
            {label:'兵',value:'3'},
          ],
          attrs:{
            placeholder:'公开给',
          }
        },
      ],

    };
  }

  get formItems(){
    
    const formitems = this.items(this.schema.propiters);

    return {
      render: ()=> <div>{formitems}</div>
    };
  }

  private items(formItems: any): any{
    const formitems: any[] = [];
    formItems.forEach((item: any)=>{
      formitems.push(this.buildFormitem(item));
    });
    return formitems;
  }

  private buildFormitemChile(formitem: any){
    
    const { attrs ={} }= formitem;
    if(formitem.type === 'string'){
      return <a-input placeholder={attrs.placeholder}/>;
    }

    if(formitem.type === 'number'){
       return <a-input-number min={attrs.min} max={attrs.max}/>
    }

    if(formitem.type === 'daterange'){
      return <a-range-picker style={attrs.style} placeholder={attrs.placeholder} />
    }

    if(formitem.type === 'textarea'){
      return <a-textarea
                  style={attrs.style}
                  placeholder={attrs.placeholder}
                  rows={attrs.rows}
                />
    }

    if(formitem.type === 'radio'){
      return (<a-radio-group defaultValue={formitem.default}>
                {
                  formitem.source.map((item:any)=><a-radio value={item.value}>{item.label}</a-radio>)
                }
              </a-radio-group>)
              /**source.map((item: any)=><a-radio value={item.value}>{item.label}</a-radio>) */
    }

    if(formitem.type === 'select'){
      return (<a-select
                      mode={formitem.mode}
                      placeholder={attrs.placeholder}>
                      {
                        formitem.source.map((item:any)=><a-select-option value={item.value}>{item.label}</a-select-option>)
                        /** 
                        <a-select-option value="1">同事甲</a-select-option>
                        <a-select-option value="2">同事乙</a-select-option>
                        <a-select-option value="3">同事丙</a-select-option>
                        */
                      }
        </a-select>)
    }

    

    return '';
  }

  private buildFormitem(formitem: any){

    const chile = this.buildFormitemChile(formitem);
    return (<a-form-item
              labelCol={formitem.layout.labelCol}
              wrapperCol={formitem.layout.wrapperCol}
              label={formitem.label}>
              {chile}
            </a-form-item>);
  }

  private handleSubmit(){

  }



}
</script>