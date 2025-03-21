let activeEffect = null;
class Signal {
  constructor(value) {
    this._value = value;
    this.subscribers = new Set();
  }

  get value() {
    // 收集当前活动的副作用作为订阅者
    if (activeEffect) {
      this.subscribers.add(activeEffect);
      activeEffect.deps.add(this.subscribers);
    }
    return this._value;
  }

  set value(newValue) {
    // 对数组进行深度比较和深拷贝
    const hasChanged =
      Array.isArray(this._value) && Array.isArray(newValue)
        ? JSON.stringify(this._value) !== JSON.stringify(newValue)
        : this._value !== newValue;
    if (hasChanged) {
      this._value = Array.isArray(newValue)
        ? JSON.parse(JSON.stringify(newValue))
        : newValue;
      // 立即触发副作用更新
      const uniqueEffects = new Set(this.subscribers);
      uniqueEffects.forEach((effect) => effect.run());
    }
  }
}
class Effect {
  constructor(fn) {
    this.fn = fn;
    this.deps = new Set(); // 存储所有关联的订阅集合
  }

  run() {
    // 清除旧依赖
    cleanup(this);
    activeEffect = this;
    try {
      this.fn();
    } finally {
      activeEffect = null;
    }
  }
}

// 清理旧依赖
function cleanup(effect) {
  effect.deps.forEach((dep) => dep.delete(effect));
  effect.deps.clear();
}
function effect(fn) {
  const e = new Effect(fn);
  e.run();
  return () => cleanup(e); // 返回一个停止副作用的函数
}
function computed(fn) {
  const signal = new Signal();
  let value;
  let dirty = true;

  const effect = new Effect(() => {
    value = fn();
    dirty = false;
    signal.value = value; // 更新信号以触发依赖
  });

  // 依赖变化时标记为脏数据，延迟计算
  effect.scheduler = () => {
    if (!dirty) {
      dirty = true;
      signal.subscribers.forEach((e) => e.run()); // 触发计算值的订阅者
    }
  };

  return {
    get value() {
      if (dirty) {
        effect.run(); // 重新计算值
      }
      return signal.value; // 返回当前值并收集依赖
    },
  };
}
