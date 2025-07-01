// 单词数据，与图片中的内容保持一致
const wordData = [
    {
        word: '-ind',
        phonetic: '',
        chinese: '趣学',
        position: { x: 0.8, y: 0.5, z: 0 },
        isCenter: true,
        color: 0xd32f2f,
        imageEmoji: '📚'
    },
    {
        word: 'wind',
        phonetic: '[wɪnd]',
        chinese: '风',
        position: { x: 0, y: 3.2, z: 0 },
        color: 0x1976d2,
        imageEmoji: '💨'
    },
    {
        word: 'kind',
        phonetic: '[kaɪnd]',
        chinese: '仁慈的',
        position: { x: -3.2, y: 1.6, z: 0 },
        color: 0x388e3c,
        imageEmoji: '👴'
    },
    {
        word: 'find',
        phonetic: '[faɪnd]',
        chinese: '发现',
        position: { x: 3.2, y: 1.6, z: 0 },
        color: 0xff9800,
        imageEmoji: '🔍'
    },
    {
        word: 'blind',
        phonetic: '[blaɪnd]',
        chinese: '失明的',
        position: { x: -3.2, y: -1.6, z: 0 },
        color: 0x7b1fa2,
        imageEmoji: '👨'
    },
    {
        word: 'mind',
        phonetic: '[maɪnd]',
        chinese: '头脑/介意',
        position: { x: 0, y: -3.2, z: 0 },
        color: 0xe91e63,
        imageEmoji: '🧠'
    },
    {
        word: 'behind',
        phonetic: '[bɪˈhaɪnd]',
        chinese: '在后面',
        position: { x: 3.2, y: -1.6, z: 0 },
        color: 0x00796b,
        imageEmoji: '🐅'
    }
];

// 场景设置
let scene, camera, renderer, controls;
let wordObjects = [];
let lines = [];
let raycaster, mouse;

// 初始化场景
function init() {
    // 创建场景
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf5f7fa);
    
    // 创建相机
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 12);
    
    // 创建渲染器
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    document.getElementById('container').appendChild(renderer.domElement);
    
    // 添加光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    
    // 设置控制器
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.enablePan = true;
    
    // 设置鼠标交互
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    
    // 创建单词对象
    createWordObjects();
    
    // 创建连接线
    createConnections();
    
    // 添加事件监听
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('click', onMouseClick);
    
    // 隐藏加载提示
    document.querySelector('.loading').style.display = 'none';
    
    // 开始渲染循环
    animate();
}

// 创建单词对象
function createWordObjects() {
    const fontLoader = new THREE.FontLoader();
    
    wordData.forEach((data, index) => {
        createWordGroup(data, index);
    });
}

// 创建单词组（仅包含图片和文字）
function createWordGroup(data, index) {
    const group = new THREE.Group();
    group.userData = data;
    
    // 创建图片（表情符号或图标）
    createImageTexture(data, group);
    
    // 创建文字贴图
    createTextTexture(data, group);
    
    // 设置位置
    group.position.copy(data.position);
    
    // 添加到场景
    scene.add(group);
    wordObjects.push(group);
}

// 创建图片贴图
function createImageTexture(data, group) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 512;
    canvas.height = 512;
    
    // 清空画布
    context.fillStyle = 'rgba(255, 255, 255, 0)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // 绘制表情符号或图标
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = data.isCenter ? '200px Arial' : '180px Arial';
    context.fillText(data.imageEmoji, canvas.width / 2, canvas.height / 2);
    
    // 创建贴图
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = false;
    
    const material = new THREE.MeshBasicMaterial({ 
        map: texture, 
        transparent: true,
        alphaTest: 0.1
    });
    
    // 图片大小和位置
    const imageSize = data.isCenter ? 1.5 : 1.2;
    const geometry = new THREE.PlaneGeometry(imageSize, imageSize);
    const imageMesh = new THREE.Mesh(geometry, material);
    
    if (data.isCenter) {
        imageMesh.position.set(0.3, 1.0, 0.03); // 中心词图片向右上偏移
    } else {
        imageMesh.position.set(-1.2, 0, 0.03); // 周围单词图片在左侧
    }
    
    group.add(imageMesh);
}

