/*
包含所有基于state的getter计算属性的对象
*/
export default {
   
    //判断是否全部选中
    isAllSelect(state,getters){
        return getters.totalCount===getters.completeCount && getters.totalCount>0
    },
}
/* 用户状态 */
export const currentUser = state=>state.currentUser
export const isLogin = state=>state.isLogin