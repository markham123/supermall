import {request} from "./request"

export function getDetail(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}
export function getRecommend(){
    return request({
        url:'/recommend',
        params:{
            
        }
    })
}
export class Goods{
    constructor(itemInfo,columns,services){
        this.title=itemInfo.title
        this.desc=itemInfo.desc
        this.newPrice=itemInfo.lowNowPrice
        this.oldPrice=itemInfo.oldPrice
        this.realPrice=itemInfo.lowNowPrice
        this.columns=columns
        this.services=services
    }
}
export class Shop{
    constructor(shopInfo){
        this.logo=shopInfo.shopLogo
        this.name=shopInfo.name
        this.fans=shopInfo.cFans
        this.sells=shopInfo.cSells
        this.score=shopInfo.score
        this.goodsCount=shopInfo.cGoods
    }
}
export class GoodsParam{
    constructor(info,rule){
        this.image=info.image ? info.image[0]:'';
        this.infos=info.set;
        this.sizes=rule.tables;
    }
}
export class DetailGoods{
    constructor(detailInfo){
        this.desc=detailInfo.desc;
        this.keyword=detailInfo.detailImage[0].key;
        this.imageList=detailInfo.detailImage[0].list;
    }
}
export class DetailComment{
    constructor(detaiComment){
        this.avatar=detaiComment.user.avatar;
        this.uname=detaiComment.user.uname;
        this.content=detaiComment.content;
        this.created=detaiComment.created;
        this.style=detaiComment.style;
        this.images=detaiComment.images;
    }
}