class EventBus {
  constructor() {
    this.EventBusCache = {
      $uid: 0
    };
  }

  subscribe(type, handler) {
    let cache = this.EventBusCache[type] || (this.EventBusCache[type] = {});

    handler.$uid = handler.$uid || this.EventBusCache.$uid++;
    cache[handler.$uid] = handler;
  }

  post(type, ...param) {
    let cache = this.EventBusCache[type],
      key,
      tmp;

    if (!cache) return;

    for (key in cache) {
      tmp = cache[key];
      cache[key].call(this, ...param);
    }
  }

  unSubscribe(type, handler) {
    let counter = 0,
      $type,
      cache = this.EventBusCache[type];

    if (handler == null) {
      if (!cache) return true;
      return !!this.EventBusCache[type] && (delete this.EventBusCache[type]);
    } else {
      !!this.EventBusCache[type] && (delete this.EventBusCache[type][handler.$uid]);
    }

    for ($type in cache) {
      counter++;
    }

    return !counter && (delete this.EventBusCache[type]);
  }
}

module.exports.eventbus = new EventBus();