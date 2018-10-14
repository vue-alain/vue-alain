import * as _ from 'lodash';
const reuseTab = {
    namespaced: true,
    state: {
        source: [],
        to: '',
    },
    mutations: {
        changeSource(state: any, param: any) {
            state.source = param.source;
        },
        changeTo(state: any, param: any) {
            state.to = param;
        },
    },
    actions: {
        add(context: any, param: any) {
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
        remove(context: any, param: any) {
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
    },
};


export default reuseTab;
