import store from 'store'
export default function(router) {
    //个人资料
    const personInfo = {
            component: require('./views/contact/person-info.vue'),
            subRoutes: {
                //个人资料设置
                'person-info-set': {
                    component: require('./views/contact/person-info-set.vue')
                }

            }
        }
    //个人相册
    const albums = {
        component: require('./views/find/albums-friends.vue'),
        subRoutes: {
            // //预览
            // 'preview': {
            //     component: resolve => {
            //         require('./views/find/albums-friends-preview.vue')
            //     }
            // },
            //个人资料
            'person-info': personInfo
        }
    }
    //相互引用
    personInfo.albums = albums

    //对话框
    const dialogue = {
            component: require('./views/chat/dialogue.vue'),
            subRoutes: {
                //聊天详情
                'chat-detail': {
                    component:require('./views/chat/chat-detail.vue'),
                    subRoutes: {
                        'person-info': personInfo
                    }
                },
                //群聊天信息
                'chat-info': {
                    component: require('./views/chat/chat-info.vue'),
                    subRoutes: {
                        'person-info': personInfo
                    }
                },
                'link': {
                    component: require('./components/iframe.vue')
                }
            }
        }

    //map
    router.map({
        '/chat': {
            component: require('./views/chat.vue'),
            subRoutes: {
                'dialogue': dialogue,
                'add-friends': {
                    component: require('./views/contact/add-friends.vue')
                },
                'sao-yi-sao': {
                    component: require('./views/find/sao-yi-sao.vue')
                },
                'group-chat': {
                    component: require('./views/contact/group-chat.vue')
                }
            }
        },
        '*': {
            name: '404',
            component:  require('./views/404.vue')
        },
        '/contact': {
            component:require('./views/contact.vue'),
            subRoutes: {
                //个人资料
                'person-info': personInfo,
                'public-info': {
                    component:require('./views/contact/public-info.vue')
                },
                'new-friends': {
                    component:  require('./views/contact/new-friends.vue'),
                    subRoutes: {
                        'add-friends': {
                            component: require('./views/contact/add-friends.vue')
                        }
                    }
                },
                'add-friends': {
                    component: require('./views/contact/add-friends.vue')
                },
                'group-chat': {
                    component:  require('./views/contact/group-chat.vue')
                },
                'tag': {
                    component: require('./views/contact/tag.vue')
                },
                'public': {
                    component: require('./views/contact/public.vue')
                }

            }
        },
        '/find': {
            component: require('./views/find.vue'),
            subRoutes: {
                'albums-friends': albums,
                'sao-yi-sao': {
                    component: require('./views/find/sao-yi-sao.vue')
                },
                'yao-yi-yao': {
                    component:  require('./views/find/yao-yi-yao.vue')
                },
                'drift-bottle': {
                    component: require('./views/find/drift-bottle.vue')
                },
                'shopping': require('./components/iframe.vue')
                }
            }
        },
        '/me': {
            component: require('./views/me.vue')
        }
    })

    router.redirect({
        '/': '/chat'
    })

    router.afterEach(function({ from, to }) {
        let fromPath = from.path || '/';
        let toPath = to.path;
        let toPath_end = toPath.lastIndexOf('/');
        let backPath = toPath.slice(0, toPath_end);
        store.dispatch('BACK_PATH', backPath)
    })

}
