
import { Vue } from 'vue-property-decorator';

class RouterService  extends Vue {

    public displayMenuTitle(menu: any){
        if(menu.meta.i18n){
            return this.$t(menu.meta.i18n);
        }
        return menu.meta.title;
    }
}

const service = new RouterService();

export default service;
