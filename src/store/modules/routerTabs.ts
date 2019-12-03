import * as _ from 'lodash';

import { Module, MutationTree, ActionTree, GetterTree, ActionContext } from 'vuex';
import { RootState } from './../store';

export interface IReusetabState {
    source: any[] ;
    to?: string;
}

const mutations: MutationTree<IReusetabState> = {
    changeSource(state: IReusetabState, param: any) {
        state.source = param.source;
    },
    changeTo(state: IReusetabState, param: any) {
        state.to = param;
    },
};


const actions: ActionTree<IReusetabState, RootState> = {
    add(context: ActionContext<IReusetabState, RootState>, param: any) {
        const oldTables = context.state.source;
        const targetName = param.name;
        const activeName = param.activeName;

        const isPassport = _.startsWith( targetName, '/passport');
        if  ( isPassport === true ) {
            return;
        }

        if (activeName === targetName) {
            return;
        }
        const exist = _.find(oldTables, ( item )  => {
            return item.name === param.name;
        });

        if ( exist === undefined) {
            oldTables.push(param);
            context.commit('changeSource', { source: oldTables });
        }
    },
    remove(context: ActionContext<IReusetabState, RootState>, param: any) {
        const source = context.state.source;
        let activeName = param.activeName;
        const targetName = param.name;
        if ( activeName === targetName ) {
            _.forEach(source, (tab, index: number) => {
                if (tab.name === targetName) {
                    const nextTab = source[index + 1] || source[index - 1];
                    if (nextTab) {
                        activeName = nextTab.name;
                        if ( activeName === context.state.to) {
                            context.commit('changeTo', ''); // 如果activename == to,需要先重置
                        }

                        setTimeout(() => {
                            context.commit('changeTo', activeName);
                        }, 1);
                    }
                }
            });
        }
        const newTabs = _.filter(source, (tab) => tab.name !== targetName );
        context.commit('changeSource', { source: newTabs });
    },
};

const getters: GetterTree<IReusetabState, RootState> = {

};

const reuseTabState: IReusetabState = {
    source: [],
    to: '',
};

const reuseTab: Module<IReusetabState, RootState> = {
    namespaced: true,
    state: reuseTabState,
    getters,
    actions,
    mutations,
};

export default reuseTab;
