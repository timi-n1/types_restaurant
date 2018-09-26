interface login_res {
	open_id: string,
	money: number
}

interface cat_list_res {
  list: {
    animaData?: {
      attachment: any,
      desc: string,
      id: number,
      intimacy: number,
      name: string,
      short: string,
      toy_sub_type: number
    },
    catData?: {
      ancient: number,
      desc: string,
      east: number,
      ename: string,
      id: number,
      modern: number,
      name: string,
      rare: number,
      west: number
    },
    anima_id: number,
    anima_update_time?: number,
    cat_id: number,
    intimacy: number,
    name: string,
    next_play_time: number
    toy_id: number,
    pos_id: any,
    uid: number,
    is_new?: boolean
  }[]
}

interface goods_list_res {
  cats_food: any,
	my_item: number[],
	placed_furnitures: number[],
	placed_toys: {pid: number, position_id: number}[]
}

interface shop_buy_res {
  money?: number,
  msg?: string,
  pos_id?: any
}

interface furniture_place_res {
  msg?: string
}

interface group_yard_list_res {
  list: {
    type: any,
    icon: string,
    active: boolean,
    yard_id: number,
    last_visit_time?: number
  }[]
}

interface yard_detail_res {
  unlock_cats?: {
    cat_id?: number,
    owners_open_id?: any[]
  }[],
  my_items: number[],
  visitors?: any[]
}
