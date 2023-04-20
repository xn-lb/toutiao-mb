// 本地存储封装模块

// 获取
export const getItem = (name) => {
    const data = window.localStorage.getItem(name)
    try {
        // 尝试把data转为JavaScript对象
        return JSON.parse(data)
    } catch (err) {
        // data不是JSON格式字符串，直接原样返回
        return data
    }
}

// 存储
export const setItem = () => {}

// 删除
export const removeItem = () => {}