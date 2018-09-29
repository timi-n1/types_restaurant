/*
 * 命令字查询接口命名格式
 * req_${cmds}
 * 
 * 命令字回包接口命名格式:
 * res_${cmds}
 */




declare interface req_story_read {
    story_index: number
}

declare interface req_guide_done {
    guide_index: number
}

declare interface req_furniture_buy {
    pid: number
}

declare interface req_furniture_place {
    pid: number
}

declare interface req_furniture_buy {
    pid: number
}

declare interface req_furniture_list {
    rid: string
}

declare interface req_food_buy {
    pid: number
}

declare interface req_food_list {
    rid: string
}

declare interface req_food_supply {
    fid: number
    rid: string
}

declare interface req_guest_cook {
    fid: number
    guest_id: number
}

declare interface req_guest_list {
    rid: number
    guest_ids?: number[]
}

declare interface req_guest_category {
}

declare interface req_guest_story {
    guest_id: number
}

declare interface req_guest_exposure {
    guest_id: number
}

declare interface req_guest_booking {
    fid: number
    guest_id: number
    rid: string
}

declare interface req_guest_food_ready {
    fid: number,
    guest_id: number,
    rid: string
}


/**
 * ---------------
 * success code
 * ---------------
 * 跑通流程
 * 0
 * 
 * 预留额外处理码
 * 1 - 1000
 *  
 * ---------------
 * error code
 * ---------------
 * 
 * 用户服务器: 8000 - 8999
 * 
 *  - 餐馆模块
 * 8000 - 8099
 * 
 *  - 家具模块
 * 8100 - 8199 
 * 
 * - 菜牌模块
 * 8200 - 8299
 * 
 * - 用户模块
 * 8300 - 8399
 * 
 * - 故事模块
 * 8400 - 8499
 * 
 * - 新手引导模块
 * 8500 - 8599
 * 
 * 顾客服务器: 9000 - 9999
 * 
*/
declare const enum AppCode {
    done = 0,

    buy_pid_not_found = 8100,
    buy_not_enough_money = 8101,
    buy_same_item = 8102,
    place_invalid_pid = 8103,
    buy_fid_not_found = 8200,
}

declare const enum AppMsg {
    'pid_not_exist!' = '喵呜，遇到一些问题了', //家具不存在
    'invalid_operations' = '喵呜，遇到一些问题了', //传入购买家具ID不合法
    'not_enough_money' = '金币不足！快去讨好喵主子赚点钱吧', //不够钱
    'fid_not_exist' = '没有该菜品', // 菜品不存在
    'same_item' = '喵呜，遇到一些问题了',//已经购买过该家具/菜品
    'wx_auth_err' = '喵呜，遇到一些问题了',//微信登录失败
    'server_err' = '喵呜，遇到一些问题了',//服务器异常,所有未定义的错误
}


declare interface BaseResponse<T> {
    ret: AppCode,
    msg?: AppMsg,
    data: T
}

declare interface res_story_read {
    done: boolean
}

declare interface res_guide_done {
    guide_index: number
}

declare interface res_furniture_buy {
    done: boolean
    money: number
}

declare interface res_furniture_place {
    done: boolean
}

declare interface res_furniture_list {
    placed_furniture: number[],
    all_furniture: number[]
}

declare interface res_food_buy {
    data: {
        money: number
    }
}



type time_stamp = number

interface eating_food {
    fid: number //菜品id
    start_time: time_stamp //开始吃的时间
    during: time_stamp //持续时间
}

/***
 * 顾客相关的基础字段说明:
 * @param {number} [story_index] - 顾客解锁到的故事线
 * @param {boolean} [is_read] - 当前故事线是否已读
 * 
 * @param {number[]} [fids] - 顾客订单,按照下单顺序排序 
 * @param {number[]} [foods] - 当前在吃的菜
 * @param {eating_food} [eating_food] - 顾客桌上的菜
 * 
 * 
 * @param {number} [intimacy] - 该顾客亲密度
 * @param {number} [position_id] - 顾客位置
 * @param {boolean} [is_new] - 是否新来顾客
 * 
 * 
 * 
 */

declare interface res_food_list {
    list: {
        fid: number, //菜品id
        cooked: number, //已有备好的菜
        material: number, //剩余材料份额
        update_time: time_stamp, //最近备菜时间
        expire_during: time_stamp //备菜过期时间
    }[]
}

declare interface res_food_supply {
    money: number //金币
    done: boolean //购买成功
}

declare interface res_guest_cook {
    money: number, //金币
    stamina: number, //体力值
    intimacy: number //亲密度
}

declare interface res_guest_list {
    list: {
        guest_id: number,
        is_new: boolean, //是否第一次出现的顾客
        story_index: number , //顾客当前最新的故事索引
        is_read: boolean , //当前故事索引是否已读
        position_id: number, 
        fids: number[], //订单列表
        foods: number[], //已完成的菜品列表
        current_food: eating_food //当前吃的菜
    }[]
}

declare interface res_guest_story {
    story_index: number, //已解锁到哪个故事
    read: boolean //当前故事是否已读
}

declare interface res_guest_category {
    list: {
        guest_id: number, //顾客角色id
        intimacy: number, // 顾客亲密度
        story_index: number //顾客索引
    }[]
}

declare interface res_guest_exposure {
    done: boolean
}

/**
 * 下订单可能失败，失败后有可能下发一个新订单
 */
declare interface res_guest_booking {
    fid?: number //新订单id
    done: boolean 
}

declare interface res_guest_food_ready {
    data: {
        story_index?: number
    }
}

declare const enum ServerInterFace {
    /**
     * 故事系统模块 - story
     */
    story_read = 'story_read',
    /**
     * 新手引导模块 - guide
     */
    guide_done = 'guide_done',
    /**
     * 家具系统模块 - furniture
     */
    furniture_buy = 'furniture_buy',
    furniture_place = 'furniture_place',
    furniture_list = 'furniture_list',
    /**
     * 菜牌系统模块 - food
     */
    food_buy = 'food_buy',
    food_list = 'food_list',
    food_supply = 'food_supply',
    /**
     * 顾客系统模块 - guest
     */
    guest_cook = 'guest_cook',
    guest_list = 'guest_list',
    guest_category = 'guest_category',
    guest_story = 'guest_story',
    guest_exposure = 'guest_exposure',
    guest_booking = 'guest_booking',
    guest_food_ready = 'guest_food_ready'
} 
