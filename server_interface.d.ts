/*
 * 命令字查询接口命名格式
 * req_${cmds}
 * 
 */

/**
 * 曝光故事已读接口
 * @param {number} [guest_id] - 读故事的顾客
 * @param {number} [story_index] - 已读故事索引
 */
declare interface req_story_read {
    story_index: number,
    guest_id: number
}

/**
 * 引导任务完成接口
 * @param {number} [task_id] - 引导任务id
 */
declare interface req_task_done {
    task_id: number
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
    rid?: number,
    should_update?: boolean
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
 * 获取体力值
 */
declare interface req_user_get_stamina {
}

/**
 * 获取顾客当前吃的菜
 */
declare interface req_guest_get_order {}

/**
 * 获取当前顾客吃的菜
 */
declare interface req_guest_eating_food {
    guest_id: number
}

/**
 * 当前餐厅访客信息
 */
declare interface req_restaurant_visit_info {
    rid: number
}

/**
 * 打工
 */
declare interface req_user_work {
    rid: string,
    fid: number
}

/**
 * 进入主人餐馆获取订单
 */
declare interface req_user_get_work_order {
    rid: number
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
 * - 分享模块
 * 8600 - 8699
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
    invalid_fid = 8200,
    fid_not_buy = 8201,
    no_food_material = 8202,
    supply_counter_limited = 8203,
    invalid_guest_id = 8300,
    guest_is_lock = 8301,
    no_cooked_food = 8302,
    stamina_is_lack = 8303,
    story_is_read = 8400,
    invalid_task_id = 8500,
    task_has_done = 8501,
    work_times_limited = 8600,

