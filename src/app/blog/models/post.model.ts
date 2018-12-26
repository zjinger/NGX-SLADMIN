import { BaseModel } from "./base.model";
export class Post extends BaseModel {
    title?: string;//标题

    isOriginal?: number;//是否原创 0：原创，1：转载

    classifyId?: string;//归类id

    surfaceImg?: string;//封面图

    readTimes?: number;//阅读量

    likedTimes?: number;//点赞次数

    collectTimes?: number;//收藏量

    commentTimes?: number;//评论数

    userId?: string;//用户主键

    userName?: string;//用户名（作者）

    enableComment?: number;//是否可以评论

    status?: number;//状态 0:审核中,1:已发布,2:已删除,3:草稿,4:精华,5推到首页

    createTime?: string;//创建时间

    lastModifyTime?: string;//修改时间

    modifyBy?: string;//修改人

    nickName?: string;//昵称

    postURL?: string;//转载地址

    classifyName?: string;//分类名称

    synopsis?: string;//概要

    postContent?: string;//内容
}
