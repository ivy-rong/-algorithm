function erfid(list,item){
    let low = 0
    let high = list.length -1
    let mid = parseInt(( low + high )/2)
    let guess = list[mid]
    if(guess === item) return mid
    if(guess > item) high = mid - 1
    if(guess < item) low = mid + 1
    return mid
}