// 创建文字贴图
function createTextTexture(data, group) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 1024;
    canvas.height = 512;
    
    // 清空画布并设置高质量渲染
    context.fillStyle = 'rgba(255, 255, 255, 0)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = 'high';
    
    // 设置文字样式
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    
    if (data.isCenter) {
        // 中心词 - 清晰的大字体，向右上偏移
        const centerTextX = canvas.width / 2 + 100; // 向右偏移
        const centerTextY = canvas.height / 2 - 60; // 向上偏移
        
        context.fillStyle = '#d32f2f';
        context.font = 'bold 80px "Microsoft YaHei", Arial, sans-serif';
        context.fillText(data.word, centerTextX, centerTextY);
        
        // 中文释义
        context.fillStyle = '#d32f2f';
        context.font = 'bold 36px "Microsoft YaHei", Arial, sans-serif';
        context.fillText(data.chinese, centerTextX, centerTextY + 80);
    } else {
        // 周围单词 - 文字位置向右偏移，为左侧图片留出空间
        const textCenterX = canvas.width / 2 + 200;
        
        // 主单词 - 分别绘制前缀和"ind"后缀
        const word = data.word;
        const prefix = word.replace('ind', '');
        const suffix = 'ind';
        
        context.font = 'bold 64px "Microsoft YaHei", Arial, sans-serif';
        
        // 测量文字宽度以便正确对齐
        const prefixWidth = context.measureText(prefix).width;
        const suffixWidth = context.measureText(suffix).width;
        
        // 根据不同单词设置不同间距
        let spacing;
        switch(data.word) {
            case 'wind':
                spacing = 25; // wind需要更大间距
                break;
            case 'kind':
                spacing = 30; // kind需要更大间距
                break;
            case 'find':
                spacing = 40; // find需要最大间距
                break;
            case 'blind':
                spacing = 23; // blind保持当前间距
                break;
            case 'mind':
                spacing = 20; // mind保持当前间距
                break;
            case 'behind':
                spacing = -6; // behind需要更小间距
                break;
            default:
                spacing = 20;
        }
        
        const totalWidth = prefixWidth + suffixWidth + spacing;
        const startX = textCenterX - totalWidth / 2;
        
        // 绘制前缀（原颜色）
        context.fillStyle = `#${data.color.toString(16).padStart(6, '0')}`;
        context.fillText(prefix, startX, canvas.height / 2 - 70);
        
        // 绘制"ind"后缀（红色），增加更大间距避免重叠
        context.fillStyle = '#d32f2f';
        context.fillText(suffix, startX + prefixWidth + spacing, canvas.height / 2 - 70);
        
        // 绘制音标
        if (data.phonetic) {
            context.fillStyle = '#666666';
            context.font = 'bold 32px "Microsoft YaHei", Arial, sans-serif';
            context.fillText(data.phonetic, textCenterX, canvas.height / 2 - 20);
        }
        
        // 绘制中文释义
        context.fillStyle = '#333333';
        context.font = 'bold 36px "Microsoft YaHei", Arial, sans-serif';
        context.fillText(data.chinese, textCenterX, canvas.height / 2 + 30);
    }
    
    // 创建贴图
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = false;
    
    const material = new THREE.MeshBasicMaterial({ 
        map: texture, 
        transparent: true,
        alphaTest: 0.1
    });
    
    const geometry = new THREE.PlaneGeometry(3.6, 2.0);
    const textMesh = new THREE.Mesh(geometry, material);
    
    if (data.isCenter) {
        textMesh.position.set(0.3, 0, 0.02); // 中心词文字向右偏移，与图片对齐
    } else {
        textMesh.position.set(0.3, 0, 0.02); // 周围单词文字稍微向右偏移
    }
    
    group.add(textMesh);
}

// 创建连接线
function createConnections() {
    const centerWord = wordObjects[0]; // -ind是中心词
    
    for (let i = 1; i < wordObjects.length; i++) {
        const targetWord = wordObjects[i];
        
        // 计算连接线的起点和终点，考虑实际的单词布局
        const direction = new THREE.Vector3()
            .subVectors(targetWord.position, centerWord.position)
            .normalize();
        
        // 中心词的边缘点（从中心词实际中心出发，向右偏移）
        const centerEdge = new THREE.Vector3()
            .copy(centerWord.position)
            .add(direction.clone().multiplyScalar(1.0))
            .add(new THREE.Vector3(0.7, 0, 0)); // 增加向右偏移
        
        // 目标词的边缘点（考虑目标词图片在左侧，文字在右侧的布局，连接到文字区域）
        const targetEdge = new THREE.Vector3()
            .copy(targetWord.position)
            .add(direction.clone().multiplyScalar(-0.8))
            .add(new THREE.Vector3(0.9, 0, 0)); // 增加向右偏移到文字区域
        
        // 创建从中心边缘到目标边缘的连接线
        const points = [centerEdge, targetEdge];
        
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineDashedMaterial({ 
            color: 0xd32f2f, 
            linewidth: 2,
            dashSize: 0.2,
            gapSize: 0.1
        });
        
        const line = new THREE.Line(geometry, material);
        line.computeLineDistances();
        scene.add(line);
        lines.push(line);
        
        // 添加箭头（位置稍微调整）
        createArrow(centerEdge, targetEdge);
    }
}

