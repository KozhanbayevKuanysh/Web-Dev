def centered_average(nums):
    centered_sum = sum(nums) - min(nums) - max(nums)
    
    return centered_sum // (len(nums) - 2)