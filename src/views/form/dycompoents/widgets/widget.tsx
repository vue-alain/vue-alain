import { Component, Prop, Vue } from 'vue-property-decorator';
import DyFormitemWapper from './../DyFormitemWapper.vue';

@Component({
    components:{
      'df-item':DyFormitemWapper
    }
})
class WidgetComponent extends Vue{

    render(){
        return (
            <df-item>
                <wrapperComponent>

                </wrapperComponent>
            </df-item>
        )
    }
}

const Widget:(comp: any)=>any = (wrapperComponent: any) =>WidgetComponent;

export default Widget;