// 创建箭头
function createArrow(start, end) {
    const direction = new THREE.Vector3().subVectors(end, start).normalize();
    const distance = start.distanceTo(end);
    
    // 箭头位置（调整为更合适的位置）
    const arrowPosition = new THREE.Vector3()
        .copy(start)
        .add(direction.clone().multiplyScalar(distance * 0.90));
    
    // 创建箭头几何体
    const arrowGeometry = new THREE.ConeGeometry(0.15, 0.4, 8);
    const arrowMaterial = new THREE.MeshBasicMaterial({ color: 0xd32f2f });
    const arrow = new THREE.Mesh(arrowGeometry, arrowMaterial);
    
    // 设置箭头位置和方向
    arrow.position.copy(arrowPosition);
    arrow.lookAt(end);
    arrow.rotateX(Math.PI / 2);
    
    scene.add(arrow);
}



// 鼠标点击事件
function onMouseClick(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(wordObjects, true);
    
    if (intersects.length > 0) {
        const clickedObject = intersects[0].object.parent;
        const data = clickedObject.userData;
        
        // 更新信息面板
        updateInfoPanel(data);
        
        // 添加点击动画
        animateClick(clickedObject);
    }
}

// 更新信息面板
function updateInfoPanel(data) {
    const infoDiv = document.getElementById('info');
    infoDiv.innerHTML = `
        <h3>单词详情</h3>
        <p><strong>单词:</strong> ${data.word}</p>
        <p><strong>音标:</strong> ${data.phonetic || '无'}</p>
        <p><strong>中文:</strong> ${data.chinese}</p>
        <p style="margin-top: 15px; font-size: 12px; color: #666;">
            点击其他单词查看更多信息
        </p>
    `;
}

// 点击动画
function animateClick(object) {
    const originalScale = object.scale.clone();
    const targetScale = originalScale.clone().multiplyScalar(1.2);
    
    // 放大动画
    new TWEEN.Tween(object.scale)
        .to(targetScale, 200)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onComplete(() => {
            // 缩回动画
            new TWEEN.Tween(object.scale)
                .to(originalScale, 200)
                .easing(TWEEN.Easing.Quadratic.Out)
                .start();
        })
        .start();
}

// 窗口大小改变事件
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// 渲染循环
function animate() {
    requestAnimationFrame(animate);
    
    controls.update();
    
    // 更新补间动画
    if (typeof TWEEN !== 'undefined') {
        TWEEN.update();
    }
    
    renderer.render(scene, camera);
}

// 简单的补间动画库（如果TWEEN.js不可用）
if (typeof TWEEN === 'undefined') {
    window.TWEEN = {
        Tween: function(object) {
            this.object = object;
            this.to = function(properties, duration) {
                this.targetProperties = properties;
                this.duration = duration;
                return this;
            };
            this.easing = function(easingFunction) {
                return this;
            };
            this.onComplete = function(callback) {
                this.onCompleteCallback = callback;
                return this;
            };
            this.start = function() {
                const startTime = Date.now();
                const startProperties = {};
                for (let prop in this.targetProperties) {
                    startProperties[prop] = this.object[prop];
                }
                
                const animate = () => {
                    const elapsed = Date.now() - startTime;
                    const progress = Math.min(elapsed / this.duration, 1);
                    
                    for (let prop in this.targetProperties) {
                        if (typeof startProperties[prop] === 'object') {
                            for (let subProp in this.targetProperties[prop]) {
                                this.object[prop][subProp] = startProperties[prop][subProp] + 
                                    (this.targetProperties[prop][subProp] - startProperties[prop][subProp]) * progress;
                            }
                        } else {
                            this.object[prop] = startProperties[prop] + 
                                (this.targetProperties[prop] - startProperties[prop]) * progress;
                        }
                    }
                    
                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else if (this.onCompleteCallback) {
                        this.onCompleteCallback();
                    }
                };
                animate();
            };
            return this;
        },
        update: function() {},
        Easing: {
            Quadratic: {
                Out: function(t) { return t * (2 - t); }
            }
        }
    };
}

// 页面加载完成后初始化
window.addEventListener('load', init); 