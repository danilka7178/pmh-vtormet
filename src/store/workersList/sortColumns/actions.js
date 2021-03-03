export const CLICK_SORT_INCREASE = "CLICK_SORT_INCREASE";
export const CLICK_SORT_REVERSE = "CLICK_SORT_REVERSE";
export const CLICK_SORT_DEFAULT = "CLICK_SORT_DEFAULT";

export const clickSortIncrease = (data) => ({
   type: CLICK_SORT_INCREASE,
   payload: data,
})

export const clickSortReverse = (data) => ({
   type: CLICK_SORT_REVERSE,
   payload: data,
})

export const clickSortDefault = (data) => ({
   type: CLICK_SORT_DEFAULT,
   payload: data,
})