/*
 * 命令字查询接口命名格式
 * req_${cmds}
 * 
 */

/**
 * 曝光故事已读接口
 * @param {number} [story_index] - 已读故事索引
 */
declare interface req_story_read {
    story_index: number
}

/**
 * 引导任务完成接口
 * @param {number} [guide_index] - 引导任务索引值
 */
declare interface req_guide_done {
    guide_index: number
}

/**
 * 购买家具
 * @param {number} [pid] - 家具pid
 */
declare interface req_furniture_buy {
    pid: number
}


/**
 * 放置家具
 * @param {number} [pid] - 家具pid
 */
declare interface req_furniture_place {
    pid: number
}


/**
 * 拉取家具列表
 * @param {number} [rid] - 餐厅id（默认与用户openid一致），默认拉取自己的相关信息
 */
declare interface req_furniture_list {
    rid?: string
}

/**
 * 引入菜品
 * @param {number} [fid] - 菜品id 
 */
declare interface req_food_buy {
    fid: number
}

/**
 * 拉取菜品列表
 * @param {number} [rid] -  餐厅id（默认与用户openid一致），默认拉取自己的相关信息
 */
declare interface req_food_list {
    rid?: string
}

/**
 * 添加备菜材料
 * @param {number} [fid] - 菜品id
 */
declare interface req_food_supply {
    fid: number
}

/**
 * 为顾客撸菜
 * @param {number} [guest_id] - 顾客id
 * @param {number} [fid] - 菜品id
 * @param {string} [rid] - 默认在自己餐厅，如果在他人餐厅，则需要带此参数
 */
declare interface req_guest_cook {
    fid: number
    guest_id: number,
    rid?: string
}

/**
 * 拉取顾客列表
 * @param {string} [rid] - 默认在自己餐厅，如果在他人餐厅，则需要带此参数
 */
declare interface req_guest_list {
    rid?: number
}

/**
 * 顾客图鉴
 * @param {string} [rid] - 默认在自己餐厅，如果在他人餐厅，则需要带此参数
 */
declare interface req_guest_category {
    rid?: number
}

/**
 * 顾客故事站
 * @param {number} [guest_id] - 顾客id
 */
declare interface req_guest_story {
    guest_id: number
}


/**
 * 曝光某个顾客
 * @param {number} [guest_id] - 顾客id
 */
declare interface req_guest_exposure {
    guest_id: number
}

/**
 * 接受订单
 * @param {number} [fid] - 菜品id
 * @param {number} [guest_id] -顾客id
 */
declare interface req_guest_booking {
    fid: number
    guest_id: number
}

/**
 * 上菜
 * @param {number} [fid] - 菜品id
 * @param {number} [guest_id] -顾客id
 */
declare interface req_guest_food_dilivery {
    fid: number,
    guest_id: number
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
    story_is_read = 8400,
    guest_not_exist = 8401
}




type time_stamp = number

interface eating_food {
    fid: number //菜品id
    start_time: time_stamp //开始吃的时间
    during: time_stamp //持续时间
}

/***
 * 顾客模块相关的基础字段说明:
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
 */

declare const enum AppMsg {
    'pid_not_exist!' = '喵呜，遇到一些问题了', //家具不存在
    'invalid_operations' = '喵呜，遇到一些问题了', //传入购买家具ID不合法
    'not_enough_money' = '金币不足！快去讨好喵主子赚点钱吧', //不够钱
    'fid_not_exist' = '没有该菜品', // 菜品不存在
    'same_item' = '喵呜，遇到一些问题了',//已经购买过该家具/菜品
    'wx_auth_err' = '喵呜，遇到一些问题了',//微信登录失败
    'server_err' = '喵呜，遇到一些问题了',//服务器异常,所有未定义的错误
}


/**
 * 基础回包结构:
 * @param {AppCode} [ret] - 回包响应值，参考枚举AppCode
 * @param {AppMsg} [msg] - 回包提示消息,参考枚举 AppMsg
 * @param {T} [data] - 回包数据体，模版参见以 res_${cmd} 为格式的接口
 * 
 * @template
 *      声明 story_read 接口响应回包
 *      let res:BaseResponse<res_story_read>
 * 
 * 
 */
declare interface BaseResponse<T> {
    ret: AppCode,
    msg?: AppMsg,
    data: T
}

/**
 * 顾客故事阅读完成
 */
declare interface res_story_read {
    done: boolean
}

/**
 * 引导任务完成
 */
declare interface res_guide_done {
    guide_index: number
}

/**
 * 购买家具
 */
declare interface res_furniture_buy {
    done: boolean
    money: number
}

/**
 * 放置家具
 */
declare interface res_furniture_place {
    done: boolean
}

/**
 * 拉取家具信息
 */
declare interface res_furniture_list {
    placed_furniture: number[],
    my_furniture: number[]
}

/**
 * 购买菜品
 */
declare interface res_food_buy {
    money: number
}

/**
 * 菜品列表
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

/**
 * 购买备菜材料
 */
declare interface res_food_supply {
    money: number //金币
    done: boolean //购买成功
}

/**
 * 为顾客完成一道菜
 */
declare interface res_guest_cook {
    stamina: number, //体力值
    material: number, //剩余材料份额
    cooked: number //已有备好的菜
}

/**
 * 拉取餐厅顾客列表
 */
declare interface res_guest_list {
    list: {
        guest_id: number,
        is_new: boolean, //是否第一次出现的顾客
        story_index: number, //顾客当前最新的故事索引
        is_read: boolean, //当前故事索引是否已读
        position_id: number,
        current_order: number, // 当前订单
        table_foods: number[], //已完成的菜品列表
        book_foods: number[], //已下订单的菜
        current_food: eating_food //当前吃的菜
    }[]
}

/**
 * 拉取指定顾客故事站
 */
declare interface res_guest_story {
    story_index: number, //已解锁到哪个故事
    read: boolean //当前故事是否已读
}

/**
 * 拉取顾客图鉴
 */
declare interface res_guest_category {
    list: {
        guest_id: number, //顾客角色id
        intimacy: number, // 顾客亲密度
        story_index: number //顾客索引
    }[]
}

/**
 * 曝光指定顾客
 */
declare interface res_guest_exposure {
    done: boolean
}

/**
 * 顾客下订单
 * 下订单可能失败，失败后有可能下发一个新订单
 */
declare interface res_guest_booking {
    fid?: number //新订单id
    done: boolean
}

/**
 * 上菜,得钱，得亲密度
 * 可能解锁新故事
 */
declare interface res_guest_food_delivery {
    story_index?: number
    money: number,
    intimacy: number,
    done: boolean
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
