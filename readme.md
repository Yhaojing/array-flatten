# array-flattened
## KeyPoint
 * 递归调用
 * 将全局变量设置在参数中
 * 函数包裹，延缓执行
# Usage
``` javascript
import flatten from 'array-flattened'
flatten([1, 2, 3, [4], [5, ['a']]]);
// => [1, 2, 3, 4, 5, 'a']
```
### Author
haoj
### reference
arr-flatten