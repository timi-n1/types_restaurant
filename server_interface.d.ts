declare interface BaseRequest {
    open_id: string
}

declare interface req_story_read extends BaseRequest {
    story_index: number
}

declare interface req_guide_done extends BaseRequest {
    guide_index: number
}

declare interface req_furniture_buy extends BaseRequest {
    pid: number
}

declare interface req_furniture_place extends BaseRequest {
    pid: number
}

declare interface req_furniture_buy extends BaseRequest {
    pid: number
}

declare interface req_furniture_list extends BaseRequest {
    yard_id: string
}

declare interface req_food_buy extends BaseRequest {
    pid: number
}

declare interface req_food_list extends BaseRequest {
    yard_id: string
}

declare interface req_food_supply extends BaseRequest {
    fid: number
    yard_id: string
}

declare interface req_guest_cook extends BaseRequest {
    fid: number
    guest_id: number
}

declare interface req_guest_list extends BaseRequest {
    yard_id: number
    guest_ids?: number[]
}

declare interface req_guest_category extends BaseRequest {    
}

declare interface req_guest_story extends BaseRequest {
    guest_id: number
}

declare interface req_guest_exposure extends BaseRequest {
    guest_id: number
}

declare interface req_guest_booking extends BaseRequest {
    fid: number
    guest_id: number
    yard_id: string
}

declare interface BaseResponse {
    ret: number,
    msg?: string
}

declare interface res_story_read extends BaseResponse {
    data: {}
}

declare interface res_guide_done extends BaseResponse {
    data: {
        guide_index: number
    }
}

declare interface res_furniture_buy extends BaseResponse {
    data: {
        money: number
    }
}

declare interface res_furniture_place extends BaseResponse {
    data: {}
}

declare interface res_furniture_list extends BaseResponse {
    data: {
        placed_furniture: number[],
        all_furniture: number[]
    }
}

declare interface res_food_buy extends BaseResponse {
    data: {
        money: number
    }
}

declare interface res_food_list extends BaseResponse {
    data: {
        list: {
            pid: number,
            cooked: number,
            material: number,
            update_time: Date
        }[]
    }
}

declare interface res_food_supply extends BaseResponse {
    data: {
        money: number
    }
}

declare interface res_guest_cook extends BaseResponse {
    data: {
        money: number,
        stamina: number,
        favorability: number
    }
}

declare interface res_guest_list extends BaseResponse {
    data: {
        list: {
            guest_id: number,
            is_new_come: boolean,
            is_new_story: boolean,
            position_id: number,
            menu: number
        }[]
    }
}

declare interface res_guest_story extends BaseResponse {
    data: {
        story_index: number
    }
}

declare interface res_guest_category extends BaseResponse {
    data: {
        list: {
            guest_id: number,
            favorability: number
        }[]
    }
}

declare interface res_guest_exposure extends BaseResponse {
    data: {}
}

declare interface res_guest_booking extends BaseResponse {
    data: {}
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
} 
