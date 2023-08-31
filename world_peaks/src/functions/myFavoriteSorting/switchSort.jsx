export const switchSort = (type) => {
    if (type === "asc"){
        type = "des";
    } else {
        type = "asc"   
    }
    return type
}