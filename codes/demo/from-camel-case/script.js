// 核心转换函数
const fromCamelCase = (str, separator = '_') =>
  str
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
    .toLowerCase();

// 全局变量
let conversionStats = {
    keyCount: 0,
    depth: 0,
    processTime: 0
};

// DOM元素
const elements = {
    inputData: document.getElementById('inputData'),
    outputData: document.getElementById('outputData'),
    separatorSelect: document.getElementById('separatorSelect'),
    convertBtn: document.getElementById('convertBtn'),
    loadSampleBtn: document.getElementById('loadSampleBtn'),
    clearInputBtn: document.getElementById('clearInputBtn'),
    copyBtn: document.getElementById('copyBtn'),
    downloadBtn: document.getElementById('downloadBtn'),
    keyCount: document.getElementById('keyCount'),
    depthCount: document.getElementById('depthCount'),
    processTime: document.getElementById('processTime'),
    notification: document.getElementById('notification'),
    notificationText: document.getElementById('notificationText')
};

// 示例数据
const sampleData = {
    userProfile: {
        firstName: "张三",
        lastName: "先生",
        emailAddress: "zhangsan@example.com",
        phoneNumber: "+86-138-0013-8000",
        dateOfBirth: "1990-01-15",
        profileImageUrl: "https://example.com/avatar.jpg",
        isEmailVerified: true,
        accountStatus: "active",
        lastLoginTime: "2025-06-25T10:30:00Z",
        preferredLanguage: "zh-CN",
        timeZoneOffset: "+08:00",
        socialMediaAccounts: {
            wechatId: "zhangsan_wx",
            weiboHandle: "@zhangsan123",
            linkedInProfile: "https://linkedin.com/in/zhangsan"
        },
        accountSettings: {
            allowEmailNotifications: true,
            allowSmsNotifications: false,
            privacyLevel: "public",
            twoFactorAuthEnabled: true
        }
    },
    orderInformation: {
        orderId: "ORD-2025-001234",
        customerId: "CUST-789456",
        orderStatus: "processing",
        orderDate: "2025-06-25T08:15:00Z",
        estimatedDeliveryDate: "2025-06-28T18:00:00Z",
        totalAmount: 299.99,
        discountAmount: 29.99,
        finalAmount: 270.00,
        paymentMethod: "credit_card",
        shippingAddress: {
            recipientName: "李四",
            streetAddress: "北京市朝阳区建国门外大街1号",
            cityName: "北京",
            postalCode: "100022",
            countryCode: "CN",
            phoneNumber: "+86-139-0013-9000"
        },
        orderItems: [
            {
                productId: "PROD-12345",
                productName: "智能手机",
                productCategory: "electronics",
                unitPrice: 199.99,
                quantity: 1,
                totalPrice: 199.99,
                productImageUrl: "https://example.com/phone.jpg"
            },
            {
                productId: "PROD-67890",
                productName: "手机保护套",
                productCategory: "accessories",
                unitPrice: 29.99,
                quantity: 1,
                totalPrice: 29.99,
                productImageUrl: "https://example.com/case.jpg"
            }
        ]
    },
    analyticsData: {
        websiteTraffic: {
            totalPageViews: 150000,
            uniqueVisitors: 45000,
            bounceRate: 0.35,
            averageSessionDuration: 180,
            topReferralSources: ["google.com", "baidu.com", "direct"],
            mobileTrafficPercentage: 0.68
        },
        salesMetrics: {
            totalRevenue: 125000.50,
            numberOfOrders: 1250,
            averageOrderValue: 100.00,
            conversionRate: 0.028,
            customerLifetimeValue: 450.00,
            monthlyRecurringRevenue: 25000.00
        },
        userEngagement: {
            activeUsers: 8500,
            newUserRegistrations: 120,
            userRetentionRate: 0.75,
            averageTimeOnSite: 240,
            emailOpenRate: 0.22,
            clickThroughRate: 0.05
        }
    }
};

// 深度转换对象键名
function convertObjectKeys(obj, separator = '_') {
    const startTime = performance.now();
    conversionStats.keyCount = 0;
    conversionStats.depth = 0;
    
    const result = convertKeysRecursive(obj, separator, 0);
    
    const endTime = performance.now();
    conversionStats.processTime = Math.round(endTime - startTime);
    
    return result;
}

function convertKeysRecursive(obj, separator, currentDepth) {
    conversionStats.depth = Math.max(conversionStats.depth, currentDepth);
    
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    if (Array.isArray(obj)) {
        return obj.map(item => convertKeysRecursive(item, separator, currentDepth + 1));
    }
    
    const converted = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            conversionStats.keyCount++;
            const newKey = fromCamelCase(key, separator);
            converted[newKey] = convertKeysRecursive(obj[key], separator, currentDepth + 1);
        }
    }
    
    return converted;
}

// 显示通知
function showNotification(message, type = 'success') {
    elements.notificationText.textContent = message;
    elements.notification.className = `notification ${type}`;
    elements.notification.classList.add('show');
    
    setTimeout(() => {
        elements.notification.classList.remove('show');
    }, 3000);
}

// 更新统计信息
function updateStats() {
    elements.keyCount.textContent = conversionStats.keyCount;
    elements.depthCount.textContent = conversionStats.depth;
    elements.processTime.textContent = `${conversionStats.processTime}ms`;
}

