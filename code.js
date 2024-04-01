 
// References:
// https://www.geeksforgeeks.org/binary-search-in-javascript/ for help
// https://www.youtube.com/watch?v=P3YID7liBug (helped for visualization of algorithm)
 
function binarySearch(list, element) {
    if(list.length == 1){
        if(list[0] == element){
            return 0;
        } else {
            return -1;
        }
    } else {
        let mid = Math.floor((list.length-1)/2);
        if(list[mid] == element){
            if(binarySearch(list.slice(0, mid), element) == -1){
                return mid;
            } else {
                return binarySearch(list.slice(0, mid), element);
            }
        } else if(element < list[mid]) { 
            return binarySearch(list.slice(0, mid), element);
        } else if(element > list[mid]){
            if(binarySearch(list.slice(mid+1, list.length), element) != -1){
                return ++mid + binarySearch(list.slice(mid, list.length), element);
            } else {
                return -1;
            }
        }
        return -1;
    }
}
