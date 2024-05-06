function merge(nums1, nums2) {
    const position = nums1.indexOf(0);
    nums1.splice(position, nums2.length, ...(nums2));
    nums1.sort((a, b) => a > b ? 1 : -1);
}

const nums1 = [1,2,3,0,0,0];
const nums2 = [2,5,6];
merge(nums1, nums2);
console.log(nums1);
