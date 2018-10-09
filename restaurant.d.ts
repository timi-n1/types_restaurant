
//====================================== config ==================================*/
declare interface guest_config {
    id: number,
    name: string,
    ename: string,
    desc: string,
    direction: number,
    story_list: number[],
    torso_offsetx: number,
    torso_offsety: number
}

/**
 * 后台返回的顾客的数据
 */
declare interface GuestData {
    guest_id: number,
    is_new_come: boolean,
    is_new_story: boolean,
    position_id: number,
    menu: number,
    uid: number,
    book_food_id?: number[],
    order?: number[],
    task_id?: number,
    guestData: guest_config
}

declare interface furniture_config {
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

declare interface food_config {
    pid: number,
    type?: number,
    sub_type?: number,
    is_skin?: number,
    name?: string,
    ename?: string,
    price: number,
    desc?: string,
}

//====================================== position ==================================*/

declare interface guest_pososition {
    name: string,
    x: number,
    y: number,
    id: number
}

declare interface food_position {
    name: string,
    x: number,
    y: number,
    id: number
}

declare interface furniture_position {
    name: string,
    x: number,
    y: number,
    subtype: number,
    fixedTop: boolean,
    fixedBottom: boolean,
    zindex: number,
    id: number
}

//====================================== item ==================================*/

declare interface furniture_item {
    pid: number,
    sub_type: number,
    in_yard?: boolean
}

declare interface food_item {
    pid: number,
    cooked: number,
    material: number,
    update_time: Date,
    foodData: food_config
}

//====================================== 图鉴 ==================================*/
declare interface guestCategory {
    guest_id: number,
    intimacy: number,
    guestData: guest_config
}
