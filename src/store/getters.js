/*
包含所有基于state的getter计算属性的对象
*/
export default {
   
    //判断是否全部选中
    isAllSelect(state,getters){
        return getters.totalCount===getters.completeCount && getters.totalCount>0
    }
}