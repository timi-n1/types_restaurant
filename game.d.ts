

declare interface anima_config {
    id: number,
    name: string,
    desc: string,
    toy_sub_type: number,
    attachment: string,
    defaultSkin?: string,
    sampleCatId?: number
}

declare interface cat_category_config {
    id: number,
    name: string,
    ename: string,
    desc: string,
    character: number,
    award: number,
    rare: number,
    west: number,
    east: number,
    ancient: number,
    modern: number,
    anima_list: number[]
}

/**
 * 后台返回的猫的数据
 */
declare interface CatData {
    /**
     * 猫的唯一id
     */
    uid?: number,
    /**
     * 猫的种类id
     */
    cat_id: number,
    /**
     * 位置id
     */
    pos_id?: number,
    /**
     * 动画id
     */
    anima_id: number,
    /**
     * 猫在玩的玩具id
     */
    toy_id?: number,
    /**
     * 个性化名字
     */
    name?: string,
    /**
     * 亲密度
     */
    intimacy?: number,
    next_play_time?: number,
    //撸了几次了
    play_counter?: number,
    catData?: cat_category_config,
    animaData?: anima_config,
    //任务唯一id
    tid?: number,
    //任务配置id
    task_id?: number,
    //是否新发现的猫
    is_new?: boolean
}

declare interface YardScrollData {
    type: any,
    pos_id: number,
    uid?: number,
    fromtask?: boolean
}

declare interface goods_config {
    pid: number,
    type: number,
    price: number,
    name: string,
    ename: string,
    desc: string,
    sub_type: number,
    anchorx: number,
    anchory: number,
    west: number,
    east: number,
    ancient: number,
    modern: number
}

declare interface task_config {
    id: number,
    type: number,
    icon: string,
    talk1: string,
    talk2: string,
    talk3: string,
    talk_btn1: string,
    talk_btn2: string,
    talk_btn3: string,
    complete1: string,
    complete2: string,
    complete3: string
}

declare interface cat_pos_in_yard {
    name: string,
    x: number,
    y: number,
    id: number
}

declare interface furniture_pos_in_yard {
    name: string,
    x: number,
    y: number,
    subtype: number,
    fixedTop: boolean,
    fixedBottom: boolean,
    zindex: number,
    id: number
}

declare interface toy_pos_in_yard {
    name: string,
    x: number,
    y: number,
    id: number
}

declare interface item_furniture {
    pid: number,
    sub_type: number,
    in_yard: boolean
}

declare interface item_toy {
    pid: number,
    in_yard: boolean,
    using: boolean
}

declare interface furniture_in_yard {
    pid: number,
    sub_type: number
}

declare interface toy_in_yard {
    pid: number,
    position_id: number
}

declare interface food_in_yard {
    pid: number,
    rest_food: number,
    buy_time: number,
    life_time: number,
    part_time: number
}

declare interface notice_data {
    noticeStartTime: 0,     //公告显示的起始时间
    updateStartTime: 0,     //更新维护的起始时间
    updateEndTime: 0,   //更新维护的结束时间
    noticeContent: '',      //更新之前的公告内容
    updateContent: '',  //更新期间的公告内容
}