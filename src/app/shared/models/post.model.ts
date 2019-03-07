import { BaseModel } from "./base.model";
export class Post extends BaseModel {

  title?: string = '';//标题

  isOriginal: number = 0;//是否原创 0：原创，1：转载,2:翻译

  classifyId?: string;//归类id

  tags?: string[];// 标签

  surfaceImg?: string;//封面图path

  readTimes: number = 0;//阅读量

  likedTimes?: number = 0;//点赞次数

  collectTimes: number = 0;//收藏量

  commentTimes?: number = 0;//评论数

  userId?: string;//用户主键

  userName?: string;//用户名（作者）

  enableComment: number = 0;//是否可以评论 0 可以评论 1 不能评论

  status: number = 0;//状态 0:审核中,1:已发布,2:已删除,3:草稿,4:精华,5推到首页

  createTime?: string;//创建时间

  lastModifyTime?: string;//修改时间

  modifyBy?: string;//修改人

  nickName?: string;//昵称

  postURL?: string;//转载地址

  classifyName?: string;//分类名称

  synopsis?: string;//概要

  postContent?: string;//内容
}
