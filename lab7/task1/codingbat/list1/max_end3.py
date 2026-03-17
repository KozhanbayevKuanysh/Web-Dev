def max_end3(nums):
    if nums[0] > nums[2]:
        max_val = nums[0]
    else:
        max_val = nums[2]
    return [max_val, max_val, max_val]