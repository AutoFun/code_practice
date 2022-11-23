// prices array , we use for loop to compare the value
var maxProfit = function (prices){
    let profit=0 //
    for(let n=1;n<prices.length;n++){
        if(prices[n]>prices[n-1])
            profit+=prices[n]-prices[n-1]
    }

    return profit
}

// binary search
// leetcode question
export const search = function(nums, target){
    if(!nums|| nums.length===0) //special case(!nums||nums.length===0)
        return -1
    
    let start=0
    let end=nums.length
    while(start<end){
        const mid=Math.floor(start+(end -start)/2) // Math.floor
        if(target===nums[mid]){
            end=mid
        } else if (target<nums[mid]){
            end =mid -1
        } else {
            start=mid+1
        }
    }
    
    if(target===nums[start]){
        return start //return start
    }
    

    return -1
}


// Happy number

export const isHappy = function(n){
    const set= new Set()

    while(n!==1&&!set.has(n)){
        set.add(n)
        n=n.toString().split('').reduce((a,b)=>a+b*b,0)
    }

    return n===1
}

// single number

export var singleNumber=function (nums){
    return nums.reduce((a,b)=>a^b)
}


// list

export const hasCycle= function (head){
    if(!head||!head.next)
        return false

        let slow=head
        let fast=head.next

    while(ture){
        if(!fast||!fast.next)
            return false
        else if(fast.next===slow||fast===slow) 
            return true
        else {
            fast=fast.next.next
            slow=slow.next
        }
    }

}


//

/**
 * @param{ListNode} head
 * @return{ListNode}
*/
import {mergeTwoLists}from './merge-two-sorted-lists'
export const sortList =function(head){
    if(head===null||head.next===null)
        return head
    
    let slow=head
    let fast=head
    while(fast!==null){
        fast= fast.next
        fast= fast!==null?fast.next:null
        if(fast!==null){
            slow=slow.next
        }

    }
    const half=slow.next
    slow.next=null
    const left=sortList(head)
    const right=sortList(half)
    return mergeTwoLists(left,right)
}

// git pull pracitce

// bitbucket test: check the commit history