    guest_server_error = 9000,
    fid_not_exist = 9001,
    guest_not_exist = 9002,
    food_delivery_fail = 9003,
    period_food_limited = 9004,
    table_full = 9005,

}

declare const enum AppMsg {
    'pid_not_exist!' = '出问题了，维修工人排查中', //家具不存在
    'invalid_operations' = '出问题了，维修工人排查中', //传入购买家具ID不合法
    'not_enough_money' = '金币不足', //不够钱
    'invalid_guest_id' = '出问题了，维修工人排查中', // 配置表上顾客不能存在
    'guest_is_lock' = '该顾客未解锁', // 该顾客没有解锁
    'invalid_fid' = '没有该菜品，非法菜品', // 配置表中没有该菜品
    'fid_not_buy' = '该菜品没有学习', // 该菜品没有学习
    'guest_not_exist' = '出问题了，维修工人排查中', // 顾客服务器顾客不存在
    'fid_not_exist' = '出问题了，维修工人排查中', // 顾客服务器中该菜品不在订单上
    'no_food_material' = '该菜品没有原材料了', // 菜品没有原材料了
    'no_cooked_food' = '没有做好的菜品', // 没有制作好的该类型菜品
    'same_item' = '购买了同样的物品',//已经购买过该家具/菜品
    'stamina_is_lack' = '体力值不够', // 体力值不够无法撸菜
    'story_is_read' = '该故事已经阅读', // 该故事已经被阅读过
    'food_delivery_fail' = '顾客上菜失败', // 顾客服务器上菜失败
    'invalid_task_id' = '出问题了，维修工人排查中', // 引导任务不存在
    'task_has_done' = '该任务已经做过了', // 引导任务已经完成或该任务已经完成
    'work_times_limited' = '今日打工次数已达上限', // 今日的打工次数使用完了
    'period_food_limited' = '该周期内菜品数量已达上限', // 在该周期内菜品数量达到上限
    'table_full' = '餐桌上菜满了', // 餐桌上的菜满了 
    'supply_counter_limited' = '一种菜品最多备十份哦~', // 备份数额超过最大备份数
    'guest_server_error' = '顾客服务器默认error', // 顾客服务器的默认错误 
    'wx_auth_err' = '出问题了，维修工人排查中',//微信登录失败
    'server_err' = '出问题了，维修工人排查中',//服务器异常,所有未定义的错误
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
 * 
 */



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
    cmd?: string,
    data: T
}

/**
 * 顾客故事阅读完成
 */
declare type res_story_read = null

/**
 * 引导任务完成
 * @return {number} [task_id] 下一个任务id task_id = -1时 表示引导任务全部完成
 */
declare interface res_task_done {
    task_id: number
}

/**
 * 购买家具
 */
declare interface res_furniture_buy {
    money: number
}

/**
 * 放置家具
 */
declare type res_furniture_place = null

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
    money: number, //金币
    material: number, // 当前材料数
    cooked: number, // 成品数
    expire_during: time_stamp //备菜过期时间
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
 * 注：
 * 1. 当顾客未解锁任何故事 story_index = -1
 * 2. 当顾客目前没有正在出的菜 current_food = null
 */
declare interface res_guest_list {
    countdown: number // 下次刷新倒计时时间差
    list: {
        task_id?: number, // 可能有的引导任务
        guest_id: number,
        // is_new: boolean, //是否第一次出现的顾客
        story_index: number, //顾客当前最新的故事索引
        is_read: boolean, //当前故事索引是否已读
        position_id: number,
        intimacy: number, // 亲密度
        current_order: number, // 当前订单
        table_foods: number[], //已完成的菜品列表
        book_foods: number[], //已下订单的菜
        current_food: eating_food | null //当前吃的菜
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
declare type res_guest_exposure  = null

/**
 * 顾客下订单
 * 下订单可能失败，失败后有可能下发一个新订单
 */
declare interface res_guest_booking {
    current_order?: number //新订单id
}

/***
 * 所有参数都必须使用 encodeURIComponent 编码
 * @param {string} nick_name
 * @param {string} avatar_url
 */
declare interface req_user_info{
    nick_name:string,
    avatar_url:string
}

/**
 * 上菜,得钱，得亲密度
 * 可能解锁新故事
 * 可能是要吃的食物
 */
declare interface res_guest_food_delivery {
    current_food?: eating_food
    story_index?: number
    money: number,
    intimacy: number
}

/**
 * 返回体力值接口
 */
declare interface res_user_get_stamina {
    stamina: number
}

/**
 * 获取当前顾客吃的菜
 */
declare interface res_guest_eating_food {
    current_food: eating_food | null,
    is_leave: boolean,
    current_order?: number
}

/**
 * 获取顾客订单
 */
declare interface res_guest_get_order {
    list: {
        guest_id: number,
        current_order: number, // 当前订单
    }[]
}

/**
 * 获取新刷顾客信息
 */
declare interface res_new_guest {
    list: {
        task_id?: number, // 可能有的引导任务
        guest_id: number,
        // is_new: boolean, //是否第一次出现的顾客
        story_index: number, //顾客当前最新的故事索引
        is_read: boolean, //当前故事索引是否已读
        position_id: number,
        intimacy: number, // 亲密度
        current_order: number, // 当前订单
        table_foods: number[], //已完成的菜品列表
        book_foods: number[], //已下订单的菜
        current_food: eating_food | null //当前吃的菜
    }[]
}

/**
 * 获取餐馆访客信息
 */
declare interface res_restaurant_visit_info {
    visitor_list: {
        open_id: string, // open_id
        avatar_url?: string
    }[], 
    visitor_cooked_list: {
        fid: number,
        count: number
    }[]
}

/**
 * 打工
 */
declare interface res_user_work {
    money: number
    current_order: number
}

/**
 * 进入主人餐馆获取订单
 */
declare interface res_user_get_work_order {
    current_order?: number
}

declare const enum ServerInterFace {
    /**
     * 故事系统模块 - story
     */
    story_read = 'story_read',
    /**
     * 新手引导模块 - guide
     */
    task_done = 'task_done',
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