// 格式化JSON输出
function formatJSON(obj) {
    return JSON.stringify(obj, null, 2);
}

// 验证JSON输入
function validateJSON(str) {
    try {
        JSON.parse(str);
        return true;
    } catch {
        return false;
    }
}

// 转换处理
function handleConversion() {
    const inputText = elements.inputData.value.trim();
    
    if (!inputText) {
        showNotification('请输入要转换的JSON数据', 'error');
        return;
    }
    
    if (!validateJSON(inputText)) {
        showNotification('输入的JSON格式不正确，请检查语法', 'error');
        return;
    }
    
    try {
        const inputObject = JSON.parse(inputText);
        const separator = elements.separatorSelect.value;
        const convertedObject = convertObjectKeys(inputObject, separator);
        const formattedOutput = formatJSON(convertedObject);
        
        elements.outputData.textContent = formattedOutput;
        updateStats();
        showNotification('转换成功完成！');
        
        // 启用输出相关按钮
        elements.copyBtn.disabled = false;
        elements.downloadBtn.disabled = false;
        
    } catch (error) {
        showNotification('转换过程中发生错误：' + error.message, 'error');
    }
}

// 加载示例数据
function loadSampleData() {
    const formattedSample = formatJSON(sampleData);
    elements.inputData.value = formattedSample;
    showNotification('示例数据已加载');
}

// 清空输入
function clearInput() {
    elements.inputData.value = '';
    elements.outputData.textContent = '';
    conversionStats = { keyCount: 0, depth: 0, processTime: 0 };
    updateStats();
    elements.copyBtn.disabled = true;
    elements.downloadBtn.disabled = true;
    showNotification('输入已清空');
}

// 复制结果
async function copyResult() {
    const outputText = elements.outputData.textContent;
    
    if (!outputText) {
        showNotification('没有可复制的内容', 'error');
        return;
    }
    
    try {
        await navigator.clipboard.writeText(outputText);
        showNotification('结果已复制到剪贴板');
    } catch {
        // 降级处理
        const textArea = document.createElement('textarea');
        textArea.value = outputText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('结果已复制到剪贴板');
    }
}

// 下载JSON文件
function downloadResult() {
    const outputText = elements.outputData.textContent;
    
    if (!outputText) {
        showNotification('没有可下载的内容', 'error');
        return;
    }
    
    const blob = new Blob([outputText], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `converted-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('文件下载已开始');
}

// 键盘快捷键
function handleKeyboard(event) {
    if (event.ctrlKey || event.metaKey) {
        switch (event.key) {
            case 'Enter':
                event.preventDefault();
                handleConversion();
                break;
            case 'l':
                event.preventDefault();
                loadSampleData();
                break;
            case 'k':
                event.preventDefault();
                clearInput();
                break;
        }
    }
}

// 实时输入验证
function handleInputChange() {
    const inputText = elements.inputData.value.trim();
    const isValid = inputText && validateJSON(inputText);
    
    elements.convertBtn.disabled = !isValid;
    
    if (inputText && !isValid) {
        elements.inputData.style.borderColor = '#e74c3c';
    } else {
        elements.inputData.style.borderColor = '#ddd';
    }
}

// 初始化事件监听器
function initializeEventListeners() {
    elements.convertBtn.addEventListener('click', handleConversion);
    elements.loadSampleBtn.addEventListener('click', loadSampleData);
    elements.clearInputBtn.addEventListener('click', clearInput);
    elements.copyBtn.addEventListener('click', copyResult);
    elements.downloadBtn.addEventListener('click', downloadResult);
    
    elements.inputData.addEventListener('input', handleInputChange);
    elements.separatorSelect.addEventListener('change', () => {
        if (elements.inputData.value.trim()) {
            handleConversion();
        }
    });
    
    document.addEventListener('keydown', handleKeyboard);
    
    // 初始状态
    elements.copyBtn.disabled = true;
    elements.downloadBtn.disabled = true;
    elements.convertBtn.disabled = true;
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    updateStats();
    
    // 显示欢迎消息
    setTimeout(() => {
        showNotification('欢迎使用API格式转换器！点击"加载示例数据"开始体验');
    }, 1000);
});

// 添加一些实用的辅助函数
const utils = {
    // 检测字符串是否为驼峰命名
    isCamelCase: (str) => {
        return /^[a-z][a-zA-Z0-9]*$/.test(str) && /[A-Z]/.test(str);
    },
    
    // 统计对象中驼峰命名的键数量
    countCamelCaseKeys: (obj) => {
        let count = 0;
        
        function traverse(current) {
            if (current && typeof current === 'object' && !Array.isArray(current)) {
                for (const key in current) {
                    if (current.hasOwnProperty(key) && utils.isCamelCase(key)) {
                        count++;
                    }
                    traverse(current[key]);
                }
            } else if (Array.isArray(current)) {
                current.forEach(traverse);
            }
        }
        
        traverse(obj);
        return count;
    },
    
    // 生成转换预览
    previewConversion: (key, separator = '_') => {
        return `${key} → ${fromCamelCase(key, separator)}`;
    }
};

// 导出工具函数供其他模块使用
window.CamelCaseConverter = {
    fromCamelCase,
    convertObjectKeys,
    utils
};
