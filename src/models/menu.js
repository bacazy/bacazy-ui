
const menus = [
    {
        key: 'home',
        title: '主页',
        icon: 'home',
        url: '/home'
    },
    // {
    //   key: 'front',
    //   title: '前端',
    //   icon: 'html5',
    //   url: '/front',
    // },
    {
        key: 'front-end',
        title: '前端',
        icon: 'html5',
        url: '/front',
        children: [
          {
            key: 'react',
            title: 'React',
            icon: 'block',
            url: '/front/react'
          },
          {
            key: 'angular',
            title: 'Angular',
            icon: 'insurance',
            url: '/front/angular'
          },
        ]
    },
    // {
    //     key: 'java',
    //     title: 'Java Web',
    //     icon: 'html5',
    //     url: '/front',
    //     children: [
    //       {
    //         key: 'java-lang',
    //         title: 'Java语言基础',
    //         icon: 'block',
    //         url: '/backend/react'
    //       },
    //       {
    //         key: 'spring',
    //         title: 'Spring Boot',
    //         icon: 'insurance',
    //         url: '/backend/spring'
    //       },
    //     ]
    // }
]

export default {

    namespace: 'menu',
  
    state: {
        menu: menus
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'save' });
      },
    },
  
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };