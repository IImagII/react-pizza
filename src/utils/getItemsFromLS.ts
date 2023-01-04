export const getItemsFromLS = () => {
   const data = localStorage.getItem('items')
   return data ? JSON.parse(data) : []
}

export const getAddCountFromLS = () => {
   const data = localStorage.getItem('addCount')
   return data ? JSON.parse(data) : 0
}

export const getTotalPriceFromLS = () => {
   const data = localStorage.getItem('totalPrice')
   return data ? JSON.parse(data) : 0
}
