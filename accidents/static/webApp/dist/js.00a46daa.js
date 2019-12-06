// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/ol/MapEventType.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/MapEventType
 */

/**
 * @enum {string}
 */
var _default = {
  /**
   * Triggered after a map frame is rendered.
   * @event module:ol/MapEvent~MapEvent#postrender
   * @api
   */
  POSTRENDER: 'postrender',

  /**
   * Triggered when the map starts moving.
   * @event module:ol/MapEvent~MapEvent#movestart
   * @api
   */
  MOVESTART: 'movestart',

  /**
   * Triggered after the map is moved.
   * @event module:ol/MapEvent~MapEvent#moveend
   * @api
   */
  MOVEEND: 'moveend'
};
exports.default = _default;
},{}],"node_modules/ol/util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.abstract = abstract;
exports.inherits = inherits;
exports.getUid = getUid;
exports.VERSION = void 0;

/**
 * @module ol/util
 */

/**
 * @return {?} Any return.
 */
function abstract() {
  return (
    /** @type {?} */
    function () {
      throw new Error('Unimplemented abstract method.');
    }()
  );
}
/**
 * Inherit the prototype methods from one constructor into another.
 *
 * Usage:
 *
 *     function ParentClass(a, b) { }
 *     ParentClass.prototype.foo = function(a) { }
 *
 *     function ChildClass(a, b, c) {
 *       // Call parent constructor
 *       ParentClass.call(this, a, b);
 *     }
 *     inherits(ChildClass, ParentClass);
 *
 *     var child = new ChildClass('a', 'b', 'see');
 *     child.foo(); // This works.
 *
 * @param {!Function} childCtor Child constructor.
 * @param {!Function} parentCtor Parent constructor.
 * @function module:ol.inherits
 * @deprecated
 * @api
 */


function inherits(childCtor, parentCtor) {
  childCtor.prototype = Object.create(parentCtor.prototype);
  childCtor.prototype.constructor = childCtor;
}
/**
 * Counter for getUid.
 * @type {number}
 * @private
 */


var uidCounter_ = 0;
/**
 * Gets a unique ID for an object. This mutates the object so that further calls
 * with the same object as a parameter returns the same value. Unique IDs are generated
 * as a strictly increasing sequence. Adapted from goog.getUid.
 *
 * @param {Object} obj The object to get the unique ID for.
 * @return {string} The unique ID for the object.
 * @function module:ol.getUid
 * @api
 */

function getUid(obj) {
  return obj.ol_uid || (obj.ol_uid = String(++uidCounter_));
}
/**
 * OpenLayers version.
 * @type {string}
 */


var VERSION = '5.3.3';
exports.VERSION = VERSION;
},{}],"node_modules/ol/ObjectEventType.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/ObjectEventType
 */

/**
 * @enum {string}
 */
var _default = {
  /**
   * Triggered when a property is changed.
   * @event module:ol/Object.ObjectEvent#propertychange
   * @api
   */
  PROPERTYCHANGE: 'propertychange'
};
exports.default = _default;
},{}],"node_modules/ol/obj.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = clear;
exports.getValues = getValues;
exports.isEmpty = isEmpty;
exports.assign = void 0;

/**
 * @module ol/obj
 */

/**
 * Polyfill for Object.assign().  Assigns enumerable and own properties from
 * one or more source objects to a target object.
 * See https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign.
 *
 * @param {!Object} target The target object.
 * @param {...Object} var_sources The source object(s).
 * @return {!Object} The modified target object.
 */
var assign = typeof Object.assign === 'function' ? Object.assign : function (target, var_sources) {
  var arguments$1 = arguments;

  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var output = Object(target);

  for (var i = 1, ii = arguments.length; i < ii; ++i) {
    var source = arguments$1[i];

    if (source !== undefined && source !== null) {
      for (var key in source) {
        if (source.hasOwnProperty(key)) {
          output[key] = source[key];
        }
      }
    }
  }

  return output;
};
/**
 * Removes all properties from an object.
 * @param {Object} object The object to clear.
 */

exports.assign = assign;

function clear(object) {
  for (var property in object) {
    delete object[property];
  }
}
/**
 * Get an array of property values from an object.
 * @param {Object<K,V>} object The object from which to get the values.
 * @return {!Array<V>} The property values.
 * @template K,V
 */


function getValues(object) {
  var values = [];

  for (var property in object) {
    values.push(object[property]);
  }

  return values;
}
/**
 * Determine if an object has any properties.
 * @param {Object} object The object to check.
 * @return {boolean} The object is empty.
 */


function isEmpty(object) {
  var property;

  for (property in object) {
    return false;
  }

  return !property;
}
},{}],"node_modules/ol/events.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindListener = bindListener;
exports.findListener = findListener;
exports.getListeners = getListeners;
exports.listen = listen;
exports.listenOnce = listenOnce;
exports.unlisten = unlisten;
exports.unlistenByKey = unlistenByKey;
exports.unlistenAll = unlistenAll;

var _obj = require("./obj.js");

/**
 * @module ol/events
 */

/**
 * Key to use with {@link module:ol/Observable~Observable#unByKey}.
 * @typedef {Object} EventsKey
 * @property {Object} [bindTo]
 * @property {ListenerFunction} [boundListener]
 * @property {boolean} callOnce
 * @property {number} [deleteIndex]
 * @property {ListenerFunction} listener
 * @property {import("./events/Target.js").EventTargetLike} target
 * @property {string} type
 * @api
 */

/**
 * Listener function. This function is called with an event object as argument.
 * When the function returns `false`, event propagation will stop.
 *
 * @typedef {function((Event|import("./events/Event.js").default)): (void|boolean)} ListenerFunction
 * @api
 */

/**
 * @param {EventsKey} listenerObj Listener object.
 * @return {ListenerFunction} Bound listener.
 */
function bindListener(listenerObj) {
  var boundListener = function (evt) {
    var listener = listenerObj.listener;
    var bindTo = listenerObj.bindTo || listenerObj.target;

    if (listenerObj.callOnce) {
      unlistenByKey(listenerObj);
    }

    return listener.call(bindTo, evt);
  };

  listenerObj.boundListener = boundListener;
  return boundListener;
}
/**
 * Finds the matching {@link module:ol/events~EventsKey} in the given listener
 * array.
 *
 * @param {!Array<!EventsKey>} listeners Array of listeners.
 * @param {!Function} listener The listener function.
 * @param {Object=} opt_this The `this` value inside the listener.
 * @param {boolean=} opt_setDeleteIndex Set the deleteIndex on the matching
 *     listener, for {@link module:ol/events~unlistenByKey}.
 * @return {EventsKey|undefined} The matching listener object.
 */


function findListener(listeners, listener, opt_this, opt_setDeleteIndex) {
  var listenerObj;

  for (var i = 0, ii = listeners.length; i < ii; ++i) {
    listenerObj = listeners[i];

    if (listenerObj.listener === listener && listenerObj.bindTo === opt_this) {
      if (opt_setDeleteIndex) {
        listenerObj.deleteIndex = i;
      }

      return listenerObj;
    }
  }

  return undefined;
}
/**
 * @param {import("./events/Target.js").EventTargetLike} target Target.
 * @param {string} type Type.
 * @return {Array<EventsKey>|undefined} Listeners.
 */


function getListeners(target, type) {
  var listenerMap = getListenerMap(target);
  return listenerMap ? listenerMap[type] : undefined;
}
/**
 * Get the lookup of listeners.
 * @param {Object} target Target.
 * @param {boolean=} opt_create If a map should be created if it doesn't exist.
 * @return {!Object<string, Array<EventsKey>>} Map of
 *     listeners by event type.
 */


function getListenerMap(target, opt_create) {
  var listenerMap = target.ol_lm;

  if (!listenerMap && opt_create) {
    listenerMap = target.ol_lm = {};
  }

  return listenerMap;
}
/**
 * Remove the listener map from a target.
 * @param {Object} target Target.
 */


function removeListenerMap(target) {
  delete target.ol_lm;
}
/**
 * Clean up all listener objects of the given type.  All properties on the
 * listener objects will be removed, and if no listeners remain in the listener
 * map, it will be removed from the target.
 * @param {import("./events/Target.js").EventTargetLike} target Target.
 * @param {string} type Type.
 */


function removeListeners(target, type) {
  var listeners = getListeners(target, type);

  if (listeners) {
    for (var i = 0, ii = listeners.length; i < ii; ++i) {
      /** @type {import("./events/Target.js").default} */
      target.removeEventListener(type, listeners[i].boundListener);
      (0, _obj.clear)(listeners[i]);
    }

    listeners.length = 0;
    var listenerMap = getListenerMap(target);

    if (listenerMap) {
      delete listenerMap[type];

      if (Object.keys(listenerMap).length === 0) {
        removeListenerMap(target);
      }
    }
  }
}
/**
 * Registers an event listener on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 *
 * This function efficiently binds a `listener` to a `this` object, and returns
 * a key for use with {@link module:ol/events~unlistenByKey}.
 *
 * @param {import("./events/Target.js").EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {ListenerFunction} listener Listener.
 * @param {Object=} opt_this Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 * @param {boolean=} opt_once If true, add the listener as one-off listener.
 * @return {EventsKey} Unique key for the listener.
 */


function listen(target, type, listener, opt_this, opt_once) {
  var listenerMap = getListenerMap(target, true);
  var listeners = listenerMap[type];

  if (!listeners) {
    listeners = listenerMap[type] = [];
  }

  var listenerObj = findListener(listeners, listener, opt_this, false);

  if (listenerObj) {
    if (!opt_once) {
      // Turn one-off listener into a permanent one.
      listenerObj.callOnce = false;
    }
  } else {
    listenerObj =
    /** @type {EventsKey} */
    {
      bindTo: opt_this,
      callOnce: !!opt_once,
      listener: listener,
      target: target,
      type: type
    };
    /** @type {import("./events/Target.js").default} */

    target.addEventListener(type, bindListener(listenerObj));
    listeners.push(listenerObj);
  }

  return listenerObj;
}
/**
 * Registers a one-off event listener on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 *
 * This function efficiently binds a `listener` as self-unregistering listener
 * to a `this` object, and returns a key for use with
 * {@link module:ol/events~unlistenByKey} in case the listener needs to be
 * unregistered before it is called.
 *
 * When {@link module:ol/events~listen} is called with the same arguments after this
 * function, the self-unregistering listener will be turned into a permanent
 * listener.
 *
 * @param {import("./events/Target.js").EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {ListenerFunction} listener Listener.
 * @param {Object=} opt_this Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 * @return {EventsKey} Key for unlistenByKey.
 */


function listenOnce(target, type, listener, opt_this) {
  return listen(target, type, listener, opt_this, true);
}
/**
 * Unregisters an event listener on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 *
 * To return a listener, this function needs to be called with the exact same
 * arguments that were used for a previous {@link module:ol/events~listen} call.
 *
 * @param {import("./events/Target.js").EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {ListenerFunction} listener Listener.
 * @param {Object=} opt_this Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 */


function unlisten(target, type, listener, opt_this) {
  var listeners = getListeners(target, type);

  if (listeners) {
    var listenerObj = findListener(listeners, listener, opt_this, true);

    if (listenerObj) {
      unlistenByKey(listenerObj);
    }
  }
}
/**
 * Unregisters event listeners on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 *
 * The argument passed to this function is the key returned from
 * {@link module:ol/events~listen} or {@link module:ol/events~listenOnce}.
 *
 * @param {EventsKey} key The key.
 */


function unlistenByKey(key) {
  if (key && key.target) {
    /** @type {import("./events/Target.js").default} */
    key.target.removeEventListener(key.type, key.boundListener);
    var listeners = getListeners(key.target, key.type);

    if (listeners) {
      var i = 'deleteIndex' in key ? key.deleteIndex : listeners.indexOf(key);

      if (i !== -1) {
        listeners.splice(i, 1);
      }

      if (listeners.length === 0) {
        removeListeners(key.target, key.type);
      }
    }

    (0, _obj.clear)(key);
  }
}
/**
 * Unregisters all event listeners on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 *
 * @param {import("./events/Target.js").EventTargetLike} target Target.
 */


function unlistenAll(target) {
  var listenerMap = getListenerMap(target);

  if (listenerMap) {
    for (var type in listenerMap) {
      removeListeners(target, type);
    }
  }
}
},{"./obj.js":"node_modules/ol/obj.js"}],"node_modules/ol/Disposable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/Disposable
 */

/**
 * @classdesc
 * Objects that need to clean up after themselves.
 */
var Disposable = function Disposable() {
  /**
   * The object has already been disposed.
   * @type {boolean}
   * @private
   */
  this.disposed_ = false;
};
/**
 * Clean up.
 */


Disposable.prototype.dispose = function dispose() {
  if (!this.disposed_) {
    this.disposed_ = true;
    this.disposeInternal();
  }
};
/**
 * Extension point for disposable objects.
 * @protected
 */


Disposable.prototype.disposeInternal = function disposeInternal() {};

var _default = Disposable;
exports.default = _default;
},{}],"node_modules/ol/functions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TRUE = TRUE;
exports.FALSE = FALSE;
exports.VOID = VOID;

/**
 * @module ol/functions
 */

/**
 * Always returns true.
 * @returns {boolean} true.
 */
function TRUE() {
  return true;
}
/**
 * Always returns false.
 * @returns {boolean} false.
 */


function FALSE() {
  return false;
}
/**
 * A reusable function, used e.g. as a default for callbacks.
 *
 * @return {void} Nothing.
 */


function VOID() {}
},{}],"node_modules/ol/events/Event.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stopPropagation = stopPropagation;
exports.preventDefault = preventDefault;
exports.default = void 0;

/**
 * @module ol/events/Event
 */

/**
 * @classdesc
 * Stripped down implementation of the W3C DOM Level 2 Event interface.
 * See https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-interface.
 *
 * This implementation only provides `type` and `target` properties, and
 * `stopPropagation` and `preventDefault` methods. It is meant as base class
 * for higher level events defined in the library, and works with
 * {@link module:ol/events/Target~Target}.
 */
var Event = function Event(type) {
  /**
   * @type {boolean}
   */
  this.propagationStopped;
  /**
   * The event type.
   * @type {string}
   * @api
   */

  this.type = type;
  /**
   * The event target.
   * @type {Object}
   * @api
   */

  this.target = null;
};
/**
 * Stop event propagation.
 * @api
 */


Event.prototype.preventDefault = function preventDefault() {
  this.propagationStopped = true;
};
/**
 * Stop event propagation.
 * @api
 */


Event.prototype.stopPropagation = function stopPropagation() {
  this.propagationStopped = true;
};
/**
 * @param {Event|import("./Event.js").default} evt Event
 */


function stopPropagation(evt) {
  evt.stopPropagation();
}
/**
 * @param {Event|import("./Event.js").default} evt Event
 */


function preventDefault(evt) {
  evt.preventDefault();
}

var _default = Event;
exports.default = _default;
},{}],"node_modules/ol/events/Target.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Disposable = _interopRequireDefault(require("../Disposable.js"));

var _events = require("../events.js");

var _functions = require("../functions.js");

var _Event = _interopRequireDefault(require("./Event.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/events/Target
 */

/**
 * @typedef {EventTarget|Target} EventTargetLike
 */

/**
 * @classdesc
 * A simplified implementation of the W3C DOM Level 2 EventTarget interface.
 * See https://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-EventTarget.
 *
 * There are two important simplifications compared to the specification:
 *
 * 1. The handling of `useCapture` in `addEventListener` and
 *    `removeEventListener`. There is no real capture model.
 * 2. The handling of `stopPropagation` and `preventDefault` on `dispatchEvent`.
 *    There is no event target hierarchy. When a listener calls
 *    `stopPropagation` or `preventDefault` on an event object, it means that no
 *    more listeners after this one will be called. Same as when the listener
 *    returns false.
 */
var Target =
/*@__PURE__*/
function (Disposable) {
  function Target() {
    Disposable.call(this);
    /**
     * @private
     * @type {!Object<string, number>}
     */

    this.pendingRemovals_ = {};
    /**
     * @private
     * @type {!Object<string, number>}
     */

    this.dispatching_ = {};
    /**
     * @private
     * @type {!Object<string, Array<import("../events.js").ListenerFunction>>}
     */

    this.listeners_ = {};
  }

  if (Disposable) Target.__proto__ = Disposable;
  Target.prototype = Object.create(Disposable && Disposable.prototype);
  Target.prototype.constructor = Target;
  /**
   * @param {string} type Type.
   * @param {import("../events.js").ListenerFunction} listener Listener.
   */

  Target.prototype.addEventListener = function addEventListener(type, listener) {
    var listeners = this.listeners_[type];

    if (!listeners) {
      listeners = this.listeners_[type] = [];
    }

    if (listeners.indexOf(listener) === -1) {
      listeners.push(listener);
    }
  };
  /**
   * Dispatches an event and calls all listeners listening for events
   * of this type. The event parameter can either be a string or an
   * Object with a `type` property.
   *
   * @param {{type: string,
   *     target: (EventTargetLike|undefined),
   *     propagationStopped: (boolean|undefined)}|
   *     import("./Event.js").default|string} event Event object.
   * @return {boolean|undefined} `false` if anyone called preventDefault on the
   *     event object or if any of the listeners returned false.
   * @api
   */


  Target.prototype.dispatchEvent = function dispatchEvent(event) {
    var evt = typeof event === 'string' ? new _Event.default(event) : event;
    var type = evt.type;
    evt.target = this;
    var listeners = this.listeners_[type];
    var propagate;

    if (listeners) {
      if (!(type in this.dispatching_)) {
        this.dispatching_[type] = 0;
        this.pendingRemovals_[type] = 0;
      }

      ++this.dispatching_[type];

      for (var i = 0, ii = listeners.length; i < ii; ++i) {
        if (listeners[i].call(this, evt) === false || evt.propagationStopped) {
          propagate = false;
          break;
        }
      }

      --this.dispatching_[type];

      if (this.dispatching_[type] === 0) {
        var pendingRemovals = this.pendingRemovals_[type];
        delete this.pendingRemovals_[type];

        while (pendingRemovals--) {
          this.removeEventListener(type, _functions.VOID);
        }

        delete this.dispatching_[type];
      }

      return propagate;
    }
  };
  /**
   * @inheritDoc
   */


  Target.prototype.disposeInternal = function disposeInternal() {
    (0, _events.unlistenAll)(this);
  };
  /**
   * Get the listeners for a specified event type. Listeners are returned in the
   * order that they will be called in.
   *
   * @param {string} type Type.
   * @return {Array<import("../events.js").ListenerFunction>} Listeners.
   */


  Target.prototype.getListeners = function getListeners(type) {
    return this.listeners_[type];
  };
  /**
   * @param {string=} opt_type Type. If not provided,
   *     `true` will be returned if this event target has any listeners.
   * @return {boolean} Has listeners.
   */


  Target.prototype.hasListener = function hasListener(opt_type) {
    return opt_type ? opt_type in this.listeners_ : Object.keys(this.listeners_).length > 0;
  };
  /**
   * @param {string} type Type.
   * @param {import("../events.js").ListenerFunction} listener Listener.
   */


  Target.prototype.removeEventListener = function removeEventListener(type, listener) {
    var listeners = this.listeners_[type];

    if (listeners) {
      var index = listeners.indexOf(listener);

      if (type in this.pendingRemovals_) {
        // make listener a no-op, and remove later in #dispatchEvent()
        listeners[index] = _functions.VOID;
        ++this.pendingRemovals_[type];
      } else {
        listeners.splice(index, 1);

        if (listeners.length === 0) {
          delete this.listeners_[type];
        }
      }
    }
  };

  return Target;
}(_Disposable.default);

var _default = Target;
exports.default = _default;
},{"../Disposable.js":"node_modules/ol/Disposable.js","../events.js":"node_modules/ol/events.js","../functions.js":"node_modules/ol/functions.js","./Event.js":"node_modules/ol/events/Event.js"}],"node_modules/ol/events/EventType.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/events/EventType
 */

/**
 * @enum {string}
 * @const
 */
var _default = {
  /**
   * Generic change event. Triggered when the revision counter is increased.
   * @event module:ol/events/Event~Event#change
   * @api
   */
  CHANGE: 'change',
  CLEAR: 'clear',
  CONTEXTMENU: 'contextmenu',
  CLICK: 'click',
  DBLCLICK: 'dblclick',
  DRAGENTER: 'dragenter',
  DRAGOVER: 'dragover',
  DROP: 'drop',
  ERROR: 'error',
  KEYDOWN: 'keydown',
  KEYPRESS: 'keypress',
  LOAD: 'load',
  MOUSEDOWN: 'mousedown',
  MOUSEMOVE: 'mousemove',
  MOUSEOUT: 'mouseout',
  MOUSEUP: 'mouseup',
  MOUSEWHEEL: 'mousewheel',
  MSPOINTERDOWN: 'MSPointerDown',
  RESIZE: 'resize',
  TOUCHSTART: 'touchstart',
  TOUCHMOVE: 'touchmove',
  TOUCHEND: 'touchend',
  WHEEL: 'wheel'
};
exports.default = _default;
},{}],"node_modules/ol/Observable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unByKey = unByKey;
exports.default = void 0;

var _events = require("./events.js");

var _Target = _interopRequireDefault(require("./events/Target.js"));

var _EventType = _interopRequireDefault(require("./events/EventType.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/Observable
 */

/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * An event target providing convenient methods for listener registration
 * and unregistration. A generic `change` event is always available through
 * {@link module:ol/Observable~Observable#changed}.
 *
 * @fires import("./events/Event.js").Event
 * @api
 */
var Observable =
/*@__PURE__*/
function (EventTarget) {
  function Observable() {
    EventTarget.call(this);
    /**
     * @private
     * @type {number}
     */

    this.revision_ = 0;
  }

  if (EventTarget) Observable.__proto__ = EventTarget;
  Observable.prototype = Object.create(EventTarget && EventTarget.prototype);
  Observable.prototype.constructor = Observable;
  /**
   * Increases the revision counter and dispatches a 'change' event.
   * @api
   */

  Observable.prototype.changed = function changed() {
    ++this.revision_;
    this.dispatchEvent(_EventType.default.CHANGE);
  };
  /**
   * Get the version number for this object.  Each time the object is modified,
   * its version number will be incremented.
   * @return {number} Revision.
   * @api
   */


  Observable.prototype.getRevision = function getRevision() {
    return this.revision_;
  };
  /**
   * Listen for a certain type of event.
   * @param {string|Array<string>} type The event type or array of event types.
   * @param {function(?): ?} listener The listener function.
   * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Unique key for the listener. If
   *     called with an array of event types as the first argument, the return
   *     will be an array of keys.
   * @api
   */


  Observable.prototype.on = function on(type, listener) {
    if (Array.isArray(type)) {
      var len = type.length;
      var keys = new Array(len);

      for (var i = 0; i < len; ++i) {
        keys[i] = (0, _events.listen)(this, type[i], listener);
      }

      return keys;
    } else {
      return (0, _events.listen)(this,
      /** @type {string} */
      type, listener);
    }
  };
  /**
   * Listen once for a certain type of event.
   * @param {string|Array<string>} type The event type or array of event types.
   * @param {function(?): ?} listener The listener function.
   * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Unique key for the listener. If
   *     called with an array of event types as the first argument, the return
   *     will be an array of keys.
   * @api
   */


  Observable.prototype.once = function once(type, listener) {
    if (Array.isArray(type)) {
      var len = type.length;
      var keys = new Array(len);

      for (var i = 0; i < len; ++i) {
        keys[i] = (0, _events.listenOnce)(this, type[i], listener);
      }

      return keys;
    } else {
      return (0, _events.listenOnce)(this,
      /** @type {string} */
      type, listener);
    }
  };
  /**
   * Unlisten for a certain type of event.
   * @param {string|Array<string>} type The event type or array of event types.
   * @param {function(?): ?} listener The listener function.
   * @api
   */


  Observable.prototype.un = function un(type, listener) {
    if (Array.isArray(type)) {
      for (var i = 0, ii = type.length; i < ii; ++i) {
        (0, _events.unlisten)(this, type[i], listener);
      }

      return;
    } else {
      (0, _events.unlisten)(this,
      /** @type {string} */
      type, listener);
    }
  };

  return Observable;
}(_Target.default);
/**
 * Removes an event listener using the key returned by `on()` or `once()`.
 * @param {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} key The key returned by `on()`
 *     or `once()` (or an array of keys).
 * @api
 */


function unByKey(key) {
  if (Array.isArray(key)) {
    for (var i = 0, ii = key.length; i < ii; ++i) {
      (0, _events.unlistenByKey)(key[i]);
    }
  } else {
    (0, _events.unlistenByKey)(
    /** @type {import("./events.js").EventsKey} */
    key);
  }
}

var _default = Observable;
exports.default = _default;
},{"./events.js":"node_modules/ol/events.js","./events/Target.js":"node_modules/ol/events/Target.js","./events/EventType.js":"node_modules/ol/events/EventType.js"}],"node_modules/ol/Object.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChangeEventType = getChangeEventType;
exports.default = exports.ObjectEvent = void 0;

var _util = require("./util.js");

var _ObjectEventType = _interopRequireDefault(require("./ObjectEventType.js"));

var _Observable = _interopRequireDefault(require("./Observable.js"));

var _Event = _interopRequireDefault(require("./events/Event.js"));

var _obj = require("./obj.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/Object
 */

/**
 * @classdesc
 * Events emitted by {@link module:ol/Object~BaseObject} instances are instances of this type.
 */
var ObjectEvent =
/*@__PURE__*/
function (Event) {
  function ObjectEvent(type, key, oldValue) {
    Event.call(this, type);
    /**
     * The name of the property whose value is changing.
     * @type {string}
     * @api
     */

    this.key = key;
    /**
     * The old value. To get the new value use `e.target.get(e.key)` where
     * `e` is the event object.
     * @type {*}
     * @api
     */

    this.oldValue = oldValue;
  }

  if (Event) ObjectEvent.__proto__ = Event;
  ObjectEvent.prototype = Object.create(Event && Event.prototype);
  ObjectEvent.prototype.constructor = ObjectEvent;
  return ObjectEvent;
}(_Event.default);
/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Most non-trivial classes inherit from this.
 *
 * This extends {@link module:ol/Observable} with observable
 * properties, where each property is observable as well as the object as a
 * whole.
 *
 * Classes that inherit from this have pre-defined properties, to which you can
 * add your owns. The pre-defined properties are listed in this documentation as
 * 'Observable Properties', and have their own accessors; for example,
 * {@link module:ol/Map~Map} has a `target` property, accessed with
 * `getTarget()` and changed with `setTarget()`. Not all properties are however
 * settable. There are also general-purpose accessors `get()` and `set()`. For
 * example, `get('target')` is equivalent to `getTarget()`.
 *
 * The `set` accessors trigger a change event, and you can monitor this by
 * registering a listener. For example, {@link module:ol/View~View} has a
 * `center` property, so `view.on('change:center', function(evt) {...});` would
 * call the function whenever the value of the center property changes. Within
 * the function, `evt.target` would be the view, so `evt.target.getCenter()`
 * would return the new center.
 *
 * You can add your own observable properties with
 * `object.set('prop', 'value')`, and retrieve that with `object.get('prop')`.
 * You can listen for changes on that property value with
 * `object.on('change:prop', listener)`. You can get a list of all
 * properties with {@link module:ol/Object~BaseObject#getProperties}.
 *
 * Note that the observable properties are separate from standard JS properties.
 * You can, for example, give your map object a title with
 * `map.title='New title'` and with `map.set('title', 'Another title')`. The
 * first will be a `hasOwnProperty`; the second will appear in
 * `getProperties()`. Only the second is observable.
 *
 * Properties can be deleted by using the unset method. E.g.
 * object.unset('foo').
 *
 * @fires ObjectEvent
 * @api
 */


exports.ObjectEvent = ObjectEvent;

var BaseObject =
/*@__PURE__*/
function (Observable) {
  function BaseObject(opt_values) {
    Observable.call(this); // Call {@link module:ol/util~getUid} to ensure that the order of objects' ids is
    // the same as the order in which they were created.  This also helps to
    // ensure that object properties are always added in the same order, which
    // helps many JavaScript engines generate faster code.

    (0, _util.getUid)(this);
    /**
     * @private
     * @type {!Object<string, *>}
     */

    this.values_ = {};

    if (opt_values !== undefined) {
      this.setProperties(opt_values);
    }
  }

  if (Observable) BaseObject.__proto__ = Observable;
  BaseObject.prototype = Object.create(Observable && Observable.prototype);
  BaseObject.prototype.constructor = BaseObject;
  /**
   * Gets a value.
   * @param {string} key Key name.
   * @return {*} Value.
   * @api
   */

  BaseObject.prototype.get = function get(key) {
    var value;

    if (this.values_.hasOwnProperty(key)) {
      value = this.values_[key];
    }

    return value;
  };
  /**
   * Get a list of object property names.
   * @return {Array<string>} List of property names.
   * @api
   */


  BaseObject.prototype.getKeys = function getKeys() {
    return Object.keys(this.values_);
  };
  /**
   * Get an object of all property names and values.
   * @return {Object<string, *>} Object.
   * @api
   */


  BaseObject.prototype.getProperties = function getProperties() {
    return (0, _obj.assign)({}, this.values_);
  };
  /**
   * @param {string} key Key name.
   * @param {*} oldValue Old value.
   */


  BaseObject.prototype.notify = function notify(key, oldValue) {
    var eventType;
    eventType = getChangeEventType(key);
    this.dispatchEvent(new ObjectEvent(eventType, key, oldValue));
    eventType = _ObjectEventType.default.PROPERTYCHANGE;
    this.dispatchEvent(new ObjectEvent(eventType, key, oldValue));
  };
  /**
   * Sets a value.
   * @param {string} key Key name.
   * @param {*} value Value.
   * @param {boolean=} opt_silent Update without triggering an event.
   * @api
   */


  BaseObject.prototype.set = function set(key, value, opt_silent) {
    if (opt_silent) {
      this.values_[key] = value;
    } else {
      var oldValue = this.values_[key];
      this.values_[key] = value;

      if (oldValue !== value) {
        this.notify(key, oldValue);
      }
    }
  };
  /**
   * Sets a collection of key-value pairs.  Note that this changes any existing
   * properties and adds new ones (it does not remove any existing properties).
   * @param {Object<string, *>} values Values.
   * @param {boolean=} opt_silent Update without triggering an event.
   * @api
   */


  BaseObject.prototype.setProperties = function setProperties(values, opt_silent) {
    for (var key in values) {
      this.set(key, values[key], opt_silent);
    }
  };
  /**
   * Unsets a property.
   * @param {string} key Key name.
   * @param {boolean=} opt_silent Unset without triggering an event.
   * @api
   */


  BaseObject.prototype.unset = function unset(key, opt_silent) {
    if (key in this.values_) {
      var oldValue = this.values_[key];
      delete this.values_[key];

      if (!opt_silent) {
        this.notify(key, oldValue);
      }
    }
  };

  return BaseObject;
}(_Observable.default);
/**
 * @type {Object<string, string>}
 */


var changeEventTypeCache = {};
/**
 * @param {string} key Key name.
 * @return {string} Change name.
 */

function getChangeEventType(key) {
  return changeEventTypeCache.hasOwnProperty(key) ? changeEventTypeCache[key] : changeEventTypeCache[key] = 'change:' + key;
}

var _default = BaseObject;
exports.default = _default;
},{"./util.js":"node_modules/ol/util.js","./ObjectEventType.js":"node_modules/ol/ObjectEventType.js","./Observable.js":"node_modules/ol/Observable.js","./events/Event.js":"node_modules/ol/events/Event.js","./obj.js":"node_modules/ol/obj.js"}],"node_modules/ol/OverlayPositioning.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/OverlayPositioning
 */

/**
 * Overlay position: `'bottom-left'`, `'bottom-center'`,  `'bottom-right'`,
 * `'center-left'`, `'center-center'`, `'center-right'`, `'top-left'`,
 * `'top-center'`, `'top-right'`
 * @enum {string}
 */
var _default = {
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_CENTER: 'bottom-center',
  BOTTOM_RIGHT: 'bottom-right',
  CENTER_LEFT: 'center-left',
  CENTER_CENTER: 'center-center',
  CENTER_RIGHT: 'center-right',
  TOP_LEFT: 'top-left',
  TOP_CENTER: 'top-center',
  TOP_RIGHT: 'top-right'
};
exports.default = _default;
},{}],"node_modules/ol/css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFontFamilies = exports.CLASS_COLLAPSED = exports.CLASS_CONTROL = exports.CLASS_UNSUPPORTED = exports.CLASS_UNSELECTABLE = exports.CLASS_SELECTABLE = exports.CLASS_HIDDEN = void 0;

/**
 * @module ol/css
 */

/**
 * The CSS class for hidden feature.
 *
 * @const
 * @type {string}
 */
var CLASS_HIDDEN = 'ol-hidden';
/**
 * The CSS class that we'll give the DOM elements to have them selectable.
 *
 * @const
 * @type {string}
 */

exports.CLASS_HIDDEN = CLASS_HIDDEN;
var CLASS_SELECTABLE = 'ol-selectable';
/**
 * The CSS class that we'll give the DOM elements to have them unselectable.
 *
 * @const
 * @type {string}
 */

exports.CLASS_SELECTABLE = CLASS_SELECTABLE;
var CLASS_UNSELECTABLE = 'ol-unselectable';
/**
 * The CSS class for unsupported feature.
 *
 * @const
 * @type {string}
 */

exports.CLASS_UNSELECTABLE = CLASS_UNSELECTABLE;
var CLASS_UNSUPPORTED = 'ol-unsupported';
/**
 * The CSS class for controls.
 *
 * @const
 * @type {string}
 */

exports.CLASS_UNSUPPORTED = CLASS_UNSUPPORTED;
var CLASS_CONTROL = 'ol-control';
/**
 * The CSS class that we'll give the DOM elements that are collapsed, i.e.
 * to those elements which usually can be expanded.
 *
 * @const
 * @type {string}
 */

exports.CLASS_CONTROL = CLASS_CONTROL;
var CLASS_COLLAPSED = 'ol-collapsed';
/**
 * Get the list of font families from a font spec.  Note that this doesn't work
 * for font families that have commas in them.
 * @param {string} The CSS font property.
 * @return {Object<string>} The font families (or null if the input spec is invalid).
 */

exports.CLASS_COLLAPSED = CLASS_COLLAPSED;

var getFontFamilies = function () {
  var style;
  var cache = {};
  return function (font) {
    if (!style) {
      style = document.createElement('div').style;
    }

    if (!(font in cache)) {
      style.font = font;
      var family = style.fontFamily;
      style.font = '';

      if (!family) {
        return null;
      }

      cache[font] = family.split(/,\s?/);
    }

    return cache[font];
  };
}();

exports.getFontFamilies = getFontFamilies;
},{}],"node_modules/ol/dom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCanvasContext2D = createCanvasContext2D;
exports.outerWidth = outerWidth;
exports.outerHeight = outerHeight;
exports.replaceNode = replaceNode;
exports.removeNode = removeNode;
exports.removeChildren = removeChildren;

/**
 * @module ol/dom
 */

/**
 * Create an html canvas element and returns its 2d context.
 * @param {number=} opt_width Canvas width.
 * @param {number=} opt_height Canvas height.
 * @return {CanvasRenderingContext2D} The context.
 */
function createCanvasContext2D(opt_width, opt_height) {
  var canvas =
  /** @type {HTMLCanvasElement} */
  document.createElement('canvas');

  if (opt_width) {
    canvas.width = opt_width;
  }

  if (opt_height) {
    canvas.height = opt_height;
  }

  return (
    /** @type {CanvasRenderingContext2D} */
    canvas.getContext('2d')
  );
}
/**
 * Get the current computed width for the given element including margin,
 * padding and border.
 * Equivalent to jQuery's `$(el).outerWidth(true)`.
 * @param {!HTMLElement} element Element.
 * @return {number} The width.
 */


function outerWidth(element) {
  var width = element.offsetWidth;
  var style = getComputedStyle(element);
  width += parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10);
  return width;
}
/**
 * Get the current computed height for the given element including margin,
 * padding and border.
 * Equivalent to jQuery's `$(el).outerHeight(true)`.
 * @param {!HTMLElement} element Element.
 * @return {number} The height.
 */


function outerHeight(element) {
  var height = element.offsetHeight;
  var style = getComputedStyle(element);
  height += parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10);
  return height;
}
/**
 * @param {Node} newNode Node to replace old node
 * @param {Node} oldNode The node to be replaced
 */


function replaceNode(newNode, oldNode) {
  var parent = oldNode.parentNode;

  if (parent) {
    parent.replaceChild(newNode, oldNode);
  }
}
/**
 * @param {Node} node The node to remove.
 * @returns {Node} The node that was removed or null.
 */


function removeNode(node) {
  return node && node.parentNode ? node.parentNode.removeChild(node) : null;
}
/**
 * @param {Node} node The node to remove the children from.
 */


function removeChildren(node) {
  while (node.lastChild) {
    node.removeChild(node.lastChild);
  }
}
},{}],"node_modules/ol/AssertionError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("./util.js");

/**
 * @module ol/AssertionError
 */

/**
 * Error object thrown when an assertion failed. This is an ECMA-262 Error,
 * extended with a `code` property.
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error.
 */
var AssertionError =
/*@__PURE__*/
function (Error) {
  function AssertionError(code) {
    var path = _util.VERSION === 'latest' ? _util.VERSION : 'v' + _util.VERSION.split('-')[0];
    var message = 'Assertion failed. See https://openlayers.org/en/' + path + '/doc/errors/#' + code + ' for details.';
    Error.call(this, message);
    /**
     * Error code. The meaning of the code can be found on
     * https://openlayers.org/en/latest/doc/errors/ (replace `latest` with
     * the version found in the OpenLayers script's header comment if a version
     * other than the latest is used).
     * @type {number}
     * @api
     */

    this.code = code;
    /**
     * @type {string}
     */

    this.name = 'AssertionError'; // Re-assign message, see https://github.com/Rich-Harris/buble/issues/40

    this.message = message;
  }

  if (Error) AssertionError.__proto__ = Error;
  AssertionError.prototype = Object.create(Error && Error.prototype);
  AssertionError.prototype.constructor = AssertionError;
  return AssertionError;
}(Error);

var _default = AssertionError;
exports.default = _default;
},{"./util.js":"node_modules/ol/util.js"}],"node_modules/ol/asserts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assert = assert;

var _AssertionError = _interopRequireDefault(require("./AssertionError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/asserts
 */

/**
 * @param {*} assertion Assertion we expected to be truthy.
 * @param {number} errorCode Error code.
 */
function assert(assertion, errorCode) {
  if (!assertion) {
    throw new _AssertionError.default(errorCode);
  }
}
},{"./AssertionError.js":"node_modules/ol/AssertionError.js"}],"node_modules/ol/extent/Corner.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/extent/Corner
 */

/**
 * Extent corner.
 * @enum {string}
 */
var _default = {
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right'
};
exports.default = _default;
},{}],"node_modules/ol/extent/Relationship.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/extent/Relationship
 */

/**
 * Relationship to an extent.
 * @enum {number}
 */
var _default = {
  UNKNOWN: 0,
  INTERSECTING: 1,
  ABOVE: 2,
  RIGHT: 4,
  BELOW: 8,
  LEFT: 16
};
exports.default = _default;
},{}],"node_modules/ol/extent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boundingExtent = boundingExtent;
exports.buffer = buffer;
exports.clone = clone;
exports.closestSquaredDistanceXY = closestSquaredDistanceXY;
exports.containsCoordinate = containsCoordinate;
exports.containsExtent = containsExtent;
exports.containsXY = containsXY;
exports.coordinateRelationship = coordinateRelationship;
exports.createEmpty = createEmpty;
exports.createOrUpdate = createOrUpdate;
exports.createOrUpdateEmpty = createOrUpdateEmpty;
exports.createOrUpdateFromCoordinate = createOrUpdateFromCoordinate;
exports.createOrUpdateFromCoordinates = createOrUpdateFromCoordinates;
exports.createOrUpdateFromFlatCoordinates = createOrUpdateFromFlatCoordinates;
exports.createOrUpdateFromRings = createOrUpdateFromRings;
exports.equals = equals;
exports.extend = extend;
exports.extendCoordinate = extendCoordinate;
exports.extendCoordinates = extendCoordinates;
exports.extendFlatCoordinates = extendFlatCoordinates;
exports.extendRings = extendRings;
exports.extendXY = extendXY;
exports.forEachCorner = forEachCorner;
exports.getArea = getArea;
exports.getBottomLeft = getBottomLeft;
exports.getBottomRight = getBottomRight;
exports.getCenter = getCenter;
exports.getCorner = getCorner;
exports.getEnlargedArea = getEnlargedArea;
exports.getForViewAndSize = getForViewAndSize;
exports.getHeight = getHeight;
exports.getIntersectionArea = getIntersectionArea;
exports.getIntersection = getIntersection;
exports.getMargin = getMargin;
exports.getSize = getSize;
exports.getTopLeft = getTopLeft;
exports.getTopRight = getTopRight;
exports.getWidth = getWidth;
exports.intersects = intersects;
exports.isEmpty = isEmpty;
exports.returnOrUpdate = returnOrUpdate;
exports.scaleFromCenter = scaleFromCenter;
exports.intersectsSegment = intersectsSegment;
exports.applyTransform = applyTransform;

var _asserts = require("./asserts.js");

var _Corner = _interopRequireDefault(require("./extent/Corner.js"));

var _Relationship = _interopRequireDefault(require("./extent/Relationship.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/extent
 */

/**
 * An array of numbers representing an extent: `[minx, miny, maxx, maxy]`.
 * @typedef {Array<number>} Extent
 * @api
 */

/**
 * Build an extent that includes all given coordinates.
 *
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates Coordinates.
 * @return {Extent} Bounding extent.
 * @api
 */
function boundingExtent(coordinates) {
  var extent = createEmpty();

  for (var i = 0, ii = coordinates.length; i < ii; ++i) {
    extendCoordinate(extent, coordinates[i]);
  }

  return extent;
}
/**
 * @param {Array<number>} xs Xs.
 * @param {Array<number>} ys Ys.
 * @param {Extent=} opt_extent Destination extent.
 * @private
 * @return {Extent} Extent.
 */


function _boundingExtentXYs(xs, ys, opt_extent) {
  var minX = Math.min.apply(null, xs);
  var minY = Math.min.apply(null, ys);
  var maxX = Math.max.apply(null, xs);
  var maxY = Math.max.apply(null, ys);
  return createOrUpdate(minX, minY, maxX, maxY, opt_extent);
}
/**
 * Return extent increased by the provided value.
 * @param {Extent} extent Extent.
 * @param {number} value The amount by which the extent should be buffered.
 * @param {Extent=} opt_extent Extent.
 * @return {Extent} Extent.
 * @api
 */


function buffer(extent, value, opt_extent) {
  if (opt_extent) {
    opt_extent[0] = extent[0] - value;
    opt_extent[1] = extent[1] - value;
    opt_extent[2] = extent[2] + value;
    opt_extent[3] = extent[3] + value;
    return opt_extent;
  } else {
    return [extent[0] - value, extent[1] - value, extent[2] + value, extent[3] + value];
  }
}
/**
 * Creates a clone of an extent.
 *
 * @param {Extent} extent Extent to clone.
 * @param {Extent=} opt_extent Extent.
 * @return {Extent} The clone.
 */


function clone(extent, opt_extent) {
  if (opt_extent) {
    opt_extent[0] = extent[0];
    opt_extent[1] = extent[1];
    opt_extent[2] = extent[2];
    opt_extent[3] = extent[3];
    return opt_extent;
  } else {
    return extent.slice();
  }
}
/**
 * @param {Extent} extent Extent.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {number} Closest squared distance.
 */


function closestSquaredDistanceXY(extent, x, y) {
  var dx, dy;

  if (x < extent[0]) {
    dx = extent[0] - x;
  } else if (extent[2] < x) {
    dx = x - extent[2];
  } else {
    dx = 0;
  }

  if (y < extent[1]) {
    dy = extent[1] - y;
  } else if (extent[3] < y) {
    dy = y - extent[3];
  } else {
    dy = 0;
  }

  return dx * dx + dy * dy;
}
/**
 * Check if the passed coordinate is contained or on the edge of the extent.
 *
 * @param {Extent} extent Extent.
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 * @return {boolean} The coordinate is contained in the extent.
 * @api
 */


function containsCoordinate(extent, coordinate) {
  return containsXY(extent, coordinate[0], coordinate[1]);
}
/**
 * Check if one extent contains another.
 *
 * An extent is deemed contained if it lies completely within the other extent,
 * including if they share one or more edges.
 *
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {boolean} The second extent is contained by or on the edge of the
 *     first.
 * @api
 */


function containsExtent(extent1, extent2) {
  return extent1[0] <= extent2[0] && extent2[2] <= extent1[2] && extent1[1] <= extent2[1] && extent2[3] <= extent1[3];
}
/**
 * Check if the passed coordinate is contained or on the edge of the extent.
 *
 * @param {Extent} extent Extent.
 * @param {number} x X coordinate.
 * @param {number} y Y coordinate.
 * @return {boolean} The x, y values are contained in the extent.
 * @api
 */


function containsXY(extent, x, y) {
  return extent[0] <= x && x <= extent[2] && extent[1] <= y && y <= extent[3];
}
/**
 * Get the relationship between a coordinate and extent.
 * @param {Extent} extent The extent.
 * @param {import("./coordinate.js").Coordinate} coordinate The coordinate.
 * @return {Relationship} The relationship (bitwise compare with
 *     import("./extent/Relationship.js").Relationship).
 */


function coordinateRelationship(extent, coordinate) {
  var minX = extent[0];
  var minY = extent[1];
  var maxX = extent[2];
  var maxY = extent[3];
  var x = coordinate[0];
  var y = coordinate[1];
  var relationship = _Relationship.default.UNKNOWN;

  if (x < minX) {
    relationship = relationship | _Relationship.default.LEFT;
  } else if (x > maxX) {
    relationship = relationship | _Relationship.default.RIGHT;
  }

  if (y < minY) {
    relationship = relationship | _Relationship.default.BELOW;
  } else if (y > maxY) {
    relationship = relationship | _Relationship.default.ABOVE;
  }

  if (relationship === _Relationship.default.UNKNOWN) {
    relationship = _Relationship.default.INTERSECTING;
  }

  return relationship;
}
/**
 * Create an empty extent.
 * @return {Extent} Empty extent.
 * @api
 */


function createEmpty() {
  return [Infinity, Infinity, -Infinity, -Infinity];
}
/**
 * Create a new extent or update the provided extent.
 * @param {number} minX Minimum X.
 * @param {number} minY Minimum Y.
 * @param {number} maxX Maximum X.
 * @param {number} maxY Maximum Y.
 * @param {Extent=} opt_extent Destination extent.
 * @return {Extent} Extent.
 */


function createOrUpdate(minX, minY, maxX, maxY, opt_extent) {
  if (opt_extent) {
    opt_extent[0] = minX;
    opt_extent[1] = minY;
    opt_extent[2] = maxX;
    opt_extent[3] = maxY;
    return opt_extent;
  } else {
    return [minX, minY, maxX, maxY];
  }
}
/**
 * Create a new empty extent or make the provided one empty.
 * @param {Extent=} opt_extent Extent.
 * @return {Extent} Extent.
 */


function createOrUpdateEmpty(opt_extent) {
  return createOrUpdate(Infinity, Infinity, -Infinity, -Infinity, opt_extent);
}
/**
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 * @param {Extent=} opt_extent Extent.
 * @return {Extent} Extent.
 */


function createOrUpdateFromCoordinate(coordinate, opt_extent) {
  var x = coordinate[0];
  var y = coordinate[1];
  return createOrUpdate(x, y, x, y, opt_extent);
}
/**
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates Coordinates.
 * @param {Extent=} opt_extent Extent.
 * @return {Extent} Extent.
 */


function createOrUpdateFromCoordinates(coordinates, opt_extent) {
  var extent = createOrUpdateEmpty(opt_extent);
  return extendCoordinates(extent, coordinates);
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {Extent=} opt_extent Extent.
 * @return {Extent} Extent.
 */


function createOrUpdateFromFlatCoordinates(flatCoordinates, offset, end, stride, opt_extent) {
  var extent = createOrUpdateEmpty(opt_extent);
  return extendFlatCoordinates(extent, flatCoordinates, offset, end, stride);
}
/**
 * @param {Array<Array<import("./coordinate.js").Coordinate>>} rings Rings.
 * @param {Extent=} opt_extent Extent.
 * @return {Extent} Extent.
 */


function createOrUpdateFromRings(rings, opt_extent) {
  var extent = createOrUpdateEmpty(opt_extent);
  return extendRings(extent, rings);
}
/**
 * Determine if two extents are equivalent.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {boolean} The two extents are equivalent.
 * @api
 */


function equals(extent1, extent2) {
  return extent1[0] == extent2[0] && extent1[2] == extent2[2] && extent1[1] == extent2[1] && extent1[3] == extent2[3];
}
/**
 * Modify an extent to include another extent.
 * @param {Extent} extent1 The extent to be modified.
 * @param {Extent} extent2 The extent that will be included in the first.
 * @return {Extent} A reference to the first (extended) extent.
 * @api
 */


function extend(extent1, extent2) {
  if (extent2[0] < extent1[0]) {
    extent1[0] = extent2[0];
  }

  if (extent2[2] > extent1[2]) {
    extent1[2] = extent2[2];
  }

  if (extent2[1] < extent1[1]) {
    extent1[1] = extent2[1];
  }

  if (extent2[3] > extent1[3]) {
    extent1[3] = extent2[3];
  }

  return extent1;
}
/**
 * @param {Extent} extent Extent.
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 */


function extendCoordinate(extent, coordinate) {
  if (coordinate[0] < extent[0]) {
    extent[0] = coordinate[0];
  }

  if (coordinate[0] > extent[2]) {
    extent[2] = coordinate[0];
  }

  if (coordinate[1] < extent[1]) {
    extent[1] = coordinate[1];
  }

  if (coordinate[1] > extent[3]) {
    extent[3] = coordinate[1];
  }
}
/**
 * @param {Extent} extent Extent.
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates Coordinates.
 * @return {Extent} Extent.
 */


function extendCoordinates(extent, coordinates) {
  for (var i = 0, ii = coordinates.length; i < ii; ++i) {
    extendCoordinate(extent, coordinates[i]);
  }

  return extent;
}
/**
 * @param {Extent} extent Extent.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {Extent} Extent.
 */


function extendFlatCoordinates(extent, flatCoordinates, offset, end, stride) {
  for (; offset < end; offset += stride) {
    extendXY(extent, flatCoordinates[offset], flatCoordinates[offset + 1]);
  }

  return extent;
}
/**
 * @param {Extent} extent Extent.
 * @param {Array<Array<import("./coordinate.js").Coordinate>>} rings Rings.
 * @return {Extent} Extent.
 */


function extendRings(extent, rings) {
  for (var i = 0, ii = rings.length; i < ii; ++i) {
    extendCoordinates(extent, rings[i]);
  }

  return extent;
}
/**
 * @param {Extent} extent Extent.
 * @param {number} x X.
 * @param {number} y Y.
 */


function extendXY(extent, x, y) {
  extent[0] = Math.min(extent[0], x);
  extent[1] = Math.min(extent[1], y);
  extent[2] = Math.max(extent[2], x);
  extent[3] = Math.max(extent[3], y);
}
/**
 * This function calls `callback` for each corner of the extent. If the
 * callback returns a truthy value the function returns that value
 * immediately. Otherwise the function returns `false`.
 * @param {Extent} extent Extent.
 * @param {function(this:T, import("./coordinate.js").Coordinate): S} callback Callback.
 * @param {T=} opt_this Value to use as `this` when executing `callback`.
 * @return {S|boolean} Value.
 * @template S, T
 */


function forEachCorner(extent, callback, opt_this) {
  var val;
  val = callback.call(opt_this, getBottomLeft(extent));

  if (val) {
    return val;
  }

  val = callback.call(opt_this, getBottomRight(extent));

  if (val) {
    return val;
  }

  val = callback.call(opt_this, getTopRight(extent));

  if (val) {
    return val;
  }

  val = callback.call(opt_this, getTopLeft(extent));

  if (val) {
    return val;
  }

  return false;
}
/**
 * Get the size of an extent.
 * @param {Extent} extent Extent.
 * @return {number} Area.
 * @api
 */


function getArea(extent) {
  var area = 0;

  if (!isEmpty(extent)) {
    area = getWidth(extent) * getHeight(extent);
  }

  return area;
}
/**
 * Get the bottom left coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Bottom left coordinate.
 * @api
 */


function getBottomLeft(extent) {
  return [extent[0], extent[1]];
}
/**
 * Get the bottom right coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Bottom right coordinate.
 * @api
 */


function getBottomRight(extent) {
  return [extent[2], extent[1]];
}
/**
 * Get the center coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Center.
 * @api
 */


function getCenter(extent) {
  return [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2];
}
/**
 * Get a corner coordinate of an extent.
 * @param {Extent} extent Extent.
 * @param {Corner} corner Corner.
 * @return {import("./coordinate.js").Coordinate} Corner coordinate.
 */


function getCorner(extent, corner) {
  var coordinate;

  if (corner === _Corner.default.BOTTOM_LEFT) {
    coordinate = getBottomLeft(extent);
  } else if (corner === _Corner.default.BOTTOM_RIGHT) {
    coordinate = getBottomRight(extent);
  } else if (corner === _Corner.default.TOP_LEFT) {
    coordinate = getTopLeft(extent);
  } else if (corner === _Corner.default.TOP_RIGHT) {
    coordinate = getTopRight(extent);
  } else {
    (0, _asserts.assert)(false, 13); // Invalid corner
  }

  return coordinate;
}
/**
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {number} Enlarged area.
 */


function getEnlargedArea(extent1, extent2) {
  var minX = Math.min(extent1[0], extent2[0]);
  var minY = Math.min(extent1[1], extent2[1]);
  var maxX = Math.max(extent1[2], extent2[2]);
  var maxY = Math.max(extent1[3], extent2[3]);
  return (maxX - minX) * (maxY - minY);
}
/**
 * @param {import("./coordinate.js").Coordinate} center Center.
 * @param {number} resolution Resolution.
 * @param {number} rotation Rotation.
 * @param {import("./size.js").Size} size Size.
 * @param {Extent=} opt_extent Destination extent.
 * @return {Extent} Extent.
 */


function getForViewAndSize(center, resolution, rotation, size, opt_extent) {
  var dx = resolution * size[0] / 2;
  var dy = resolution * size[1] / 2;
  var cosRotation = Math.cos(rotation);
  var sinRotation = Math.sin(rotation);
  var xCos = dx * cosRotation;
  var xSin = dx * sinRotation;
  var yCos = dy * cosRotation;
  var ySin = dy * sinRotation;
  var x = center[0];
  var y = center[1];
  var x0 = x - xCos + ySin;
  var x1 = x - xCos - ySin;
  var x2 = x + xCos - ySin;
  var x3 = x + xCos + ySin;
  var y0 = y - xSin - yCos;
  var y1 = y - xSin + yCos;
  var y2 = y + xSin + yCos;
  var y3 = y + xSin - yCos;
  return createOrUpdate(Math.min(x0, x1, x2, x3), Math.min(y0, y1, y2, y3), Math.max(x0, x1, x2, x3), Math.max(y0, y1, y2, y3), opt_extent);
}
/**
 * Get the height of an extent.
 * @param {Extent} extent Extent.
 * @return {number} Height.
 * @api
 */


function getHeight(extent) {
  return extent[3] - extent[1];
}
/**
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {number} Intersection area.
 */


function getIntersectionArea(extent1, extent2) {
  var intersection = getIntersection(extent1, extent2);
  return getArea(intersection);
}
/**
 * Get the intersection of two extents.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @param {Extent=} opt_extent Optional extent to populate with intersection.
 * @return {Extent} Intersecting extent.
 * @api
 */


function getIntersection(extent1, extent2, opt_extent) {
  var intersection = opt_extent ? opt_extent : createEmpty();

  if (intersects(extent1, extent2)) {
    if (extent1[0] > extent2[0]) {
      intersection[0] = extent1[0];
    } else {
      intersection[0] = extent2[0];
    }

    if (extent1[1] > extent2[1]) {
      intersection[1] = extent1[1];
    } else {
      intersection[1] = extent2[1];
    }

    if (extent1[2] < extent2[2]) {
      intersection[2] = extent1[2];
    } else {
      intersection[2] = extent2[2];
    }

    if (extent1[3] < extent2[3]) {
      intersection[3] = extent1[3];
    } else {
      intersection[3] = extent2[3];
    }
  } else {
    createOrUpdateEmpty(intersection);
  }

  return intersection;
}
/**
 * @param {Extent} extent Extent.
 * @return {number} Margin.
 */


function getMargin(extent) {
  return getWidth(extent) + getHeight(extent);
}
/**
 * Get the size (width, height) of an extent.
 * @param {Extent} extent The extent.
 * @return {import("./size.js").Size} The extent size.
 * @api
 */


function getSize(extent) {
  return [extent[2] - extent[0], extent[3] - extent[1]];
}
/**
 * Get the top left coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Top left coordinate.
 * @api
 */


function getTopLeft(extent) {
  return [extent[0], extent[3]];
}
/**
 * Get the top right coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Top right coordinate.
 * @api
 */


function getTopRight(extent) {
  return [extent[2], extent[3]];
}
/**
 * Get the width of an extent.
 * @param {Extent} extent Extent.
 * @return {number} Width.
 * @api
 */


function getWidth(extent) {
  return extent[2] - extent[0];
}
/**
 * Determine if one extent intersects another.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent.
 * @return {boolean} The two extents intersect.
 * @api
 */


function intersects(extent1, extent2) {
  return extent1[0] <= extent2[2] && extent1[2] >= extent2[0] && extent1[1] <= extent2[3] && extent1[3] >= extent2[1];
}
/**
 * Determine if an extent is empty.
 * @param {Extent} extent Extent.
 * @return {boolean} Is empty.
 * @api
 */


function isEmpty(extent) {
  return extent[2] < extent[0] || extent[3] < extent[1];
}
/**
 * @param {Extent} extent Extent.
 * @param {Extent=} opt_extent Extent.
 * @return {Extent} Extent.
 */


function returnOrUpdate(extent, opt_extent) {
  if (opt_extent) {
    opt_extent[0] = extent[0];
    opt_extent[1] = extent[1];
    opt_extent[2] = extent[2];
    opt_extent[3] = extent[3];
    return opt_extent;
  } else {
    return extent;
  }
}
/**
 * @param {Extent} extent Extent.
 * @param {number} value Value.
 */


function scaleFromCenter(extent, value) {
  var deltaX = (extent[2] - extent[0]) / 2 * (value - 1);
  var deltaY = (extent[3] - extent[1]) / 2 * (value - 1);
  extent[0] -= deltaX;
  extent[2] += deltaX;
  extent[1] -= deltaY;
  extent[3] += deltaY;
}
/**
 * Determine if the segment between two coordinates intersects (crosses,
 * touches, or is contained by) the provided extent.
 * @param {Extent} extent The extent.
 * @param {import("./coordinate.js").Coordinate} start Segment start coordinate.
 * @param {import("./coordinate.js").Coordinate} end Segment end coordinate.
 * @return {boolean} The segment intersects the extent.
 */


function intersectsSegment(extent, start, end) {
  var intersects = false;
  var startRel = coordinateRelationship(extent, start);
  var endRel = coordinateRelationship(extent, end);

  if (startRel === _Relationship.default.INTERSECTING || endRel === _Relationship.default.INTERSECTING) {
    intersects = true;
  } else {
    var minX = extent[0];
    var minY = extent[1];
    var maxX = extent[2];
    var maxY = extent[3];
    var startX = start[0];
    var startY = start[1];
    var endX = end[0];
    var endY = end[1];
    var slope = (endY - startY) / (endX - startX);
    var x, y;

    if (!!(endRel & _Relationship.default.ABOVE) && !(startRel & _Relationship.default.ABOVE)) {
      // potentially intersects top
      x = endX - (endY - maxY) / slope;
      intersects = x >= minX && x <= maxX;
    }

    if (!intersects && !!(endRel & _Relationship.default.RIGHT) && !(startRel & _Relationship.default.RIGHT)) {
      // potentially intersects right
      y = endY - (endX - maxX) * slope;
      intersects = y >= minY && y <= maxY;
    }

    if (!intersects && !!(endRel & _Relationship.default.BELOW) && !(startRel & _Relationship.default.BELOW)) {
      // potentially intersects bottom
      x = endX - (endY - minY) / slope;
      intersects = x >= minX && x <= maxX;
    }

    if (!intersects && !!(endRel & _Relationship.default.LEFT) && !(startRel & _Relationship.default.LEFT)) {
      // potentially intersects left
      y = endY - (endX - minX) * slope;
      intersects = y >= minY && y <= maxY;
    }
  }

  return intersects;
}
/**
 * Apply a transform function to the extent.
 * @param {Extent} extent Extent.
 * @param {import("./proj.js").TransformFunction} transformFn Transform function.
 * Called with `[minX, minY, maxX, maxY]` extent coordinates.
 * @param {Extent=} opt_extent Destination extent.
 * @return {Extent} Extent.
 * @api
 */


function applyTransform(extent, transformFn, opt_extent) {
  var coordinates = [extent[0], extent[1], extent[0], extent[3], extent[2], extent[1], extent[2], extent[3]];
  transformFn(coordinates, coordinates, 2);
  var xs = [coordinates[0], coordinates[2], coordinates[4], coordinates[6]];
  var ys = [coordinates[1], coordinates[3], coordinates[5], coordinates[7]];
  return _boundingExtentXYs(xs, ys, opt_extent);
}
},{"./asserts.js":"node_modules/ol/asserts.js","./extent/Corner.js":"node_modules/ol/extent/Corner.js","./extent/Relationship.js":"node_modules/ol/extent/Relationship.js"}],"node_modules/ol/Overlay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MapEventType = _interopRequireDefault(require("./MapEventType.js"));

var _Object = _interopRequireWildcard(require("./Object.js"));

var _OverlayPositioning = _interopRequireDefault(require("./OverlayPositioning.js"));

var _css = require("./css.js");

var _dom = require("./dom.js");

var _events = require("./events.js");

var _extent = require("./extent.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/Overlay
 */

/**
 * @typedef {Object} Options
 * @property {number|string} [id] Set the overlay id. The overlay id can be used
 * with the {@link module:ol/Map~Map#getOverlayById} method.
 * @property {HTMLElement} [element] The overlay element.
 * @property {Array<number>} [offset=[0, 0]] Offsets in pixels used when positioning
 * the overlay. The first element in the
 * array is the horizontal offset. A positive value shifts the overlay right.
 * The second element in the array is the vertical offset. A positive value
 * shifts the overlay down.
 * @property {import("./coordinate.js").Coordinate} [position] The overlay position
 * in map projection.
 * @property {OverlayPositioning} [positioning='top-left'] Defines how
 * the overlay is actually positioned with respect to its `position` property.
 * Possible values are `'bottom-left'`, `'bottom-center'`, `'bottom-right'`,
 * `'center-left'`, `'center-center'`, `'center-right'`, `'top-left'`,
 * `'top-center'`, and `'top-right'`.
 * @property {boolean} [stopEvent=true] Whether event propagation to the map
 * viewport should be stopped. If `true` the overlay is placed in the same
 * container as that of the controls (CSS class name
 * `ol-overlaycontainer-stopevent`); if `false` it is placed in the container
 * with CSS class name specified by the `className` property.
 * @property {boolean} [insertFirst=true] Whether the overlay is inserted first
 * in the overlay container, or appended. If the overlay is placed in the same
 * container as that of the controls (see the `stopEvent` option) you will
 * probably set `insertFirst` to `true` so the overlay is displayed below the
 * controls.
 * @property {boolean} [autoPan=false] If set to `true` the map is panned when
 * calling `setPosition`, so that the overlay is entirely visible in the current
 * viewport.
 * @property {PanOptions} [autoPanAnimation] The
 * animation options used to pan the overlay into view. This animation is only
 * used when `autoPan` is enabled. A `duration` and `easing` may be provided to
 * customize the animation.
 * @property {number} [autoPanMargin=20] The margin (in pixels) between the
 * overlay and the borders of the map when autopanning.
 * @property {string} [className='ol-overlay-container ol-selectable'] CSS class
 * name.
 */

/**
 * @typedef {Object} PanOptions
 * @property {number} [duration=1000] The duration of the animation in
 * milliseconds.
 * @property {function(number):number} [easing] The easing function to use. Can
 * be one from {@link module:ol/easing} or a custom function.
 * Default is {@link module:ol/easing~inAndOut}.
 */

/**
 * @enum {string}
 * @protected
 */
var Property = {
  ELEMENT: 'element',
  MAP: 'map',
  OFFSET: 'offset',
  POSITION: 'position',
  POSITIONING: 'positioning'
};
/**
 * @classdesc
 * An element to be displayed over the map and attached to a single map
 * location.  Like {@link module:ol/control/Control~Control}, Overlays are
 * visible widgets. Unlike Controls, they are not in a fixed position on the
 * screen, but are tied to a geographical coordinate, so panning the map will
 * move an Overlay but not a Control.
 *
 * Example:
 *
 *     import Overlay from 'ol/Overlay';
 *
 *     var popup = new Overlay({
 *       element: document.getElementById('popup')
 *     });
 *     popup.setPosition(coordinate);
 *     map.addOverlay(popup);
 *
 * @api
 */

var Overlay =
/*@__PURE__*/
function (BaseObject) {
  function Overlay(options) {
    BaseObject.call(this);
    /**
     * @protected
     * @type {Options}
     */

    this.options = options;
    /**
     * @protected
     * @type {number|string|undefined}
     */

    this.id = options.id;
    /**
     * @protected
     * @type {boolean}
     */

    this.insertFirst = options.insertFirst !== undefined ? options.insertFirst : true;
    /**
     * @protected
     * @type {boolean}
     */

    this.stopEvent = options.stopEvent !== undefined ? options.stopEvent : true;
    /**
     * @protected
     * @type {HTMLElement}
     */

    this.element = document.createElement('div');
    this.element.className = options.className !== undefined ? options.className : 'ol-overlay-container ' + _css.CLASS_SELECTABLE;
    this.element.style.position = 'absolute';
    /**
     * @protected
     * @type {boolean}
     */

    this.autoPan = options.autoPan !== undefined ? options.autoPan : false;
    /**
     * @protected
     * @type {PanOptions}
     */

    this.autoPanAnimation = options.autoPanAnimation ||
    /** @type {PanOptions} */
    {};
    /**
     * @protected
     * @type {number}
     */

    this.autoPanMargin = options.autoPanMargin !== undefined ? options.autoPanMargin : 20;
    /**
     * @protected
     * @type {{bottom_: string,
     *         left_: string,
     *         right_: string,
     *         top_: string,
     *         visible: boolean}}
     */

    this.rendered = {
      bottom_: '',
      left_: '',
      right_: '',
      top_: '',
      visible: true
    };
    /**
     * @protected
     * @type {?import("./events.js").EventsKey}
     */

    this.mapPostrenderListenerKey = null;
    (0, _events.listen)(this, (0, _Object.getChangeEventType)(Property.ELEMENT), this.handleElementChanged, this);
    (0, _events.listen)(this, (0, _Object.getChangeEventType)(Property.MAP), this.handleMapChanged, this);
    (0, _events.listen)(this, (0, _Object.getChangeEventType)(Property.OFFSET), this.handleOffsetChanged, this);
    (0, _events.listen)(this, (0, _Object.getChangeEventType)(Property.POSITION), this.handlePositionChanged, this);
    (0, _events.listen)(this, (0, _Object.getChangeEventType)(Property.POSITIONING), this.handlePositioningChanged, this);

    if (options.element !== undefined) {
      this.setElement(options.element);
    }

    this.setOffset(options.offset !== undefined ? options.offset : [0, 0]);
    this.setPositioning(options.positioning !== undefined ?
    /** @type {OverlayPositioning} */
    options.positioning : _OverlayPositioning.default.TOP_LEFT);

    if (options.position !== undefined) {
      this.setPosition(options.position);
    }
  }

  if (BaseObject) Overlay.__proto__ = BaseObject;
  Overlay.prototype = Object.create(BaseObject && BaseObject.prototype);
  Overlay.prototype.constructor = Overlay;
  /**
   * Get the DOM element of this overlay.
   * @return {HTMLElement|undefined} The Element containing the overlay.
   * @observable
   * @api
   */

  Overlay.prototype.getElement = function getElement() {
    return (
      /** @type {HTMLElement|undefined} */
      this.get(Property.ELEMENT)
    );
  };
  /**
   * Get the overlay identifier which is set on constructor.
   * @return {number|string|undefined} Id.
   * @api
   */


  Overlay.prototype.getId = function getId() {
    return this.id;
  };
  /**
   * Get the map associated with this overlay.
   * @return {import("./PluggableMap.js").default|undefined} The map that the
   * overlay is part of.
   * @observable
   * @api
   */


  Overlay.prototype.getMap = function getMap() {
    return (
      /** @type {import("./PluggableMap.js").default|undefined} */
      this.get(Property.MAP)
    );
  };
  /**
   * Get the offset of this overlay.
   * @return {Array<number>} The offset.
   * @observable
   * @api
   */


  Overlay.prototype.getOffset = function getOffset() {
    return (
      /** @type {Array<number>} */
      this.get(Property.OFFSET)
    );
  };
  /**
   * Get the current position of this overlay.
   * @return {import("./coordinate.js").Coordinate|undefined} The spatial point that the overlay is
   *     anchored at.
   * @observable
   * @api
   */


  Overlay.prototype.getPosition = function getPosition() {
    return (
      /** @type {import("./coordinate.js").Coordinate|undefined} */
      this.get(Property.POSITION)
    );
  };
  /**
   * Get the current positioning of this overlay.
   * @return {OverlayPositioning} How the overlay is positioned
   *     relative to its point on the map.
   * @observable
   * @api
   */


  Overlay.prototype.getPositioning = function getPositioning() {
    return (
      /** @type {OverlayPositioning} */
      this.get(Property.POSITIONING)
    );
  };
  /**
   * @protected
   */


  Overlay.prototype.handleElementChanged = function handleElementChanged() {
    (0, _dom.removeChildren)(this.element);
    var element = this.getElement();

    if (element) {
      this.element.appendChild(element);
    }
  };
  /**
   * @protected
   */


  Overlay.prototype.handleMapChanged = function handleMapChanged() {
    if (this.mapPostrenderListenerKey) {
      (0, _dom.removeNode)(this.element);
      (0, _events.unlistenByKey)(this.mapPostrenderListenerKey);
      this.mapPostrenderListenerKey = null;
    }

    var map = this.getMap();

    if (map) {
      this.mapPostrenderListenerKey = (0, _events.listen)(map, _MapEventType.default.POSTRENDER, this.render, this);
      this.updatePixelPosition();
      var container = this.stopEvent ? map.getOverlayContainerStopEvent() : map.getOverlayContainer();

      if (this.insertFirst) {
        container.insertBefore(this.element, container.childNodes[0] || null);
      } else {
        container.appendChild(this.element);
      }
    }
  };
  /**
   * @protected
   */


  Overlay.prototype.render = function render() {
    this.updatePixelPosition();
  };
  /**
   * @protected
   */


  Overlay.prototype.handleOffsetChanged = function handleOffsetChanged() {
    this.updatePixelPosition();
  };
  /**
   * @protected
   */


  Overlay.prototype.handlePositionChanged = function handlePositionChanged() {
    this.updatePixelPosition();

    if (this.get(Property.POSITION) && this.autoPan) {
      this.panIntoView();
    }
  };
  /**
   * @protected
   */


  Overlay.prototype.handlePositioningChanged = function handlePositioningChanged() {
    this.updatePixelPosition();
  };
  /**
   * Set the DOM element to be associated with this overlay.
   * @param {HTMLElement|undefined} element The Element containing the overlay.
   * @observable
   * @api
   */


  Overlay.prototype.setElement = function setElement(element) {
    this.set(Property.ELEMENT, element);
  };
  /**
   * Set the map to be associated with this overlay.
   * @param {import("./PluggableMap.js").default|undefined} map The map that the
   * overlay is part of.
   * @observable
   * @api
   */


  Overlay.prototype.setMap = function setMap(map) {
    this.set(Property.MAP, map);
  };
  /**
   * Set the offset for this overlay.
   * @param {Array<number>} offset Offset.
   * @observable
   * @api
   */


  Overlay.prototype.setOffset = function setOffset(offset) {
    this.set(Property.OFFSET, offset);
  };
  /**
   * Set the position for this overlay. If the position is `undefined` the
   * overlay is hidden.
   * @param {import("./coordinate.js").Coordinate|undefined} position The spatial point that the overlay
   *     is anchored at.
   * @observable
   * @api
   */


  Overlay.prototype.setPosition = function setPosition(position) {
    this.set(Property.POSITION, position);
  };
  /**
   * Pan the map so that the overlay is entirely visible in the current viewport
   * (if necessary).
   * @protected
   */


  Overlay.prototype.panIntoView = function panIntoView() {
    var map = this.getMap();

    if (!map || !map.getTargetElement()) {
      return;
    }

    var mapRect = this.getRect(map.getTargetElement(), map.getSize());
    var element = this.getElement();
    var overlayRect = this.getRect(element, [(0, _dom.outerWidth)(element), (0, _dom.outerHeight)(element)]);
    var margin = this.autoPanMargin;

    if (!(0, _extent.containsExtent)(mapRect, overlayRect)) {
      // the overlay is not completely inside the viewport, so pan the map
      var offsetLeft = overlayRect[0] - mapRect[0];
      var offsetRight = mapRect[2] - overlayRect[2];
      var offsetTop = overlayRect[1] - mapRect[1];
      var offsetBottom = mapRect[3] - overlayRect[3];
      var delta = [0, 0];

      if (offsetLeft < 0) {
        // move map to the left
        delta[0] = offsetLeft - margin;
      } else if (offsetRight < 0) {
        // move map to the right
        delta[0] = Math.abs(offsetRight) + margin;
      }

      if (offsetTop < 0) {
        // move map up
        delta[1] = offsetTop - margin;
      } else if (offsetBottom < 0) {
        // move map down
        delta[1] = Math.abs(offsetBottom) + margin;
      }

      if (delta[0] !== 0 || delta[1] !== 0) {
        var center =
        /** @type {import("./coordinate.js").Coordinate} */
        map.getView().getCenter();
        var centerPx = map.getPixelFromCoordinate(center);
        var newCenterPx = [centerPx[0] + delta[0], centerPx[1] + delta[1]];
        map.getView().animate({
          center: map.getCoordinateFromPixel(newCenterPx),
          duration: this.autoPanAnimation.duration,
          easing: this.autoPanAnimation.easing
        });
      }
    }
  };
  /**
   * Get the extent of an element relative to the document
   * @param {HTMLElement|undefined} element The element.
   * @param {import("./size.js").Size|undefined} size The size of the element.
   * @return {import("./extent.js").Extent} The extent.
   * @protected
   */


  Overlay.prototype.getRect = function getRect(element, size) {
    var box = element.getBoundingClientRect();
    var offsetX = box.left + window.pageXOffset;
    var offsetY = box.top + window.pageYOffset;
    return [offsetX, offsetY, offsetX + size[0], offsetY + size[1]];
  };
  /**
   * Set the positioning for this overlay.
   * @param {OverlayPositioning} positioning how the overlay is
   *     positioned relative to its point on the map.
   * @observable
   * @api
   */


  Overlay.prototype.setPositioning = function setPositioning(positioning) {
    this.set(Property.POSITIONING, positioning);
  };
  /**
   * Modify the visibility of the element.
   * @param {boolean} visible Element visibility.
   * @protected
   */


  Overlay.prototype.setVisible = function setVisible(visible) {
    if (this.rendered.visible !== visible) {
      this.element.style.display = visible ? '' : 'none';
      this.rendered.visible = visible;
    }
  };
  /**
   * Update pixel position.
   * @protected
   */


  Overlay.prototype.updatePixelPosition = function updatePixelPosition() {
    var map = this.getMap();
    var position = this.getPosition();

    if (!map || !map.isRendered() || !position) {
      this.setVisible(false);
      return;
    }

    var pixel = map.getPixelFromCoordinate(position);
    var mapSize = map.getSize();
    this.updateRenderedPosition(pixel, mapSize);
  };
  /**
   * @param {import("./pixel.js").Pixel} pixel The pixel location.
   * @param {import("./size.js").Size|undefined} mapSize The map size.
   * @protected
   */


  Overlay.prototype.updateRenderedPosition = function updateRenderedPosition(pixel, mapSize) {
    var style = this.element.style;
    var offset = this.getOffset();
    var positioning = this.getPositioning();
    this.setVisible(true);
    var offsetX = offset[0];
    var offsetY = offset[1];

    if (positioning == _OverlayPositioning.default.BOTTOM_RIGHT || positioning == _OverlayPositioning.default.CENTER_RIGHT || positioning == _OverlayPositioning.default.TOP_RIGHT) {
      if (this.rendered.left_ !== '') {
        this.rendered.left_ = style.left = '';
      }

      var right = Math.round(mapSize[0] - pixel[0] - offsetX) + 'px';

      if (this.rendered.right_ != right) {
        this.rendered.right_ = style.right = right;
      }
    } else {
      if (this.rendered.right_ !== '') {
        this.rendered.right_ = style.right = '';
      }

      if (positioning == _OverlayPositioning.default.BOTTOM_CENTER || positioning == _OverlayPositioning.default.CENTER_CENTER || positioning == _OverlayPositioning.default.TOP_CENTER) {
        offsetX -= this.element.offsetWidth / 2;
      }

      var left = Math.round(pixel[0] + offsetX) + 'px';

      if (this.rendered.left_ != left) {
        this.rendered.left_ = style.left = left;
      }
    }

    if (positioning == _OverlayPositioning.default.BOTTOM_LEFT || positioning == _OverlayPositioning.default.BOTTOM_CENTER || positioning == _OverlayPositioning.default.BOTTOM_RIGHT) {
      if (this.rendered.top_ !== '') {
        this.rendered.top_ = style.top = '';
      }

      var bottom = Math.round(mapSize[1] - pixel[1] - offsetY) + 'px';

      if (this.rendered.bottom_ != bottom) {
        this.rendered.bottom_ = style.bottom = bottom;
      }
    } else {
      if (this.rendered.bottom_ !== '') {
        this.rendered.bottom_ = style.bottom = '';
      }

      if (positioning == _OverlayPositioning.default.CENTER_LEFT || positioning == _OverlayPositioning.default.CENTER_CENTER || positioning == _OverlayPositioning.default.CENTER_RIGHT) {
        offsetY -= this.element.offsetHeight / 2;
      }

      var top = Math.round(pixel[1] + offsetY) + 'px';

      if (this.rendered.top_ != top) {
        this.rendered.top_ = style.top = top;
      }
    }
  };
  /**
   * returns the options this Overlay has been created with
   * @return {Options} overlay options
   */


  Overlay.prototype.getOptions = function getOptions() {
    return this.options;
  };

  return Overlay;
}(_Object.default);

var _default = Overlay;
exports.default = _default;
},{"./MapEventType.js":"node_modules/ol/MapEventType.js","./Object.js":"node_modules/ol/Object.js","./OverlayPositioning.js":"node_modules/ol/OverlayPositioning.js","./css.js":"node_modules/ol/css.js","./dom.js":"node_modules/ol/dom.js","./events.js":"node_modules/ol/events.js","./extent.js":"node_modules/ol/extent.js"}],"C:/Users/acer/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/_empty.js":[function(require,module,exports) {

},{}],"node_modules/ol/LayerType.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/LayerType
 */

/**
 * A layer type used when creating layer renderers.
 * @enum {string}
 */
var _default = {
  IMAGE: 'IMAGE',
  TILE: 'TILE',
  VECTOR_TILE: 'VECTOR_TILE',
  VECTOR: 'VECTOR'
};
exports.default = _default;
},{}],"node_modules/ol/layer/Property.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/layer/Property
 */

/**
 * @enum {string}
 */
var _default = {
  OPACITY: 'opacity',
  VISIBLE: 'visible',
  EXTENT: 'extent',
  Z_INDEX: 'zIndex',
  MAX_RESOLUTION: 'maxResolution',
  MIN_RESOLUTION: 'minResolution',
  SOURCE: 'source'
};
exports.default = _default;
},{}],"node_modules/ol/math.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clamp = clamp;
exports.roundUpToPowerOfTwo = roundUpToPowerOfTwo;
exports.squaredSegmentDistance = squaredSegmentDistance;
exports.squaredDistance = squaredDistance;
exports.solveLinearSystem = solveLinearSystem;
exports.toDegrees = toDegrees;
exports.toRadians = toRadians;
exports.modulo = modulo;
exports.lerp = lerp;
exports.cosh = void 0;

var _asserts = require("./asserts.js");

/**
 * @module ol/math
 */

/**
 * Takes a number and clamps it to within the provided bounds.
 * @param {number} value The input number.
 * @param {number} min The minimum value to return.
 * @param {number} max The maximum value to return.
 * @return {number} The input number if it is within bounds, or the nearest
 *     number within the bounds.
 */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
/**
 * Return the hyperbolic cosine of a given number. The method will use the
 * native `Math.cosh` function if it is available, otherwise the hyperbolic
 * cosine will be calculated via the reference implementation of the Mozilla
 * developer network.
 *
 * @param {number} x X.
 * @return {number} Hyperbolic cosine of x.
 */


var cosh = function () {
  // Wrapped in a iife, to save the overhead of checking for the native
  // implementation on every invocation.
  var cosh;

  if ('cosh' in Math) {
    // The environment supports the native Math.cosh function, use it…
    cosh = Math.cosh;
  } else {
    // … else, use the reference implementation of MDN:
    cosh = function (x) {
      var y =
      /** @type {Math} */
      Math.exp(x);
      return (y + 1 / y) / 2;
    };
  }

  return cosh;
}();
/**
 * @param {number} x X.
 * @return {number} The smallest power of two greater than or equal to x.
 */


exports.cosh = cosh;

function roundUpToPowerOfTwo(x) {
  (0, _asserts.assert)(0 < x, 29); // `x` must be greater than `0`

  return Math.pow(2, Math.ceil(Math.log(x) / Math.LN2));
}
/**
 * Returns the square of the closest distance between the point (x, y) and the
 * line segment (x1, y1) to (x2, y2).
 * @param {number} x X.
 * @param {number} y Y.
 * @param {number} x1 X1.
 * @param {number} y1 Y1.
 * @param {number} x2 X2.
 * @param {number} y2 Y2.
 * @return {number} Squared distance.
 */


function squaredSegmentDistance(x, y, x1, y1, x2, y2) {
  var dx = x2 - x1;
  var dy = y2 - y1;

  if (dx !== 0 || dy !== 0) {
    var t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);

    if (t > 1) {
      x1 = x2;
      y1 = y2;
    } else if (t > 0) {
      x1 += dx * t;
      y1 += dy * t;
    }
  }

  return squaredDistance(x, y, x1, y1);
}
/**
 * Returns the square of the distance between the points (x1, y1) and (x2, y2).
 * @param {number} x1 X1.
 * @param {number} y1 Y1.
 * @param {number} x2 X2.
 * @param {number} y2 Y2.
 * @return {number} Squared distance.
 */


function squaredDistance(x1, y1, x2, y2) {
  var dx = x2 - x1;
  var dy = y2 - y1;
  return dx * dx + dy * dy;
}
/**
 * Solves system of linear equations using Gaussian elimination method.
 *
 * @param {Array<Array<number>>} mat Augmented matrix (n x n + 1 column)
 *                                     in row-major order.
 * @return {Array<number>} The resulting vector.
 */


function solveLinearSystem(mat) {
  var n = mat.length;

  for (var i = 0; i < n; i++) {
    // Find max in the i-th column (ignoring i - 1 first rows)
    var maxRow = i;
    var maxEl = Math.abs(mat[i][i]);

    for (var r = i + 1; r < n; r++) {
      var absValue = Math.abs(mat[r][i]);

      if (absValue > maxEl) {
        maxEl = absValue;
        maxRow = r;
      }
    }

    if (maxEl === 0) {
      return null; // matrix is singular
    } // Swap max row with i-th (current) row


    var tmp = mat[maxRow];
    mat[maxRow] = mat[i];
    mat[i] = tmp; // Subtract the i-th row to make all the remaining rows 0 in the i-th column

    for (var j = i + 1; j < n; j++) {
      var coef = -mat[j][i] / mat[i][i];

      for (var k = i; k < n + 1; k++) {
        if (i == k) {
          mat[j][k] = 0;
        } else {
          mat[j][k] += coef * mat[i][k];
        }
      }
    }
  } // Solve Ax=b for upper triangular matrix A (mat)


  var x = new Array(n);

  for (var l = n - 1; l >= 0; l--) {
    x[l] = mat[l][n] / mat[l][l];

    for (var m = l - 1; m >= 0; m--) {
      mat[m][n] -= mat[m][l] * x[l];
    }
  }

  return x;
}
/**
 * Converts radians to to degrees.
 *
 * @param {number} angleInRadians Angle in radians.
 * @return {number} Angle in degrees.
 */


function toDegrees(angleInRadians) {
  return angleInRadians * 180 / Math.PI;
}
/**
 * Converts degrees to radians.
 *
 * @param {number} angleInDegrees Angle in degrees.
 * @return {number} Angle in radians.
 */


function toRadians(angleInDegrees) {
  return angleInDegrees * Math.PI / 180;
}
/**
 * Returns the modulo of a / b, depending on the sign of b.
 *
 * @param {number} a Dividend.
 * @param {number} b Divisor.
 * @return {number} Modulo.
 */


function modulo(a, b) {
  var r = a % b;
  return r * b < 0 ? r + b : r;
}
/**
 * Calculates the linearly interpolated value of x between a and b.
 *
 * @param {number} a Number
 * @param {number} b Number
 * @param {number} x Value to be interpolated.
 * @return {number} Interpolated value.
 */


function lerp(a, b, x) {
  return a + x * (b - a);
}
},{"./asserts.js":"node_modules/ol/asserts.js"}],"node_modules/ol/layer/Base.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("../util.js");

var _Object = _interopRequireDefault(require("../Object.js"));

var _Property = _interopRequireDefault(require("./Property.js"));

var _math = require("../math.js");

var _obj = require("../obj.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/layer/Base
 */

/**
 * @typedef {Object} Options
 * @property {number} [opacity=1] Opacity (0, 1).
 * @property {boolean} [visible=true] Visibility.
 * @property {import("../extent.js").Extent} [extent] The bounding extent for layer rendering.  The layer will not be
 * rendered outside of this extent.
 * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
 * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
 * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
 * method was used.
 * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
 * visible.
 * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
 * be visible.
 */

/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Note that with {@link module:ol/layer/Base} and all its subclasses, any property set in
 * the options is set as a {@link module:ol/Object} property on the layer object, so
 * is observable, and has get/set accessors.
 *
 * @api
 */
var BaseLayer =
/*@__PURE__*/
function (BaseObject) {
  function BaseLayer(options) {
    BaseObject.call(this);
    /**
     * @type {Object<string, *>}
     */

    var properties = (0, _obj.assign)({}, options);
    properties[_Property.default.OPACITY] = options.opacity !== undefined ? options.opacity : 1;
    properties[_Property.default.VISIBLE] = options.visible !== undefined ? options.visible : true;
    properties[_Property.default.Z_INDEX] = options.zIndex;
    properties[_Property.default.MAX_RESOLUTION] = options.maxResolution !== undefined ? options.maxResolution : Infinity;
    properties[_Property.default.MIN_RESOLUTION] = options.minResolution !== undefined ? options.minResolution : 0;
    this.setProperties(properties);
    /**
     * @type {import("./Layer.js").State}
     * @private
     */

    this.state_ = null;
    /**
     * The layer type.
     * @type {import("../LayerType.js").default}
     * @protected;
     */

    this.type;
  }

  if (BaseObject) BaseLayer.__proto__ = BaseObject;
  BaseLayer.prototype = Object.create(BaseObject && BaseObject.prototype);
  BaseLayer.prototype.constructor = BaseLayer;
  /**
   * Get the layer type (used when creating a layer renderer).
   * @return {import("../LayerType.js").default} The layer type.
   */

  BaseLayer.prototype.getType = function getType() {
    return this.type;
  };
  /**
   * @return {import("./Layer.js").State} Layer state.
   */


  BaseLayer.prototype.getLayerState = function getLayerState() {
    /** @type {import("./Layer.js").State} */
    var state = this.state_ ||
    /** @type {?} */
    {
      layer: this,
      managed: true
    };
    state.opacity = (0, _math.clamp)(this.getOpacity(), 0, 1);
    state.sourceState = this.getSourceState();
    state.visible = this.getVisible();
    state.extent = this.getExtent();
    state.zIndex = this.getZIndex() || 0;
    state.maxResolution = this.getMaxResolution();
    state.minResolution = Math.max(this.getMinResolution(), 0);
    this.state_ = state;
    return state;
  };
  /**
   * @abstract
   * @param {Array<import("./Layer.js").default>=} opt_array Array of layers (to be
   *     modified in place).
   * @return {Array<import("./Layer.js").default>} Array of layers.
   */


  BaseLayer.prototype.getLayersArray = function getLayersArray(opt_array) {
    return (0, _util.abstract)();
  };
  /**
   * @abstract
   * @param {Array<import("./Layer.js").State>=} opt_states Optional list of layer
   *     states (to be modified in place).
   * @return {Array<import("./Layer.js").State>} List of layer states.
   */


  BaseLayer.prototype.getLayerStatesArray = function getLayerStatesArray(opt_states) {
    return (0, _util.abstract)();
  };
  /**
   * Return the {@link module:ol/extent~Extent extent} of the layer or `undefined` if it
   * will be visible regardless of extent.
   * @return {import("../extent.js").Extent|undefined} The layer extent.
   * @observable
   * @api
   */


  BaseLayer.prototype.getExtent = function getExtent() {
    return (
      /** @type {import("../extent.js").Extent|undefined} */
      this.get(_Property.default.EXTENT)
    );
  };
  /**
   * Return the maximum resolution of the layer.
   * @return {number} The maximum resolution of the layer.
   * @observable
   * @api
   */


  BaseLayer.prototype.getMaxResolution = function getMaxResolution() {
    return (
      /** @type {number} */
      this.get(_Property.default.MAX_RESOLUTION)
    );
  };
  /**
   * Return the minimum resolution of the layer.
   * @return {number} The minimum resolution of the layer.
   * @observable
   * @api
   */


  BaseLayer.prototype.getMinResolution = function getMinResolution() {
    return (
      /** @type {number} */
      this.get(_Property.default.MIN_RESOLUTION)
    );
  };
  /**
   * Return the opacity of the layer (between 0 and 1).
   * @return {number} The opacity of the layer.
   * @observable
   * @api
   */


  BaseLayer.prototype.getOpacity = function getOpacity() {
    return (
      /** @type {number} */
      this.get(_Property.default.OPACITY)
    );
  };
  /**
   * @abstract
   * @return {import("../source/State.js").default} Source state.
   */


  BaseLayer.prototype.getSourceState = function getSourceState() {
    return (0, _util.abstract)();
  };
  /**
   * Return the visibility of the layer (`true` or `false`).
   * @return {boolean} The visibility of the layer.
   * @observable
   * @api
   */


  BaseLayer.prototype.getVisible = function getVisible() {
    return (
      /** @type {boolean} */
      this.get(_Property.default.VISIBLE)
    );
  };
  /**
   * Return the Z-index of the layer, which is used to order layers before
   * rendering. The default Z-index is 0.
   * @return {number} The Z-index of the layer.
   * @observable
   * @api
   */


  BaseLayer.prototype.getZIndex = function getZIndex() {
    return (
      /** @type {number} */
      this.get(_Property.default.Z_INDEX)
    );
  };
  /**
   * Set the extent at which the layer is visible.  If `undefined`, the layer
   * will be visible at all extents.
   * @param {import("../extent.js").Extent|undefined} extent The extent of the layer.
   * @observable
   * @api
   */


  BaseLayer.prototype.setExtent = function setExtent(extent) {
    this.set(_Property.default.EXTENT, extent);
  };
  /**
   * Set the maximum resolution at which the layer is visible.
   * @param {number} maxResolution The maximum resolution of the layer.
   * @observable
   * @api
   */


  BaseLayer.prototype.setMaxResolution = function setMaxResolution(maxResolution) {
    this.set(_Property.default.MAX_RESOLUTION, maxResolution);
  };
  /**
   * Set the minimum resolution at which the layer is visible.
   * @param {number} minResolution The minimum resolution of the layer.
   * @observable
   * @api
   */


  BaseLayer.prototype.setMinResolution = function setMinResolution(minResolution) {
    this.set(_Property.default.MIN_RESOLUTION, minResolution);
  };
  /**
   * Set the opacity of the layer, allowed values range from 0 to 1.
   * @param {number} opacity The opacity of the layer.
   * @observable
   * @api
   */


  BaseLayer.prototype.setOpacity = function setOpacity(opacity) {
    this.set(_Property.default.OPACITY, opacity);
  };
  /**
   * Set the visibility of the layer (`true` or `false`).
   * @param {boolean} visible The visibility of the layer.
   * @observable
   * @api
   */


  BaseLayer.prototype.setVisible = function setVisible(visible) {
    this.set(_Property.default.VISIBLE, visible);
  };
  /**
   * Set Z-index of the layer, which is used to order layers before rendering.
   * The default Z-index is 0.
   * @param {number} zindex The z-index of the layer.
   * @observable
   * @api
   */


  BaseLayer.prototype.setZIndex = function setZIndex(zindex) {
    this.set(_Property.default.Z_INDEX, zindex);
  };

  return BaseLayer;
}(_Object.default);

var _default = BaseLayer;
exports.default = _default;
},{"../util.js":"node_modules/ol/util.js","../Object.js":"node_modules/ol/Object.js","./Property.js":"node_modules/ol/layer/Property.js","../math.js":"node_modules/ol/math.js","../obj.js":"node_modules/ol/obj.js"}],"node_modules/ol/render/EventType.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/render/EventType
 */

/**
 * @enum {string}
 */
var _default = {
  /**
   * @event module:ol/render/Event~RenderEvent#postcompose
   * @api
   */
  POSTCOMPOSE: 'postcompose',

  /**
   * @event module:ol/render/Event~RenderEvent#precompose
   * @api
   */
  PRECOMPOSE: 'precompose',

  /**
   * @event module:ol/render/Event~RenderEvent#render
   * @api
   */
  RENDER: 'render',

  /**
   * Triggered when rendering is complete, i.e. all sources and tiles have
   * finished loading for the current viewport, and all tiles are faded in.
   * @event module:ol/render/Event~RenderEvent#rendercomplete
   * @api
   */
  RENDERCOMPLETE: 'rendercomplete'
};
exports.default = _default;
},{}],"node_modules/ol/source/State.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/source/State
 */

/**
 * @enum {string}
 * State of the source, one of 'undefined', 'loading', 'ready' or 'error'.
 */
var _default = {
  UNDEFINED: 'undefined',
  LOADING: 'loading',
  READY: 'ready',
  ERROR: 'error'
};
exports.default = _default;
},{}],"node_modules/ol/layer/Layer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visibleAtResolution = visibleAtResolution;
exports.default = void 0;

var _events = require("../events.js");

var _EventType = _interopRequireDefault(require("../events/EventType.js"));

var _util = require("../util.js");

var _Object = require("../Object.js");

var _Base = _interopRequireDefault(require("./Base.js"));

var _Property = _interopRequireDefault(require("./Property.js"));

var _obj = require("../obj.js");

var _EventType2 = _interopRequireDefault(require("../render/EventType.js"));

var _State = _interopRequireDefault(require("../source/State.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/layer/Layer
 */

/**
 * @typedef {Object} Options
 * @property {number} [opacity=1] Opacity (0, 1).
 * @property {boolean} [visible=true] Visibility.
 * @property {import("../extent.js").Extent} [extent] The bounding extent for layer rendering.  The layer will not be
 * rendered outside of this extent.
 * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
 * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
 * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
 * method was used.
 * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
 * visible.
 * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
 * be visible.
 * @property {import("../source/Source.js").default} [source] Source for this layer.  If not provided to the constructor,
 * the source can be set by calling {@link module:ol/layer/Layer#setSource layer.setSource(source)} after
 * construction.
 * @property {import("../PluggableMap.js").default} [map] Map.
 */

/**
 * @typedef {Object} State
 * @property {import("./Base.js").default} layer
 * @property {number} opacity
 * @property {SourceState} sourceState
 * @property {boolean} visible
 * @property {boolean} managed
 * @property {import("../extent.js").Extent} [extent]
 * @property {number} zIndex
 * @property {number} maxResolution
 * @property {number} minResolution
 */

/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * A visual representation of raster or vector map data.
 * Layers group together those properties that pertain to how the data is to be
 * displayed, irrespective of the source of that data.
 *
 * Layers are usually added to a map with {@link module:ol/Map#addLayer}. Components
 * like {@link module:ol/interaction/Select~Select} use unmanaged layers
 * internally. These unmanaged layers are associated with the map using
 * {@link module:ol/layer/Layer~Layer#setMap} instead.
 *
 * A generic `change` event is fired when the state of the source changes.
 *
 * @fires import("../render/Event.js").RenderEvent
 */
var Layer =
/*@__PURE__*/
function (BaseLayer) {
  function Layer(options) {
    var baseOptions = (0, _obj.assign)({}, options);
    delete baseOptions.source;
    BaseLayer.call(this, baseOptions);
    /**
     * @private
     * @type {?import("../events.js").EventsKey}
     */

    this.mapPrecomposeKey_ = null;
    /**
     * @private
     * @type {?import("../events.js").EventsKey}
     */

    this.mapRenderKey_ = null;
    /**
     * @private
     * @type {?import("../events.js").EventsKey}
     */

    this.sourceChangeKey_ = null;

    if (options.map) {
      this.setMap(options.map);
    }

    (0, _events.listen)(this, (0, _Object.getChangeEventType)(_Property.default.SOURCE), this.handleSourcePropertyChange_, this);
    var source = options.source ? options.source : null;
    this.setSource(source);
  }

  if (BaseLayer) Layer.__proto__ = BaseLayer;
  Layer.prototype = Object.create(BaseLayer && BaseLayer.prototype);
  Layer.prototype.constructor = Layer;
  /**
   * @inheritDoc
   */

  Layer.prototype.getLayersArray = function getLayersArray(opt_array) {
    var array = opt_array ? opt_array : [];
    array.push(this);
    return array;
  };
  /**
   * @inheritDoc
   */


  Layer.prototype.getLayerStatesArray = function getLayerStatesArray(opt_states) {
    var states = opt_states ? opt_states : [];
    states.push(this.getLayerState());
    return states;
  };
  /**
   * Get the layer source.
   * @return {import("../source/Source.js").default} The layer source (or `null` if not yet set).
   * @observable
   * @api
   */


  Layer.prototype.getSource = function getSource() {
    var source = this.get(_Property.default.SOURCE);
    return (
      /** @type {import("../source/Source.js").default} */
      source || null
    );
  };
  /**
    * @inheritDoc
    */


  Layer.prototype.getSourceState = function getSourceState() {
    var source = this.getSource();
    return !source ? _State.default.UNDEFINED : source.getState();
  };
  /**
   * @private
   */


  Layer.prototype.handleSourceChange_ = function handleSourceChange_() {
    this.changed();
  };
  /**
   * @private
   */


  Layer.prototype.handleSourcePropertyChange_ = function handleSourcePropertyChange_() {
    if (this.sourceChangeKey_) {
      (0, _events.unlistenByKey)(this.sourceChangeKey_);
      this.sourceChangeKey_ = null;
    }

    var source = this.getSource();

    if (source) {
      this.sourceChangeKey_ = (0, _events.listen)(source, _EventType.default.CHANGE, this.handleSourceChange_, this);
    }

    this.changed();
  };
  /**
   * Sets the layer to be rendered on top of other layers on a map. The map will
   * not manage this layer in its layers collection, and the callback in
   * {@link module:ol/Map#forEachLayerAtPixel} will receive `null` as layer. This
   * is useful for temporary layers. To remove an unmanaged layer from the map,
   * use `#setMap(null)`.
   *
   * To add the layer to a map and have it managed by the map, use
   * {@link module:ol/Map#addLayer} instead.
   * @param {import("../PluggableMap.js").default} map Map.
   * @api
   */


  Layer.prototype.setMap = function setMap(map) {
    if (this.mapPrecomposeKey_) {
      (0, _events.unlistenByKey)(this.mapPrecomposeKey_);
      this.mapPrecomposeKey_ = null;
    }

    if (!map) {
      this.changed();
    }

    if (this.mapRenderKey_) {
      (0, _events.unlistenByKey)(this.mapRenderKey_);
      this.mapRenderKey_ = null;
    }

    if (map) {
      this.mapPrecomposeKey_ = (0, _events.listen)(map, _EventType2.default.PRECOMPOSE, function (evt) {
        var renderEvent =
        /** @type {import("../render/Event.js").default} */
        evt;
        var layerState = this.getLayerState();
        layerState.managed = false;

        if (this.getZIndex() === undefined) {
          layerState.zIndex = Infinity;
        }

        renderEvent.frameState.layerStatesArray.push(layerState);
        renderEvent.frameState.layerStates[(0, _util.getUid)(this)] = layerState;
      }, this);
      this.mapRenderKey_ = (0, _events.listen)(this, _EventType.default.CHANGE, map.render, map);
      this.changed();
    }
  };
  /**
   * Set the layer source.
   * @param {import("../source/Source.js").default} source The layer source.
   * @observable
   * @api
   */


  Layer.prototype.setSource = function setSource(source) {
    this.set(_Property.default.SOURCE, source);
  };

  return Layer;
}(_Base.default);
/**
 * Return `true` if the layer is visible, and if the passed resolution is
 * between the layer's minResolution and maxResolution. The comparison is
 * inclusive for `minResolution` and exclusive for `maxResolution`.
 * @param {State} layerState Layer state.
 * @param {number} resolution Resolution.
 * @return {boolean} The layer is visible at the given resolution.
 */


function visibleAtResolution(layerState, resolution) {
  return layerState.visible && resolution >= layerState.minResolution && resolution < layerState.maxResolution;
}

var _default = Layer;
exports.default = _default;
},{"../events.js":"node_modules/ol/events.js","../events/EventType.js":"node_modules/ol/events/EventType.js","../util.js":"node_modules/ol/util.js","../Object.js":"node_modules/ol/Object.js","./Base.js":"node_modules/ol/layer/Base.js","./Property.js":"node_modules/ol/layer/Property.js","../obj.js":"node_modules/ol/obj.js","../render/EventType.js":"node_modules/ol/render/EventType.js","../source/State.js":"node_modules/ol/source/State.js"}],"node_modules/ol/layer/VectorRenderType.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/layer/VectorRenderType
 */

/**
 * @enum {string}
 * Render mode for vector layers:
 *  * `'image'`: Vector layers are rendered as images. Great performance, but
 *    point symbols and texts are always rotated with the view and pixels are
 *    scaled during zoom animations.
 *  * `'vector'`: Vector layers are rendered as vectors. Most accurate rendering
 *    even during animations, but slower performance.
 * @api
 */
var _default = {
  IMAGE: 'image',
  VECTOR: 'vector'
};
exports.default = _default;
},{}],"node_modules/ol/geom/GeometryType.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/geom/GeometryType
 */

/**
 * The geometry type. One of `'Point'`, `'LineString'`, `'LinearRing'`,
 * `'Polygon'`, `'MultiPoint'`, `'MultiLineString'`, `'MultiPolygon'`,
 * `'GeometryCollection'`, `'Circle'`.
 * @enum {string}
 */
var _default = {
  POINT: 'Point',
  LINE_STRING: 'LineString',
  LINEAR_RING: 'LinearRing',
  POLYGON: 'Polygon',
  MULTI_POINT: 'MultiPoint',
  MULTI_LINE_STRING: 'MultiLineString',
  MULTI_POLYGON: 'MultiPolygon',
  GEOMETRY_COLLECTION: 'GeometryCollection',
  CIRCLE: 'Circle'
};
exports.default = _default;
},{}],"node_modules/ol/color.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asString = asString;
exports.asArray = asArray;
exports.normalize = normalize;
exports.toString = toString;
exports.fromString = void 0;

var _asserts = require("./asserts.js");

var _math = require("./math.js");

/**
 * @module ol/color
 */

/**
 * A color represented as a short array [red, green, blue, alpha].
 * red, green, and blue should be integers in the range 0..255 inclusive.
 * alpha should be a float in the range 0..1 inclusive. If no alpha value is
 * given then `1` will be used.
 * @typedef {Array<number>} Color
 * @api
 */

/**
 * This RegExp matches # followed by 3, 4, 6, or 8 hex digits.
 * @const
 * @type {RegExp}
 * @private
 */
var HEX_COLOR_RE_ = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i;
/**
 * Regular expression for matching potential named color style strings.
 * @const
 * @type {RegExp}
 * @private
 */

var NAMED_COLOR_RE_ = /^([a-z]*)$/i;
/**
 * Return the color as an rgba string.
 * @param {Color|string} color Color.
 * @return {string} Rgba string.
 * @api
 */

function asString(color) {
  if (typeof color === 'string') {
    return color;
  } else {
    return toString(color);
  }
}
/**
 * Return named color as an rgba string.
 * @param {string} color Named color.
 * @return {string} Rgb string.
 */


function fromNamed(color) {
  var el = document.createElement('div');
  el.style.color = color;

  if (el.style.color !== '') {
    document.body.appendChild(el);
    var rgb = getComputedStyle(el).color;
    document.body.removeChild(el);
    return rgb;
  } else {
    return '';
  }
}
/**
 * @param {string} s String.
 * @return {Color} Color.
 */


var fromString = function () {
  // We maintain a small cache of parsed strings.  To provide cheap LRU-like
  // semantics, whenever the cache grows too large we simply delete an
  // arbitrary 25% of the entries.

  /**
   * @const
   * @type {number}
   */
  var MAX_CACHE_SIZE = 1024;
  /**
   * @type {Object<string, Color>}
   */

  var cache = {};
  /**
   * @type {number}
   */

  var cacheSize = 0;
  return (
    /**
     * @param {string} s String.
     * @return {Color} Color.
     */
    function (s) {
      var color;

      if (cache.hasOwnProperty(s)) {
        color = cache[s];
      } else {
        if (cacheSize >= MAX_CACHE_SIZE) {
          var i = 0;

          for (var key in cache) {
            if ((i++ & 3) === 0) {
              delete cache[key];
              --cacheSize;
            }
          }
        }

        color = fromStringInternal_(s);
        cache[s] = color;
        ++cacheSize;
      }

      return color;
    }
  );
}();
/**
 * Return the color as an array. This function maintains a cache of calculated
 * arrays which means the result should not be modified.
 * @param {Color|string} color Color.
 * @return {Color} Color.
 * @api
 */


exports.fromString = fromString;

function asArray(color) {
  if (Array.isArray(color)) {
    return color;
  } else {
    return fromString(color);
  }
}
/**
 * @param {string} s String.
 * @private
 * @return {Color} Color.
 */


function fromStringInternal_(s) {
  var r, g, b, a, color;

  if (NAMED_COLOR_RE_.exec(s)) {
    s = fromNamed(s);
  }

  if (HEX_COLOR_RE_.exec(s)) {
    // hex
    var n = s.length - 1; // number of hex digits

    var d; // number of digits per channel

    if (n <= 4) {
      d = 1;
    } else {
      d = 2;
    }

    var hasAlpha = n === 4 || n === 8;
    r = parseInt(s.substr(1 + 0 * d, d), 16);
    g = parseInt(s.substr(1 + 1 * d, d), 16);
    b = parseInt(s.substr(1 + 2 * d, d), 16);

    if (hasAlpha) {
      a = parseInt(s.substr(1 + 3 * d, d), 16);
    } else {
      a = 255;
    }

    if (d == 1) {
      r = (r << 4) + r;
      g = (g << 4) + g;
      b = (b << 4) + b;

      if (hasAlpha) {
        a = (a << 4) + a;
      }
    }

    color = [r, g, b, a / 255];
  } else if (s.indexOf('rgba(') == 0) {
    // rgba()
    color = s.slice(5, -1).split(',').map(Number);
    normalize(color);
  } else if (s.indexOf('rgb(') == 0) {
    // rgb()
    color = s.slice(4, -1).split(',').map(Number);
    color.push(1);
    normalize(color);
  } else {
    (0, _asserts.assert)(false, 14); // Invalid color
  }

  return color;
}
/**
 * TODO this function is only used in the test, we probably shouldn't export it
 * @param {Color} color Color.
 * @return {Color} Clamped color.
 */


function normalize(color) {
  color[0] = (0, _math.clamp)(color[0] + 0.5 | 0, 0, 255);
  color[1] = (0, _math.clamp)(color[1] + 0.5 | 0, 0, 255);
  color[2] = (0, _math.clamp)(color[2] + 0.5 | 0, 0, 255);
  color[3] = (0, _math.clamp)(color[3], 0, 1);
  return color;
}
/**
 * @param {Color} color Color.
 * @return {string} String.
 */


function toString(color) {
  var r = color[0];

  if (r != (r | 0)) {
    r = r + 0.5 | 0;
  }

  var g = color[1];

  if (g != (g | 0)) {
    g = g + 0.5 | 0;
  }

  var b = color[2];

  if (b != (b | 0)) {
    b = b + 0.5 | 0;
  }

  var a = color[3] === undefined ? 1 : color[3];
  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}
},{"./asserts.js":"node_modules/ol/asserts.js","./math.js":"node_modules/ol/math.js"}],"node_modules/ol/colorlike.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asColorLike = asColorLike;

var _color = require("./color.js");

/**
 * @module ol/colorlike
 */

/**
 * A type accepted by CanvasRenderingContext2D.fillStyle
 * or CanvasRenderingContext2D.strokeStyle.
 * Represents a color, pattern, or gradient. The origin for patterns and
 * gradients as fill style is an increment of 512 css pixels from map coordinate
 * `[0, 0]`. For seamless repeat patterns, width and height of the pattern image
 * must be a factor of two (2, 4, 8, ..., 512).
 *
 * @typedef {string|CanvasPattern|CanvasGradient} ColorLike
 * @api
 */

/**
 * @param {import("./color.js").Color|ColorLike} color Color.
 * @return {ColorLike} The color as an {@link ol/colorlike~ColorLike}.
 * @api
 */
function asColorLike(color) {
  if (Array.isArray(color)) {
    return (0, _color.toString)(color);
  } else {
    return color;
  }
}
},{"./color.js":"node_modules/ol/color.js"}],"node_modules/ol/webgl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContext = getContext;
exports.EXTENSIONS = exports.MAX_TEXTURE_SIZE = exports.HAS = exports.DEBUG = exports.FRAMEBUFFER = exports.COMPILE_STATUS = exports.CLAMP_TO_EDGE = exports.TEXTURE0 = exports.TEXTURE_2D = exports.TEXTURE_WRAP_T = exports.TEXTURE_WRAP_S = exports.TEXTURE_MIN_FILTER = exports.TEXTURE_MAG_FILTER = exports.LINEAR = exports.LINK_STATUS = exports.VERTEX_SHADER = exports.FRAGMENT_SHADER = exports.RGBA = exports.FLOAT = exports.UNSIGNED_INT = exports.UNSIGNED_SHORT = exports.UNSIGNED_BYTE = exports.SCISSOR_TEST = exports.DEPTH_TEST = exports.STENCIL_TEST = exports.BLEND = exports.CULL_FACE = exports.DYNAMIC_DRAW = exports.STATIC_DRAW = exports.STREAM_DRAW = exports.ELEMENT_ARRAY_BUFFER = exports.ARRAY_BUFFER = exports.ONE_MINUS_SRC_ALPHA = exports.TRIANGLE_STRIP = exports.TRIANGLES = exports.COLOR_BUFFER_BIT = exports.COLOR_ATTACHMENT0 = exports.SRC_ALPHA = exports.ONE = void 0;

/**
 * @module ol/webgl
 */

/**
 * Constants taken from goog.webgl
 */

/**
 * @const
 * @type {number}
 */
var ONE = 1;
/**
 * @const
 * @type {number}
 */

exports.ONE = ONE;
var SRC_ALPHA = 0x0302;
/**
 * @const
 * @type {number}
 */

exports.SRC_ALPHA = SRC_ALPHA;
var COLOR_ATTACHMENT0 = 0x8CE0;
/**
 * @const
 * @type {number}
 */

exports.COLOR_ATTACHMENT0 = COLOR_ATTACHMENT0;
var COLOR_BUFFER_BIT = 0x00004000;
/**
 * @const
 * @type {number}
 */

exports.COLOR_BUFFER_BIT = COLOR_BUFFER_BIT;
var TRIANGLES = 0x0004;
/**
 * @const
 * @type {number}
 */

exports.TRIANGLES = TRIANGLES;
var TRIANGLE_STRIP = 0x0005;
/**
 * @const
 * @type {number}
 */

exports.TRIANGLE_STRIP = TRIANGLE_STRIP;
var ONE_MINUS_SRC_ALPHA = 0x0303;
/**
 * @const
 * @type {number}
 */

exports.ONE_MINUS_SRC_ALPHA = ONE_MINUS_SRC_ALPHA;
var ARRAY_BUFFER = 0x8892;
/**
 * @const
 * @type {number}
 */

exports.ARRAY_BUFFER = ARRAY_BUFFER;
var ELEMENT_ARRAY_BUFFER = 0x8893;
/**
 * @const
 * @type {number}
 */

exports.ELEMENT_ARRAY_BUFFER = ELEMENT_ARRAY_BUFFER;
var STREAM_DRAW = 0x88E0;
/**
 * @const
 * @type {number}
 */

exports.STREAM_DRAW = STREAM_DRAW;
var STATIC_DRAW = 0x88E4;
/**
 * @const
 * @type {number}
 */

exports.STATIC_DRAW = STATIC_DRAW;
var DYNAMIC_DRAW = 0x88E8;
/**
 * @const
 * @type {number}
 */

exports.DYNAMIC_DRAW = DYNAMIC_DRAW;
var CULL_FACE = 0x0B44;
/**
 * @const
 * @type {number}
 */

exports.CULL_FACE = CULL_FACE;
var BLEND = 0x0BE2;
/**
 * @const
 * @type {number}
 */

exports.BLEND = BLEND;
var STENCIL_TEST = 0x0B90;
/**
 * @const
 * @type {number}
 */

exports.STENCIL_TEST = STENCIL_TEST;
var DEPTH_TEST = 0x0B71;
/**
 * @const
 * @type {number}
 */

exports.DEPTH_TEST = DEPTH_TEST;
var SCISSOR_TEST = 0x0C11;
/**
 * @const
 * @type {number}
 */

exports.SCISSOR_TEST = SCISSOR_TEST;
var UNSIGNED_BYTE = 0x1401;
/**
 * @const
 * @type {number}
 */

exports.UNSIGNED_BYTE = UNSIGNED_BYTE;
var UNSIGNED_SHORT = 0x1403;
/**
 * @const
 * @type {number}
 */

exports.UNSIGNED_SHORT = UNSIGNED_SHORT;
var UNSIGNED_INT = 0x1405;
/**
 * @const
 * @type {number}
 */

exports.UNSIGNED_INT = UNSIGNED_INT;
var FLOAT = 0x1406;
/**
 * @const
 * @type {number}
 */

exports.FLOAT = FLOAT;
var RGBA = 0x1908;
/**
 * @const
 * @type {number}
 */

exports.RGBA = RGBA;
var FRAGMENT_SHADER = 0x8B30;
/**
 * @const
 * @type {number}
 */

exports.FRAGMENT_SHADER = FRAGMENT_SHADER;
var VERTEX_SHADER = 0x8B31;
/**
 * @const
 * @type {number}
 */

exports.VERTEX_SHADER = VERTEX_SHADER;
var LINK_STATUS = 0x8B82;
/**
 * @const
 * @type {number}
 */

exports.LINK_STATUS = LINK_STATUS;
var LINEAR = 0x2601;
/**
 * @const
 * @type {number}
 */

exports.LINEAR = LINEAR;
var TEXTURE_MAG_FILTER = 0x2800;
/**
 * @const
 * @type {number}
 */

exports.TEXTURE_MAG_FILTER = TEXTURE_MAG_FILTER;
var TEXTURE_MIN_FILTER = 0x2801;
/**
 * @const
 * @type {number}
 */

exports.TEXTURE_MIN_FILTER = TEXTURE_MIN_FILTER;
var TEXTURE_WRAP_S = 0x2802;
/**
 * @const
 * @type {number}
 */

exports.TEXTURE_WRAP_S = TEXTURE_WRAP_S;
var TEXTURE_WRAP_T = 0x2803;
/**
 * @const
 * @type {number}
 */

exports.TEXTURE_WRAP_T = TEXTURE_WRAP_T;
var TEXTURE_2D = 0x0DE1;
/**
 * @const
 * @type {number}
 */

exports.TEXTURE_2D = TEXTURE_2D;
var TEXTURE0 = 0x84C0;
/**
 * @const
 * @type {number}
 */

exports.TEXTURE0 = TEXTURE0;
var CLAMP_TO_EDGE = 0x812F;
/**
 * @const
 * @type {number}
 */

exports.CLAMP_TO_EDGE = CLAMP_TO_EDGE;
var COMPILE_STATUS = 0x8B81;
/**
 * @const
 * @type {number}
 */

exports.COMPILE_STATUS = COMPILE_STATUS;
var FRAMEBUFFER = 0x8D40;
/** end of goog.webgl constants
 */

/**
 * @const
 * @type {Array<string>}
 */

exports.FRAMEBUFFER = FRAMEBUFFER;
var CONTEXT_IDS = ['experimental-webgl', 'webgl', 'webkit-3d', 'moz-webgl'];
/**
 * @param {HTMLCanvasElement} canvas Canvas.
 * @param {Object=} opt_attributes Attributes.
 * @return {WebGLRenderingContext} WebGL rendering context.
 */

function getContext(canvas, opt_attributes) {
  var ii = CONTEXT_IDS.length;

  for (var i = 0; i < ii; ++i) {
    try {
      var context = canvas.getContext(CONTEXT_IDS[i], opt_attributes);

      if (context) {
        return (
          /** @type {!WebGLRenderingContext} */
          context
        );
      }
    } catch (e) {// pass
    }
  }

  return null;
}
/**
 * Include debuggable shader sources.  Default is `true`. This should be set to
 * `false` for production builds.
 * @type {boolean}
 */


var DEBUG = true;
/**
 * The maximum supported WebGL texture size in pixels. If WebGL is not
 * supported, the value is set to `undefined`.
 * @type {number|undefined}
 */

exports.DEBUG = DEBUG;
var MAX_TEXTURE_SIZE; // value is set below

/**
 * List of supported WebGL extensions.
 * @type {Array<string>}
 */

exports.MAX_TEXTURE_SIZE = MAX_TEXTURE_SIZE;
var EXTENSIONS; // value is set below

/**
 * True if both OpenLayers and browser support WebGL.
 * @type {boolean}
 * @api
 */

exports.EXTENSIONS = EXTENSIONS;
var HAS = false; //TODO Remove side effects

exports.HAS = HAS;

if (typeof window !== 'undefined' && 'WebGLRenderingContext' in window) {
  try {
    var canvas =
    /** @type {HTMLCanvasElement} */
    document.createElement('canvas');
    var gl = getContext(canvas, {
      failIfMajorPerformanceCaveat: true
    });

    if (gl) {
      exports.HAS = HAS = true;
      exports.MAX_TEXTURE_SIZE = MAX_TEXTURE_SIZE =
      /** @type {number} */
      gl.getParameter(gl.MAX_TEXTURE_SIZE);
      exports.EXTENSIONS = EXTENSIONS = gl.getSupportedExtensions();
    }
  } catch (e) {// pass
  }
}
},{}],"node_modules/ol/has.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "WEBGL", {
  enumerable: true,
  get: function () {
    return _webgl.HAS;
  }
});
exports.MSPOINTER = exports.POINTER = exports.TOUCH = exports.GEOLOCATION = exports.CANVAS_LINE_DASH = exports.DEVICE_PIXEL_RATIO = exports.MAC = exports.WEBKIT = exports.SAFARI = exports.FIREFOX = void 0;

var _webgl = require("./webgl.js");

/**
 * @module ol/has
 */
var ua = typeof navigator !== 'undefined' ? navigator.userAgent.toLowerCase() : '';
/**
 * User agent string says we are dealing with Firefox as browser.
 * @type {boolean}
 */

var FIREFOX = ua.indexOf('firefox') !== -1;
/**
 * User agent string says we are dealing with Safari as browser.
 * @type {boolean}
 */

exports.FIREFOX = FIREFOX;
var SAFARI = ua.indexOf('safari') !== -1 && ua.indexOf('chrom') == -1;
/**
 * User agent string says we are dealing with a WebKit engine.
 * @type {boolean}
 */

exports.SAFARI = SAFARI;
var WEBKIT = ua.indexOf('webkit') !== -1 && ua.indexOf('edge') == -1;
/**
 * User agent string says we are dealing with a Mac as platform.
 * @type {boolean}
 */

exports.WEBKIT = WEBKIT;
var MAC = ua.indexOf('macintosh') !== -1;
/**
 * The ratio between physical pixels and device-independent pixels
 * (dips) on the device (`window.devicePixelRatio`).
 * @const
 * @type {number}
 * @api
 */

exports.MAC = MAC;
var DEVICE_PIXEL_RATIO = window.devicePixelRatio || 1;
/**
 * True if the browser's Canvas implementation implements {get,set}LineDash.
 * @type {boolean}
 */

exports.DEVICE_PIXEL_RATIO = DEVICE_PIXEL_RATIO;

var CANVAS_LINE_DASH = function () {
  var has = false;

  try {
    has = !!document.createElement('canvas').getContext('2d').setLineDash;
  } catch (e) {// pass
  }

  return has;
}();
/**
 * Is HTML5 geolocation supported in the current browser?
 * @const
 * @type {boolean}
 * @api
 */


exports.CANVAS_LINE_DASH = CANVAS_LINE_DASH;
var GEOLOCATION = 'geolocation' in navigator;
/**
 * True if browser supports touch events.
 * @const
 * @type {boolean}
 * @api
 */

exports.GEOLOCATION = GEOLOCATION;
var TOUCH = 'ontouchstart' in window;
/**
 * True if browser supports pointer events.
 * @const
 * @type {boolean}
 */

exports.TOUCH = TOUCH;
var POINTER = 'PointerEvent' in window;
/**
 * True if browser supports ms pointer events (IE 10).
 * @const
 * @type {boolean}
 */

exports.POINTER = POINTER;
var MSPOINTER = !!navigator.msPointerEnabled;
exports.MSPOINTER = MSPOINTER;
},{"./webgl.js":"node_modules/ol/webgl.js"}],"node_modules/ol/ImageState.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/ImageState
 */

/**
 * @enum {number}
 */
var _default = {
  IDLE: 0,
  LOADING: 1,
  LOADED: 2,
  ERROR: 3
};
exports.default = _default;
},{}],"node_modules/ol/structs/LRUCache.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _asserts = require("../asserts.js");

var _Target = _interopRequireDefault(require("../events/Target.js"));

var _EventType = _interopRequireDefault(require("../events/EventType.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/structs/LRUCache
 */

/**
 * @typedef {Object} Entry
 * @property {string} key_
 * @property {Object} newer
 * @property {Object} older
 * @property {*} value_
 */

/**
 * @classdesc
 * Implements a Least-Recently-Used cache where the keys do not conflict with
 * Object's properties (e.g. 'hasOwnProperty' is not allowed as a key). Expiring
 * items from the cache is the responsibility of the user.
 *
 * @fires import("../events/Event.js").Event
 * @template T
 */
var LRUCache =
/*@__PURE__*/
function (EventTarget) {
  function LRUCache(opt_highWaterMark) {
    EventTarget.call(this);
    /**
     * @type {number}
     */

    this.highWaterMark = opt_highWaterMark !== undefined ? opt_highWaterMark : 2048;
    /**
     * @private
     * @type {number}
     */

    this.count_ = 0;
    /**
     * @private
     * @type {!Object<string, Entry>}
     */

    this.entries_ = {};
    /**
     * @private
     * @type {?Entry}
     */

    this.oldest_ = null;
    /**
     * @private
     * @type {?Entry}
     */

    this.newest_ = null;
  }

  if (EventTarget) LRUCache.__proto__ = EventTarget;
  LRUCache.prototype = Object.create(EventTarget && EventTarget.prototype);
  LRUCache.prototype.constructor = LRUCache;
  /**
   * @return {boolean} Can expire cache.
   */

  LRUCache.prototype.canExpireCache = function canExpireCache() {
    return this.getCount() > this.highWaterMark;
  };
  /**
   * FIXME empty description for jsdoc
   */


  LRUCache.prototype.clear = function clear() {
    this.count_ = 0;
    this.entries_ = {};
    this.oldest_ = null;
    this.newest_ = null;
    this.dispatchEvent(_EventType.default.CLEAR);
  };
  /**
   * @param {string} key Key.
   * @return {boolean} Contains key.
   */


  LRUCache.prototype.containsKey = function containsKey(key) {
    return this.entries_.hasOwnProperty(key);
  };
  /**
   * @param {function(this: S, T, string, LRUCache): ?} f The function
   *     to call for every entry from the oldest to the newer. This function takes
   *     3 arguments (the entry value, the entry key and the LRUCache object).
   *     The return value is ignored.
   * @param {S=} opt_this The object to use as `this` in `f`.
   * @template S
   */


  LRUCache.prototype.forEach = function forEach(f, opt_this) {
    var entry = this.oldest_;

    while (entry) {
      f.call(opt_this, entry.value_, entry.key_, this);
      entry = entry.newer;
    }
  };
  /**
   * @param {string} key Key.
   * @return {T} Value.
   */


  LRUCache.prototype.get = function get(key) {
    var entry = this.entries_[key];
    (0, _asserts.assert)(entry !== undefined, 15); // Tried to get a value for a key that does not exist in the cache

    if (entry === this.newest_) {
      return entry.value_;
    } else if (entry === this.oldest_) {
      this.oldest_ =
      /** @type {Entry} */
      this.oldest_.newer;
      this.oldest_.older = null;
    } else {
      entry.newer.older = entry.older;
      entry.older.newer = entry.newer;
    }

    entry.newer = null;
    entry.older = this.newest_;
    this.newest_.newer = entry;
    this.newest_ = entry;
    return entry.value_;
  };
  /**
   * Remove an entry from the cache.
   * @param {string} key The entry key.
   * @return {T} The removed entry.
   */


  LRUCache.prototype.remove = function remove(key) {
    var entry = this.entries_[key];
    (0, _asserts.assert)(entry !== undefined, 15); // Tried to get a value for a key that does not exist in the cache

    if (entry === this.newest_) {
      this.newest_ =
      /** @type {Entry} */
      entry.older;

      if (this.newest_) {
        this.newest_.newer = null;
      }
    } else if (entry === this.oldest_) {
      this.oldest_ =
      /** @type {Entry} */
      entry.newer;

      if (this.oldest_) {
        this.oldest_.older = null;
      }
    } else {
      entry.newer.older = entry.older;
      entry.older.newer = entry.newer;
    }

    delete this.entries_[key];
    --this.count_;
    return entry.value_;
  };
  /**
   * @return {number} Count.
   */


  LRUCache.prototype.getCount = function getCount() {
    return this.count_;
  };
  /**
   * @return {Array<string>} Keys.
   */


  LRUCache.prototype.getKeys = function getKeys() {
    var keys = new Array(this.count_);
    var i = 0;
    var entry;

    for (entry = this.newest_; entry; entry = entry.older) {
      keys[i++] = entry.key_;
    }

    return keys;
  };
  /**
   * @return {Array<T>} Values.
   */


  LRUCache.prototype.getValues = function getValues() {
    var values = new Array(this.count_);
    var i = 0;
    var entry;

    for (entry = this.newest_; entry; entry = entry.older) {
      values[i++] = entry.value_;
    }

    return values;
  };
  /**
   * @return {T} Last value.
   */


  LRUCache.prototype.peekLast = function peekLast() {
    return this.oldest_.value_;
  };
  /**
   * @return {string} Last key.
   */


  LRUCache.prototype.peekLastKey = function peekLastKey() {
    return this.oldest_.key_;
  };
  /**
   * Get the key of the newest item in the cache.  Throws if the cache is empty.
   * @return {string} The newest key.
   */


  LRUCache.prototype.peekFirstKey = function peekFirstKey() {
    return this.newest_.key_;
  };
  /**
   * @return {T} value Value.
   */


  LRUCache.prototype.pop = function pop() {
    var entry = this.oldest_;
    delete this.entries_[entry.key_];

    if (entry.newer) {
      entry.newer.older = null;
    }

    this.oldest_ =
    /** @type {Entry} */
    entry.newer;

    if (!this.oldest_) {
      this.newest_ = null;
    }

    --this.count_;
    return entry.value_;
  };
  /**
   * @param {string} key Key.
   * @param {T} value Value.
   */


  LRUCache.prototype.replace = function replace(key, value) {
    this.get(key); // update `newest_`

    this.entries_[key].value_ = value;
  };
  /**
   * @param {string} key Key.
   * @param {T} value Value.
   */


  LRUCache.prototype.set = function set(key, value) {
    (0, _asserts.assert)(!(key in this.entries_), 16); // Tried to set a value for a key that is used already

    var entry =
    /** @type {Entry} */
    {
      key_: key,
      newer: null,
      older: this.newest_,
      value_: value
    };

    if (!this.newest_) {
      this.oldest_ = entry;
    } else {
      this.newest_.newer = entry;
    }

    this.newest_ = entry;
    this.entries_[key] = entry;
    ++this.count_;
  };
  /**
   * Set a maximum number of entries for the cache.
   * @param {number} size Cache size.
   * @api
   */


  LRUCache.prototype.setSize = function setSize(size) {
    this.highWaterMark = size;
  };
  /**
   * Prune the cache.
   */


  LRUCache.prototype.prune = function prune() {
    while (this.canExpireCache()) {
      this.pop();
    }
  };

  return LRUCache;
}(_Target.default);

var _default = LRUCache;
exports.default = _default;
},{"../asserts.js":"node_modules/ol/asserts.js","../events/Target.js":"node_modules/ol/events/Target.js","../events/EventType.js":"node_modules/ol/events/EventType.js"}],"node_modules/ol/transform.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.reset = reset;
exports.multiply = multiply;
exports.set = set;
exports.setFromArray = setFromArray;
exports.apply = apply;
exports.rotate = rotate;
exports.scale = scale;
exports.translate = translate;
exports.compose = compose;
exports.invert = invert;
exports.determinant = determinant;

var _asserts = require("./asserts.js");

/**
 * @module ol/transform
 */

/**
 * An array representing an affine 2d transformation for use with
 * {@link module:ol/transform} functions. The array has 6 elements.
 * @typedef {!Array<number>} Transform
 */

/**
 * Collection of affine 2d transformation functions. The functions work on an
 * array of 6 elements. The element order is compatible with the [SVGMatrix
 * interface](https://developer.mozilla.org/en-US/docs/Web/API/SVGMatrix) and is
 * a subset (elements a to f) of a 3×3 matrix:
 * ```
 * [ a c e ]
 * [ b d f ]
 * [ 0 0 1 ]
 * ```
 */

/**
 * @private
 * @type {Transform}
 */
var tmp_ = new Array(6);
/**
 * Create an identity transform.
 * @return {!Transform} Identity transform.
 */

function create() {
  return [1, 0, 0, 1, 0, 0];
}
/**
 * Resets the given transform to an identity transform.
 * @param {!Transform} transform Transform.
 * @return {!Transform} Transform.
 */


function reset(transform) {
  return set(transform, 1, 0, 0, 1, 0, 0);
}
/**
 * Multiply the underlying matrices of two transforms and return the result in
 * the first transform.
 * @param {!Transform} transform1 Transform parameters of matrix 1.
 * @param {!Transform} transform2 Transform parameters of matrix 2.
 * @return {!Transform} transform1 multiplied with transform2.
 */


function multiply(transform1, transform2) {
  var a1 = transform1[0];
  var b1 = transform1[1];
  var c1 = transform1[2];
  var d1 = transform1[3];
  var e1 = transform1[4];
  var f1 = transform1[5];
  var a2 = transform2[0];
  var b2 = transform2[1];
  var c2 = transform2[2];
  var d2 = transform2[3];
  var e2 = transform2[4];
  var f2 = transform2[5];
  transform1[0] = a1 * a2 + c1 * b2;
  transform1[1] = b1 * a2 + d1 * b2;
  transform1[2] = a1 * c2 + c1 * d2;
  transform1[3] = b1 * c2 + d1 * d2;
  transform1[4] = a1 * e2 + c1 * f2 + e1;
  transform1[5] = b1 * e2 + d1 * f2 + f1;
  return transform1;
}
/**
 * Set the transform components a-f on a given transform.
 * @param {!Transform} transform Transform.
 * @param {number} a The a component of the transform.
 * @param {number} b The b component of the transform.
 * @param {number} c The c component of the transform.
 * @param {number} d The d component of the transform.
 * @param {number} e The e component of the transform.
 * @param {number} f The f component of the transform.
 * @return {!Transform} Matrix with transform applied.
 */


function set(transform, a, b, c, d, e, f) {
  transform[0] = a;
  transform[1] = b;
  transform[2] = c;
  transform[3] = d;
  transform[4] = e;
  transform[5] = f;
  return transform;
}
/**
 * Set transform on one matrix from another matrix.
 * @param {!Transform} transform1 Matrix to set transform to.
 * @param {!Transform} transform2 Matrix to set transform from.
 * @return {!Transform} transform1 with transform from transform2 applied.
 */


function setFromArray(transform1, transform2) {
  transform1[0] = transform2[0];
  transform1[1] = transform2[1];
  transform1[2] = transform2[2];
  transform1[3] = transform2[3];
  transform1[4] = transform2[4];
  transform1[5] = transform2[5];
  return transform1;
}
/**
 * Transforms the given coordinate with the given transform returning the
 * resulting, transformed coordinate. The coordinate will be modified in-place.
 *
 * @param {Transform} transform The transformation.
 * @param {import("./coordinate.js").Coordinate|import("./pixel.js").Pixel} coordinate The coordinate to transform.
 * @return {import("./coordinate.js").Coordinate|import("./pixel.js").Pixel} return coordinate so that operations can be
 *     chained together.
 */


function apply(transform, coordinate) {
  var x = coordinate[0];
  var y = coordinate[1];
  coordinate[0] = transform[0] * x + transform[2] * y + transform[4];
  coordinate[1] = transform[1] * x + transform[3] * y + transform[5];
  return coordinate;
}
/**
 * Applies rotation to the given transform.
 * @param {!Transform} transform Transform.
 * @param {number} angle Angle in radians.
 * @return {!Transform} The rotated transform.
 */


function rotate(transform, angle) {
  var cos = Math.cos(angle);
  var sin = Math.sin(angle);
  return multiply(transform, set(tmp_, cos, sin, -sin, cos, 0, 0));
}
/**
 * Applies scale to a given transform.
 * @param {!Transform} transform Transform.
 * @param {number} x Scale factor x.
 * @param {number} y Scale factor y.
 * @return {!Transform} The scaled transform.
 */


function scale(transform, x, y) {
  return multiply(transform, set(tmp_, x, 0, 0, y, 0, 0));
}
/**
 * Applies translation to the given transform.
 * @param {!Transform} transform Transform.
 * @param {number} dx Translation x.
 * @param {number} dy Translation y.
 * @return {!Transform} The translated transform.
 */


function translate(transform, dx, dy) {
  return multiply(transform, set(tmp_, 1, 0, 0, 1, dx, dy));
}
/**
 * Creates a composite transform given an initial translation, scale, rotation, and
 * final translation (in that order only, not commutative).
 * @param {!Transform} transform The transform (will be modified in place).
 * @param {number} dx1 Initial translation x.
 * @param {number} dy1 Initial translation y.
 * @param {number} sx Scale factor x.
 * @param {number} sy Scale factor y.
 * @param {number} angle Rotation (in counter-clockwise radians).
 * @param {number} dx2 Final translation x.
 * @param {number} dy2 Final translation y.
 * @return {!Transform} The composite transform.
 */


function compose(transform, dx1, dy1, sx, sy, angle, dx2, dy2) {
  var sin = Math.sin(angle);
  var cos = Math.cos(angle);
  transform[0] = sx * cos;
  transform[1] = sy * sin;
  transform[2] = -sx * sin;
  transform[3] = sy * cos;
  transform[4] = dx2 * sx * cos - dy2 * sx * sin + dx1;
  transform[5] = dx2 * sy * sin + dy2 * sy * cos + dy1;
  return transform;
}
/**
 * Invert the given transform.
 * @param {!Transform} transform Transform.
 * @return {!Transform} Inverse of the transform.
 */


function invert(transform) {
  var det = determinant(transform);
  (0, _asserts.assert)(det !== 0, 32); // Transformation matrix cannot be inverted

  var a = transform[0];
  var b = transform[1];
  var c = transform[2];
  var d = transform[3];
  var e = transform[4];
  var f = transform[5];
  transform[0] = d / det;
  transform[1] = -b / det;
  transform[2] = -c / det;
  transform[3] = a / det;
  transform[4] = (c * f - d * e) / det;
  transform[5] = -(a * f - b * e) / det;
  return transform;
}
/**
 * Returns the determinant of the given matrix.
 * @param {!Transform} mat Matrix.
 * @return {number} Determinant.
 */


function determinant(mat) {
  return mat[0] * mat[3] - mat[1] * mat[2];
}
},{"./asserts.js":"node_modules/ol/asserts.js"}],"node_modules/ol/render/canvas.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.measureTextWidth = measureTextWidth;
exports.rotateAtOffset = rotateAtOffset;
exports.drawImage = drawImage;
exports.resetTransform = exports.measureTextHeight = exports.checkFont = exports.textHeights = exports.checkedFonts = exports.labelCache = exports.defaultLineWidth = exports.defaultPadding = exports.defaultTextBaseline = exports.defaultTextAlign = exports.defaultStrokeStyle = exports.defaultMiterLimit = exports.defaultLineJoin = exports.defaultLineDashOffset = exports.defaultLineDash = exports.defaultLineCap = exports.defaultFillStyle = exports.defaultFont = void 0;

var _css = require("../css.js");

var _dom = require("../dom.js");

var _obj = require("../obj.js");

var _LRUCache = _interopRequireDefault(require("../structs/LRUCache.js"));

var _transform = require("../transform.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/render/canvas
 */

/**
 * @typedef {Object} FillState
 * @property {import("../colorlike.js").ColorLike} fillStyle
 */

/**
 * @typedef {Object} FillStrokeState
 * @property {import("../colorlike.js").ColorLike} [currentFillStyle]
 * @property {import("../colorlike.js").ColorLike} [currentStrokeStyle]
 * @property {string} [currentLineCap]
 * @property {Array<number>} currentLineDash
 * @property {number} [currentLineDashOffset]
 * @property {string} [currentLineJoin]
 * @property {number} [currentLineWidth]
 * @property {number} [currentMiterLimit]
 * @property {number} [lastStroke]
 * @property {import("../colorlike.js").ColorLike} [fillStyle]
 * @property {import("../colorlike.js").ColorLike} [strokeStyle]
 * @property {string} [lineCap]
 * @property {Array<number>} lineDash
 * @property {number} [lineDashOffset]
 * @property {string} [lineJoin]
 * @property {number} [lineWidth]
 * @property {number} [miterLimit]
 */

/**
 * @typedef {Object} StrokeState
 * @property {string} lineCap
 * @property {Array<number>} lineDash
 * @property {number} lineDashOffset
 * @property {string} lineJoin
 * @property {number} lineWidth
 * @property {number} miterLimit
 * @property {import("../colorlike.js").ColorLike} strokeStyle
 */

/**
 * @typedef {Object} TextState
 * @property {string} font
 * @property {string} [textAlign]
 * @property {string} textBaseline
 * @property {string} [placement]
 * @property {number} [maxAngle]
 * @property {boolean} [overflow]
 * @property {import("../style/Fill.js").default} [backgroundFill]
 * @property {import("../style/Stroke.js").default} [backgroundStroke]
 * @property {number} [scale]
 * @property {Array<number>} [padding]
 */

/**
 * Container for decluttered replay instructions that need to be rendered or
 * omitted together, i.e. when styles render both an image and text, or for the
 * characters that form text along lines. The basic elements of this array are
 * `[minX, minY, maxX, maxY, count]`, where the first four entries are the
 * rendered extent of the group in pixel space. `count` is the number of styles
 * in the group, i.e. 2 when an image and a text are grouped, or 1 otherwise.
 * In addition to these four elements, declutter instruction arrays (i.e. the
 * arguments to {@link module:ol/render/canvas~drawImage} are appended to the array.
 * @typedef {Array<*>} DeclutterGroup
 */

/**
 * @const
 * @type {string}
 */
var defaultFont = '10px sans-serif';
/**
 * @const
 * @type {import("../color.js").Color}
 */

exports.defaultFont = defaultFont;
var defaultFillStyle = [0, 0, 0, 1];
/**
 * @const
 * @type {string}
 */

exports.defaultFillStyle = defaultFillStyle;
var defaultLineCap = 'round';
/**
 * @const
 * @type {Array<number>}
 */

exports.defaultLineCap = defaultLineCap;
var defaultLineDash = [];
/**
 * @const
 * @type {number}
 */

exports.defaultLineDash = defaultLineDash;
var defaultLineDashOffset = 0;
/**
 * @const
 * @type {string}
 */

exports.defaultLineDashOffset = defaultLineDashOffset;
var defaultLineJoin = 'round';
/**
 * @const
 * @type {number}
 */

exports.defaultLineJoin = defaultLineJoin;
var defaultMiterLimit = 10;
/**
 * @const
 * @type {import("../color.js").Color}
 */

exports.defaultMiterLimit = defaultMiterLimit;
var defaultStrokeStyle = [0, 0, 0, 1];
/**
 * @const
 * @type {string}
 */

exports.defaultStrokeStyle = defaultStrokeStyle;
var defaultTextAlign = 'center';
/**
 * @const
 * @type {string}
 */

exports.defaultTextAlign = defaultTextAlign;
var defaultTextBaseline = 'middle';
/**
 * @const
 * @type {Array<number>}
 */

exports.defaultTextBaseline = defaultTextBaseline;
var defaultPadding = [0, 0, 0, 0];
/**
 * @const
 * @type {number}
 */

exports.defaultPadding = defaultPadding;
var defaultLineWidth = 1;
/**
 * The label cache for text rendering. To change the default cache size of 2048
 * entries, use {@link module:ol/structs/LRUCache#setSize}.
 * @type {LRUCache<HTMLCanvasElement>}
 * @api
 */

exports.defaultLineWidth = defaultLineWidth;
var labelCache = new _LRUCache.default();
/**
 * @type {!Object<string, number>}
 */

exports.labelCache = labelCache;
var checkedFonts = {};
/**
 * @type {CanvasRenderingContext2D}
 */

exports.checkedFonts = checkedFonts;
var measureContext = null;
/**
 * @type {!Object<string, number>}
 */

var textHeights = {};
/**
 * Clears the label cache when a font becomes available.
 * @param {string} fontSpec CSS font spec.
 */

exports.textHeights = textHeights;

var checkFont = function () {
  var retries = 60;
  var checked = checkedFonts;
  var size = '32px ';
  var referenceFonts = ['monospace', 'serif'];
  var len = referenceFonts.length;
  var text = 'wmytzilWMYTZIL@#/&?$%10\uF013';
  var interval, referenceWidth;

  function isAvailable(font) {
    var context = getMeasureContext(); // Check weight ranges according to
    // https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Fallback_weights

    for (var weight = 100; weight <= 700; weight += 300) {
      var fontWeight = weight + ' ';
      var available = true;

      for (var i = 0; i < len; ++i) {
        var referenceFont = referenceFonts[i];
        context.font = fontWeight + size + referenceFont;
        referenceWidth = context.measureText(text).width;

        if (font != referenceFont) {
          context.font = fontWeight + size + font + ',' + referenceFont;
          var width = context.measureText(text).width; // If width and referenceWidth are the same, then the fallback was used
          // instead of the font we wanted, so the font is not available.

          available = available && width != referenceWidth;
        }
      }

      if (available) {
        // Consider font available when it is available in one weight range.
        //FIXME With this we miss rare corner cases, so we should consider
        //FIXME checking availability for each requested weight range.
        return true;
      }
    }

    return false;
  }

  function check() {
    var done = true;

    for (var font in checked) {
      if (checked[font] < retries) {
        if (isAvailable(font)) {
          checked[font] = retries;
          (0, _obj.clear)(textHeights); // Make sure that loaded fonts are picked up by Safari

          measureContext = null;
          labelCache.clear();
        } else {
          ++checked[font];
          done = false;
        }
      }
    }

    if (done) {
      clearInterval(interval);
      interval = undefined;
    }
  }

  return function (fontSpec) {
    var fontFamilies = (0, _css.getFontFamilies)(fontSpec);

    if (!fontFamilies) {
      return;
    }

    for (var i = 0, ii = fontFamilies.length; i < ii; ++i) {
      var fontFamily = fontFamilies[i];

      if (!(fontFamily in checked)) {
        checked[fontFamily] = retries;

        if (!isAvailable(fontFamily)) {
          checked[fontFamily] = 0;

          if (interval === undefined) {
            interval = setInterval(check, 32);
          }
        }
      }
    }
  };
}();
/**
 * @return {CanvasRenderingContext2D} Measure context.
 */


exports.checkFont = checkFont;

function getMeasureContext() {
  if (!measureContext) {
    measureContext = (0, _dom.createCanvasContext2D)(1, 1);
  }

  return measureContext;
}
/**
 * @param {string} font Font to use for measuring.
 * @return {import("../size.js").Size} Measurement.
 */


var measureTextHeight = function () {
  var span;
  var heights = textHeights;
  return function (font) {
    var height = heights[font];

    if (height == undefined) {
      if (!span) {
        span = document.createElement('span');
        span.textContent = 'M';
        span.style.margin = span.style.padding = '0 !important';
        span.style.position = 'absolute !important';
        span.style.left = '-99999px !important';
      }

      span.style.font = font;
      document.body.appendChild(span);
      height = heights[font] = span.offsetHeight;
      document.body.removeChild(span);
    }

    return height;
  };
}();
/**
 * @param {string} font Font.
 * @param {string} text Text.
 * @return {number} Width.
 */


exports.measureTextHeight = measureTextHeight;

function measureTextWidth(font, text) {
  var measureContext = getMeasureContext();

  if (font != measureContext.font) {
    measureContext.font = font;
  }

  return measureContext.measureText(text).width;
}
/**
 * @param {CanvasRenderingContext2D} context Context.
 * @param {number} rotation Rotation.
 * @param {number} offsetX X offset.
 * @param {number} offsetY Y offset.
 */


function rotateAtOffset(context, rotation, offsetX, offsetY) {
  if (rotation !== 0) {
    context.translate(offsetX, offsetY);
    context.rotate(rotation);
    context.translate(-offsetX, -offsetY);
  }
}

var resetTransform = (0, _transform.create)();
/**
 * @param {CanvasRenderingContext2D} context Context.
 * @param {import("../transform.js").Transform|null} transform Transform.
 * @param {number} opacity Opacity.
 * @param {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} image Image.
 * @param {number} originX Origin X.
 * @param {number} originY Origin Y.
 * @param {number} w Width.
 * @param {number} h Height.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {number} scale Scale.
 */

exports.resetTransform = resetTransform;

function drawImage(context, transform, opacity, image, originX, originY, w, h, x, y, scale) {
  var alpha;

  if (opacity != 1) {
    alpha = context.globalAlpha;
    context.globalAlpha = alpha * opacity;
  }

  if (transform) {
    context.setTransform.apply(context, transform);
  }

  context.drawImage(image, originX, originY, w, h, x, y, w * scale, h * scale);

  if (alpha) {
    context.globalAlpha = alpha;
  }

  if (transform) {
    context.setTransform.apply(context, resetTransform);
  }
}
},{"../css.js":"node_modules/ol/css.js","../dom.js":"node_modules/ol/dom.js","../obj.js":"node_modules/ol/obj.js","../structs/LRUCache.js":"node_modules/ol/structs/LRUCache.js","../transform.js":"node_modules/ol/transform.js"}],"node_modules/ol/style/Image.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("../util.js");

/**
 * @module ol/style/Image
 */

/**
 * @typedef {Object} Options
 * @property {number} opacity
 * @property {boolean} rotateWithView
 * @property {number} rotation
 * @property {number} scale
 */

/**
 * @classdesc
 * A base class used for creating subclasses and not instantiated in
 * apps. Base class for {@link module:ol/style/Icon~Icon}, {@link module:ol/style/Circle~CircleStyle} and
 * {@link module:ol/style/RegularShape~RegularShape}.
 * @abstract
 * @api
 */
var ImageStyle = function ImageStyle(options) {
  /**
   * @private
   * @type {number}
   */
  this.opacity_ = options.opacity;
  /**
   * @private
   * @type {boolean}
   */

  this.rotateWithView_ = options.rotateWithView;
  /**
   * @private
   * @type {number}
   */

  this.rotation_ = options.rotation;
  /**
   * @private
   * @type {number}
   */

  this.scale_ = options.scale;
};
/**
 * Clones the style.
 * @return {ImageStyle} The cloned style.
 * @api
 */


ImageStyle.prototype.clone = function clone() {
  return new ImageStyle({
    opacity: this.getOpacity(),
    scale: this.getScale(),
    rotation: this.getRotation(),
    rotateWithView: this.getRotateWithView()
  });
};
/**
 * Get the symbolizer opacity.
 * @return {number} Opacity.
 * @api
 */


ImageStyle.prototype.getOpacity = function getOpacity() {
  return this.opacity_;
};
/**
 * Determine whether the symbolizer rotates with the map.
 * @return {boolean} Rotate with map.
 * @api
 */


ImageStyle.prototype.getRotateWithView = function getRotateWithView() {
  return this.rotateWithView_;
};
/**
 * Get the symoblizer rotation.
 * @return {number} Rotation.
 * @api
 */


ImageStyle.prototype.getRotation = function getRotation() {
  return this.rotation_;
};
/**
 * Get the symbolizer scale.
 * @return {number} Scale.
 * @api
 */


ImageStyle.prototype.getScale = function getScale() {
  return this.scale_;
};
/**
 * This method is deprecated and always returns false.
 * @return {boolean} false.
 * @deprecated
 * @api
 */


ImageStyle.prototype.getSnapToPixel = function getSnapToPixel() {
  return false;
};
/**
 * Get the anchor point in pixels. The anchor determines the center point for the
 * symbolizer.
 * @abstract
 * @return {Array<number>} Anchor.
 */


ImageStyle.prototype.getAnchor = function getAnchor() {
  return (0, _util.abstract)();
};
/**
 * Get the image element for the symbolizer.
 * @abstract
 * @param {number} pixelRatio Pixel ratio.
 * @return {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} Image element.
 */


ImageStyle.prototype.getImage = function getImage(pixelRatio) {
  return (0, _util.abstract)();
};
/**
 * @abstract
 * @param {number} pixelRatio Pixel ratio.
 * @return {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} Image element.
 */


ImageStyle.prototype.getHitDetectionImage = function getHitDetectionImage(pixelRatio) {
  return (0, _util.abstract)();
};
/**
 * @abstract
 * @return {import("../ImageState.js").default} Image state.
 */


ImageStyle.prototype.getImageState = function getImageState() {
  return (0, _util.abstract)();
};
/**
 * @abstract
 * @return {import("../size.js").Size} Image size.
 */


ImageStyle.prototype.getImageSize = function getImageSize() {
  return (0, _util.abstract)();
};
/**
 * @abstract
 * @return {import("../size.js").Size} Size of the hit-detection image.
 */


ImageStyle.prototype.getHitDetectionImageSize = function getHitDetectionImageSize() {
  return (0, _util.abstract)();
};
/**
 * Get the origin of the symbolizer.
 * @abstract
 * @return {Array<number>} Origin.
 */


ImageStyle.prototype.getOrigin = function getOrigin() {
  return (0, _util.abstract)();
};
/**
 * Get the size of the symbolizer (in pixels).
 * @abstract
 * @return {import("../size.js").Size} Size.
 */


ImageStyle.prototype.getSize = function getSize() {
  return (0, _util.abstract)();
};
/**
 * Set the opacity.
 *
 * @param {number} opacity Opacity.
 * @api
 */


ImageStyle.prototype.setOpacity = function setOpacity(opacity) {
  this.opacity_ = opacity;
};
/**
 * Set whether to rotate the style with the view.
 *
 * @param {boolean} rotateWithView Rotate with map.
 * @api
 */


ImageStyle.prototype.setRotateWithView = function setRotateWithView(rotateWithView) {
  this.rotateWithView_ = rotateWithView;
};
/**
 * Set the rotation.
 *
 * @param {number} rotation Rotation.
 * @api
 */


ImageStyle.prototype.setRotation = function setRotation(rotation) {
  this.rotation_ = rotation;
};
/**
 * Set the scale.
 *
 * @param {number} scale Scale.
 * @api
 */


ImageStyle.prototype.setScale = function setScale(scale) {
  this.scale_ = scale;
};
/**
 * This method is deprecated and does nothing.
 * @param {boolean} snapToPixel Snap to pixel?
 * @deprecated
 * @api
 */


ImageStyle.prototype.setSnapToPixel = function setSnapToPixel(snapToPixel) {};
/**
 * @abstract
 * @param {function(this: T, import("../events/Event.js").default)} listener Listener function.
 * @param {T} thisArg Value to use as `this` when executing `listener`.
 * @return {import("../events.js").EventsKey|undefined} Listener key.
 * @template T
 */


ImageStyle.prototype.listenImageChange = function listenImageChange(listener, thisArg) {
  return (0, _util.abstract)();
};
/**
 * Load not yet loaded URI.
 * @abstract
 */


ImageStyle.prototype.load = function load() {
  (0, _util.abstract)();
};
/**
 * @abstract
 * @param {function(this: T, import("../events/Event.js").default)} listener Listener function.
 * @param {T} thisArg Value to use as `this` when executing `listener`.
 * @template T
 */


ImageStyle.prototype.unlistenImageChange = function unlistenImageChange(listener, thisArg) {
  (0, _util.abstract)();
};

var _default = ImageStyle;
exports.default = _default;
},{"../util.js":"node_modules/ol/util.js"}],"node_modules/ol/style/RegularShape.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _color = require("../color.js");

var _colorlike = require("../colorlike.js");

var _dom = require("../dom.js");

var _has = require("../has.js");

var _ImageState = _interopRequireDefault(require("../ImageState.js"));

var _canvas = require("../render/canvas.js");

var _Image = _interopRequireDefault(require("./Image.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/style/RegularShape
 */

/**
 * Specify radius for regular polygons, or radius1 and radius2 for stars.
 * @typedef {Object} Options
 * @property {import("./Fill.js").default} [fill] Fill style.
 * @property {number} points Number of points for stars and regular polygons. In case of a polygon, the number of points
 * is the number of sides.
 * @property {number} [radius] Radius of a regular polygon.
 * @property {number} [radius1] Outer radius of a star.
 * @property {number} [radius2] Inner radius of a star.
 * @property {number} [angle=0] Shape's angle in radians. A value of 0 will have one of the shape's point facing up.
 * @property {import("./Stroke.js").default} [stroke] Stroke style.
 * @property {number} [rotation=0] Rotation in radians (positive rotation clockwise).
 * @property {boolean} [rotateWithView=false] Whether to rotate the shape with the view.
 * @property {import("./AtlasManager.js").default} [atlasManager] The atlas manager to use for this symbol. When
 * using WebGL it is recommended to use an atlas manager to avoid texture switching. If an atlas manager is given, the
 * symbol is added to an atlas. By default no atlas manager is used.
 */

/**
 * @typedef {Object} RenderOptions
 * @property {import("../colorlike.js").ColorLike} [strokeStyle]
 * @property {number} strokeWidth
 * @property {number} size
 * @property {string} lineCap
 * @property {Array<number>} lineDash
 * @property {number} lineDashOffset
 * @property {string} lineJoin
 * @property {number} miterLimit
 */

/**
 * @classdesc
 * Set regular shape style for vector features. The resulting shape will be
 * a regular polygon when `radius` is provided, or a star when `radius1` and
 * `radius2` are provided.
 * @api
 */
var RegularShape =
/*@__PURE__*/
function (ImageStyle) {
  function RegularShape(options) {
    /**
     * @type {boolean}
     */
    var rotateWithView = options.rotateWithView !== undefined ? options.rotateWithView : false;
    ImageStyle.call(this, {
      opacity: 1,
      rotateWithView: rotateWithView,
      rotation: options.rotation !== undefined ? options.rotation : 0,
      scale: 1
    });
    /**
     * @private
     * @type {Array<string|number>}
     */

    this.checksums_ = null;
    /**
     * @private
     * @type {HTMLCanvasElement}
     */

    this.canvas_ = null;
    /**
     * @private
     * @type {HTMLCanvasElement}
     */

    this.hitDetectionCanvas_ = null;
    /**
     * @private
     * @type {import("./Fill.js").default}
     */

    this.fill_ = options.fill !== undefined ? options.fill : null;
    /**
     * @private
     * @type {Array<number>}
     */

    this.origin_ = [0, 0];
    /**
     * @private
     * @type {number}
     */

    this.points_ = options.points;
    /**
     * @protected
     * @type {number}
     */

    this.radius_ =
    /** @type {number} */
    options.radius !== undefined ? options.radius : options.radius1;
    /**
     * @private
     * @type {number|undefined}
     */

    this.radius2_ = options.radius2;
    /**
     * @private
     * @type {number}
     */

    this.angle_ = options.angle !== undefined ? options.angle : 0;
    /**
     * @private
     * @type {import("./Stroke.js").default}
     */

    this.stroke_ = options.stroke !== undefined ? options.stroke : null;
    /**
     * @private
     * @type {Array<number>}
     */

    this.anchor_ = null;
    /**
     * @private
     * @type {import("../size.js").Size}
     */

    this.size_ = null;
    /**
     * @private
     * @type {import("../size.js").Size}
     */

    this.imageSize_ = null;
    /**
     * @private
     * @type {import("../size.js").Size}
     */

    this.hitDetectionImageSize_ = null;
    /**
     * @protected
     * @type {import("./AtlasManager.js").default|undefined}
     */

    this.atlasManager_ = options.atlasManager;
    this.render_(this.atlasManager_);
  }

  if (ImageStyle) RegularShape.__proto__ = ImageStyle;
  RegularShape.prototype = Object.create(ImageStyle && ImageStyle.prototype);
  RegularShape.prototype.constructor = RegularShape;
  /**
   * Clones the style. If an atlasmanager was provided to the original style it will be used in the cloned style, too.
   * @return {RegularShape} The cloned style.
   * @api
   */

  RegularShape.prototype.clone = function clone() {
    var style = new RegularShape({
      fill: this.getFill() ? this.getFill().clone() : undefined,
      points: this.getPoints(),
      radius: this.getRadius(),
      radius2: this.getRadius2(),
      angle: this.getAngle(),
      stroke: this.getStroke() ? this.getStroke().clone() : undefined,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      atlasManager: this.atlasManager_
    });
    style.setOpacity(this.getOpacity());
    style.setScale(this.getScale());
    return style;
  };
  /**
   * @inheritDoc
   * @api
   */


  RegularShape.prototype.getAnchor = function getAnchor() {
    return this.anchor_;
  };
  /**
   * Get the angle used in generating the shape.
   * @return {number} Shape's rotation in radians.
   * @api
   */


  RegularShape.prototype.getAngle = function getAngle() {
    return this.angle_;
  };
  /**
   * Get the fill style for the shape.
   * @return {import("./Fill.js").default} Fill style.
   * @api
   */


  RegularShape.prototype.getFill = function getFill() {
    return this.fill_;
  };
  /**
   * @inheritDoc
   */


  RegularShape.prototype.getHitDetectionImage = function getHitDetectionImage(pixelRatio) {
    return this.hitDetectionCanvas_;
  };
  /**
   * @inheritDoc
   * @api
   */


  RegularShape.prototype.getImage = function getImage(pixelRatio) {
    return this.canvas_;
  };
  /**
   * @inheritDoc
   */


  RegularShape.prototype.getImageSize = function getImageSize() {
    return this.imageSize_;
  };
  /**
   * @inheritDoc
   */


  RegularShape.prototype.getHitDetectionImageSize = function getHitDetectionImageSize() {
    return this.hitDetectionImageSize_;
  };
  /**
   * @inheritDoc
   */


  RegularShape.prototype.getImageState = function getImageState() {
    return _ImageState.default.LOADED;
  };
  /**
   * @inheritDoc
   * @api
   */


  RegularShape.prototype.getOrigin = function getOrigin() {
    return this.origin_;
  };
  /**
   * Get the number of points for generating the shape.
   * @return {number} Number of points for stars and regular polygons.
   * @api
   */


  RegularShape.prototype.getPoints = function getPoints() {
    return this.points_;
  };
  /**
   * Get the (primary) radius for the shape.
   * @return {number} Radius.
   * @api
   */


  RegularShape.prototype.getRadius = function getRadius() {
    return this.radius_;
  };
  /**
   * Get the secondary radius for the shape.
   * @return {number|undefined} Radius2.
   * @api
   */


  RegularShape.prototype.getRadius2 = function getRadius2() {
    return this.radius2_;
  };
  /**
   * @inheritDoc
   * @api
   */


  RegularShape.prototype.getSize = function getSize() {
    return this.size_;
  };
  /**
   * Get the stroke style for the shape.
   * @return {import("./Stroke.js").default} Stroke style.
   * @api
   */


  RegularShape.prototype.getStroke = function getStroke() {
    return this.stroke_;
  };
  /**
   * @inheritDoc
   */


  RegularShape.prototype.listenImageChange = function listenImageChange(listener, thisArg) {
    return undefined;
  };
  /**
   * @inheritDoc
   */


  RegularShape.prototype.load = function load() {};
  /**
   * @inheritDoc
   */


  RegularShape.prototype.unlistenImageChange = function unlistenImageChange(listener, thisArg) {};
  /**
   * @protected
   * @param {import("./AtlasManager.js").default|undefined} atlasManager An atlas manager.
   */


  RegularShape.prototype.render_ = function render_(atlasManager) {
    var imageSize;
    var lineCap = '';
    var lineJoin = '';
    var miterLimit = 0;
    var lineDash = null;
    var lineDashOffset = 0;
    var strokeStyle;
    var strokeWidth = 0;

    if (this.stroke_) {
      strokeStyle = this.stroke_.getColor();

      if (strokeStyle === null) {
        strokeStyle = _canvas.defaultStrokeStyle;
      }

      strokeStyle = (0, _colorlike.asColorLike)(strokeStyle);
      strokeWidth = this.stroke_.getWidth();

      if (strokeWidth === undefined) {
        strokeWidth = _canvas.defaultLineWidth;
      }

      lineDash = this.stroke_.getLineDash();
      lineDashOffset = this.stroke_.getLineDashOffset();

      if (!_has.CANVAS_LINE_DASH) {
        lineDash = null;
        lineDashOffset = 0;
      }

      lineJoin = this.stroke_.getLineJoin();

      if (lineJoin === undefined) {
        lineJoin = _canvas.defaultLineJoin;
      }

      lineCap = this.stroke_.getLineCap();

      if (lineCap === undefined) {
        lineCap = _canvas.defaultLineCap;
      }

      miterLimit = this.stroke_.getMiterLimit();

      if (miterLimit === undefined) {
        miterLimit = _canvas.defaultMiterLimit;
      }
    }

    var size = 2 * (this.radius_ + strokeWidth) + 1;
    /** @type {RenderOptions} */

    var renderOptions = {
      strokeStyle: strokeStyle,
      strokeWidth: strokeWidth,
      size: size,
      lineCap: lineCap,
      lineDash: lineDash,
      lineDashOffset: lineDashOffset,
      lineJoin: lineJoin,
      miterLimit: miterLimit
    };

    if (atlasManager === undefined) {
      // no atlas manager is used, create a new canvas
      var context = (0, _dom.createCanvasContext2D)(size, size);
      this.canvas_ = context.canvas; // canvas.width and height are rounded to the closest integer

      size = this.canvas_.width;
      imageSize = size;
      this.draw_(renderOptions, context, 0, 0);
      this.createHitDetectionCanvas_(renderOptions);
    } else {
      // an atlas manager is used, add the symbol to an atlas
      size = Math.round(size);
      var hasCustomHitDetectionImage = !this.fill_;
      var renderHitDetectionCallback;

      if (hasCustomHitDetectionImage) {
        // render the hit-detection image into a separate atlas image
        renderHitDetectionCallback = this.drawHitDetectionCanvas_.bind(this, renderOptions);
      }

      var id = this.getChecksum();
      var info = atlasManager.add(id, size, size, this.draw_.bind(this, renderOptions), renderHitDetectionCallback);
      this.canvas_ = info.image;
      this.origin_ = [info.offsetX, info.offsetY];
      imageSize = info.image.width;

      if (hasCustomHitDetectionImage) {
        this.hitDetectionCanvas_ = info.hitImage;
        this.hitDetectionImageSize_ = [info.hitImage.width, info.hitImage.height];
      } else {
        this.hitDetectionCanvas_ = this.canvas_;
        this.hitDetectionImageSize_ = [imageSize, imageSize];
      }
    }

    this.anchor_ = [size / 2, size / 2];
    this.size_ = [size, size];
    this.imageSize_ = [imageSize, imageSize];
  };
  /**
   * @private
   * @param {RenderOptions} renderOptions Render options.
   * @param {CanvasRenderingContext2D} context The rendering context.
   * @param {number} x The origin for the symbol (x).
   * @param {number} y The origin for the symbol (y).
   */


  RegularShape.prototype.draw_ = function draw_(renderOptions, context, x, y) {
    var i, angle0, radiusC; // reset transform

    context.setTransform(1, 0, 0, 1, 0, 0); // then move to (x, y)

    context.translate(x, y);
    context.beginPath();
    var points = this.points_;

    if (points === Infinity) {
      context.arc(renderOptions.size / 2, renderOptions.size / 2, this.radius_, 0, 2 * Math.PI, true);
    } else {
      var radius2 = this.radius2_ !== undefined ? this.radius2_ : this.radius_;

      if (radius2 !== this.radius_) {
        points = 2 * points;
      }

      for (i = 0; i <= points; i++) {
        angle0 = i * 2 * Math.PI / points - Math.PI / 2 + this.angle_;
        radiusC = i % 2 === 0 ? this.radius_ : radius2;
        context.lineTo(renderOptions.size / 2 + radiusC * Math.cos(angle0), renderOptions.size / 2 + radiusC * Math.sin(angle0));
      }
    }

    if (this.fill_) {
      var color = this.fill_.getColor();

      if (color === null) {
        color = _canvas.defaultFillStyle;
      }

      context.fillStyle = (0, _colorlike.asColorLike)(color);
      context.fill();
    }

    if (this.stroke_) {
      context.strokeStyle = renderOptions.strokeStyle;
      context.lineWidth = renderOptions.strokeWidth;

      if (renderOptions.lineDash) {
        context.setLineDash(renderOptions.lineDash);
        context.lineDashOffset = renderOptions.lineDashOffset;
      }

      context.lineCap =
      /** @type {CanvasLineCap} */
      renderOptions.lineCap;
      context.lineJoin =
      /** @type {CanvasLineJoin} */
      renderOptions.lineJoin;
      context.miterLimit = renderOptions.miterLimit;
      context.stroke();
    }

    context.closePath();
  };
  /**
   * @private
   * @param {RenderOptions} renderOptions Render options.
   */


  RegularShape.prototype.createHitDetectionCanvas_ = function createHitDetectionCanvas_(renderOptions) {
    this.hitDetectionImageSize_ = [renderOptions.size, renderOptions.size];

    if (this.fill_) {
      this.hitDetectionCanvas_ = this.canvas_;
      return;
    } // if no fill style is set, create an extra hit-detection image with a
    // default fill style


    var context = (0, _dom.createCanvasContext2D)(renderOptions.size, renderOptions.size);
    this.hitDetectionCanvas_ = context.canvas;
    this.drawHitDetectionCanvas_(renderOptions, context, 0, 0);
  };
  /**
   * @private
   * @param {RenderOptions} renderOptions Render options.
   * @param {CanvasRenderingContext2D} context The context.
   * @param {number} x The origin for the symbol (x).
   * @param {number} y The origin for the symbol (y).
   */


  RegularShape.prototype.drawHitDetectionCanvas_ = function drawHitDetectionCanvas_(renderOptions, context, x, y) {
    // reset transform
    context.setTransform(1, 0, 0, 1, 0, 0); // then move to (x, y)

    context.translate(x, y);
    context.beginPath();
    var points = this.points_;

    if (points === Infinity) {
      context.arc(renderOptions.size / 2, renderOptions.size / 2, this.radius_, 0, 2 * Math.PI, true);
    } else {
      var radius2 = this.radius2_ !== undefined ? this.radius2_ : this.radius_;

      if (radius2 !== this.radius_) {
        points = 2 * points;
      }

      var i, radiusC, angle0;

      for (i = 0; i <= points; i++) {
        angle0 = i * 2 * Math.PI / points - Math.PI / 2 + this.angle_;
        radiusC = i % 2 === 0 ? this.radius_ : radius2;
        context.lineTo(renderOptions.size / 2 + radiusC * Math.cos(angle0), renderOptions.size / 2 + radiusC * Math.sin(angle0));
      }
    }

    context.fillStyle = (0, _color.asString)(_canvas.defaultFillStyle);
    context.fill();

    if (this.stroke_) {
      context.strokeStyle = renderOptions.strokeStyle;
      context.lineWidth = renderOptions.strokeWidth;

      if (renderOptions.lineDash) {
        context.setLineDash(renderOptions.lineDash);
        context.lineDashOffset = renderOptions.lineDashOffset;
      }

      context.stroke();
    }

    context.closePath();
  };
  /**
   * @return {string} The checksum.
   */


  RegularShape.prototype.getChecksum = function getChecksum() {
    var strokeChecksum = this.stroke_ ? this.stroke_.getChecksum() : '-';
    var fillChecksum = this.fill_ ? this.fill_.getChecksum() : '-';
    var recalculate = !this.checksums_ || strokeChecksum != this.checksums_[1] || fillChecksum != this.checksums_[2] || this.radius_ != this.checksums_[3] || this.radius2_ != this.checksums_[4] || this.angle_ != this.checksums_[5] || this.points_ != this.checksums_[6];

    if (recalculate) {
      var checksum = 'r' + strokeChecksum + fillChecksum + (this.radius_ !== undefined ? this.radius_.toString() : '-') + (this.radius2_ !== undefined ? this.radius2_.toString() : '-') + (this.angle_ !== undefined ? this.angle_.toString() : '-') + (this.points_ !== undefined ? this.points_.toString() : '-');
      this.checksums_ = [checksum, strokeChecksum, fillChecksum, this.radius_, this.radius2_, this.angle_, this.points_];
    }

    return (
      /** @type {string} */
      this.checksums_[0]
    );
  };

  return RegularShape;
}(_Image.default);

var _default = RegularShape;
exports.default = _default;
},{"../color.js":"node_modules/ol/color.js","../colorlike.js":"node_modules/ol/colorlike.js","../dom.js":"node_modules/ol/dom.js","../has.js":"node_modules/ol/has.js","../ImageState.js":"node_modules/ol/ImageState.js","../render/canvas.js":"node_modules/ol/render/canvas.js","./Image.js":"node_modules/ol/style/Image.js"}],"node_modules/ol/style/Circle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _RegularShape = _interopRequireDefault(require("./RegularShape.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/style/Circle
 */

/**
 * @typedef {Object} Options
 * @property {import("./Fill.js").default} [fill] Fill style.
 * @property {number} radius Circle radius.
 * @property {import("./Stroke.js").default} [stroke] Stroke style.
 * @property {import("./AtlasManager.js").default} [atlasManager] The atlas manager to use for this circle.
 * When using WebGL it is recommended to use an atlas manager to avoid texture switching. If an atlas manager is given,
 * the circle is added to an atlas. By default no atlas manager is used.
 */

/**
 * @classdesc
 * Set circle style for vector features.
 * @api
 */
var CircleStyle =
/*@__PURE__*/
function (RegularShape) {
  function CircleStyle(opt_options) {
    var options = opt_options ||
    /** @type {Options} */
    {};
    RegularShape.call(this, {
      points: Infinity,
      fill: options.fill,
      radius: options.radius,
      stroke: options.stroke,
      atlasManager: options.atlasManager
    });
  }

  if (RegularShape) CircleStyle.__proto__ = RegularShape;
  CircleStyle.prototype = Object.create(RegularShape && RegularShape.prototype);
  CircleStyle.prototype.constructor = CircleStyle;
  /**
  * Clones the style.  If an atlasmanager was provided to the original style it will be used in the cloned style, too.
  * @return {CircleStyle} The cloned style.
  * @override
  * @api
  */

  CircleStyle.prototype.clone = function clone() {
    var style = new CircleStyle({
      fill: this.getFill() ? this.getFill().clone() : undefined,
      stroke: this.getStroke() ? this.getStroke().clone() : undefined,
      radius: this.getRadius(),
      atlasManager: this.atlasManager_
    });
    style.setOpacity(this.getOpacity());
    style.setScale(this.getScale());
    return style;
  };
  /**
  * Set the circle radius.
  *
  * @param {number} radius Circle radius.
  * @api
  */


  CircleStyle.prototype.setRadius = function setRadius(radius) {
    this.radius_ = radius;
    this.render_(this.atlasManager_);
  };

  return CircleStyle;
}(_RegularShape.default);

var _default = CircleStyle;
exports.default = _default;
},{"./RegularShape.js":"node_modules/ol/style/RegularShape.js"}],"node_modules/ol/style/Fill.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("../util.js");

var _color = require("../color.js");

/**
 * @module ol/style/Fill
 */

/**
 * @typedef {Object} Options
 * @property {import("../color.js").Color|import("../colorlike.js").ColorLike} [color] A color, gradient or pattern.
 * See {@link module:ol/color~Color} and {@link module:ol/colorlike~ColorLike} for possible formats.
 * Default null; if null, the Canvas/renderer default black will be used.
 */

/**
 * @classdesc
 * Set fill style for vector features.
 * @api
 */
var Fill = function Fill(opt_options) {
  var options = opt_options || {};
  /**
   * @private
   * @type {import("../color.js").Color|import("../colorlike.js").ColorLike}
   */

  this.color_ = options.color !== undefined ? options.color : null;
  /**
   * @private
   * @type {string|undefined}
   */

  this.checksum_ = undefined;
};
/**
 * Clones the style. The color is not cloned if it is an {@link module:ol/colorlike~ColorLike}.
 * @return {Fill} The cloned style.
 * @api
 */


Fill.prototype.clone = function clone() {
  var color = this.getColor();
  return new Fill({
    color: Array.isArray(color) ? color.slice() : color || undefined
  });
};
/**
 * Get the fill color.
 * @return {import("../color.js").Color|import("../colorlike.js").ColorLike} Color.
 * @api
 */


Fill.prototype.getColor = function getColor() {
  return this.color_;
};
/**
 * Set the color.
 *
 * @param {import("../color.js").Color|import("../colorlike.js").ColorLike} color Color.
 * @api
 */


Fill.prototype.setColor = function setColor(color) {
  this.color_ = color;
  this.checksum_ = undefined;
};
/**
 * @return {string} The checksum.
 */


Fill.prototype.getChecksum = function getChecksum() {
  if (this.checksum_ === undefined) {
    var color = this.color_;

    if (color) {
      if (Array.isArray(color) || typeof color == 'string') {
        this.checksum_ = 'f' + (0, _color.asString)(
        /** @type {import("../color.js").Color|string} */
        color);
      } else {
        this.checksum_ = (0, _util.getUid)(this.color_);
      }
    } else {
      this.checksum_ = 'f-';
    }
  }

  return this.checksum_;
};

var _default = Fill;
exports.default = _default;
},{"../util.js":"node_modules/ol/util.js","../color.js":"node_modules/ol/color.js"}],"node_modules/ol/style/Stroke.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("../util.js");

/**
 * @module ol/style/Stroke
 */

/**
 * @typedef {Object} Options
 * @property {import("../color.js").Color|import("../colorlike.js").ColorLike} [color] A color, gradient or pattern.
 * See {@link module:ol/color~Color} and {@link module:ol/colorlike~ColorLike} for possible formats.
 * Default null; if null, the Canvas/renderer default black will be used.
 * @property {string} [lineCap='round'] Line cap style: `butt`, `round`, or `square`.
 * @property {string} [lineJoin='round'] Line join style: `bevel`, `round`, or `miter`.
 * @property {Array<number>} [lineDash] Line dash pattern. Default is `undefined` (no dash).
 * Please note that Internet Explorer 10 and lower do not support the `setLineDash` method on
 * the `CanvasRenderingContext2D` and therefore this option will have no visual effect in these browsers.
 * @property {number} [lineDashOffset=0] Line dash offset.
 * @property {number} [miterLimit=10] Miter limit.
 * @property {number} [width] Width.
 */

/**
 * @classdesc
 * Set stroke style for vector features.
 * Note that the defaults given are the Canvas defaults, which will be used if
 * option is not defined. The `get` functions return whatever was entered in
 * the options; they will not return the default.
 * @api
 */
var Stroke = function Stroke(opt_options) {
  var options = opt_options || {};
  /**
   * @private
   * @type {import("../color.js").Color|import("../colorlike.js").ColorLike}
   */

  this.color_ = options.color !== undefined ? options.color : null;
  /**
   * @private
   * @type {string|undefined}
   */

  this.lineCap_ = options.lineCap;
  /**
   * @private
   * @type {Array<number>}
   */

  this.lineDash_ = options.lineDash !== undefined ? options.lineDash : null;
  /**
   * @private
   * @type {number|undefined}
   */

  this.lineDashOffset_ = options.lineDashOffset;
  /**
   * @private
   * @type {string|undefined}
   */

  this.lineJoin_ = options.lineJoin;
  /**
   * @private
   * @type {number|undefined}
   */

  this.miterLimit_ = options.miterLimit;
  /**
   * @private
   * @type {number|undefined}
   */

  this.width_ = options.width;
  /**
   * @private
   * @type {string|undefined}
   */

  this.checksum_ = undefined;
};
/**
 * Clones the style.
 * @return {Stroke} The cloned style.
 * @api
 */


Stroke.prototype.clone = function clone() {
  var color = this.getColor();
  return new Stroke({
    color: Array.isArray(color) ? color.slice() : color || undefined,
    lineCap: this.getLineCap(),
    lineDash: this.getLineDash() ? this.getLineDash().slice() : undefined,
    lineDashOffset: this.getLineDashOffset(),
    lineJoin: this.getLineJoin(),
    miterLimit: this.getMiterLimit(),
    width: this.getWidth()
  });
};
/**
 * Get the stroke color.
 * @return {import("../color.js").Color|import("../colorlike.js").ColorLike} Color.
 * @api
 */


Stroke.prototype.getColor = function getColor() {
  return this.color_;
};
/**
 * Get the line cap type for the stroke.
 * @return {string|undefined} Line cap.
 * @api
 */


Stroke.prototype.getLineCap = function getLineCap() {
  return this.lineCap_;
};
/**
 * Get the line dash style for the stroke.
 * @return {Array<number>} Line dash.
 * @api
 */


Stroke.prototype.getLineDash = function getLineDash() {
  return this.lineDash_;
};
/**
 * Get the line dash offset for the stroke.
 * @return {number|undefined} Line dash offset.
 * @api
 */


Stroke.prototype.getLineDashOffset = function getLineDashOffset() {
  return this.lineDashOffset_;
};
/**
 * Get the line join type for the stroke.
 * @return {string|undefined} Line join.
 * @api
 */


Stroke.prototype.getLineJoin = function getLineJoin() {
  return this.lineJoin_;
};
/**
 * Get the miter limit for the stroke.
 * @return {number|undefined} Miter limit.
 * @api
 */


Stroke.prototype.getMiterLimit = function getMiterLimit() {
  return this.miterLimit_;
};
/**
 * Get the stroke width.
 * @return {number|undefined} Width.
 * @api
 */


Stroke.prototype.getWidth = function getWidth() {
  return this.width_;
};
/**
 * Set the color.
 *
 * @param {import("../color.js").Color|import("../colorlike.js").ColorLike} color Color.
 * @api
 */


Stroke.prototype.setColor = function setColor(color) {
  this.color_ = color;
  this.checksum_ = undefined;
};
/**
 * Set the line cap.
 *
 * @param {string|undefined} lineCap Line cap.
 * @api
 */


Stroke.prototype.setLineCap = function setLineCap(lineCap) {
  this.lineCap_ = lineCap;
  this.checksum_ = undefined;
};
/**
 * Set the line dash.
 *
 * Please note that Internet Explorer 10 and lower [do not support][mdn] the
 * `setLineDash` method on the `CanvasRenderingContext2D` and therefore this
 * property will have no visual effect in these browsers.
 *
 * [mdn]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility
 *
 * @param {Array<number>} lineDash Line dash.
 * @api
 */


Stroke.prototype.setLineDash = function setLineDash(lineDash) {
  this.lineDash_ = lineDash;
  this.checksum_ = undefined;
};
/**
 * Set the line dash offset.
 *
 * @param {number|undefined} lineDashOffset Line dash offset.
 * @api
 */


Stroke.prototype.setLineDashOffset = function setLineDashOffset(lineDashOffset) {
  this.lineDashOffset_ = lineDashOffset;
  this.checksum_ = undefined;
};
/**
 * Set the line join.
 *
 * @param {string|undefined} lineJoin Line join.
 * @api
 */


Stroke.prototype.setLineJoin = function setLineJoin(lineJoin) {
  this.lineJoin_ = lineJoin;
  this.checksum_ = undefined;
};
/**
 * Set the miter limit.
 *
 * @param {number|undefined} miterLimit Miter limit.
 * @api
 */


Stroke.prototype.setMiterLimit = function setMiterLimit(miterLimit) {
  this.miterLimit_ = miterLimit;
  this.checksum_ = undefined;
};
/**
 * Set the width.
 *
 * @param {number|undefined} width Width.
 * @api
 */


Stroke.prototype.setWidth = function setWidth(width) {
  this.width_ = width;
  this.checksum_ = undefined;
};
/**
 * @return {string} The checksum.
 */


Stroke.prototype.getChecksum = function getChecksum() {
  if (this.checksum_ === undefined) {
    this.checksum_ = 's';

    if (this.color_) {
      if (typeof this.color_ === 'string') {
        this.checksum_ += this.color_;
      } else {
        this.checksum_ += (0, _util.getUid)(this.color_);
      }
    } else {
      this.checksum_ += '-';
    }

    this.checksum_ += ',' + (this.lineCap_ !== undefined ? this.lineCap_.toString() : '-') + ',' + (this.lineDash_ ? this.lineDash_.toString() : '-') + ',' + (this.lineDashOffset_ !== undefined ? this.lineDashOffset_ : '-') + ',' + (this.lineJoin_ !== undefined ? this.lineJoin_ : '-') + ',' + (this.miterLimit_ !== undefined ? this.miterLimit_.toString() : '-') + ',' + (this.width_ !== undefined ? this.width_.toString() : '-');
  }

  return this.checksum_;
};

var _default = Stroke;
exports.default = _default;
},{"../util.js":"node_modules/ol/util.js"}],"node_modules/ol/style/Style.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toFunction = toFunction;
exports.createDefaultStyle = createDefaultStyle;
exports.createEditingStyle = createEditingStyle;
exports.default = void 0;

var _asserts = require("../asserts.js");

var _GeometryType = _interopRequireDefault(require("../geom/GeometryType.js"));

var _Circle = _interopRequireDefault(require("./Circle.js"));

var _Fill = _interopRequireDefault(require("./Fill.js"));

var _Stroke = _interopRequireDefault(require("./Stroke.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/style/Style
 */

/**
 * Feature styles.
 *
 * If no style is defined, the following default style is used:
 * ```js
 *  import {Fill, Stroke, Circle, Style} from 'ol/style';
 *
 *  var fill = new Fill({
 *    color: 'rgba(255,255,255,0.4)'
 *  });
 *  var stroke = new Stroke({
 *    color: '#3399CC',
 *    width: 1.25
 *  });
 *  var styles = [
 *    new Style({
 *      image: new Circle({
 *        fill: fill,
 *        stroke: stroke,
 *        radius: 5
 *      }),
 *      fill: fill,
 *      stroke: stroke
 *    })
 *  ];
 * ```
 *
 * A separate editing style has the following defaults:
 * ```js
 *  import {Fill, Stroke, Circle, Style} from 'ol/style';
 *  import GeometryType from 'ol/geom/GeometryType';
 *
 *  var white = [255, 255, 255, 1];
 *  var blue = [0, 153, 255, 1];
 *  var width = 3;
 *  styles[GeometryType.POLYGON] = [
 *    new Style({
 *      fill: new Fill({
 *        color: [255, 255, 255, 0.5]
 *      })
 *    })
 *  ];
 *  styles[GeometryType.MULTI_POLYGON] =
 *      styles[GeometryType.POLYGON];
 *  styles[GeometryType.LINE_STRING] = [
 *    new Style({
 *      stroke: new Stroke({
 *        color: white,
 *        width: width + 2
 *      })
 *    }),
 *    new Style({
 *      stroke: new Stroke({
 *        color: blue,
 *        width: width
 *      })
 *    })
 *  ];
 *  styles[GeometryType.MULTI_LINE_STRING] =
 *      styles[GeometryType.LINE_STRING];
 *  styles[GeometryType.POINT] = [
 *    new Style({
 *      image: new Circle({
 *        radius: width * 2,
 *        fill: new Fill({
 *          color: blue
 *        }),
 *        stroke: new Stroke({
 *          color: white,
 *          width: width / 2
 *        })
 *      }),
 *      zIndex: Infinity
 *    })
 *  ];
 *  styles[GeometryType.MULTI_POINT] =
 *      styles[GeometryType.POINT];
 *  styles[GeometryType.GEOMETRY_COLLECTION] =
 *      styles[GeometryType.POLYGON].concat(
 *          styles[GeometryType.LINE_STRING],
 *          styles[GeometryType.POINT]
 *      );
 * ```
 */

/**
 * A function that takes an {@link module:ol/Feature} and a `{number}`
 * representing the view's resolution. The function should return a
 * {@link module:ol/style/Style} or an array of them. This way e.g. a
 * vector layer can be styled.
 *
 * @typedef {function(import("../Feature.js").FeatureLike, number):(Style|Array<Style>)} StyleFunction
 */

/**
 * A {@link Style}, an array of {@link Style}, or a {@link StyleFunction}.
 * @typedef {Style|Array<Style>|StyleFunction} StyleLike
 */

/**
 * A function that takes an {@link module:ol/Feature} as argument and returns an
 * {@link module:ol/geom/Geometry} that will be rendered and styled for the feature.
 *
 * @typedef {function(import("../Feature.js").FeatureLike):
 *     (import("../geom/Geometry.js").default|import("../render/Feature.js").default|undefined)} GeometryFunction
 */

/**
 * Custom renderer function. Takes two arguments:
 *
 * 1. The pixel coordinates of the geometry in GeoJSON notation.
 * 2. The {@link module:ol/render~State} of the layer renderer.
 *
 * @typedef {function((import("../coordinate.js").Coordinate|Array<import("../coordinate.js").Coordinate>|Array<Array<import("../coordinate.js").Coordinate>>),import("../render.js").State)}
 * RenderFunction
 */

/**
 * @typedef {Object} Options
 * @property {string|import("../geom/Geometry.js").default|GeometryFunction} [geometry] Feature property or geometry
 * or function returning a geometry to render for this style.
 * @property {import("./Fill.js").default} [fill] Fill style.
 * @property {import("./Image.js").default} [image] Image style.
 * @property {RenderFunction} [renderer] Custom renderer. When configured, `fill`, `stroke` and `image` will be
 * ignored, and the provided function will be called with each render frame for each geometry.
 * @property {import("./Stroke.js").default} [stroke] Stroke style.
 * @property {import("./Text.js").default} [text] Text style.
 * @property {number} [zIndex] Z index.
 */

/**
 * @classdesc
 * Container for vector feature rendering styles. Any changes made to the style
 * or its children through `set*()` methods will not take effect until the
 * feature or layer that uses the style is re-rendered.
 * @api
 */
var Style = function Style(opt_options) {
  var options = opt_options || {};
  /**
   * @private
   * @type {string|import("../geom/Geometry.js").default|GeometryFunction}
   */

  this.geometry_ = null;
  /**
   * @private
   * @type {!GeometryFunction}
   */

  this.geometryFunction_ = defaultGeometryFunction;

  if (options.geometry !== undefined) {
    this.setGeometry(options.geometry);
  }
  /**
   * @private
   * @type {import("./Fill.js").default}
   */


  this.fill_ = options.fill !== undefined ? options.fill : null;
  /**
     * @private
     * @type {import("./Image.js").default}
     */

  this.image_ = options.image !== undefined ? options.image : null;
  /**
   * @private
   * @type {RenderFunction|null}
   */

  this.renderer_ = options.renderer !== undefined ? options.renderer : null;
  /**
   * @private
   * @type {import("./Stroke.js").default}
   */

  this.stroke_ = options.stroke !== undefined ? options.stroke : null;
  /**
   * @private
   * @type {import("./Text.js").default}
   */

  this.text_ = options.text !== undefined ? options.text : null;
  /**
   * @private
   * @type {number|undefined}
   */

  this.zIndex_ = options.zIndex;
};
/**
 * Clones the style.
 * @return {Style} The cloned style.
 * @api
 */


Style.prototype.clone = function clone() {
  var geometry = this.getGeometry();

  if (geometry && typeof geometry === 'object') {
    geometry =
    /** @type {import("../geom/Geometry.js").default} */
    geometry.clone();
  }

  return new Style({
    geometry: geometry,
    fill: this.getFill() ? this.getFill().clone() : undefined,
    image: this.getImage() ? this.getImage().clone() : undefined,
    stroke: this.getStroke() ? this.getStroke().clone() : undefined,
    text: this.getText() ? this.getText().clone() : undefined,
    zIndex: this.getZIndex()
  });
};
/**
 * Get the custom renderer function that was configured with
 * {@link #setRenderer} or the `renderer` constructor option.
 * @return {RenderFunction|null} Custom renderer function.
 * @api
 */


Style.prototype.getRenderer = function getRenderer() {
  return this.renderer_;
};
/**
 * Sets a custom renderer function for this style. When set, `fill`, `stroke`
 * and `image` options of the style will be ignored.
 * @param {RenderFunction|null} renderer Custom renderer function.
 * @api
 */


Style.prototype.setRenderer = function setRenderer(renderer) {
  this.renderer_ = renderer;
};
/**
 * Get the geometry to be rendered.
 * @return {string|import("../geom/Geometry.js").default|GeometryFunction}
 * Feature property or geometry or function that returns the geometry that will
 * be rendered with this style.
 * @api
 */


Style.prototype.getGeometry = function getGeometry() {
  return this.geometry_;
};
/**
 * Get the function used to generate a geometry for rendering.
 * @return {!GeometryFunction} Function that is called with a feature
 * and returns the geometry to render instead of the feature's geometry.
 * @api
 */


Style.prototype.getGeometryFunction = function getGeometryFunction() {
  return this.geometryFunction_;
};
/**
 * Get the fill style.
 * @return {import("./Fill.js").default} Fill style.
 * @api
 */


Style.prototype.getFill = function getFill() {
  return this.fill_;
};
/**
 * Set the fill style.
 * @param {import("./Fill.js").default} fill Fill style.
 * @api
 */


Style.prototype.setFill = function setFill(fill) {
  this.fill_ = fill;
};
/**
 * Get the image style.
 * @return {import("./Image.js").default} Image style.
 * @api
 */


Style.prototype.getImage = function getImage() {
  return this.image_;
};
/**
 * Set the image style.
 * @param {import("./Image.js").default} image Image style.
 * @api
 */


Style.prototype.setImage = function setImage(image) {
  this.image_ = image;
};
/**
 * Get the stroke style.
 * @return {import("./Stroke.js").default} Stroke style.
 * @api
 */


Style.prototype.getStroke = function getStroke() {
  return this.stroke_;
};
/**
 * Set the stroke style.
 * @param {import("./Stroke.js").default} stroke Stroke style.
 * @api
 */


Style.prototype.setStroke = function setStroke(stroke) {
  this.stroke_ = stroke;
};
/**
 * Get the text style.
 * @return {import("./Text.js").default} Text style.
 * @api
 */


Style.prototype.getText = function getText() {
  return this.text_;
};
/**
 * Set the text style.
 * @param {import("./Text.js").default} text Text style.
 * @api
 */


Style.prototype.setText = function setText(text) {
  this.text_ = text;
};
/**
 * Get the z-index for the style.
 * @return {number|undefined} ZIndex.
 * @api
 */


Style.prototype.getZIndex = function getZIndex() {
  return this.zIndex_;
};
/**
 * Set a geometry that is rendered instead of the feature's geometry.
 *
 * @param {string|import("../geom/Geometry.js").default|GeometryFunction} geometry
 *   Feature property or geometry or function returning a geometry to render
 *   for this style.
 * @api
 */


Style.prototype.setGeometry = function setGeometry(geometry) {
  if (typeof geometry === 'function') {
    this.geometryFunction_ = geometry;
  } else if (typeof geometry === 'string') {
    this.geometryFunction_ = function (feature) {
      return (
        /** @type {import("../geom/Geometry.js").default} */
        feature.get(geometry)
      );
    };
  } else if (!geometry) {
    this.geometryFunction_ = defaultGeometryFunction;
  } else if (geometry !== undefined) {
    this.geometryFunction_ = function () {
      return (
        /** @type {import("../geom/Geometry.js").default} */
        geometry
      );
    };
  }

  this.geometry_ = geometry;
};
/**
 * Set the z-index.
 *
 * @param {number|undefined} zIndex ZIndex.
 * @api
 */


Style.prototype.setZIndex = function setZIndex(zIndex) {
  this.zIndex_ = zIndex;
};
/**
 * Convert the provided object into a style function.  Functions passed through
 * unchanged.  Arrays of Style or single style objects wrapped in a
 * new style function.
 * @param {StyleFunction|Array<Style>|Style} obj
 *     A style function, a single style, or an array of styles.
 * @return {StyleFunction} A style function.
 */


function toFunction(obj) {
  var styleFunction;

  if (typeof obj === 'function') {
    styleFunction = obj;
  } else {
    /**
     * @type {Array<Style>}
     */
    var styles;

    if (Array.isArray(obj)) {
      styles = obj;
    } else {
      (0, _asserts.assert)(typeof
      /** @type {?} */
      obj.getZIndex === 'function', 41); // Expected an `Style` or an array of `Style`

      var style =
      /** @type {Style} */
      obj;
      styles = [style];
    }

    styleFunction = function () {
      return styles;
    };
  }

  return styleFunction;
}
/**
 * @type {Array<Style>}
 */


var defaultStyles = null;
/**
 * @param {import("../Feature.js").FeatureLike} feature Feature.
 * @param {number} resolution Resolution.
 * @return {Array<Style>} Style.
 */

function createDefaultStyle(feature, resolution) {
  // We don't use an immediately-invoked function
  // and a closure so we don't get an error at script evaluation time in
  // browsers that do not support Canvas. (import("./Circle.js").CircleStyle does
  // canvas.getContext('2d') at construction time, which will cause an.error
  // in such browsers.)
  if (!defaultStyles) {
    var fill = new _Fill.default({
      color: 'rgba(255,255,255,0.4)'
    });
    var stroke = new _Stroke.default({
      color: '#3399CC',
      width: 1.25
    });
    defaultStyles = [new Style({
      image: new _Circle.default({
        fill: fill,
        stroke: stroke,
        radius: 5
      }),
      fill: fill,
      stroke: stroke
    })];
  }

  return defaultStyles;
}
/**
 * Default styles for editing features.
 * @return {Object<import("../geom/GeometryType.js").default, Array<Style>>} Styles
 */


function createEditingStyle() {
  /** @type {Object<import("../geom/GeometryType.js").default, Array<Style>>} */
  var styles = {};
  var white = [255, 255, 255, 1];
  var blue = [0, 153, 255, 1];
  var width = 3;
  styles[_GeometryType.default.POLYGON] = [new Style({
    fill: new _Fill.default({
      color: [255, 255, 255, 0.5]
    })
  })];
  styles[_GeometryType.default.MULTI_POLYGON] = styles[_GeometryType.default.POLYGON];
  styles[_GeometryType.default.LINE_STRING] = [new Style({
    stroke: new _Stroke.default({
      color: white,
      width: width + 2
    })
  }), new Style({
    stroke: new _Stroke.default({
      color: blue,
      width: width
    })
  })];
  styles[_GeometryType.default.MULTI_LINE_STRING] = styles[_GeometryType.default.LINE_STRING];
  styles[_GeometryType.default.CIRCLE] = styles[_GeometryType.default.POLYGON].concat(styles[_GeometryType.default.LINE_STRING]);
  styles[_GeometryType.default.POINT] = [new Style({
    image: new _Circle.default({
      radius: width * 2,
      fill: new _Fill.default({
        color: blue
      }),
      stroke: new _Stroke.default({
        color: white,
        width: width / 2
      })
    }),
    zIndex: Infinity
  })];
  styles[_GeometryType.default.MULTI_POINT] = styles[_GeometryType.default.POINT];
  styles[_GeometryType.default.GEOMETRY_COLLECTION] = styles[_GeometryType.default.POLYGON].concat(styles[_GeometryType.default.LINE_STRING], styles[_GeometryType.default.POINT]);
  return styles;
}
/**
 * Function that is called with a feature and returns its default geometry.
 * @param {import("../Feature.js").FeatureLike} feature Feature to get the geometry for.
 * @return {import("../geom/Geometry.js").default|import("../render/Feature.js").default|undefined} Geometry to render.
 */


function defaultGeometryFunction(feature) {
  return feature.getGeometry();
}

var _default = Style;
exports.default = _default;
},{"../asserts.js":"node_modules/ol/asserts.js","../geom/GeometryType.js":"node_modules/ol/geom/GeometryType.js","./Circle.js":"node_modules/ol/style/Circle.js","./Fill.js":"node_modules/ol/style/Fill.js","./Stroke.js":"node_modules/ol/style/Stroke.js"}],"node_modules/ol/layer/Vector.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _LayerType = _interopRequireDefault(require("../LayerType.js"));

var _Layer = _interopRequireDefault(require("./Layer.js"));

var _VectorRenderType = _interopRequireDefault(require("./VectorRenderType.js"));

var _obj = require("../obj.js");

var _Style = require("../style/Style.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/layer/Vector
 */

/**
 * @typedef {Object} Options
 * @property {number} [opacity=1] Opacity (0, 1).
 * @property {boolean} [visible=true] Visibility.
 * @property {import("../extent.js").Extent} [extent] The bounding extent for layer rendering.  The layer will not be
 * rendered outside of this extent.
 * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
 * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
 * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
 * method was used.
 * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
 * visible.
 * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
 * be visible.
 * @property {import("../render.js").OrderFunction} [renderOrder] Render order. Function to be used when sorting
 * features before rendering. By default features are drawn in the order that they are created. Use
 * `null` to avoid the sort, but get an undefined draw order.
 * @property {number} [renderBuffer=100] The buffer in pixels around the viewport extent used by the
 * renderer when getting features from the vector source for the rendering or hit-detection.
 * Recommended value: the size of the largest symbol, line width or label.
 * @property {import("./VectorRenderType.js").default|string} [renderMode='vector'] Render mode for vector layers:
 *  * `'image'`: Vector layers are rendered as images. Great performance, but point symbols and
 *    texts are always rotated with the view and pixels are scaled during zoom animations.
 *  * `'vector'`: Vector layers are rendered as vectors. Most accurate rendering even during
 *    animations, but slower performance.
 * @property {import("../source/Vector.js").default} [source] Source.
 * @property {import("../PluggableMap.js").default} [map] Sets the layer as overlay on a map. The map will not manage
 * this layer in its layers collection, and the layer will be rendered on top. This is useful for
 * temporary layers. The standard way to add a layer to a map and have it managed by the map is to
 * use {@link module:ol/Map#addLayer}.
 * @property {boolean} [declutter=false] Declutter images and text. Decluttering is applied to all
 * image and text styles, and the priority is defined by the z-index of the style. Lower z-index
 * means higher priority.
 * @property {import("../style/Style.js").StyleLike} [style] Layer style. See
 * {@link module:ol/style} for default style which will be used if this is not defined.
 * @property {boolean} [updateWhileAnimating=false] When set to `true` and `renderMode`
 * is `vector`, feature batches will be recreated during animations. This means that no
 * vectors will be shown clipped, but the setting will have a performance impact for large
 * amounts of vector data. When set to `false`, batches will be recreated when no animation
 * is active.
 * @property {boolean} [updateWhileInteracting=false] When set to `true` and `renderMode`
 * is `vector`, feature batches will be recreated during interactions. See also
 * `updateWhileAnimating`.
 */

/**
 * @enum {string}
 * @private
 */
var Property = {
  RENDER_ORDER: 'renderOrder'
};
/**
 * @classdesc
 * Vector data that is rendered client-side.
 * Note that any property set in the options is set as a {@link module:ol/Object~BaseObject}
 * property on the layer object; for example, setting `title: 'My Title'` in the
 * options means that `title` is observable, and has get/set accessors.
 *
 * @api
 */

var VectorLayer =
/*@__PURE__*/
function (Layer) {
  function VectorLayer(opt_options) {
    var options = opt_options ? opt_options :
    /** @type {Options} */
    {};
    var baseOptions = (0, _obj.assign)({}, options);
    delete baseOptions.style;
    delete baseOptions.renderBuffer;
    delete baseOptions.updateWhileAnimating;
    delete baseOptions.updateWhileInteracting;
    Layer.call(this, baseOptions);
    /**
    * @private
    * @type {boolean}
    */

    this.declutter_ = options.declutter !== undefined ? options.declutter : false;
    /**
    * @type {number}
    * @private
    */

    this.renderBuffer_ = options.renderBuffer !== undefined ? options.renderBuffer : 100;
    /**
    * User provided style.
    * @type {import("../style/Style.js").StyleLike}
    * @private
    */

    this.style_ = null;
    /**
    * Style function for use within the library.
    * @type {import("../style/Style.js").StyleFunction|undefined}
    * @private
    */

    this.styleFunction_ = undefined;
    this.setStyle(options.style);
    /**
    * @type {boolean}
    * @private
    */

    this.updateWhileAnimating_ = options.updateWhileAnimating !== undefined ? options.updateWhileAnimating : false;
    /**
    * @type {boolean}
    * @private
    */

    this.updateWhileInteracting_ = options.updateWhileInteracting !== undefined ? options.updateWhileInteracting : false;
    /**
    * @private
    * @type {import("./VectorTileRenderType.js").default|string}
    */

    this.renderMode_ = options.renderMode || _VectorRenderType.default.VECTOR;
    /**
    * The layer type.
    * @protected
    * @type {import("../LayerType.js").default}
    */

    this.type = _LayerType.default.VECTOR;
  }

  if (Layer) VectorLayer.__proto__ = Layer;
  VectorLayer.prototype = Object.create(Layer && Layer.prototype);
  VectorLayer.prototype.constructor = VectorLayer;
  /**
  * @return {boolean} Declutter.
  */

  VectorLayer.prototype.getDeclutter = function getDeclutter() {
    return this.declutter_;
  };
  /**
  * @param {boolean} declutter Declutter.
  */


  VectorLayer.prototype.setDeclutter = function setDeclutter(declutter) {
    this.declutter_ = declutter;
  };
  /**
  * @return {number|undefined} Render buffer.
  */


  VectorLayer.prototype.getRenderBuffer = function getRenderBuffer() {
    return this.renderBuffer_;
  };
  /**
  * @return {function(import("../Feature.js").default, import("../Feature.js").default): number|null|undefined} Render
  *     order.
  */


  VectorLayer.prototype.getRenderOrder = function getRenderOrder() {
    return (
      /** @type {import("../render.js").OrderFunction|null|undefined} */
      this.get(Property.RENDER_ORDER)
    );
  };
  /**
  * Get the style for features.  This returns whatever was passed to the `style`
  * option at construction or to the `setStyle` method.
  * @return {import("../style/Style.js").StyleLike}
  *     Layer style.
  * @api
  */


  VectorLayer.prototype.getStyle = function getStyle() {
    return this.style_;
  };
  /**
  * Get the style function.
  * @return {import("../style/Style.js").StyleFunction|undefined} Layer style function.
  * @api
  */


  VectorLayer.prototype.getStyleFunction = function getStyleFunction() {
    return this.styleFunction_;
  };
  /**
  * @return {boolean} Whether the rendered layer should be updated while
  *     animating.
  */


  VectorLayer.prototype.getUpdateWhileAnimating = function getUpdateWhileAnimating() {
    return this.updateWhileAnimating_;
  };
  /**
  * @return {boolean} Whether the rendered layer should be updated while
  *     interacting.
  */


  VectorLayer.prototype.getUpdateWhileInteracting = function getUpdateWhileInteracting() {
    return this.updateWhileInteracting_;
  };
  /**
  * @param {import("../render.js").OrderFunction|null|undefined} renderOrder
  *     Render order.
  */


  VectorLayer.prototype.setRenderOrder = function setRenderOrder(renderOrder) {
    this.set(Property.RENDER_ORDER, renderOrder);
  };
  /**
  * Set the style for features.  This can be a single style object, an array
  * of styles, or a function that takes a feature and resolution and returns
  * an array of styles. If it is `undefined` the default style is used. If
  * it is `null` the layer has no style (a `null` style), so only features
  * that have their own styles will be rendered in the layer. See
  * {@link module:ol/style} for information on the default style.
  * @param {import("../style/Style.js").default|Array<import("../style/Style.js").default>|import("../style/Style.js").StyleFunction|null|undefined} style Layer style.
  * @api
  */


  VectorLayer.prototype.setStyle = function setStyle(style) {
    this.style_ = style !== undefined ? style : _Style.createDefaultStyle;
    this.styleFunction_ = style === null ? undefined : (0, _Style.toFunction)(this.style_);
    this.changed();
  };
  /**
  * @return {import("./VectorRenderType.js").default|string} The render mode.
  */


  VectorLayer.prototype.getRenderMode = function getRenderMode() {
    return this.renderMode_;
  };

  return VectorLayer;
}(_Layer.default);
/**
 * Return the associated {@link module:ol/source/Vector vectorsource} of the layer.
 * @function
 * @return {import("../source/Vector.js").default} Source.
 * @api
 */


VectorLayer.prototype.getSource;
var _default = VectorLayer;
exports.default = _default;
},{"../LayerType.js":"node_modules/ol/LayerType.js","./Layer.js":"node_modules/ol/layer/Layer.js","./VectorRenderType.js":"node_modules/ol/layer/VectorRenderType.js","../obj.js":"node_modules/ol/obj.js","../style/Style.js":"node_modules/ol/style/Style.js"}],"node_modules/ol/CollectionEventType.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/CollectionEventType
 */

/**
 * @enum {string}
 */
var _default = {
  /**
   * Triggered when an item is added to the collection.
   * @event module:ol/Collection.CollectionEvent#add
   * @api
   */
  ADD: 'add',

  /**
   * Triggered when an item is removed from the collection.
   * @event module:ol/Collection.CollectionEvent#remove
   * @api
   */
  REMOVE: 'remove'
};
exports.default = _default;
},{}],"node_modules/ol/Collection.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CollectionEvent = void 0;

var _AssertionError = _interopRequireDefault(require("./AssertionError.js"));

var _CollectionEventType = _interopRequireDefault(require("./CollectionEventType.js"));

var _Object = _interopRequireDefault(require("./Object.js"));

var _Event = _interopRequireDefault(require("./events/Event.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/Collection
 */

/**
 * @enum {string}
 * @private
 */
var Property = {
  LENGTH: 'length'
};
/**
 * @classdesc
 * Events emitted by {@link module:ol/Collection~Collection} instances are instances of this
 * type.
 */

var CollectionEvent =
/*@__PURE__*/
function (Event) {
  function CollectionEvent(type, opt_element) {
    Event.call(this, type);
    /**
     * The element that is added to or removed from the collection.
     * @type {*}
     * @api
     */

    this.element = opt_element;
  }

  if (Event) CollectionEvent.__proto__ = Event;
  CollectionEvent.prototype = Object.create(Event && Event.prototype);
  CollectionEvent.prototype.constructor = CollectionEvent;
  return CollectionEvent;
}(_Event.default);
/**
 * @typedef {Object} Options
 * @property {boolean} [unique=false] Disallow the same item from being added to
 * the collection twice.
 */

/**
 * @classdesc
 * An expanded version of standard JS Array, adding convenience methods for
 * manipulation. Add and remove changes to the Collection trigger a Collection
 * event. Note that this does not cover changes to the objects _within_ the
 * Collection; they trigger events on the appropriate object, not on the
 * Collection as a whole.
 *
 * @fires CollectionEvent
 *
 * @template T
 * @api
 */


exports.CollectionEvent = CollectionEvent;

var Collection =
/*@__PURE__*/
function (BaseObject) {
  function Collection(opt_array, opt_options) {
    BaseObject.call(this);
    var options = opt_options || {};
    /**
     * @private
     * @type {boolean}
     */

    this.unique_ = !!options.unique;
    /**
     * @private
     * @type {!Array<T>}
     */

    this.array_ = opt_array ? opt_array : [];

    if (this.unique_) {
      for (var i = 0, ii = this.array_.length; i < ii; ++i) {
        this.assertUnique_(this.array_[i], i);
      }
    }

    this.updateLength_();
  }

  if (BaseObject) Collection.__proto__ = BaseObject;
  Collection.prototype = Object.create(BaseObject && BaseObject.prototype);
  Collection.prototype.constructor = Collection;
  /**
   * Remove all elements from the collection.
   * @api
   */

  Collection.prototype.clear = function clear() {
    while (this.getLength() > 0) {
      this.pop();
    }
  };
  /**
   * Add elements to the collection.  This pushes each item in the provided array
   * to the end of the collection.
   * @param {!Array<T>} arr Array.
   * @return {Collection<T>} This collection.
   * @api
   */


  Collection.prototype.extend = function extend(arr) {
    for (var i = 0, ii = arr.length; i < ii; ++i) {
      this.push(arr[i]);
    }

    return this;
  };
  /**
   * Iterate over each element, calling the provided callback.
   * @param {function(T, number, Array<T>): *} f The function to call
   *     for every element. This function takes 3 arguments (the element, the
   *     index and the array). The return value is ignored.
   * @api
   */


  Collection.prototype.forEach = function forEach(f) {
    var array = this.array_;

    for (var i = 0, ii = array.length; i < ii; ++i) {
      f(array[i], i, array);
    }
  };
  /**
   * Get a reference to the underlying Array object. Warning: if the array
   * is mutated, no events will be dispatched by the collection, and the
   * collection's "length" property won't be in sync with the actual length
   * of the array.
   * @return {!Array<T>} Array.
   * @api
   */


  Collection.prototype.getArray = function getArray() {
    return this.array_;
  };
  /**
   * Get the element at the provided index.
   * @param {number} index Index.
   * @return {T} Element.
   * @api
   */


  Collection.prototype.item = function item(index) {
    return this.array_[index];
  };
  /**
   * Get the length of this collection.
   * @return {number} The length of the array.
   * @observable
   * @api
   */


  Collection.prototype.getLength = function getLength() {
    return this.get(Property.LENGTH);
  };
  /**
   * Insert an element at the provided index.
   * @param {number} index Index.
   * @param {T} elem Element.
   * @api
   */


  Collection.prototype.insertAt = function insertAt(index, elem) {
    if (this.unique_) {
      this.assertUnique_(elem);
    }

    this.array_.splice(index, 0, elem);
    this.updateLength_();
    this.dispatchEvent(new CollectionEvent(_CollectionEventType.default.ADD, elem));
  };
  /**
   * Remove the last element of the collection and return it.
   * Return `undefined` if the collection is empty.
   * @return {T|undefined} Element.
   * @api
   */


  Collection.prototype.pop = function pop() {
    return this.removeAt(this.getLength() - 1);
  };
  /**
   * Insert the provided element at the end of the collection.
   * @param {T} elem Element.
   * @return {number} New length of the collection.
   * @api
   */


  Collection.prototype.push = function push(elem) {
    if (this.unique_) {
      this.assertUnique_(elem);
    }

    var n = this.getLength();
    this.insertAt(n, elem);
    return this.getLength();
  };
  /**
   * Remove the first occurrence of an element from the collection.
   * @param {T} elem Element.
   * @return {T|undefined} The removed element or undefined if none found.
   * @api
   */


  Collection.prototype.remove = function remove(elem) {
    var arr = this.array_;

    for (var i = 0, ii = arr.length; i < ii; ++i) {
      if (arr[i] === elem) {
        return this.removeAt(i);
      }
    }

    return undefined;
  };
  /**
   * Remove the element at the provided index and return it.
   * Return `undefined` if the collection does not contain this index.
   * @param {number} index Index.
   * @return {T|undefined} Value.
   * @api
   */


  Collection.prototype.removeAt = function removeAt(index) {
    var prev = this.array_[index];
    this.array_.splice(index, 1);
    this.updateLength_();
    this.dispatchEvent(new CollectionEvent(_CollectionEventType.default.REMOVE, prev));
    return prev;
  };
  /**
   * Set the element at the provided index.
   * @param {number} index Index.
   * @param {T} elem Element.
   * @api
   */


  Collection.prototype.setAt = function setAt(index, elem) {
    var n = this.getLength();

    if (index < n) {
      if (this.unique_) {
        this.assertUnique_(elem, index);
      }

      var prev = this.array_[index];
      this.array_[index] = elem;
      this.dispatchEvent(new CollectionEvent(_CollectionEventType.default.REMOVE, prev));
      this.dispatchEvent(new CollectionEvent(_CollectionEventType.default.ADD, elem));
    } else {
      for (var j = n; j < index; ++j) {
        this.insertAt(j, undefined);
      }

      this.insertAt(index, elem);
    }
  };
  /**
   * @private
   */


  Collection.prototype.updateLength_ = function updateLength_() {
    this.set(Property.LENGTH, this.array_.length);
  };
  /**
   * @private
   * @param {T} elem Element.
   * @param {number=} opt_except Optional index to ignore.
   */


  Collection.prototype.assertUnique_ = function assertUnique_(elem, opt_except) {
    for (var i = 0, ii = this.array_.length; i < ii; ++i) {
      if (this.array_[i] === elem && i !== opt_except) {
        throw new _AssertionError.default(58);
      }
    }
  };

  return Collection;
}(_Object.default);

var _default = Collection;
exports.default = _default;
},{"./AssertionError.js":"node_modules/ol/AssertionError.js","./CollectionEventType.js":"node_modules/ol/CollectionEventType.js","./Object.js":"node_modules/ol/Object.js","./events/Event.js":"node_modules/ol/events/Event.js"}],"node_modules/ol/array.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.binarySearch = binarySearch;
exports.numberSafeCompareFunction = numberSafeCompareFunction;
exports.includes = includes;
exports.linearFindNearest = linearFindNearest;
exports.reverseSubArray = reverseSubArray;
exports.extend = extend;
exports.remove = remove;
exports.find = find;
exports.equals = equals;
exports.stableSort = stableSort;
exports.findIndex = findIndex;
exports.isSorted = isSorted;

/**
 * @module ol/array
 */

/**
 * Performs a binary search on the provided sorted list and returns the index of the item if found. If it can't be found it'll return -1.
 * https://github.com/darkskyapp/binary-search
 *
 * @param {Array<*>} haystack Items to search through.
 * @param {*} needle The item to look for.
 * @param {Function=} opt_comparator Comparator function.
 * @return {number} The index of the item if found, -1 if not.
 */
function binarySearch(haystack, needle, opt_comparator) {
  var mid, cmp;
  var comparator = opt_comparator || numberSafeCompareFunction;
  var low = 0;
  var high = haystack.length;
  var found = false;

  while (low < high) {
    /* Note that "(low + high) >>> 1" may overflow, and results in a typecast
     * to double (which gives the wrong results). */
    mid = low + (high - low >> 1);
    cmp = +comparator(haystack[mid], needle);

    if (cmp < 0.0) {
      /* Too low. */
      low = mid + 1;
    } else {
      /* Key found or too high */
      high = mid;
      found = !cmp;
    }
  }
  /* Key not found. */


  return found ? low : ~low;
}
/**
 * Compare function for array sort that is safe for numbers.
 * @param {*} a The first object to be compared.
 * @param {*} b The second object to be compared.
 * @return {number} A negative number, zero, or a positive number as the first
 *     argument is less than, equal to, or greater than the second.
 */


function numberSafeCompareFunction(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
/**
 * Whether the array contains the given object.
 * @param {Array<*>} arr The array to test for the presence of the element.
 * @param {*} obj The object for which to test.
 * @return {boolean} The object is in the array.
 */


function includes(arr, obj) {
  return arr.indexOf(obj) >= 0;
}
/**
 * @param {Array<number>} arr Array.
 * @param {number} target Target.
 * @param {number} direction 0 means return the nearest, > 0
 *    means return the largest nearest, < 0 means return the
 *    smallest nearest.
 * @return {number} Index.
 */


function linearFindNearest(arr, target, direction) {
  var n = arr.length;

  if (arr[0] <= target) {
    return 0;
  } else if (target <= arr[n - 1]) {
    return n - 1;
  } else {
    var i;

    if (direction > 0) {
      for (i = 1; i < n; ++i) {
        if (arr[i] < target) {
          return i - 1;
        }
      }
    } else if (direction < 0) {
      for (i = 1; i < n; ++i) {
        if (arr[i] <= target) {
          return i;
        }
      }
    } else {
      for (i = 1; i < n; ++i) {
        if (arr[i] == target) {
          return i;
        } else if (arr[i] < target) {
          if (arr[i - 1] - target < target - arr[i]) {
            return i - 1;
          } else {
            return i;
          }
        }
      }
    }

    return n - 1;
  }
}
/**
 * @param {Array<*>} arr Array.
 * @param {number} begin Begin index.
 * @param {number} end End index.
 */


function reverseSubArray(arr, begin, end) {
  while (begin < end) {
    var tmp = arr[begin];
    arr[begin] = arr[end];
    arr[end] = tmp;
    ++begin;
    --end;
  }
}
/**
 * @param {Array<VALUE>} arr The array to modify.
 * @param {!Array<VALUE>|VALUE} data The elements or arrays of elements to add to arr.
 * @template VALUE
 */


function extend(arr, data) {
  var extension = Array.isArray(data) ? data : [data];
  var length = extension.length;

  for (var i = 0; i < length; i++) {
    arr[arr.length] = extension[i];
  }
}
/**
 * @param {Array<VALUE>} arr The array to modify.
 * @param {VALUE} obj The element to remove.
 * @template VALUE
 * @return {boolean} If the element was removed.
 */


function remove(arr, obj) {
  var i = arr.indexOf(obj);
  var found = i > -1;

  if (found) {
    arr.splice(i, 1);
  }

  return found;
}
/**
 * @param {Array<VALUE>} arr The array to search in.
 * @param {function(VALUE, number, ?) : boolean} func The function to compare.
 * @template VALUE
 * @return {VALUE|null} The element found or null.
 */


function find(arr, func) {
  var length = arr.length >>> 0;
  var value;

  for (var i = 0; i < length; i++) {
    value = arr[i];

    if (func(value, i, arr)) {
      return value;
    }
  }

  return null;
}
/**
 * @param {Array|Uint8ClampedArray} arr1 The first array to compare.
 * @param {Array|Uint8ClampedArray} arr2 The second array to compare.
 * @return {boolean} Whether the two arrays are equal.
 */


function equals(arr1, arr2) {
  var len1 = arr1.length;

  if (len1 !== arr2.length) {
    return false;
  }

  for (var i = 0; i < len1; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}
/**
 * Sort the passed array such that the relative order of equal elements is preverved.
 * See https://en.wikipedia.org/wiki/Sorting_algorithm#Stability for details.
 * @param {Array<*>} arr The array to sort (modifies original).
 * @param {!function(*, *): number} compareFnc Comparison function.
 * @api
 */


function stableSort(arr, compareFnc) {
  var length = arr.length;
  var tmp = Array(arr.length);
  var i;

  for (i = 0; i < length; i++) {
    tmp[i] = {
      index: i,
      value: arr[i]
    };
  }

  tmp.sort(function (a, b) {
    return compareFnc(a.value, b.value) || a.index - b.index;
  });

  for (i = 0; i < arr.length; i++) {
    arr[i] = tmp[i].value;
  }
}
/**
 * @param {Array<*>} arr The array to search in.
 * @param {Function} func Comparison function.
 * @return {number} Return index.
 */


function findIndex(arr, func) {
  var index;
  var found = !arr.every(function (el, idx) {
    index = idx;
    return !func(el, idx, arr);
  });
  return found ? index : -1;
}
/**
 * @param {Array<*>} arr The array to test.
 * @param {Function=} opt_func Comparison function.
 * @param {boolean=} opt_strict Strictly sorted (default false).
 * @return {boolean} Return index.
 */


function isSorted(arr, opt_func, opt_strict) {
  var compare = opt_func || numberSafeCompareFunction;
  return arr.every(function (currentVal, index) {
    if (index === 0) {
      return true;
    }

    var res = compare(arr[index - 1], currentVal);
    return !(res > 0 || opt_strict && res === 0);
  });
}
},{}],"node_modules/ol/format/FormatType.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/format/FormatType
 */

/**
 * @enum {string}
 */
var _default = {
  ARRAY_BUFFER: 'arraybuffer',
  JSON: 'json',
  TEXT: 'text',
  XML: 'xml'
};
exports.default = _default;
},{}],"node_modules/ol/featureloader.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadFeaturesXhr = loadFeaturesXhr;
exports.xhr = xhr;

var _functions = require("./functions.js");

var _FormatType = _interopRequireDefault(require("./format/FormatType.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/featureloader
 */

/**
 * {@link module:ol/source/Vector} sources use a function of this type to
 * load features.
 *
 * This function takes an {@link module:ol/extent~Extent} representing the area to be loaded,
 * a `{number}` representing the resolution (map units per pixel) and an
 * {@link module:ol/proj/Projection} for the projection  as
 * arguments. `this` within the function is bound to the
 * {@link module:ol/source/Vector} it's called from.
 *
 * The function is responsible for loading the features and adding them to the
 * source.
 * @typedef {function(this:(import("./source/Vector").default|import("./VectorTile.js").default), import("./extent.js").Extent, number,
 *                    import("./proj/Projection.js").default)} FeatureLoader
 * @api
 */

/**
 * {@link module:ol/source/Vector} sources use a function of this type to
 * get the url to load features from.
 *
 * This function takes an {@link module:ol/extent~Extent} representing the area
 * to be loaded, a `{number}` representing the resolution (map units per pixel)
 * and an {@link module:ol/proj/Projection} for the projection  as
 * arguments and returns a `{string}` representing the URL.
 * @typedef {function(import("./extent.js").Extent, number, import("./proj/Projection.js").default): string} FeatureUrlFunction
 * @api
 */

/**
 * @param {string|FeatureUrlFunction} url Feature URL service.
 * @param {import("./format/Feature.js").default} format Feature format.
 * @param {function(this:import("./VectorTile.js").default, Array<import("./Feature.js").default>, import("./proj/Projection.js").default, import("./extent.js").Extent)|function(this:import("./source/Vector").default, Array<import("./Feature.js").default>)} success
 *     Function called with the loaded features and optionally with the data
 *     projection. Called with the vector tile or source as `this`.
 * @param {function(this:import("./VectorTile.js").default)|function(this:import("./source/Vector").default)} failure
 *     Function called when loading failed. Called with the vector tile or
 *     source as `this`.
 * @return {FeatureLoader} The feature loader.
 */
function loadFeaturesXhr(url, format, success, failure) {
  return (
    /**
     * @param {import("./extent.js").Extent} extent Extent.
     * @param {number} resolution Resolution.
     * @param {import("./proj/Projection.js").default} projection Projection.
     * @this {import("./source/Vector").default|import("./VectorTile.js").default}
     */
    function (extent, resolution, projection) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', typeof url === 'function' ? url(extent, resolution, projection) : url, true);

      if (format.getType() == _FormatType.default.ARRAY_BUFFER) {
        xhr.responseType = 'arraybuffer';
      }
      /**
       * @param {Event} event Event.
       * @private
       */


      xhr.onload = function (event) {
        // status will be 0 for file:// urls
        if (!xhr.status || xhr.status >= 200 && xhr.status < 300) {
          var type = format.getType();
          /** @type {Document|Node|Object|string|undefined} */

          var source;

          if (type == _FormatType.default.JSON || type == _FormatType.default.TEXT) {
            source = xhr.responseText;
          } else if (type == _FormatType.default.XML) {
            source = xhr.responseXML;

            if (!source) {
              source = new DOMParser().parseFromString(xhr.responseText, 'application/xml');
            }
          } else if (type == _FormatType.default.ARRAY_BUFFER) {
            source =
            /** @type {ArrayBuffer} */
            xhr.response;
          }

          if (source) {
            success.call(this, format.readFeatures(source, {
              featureProjection: projection
            }), format.readProjection(source), format.getLastExtent());
          } else {
            failure.call(this);
          }
        } else {
          failure.call(this);
        }
      }.bind(this);
      /**
       * @private
       */


      xhr.onerror = function () {
        failure.call(this);
      }.bind(this);

      xhr.send();
    }
  );
}
/**
 * Create an XHR feature loader for a `url` and `format`. The feature loader
 * loads features (with XHR), parses the features, and adds them to the
 * vector source.
 * @param {string|FeatureUrlFunction} url Feature URL service.
 * @param {import("./format/Feature.js").default} format Feature format.
 * @return {FeatureLoader} The feature loader.
 * @api
 */


function xhr(url, format) {
  return loadFeaturesXhr(url, format,
  /**
   * @param {Array<import("./Feature.js").default>} features The loaded features.
   * @param {import("./proj/Projection.js").default} dataProjection Data
   * projection.
   * @this {import("./source/Vector").default|import("./VectorTile.js").default}
   */
  function (features, dataProjection) {
    var sourceOrTile =
    /** @type {?} */
    this;

    if (typeof sourceOrTile.addFeatures === 'function') {
      /** @type {import("./source/Vector").default} */
      sourceOrTile.addFeatures(features);
    }
  },
  /* FIXME handle error */
  _functions.VOID);
}
},{"./functions.js":"node_modules/ol/functions.js","./format/FormatType.js":"node_modules/ol/format/FormatType.js"}],"node_modules/ol/loadingstrategy.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.all = all;
exports.bbox = bbox;
exports.tile = tile;

/**
 * @module ol/loadingstrategy
 */

/**
 * Strategy function for loading all features with a single request.
 * @param {import("./extent.js").Extent} extent Extent.
 * @param {number} resolution Resolution.
 * @return {Array<import("./extent.js").Extent>} Extents.
 * @api
 */
function all(extent, resolution) {
  return [[-Infinity, -Infinity, Infinity, Infinity]];
}
/**
 * Strategy function for loading features based on the view's extent and
 * resolution.
 * @param {import("./extent.js").Extent} extent Extent.
 * @param {number} resolution Resolution.
 * @return {Array<import("./extent.js").Extent>} Extents.
 * @api
 */


function bbox(extent, resolution) {
  return [extent];
}
/**
 * Creates a strategy function for loading features based on a tile grid.
 * @param {import("./tilegrid/TileGrid.js").default} tileGrid Tile grid.
 * @return {function(import("./extent.js").Extent, number): Array<import("./extent.js").Extent>} Loading strategy.
 * @api
 */


function tile(tileGrid) {
  return (
    /**
     * @param {import("./extent.js").Extent} extent Extent.
     * @param {number} resolution Resolution.
     * @return {Array<import("./extent.js").Extent>} Extents.
     */
    function (extent, resolution) {
      var z = tileGrid.getZForResolution(resolution);
      var tileRange = tileGrid.getTileRangeForExtentAndZ(extent, z);
      /** @type {Array<import("./extent.js").Extent>} */

      var extents = [];
      /** @type {import("./tilecoord.js").TileCoord} */

      var tileCoord = [z, 0, 0];

      for (tileCoord[1] = tileRange.minX; tileCoord[1] <= tileRange.maxX; ++tileCoord[1]) {
        for (tileCoord[2] = tileRange.minY; tileCoord[2] <= tileRange.maxY; ++tileCoord[2]) {
          extents.push(tileGrid.getTileCoordExtent(tileCoord));
        }
      }

      return extents;
    }
  );
}
},{}],"node_modules/ol/sphere.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDistance = getDistance;
exports.getLength = getLength;
exports.getArea = getArea;
exports.offset = offset;
exports.DEFAULT_RADIUS = void 0;

var _math = require("./math.js");

var _GeometryType = _interopRequireDefault(require("./geom/GeometryType.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Latitude/longitude spherical geodesy formulae taken from
 * http://www.movable-type.co.uk/scripts/latlong.html
 * Licensed under CC-BY-3.0.
 */

/**
 * @module ol/sphere
 */

/**
 * Object literal with options for the {@link getLength} or {@link getArea}
 * functions.
 * @typedef {Object} SphereMetricOptions
 * @property {import("./proj.js").ProjectionLike} [projection='EPSG:3857']
 * Projection of the  geometry.  By default, the geometry is assumed to be in
 * Web Mercator.
 * @property {number} [radius=6371008.8] Sphere radius.  By default, the radius of the
 * earth is used (Clarke 1866 Authalic Sphere).
 */

/**
 * The mean Earth radius (1/3 * (2a + b)) for the WGS84 ellipsoid.
 * https://en.wikipedia.org/wiki/Earth_radius#Mean_radius
 * @type {number}
 */
var DEFAULT_RADIUS = 6371008.8;
/**
 * Get the great circle distance (in meters) between two geographic coordinates.
 * @param {Array} c1 Starting coordinate.
 * @param {Array} c2 Ending coordinate.
 * @param {number=} opt_radius The sphere radius to use.  Defaults to the Earth's
 *     mean radius using the WGS84 ellipsoid.
 * @return {number} The great circle distance between the points (in meters).
 * @api
 */

exports.DEFAULT_RADIUS = DEFAULT_RADIUS;

function getDistance(c1, c2, opt_radius) {
  var radius = opt_radius || DEFAULT_RADIUS;
  var lat1 = (0, _math.toRadians)(c1[1]);
  var lat2 = (0, _math.toRadians)(c2[1]);
  var deltaLatBy2 = (lat2 - lat1) / 2;
  var deltaLonBy2 = (0, _math.toRadians)(c2[0] - c1[0]) / 2;
  var a = Math.sin(deltaLatBy2) * Math.sin(deltaLatBy2) + Math.sin(deltaLonBy2) * Math.sin(deltaLonBy2) * Math.cos(lat1) * Math.cos(lat2);
  return 2 * radius * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
/**
 * Get the cumulative great circle length of linestring coordinates (geographic).
 * @param {Array} coordinates Linestring coordinates.
 * @param {number} radius The sphere radius to use.
 * @return {number} The length (in meters).
 */


function getLengthInternal(coordinates, radius) {
  var length = 0;

  for (var i = 0, ii = coordinates.length; i < ii - 1; ++i) {
    length += getDistance(coordinates[i], coordinates[i + 1], radius);
  }

  return length;
}
/**
 * Get the spherical length of a geometry.  This length is the sum of the
 * great circle distances between coordinates.  For polygons, the length is
 * the sum of all rings.  For points, the length is zero.  For multi-part
 * geometries, the length is the sum of the length of each part.
 * @param {import("./geom/Geometry.js").default} geometry A geometry.
 * @param {SphereMetricOptions=} opt_options Options for the
 * length calculation.  By default, geometries are assumed to be in 'EPSG:3857'.
 * You can change this by providing a `projection` option.
 * @return {number} The spherical length (in meters).
 * @api
 */


function getLength(geometry, opt_options) {
  var options = opt_options || {};
  var radius = options.radius || DEFAULT_RADIUS;
  var projection = options.projection || 'EPSG:3857';
  var type = geometry.getType();

  if (type !== _GeometryType.default.GEOMETRY_COLLECTION) {
    geometry = geometry.clone().transform(projection, 'EPSG:4326');
  }

  var length = 0;
  var coordinates, coords, i, ii, j, jj;

  switch (type) {
    case _GeometryType.default.POINT:
    case _GeometryType.default.MULTI_POINT:
      {
        break;
      }

    case _GeometryType.default.LINE_STRING:
    case _GeometryType.default.LINEAR_RING:
      {
        coordinates =
        /** @type {import("./geom/SimpleGeometry.js").default} */
        geometry.getCoordinates();
        length = getLengthInternal(coordinates, radius);
        break;
      }

    case _GeometryType.default.MULTI_LINE_STRING:
    case _GeometryType.default.POLYGON:
      {
        coordinates =
        /** @type {import("./geom/SimpleGeometry.js").default} */
        geometry.getCoordinates();

        for (i = 0, ii = coordinates.length; i < ii; ++i) {
          length += getLengthInternal(coordinates[i], radius);
        }

        break;
      }

    case _GeometryType.default.MULTI_POLYGON:
      {
        coordinates =
        /** @type {import("./geom/SimpleGeometry.js").default} */
        geometry.getCoordinates();

        for (i = 0, ii = coordinates.length; i < ii; ++i) {
          coords = coordinates[i];

          for (j = 0, jj = coords.length; j < jj; ++j) {
            length += getLengthInternal(coords[j], radius);
          }
        }

        break;
      }

    case _GeometryType.default.GEOMETRY_COLLECTION:
      {
        var geometries =
        /** @type {import("./geom/GeometryCollection.js").default} */
        geometry.getGeometries();

        for (i = 0, ii = geometries.length; i < ii; ++i) {
          length += getLength(geometries[i], opt_options);
        }

        break;
      }

    default:
      {
        throw new Error('Unsupported geometry type: ' + type);
      }
  }

  return length;
}
/**
 * Returns the spherical area for a list of coordinates.
 *
 * [Reference](https://trs-new.jpl.nasa.gov/handle/2014/40409)
 * Robert. G. Chamberlain and William H. Duquette, "Some Algorithms for
 * Polygons on a Sphere", JPL Publication 07-03, Jet Propulsion
 * Laboratory, Pasadena, CA, June 2007
 *
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates List of coordinates of a linear
 * ring. If the ring is oriented clockwise, the area will be positive,
 * otherwise it will be negative.
 * @param {number} radius The sphere radius.
 * @return {number} Area (in square meters).
 */


function getAreaInternal(coordinates, radius) {
  var area = 0;
  var len = coordinates.length;
  var x1 = coordinates[len - 1][0];
  var y1 = coordinates[len - 1][1];

  for (var i = 0; i < len; i++) {
    var x2 = coordinates[i][0];
    var y2 = coordinates[i][1];
    area += (0, _math.toRadians)(x2 - x1) * (2 + Math.sin((0, _math.toRadians)(y1)) + Math.sin((0, _math.toRadians)(y2)));
    x1 = x2;
    y1 = y2;
  }

  return area * radius * radius / 2.0;
}
/**
 * Get the spherical area of a geometry.  This is the area (in meters) assuming
 * that polygon edges are segments of great circles on a sphere.
 * @param {import("./geom/Geometry.js").default} geometry A geometry.
 * @param {SphereMetricOptions=} opt_options Options for the area
 *     calculation.  By default, geometries are assumed to be in 'EPSG:3857'.
 *     You can change this by providing a `projection` option.
 * @return {number} The spherical area (in square meters).
 * @api
 */


function getArea(geometry, opt_options) {
  var options = opt_options || {};
  var radius = options.radius || DEFAULT_RADIUS;
  var projection = options.projection || 'EPSG:3857';
  var type = geometry.getType();

  if (type !== _GeometryType.default.GEOMETRY_COLLECTION) {
    geometry = geometry.clone().transform(projection, 'EPSG:4326');
  }

  var area = 0;
  var coordinates, coords, i, ii, j, jj;

  switch (type) {
    case _GeometryType.default.POINT:
    case _GeometryType.default.MULTI_POINT:
    case _GeometryType.default.LINE_STRING:
    case _GeometryType.default.MULTI_LINE_STRING:
    case _GeometryType.default.LINEAR_RING:
      {
        break;
      }

    case _GeometryType.default.POLYGON:
      {
        coordinates =
        /** @type {import("./geom/Polygon.js").default} */
        geometry.getCoordinates();
        area = Math.abs(getAreaInternal(coordinates[0], radius));

        for (i = 1, ii = coordinates.length; i < ii; ++i) {
          area -= Math.abs(getAreaInternal(coordinates[i], radius));
        }

        break;
      }

    case _GeometryType.default.MULTI_POLYGON:
      {
        coordinates =
        /** @type {import("./geom/SimpleGeometry.js").default} */
        geometry.getCoordinates();

        for (i = 0, ii = coordinates.length; i < ii; ++i) {
          coords = coordinates[i];
          area += Math.abs(getAreaInternal(coords[0], radius));

          for (j = 1, jj = coords.length; j < jj; ++j) {
            area -= Math.abs(getAreaInternal(coords[j], radius));
          }
        }

        break;
      }

    case _GeometryType.default.GEOMETRY_COLLECTION:
      {
        var geometries =
        /** @type {import("./geom/GeometryCollection.js").default} */
        geometry.getGeometries();

        for (i = 0, ii = geometries.length; i < ii; ++i) {
          area += getArea(geometries[i], opt_options);
        }

        break;
      }

    default:
      {
        throw new Error('Unsupported geometry type: ' + type);
      }
  }

  return area;
}
/**
 * Returns the coordinate at the given distance and bearing from `c1`.
 *
 * @param {import("./coordinate.js").Coordinate} c1 The origin point (`[lon, lat]` in degrees).
 * @param {number} distance The great-circle distance between the origin
 *     point and the target point.
 * @param {number} bearing The bearing (in radians).
 * @param {number=} opt_radius The sphere radius to use.  Defaults to the Earth's
 *     mean radius using the WGS84 ellipsoid.
 * @return {import("./coordinate.js").Coordinate} The target point.
 */


function offset(c1, distance, bearing, opt_radius) {
  var radius = opt_radius || DEFAULT_RADIUS;
  var lat1 = (0, _math.toRadians)(c1[1]);
  var lon1 = (0, _math.toRadians)(c1[0]);
  var dByR = distance / radius;
  var lat = Math.asin(Math.sin(lat1) * Math.cos(dByR) + Math.cos(lat1) * Math.sin(dByR) * Math.cos(bearing));
  var lon = lon1 + Math.atan2(Math.sin(bearing) * Math.sin(dByR) * Math.cos(lat1), Math.cos(dByR) - Math.sin(lat1) * Math.sin(lat));
  return [(0, _math.toDegrees)(lon), (0, _math.toDegrees)(lat)];
}
},{"./math.js":"node_modules/ol/math.js","./geom/GeometryType.js":"node_modules/ol/geom/GeometryType.js"}],"node_modules/ol/proj/Units.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.METERS_PER_UNIT = void 0;

/**
 * @module ol/proj/Units
 */

/**
 * Projection units: `'degrees'`, `'ft'`, `'m'`, `'pixels'`, `'tile-pixels'` or
 * `'us-ft'`.
 * @enum {string}
 */
var Units = {
  DEGREES: 'degrees',
  FEET: 'ft',
  METERS: 'm',
  PIXELS: 'pixels',
  TILE_PIXELS: 'tile-pixels',
  USFEET: 'us-ft'
};
/**
 * Meters per unit lookup table.
 * @const
 * @type {Object<Units, number>}
 * @api
 */

var METERS_PER_UNIT = {}; // use the radius of the Normal sphere

exports.METERS_PER_UNIT = METERS_PER_UNIT;
METERS_PER_UNIT[Units.DEGREES] = 2 * Math.PI * 6370997 / 360;
METERS_PER_UNIT[Units.FEET] = 0.3048;
METERS_PER_UNIT[Units.METERS] = 1;
METERS_PER_UNIT[Units.USFEET] = 1200 / 3937;
var _default = Units;
exports.default = _default;
},{}],"node_modules/ol/proj/Projection.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Units = require("./Units.js");

/**
 * @module ol/proj/Projection
 */

/**
 * @typedef {Object} Options
 * @property {string} code The SRS identifier code, e.g. `EPSG:4326`.
 * @property {import("./Units.js").default|string} [units] Units. Required unless a
 * proj4 projection is defined for `code`.
 * @property {import("../extent.js").Extent} [extent] The validity extent for the SRS.
 * @property {string} [axisOrientation='enu'] The axis orientation as specified in Proj4.
 * @property {boolean} [global=false] Whether the projection is valid for the whole globe.
 * @property {number} [metersPerUnit] The meters per unit for the SRS.
 * If not provided, the `units` are used to get the meters per unit from the {@link module:ol/proj/Units~METERS_PER_UNIT}
 * lookup table.
 * @property {import("../extent.js").Extent} [worldExtent] The world extent for the SRS.
 * @property {function(number, import("../coordinate.js").Coordinate):number} [getPointResolution]
 * Function to determine resolution at a point. The function is called with a
 * `{number}` view resolution and an `{import("../coordinate.js").Coordinate}` as arguments, and returns
 * the `{number}` resolution at the passed coordinate. If this is `undefined`,
 * the default {@link module:ol/proj#getPointResolution} function will be used.
 */

/**
 * @classdesc
 * Projection definition class. One of these is created for each projection
 * supported in the application and stored in the {@link module:ol/proj} namespace.
 * You can use these in applications, but this is not required, as API params
 * and options use {@link module:ol/proj~ProjectionLike} which means the simple string
 * code will suffice.
 *
 * You can use {@link module:ol/proj~get} to retrieve the object for a particular
 * projection.
 *
 * The library includes definitions for `EPSG:4326` and `EPSG:3857`, together
 * with the following aliases:
 * * `EPSG:4326`: CRS:84, urn:ogc:def:crs:EPSG:6.6:4326,
 *     urn:ogc:def:crs:OGC:1.3:CRS84, urn:ogc:def:crs:OGC:2:84,
 *     http://www.opengis.net/gml/srs/epsg.xml#4326,
 *     urn:x-ogc:def:crs:EPSG:4326
 * * `EPSG:3857`: EPSG:102100, EPSG:102113, EPSG:900913,
 *     urn:ogc:def:crs:EPSG:6.18:3:3857,
 *     http://www.opengis.net/gml/srs/epsg.xml#3857
 *
 * If you use [proj4js](https://github.com/proj4js/proj4js), aliases can
 * be added using `proj4.defs()`. After all required projection definitions are
 * added, call the {@link module:ol/proj/proj4~register} function.
 *
 * @api
 */
var Projection = function Projection(options) {
  /**
   * @private
   * @type {string}
   */
  this.code_ = options.code;
  /**
   * Units of projected coordinates. When set to `TILE_PIXELS`, a
   * `this.extent_` and `this.worldExtent_` must be configured properly for each
   * tile.
   * @private
   * @type {import("./Units.js").default}
   */

  this.units_ =
  /** @type {import("./Units.js").default} */
  options.units;
  /**
   * Validity extent of the projection in projected coordinates. For projections
   * with `TILE_PIXELS` units, this is the extent of the tile in
   * tile pixel space.
   * @private
   * @type {import("../extent.js").Extent}
   */

  this.extent_ = options.extent !== undefined ? options.extent : null;
  /**
   * Extent of the world in EPSG:4326. For projections with
   * `TILE_PIXELS` units, this is the extent of the tile in
   * projected coordinate space.
   * @private
   * @type {import("../extent.js").Extent}
   */

  this.worldExtent_ = options.worldExtent !== undefined ? options.worldExtent : null;
  /**
   * @private
   * @type {string}
   */

  this.axisOrientation_ = options.axisOrientation !== undefined ? options.axisOrientation : 'enu';
  /**
   * @private
   * @type {boolean}
   */

  this.global_ = options.global !== undefined ? options.global : false;
  /**
   * @private
   * @type {boolean}
   */

  this.canWrapX_ = !!(this.global_ && this.extent_);
  /**
   * @private
   * @type {function(number, import("../coordinate.js").Coordinate):number|undefined}
   */

  this.getPointResolutionFunc_ = options.getPointResolution;
  /**
   * @private
   * @type {import("../tilegrid/TileGrid.js").default}
   */

  this.defaultTileGrid_ = null;
  /**
   * @private
   * @type {number|undefined}
   */

  this.metersPerUnit_ = options.metersPerUnit;
};
/**
 * @return {boolean} The projection is suitable for wrapping the x-axis
 */


Projection.prototype.canWrapX = function canWrapX() {
  return this.canWrapX_;
};
/**
 * Get the code for this projection, e.g. 'EPSG:4326'.
 * @return {string} Code.
 * @api
 */


Projection.prototype.getCode = function getCode() {
  return this.code_;
};
/**
 * Get the validity extent for this projection.
 * @return {import("../extent.js").Extent} Extent.
 * @api
 */


Projection.prototype.getExtent = function getExtent() {
  return this.extent_;
};
/**
 * Get the units of this projection.
 * @return {import("./Units.js").default} Units.
 * @api
 */


Projection.prototype.getUnits = function getUnits() {
  return this.units_;
};
/**
 * Get the amount of meters per unit of this projection.If the projection is
 * not configured with `metersPerUnit` or a units identifier, the return is
 * `undefined`.
 * @return {number|undefined} Meters.
 * @api
 */


Projection.prototype.getMetersPerUnit = function getMetersPerUnit() {
  return this.metersPerUnit_ || _Units.METERS_PER_UNIT[this.units_];
};
/**
 * Get the world extent for this projection.
 * @return {import("../extent.js").Extent} Extent.
 * @api
 */


Projection.prototype.getWorldExtent = function getWorldExtent() {
  return this.worldExtent_;
};
/**
 * Get the axis orientation of this projection.
 * Example values are:
 * enu - the default easting, northing, elevation.
 * neu - northing, easting, up - useful for "lat/long" geographic coordinates,
 *   or south orientated transverse mercator.
 * wnu - westing, northing, up - some planetary coordinate systems have
 *   "west positive" coordinate systems
 * @return {string} Axis orientation.
 * @api
 */


Projection.prototype.getAxisOrientation = function getAxisOrientation() {
  return this.axisOrientation_;
};
/**
 * Is this projection a global projection which spans the whole world?
 * @return {boolean} Whether the projection is global.
 * @api
 */


Projection.prototype.isGlobal = function isGlobal() {
  return this.global_;
};
/**
 * Set if the projection is a global projection which spans the whole world
 * @param {boolean} global Whether the projection is global.
 * @api
 */


Projection.prototype.setGlobal = function setGlobal(global) {
  this.global_ = global;
  this.canWrapX_ = !!(global && this.extent_);
};
/**
 * @return {import("../tilegrid/TileGrid.js").default} The default tile grid.
 */


Projection.prototype.getDefaultTileGrid = function getDefaultTileGrid() {
  return this.defaultTileGrid_;
};
/**
 * @param {import("../tilegrid/TileGrid.js").default} tileGrid The default tile grid.
 */


Projection.prototype.setDefaultTileGrid = function setDefaultTileGrid(tileGrid) {
  this.defaultTileGrid_ = tileGrid;
};
/**
 * Set the validity extent for this projection.
 * @param {import("../extent.js").Extent} extent Extent.
 * @api
 */


Projection.prototype.setExtent = function setExtent(extent) {
  this.extent_ = extent;
  this.canWrapX_ = !!(this.global_ && extent);
};
/**
 * Set the world extent for this projection.
 * @param {import("../extent.js").Extent} worldExtent World extent
 *   [minlon, minlat, maxlon, maxlat].
 * @api
 */


Projection.prototype.setWorldExtent = function setWorldExtent(worldExtent) {
  this.worldExtent_ = worldExtent;
};
/**
 * Set the getPointResolution function (see {@link module:ol/proj~getPointResolution}
 * for this projection.
 * @param {function(number, import("../coordinate.js").Coordinate):number} func Function
 * @api
 */


Projection.prototype.setGetPointResolution = function setGetPointResolution(func) {
  this.getPointResolutionFunc_ = func;
};
/**
 * Get the custom point resolution function for this projection (if set).
 * @return {function(number, import("../coordinate.js").Coordinate):number|undefined} The custom point
 * resolution function (if set).
 */


Projection.prototype.getPointResolutionFunc = function getPointResolutionFunc() {
  return this.getPointResolutionFunc_;
};

var _default = Projection;
exports.default = _default;
},{"./Units.js":"node_modules/ol/proj/Units.js"}],"node_modules/ol/proj/epsg3857.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromEPSG4326 = fromEPSG4326;
exports.toEPSG4326 = toEPSG4326;
exports.PROJECTIONS = exports.WORLD_EXTENT = exports.EXTENT = exports.HALF_SIZE = exports.RADIUS = void 0;

var _math = require("../math.js");

var _Projection = _interopRequireDefault(require("./Projection.js"));

var _Units = _interopRequireDefault(require("./Units.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/proj/epsg3857
 */

/**
 * Radius of WGS84 sphere
 *
 * @const
 * @type {number}
 */
var RADIUS = 6378137;
/**
 * @const
 * @type {number}
 */

exports.RADIUS = RADIUS;
var HALF_SIZE = Math.PI * RADIUS;
/**
 * @const
 * @type {import("../extent.js").Extent}
 */

exports.HALF_SIZE = HALF_SIZE;
var EXTENT = [-HALF_SIZE, -HALF_SIZE, HALF_SIZE, HALF_SIZE];
/**
 * @const
 * @type {import("../extent.js").Extent}
 */

exports.EXTENT = EXTENT;
var WORLD_EXTENT = [-180, -85, 180, 85];
/**
 * @classdesc
 * Projection object for web/spherical Mercator (EPSG:3857).
 */

exports.WORLD_EXTENT = WORLD_EXTENT;

var EPSG3857Projection =
/*@__PURE__*/
function (Projection) {
  function EPSG3857Projection(code) {
    Projection.call(this, {
      code: code,
      units: _Units.default.METERS,
      extent: EXTENT,
      global: true,
      worldExtent: WORLD_EXTENT,
      getPointResolution: function (resolution, point) {
        return resolution / (0, _math.cosh)(point[1] / RADIUS);
      }
    });
  }

  if (Projection) EPSG3857Projection.__proto__ = Projection;
  EPSG3857Projection.prototype = Object.create(Projection && Projection.prototype);
  EPSG3857Projection.prototype.constructor = EPSG3857Projection;
  return EPSG3857Projection;
}(_Projection.default);
/**
 * Projections equal to EPSG:3857.
 *
 * @const
 * @type {Array<import("./Projection.js").default>}
 */


var PROJECTIONS = [new EPSG3857Projection('EPSG:3857'), new EPSG3857Projection('EPSG:102100'), new EPSG3857Projection('EPSG:102113'), new EPSG3857Projection('EPSG:900913'), new EPSG3857Projection('urn:ogc:def:crs:EPSG:6.18:3:3857'), new EPSG3857Projection('urn:ogc:def:crs:EPSG::3857'), new EPSG3857Projection('http://www.opengis.net/gml/srs/epsg.xml#3857')];
/**
 * Transformation from EPSG:4326 to EPSG:3857.
 *
 * @param {Array<number>} input Input array of coordinate values.
 * @param {Array<number>=} opt_output Output array of coordinate values.
 * @param {number=} opt_dimension Dimension (default is `2`).
 * @return {Array<number>} Output array of coordinate values.
 */

exports.PROJECTIONS = PROJECTIONS;

function fromEPSG4326(input, opt_output, opt_dimension) {
  var length = input.length;
  var dimension = opt_dimension > 1 ? opt_dimension : 2;
  var output = opt_output;

  if (output === undefined) {
    if (dimension > 2) {
      // preserve values beyond second dimension
      output = input.slice();
    } else {
      output = new Array(length);
    }
  }

  var halfSize = HALF_SIZE;

  for (var i = 0; i < length; i += dimension) {
    output[i] = halfSize * input[i] / 180;
    var y = RADIUS * Math.log(Math.tan(Math.PI * (input[i + 1] + 90) / 360));

    if (y > halfSize) {
      y = halfSize;
    } else if (y < -halfSize) {
      y = -halfSize;
    }

    output[i + 1] = y;
  }

  return output;
}
/**
 * Transformation from EPSG:3857 to EPSG:4326.
 *
 * @param {Array<number>} input Input array of coordinate values.
 * @param {Array<number>=} opt_output Output array of coordinate values.
 * @param {number=} opt_dimension Dimension (default is `2`).
 * @return {Array<number>} Output array of coordinate values.
 */


function toEPSG4326(input, opt_output, opt_dimension) {
  var length = input.length;
  var dimension = opt_dimension > 1 ? opt_dimension : 2;
  var output = opt_output;

  if (output === undefined) {
    if (dimension > 2) {
      // preserve values beyond second dimension
      output = input.slice();
    } else {
      output = new Array(length);
    }
  }

  for (var i = 0; i < length; i += dimension) {
    output[i] = 180 * input[i] / HALF_SIZE;
    output[i + 1] = 360 * Math.atan(Math.exp(input[i + 1] / RADIUS)) / Math.PI - 90;
  }

  return output;
}
},{"../math.js":"node_modules/ol/math.js","./Projection.js":"node_modules/ol/proj/Projection.js","./Units.js":"node_modules/ol/proj/Units.js"}],"node_modules/ol/proj/epsg4326.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PROJECTIONS = exports.METERS_PER_UNIT = exports.EXTENT = exports.RADIUS = void 0;

var _Projection = _interopRequireDefault(require("./Projection.js"));

var _Units = _interopRequireDefault(require("./Units.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/proj/epsg4326
 */

/**
 * Semi-major radius of the WGS84 ellipsoid.
 *
 * @const
 * @type {number}
 */
var RADIUS = 6378137;
/**
 * Extent of the EPSG:4326 projection which is the whole world.
 *
 * @const
 * @type {import("../extent.js").Extent}
 */

exports.RADIUS = RADIUS;
var EXTENT = [-180, -90, 180, 90];
/**
 * @const
 * @type {number}
 */

exports.EXTENT = EXTENT;
var METERS_PER_UNIT = Math.PI * RADIUS / 180;
/**
 * @classdesc
 * Projection object for WGS84 geographic coordinates (EPSG:4326).
 *
 * Note that OpenLayers does not strictly comply with the EPSG definition.
 * The EPSG registry defines 4326 as a CRS for Latitude,Longitude (y,x).
 * OpenLayers treats EPSG:4326 as a pseudo-projection, with x,y coordinates.
 */

exports.METERS_PER_UNIT = METERS_PER_UNIT;

var EPSG4326Projection =
/*@__PURE__*/
function (Projection) {
  function EPSG4326Projection(code, opt_axisOrientation) {
    Projection.call(this, {
      code: code,
      units: _Units.default.DEGREES,
      extent: EXTENT,
      axisOrientation: opt_axisOrientation,
      global: true,
      metersPerUnit: METERS_PER_UNIT,
      worldExtent: EXTENT
    });
  }

  if (Projection) EPSG4326Projection.__proto__ = Projection;
  EPSG4326Projection.prototype = Object.create(Projection && Projection.prototype);
  EPSG4326Projection.prototype.constructor = EPSG4326Projection;
  return EPSG4326Projection;
}(_Projection.default);
/**
 * Projections equal to EPSG:4326.
 *
 * @const
 * @type {Array<import("./Projection.js").default>}
 */


var PROJECTIONS = [new EPSG4326Projection('CRS:84'), new EPSG4326Projection('EPSG:4326', 'neu'), new EPSG4326Projection('urn:ogc:def:crs:EPSG::4326', 'neu'), new EPSG4326Projection('urn:ogc:def:crs:EPSG:6.6:4326', 'neu'), new EPSG4326Projection('urn:ogc:def:crs:OGC:1.3:CRS84'), new EPSG4326Projection('urn:ogc:def:crs:OGC:2:84'), new EPSG4326Projection('http://www.opengis.net/gml/srs/epsg.xml#4326', 'neu'), new EPSG4326Projection('urn:x-ogc:def:crs:EPSG:4326', 'neu')];
exports.PROJECTIONS = PROJECTIONS;
},{"./Projection.js":"node_modules/ol/proj/Projection.js","./Units.js":"node_modules/ol/proj/Units.js"}],"node_modules/ol/proj/projections.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = clear;
exports.get = get;
exports.add = add;

/**
 * @module ol/proj/projections
 */

/**
 * @type {Object<string, import("./Projection.js").default>}
 */
var cache = {};
/**
 * Clear the projections cache.
 */

function clear() {
  cache = {};
}
/**
 * Get a cached projection by code.
 * @param {string} code The code for the projection.
 * @return {import("./Projection.js").default} The projection (if cached).
 */


function get(code) {
  return cache[code] || null;
}
/**
 * Add a projection to the cache.
 * @param {string} code The projection code.
 * @param {import("./Projection.js").default} projection The projection to cache.
 */


function add(code, projection) {
  cache[code] = projection;
}
},{}],"node_modules/ol/proj/transforms.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = clear;
exports.add = add;
exports.remove = remove;
exports.get = get;

var _obj = require("../obj.js");

/**
 * @module ol/proj/transforms
 */

/**
 * @private
 * @type {!Object<string, Object<string, import("../proj.js").TransformFunction>>}
 */
var transforms = {};
/**
 * Clear the transform cache.
 */

function clear() {
  transforms = {};
}
/**
 * Registers a conversion function to convert coordinates from the source
 * projection to the destination projection.
 *
 * @param {import("./Projection.js").default} source Source.
 * @param {import("./Projection.js").default} destination Destination.
 * @param {import("../proj.js").TransformFunction} transformFn Transform.
 */


function add(source, destination, transformFn) {
  var sourceCode = source.getCode();
  var destinationCode = destination.getCode();

  if (!(sourceCode in transforms)) {
    transforms[sourceCode] = {};
  }

  transforms[sourceCode][destinationCode] = transformFn;
}
/**
 * Unregisters the conversion function to convert coordinates from the source
 * projection to the destination projection.  This method is used to clean up
 * cached transforms during testing.
 *
 * @param {import("./Projection.js").default} source Source projection.
 * @param {import("./Projection.js").default} destination Destination projection.
 * @return {import("../proj.js").TransformFunction} transformFn The unregistered transform.
 */


function remove(source, destination) {
  var sourceCode = source.getCode();
  var destinationCode = destination.getCode();
  var transform = transforms[sourceCode][destinationCode];
  delete transforms[sourceCode][destinationCode];

  if ((0, _obj.isEmpty)(transforms[sourceCode])) {
    delete transforms[sourceCode];
  }

  return transform;
}
/**
 * Get a transform given a source code and a destination code.
 * @param {string} sourceCode The code for the source projection.
 * @param {string} destinationCode The code for the destination projection.
 * @return {import("../proj.js").TransformFunction|undefined} The transform function (if found).
 */


function get(sourceCode, destinationCode) {
  var transform;

  if (sourceCode in transforms && destinationCode in transforms[sourceCode]) {
    transform = transforms[sourceCode][destinationCode];
  }

  return transform;
}
},{"../obj.js":"node_modules/ol/obj.js"}],"node_modules/ol/proj.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cloneTransform = cloneTransform;
exports.identityTransform = identityTransform;
exports.addProjection = addProjection;
exports.addProjections = addProjections;
exports.get = get;
exports.getPointResolution = getPointResolution;
exports.addEquivalentProjections = addEquivalentProjections;
exports.addEquivalentTransforms = addEquivalentTransforms;
exports.clearAllProjections = clearAllProjections;
exports.createProjection = createProjection;
exports.createTransformFromCoordinateTransform = createTransformFromCoordinateTransform;
exports.addCoordinateTransforms = addCoordinateTransforms;
exports.fromLonLat = fromLonLat;
exports.toLonLat = toLonLat;
exports.equivalent = equivalent;
exports.getTransformFromProjections = getTransformFromProjections;
exports.getTransform = getTransform;
exports.transform = transform;
exports.transformExtent = transformExtent;
exports.transformWithProjections = transformWithProjections;
exports.addCommon = addCommon;
Object.defineProperty(exports, "Projection", {
  enumerable: true,
  get: function () {
    return _Projection.default;
  }
});
Object.defineProperty(exports, "METERS_PER_UNIT", {
  enumerable: true,
  get: function () {
    return _Units.METERS_PER_UNIT;
  }
});

var _sphere = require("./sphere.js");

var _extent = require("./extent.js");

var _math = require("./math.js");

var _epsg = require("./proj/epsg3857.js");

var _epsg2 = require("./proj/epsg4326.js");

var _Projection = _interopRequireDefault(require("./proj/Projection.js"));

var _Units = _interopRequireWildcard(require("./proj/Units.js"));

var projections = _interopRequireWildcard(require("./proj/projections.js"));

var _transforms = require("./proj/transforms.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/proj
 */

/**
 * The ol/proj module stores:
 * * a list of {@link module:ol/proj/Projection}
 * objects, one for each projection supported by the application
 * * a list of transform functions needed to convert coordinates in one projection
 * into another.
 *
 * The static functions are the methods used to maintain these.
 * Each transform function can handle not only simple coordinate pairs, but also
 * large arrays of coordinates such as vector geometries.
 *
 * When loaded, the library adds projection objects for EPSG:4326 (WGS84
 * geographic coordinates) and EPSG:3857 (Web or Spherical Mercator, as used
 * for example by Bing Maps or OpenStreetMap), together with the relevant
 * transform functions.
 *
 * Additional transforms may be added by using the http://proj4js.org/
 * library (version 2.2 or later). You can use the full build supplied by
 * Proj4js, or create a custom build to support those projections you need; see
 * the Proj4js website for how to do this. You also need the Proj4js definitions
 * for the required projections. These definitions can be obtained from
 * https://epsg.io/, and are a JS function, so can be loaded in a script
 * tag (as in the examples) or pasted into your application.
 *
 * After all required projection definitions are added to proj4's registry (by
 * using `proj4.defs()`), simply call `register(proj4)` from the `ol/proj/proj4`
 * package. Existing transforms are not changed by this function. See
 * examples/wms-image-custom-proj for an example of this.
 *
 * Additional projection definitions can be registered with `proj4.defs()` any
 * time. Just make sure to call `register(proj4)` again; for example, with user-supplied data where you don't
 * know in advance what projections are needed, you can initially load minimal
 * support and then load whichever are requested.
 *
 * Note that Proj4js does not support projection extents. If you want to add
 * one for creating default tile grids, you can add it after the Projection
 * object has been created with `setExtent`, for example,
 * `get('EPSG:1234').setExtent(extent)`.
 *
 * In addition to Proj4js support, any transform functions can be added with
 * {@link module:ol/proj~addCoordinateTransforms}. To use this, you must first create
 * a {@link module:ol/proj/Projection} object for the new projection and add it with
 * {@link module:ol/proj~addProjection}. You can then add the forward and inverse
 * functions with {@link module:ol/proj~addCoordinateTransforms}. See
 * examples/wms-custom-proj for an example of this.
 *
 * Note that if no transforms are needed and you only need to define the
 * projection, just add a {@link module:ol/proj/Projection} with
 * {@link module:ol/proj~addProjection}. See examples/wms-no-proj for an example of
 * this.
 */

/**
 * A projection as {@link module:ol/proj/Projection}, SRS identifier
 * string or undefined.
 * @typedef {Projection|string|undefined} ProjectionLike
 * @api
 */

/**
 * A transform function accepts an array of input coordinate values, an optional
 * output array, and an optional dimension (default should be 2).  The function
 * transforms the input coordinate values, populates the output array, and
 * returns the output array.
 *
 * @typedef {function(Array<number>, Array<number>=, number=): Array<number>} TransformFunction
 * @api
 */

/**
 * @param {Array<number>} input Input coordinate array.
 * @param {Array<number>=} opt_output Output array of coordinate values.
 * @param {number=} opt_dimension Dimension.
 * @return {Array<number>} Output coordinate array (new array, same coordinate
 *     values).
 */
function cloneTransform(input, opt_output, opt_dimension) {
  var output;

  if (opt_output !== undefined) {
    for (var i = 0, ii = input.length; i < ii; ++i) {
      opt_output[i] = input[i];
    }

    output = opt_output;
  } else {
    output = input.slice();
  }

  return output;
}
/**
 * @param {Array<number>} input Input coordinate array.
 * @param {Array<number>=} opt_output Output array of coordinate values.
 * @param {number=} opt_dimension Dimension.
 * @return {Array<number>} Input coordinate array (same array as input).
 */


function identityTransform(input, opt_output, opt_dimension) {
  if (opt_output !== undefined && input !== opt_output) {
    for (var i = 0, ii = input.length; i < ii; ++i) {
      opt_output[i] = input[i];
    }

    input = opt_output;
  }

  return input;
}
/**
 * Add a Projection object to the list of supported projections that can be
 * looked up by their code.
 *
 * @param {Projection} projection Projection instance.
 * @api
 */


function addProjection(projection) {
  projections.add(projection.getCode(), projection);
  (0, _transforms.add)(projection, projection, cloneTransform);
}
/**
 * @param {Array<Projection>} projections Projections.
 */


function addProjections(projections) {
  projections.forEach(addProjection);
}
/**
 * Fetches a Projection object for the code specified.
 *
 * @param {ProjectionLike} projectionLike Either a code string which is
 *     a combination of authority and identifier such as "EPSG:4326", or an
 *     existing projection object, or undefined.
 * @return {Projection} Projection object, or null if not in list.
 * @api
 */


function get(projectionLike) {
  return typeof projectionLike === 'string' ? projections.get(
  /** @type {string} */
  projectionLike) :
  /** @type {Projection} */
  projectionLike || null;
}
/**
 * Get the resolution of the point in degrees or distance units.
 * For projections with degrees as the unit this will simply return the
 * provided resolution. For other projections the point resolution is
 * by default estimated by transforming the 'point' pixel to EPSG:4326,
 * measuring its width and height on the normal sphere,
 * and taking the average of the width and height.
 * A custom function can be provided for a specific projection, either
 * by setting the `getPointResolution` option in the
 * {@link module:ol/proj/Projection~Projection} constructor or by using
 * {@link module:ol/proj/Projection~Projection#setGetPointResolution} to change an existing
 * projection object.
 * @param {ProjectionLike} projection The projection.
 * @param {number} resolution Nominal resolution in projection units.
 * @param {import("./coordinate.js").Coordinate} point Point to find adjusted resolution at.
 * @param {Units=} opt_units Units to get the point resolution in.
 * Default is the projection's units.
 * @return {number} Point resolution.
 * @api
 */


function getPointResolution(projection, resolution, point, opt_units) {
  projection = get(projection);
  var pointResolution;
  var getter = projection.getPointResolutionFunc();

  if (getter) {
    pointResolution = getter(resolution, point);
  } else {
    var units = projection.getUnits();

    if (units == _Units.default.DEGREES && !opt_units || opt_units == _Units.default.DEGREES) {
      pointResolution = resolution;
    } else {
      // Estimate point resolution by transforming the center pixel to EPSG:4326,
      // measuring its width and height on the normal sphere, and taking the
      // average of the width and height.
      var toEPSG4326 = getTransformFromProjections(projection, get('EPSG:4326'));
      var vertices = [point[0] - resolution / 2, point[1], point[0] + resolution / 2, point[1], point[0], point[1] - resolution / 2, point[0], point[1] + resolution / 2];
      vertices = toEPSG4326(vertices, vertices, 2);
      var width = (0, _sphere.getDistance)(vertices.slice(0, 2), vertices.slice(2, 4));
      var height = (0, _sphere.getDistance)(vertices.slice(4, 6), vertices.slice(6, 8));
      pointResolution = (width + height) / 2;
      var metersPerUnit = opt_units ? _Units.METERS_PER_UNIT[opt_units] : projection.getMetersPerUnit();

      if (metersPerUnit !== undefined) {
        pointResolution /= metersPerUnit;
      }
    }
  }

  return pointResolution;
}
/**
 * Registers transformation functions that don't alter coordinates. Those allow
 * to transform between projections with equal meaning.
 *
 * @param {Array<Projection>} projections Projections.
 * @api
 */


function addEquivalentProjections(projections) {
  addProjections(projections);
  projections.forEach(function (source) {
    projections.forEach(function (destination) {
      if (source !== destination) {
        (0, _transforms.add)(source, destination, cloneTransform);
      }
    });
  });
}
/**
 * Registers transformation functions to convert coordinates in any projection
 * in projection1 to any projection in projection2.
 *
 * @param {Array<Projection>} projections1 Projections with equal
 *     meaning.
 * @param {Array<Projection>} projections2 Projections with equal
 *     meaning.
 * @param {TransformFunction} forwardTransform Transformation from any
 *   projection in projection1 to any projection in projection2.
 * @param {TransformFunction} inverseTransform Transform from any projection
 *   in projection2 to any projection in projection1..
 */


function addEquivalentTransforms(projections1, projections2, forwardTransform, inverseTransform) {
  projections1.forEach(function (projection1) {
    projections2.forEach(function (projection2) {
      (0, _transforms.add)(projection1, projection2, forwardTransform);
      (0, _transforms.add)(projection2, projection1, inverseTransform);
    });
  });
}
/**
 * Clear all cached projections and transforms.
 */


function clearAllProjections() {
  projections.clear();
  (0, _transforms.clear)();
}
/**
 * @param {Projection|string|undefined} projection Projection.
 * @param {string} defaultCode Default code.
 * @return {Projection} Projection.
 */


function createProjection(projection, defaultCode) {
  if (!projection) {
    return get(defaultCode);
  } else if (typeof projection === 'string') {
    return get(projection);
  } else {
    return (
      /** @type {Projection} */
      projection
    );
  }
}
/**
 * Creates a {@link module:ol/proj~TransformFunction} from a simple 2D coordinate transform
 * function.
 * @param {function(import("./coordinate.js").Coordinate): import("./coordinate.js").Coordinate} coordTransform Coordinate
 *     transform.
 * @return {TransformFunction} Transform function.
 */


function createTransformFromCoordinateTransform(coordTransform) {
  return (
    /**
     * @param {Array<number>} input Input.
     * @param {Array<number>=} opt_output Output.
     * @param {number=} opt_dimension Dimension.
     * @return {Array<number>} Output.
     */
    function (input, opt_output, opt_dimension) {
      var length = input.length;
      var dimension = opt_dimension !== undefined ? opt_dimension : 2;
      var output = opt_output !== undefined ? opt_output : new Array(length);

      for (var i = 0; i < length; i += dimension) {
        var point = coordTransform([input[i], input[i + 1]]);
        output[i] = point[0];
        output[i + 1] = point[1];

        for (var j = dimension - 1; j >= 2; --j) {
          output[i + j] = input[i + j];
        }
      }

      return output;
    }
  );
}
/**
 * Registers coordinate transform functions to convert coordinates between the
 * source projection and the destination projection.
 * The forward and inverse functions convert coordinate pairs; this function
 * converts these into the functions used internally which also handle
 * extents and coordinate arrays.
 *
 * @param {ProjectionLike} source Source projection.
 * @param {ProjectionLike} destination Destination projection.
 * @param {function(import("./coordinate.js").Coordinate): import("./coordinate.js").Coordinate} forward The forward transform
 *     function (that is, from the source projection to the destination
 *     projection) that takes a {@link module:ol/coordinate~Coordinate} as argument and returns
 *     the transformed {@link module:ol/coordinate~Coordinate}.
 * @param {function(import("./coordinate.js").Coordinate): import("./coordinate.js").Coordinate} inverse The inverse transform
 *     function (that is, from the destination projection to the source
 *     projection) that takes a {@link module:ol/coordinate~Coordinate} as argument and returns
 *     the transformed {@link module:ol/coordinate~Coordinate}.
 * @api
 */


function addCoordinateTransforms(source, destination, forward, inverse) {
  var sourceProj = get(source);
  var destProj = get(destination);
  (0, _transforms.add)(sourceProj, destProj, createTransformFromCoordinateTransform(forward));
  (0, _transforms.add)(destProj, sourceProj, createTransformFromCoordinateTransform(inverse));
}
/**
 * Transforms a coordinate from longitude/latitude to a different projection.
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate as longitude and latitude, i.e.
 *     an array with longitude as 1st and latitude as 2nd element.
 * @param {ProjectionLike=} opt_projection Target projection. The
 *     default is Web Mercator, i.e. 'EPSG:3857'.
 * @return {import("./coordinate.js").Coordinate} Coordinate projected to the target projection.
 * @api
 */


function fromLonLat(coordinate, opt_projection) {
  return transform(coordinate, 'EPSG:4326', opt_projection !== undefined ? opt_projection : 'EPSG:3857');
}
/**
 * Transforms a coordinate to longitude/latitude.
 * @param {import("./coordinate.js").Coordinate} coordinate Projected coordinate.
 * @param {ProjectionLike=} opt_projection Projection of the coordinate.
 *     The default is Web Mercator, i.e. 'EPSG:3857'.
 * @return {import("./coordinate.js").Coordinate} Coordinate as longitude and latitude, i.e. an array
 *     with longitude as 1st and latitude as 2nd element.
 * @api
 */


function toLonLat(coordinate, opt_projection) {
  var lonLat = transform(coordinate, opt_projection !== undefined ? opt_projection : 'EPSG:3857', 'EPSG:4326');
  var lon = lonLat[0];

  if (lon < -180 || lon > 180) {
    lonLat[0] = (0, _math.modulo)(lon + 180, 360) - 180;
  }

  return lonLat;
}
/**
 * Checks if two projections are the same, that is every coordinate in one
 * projection does represent the same geographic point as the same coordinate in
 * the other projection.
 *
 * @param {Projection} projection1 Projection 1.
 * @param {Projection} projection2 Projection 2.
 * @return {boolean} Equivalent.
 * @api
 */


function equivalent(projection1, projection2) {
  if (projection1 === projection2) {
    return true;
  }

  var equalUnits = projection1.getUnits() === projection2.getUnits();

  if (projection1.getCode() === projection2.getCode()) {
    return equalUnits;
  } else {
    var transformFunc = getTransformFromProjections(projection1, projection2);
    return transformFunc === cloneTransform && equalUnits;
  }
}
/**
 * Searches in the list of transform functions for the function for converting
 * coordinates from the source projection to the destination projection.
 *
 * @param {Projection} sourceProjection Source Projection object.
 * @param {Projection} destinationProjection Destination Projection
 *     object.
 * @return {TransformFunction} Transform function.
 */


function getTransformFromProjections(sourceProjection, destinationProjection) {
  var sourceCode = sourceProjection.getCode();
  var destinationCode = destinationProjection.getCode();
  var transformFunc = (0, _transforms.get)(sourceCode, destinationCode);

  if (!transformFunc) {
    transformFunc = identityTransform;
  }

  return transformFunc;
}
/**
 * Given the projection-like objects, searches for a transformation
 * function to convert a coordinates array from the source projection to the
 * destination projection.
 *
 * @param {ProjectionLike} source Source.
 * @param {ProjectionLike} destination Destination.
 * @return {TransformFunction} Transform function.
 * @api
 */


function getTransform(source, destination) {
  var sourceProjection = get(source);
  var destinationProjection = get(destination);
  return getTransformFromProjections(sourceProjection, destinationProjection);
}
/**
 * Transforms a coordinate from source projection to destination projection.
 * This returns a new coordinate (and does not modify the original).
 *
 * See {@link module:ol/proj~transformExtent} for extent transformation.
 * See the transform method of {@link module:ol/geom/Geometry~Geometry} and its
 * subclasses for geometry transforms.
 *
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 * @param {ProjectionLike} source Source projection-like.
 * @param {ProjectionLike} destination Destination projection-like.
 * @return {import("./coordinate.js").Coordinate} Coordinate.
 * @api
 */


function transform(coordinate, source, destination) {
  var transformFunc = getTransform(source, destination);
  return transformFunc(coordinate, undefined, coordinate.length);
}
/**
 * Transforms an extent from source projection to destination projection.  This
 * returns a new extent (and does not modify the original).
 *
 * @param {import("./extent.js").Extent} extent The extent to transform.
 * @param {ProjectionLike} source Source projection-like.
 * @param {ProjectionLike} destination Destination projection-like.
 * @return {import("./extent.js").Extent} The transformed extent.
 * @api
 */


function transformExtent(extent, source, destination) {
  var transformFunc = getTransform(source, destination);
  return (0, _extent.applyTransform)(extent, transformFunc);
}
/**
 * Transforms the given point to the destination projection.
 *
 * @param {import("./coordinate.js").Coordinate} point Point.
 * @param {Projection} sourceProjection Source projection.
 * @param {Projection} destinationProjection Destination projection.
 * @return {import("./coordinate.js").Coordinate} Point.
 */


function transformWithProjections(point, sourceProjection, destinationProjection) {
  var transformFunc = getTransformFromProjections(sourceProjection, destinationProjection);
  return transformFunc(point);
}
/**
 * Add transforms to and from EPSG:4326 and EPSG:3857.  This function is called
 * by when this module is executed and should only need to be called again after
 * `clearAllProjections()` is called (e.g. in tests).
 */


function addCommon() {
  // Add transformations that don't alter coordinates to convert within set of
  // projections with equal meaning.
  addEquivalentProjections(_epsg.PROJECTIONS);
  addEquivalentProjections(_epsg2.PROJECTIONS); // Add transformations to convert EPSG:4326 like coordinates to EPSG:3857 like
  // coordinates and back.

  addEquivalentTransforms(_epsg2.PROJECTIONS, _epsg.PROJECTIONS, _epsg.fromEPSG4326, _epsg.toEPSG4326);
}

addCommon();
},{"./sphere.js":"node_modules/ol/sphere.js","./extent.js":"node_modules/ol/extent.js","./math.js":"node_modules/ol/math.js","./proj/epsg3857.js":"node_modules/ol/proj/epsg3857.js","./proj/epsg4326.js":"node_modules/ol/proj/epsg4326.js","./proj/Projection.js":"node_modules/ol/proj/Projection.js","./proj/Units.js":"node_modules/ol/proj/Units.js","./proj/projections.js":"node_modules/ol/proj/projections.js","./proj/transforms.js":"node_modules/ol/proj/transforms.js"}],"node_modules/ol/source/Source.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("../util.js");

var _Object = _interopRequireDefault(require("../Object.js"));

var _proj = require("../proj.js");

var _State = _interopRequireDefault(require("./State.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/source/Source
 */

/**
 * A function that returns a string or an array of strings representing source
 * attributions.
 *
 * @typedef {function(import("../PluggableMap.js").FrameState): (string|Array<string>)} Attribution
 */

/**
 * A type that can be used to provide attribution information for data sources.
 *
 * It represents either
 * * a simple string (e.g. `'© Acme Inc.'`)
 * * an array of simple strings (e.g. `['© Acme Inc.', '© Bacme Inc.']`)
 * * a function that returns a string or array of strings (`{@link module:ol/source/Source~Attribution}`)
 *
 * @typedef {string|Array<string>|Attribution} AttributionLike
 */

/**
 * @typedef {Object} Options
 * @property {AttributionLike} [attributions]
 * @property {boolean} [attributionsCollapsible=true] Attributions are collapsible.
 * @property {import("../proj.js").ProjectionLike} projection
 * @property {SourceState} [state='ready']
 * @property {boolean} [wrapX=false]
 */

/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Base class for {@link module:ol/layer/Layer~Layer} sources.
 *
 * A generic `change` event is triggered when the state of the source changes.
 * @abstract
 * @api
 */
var Source =
/*@__PURE__*/
function (BaseObject) {
  function Source(options) {
    BaseObject.call(this);
    /**
     * @private
     * @type {import("../proj/Projection.js").default}
     */

    this.projection_ = (0, _proj.get)(options.projection);
    /**
     * @private
     * @type {?Attribution}
     */

    this.attributions_ = adaptAttributions(options.attributions);
    /**
     * @private
     * @type {boolean}
     */

    this.attributionsCollapsible_ = options.attributionsCollapsible !== undefined ? options.attributionsCollapsible : true;
    /**
     * This source is currently loading data. Sources that defer loading to the
     * map's tile queue never set this to `true`.
     * @type {boolean}
     */

    this.loading = false;
    /**
     * @private
     * @type {SourceState}
     */

    this.state_ = options.state !== undefined ? options.state : _State.default.READY;
    /**
     * @private
     * @type {boolean}
     */

    this.wrapX_ = options.wrapX !== undefined ? options.wrapX : false;
  }

  if (BaseObject) Source.__proto__ = BaseObject;
  Source.prototype = Object.create(BaseObject && BaseObject.prototype);
  Source.prototype.constructor = Source;
  /**
   * Get the attribution function for the source.
   * @return {?Attribution} Attribution function.
   */

  Source.prototype.getAttributions = function getAttributions() {
    return this.attributions_;
  };
  /**
   * @return {boolean} Aattributions are collapsible.
   */


  Source.prototype.getAttributionsCollapsible = function getAttributionsCollapsible() {
    return this.attributionsCollapsible_;
  };
  /**
   * Get the projection of the source.
   * @return {import("../proj/Projection.js").default} Projection.
   * @api
   */


  Source.prototype.getProjection = function getProjection() {
    return this.projection_;
  };
  /**
   * @abstract
   * @return {Array<number>|undefined} Resolutions.
   */


  Source.prototype.getResolutions = function getResolutions() {
    return (0, _util.abstract)();
  };
  /**
   * Get the state of the source, see {@link module:ol/source/State~State} for possible states.
   * @return {SourceState} State.
   * @api
   */


  Source.prototype.getState = function getState() {
    return this.state_;
  };
  /**
   * @return {boolean|undefined} Wrap X.
   */


  Source.prototype.getWrapX = function getWrapX() {
    return this.wrapX_;
  };
  /**
   * Refreshes the source and finally dispatches a 'change' event.
   * @api
   */


  Source.prototype.refresh = function refresh() {
    this.changed();
  };
  /**
   * Set the attributions of the source.
   * @param {AttributionLike|undefined} attributions Attributions.
   *     Can be passed as `string`, `Array<string>`, `{@link module:ol/source/Source~Attribution}`,
   *     or `undefined`.
   * @api
   */


  Source.prototype.setAttributions = function setAttributions(attributions) {
    this.attributions_ = adaptAttributions(attributions);
    this.changed();
  };
  /**
   * Set the state of the source.
   * @param {SourceState} state State.
   * @protected
   */


  Source.prototype.setState = function setState(state) {
    this.state_ = state;
    this.changed();
  };

  return Source;
}(_Object.default);
/**
 * Turns the attributions option into an attributions function.
 * @param {AttributionLike|undefined} attributionLike The attribution option.
 * @return {?Attribution} An attribution function (or null).
 */


function adaptAttributions(attributionLike) {
  if (!attributionLike) {
    return null;
  }

  if (Array.isArray(attributionLike)) {
    return function (frameState) {
      return attributionLike;
    };
  }

  if (typeof attributionLike === 'function') {
    return attributionLike;
  }

  return function (frameState) {
    return [attributionLike];
  };
}

var _default = Source;
exports.default = _default;
},{"../util.js":"node_modules/ol/util.js","../Object.js":"node_modules/ol/Object.js","../proj.js":"node_modules/ol/proj.js","./State.js":"node_modules/ol/source/State.js"}],"node_modules/ol/source/VectorEventType.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/source/VectorEventType
 */

/**
 * @enum {string}
 */
var _default = {
  /**
   * Triggered when a feature is added to the source.
   * @event ol/source/Vector.VectorSourceEvent#addfeature
   * @api
   */
  ADDFEATURE: 'addfeature',

  /**
   * Triggered when a feature is updated.
   * @event ol/source/Vector.VectorSourceEvent#changefeature
   * @api
   */
  CHANGEFEATURE: 'changefeature',

  /**
   * Triggered when the clear method is called on the source.
   * @event ol/source/Vector.VectorSourceEvent#clear
   * @api
   */
  CLEAR: 'clear',

  /**
   * Triggered when a feature is removed from the source.
   * See {@link module:ol/source/Vector#clear source.clear()} for exceptions.
   * @event ol/source/Vector.VectorSourceEvent#removefeature
   * @api
   */
  REMOVEFEATURE: 'removefeature'
};
exports.default = _default;
},{}],"node_modules/quickselect/quickselect.js":[function(require,module,exports) {
var define;
var global = arguments[3];
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.quickselect = factory());
}(this, (function () { 'use strict';

function quickselect(arr, k, left, right, compare) {
    quickselectStep(arr, k, left || 0, right || (arr.length - 1), compare || defaultCompare);
}

function quickselectStep(arr, k, left, right, compare) {

    while (right > left) {
        if (right - left > 600) {
            var n = right - left + 1;
            var m = k - left + 1;
            var z = Math.log(n);
            var s = 0.5 * Math.exp(2 * z / 3);
            var sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
            var newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
            var newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
            quickselectStep(arr, k, newLeft, newRight, compare);
        }

        var t = arr[k];
        var i = left;
        var j = right;

        swap(arr, left, k);
        if (compare(arr[right], t) > 0) swap(arr, left, right);

        while (i < j) {
            swap(arr, i, j);
            i++;
            j--;
            while (compare(arr[i], t) < 0) i++;
            while (compare(arr[j], t) > 0) j--;
        }

        if (compare(arr[left], t) === 0) swap(arr, left, j);
        else {
            j++;
            swap(arr, j, right);
        }

        if (j <= k) left = j + 1;
        if (k <= j) right = j - 1;
    }
}

function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}

return quickselect;

})));

},{}],"node_modules/rbush/index.js":[function(require,module,exports) {
'use strict';

module.exports = rbush;
module.exports.default = rbush;

var quickselect = require('quickselect');

function rbush(maxEntries, format) {
    if (!(this instanceof rbush)) return new rbush(maxEntries, format);

    // max entries in a node is 9 by default; min node fill is 40% for best performance
    this._maxEntries = Math.max(4, maxEntries || 9);
    this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4));

    if (format) {
        this._initFormat(format);
    }

    this.clear();
}

rbush.prototype = {

    all: function () {
        return this._all(this.data, []);
    },

    search: function (bbox) {

        var node = this.data,
            result = [],
            toBBox = this.toBBox;

        if (!intersects(bbox, node)) return result;

        var nodesToSearch = [],
            i, len, child, childBBox;

        while (node) {
            for (i = 0, len = node.children.length; i < len; i++) {

                child = node.children[i];
                childBBox = node.leaf ? toBBox(child) : child;

                if (intersects(bbox, childBBox)) {
                    if (node.leaf) result.push(child);
                    else if (contains(bbox, childBBox)) this._all(child, result);
                    else nodesToSearch.push(child);
                }
            }
            node = nodesToSearch.pop();
        }

        return result;
    },

    collides: function (bbox) {

        var node = this.data,
            toBBox = this.toBBox;

        if (!intersects(bbox, node)) return false;

        var nodesToSearch = [],
            i, len, child, childBBox;

        while (node) {
            for (i = 0, len = node.children.length; i < len; i++) {

                child = node.children[i];
                childBBox = node.leaf ? toBBox(child) : child;

                if (intersects(bbox, childBBox)) {
                    if (node.leaf || contains(bbox, childBBox)) return true;
                    nodesToSearch.push(child);
                }
            }
            node = nodesToSearch.pop();
        }

        return false;
    },

    load: function (data) {
        if (!(data && data.length)) return this;

        if (data.length < this._minEntries) {
            for (var i = 0, len = data.length; i < len; i++) {
                this.insert(data[i]);
            }
            return this;
        }

        // recursively build the tree with the given data from scratch using OMT algorithm
        var node = this._build(data.slice(), 0, data.length - 1, 0);

        if (!this.data.children.length) {
            // save as is if tree is empty
            this.data = node;

        } else if (this.data.height === node.height) {
            // split root if trees have the same height
            this._splitRoot(this.data, node);

        } else {
            if (this.data.height < node.height) {
                // swap trees if inserted one is bigger
                var tmpNode = this.data;
                this.data = node;
                node = tmpNode;
            }

            // insert the small tree into the large tree at appropriate level
            this._insert(node, this.data.height - node.height - 1, true);
        }

        return this;
    },

    insert: function (item) {
        if (item) this._insert(item, this.data.height - 1);
        return this;
    },

    clear: function () {
        this.data = createNode([]);
        return this;
    },

    remove: function (item, equalsFn) {
        if (!item) return this;

        var node = this.data,
            bbox = this.toBBox(item),
            path = [],
            indexes = [],
            i, parent, index, goingUp;

        // depth-first iterative tree traversal
        while (node || path.length) {

            if (!node) { // go up
                node = path.pop();
                parent = path[path.length - 1];
                i = indexes.pop();
                goingUp = true;
            }

            if (node.leaf) { // check current node
                index = findItem(item, node.children, equalsFn);

                if (index !== -1) {
                    // item found, remove the item and condense tree upwards
                    node.children.splice(index, 1);
                    path.push(node);
                    this._condense(path);
                    return this;
                }
            }

            if (!goingUp && !node.leaf && contains(node, bbox)) { // go down
                path.push(node);
                indexes.push(i);
                i = 0;
                parent = node;
                node = node.children[0];

            } else if (parent) { // go right
                i++;
                node = parent.children[i];
                goingUp = false;

            } else node = null; // nothing found
        }

        return this;
    },

    toBBox: function (item) { return item; },

    compareMinX: compareNodeMinX,
    compareMinY: compareNodeMinY,

    toJSON: function () { return this.data; },

    fromJSON: function (data) {
        this.data = data;
        return this;
    },

    _all: function (node, result) {
        var nodesToSearch = [];
        while (node) {
            if (node.leaf) result.push.apply(result, node.children);
            else nodesToSearch.push.apply(nodesToSearch, node.children);

            node = nodesToSearch.pop();
        }
        return result;
    },

    _build: function (items, left, right, height) {

        var N = right - left + 1,
            M = this._maxEntries,
            node;

        if (N <= M) {
            // reached leaf level; return leaf
            node = createNode(items.slice(left, right + 1));
            calcBBox(node, this.toBBox);
            return node;
        }

        if (!height) {
            // target height of the bulk-loaded tree
            height = Math.ceil(Math.log(N) / Math.log(M));

            // target number of root entries to maximize storage utilization
            M = Math.ceil(N / Math.pow(M, height - 1));
        }

        node = createNode([]);
        node.leaf = false;
        node.height = height;

        // split the items into M mostly square tiles

        var N2 = Math.ceil(N / M),
            N1 = N2 * Math.ceil(Math.sqrt(M)),
            i, j, right2, right3;

        multiSelect(items, left, right, N1, this.compareMinX);

        for (i = left; i <= right; i += N1) {

            right2 = Math.min(i + N1 - 1, right);

            multiSelect(items, i, right2, N2, this.compareMinY);

            for (j = i; j <= right2; j += N2) {

                right3 = Math.min(j + N2 - 1, right2);

                // pack each entry recursively
                node.children.push(this._build(items, j, right3, height - 1));
            }
        }

        calcBBox(node, this.toBBox);

        return node;
    },

    _chooseSubtree: function (bbox, node, level, path) {

        var i, len, child, targetNode, area, enlargement, minArea, minEnlargement;

        while (true) {
            path.push(node);

            if (node.leaf || path.length - 1 === level) break;

            minArea = minEnlargement = Infinity;

            for (i = 0, len = node.children.length; i < len; i++) {
                child = node.children[i];
                area = bboxArea(child);
                enlargement = enlargedArea(bbox, child) - area;

                // choose entry with the least area enlargement
                if (enlargement < minEnlargement) {
                    minEnlargement = enlargement;
                    minArea = area < minArea ? area : minArea;
                    targetNode = child;

                } else if (enlargement === minEnlargement) {
                    // otherwise choose one with the smallest area
                    if (area < minArea) {
                        minArea = area;
                        targetNode = child;
                    }
                }
            }

            node = targetNode || node.children[0];
        }

        return node;
    },

    _insert: function (item, level, isNode) {

        var toBBox = this.toBBox,
            bbox = isNode ? item : toBBox(item),
            insertPath = [];

        // find the best node for accommodating the item, saving all nodes along the path too
        var node = this._chooseSubtree(bbox, this.data, level, insertPath);

        // put the item into the node
        node.children.push(item);
        extend(node, bbox);

        // split on node overflow; propagate upwards if necessary
        while (level >= 0) {
            if (insertPath[level].children.length > this._maxEntries) {
                this._split(insertPath, level);
                level--;
            } else break;
        }

        // adjust bboxes along the insertion path
        this._adjustParentBBoxes(bbox, insertPath, level);
    },

    // split overflowed node into two
    _split: function (insertPath, level) {

        var node = insertPath[level],
            M = node.children.length,
            m = this._minEntries;

        this._chooseSplitAxis(node, m, M);

        var splitIndex = this._chooseSplitIndex(node, m, M);

        var newNode = createNode(node.children.splice(splitIndex, node.children.length - splitIndex));
        newNode.height = node.height;
        newNode.leaf = node.leaf;

        calcBBox(node, this.toBBox);
        calcBBox(newNode, this.toBBox);

        if (level) insertPath[level - 1].children.push(newNode);
        else this._splitRoot(node, newNode);
    },

    _splitRoot: function (node, newNode) {
        // split root node
        this.data = createNode([node, newNode]);
        this.data.height = node.height + 1;
        this.data.leaf = false;
        calcBBox(this.data, this.toBBox);
    },

    _chooseSplitIndex: function (node, m, M) {

        var i, bbox1, bbox2, overlap, area, minOverlap, minArea, index;

        minOverlap = minArea = Infinity;

        for (i = m; i <= M - m; i++) {
            bbox1 = distBBox(node, 0, i, this.toBBox);
            bbox2 = distBBox(node, i, M, this.toBBox);

            overlap = intersectionArea(bbox1, bbox2);
            area = bboxArea(bbox1) + bboxArea(bbox2);

            // choose distribution with minimum overlap
            if (overlap < minOverlap) {
                minOverlap = overlap;
                index = i;

                minArea = area < minArea ? area : minArea;

            } else if (overlap === minOverlap) {
                // otherwise choose distribution with minimum area
                if (area < minArea) {
                    minArea = area;
                    index = i;
                }
            }
        }

        return index;
    },

    // sorts node children by the best axis for split
    _chooseSplitAxis: function (node, m, M) {

        var compareMinX = node.leaf ? this.compareMinX : compareNodeMinX,
            compareMinY = node.leaf ? this.compareMinY : compareNodeMinY,
            xMargin = this._allDistMargin(node, m, M, compareMinX),
            yMargin = this._allDistMargin(node, m, M, compareMinY);

        // if total distributions margin value is minimal for x, sort by minX,
        // otherwise it's already sorted by minY
        if (xMargin < yMargin) node.children.sort(compareMinX);
    },

    // total margin of all possible split distributions where each node is at least m full
    _allDistMargin: function (node, m, M, compare) {

        node.children.sort(compare);

        var toBBox = this.toBBox,
            leftBBox = distBBox(node, 0, m, toBBox),
            rightBBox = distBBox(node, M - m, M, toBBox),
            margin = bboxMargin(leftBBox) + bboxMargin(rightBBox),
            i, child;

        for (i = m; i < M - m; i++) {
            child = node.children[i];
            extend(leftBBox, node.leaf ? toBBox(child) : child);
            margin += bboxMargin(leftBBox);
        }

        for (i = M - m - 1; i >= m; i--) {
            child = node.children[i];
            extend(rightBBox, node.leaf ? toBBox(child) : child);
            margin += bboxMargin(rightBBox);
        }

        return margin;
    },

    _adjustParentBBoxes: function (bbox, path, level) {
        // adjust bboxes along the given tree path
        for (var i = level; i >= 0; i--) {
            extend(path[i], bbox);
        }
    },

    _condense: function (path) {
        // go through the path, removing empty nodes and updating bboxes
        for (var i = path.length - 1, siblings; i >= 0; i--) {
            if (path[i].children.length === 0) {
                if (i > 0) {
                    siblings = path[i - 1].children;
                    siblings.splice(siblings.indexOf(path[i]), 1);

                } else this.clear();

            } else calcBBox(path[i], this.toBBox);
        }
    },

    _initFormat: function (format) {
        // data format (minX, minY, maxX, maxY accessors)

        // uses eval-type function compilation instead of just accepting a toBBox function
        // because the algorithms are very sensitive to sorting functions performance,
        // so they should be dead simple and without inner calls

        var compareArr = ['return a', ' - b', ';'];

        this.compareMinX = new Function('a', 'b', compareArr.join(format[0]));
        this.compareMinY = new Function('a', 'b', compareArr.join(format[1]));

        this.toBBox = new Function('a',
            'return {minX: a' + format[0] +
            ', minY: a' + format[1] +
            ', maxX: a' + format[2] +
            ', maxY: a' + format[3] + '};');
    }
};

function findItem(item, items, equalsFn) {
    if (!equalsFn) return items.indexOf(item);

    for (var i = 0; i < items.length; i++) {
        if (equalsFn(item, items[i])) return i;
    }
    return -1;
}

// calculate node's bbox from bboxes of its children
function calcBBox(node, toBBox) {
    distBBox(node, 0, node.children.length, toBBox, node);
}

// min bounding rectangle of node children from k to p-1
function distBBox(node, k, p, toBBox, destNode) {
    if (!destNode) destNode = createNode(null);
    destNode.minX = Infinity;
    destNode.minY = Infinity;
    destNode.maxX = -Infinity;
    destNode.maxY = -Infinity;

    for (var i = k, child; i < p; i++) {
        child = node.children[i];
        extend(destNode, node.leaf ? toBBox(child) : child);
    }

    return destNode;
}

function extend(a, b) {
    a.minX = Math.min(a.minX, b.minX);
    a.minY = Math.min(a.minY, b.minY);
    a.maxX = Math.max(a.maxX, b.maxX);
    a.maxY = Math.max(a.maxY, b.maxY);
    return a;
}

function compareNodeMinX(a, b) { return a.minX - b.minX; }
function compareNodeMinY(a, b) { return a.minY - b.minY; }

function bboxArea(a)   { return (a.maxX - a.minX) * (a.maxY - a.minY); }
function bboxMargin(a) { return (a.maxX - a.minX) + (a.maxY - a.minY); }

function enlargedArea(a, b) {
    return (Math.max(b.maxX, a.maxX) - Math.min(b.minX, a.minX)) *
           (Math.max(b.maxY, a.maxY) - Math.min(b.minY, a.minY));
}

function intersectionArea(a, b) {
    var minX = Math.max(a.minX, b.minX),
        minY = Math.max(a.minY, b.minY),
        maxX = Math.min(a.maxX, b.maxX),
        maxY = Math.min(a.maxY, b.maxY);

    return Math.max(0, maxX - minX) *
           Math.max(0, maxY - minY);
}

function contains(a, b) {
    return a.minX <= b.minX &&
           a.minY <= b.minY &&
           b.maxX <= a.maxX &&
           b.maxY <= a.maxY;
}

function intersects(a, b) {
    return b.minX <= a.maxX &&
           b.minY <= a.maxY &&
           b.maxX >= a.minX &&
           b.maxY >= a.minY;
}

function createNode(children) {
    return {
        children: children,
        height: 1,
        leaf: true,
        minX: Infinity,
        minY: Infinity,
        maxX: -Infinity,
        maxY: -Infinity
    };
}

// sort an array so that items come in groups of n unsorted items, with groups sorted between each other;
// combines selection algorithm with binary divide & conquer approach

function multiSelect(arr, left, right, n, compare) {
    var stack = [left, right],
        mid;

    while (stack.length) {
        right = stack.pop();
        left = stack.pop();

        if (right - left <= n) continue;

        mid = left + Math.ceil((right - left) / n / 2) * n;
        quickselect(arr, mid, left, right, compare);

        stack.push(left, mid, mid, right);
    }
}

},{"quickselect":"node_modules/quickselect/quickselect.js"}],"node_modules/ol/structs/RBush.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("../util.js");

var _rbush = _interopRequireDefault(require("rbush"));

var _extent = require("../extent.js");

var _obj = require("../obj.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/structs/RBush
 */

/**
 * @typedef {Object} Entry
 * @property {number} minX
 * @property {number} minY
 * @property {number} maxX
 * @property {number} maxY
 * @property {Object} [value]
 */

/**
 * @classdesc
 * Wrapper around the RBush by Vladimir Agafonkin.
 * See https://github.com/mourner/rbush.
 *
 * @template T
 */
var RBush = function RBush(opt_maxEntries) {
  /**
   * @private
   */
  this.rbush_ = (0, _rbush.default)(opt_maxEntries, undefined);
  /**
   * A mapping between the objects added to this rbush wrapper
   * and the objects that are actually added to the internal rbush.
   * @private
   * @type {Object<string, Entry>}
   */

  this.items_ = {};
};
/**
 * Insert a value into the RBush.
 * @param {import("../extent.js").Extent} extent Extent.
 * @param {T} value Value.
 */


RBush.prototype.insert = function insert(extent, value) {
  /** @type {Entry} */
  var item = {
    minX: extent[0],
    minY: extent[1],
    maxX: extent[2],
    maxY: extent[3],
    value: value
  };
  this.rbush_.insert(item);
  this.items_[(0, _util.getUid)(value)] = item;
};
/**
 * Bulk-insert values into the RBush.
 * @param {Array<import("../extent.js").Extent>} extents Extents.
 * @param {Array<T>} values Values.
 */


RBush.prototype.load = function load(extents, values) {
  var items = new Array(values.length);

  for (var i = 0, l = values.length; i < l; i++) {
    var extent = extents[i];
    var value = values[i];
    /** @type {Entry} */

    var item = {
      minX: extent[0],
      minY: extent[1],
      maxX: extent[2],
      maxY: extent[3],
      value: value
    };
    items[i] = item;
    this.items_[(0, _util.getUid)(value)] = item;
  }

  this.rbush_.load(items);
};
/**
 * Remove a value from the RBush.
 * @param {T} value Value.
 * @return {boolean} Removed.
 */


RBush.prototype.remove = function remove(value) {
  var uid = (0, _util.getUid)(value); // get the object in which the value was wrapped when adding to the
  // internal rbush. then use that object to do the removal.

  var item = this.items_[uid];
  delete this.items_[uid];
  return this.rbush_.remove(item) !== null;
};
/**
 * Update the extent of a value in the RBush.
 * @param {import("../extent.js").Extent} extent Extent.
 * @param {T} value Value.
 */


RBush.prototype.update = function update(extent, value) {
  var item = this.items_[(0, _util.getUid)(value)];
  var bbox = [item.minX, item.minY, item.maxX, item.maxY];

  if (!(0, _extent.equals)(bbox, extent)) {
    this.remove(value);
    this.insert(extent, value);
  }
};
/**
 * Return all values in the RBush.
 * @return {Array<T>} All.
 */


RBush.prototype.getAll = function getAll() {
  var items = this.rbush_.all();
  return items.map(function (item) {
    return item.value;
  });
};
/**
 * Return all values in the given extent.
 * @param {import("../extent.js").Extent} extent Extent.
 * @return {Array<T>} All in extent.
 */


RBush.prototype.getInExtent = function getInExtent(extent) {
  /** @type {Entry} */
  var bbox = {
    minX: extent[0],
    minY: extent[1],
    maxX: extent[2],
    maxY: extent[3]
  };
  var items = this.rbush_.search(bbox);
  return items.map(function (item) {
    return item.value;
  });
};
/**
 * Calls a callback function with each value in the tree.
 * If the callback returns a truthy value, this value is returned without
 * checking the rest of the tree.
 * @param {function(this: S, T): *} callback Callback.
 * @param {S=} opt_this The object to use as `this` in `callback`.
 * @return {*} Callback return value.
 * @template S
 */


RBush.prototype.forEach = function forEach(callback, opt_this) {
  return this.forEach_(this.getAll(), callback, opt_this);
};
/**
 * Calls a callback function with each value in the provided extent.
 * @param {import("../extent.js").Extent} extent Extent.
 * @param {function(this: S, T): *} callback Callback.
 * @param {S=} opt_this The object to use as `this` in `callback`.
 * @return {*} Callback return value.
 * @template S
 */


RBush.prototype.forEachInExtent = function forEachInExtent(extent, callback, opt_this) {
  return this.forEach_(this.getInExtent(extent), callback, opt_this);
};
/**
 * @param {Array<T>} values Values.
 * @param {function(this: S, T): *} callback Callback.
 * @param {S=} opt_this The object to use as `this` in `callback`.
 * @private
 * @return {*} Callback return value.
 * @template S
 */


RBush.prototype.forEach_ = function forEach_(values, callback, opt_this) {
  var result;

  for (var i = 0, l = values.length; i < l; i++) {
    result = callback.call(opt_this, values[i]);

    if (result) {
      return result;
    }
  }

  return result;
};
/**
 * @return {boolean} Is empty.
 */


RBush.prototype.isEmpty = function isEmpty$1() {
  return (0, _obj.isEmpty)(this.items_);
};
/**
 * Remove all values from the RBush.
 */


RBush.prototype.clear = function clear() {
  this.rbush_.clear();
  this.items_ = {};
};
/**
 * @param {import("../extent.js").Extent=} opt_extent Extent.
 * @return {import("../extent.js").Extent} Extent.
 */


RBush.prototype.getExtent = function getExtent(opt_extent) {
  var data = this.rbush_.toJSON();
  return (0, _extent.createOrUpdate)(data.minX, data.minY, data.maxX, data.maxY, opt_extent);
};
/**
 * @param {RBush} rbush R-Tree.
 */


RBush.prototype.concat = function concat(rbush) {
  this.rbush_.load(rbush.rbush_.all());

  for (var i in rbush.items_) {
    this.items_[i] = rbush.items_[i];
  }
};

var _default = RBush;
exports.default = _default;
},{"../util.js":"node_modules/ol/util.js","rbush":"node_modules/rbush/index.js","../extent.js":"node_modules/ol/extent.js","../obj.js":"node_modules/ol/obj.js"}],"node_modules/ol/source/Vector.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.VectorSourceEvent = void 0;

var _util = require("../util.js");

var _Collection = _interopRequireDefault(require("../Collection.js"));

var _CollectionEventType = _interopRequireDefault(require("../CollectionEventType.js"));

var _ObjectEventType = _interopRequireDefault(require("../ObjectEventType.js"));

var _array = require("../array.js");

var _asserts = require("../asserts.js");

var _events = require("../events.js");

var _Event = _interopRequireDefault(require("../events/Event.js"));

var _EventType = _interopRequireDefault(require("../events/EventType.js"));

var _extent = require("../extent.js");

var _featureloader = require("../featureloader.js");

var _functions = require("../functions.js");

var _loadingstrategy = require("../loadingstrategy.js");

var _obj = require("../obj.js");

var _Source = _interopRequireDefault(require("./Source.js"));

var _State = _interopRequireDefault(require("./State.js"));

var _VectorEventType = _interopRequireDefault(require("./VectorEventType.js"));

var _RBush = _interopRequireDefault(require("../structs/RBush.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/source/Vector
 */

/**
 * A function that takes an {@link module:ol/extent~Extent} and a resolution as arguments, and
 * returns an array of {@link module:ol/extent~Extent} with the extents to load. Usually this
 * is one of the standard {@link module:ol/loadingstrategy} strategies.
 *
 * @typedef {function(import("../extent.js").Extent, number): Array<import("../extent.js").Extent>} LoadingStrategy
 * @api
 */

/**
 * @classdesc
 * Events emitted by {@link module:ol/source/Vector} instances are instances of this
 * type.
 */
var VectorSourceEvent =
/*@__PURE__*/
function (Event) {
  function VectorSourceEvent(type, opt_feature) {
    Event.call(this, type);
    /**
     * The feature being added or removed.
     * @type {import("../Feature.js").default|undefined}
     * @api
     */

    this.feature = opt_feature;
  }

  if (Event) VectorSourceEvent.__proto__ = Event;
  VectorSourceEvent.prototype = Object.create(Event && Event.prototype);
  VectorSourceEvent.prototype.constructor = VectorSourceEvent;
  return VectorSourceEvent;
}(_Event.default);
/**
 * @typedef {Object} Options
 * @property {import("./Source.js").AttributionLike} [attributions] Attributions.
 * @property {Array<import("../Feature.js").default>|Collection<import("../Feature.js").default>} [features]
 * Features. If provided as {@link module:ol/Collection}, the features in the source
 * and the collection will stay in sync.
 * @property {import("../format/Feature.js").default} [format] The feature format used by the XHR
 * feature loader when `url` is set. Required if `url` is set, otherwise ignored.
 * @property {import("../featureloader.js").FeatureLoader} [loader]
 * The loader function used to load features, from a remote source for example.
 * If this is not set and `url` is set, the source will create and use an XHR
 * feature loader.
 *
 * Example:
 *
 * ```js
 * import {Vector} from 'ol/source';
 * import {GeoJSON} from 'ol/format';
 * import {bbox} from 'ol/loadingstrategy';
 *
 * var vectorSource = new Vector({
 *   format: new GeoJSON(),
 *   loader: function(extent, resolution, projection) {
 *      var proj = projection.getCode();
 *      var url = 'https://ahocevar.com/geoserver/wfs?service=WFS&' +
 *          'version=1.1.0&request=GetFeature&typename=osm:water_areas&' +
 *          'outputFormat=application/json&srsname=' + proj + '&' +
 *          'bbox=' + extent.join(',') + ',' + proj;
 *      var xhr = new XMLHttpRequest();
 *      xhr.open('GET', url);
 *      var onError = function() {
 *        vectorSource.removeLoadedExtent(extent);
 *      }
 *      xhr.onerror = onError;
 *      xhr.onload = function() {
 *        if (xhr.status == 200) {
 *          vectorSource.addFeatures(
 *              vectorSource.getFormat().readFeatures(xhr.responseText));
 *        } else {
 *          onError();
 *        }
 *      }
 *      xhr.send();
 *    },
 *    strategy: bbox
 *  });
 * ```
 * @property {boolean} [overlaps=true] This source may have overlapping geometries.
 * Setting this to `false` (e.g. for sources with polygons that represent administrative
 * boundaries or TopoJSON sources) allows the renderer to optimise fill and
 * stroke operations.
 * @property {LoadingStrategy} [strategy] The loading strategy to use.
 * By default an {@link module:ol/loadingstrategy~all}
 * strategy is used, a one-off strategy which loads all features at once.
 * @property {string|import("../featureloader.js").FeatureUrlFunction} [url]
 * Setting this option instructs the source to load features using an XHR loader
 * (see {@link module:ol/featureloader~xhr}). Use a `string` and an
 * {@link module:ol/loadingstrategy~all} for a one-off download of all features from
 * the given URL. Use a {@link module:ol/featureloader~FeatureUrlFunction} to generate the url with
 * other loading strategies.
 * Requires `format` to be set as well.
 * When default XHR feature loader is provided, the features will
 * be transformed from the data projection to the view projection
 * during parsing. If your remote data source does not advertise its projection
 * properly, this transformation will be incorrect. For some formats, the
 * default projection (usually EPSG:4326) can be overridden by setting the
 * dataProjection constructor option on the format.
 * Note that if a source contains non-feature data, such as a GeoJSON geometry
 * or a KML NetworkLink, these will be ignored. Use a custom loader to load these.
 * @property {boolean} [useSpatialIndex=true]
 * By default, an RTree is used as spatial index. When features are removed and
 * added frequently, and the total number of features is low, setting this to
 * `false` may improve performance.
 *
 * Note that
 * {@link module:ol/source/Vector~VectorSource#getFeaturesInExtent},
 * {@link module:ol/source/Vector~VectorSource#getClosestFeatureToCoordinate} and
 * {@link module:ol/source/Vector~VectorSource#getExtent} cannot be used when `useSpatialIndex` is
 * set to `false`, and {@link module:ol/source/Vector~VectorSource#forEachFeatureInExtent} will loop
 * through all features.
 *
 * When set to `false`, the features will be maintained in an
 * {@link module:ol/Collection}, which can be retrieved through
 * {@link module:ol/source/Vector~VectorSource#getFeaturesCollection}.
 * @property {boolean} [wrapX=true] Wrap the world horizontally. For vector editing across the
 * -180° and 180° meridians to work properly, this should be set to `false`. The
 * resulting geometry coordinates will then exceed the world bounds.
 */

/**
 * @classdesc
 * Provides a source of features for vector layers. Vector features provided
 * by this source are suitable for editing. See {@link module:ol/source/VectorTile~VectorTile} for
 * vector data that is optimized for rendering.
 *
 * @fires ol/source/Vector.VectorSourceEvent
 * @api
 */


exports.VectorSourceEvent = VectorSourceEvent;

var VectorSource =
/*@__PURE__*/
function (Source) {
  function VectorSource(opt_options) {
    var options = opt_options || {};
    Source.call(this, {
      attributions: options.attributions,
      projection: undefined,
      state: _State.default.READY,
      wrapX: options.wrapX !== undefined ? options.wrapX : true
    });
    /**
     * @private
     * @type {import("../featureloader.js").FeatureLoader}
     */

    this.loader_ = _functions.VOID;
    /**
     * @private
     * @type {import("../format/Feature.js").default|undefined}
     */

    this.format_ = options.format;
    /**
     * @private
     * @type {boolean}
     */

    this.overlaps_ = options.overlaps == undefined ? true : options.overlaps;
    /**
     * @private
     * @type {string|import("../featureloader.js").FeatureUrlFunction|undefined}
     */

    this.url_ = options.url;

    if (options.loader !== undefined) {
      this.loader_ = options.loader;
    } else if (this.url_ !== undefined) {
      (0, _asserts.assert)(this.format_, 7); // `format` must be set when `url` is set
      // create a XHR feature loader for "url" and "format"

      this.loader_ = (0, _featureloader.xhr)(this.url_,
      /** @type {import("../format/Feature.js").default} */
      this.format_);
    }
    /**
     * @private
     * @type {LoadingStrategy}
     */


    this.strategy_ = options.strategy !== undefined ? options.strategy : _loadingstrategy.all;
    var useSpatialIndex = options.useSpatialIndex !== undefined ? options.useSpatialIndex : true;
    /**
     * @private
     * @type {RBush<import("../Feature.js").default>}
     */

    this.featuresRtree_ = useSpatialIndex ? new _RBush.default() : null;
    /**
     * @private
     * @type {RBush<{extent: import("../extent.js").Extent}>}
     */

    this.loadedExtentsRtree_ = new _RBush.default();
    /**
     * @private
     * @type {!Object<string, import("../Feature.js").default>}
     */

    this.nullGeometryFeatures_ = {};
    /**
     * A lookup of features by id (the return from feature.getId()).
     * @private
     * @type {!Object<string, import("../Feature.js").default>}
     */

    this.idIndex_ = {};
    /**
     * A lookup of features without id (keyed by getUid(feature)).
     * @private
     * @type {!Object<string, import("../Feature.js").default>}
     */

    this.undefIdIndex_ = {};
    /**
     * @private
     * @type {Object<string, Array<import("../events.js").EventsKey>>}
     */

    this.featureChangeKeys_ = {};
    /**
     * @private
     * @type {Collection<import("../Feature.js").default>}
     */

    this.featuresCollection_ = null;
    var collection, features;

    if (Array.isArray(options.features)) {
      features = options.features;
    } else if (options.features) {
      collection = options.features;
      features = collection.getArray();
    }

    if (!useSpatialIndex && collection === undefined) {
      collection = new _Collection.default(features);
    }

    if (features !== undefined) {
      this.addFeaturesInternal(features);
    }

    if (collection !== undefined) {
      this.bindFeaturesCollection_(collection);
    }
  }

  if (Source) VectorSource.__proto__ = Source;
  VectorSource.prototype = Object.create(Source && Source.prototype);
  VectorSource.prototype.constructor = VectorSource;
  /**
   * Add a single feature to the source.  If you want to add a batch of features
   * at once, call {@link module:ol/source/Vector~VectorSource#addFeatures #addFeatures()}
   * instead. A feature will not be added to the source if feature with
   * the same id is already there. The reason for this behavior is to avoid
   * feature duplication when using bbox or tile loading strategies.
   * @param {import("../Feature.js").default} feature Feature to add.
   * @api
   */

  VectorSource.prototype.addFeature = function addFeature(feature) {
    this.addFeatureInternal(feature);
    this.changed();
  };
  /**
   * Add a feature without firing a `change` event.
   * @param {import("../Feature.js").default} feature Feature.
   * @protected
   */


  VectorSource.prototype.addFeatureInternal = function addFeatureInternal(feature) {
    var featureKey = (0, _util.getUid)(feature);

    if (!this.addToIndex_(featureKey, feature)) {
      return;
    }

    this.setupChangeEvents_(featureKey, feature);
    var geometry = feature.getGeometry();

    if (geometry) {
      var extent = geometry.getExtent();

      if (this.featuresRtree_) {
        this.featuresRtree_.insert(extent, feature);
      }
    } else {
      this.nullGeometryFeatures_[featureKey] = feature;
    }

    this.dispatchEvent(new VectorSourceEvent(_VectorEventType.default.ADDFEATURE, feature));
  };
  /**
   * @param {string} featureKey Unique identifier for the feature.
   * @param {import("../Feature.js").default} feature The feature.
   * @private
   */


  VectorSource.prototype.setupChangeEvents_ = function setupChangeEvents_(featureKey, feature) {
    this.featureChangeKeys_[featureKey] = [(0, _events.listen)(feature, _EventType.default.CHANGE, this.handleFeatureChange_, this), (0, _events.listen)(feature, _ObjectEventType.default.PROPERTYCHANGE, this.handleFeatureChange_, this)];
  };
  /**
   * @param {string} featureKey Unique identifier for the feature.
   * @param {import("../Feature.js").default} feature The feature.
   * @return {boolean} The feature is "valid", in the sense that it is also a
   *     candidate for insertion into the Rtree.
   * @private
   */


  VectorSource.prototype.addToIndex_ = function addToIndex_(featureKey, feature) {
    var valid = true;
    var id = feature.getId();

    if (id !== undefined) {
      if (!(id.toString() in this.idIndex_)) {
        this.idIndex_[id.toString()] = feature;
      } else {
        valid = false;
      }
    } else {
      (0, _asserts.assert)(!(featureKey in this.undefIdIndex_), 30); // The passed `feature` was already added to the source

      this.undefIdIndex_[featureKey] = feature;
    }

    return valid;
  };
  /**
   * Add a batch of features to the source.
   * @param {Array<import("../Feature.js").default>} features Features to add.
   * @api
   */


  VectorSource.prototype.addFeatures = function addFeatures(features) {
    this.addFeaturesInternal(features);
    this.changed();
  };
  /**
   * Add features without firing a `change` event.
   * @param {Array<import("../Feature.js").default>} features Features.
   * @protected
   */


  VectorSource.prototype.addFeaturesInternal = function addFeaturesInternal(features) {
    var extents = [];
    var newFeatures = [];
    var geometryFeatures = [];

    for (var i = 0, length = features.length; i < length; i++) {
      var feature = features[i];
      var featureKey = (0, _util.getUid)(feature);

      if (this.addToIndex_(featureKey, feature)) {
        newFeatures.push(feature);
      }
    }

    for (var i$1 = 0, length$1 = newFeatures.length; i$1 < length$1; i$1++) {
      var feature$1 = newFeatures[i$1];
      var featureKey$1 = (0, _util.getUid)(feature$1);
      this.setupChangeEvents_(featureKey$1, feature$1);
      var geometry = feature$1.getGeometry();

      if (geometry) {
        var extent = geometry.getExtent();
        extents.push(extent);
        geometryFeatures.push(feature$1);
      } else {
        this.nullGeometryFeatures_[featureKey$1] = feature$1;
      }
    }

    if (this.featuresRtree_) {
      this.featuresRtree_.load(extents, geometryFeatures);
    }

    for (var i$2 = 0, length$2 = newFeatures.length; i$2 < length$2; i$2++) {
      this.dispatchEvent(new VectorSourceEvent(_VectorEventType.default.ADDFEATURE, newFeatures[i$2]));
    }
  };
  /**
   * @param {!Collection<import("../Feature.js").default>} collection Collection.
   * @private
   */


  VectorSource.prototype.bindFeaturesCollection_ = function bindFeaturesCollection_(collection) {
    var modifyingCollection = false;
    (0, _events.listen)(this, _VectorEventType.default.ADDFEATURE,
    /**
     * @param {VectorSourceEvent} evt The vector source event
     */
    function (evt) {
      if (!modifyingCollection) {
        modifyingCollection = true;
        collection.push(evt.feature);
        modifyingCollection = false;
      }
    });
    (0, _events.listen)(this, _VectorEventType.default.REMOVEFEATURE,
    /**
     * @param {VectorSourceEvent} evt The vector source event
     */
    function (evt) {
      if (!modifyingCollection) {
        modifyingCollection = true;
        collection.remove(evt.feature);
        modifyingCollection = false;
      }
    });
    (0, _events.listen)(collection, _CollectionEventType.default.ADD,
    /**
     * @param {import("../Collection.js").CollectionEvent} evt The collection event
     */
    function (evt) {
      if (!modifyingCollection) {
        modifyingCollection = true;
        this.addFeature(
        /** @type {import("../Feature.js").default} */
        evt.element);
        modifyingCollection = false;
      }
    }, this);
    (0, _events.listen)(collection, _CollectionEventType.default.REMOVE,
    /**
     * @param {import("../Collection.js").CollectionEvent} evt The collection event
     */
    function (evt) {
      if (!modifyingCollection) {
        modifyingCollection = true;
        this.removeFeature(
        /** @type {import("../Feature.js").default} */
        evt.element);
        modifyingCollection = false;
      }
    }, this);
    this.featuresCollection_ = collection;
  };
  /**
   * Remove all features from the source.
   * @param {boolean=} opt_fast Skip dispatching of {@link module:ol/source/Vector.VectorSourceEvent#removefeature} events.
   * @api
   */


  VectorSource.prototype.clear = function clear(opt_fast) {
    if (opt_fast) {
      for (var featureId in this.featureChangeKeys_) {
        var keys = this.featureChangeKeys_[featureId];
        keys.forEach(_events.unlistenByKey);
      }

      if (!this.featuresCollection_) {
        this.featureChangeKeys_ = {};
        this.idIndex_ = {};
        this.undefIdIndex_ = {};
      }
    } else {
      if (this.featuresRtree_) {
        this.featuresRtree_.forEach(this.removeFeatureInternal, this);

        for (var id in this.nullGeometryFeatures_) {
          this.removeFeatureInternal(this.nullGeometryFeatures_[id]);
        }
      }
    }

    if (this.featuresCollection_) {
      this.featuresCollection_.clear();
    }

    if (this.featuresRtree_) {
      this.featuresRtree_.clear();
    }

    this.loadedExtentsRtree_.clear();
    this.nullGeometryFeatures_ = {};
    var clearEvent = new VectorSourceEvent(_VectorEventType.default.CLEAR);
    this.dispatchEvent(clearEvent);
    this.changed();
  };
  /**
   * Iterate through all features on the source, calling the provided callback
   * with each one.  If the callback returns any "truthy" value, iteration will
   * stop and the function will return the same value.
   * Note: this function only iterate through the feature that have a defined geometry.
   *
   * @param {function(import("../Feature.js").default): T} callback Called with each feature
   *     on the source.  Return a truthy value to stop iteration.
   * @return {T|undefined} The return value from the last call to the callback.
   * @template T
   * @api
   */


  VectorSource.prototype.forEachFeature = function forEachFeature(callback) {
    if (this.featuresRtree_) {
      return this.featuresRtree_.forEach(callback);
    } else if (this.featuresCollection_) {
      this.featuresCollection_.forEach(callback);
    }
  };
  /**
   * Iterate through all features whose geometries contain the provided
   * coordinate, calling the callback with each feature.  If the callback returns
   * a "truthy" value, iteration will stop and the function will return the same
   * value.
   *
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {function(import("../Feature.js").default): T} callback Called with each feature
   *     whose goemetry contains the provided coordinate.
   * @return {T|undefined} The return value from the last call to the callback.
   * @template T
   */


  VectorSource.prototype.forEachFeatureAtCoordinateDirect = function forEachFeatureAtCoordinateDirect(coordinate, callback) {
    var extent = [coordinate[0], coordinate[1], coordinate[0], coordinate[1]];
    return this.forEachFeatureInExtent(extent, function (feature) {
      var geometry = feature.getGeometry();

      if (geometry.intersectsCoordinate(coordinate)) {
        return callback(feature);
      } else {
        return undefined;
      }
    });
  };
  /**
   * Iterate through all features whose bounding box intersects the provided
   * extent (note that the feature's geometry may not intersect the extent),
   * calling the callback with each feature.  If the callback returns a "truthy"
   * value, iteration will stop and the function will return the same value.
   *
   * If you are interested in features whose geometry intersects an extent, call
   * the {@link module:ol/source/Vector~VectorSource#forEachFeatureIntersectingExtent #forEachFeatureIntersectingExtent()} method instead.
   *
   * When `useSpatialIndex` is set to false, this method will loop through all
   * features, equivalent to {@link module:ol/source/Vector~VectorSource#forEachFeature #forEachFeature()}.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {function(import("../Feature.js").default): T} callback Called with each feature
   *     whose bounding box intersects the provided extent.
   * @return {T|undefined} The return value from the last call to the callback.
   * @template T
   * @api
   */


  VectorSource.prototype.forEachFeatureInExtent = function forEachFeatureInExtent(extent, callback) {
    if (this.featuresRtree_) {
      return this.featuresRtree_.forEachInExtent(extent, callback);
    } else if (this.featuresCollection_) {
      this.featuresCollection_.forEach(callback);
    }
  };
  /**
   * Iterate through all features whose geometry intersects the provided extent,
   * calling the callback with each feature.  If the callback returns a "truthy"
   * value, iteration will stop and the function will return the same value.
   *
   * If you only want to test for bounding box intersection, call the
   * {@link module:ol/source/Vector~VectorSource#forEachFeatureInExtent #forEachFeatureInExtent()} method instead.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {function(import("../Feature.js").default): T} callback Called with each feature
   *     whose geometry intersects the provided extent.
   * @return {T|undefined} The return value from the last call to the callback.
   * @template T
   * @api
   */


  VectorSource.prototype.forEachFeatureIntersectingExtent = function forEachFeatureIntersectingExtent(extent, callback) {
    return this.forEachFeatureInExtent(extent,
    /**
     * @param {import("../Feature.js").default} feature Feature.
     * @return {T|undefined} The return value from the last call to the callback.
     */
    function (feature) {
      var geometry = feature.getGeometry();

      if (geometry.intersectsExtent(extent)) {
        var result = callback(feature);

        if (result) {
          return result;
        }
      }
    });
  };
  /**
   * Get the features collection associated with this source. Will be `null`
   * unless the source was configured with `useSpatialIndex` set to `false`, or
   * with an {@link module:ol/Collection} as `features`.
   * @return {Collection<import("../Feature.js").default>} The collection of features.
   * @api
   */


  VectorSource.prototype.getFeaturesCollection = function getFeaturesCollection() {
    return this.featuresCollection_;
  };
  /**
   * Get all features on the source in random order.
   * @return {Array<import("../Feature.js").default>} Features.
   * @api
   */


  VectorSource.prototype.getFeatures = function getFeatures() {
    var features;

    if (this.featuresCollection_) {
      features = this.featuresCollection_.getArray();
    } else if (this.featuresRtree_) {
      features = this.featuresRtree_.getAll();

      if (!(0, _obj.isEmpty)(this.nullGeometryFeatures_)) {
        (0, _array.extend)(features, (0, _obj.getValues)(this.nullGeometryFeatures_));
      }
    }

    return (
      /** @type {Array<import("../Feature.js").default>} */
      features
    );
  };
  /**
   * Get all features whose geometry intersects the provided coordinate.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @return {Array<import("../Feature.js").default>} Features.
   * @api
   */


  VectorSource.prototype.getFeaturesAtCoordinate = function getFeaturesAtCoordinate(coordinate) {
    var features = [];
    this.forEachFeatureAtCoordinateDirect(coordinate, function (feature) {
      features.push(feature);
    });
    return features;
  };
  /**
   * Get all features in the provided extent.  Note that this returns an array of
   * all features intersecting the given extent in random order (so it may include
   * features whose geometries do not intersect the extent).
   *
   * This method is not available when the source is configured with
   * `useSpatialIndex` set to `false`.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {Array<import("../Feature.js").default>} Features.
   * @api
   */


  VectorSource.prototype.getFeaturesInExtent = function getFeaturesInExtent(extent) {
    return this.featuresRtree_.getInExtent(extent);
  };
  /**
   * Get the closest feature to the provided coordinate.
   *
   * This method is not available when the source is configured with
   * `useSpatialIndex` set to `false`.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {function(import("../Feature.js").default):boolean=} opt_filter Feature filter function.
   *     The filter function will receive one argument, the {@link module:ol/Feature feature}
   *     and it should return a boolean value. By default, no filtering is made.
   * @return {import("../Feature.js").default} Closest feature.
   * @api
   */


  VectorSource.prototype.getClosestFeatureToCoordinate = function getClosestFeatureToCoordinate(coordinate, opt_filter) {
    // Find the closest feature using branch and bound.  We start searching an
    // infinite extent, and find the distance from the first feature found.  This
    // becomes the closest feature.  We then compute a smaller extent which any
    // closer feature must intersect.  We continue searching with this smaller
    // extent, trying to find a closer feature.  Every time we find a closer
    // feature, we update the extent being searched so that any even closer
    // feature must intersect it.  We continue until we run out of features.
    var x = coordinate[0];
    var y = coordinate[1];
    var closestFeature = null;
    var closestPoint = [NaN, NaN];
    var minSquaredDistance = Infinity;
    var extent = [-Infinity, -Infinity, Infinity, Infinity];
    var filter = opt_filter ? opt_filter : _functions.TRUE;
    this.featuresRtree_.forEachInExtent(extent,
    /**
     * @param {import("../Feature.js").default} feature Feature.
     */
    function (feature) {
      if (filter(feature)) {
        var geometry = feature.getGeometry();
        var previousMinSquaredDistance = minSquaredDistance;
        minSquaredDistance = geometry.closestPointXY(x, y, closestPoint, minSquaredDistance);

        if (minSquaredDistance < previousMinSquaredDistance) {
          closestFeature = feature; // This is sneaky.  Reduce the extent that it is currently being
          // searched while the R-Tree traversal using this same extent object
          // is still in progress.  This is safe because the new extent is
          // strictly contained by the old extent.

          var minDistance = Math.sqrt(minSquaredDistance);
          extent[0] = x - minDistance;
          extent[1] = y - minDistance;
          extent[2] = x + minDistance;
          extent[3] = y + minDistance;
        }
      }
    });
    return closestFeature;
  };
  /**
   * Get the extent of the features currently in the source.
   *
   * This method is not available when the source is configured with
   * `useSpatialIndex` set to `false`.
   * @param {import("../extent.js").Extent=} opt_extent Destination extent. If provided, no new extent
   *     will be created. Instead, that extent's coordinates will be overwritten.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */


  VectorSource.prototype.getExtent = function getExtent(opt_extent) {
    return this.featuresRtree_.getExtent(opt_extent);
  };
  /**
   * Get a feature by its identifier (the value returned by feature.getId()).
   * Note that the index treats string and numeric identifiers as the same.  So
   * `source.getFeatureById(2)` will return a feature with id `'2'` or `2`.
   *
   * @param {string|number} id Feature identifier.
   * @return {import("../Feature.js").default} The feature (or `null` if not found).
   * @api
   */


  VectorSource.prototype.getFeatureById = function getFeatureById(id) {
    var feature = this.idIndex_[id.toString()];
    return feature !== undefined ? feature : null;
  };
  /**
   * Get the format associated with this source.
   *
   * @return {import("../format/Feature.js").default|undefined} The feature format.
   * @api
   */


  VectorSource.prototype.getFormat = function getFormat() {
    return this.format_;
  };
  /**
   * @return {boolean} The source can have overlapping geometries.
   */


  VectorSource.prototype.getOverlaps = function getOverlaps() {
    return this.overlaps_;
  };
  /**
   * Get the url associated with this source.
   *
   * @return {string|import("../featureloader.js").FeatureUrlFunction|undefined} The url.
   * @api
   */


  VectorSource.prototype.getUrl = function getUrl() {
    return this.url_;
  };
  /**
   * @param {Event} event Event.
   * @private
   */


  VectorSource.prototype.handleFeatureChange_ = function handleFeatureChange_(event) {
    var feature =
    /** @type {import("../Feature.js").default} */
    event.target;
    var featureKey = (0, _util.getUid)(feature);
    var geometry = feature.getGeometry();

    if (!geometry) {
      if (!(featureKey in this.nullGeometryFeatures_)) {
        if (this.featuresRtree_) {
          this.featuresRtree_.remove(feature);
        }

        this.nullGeometryFeatures_[featureKey] = feature;
      }
    } else {
      var extent = geometry.getExtent();

      if (featureKey in this.nullGeometryFeatures_) {
        delete this.nullGeometryFeatures_[featureKey];

        if (this.featuresRtree_) {
          this.featuresRtree_.insert(extent, feature);
        }
      } else {
        if (this.featuresRtree_) {
          this.featuresRtree_.update(extent, feature);
        }
      }
    }

    var id = feature.getId();

    if (id !== undefined) {
      var sid = id.toString();

      if (featureKey in this.undefIdIndex_) {
        delete this.undefIdIndex_[featureKey];
        this.idIndex_[sid] = feature;
      } else {
        if (this.idIndex_[sid] !== feature) {
          this.removeFromIdIndex_(feature);
          this.idIndex_[sid] = feature;
        }
      }
    } else {
      if (!(featureKey in this.undefIdIndex_)) {
        this.removeFromIdIndex_(feature);
        this.undefIdIndex_[featureKey] = feature;
      }
    }

    this.changed();
    this.dispatchEvent(new VectorSourceEvent(_VectorEventType.default.CHANGEFEATURE, feature));
  };
  /**
   * Returns true if the feature is contained within the source.
   * @param {import("../Feature.js").default} feature Feature.
   * @return {boolean} Has feature.
   * @api
   */


  VectorSource.prototype.hasFeature = function hasFeature(feature) {
    var id = feature.getId();

    if (id !== undefined) {
      return id in this.idIndex_;
    } else {
      return (0, _util.getUid)(feature) in this.undefIdIndex_;
    }
  };
  /**
   * @return {boolean} Is empty.
   */


  VectorSource.prototype.isEmpty = function isEmpty$1() {
    return this.featuresRtree_.isEmpty() && (0, _obj.isEmpty)(this.nullGeometryFeatures_);
  };
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} resolution Resolution.
   * @param {import("../proj/Projection.js").default} projection Projection.
   */


  VectorSource.prototype.loadFeatures = function loadFeatures(extent, resolution, projection) {
    var this$1 = this;
    var loadedExtentsRtree = this.loadedExtentsRtree_;
    var extentsToLoad = this.strategy_(extent, resolution);
    this.loading = false;

    var loop = function (i, ii) {
      var extentToLoad = extentsToLoad[i];
      var alreadyLoaded = loadedExtentsRtree.forEachInExtent(extentToLoad,
      /**
       * @param {{extent: import("../extent.js").Extent}} object Object.
       * @return {boolean} Contains.
       */
      function (object) {
        return (0, _extent.containsExtent)(object.extent, extentToLoad);
      });

      if (!alreadyLoaded) {
        this$1.loader_.call(this$1, extentToLoad, resolution, projection);
        loadedExtentsRtree.insert(extentToLoad, {
          extent: extentToLoad.slice()
        });
        this$1.loading = this$1.loader_ !== _functions.VOID;
      }
    };

    for (var i = 0, ii = extentsToLoad.length; i < ii; ++i) loop(i, ii);
  };
  /**
   * Remove an extent from the list of loaded extents.
   * @param {import("../extent.js").Extent} extent Extent.
   * @api
   */


  VectorSource.prototype.removeLoadedExtent = function removeLoadedExtent(extent) {
    var loadedExtentsRtree = this.loadedExtentsRtree_;
    var obj;
    loadedExtentsRtree.forEachInExtent(extent, function (object) {
      if ((0, _extent.equals)(object.extent, extent)) {
        obj = object;
        return true;
      }
    });

    if (obj) {
      loadedExtentsRtree.remove(obj);
    }
  };
  /**
   * Remove a single feature from the source.  If you want to remove all features
   * at once, use the {@link module:ol/source/Vector~VectorSource#clear #clear()} method
   * instead.
   * @param {import("../Feature.js").default} feature Feature to remove.
   * @api
   */


  VectorSource.prototype.removeFeature = function removeFeature(feature) {
    var featureKey = (0, _util.getUid)(feature);

    if (featureKey in this.nullGeometryFeatures_) {
      delete this.nullGeometryFeatures_[featureKey];
    } else {
      if (this.featuresRtree_) {
        this.featuresRtree_.remove(feature);
      }
    }

    this.removeFeatureInternal(feature);
    this.changed();
  };
  /**
   * Remove feature without firing a `change` event.
   * @param {import("../Feature.js").default} feature Feature.
   * @protected
   */


  VectorSource.prototype.removeFeatureInternal = function removeFeatureInternal(feature) {
    var featureKey = (0, _util.getUid)(feature);
    this.featureChangeKeys_[featureKey].forEach(_events.unlistenByKey);
    delete this.featureChangeKeys_[featureKey];
    var id = feature.getId();

    if (id !== undefined) {
      delete this.idIndex_[id.toString()];
    } else {
      delete this.undefIdIndex_[featureKey];
    }

    this.dispatchEvent(new VectorSourceEvent(_VectorEventType.default.REMOVEFEATURE, feature));
  };
  /**
   * Remove a feature from the id index.  Called internally when the feature id
   * may have changed.
   * @param {import("../Feature.js").default} feature The feature.
   * @return {boolean} Removed the feature from the index.
   * @private
   */


  VectorSource.prototype.removeFromIdIndex_ = function removeFromIdIndex_(feature) {
    var removed = false;

    for (var id in this.idIndex_) {
      if (this.idIndex_[id] === feature) {
        delete this.idIndex_[id];
        removed = true;
        break;
      }
    }

    return removed;
  };
  /**
   * Set the new loader of the source. The next loadFeatures call will use the
   * new loader.
   * @param {import("../featureloader.js").FeatureLoader} loader The loader to set.
   * @api
   */


  VectorSource.prototype.setLoader = function setLoader(loader) {
    this.loader_ = loader;
  };

  return VectorSource;
}(_Source.default);

var _default = VectorSource;
exports.default = _default;
},{"../util.js":"node_modules/ol/util.js","../Collection.js":"node_modules/ol/Collection.js","../CollectionEventType.js":"node_modules/ol/CollectionEventType.js","../ObjectEventType.js":"node_modules/ol/ObjectEventType.js","../array.js":"node_modules/ol/array.js","../asserts.js":"node_modules/ol/asserts.js","../events.js":"node_modules/ol/events.js","../events/Event.js":"node_modules/ol/events/Event.js","../events/EventType.js":"node_modules/ol/events/EventType.js","../extent.js":"node_modules/ol/extent.js","../featureloader.js":"node_modules/ol/featureloader.js","../functions.js":"node_modules/ol/functions.js","../loadingstrategy.js":"node_modules/ol/loadingstrategy.js","../obj.js":"node_modules/ol/obj.js","./Source.js":"node_modules/ol/source/Source.js","./State.js":"node_modules/ol/source/State.js","./VectorEventType.js":"node_modules/ol/source/VectorEventType.js","../structs/RBush.js":"node_modules/ol/structs/RBush.js"}],"node_modules/ol/style/Atlas.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dom = require("../dom.js");

/**
 * @module ol/style/Atlas
 */

/**
 * @typedef {Object} AtlasBlock
 * @property {number} x
 * @property {number} y
 * @property {number} width
 * @property {number} height
 */

/**
 * Provides information for an image inside an atlas.
 * `offsetX` and `offsetY` are the position of the image inside the atlas image `image`.
 * @typedef {Object} AtlasInfo
 * @property {number} offsetX
 * @property {number} offsetY
 * @property {HTMLCanvasElement} image
 */

/**
 * @classesc
 * This class facilitates the creation of image atlases.
 *
 * Images added to an atlas will be rendered onto a single
 * atlas canvas. The distribution of images on the canvas is
 * managed with the bin packing algorithm described in:
 * http://www.blackpawn.com/texts/lightmaps/
 *
 * @param {number} size The size in pixels of the sprite image.
 * @param {number} space The space in pixels between images.
 *    Because texture coordinates are float values, the edges of
 *    images might not be completely correct (in a way that the
 *    edges overlap when being rendered). To avoid this we add a
 *    padding around each image.
 */
var Atlas = function Atlas(size, space) {
  /**
   * @private
   * @type {number}
   */
  this.space_ = space;
  /**
   * @private
   * @type {Array<AtlasBlock>}
   */

  this.emptyBlocks_ = [{
    x: 0,
    y: 0,
    width: size,
    height: size
  }];
  /**
   * @private
   * @type {Object<string, AtlasInfo>}
   */

  this.entries_ = {};
  /**
   * @private
   * @type {CanvasRenderingContext2D}
   */

  this.context_ = (0, _dom.createCanvasContext2D)(size, size);
  /**
   * @private
   * @type {HTMLCanvasElement}
   */

  this.canvas_ = this.context_.canvas;
};
/**
 * @param {string} id The identifier of the entry to check.
 * @return {?AtlasInfo} The atlas info.
 */


Atlas.prototype.get = function get(id) {
  return this.entries_[id] || null;
};
/**
 * @param {string} id The identifier of the entry to add.
 * @param {number} width The width.
 * @param {number} height The height.
 * @param {function(CanvasRenderingContext2D, number, number)} renderCallback
 *  Called to render the new image onto an atlas image.
 * @param {Object=} opt_this Value to use as `this` when executing
 *  `renderCallback`.
 * @return {?AtlasInfo} The position and atlas image for the entry.
 */


Atlas.prototype.add = function add(id, width, height, renderCallback, opt_this) {
  for (var i = 0, ii = this.emptyBlocks_.length; i < ii; ++i) {
    var block = this.emptyBlocks_[i];

    if (block.width >= width + this.space_ && block.height >= height + this.space_) {
      // we found a block that is big enough for our entry
      var entry = {
        offsetX: block.x + this.space_,
        offsetY: block.y + this.space_,
        image: this.canvas_
      };
      this.entries_[id] = entry; // render the image on the atlas image

      renderCallback.call(opt_this, this.context_, block.x + this.space_, block.y + this.space_); // split the block after the insertion, either horizontally or vertically

      this.split_(i, block, width + this.space_, height + this.space_);
      return entry;
    }
  } // there is no space for the new entry in this atlas


  return null;
};
/**
 * @private
 * @param {number} index The index of the block.
 * @param {AtlasBlock} block The block to split.
 * @param {number} width The width of the entry to insert.
 * @param {number} height The height of the entry to insert.
 */


Atlas.prototype.split_ = function split_(index, block, width, height) {
  var deltaWidth = block.width - width;
  var deltaHeight = block.height - height;
  /** @type {AtlasBlock} */

  var newBlock1;
  /** @type {AtlasBlock} */

  var newBlock2;

  if (deltaWidth > deltaHeight) {
    // split vertically
    // block right of the inserted entry
    newBlock1 = {
      x: block.x + width,
      y: block.y,
      width: block.width - width,
      height: block.height
    }; // block below the inserted entry

    newBlock2 = {
      x: block.x,
      y: block.y + height,
      width: width,
      height: block.height - height
    };
    this.updateBlocks_(index, newBlock1, newBlock2);
  } else {
    // split horizontally
    // block right of the inserted entry
    newBlock1 = {
      x: block.x + width,
      y: block.y,
      width: block.width - width,
      height: height
    }; // block below the inserted entry

    newBlock2 = {
      x: block.x,
      y: block.y + height,
      width: block.width,
      height: block.height - height
    };
    this.updateBlocks_(index, newBlock1, newBlock2);
  }
};
/**
 * Remove the old block and insert new blocks at the same array position.
 * The new blocks are inserted at the same position, so that splitted
 * blocks (that are potentially smaller) are filled first.
 * @private
 * @param {number} index The index of the block to remove.
 * @param {AtlasBlock} newBlock1 The 1st block to add.
 * @param {AtlasBlock} newBlock2 The 2nd block to add.
 */


Atlas.prototype.updateBlocks_ = function updateBlocks_(index, newBlock1, newBlock2) {
  var args =
  /** @type {Array<*>} */
  [index, 1];

  if (newBlock1.width > 0 && newBlock1.height > 0) {
    args.push(newBlock1);
  }

  if (newBlock2.width > 0 && newBlock2.height > 0) {
    args.push(newBlock2);
  }

  this.emptyBlocks_.splice.apply(this.emptyBlocks_, args);
};

var _default = Atlas;
exports.default = _default;
},{"../dom.js":"node_modules/ol/dom.js"}],"node_modules/ol/style/AtlasManager.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _webgl = require("../webgl.js");

var _functions = require("../functions.js");

var _Atlas = _interopRequireDefault(require("./Atlas.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/style/AtlasManager
 */

/**
 * @typedef {Object} Options
 * @property {number} [initialSize=256] The size in pixels of the first atlas image.
 * @property {number} [maxSize] The maximum size in pixels of atlas images. Default is
 * `webgl/MAX_TEXTURE_SIZE` or 2048 if WebGL is not supported.
 * @property {number} [space=1] The space in pixels between images.
 */

/**
 * Provides information for an image inside an atlas manager.
 * `offsetX` and `offsetY` is the position of the image inside
 * the atlas image `image` and the position of the hit-detection image
 * inside the hit-detection atlas image `hitImage`.
 * @typedef {Object} AtlasManagerInfo
 * @property {number} offsetX
 * @property {number} offsetY
 * @property {HTMLCanvasElement} image
 * @property {HTMLCanvasElement} hitImage
 */

/**
 * The size in pixels of the first atlas image.
 * @type {number}
 */
var INITIAL_ATLAS_SIZE = 256;
/**
 * The maximum size in pixels of atlas images.
 * @type {number}
 */

var MAX_ATLAS_SIZE = -1;
/**
 * @classdesc
 * Manages the creation of image atlases.
 *
 * Images added to this manager will be inserted into an atlas, which
 * will be used for rendering.
 * The `size` given in the constructor is the size for the first
 * atlas. After that, when new atlases are created, they will have
 * twice the size as the latest atlas (until `maxSize` is reached).
 *
 * If an application uses many images or very large images, it is recommended
 * to set a higher `size` value to avoid the creation of too many atlases.
 * @api
 */

var AtlasManager = function AtlasManager(opt_options) {
  var options = opt_options || {};
  /**
   * The size in pixels of the latest atlas image.
   * @private
   * @type {number}
   */

  this.currentSize_ = options.initialSize !== undefined ? options.initialSize : INITIAL_ATLAS_SIZE;
  /**
   * The maximum size in pixels of atlas images.
   * @private
   * @type {number}
   */

  this.maxSize_ = options.maxSize !== undefined ? options.maxSize : MAX_ATLAS_SIZE != -1 ? MAX_ATLAS_SIZE : _webgl.MAX_TEXTURE_SIZE !== undefined ? _webgl.MAX_TEXTURE_SIZE : 2048;
  /**
   * The size in pixels between images.
   * @private
   * @type {number}
   */

  this.space_ = options.space !== undefined ? options.space : 1;
  /**
   * @private
   * @type {Array<import("./Atlas.js").default>}
   */

  this.atlases_ = [new _Atlas.default(this.currentSize_, this.space_)];
  /**
   * The size in pixels of the latest atlas image for hit-detection images.
   * @private
   * @type {number}
   */

  this.currentHitSize_ = this.currentSize_;
  /**
   * @private
   * @type {Array<import("./Atlas.js").default>}
   */

  this.hitAtlases_ = [new _Atlas.default(this.currentHitSize_, this.space_)];
};
/**
 * @param {string} id The identifier of the entry to check.
 * @return {?AtlasManagerInfo} The position and atlas image for the
 *  entry, or `null` if the entry is not part of the atlas manager.
 */


AtlasManager.prototype.getInfo = function getInfo(id) {
  /** @type {?import("./Atlas.js").AtlasInfo} */
  var info = this.getInfo_(this.atlases_, id);

  if (!info) {
    return null;
  }

  var hitInfo =
  /** @type {import("./Atlas.js").AtlasInfo} */
  this.getInfo_(this.hitAtlases_, id);
  return this.mergeInfos_(info, hitInfo);
};
/**
 * @private
 * @param {Array<import("./Atlas.js").default>} atlases The atlases to search.
 * @param {string} id The identifier of the entry to check.
 * @return {?import("./Atlas.js").AtlasInfo} The position and atlas image for the entry,
 *  or `null` if the entry is not part of the atlases.
 */


AtlasManager.prototype.getInfo_ = function getInfo_(atlases, id) {
  for (var i = 0, ii = atlases.length; i < ii; ++i) {
    var atlas = atlases[i];
    var info = atlas.get(id);

    if (info) {
      return info;
    }
  }

  return null;
};
/**
 * @private
 * @param {import("./Atlas.js").AtlasInfo} info The info for the real image.
 * @param {import("./Atlas.js").AtlasInfo} hitInfo The info for the hit-detection
 *  image.
 * @return {?AtlasManagerInfo} The position and atlas image for the
 *  entry, or `null` if the entry is not part of the atlases.
 */


AtlasManager.prototype.mergeInfos_ = function mergeInfos_(info, hitInfo) {
  return (
    /** @type {AtlasManagerInfo} */
    {
      offsetX: info.offsetX,
      offsetY: info.offsetY,
      image: info.image,
      hitImage: hitInfo.image
    }
  );
};
/**
 * Add an image to the atlas manager.
 *
 * If an entry for the given id already exists, the entry will
 * be overridden (but the space on the atlas graphic will not be freed).
 *
 * If `renderHitCallback` is provided, the image (or the hit-detection version
 * of the image) will be rendered into a separate hit-detection atlas image.
 *
 * @param {string} id The identifier of the entry to add.
 * @param {number} width The width.
 * @param {number} height The height.
 * @param {function(CanvasRenderingContext2D, number, number)} renderCallback
 *  Called to render the new image onto an atlas image.
 * @param {function(CanvasRenderingContext2D, number, number)=} opt_renderHitCallback Called to render a hit-detection image onto a hit
 *  detection atlas image.
 * @param {Object=} opt_this Value to use as `this` when executing
 *  `renderCallback` and `renderHitCallback`.
 * @return {?AtlasManagerInfo}The position and atlas image for the
 *  entry, or `null` if the image is too big.
 */


AtlasManager.prototype.add = function add(id, width, height, renderCallback, opt_renderHitCallback, opt_this) {
  if (width + this.space_ > this.maxSize_ || height + this.space_ > this.maxSize_) {
    return null;
  }
  /** @type {?import("./Atlas.js").AtlasInfo} */


  var info = this.add_(false, id, width, height, renderCallback, opt_this);

  if (!info) {
    return null;
  } // even if no hit-detection entry is requested, we insert a fake entry into
  // the hit-detection atlas, to make sure that the offset is the same for
  // the original image and the hit-detection image.


  var renderHitCallback = opt_renderHitCallback !== undefined ? opt_renderHitCallback : _functions.VOID;
  var hitInfo =
  /** @type {import("./Atlas.js").AtlasInfo} */
  this.add_(true, id, width, height, renderHitCallback, opt_this);
  return this.mergeInfos_(info, hitInfo);
};
/**
 * @private
 * @param {boolean} isHitAtlas If the hit-detection atlases are used.
 * @param {string} id The identifier of the entry to add.
 * @param {number} width The width.
 * @param {number} height The height.
 * @param {function(CanvasRenderingContext2D, number, number)} renderCallback
 *  Called to render the new image onto an atlas image.
 * @param {Object=} opt_this Value to use as `this` when executing
 *  `renderCallback` and `renderHitCallback`.
 * @return {?import("./Atlas.js").AtlasInfo}The position and atlas image for the entry,
 *  or `null` if the image is too big.
 */


AtlasManager.prototype.add_ = function add_(isHitAtlas, id, width, height, renderCallback, opt_this) {
  var atlases = isHitAtlas ? this.hitAtlases_ : this.atlases_;
  var atlas, info, i, ii;

  for (i = 0, ii = atlases.length; i < ii; ++i) {
    atlas = atlases[i];
    info = atlas.add(id, width, height, renderCallback, opt_this);

    if (info) {
      return info;
    } else if (!info && i === ii - 1) {
      // the entry could not be added to one of the existing atlases,
      // create a new atlas that is twice as big and try to add to this one.
      var size = void 0;

      if (isHitAtlas) {
        size = Math.min(this.currentHitSize_ * 2, this.maxSize_);
        this.currentHitSize_ = size;
      } else {
        size = Math.min(this.currentSize_ * 2, this.maxSize_);
        this.currentSize_ = size;
      }

      atlas = new _Atlas.default(size, this.space_);
      atlases.push(atlas); // run the loop another time

      ++ii;
    }
  }

  return null;
};

var _default = AtlasManager;
exports.default = _default;
},{"../webgl.js":"node_modules/ol/webgl.js","../functions.js":"node_modules/ol/functions.js","./Atlas.js":"node_modules/ol/style/Atlas.js"}],"node_modules/ol/style/IconAnchorUnits.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/style/IconAnchorUnits
 */

/**
 * Icon anchor units. One of 'fraction', 'pixels'.
 * @enum {string}
 */
var _default = {
  FRACTION: 'fraction',
  PIXELS: 'pixels'
};
exports.default = _default;
},{}],"node_modules/ol/style/IconImageCache.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shared = exports.default = void 0;

var _color = require("../color.js");

/**
 * @module ol/style/IconImageCache
 */

/**
 * @classdesc
 * Singleton class. Available through {@link module:ol/style/IconImageCache~shared}.
 */
var IconImageCache = function IconImageCache() {
  /**
  * @type {!Object<string, import("./IconImage.js").default>}
  * @private
  */
  this.cache_ = {};
  /**
  * @type {number}
  * @private
  */

  this.cacheSize_ = 0;
  /**
  * @type {number}
  * @private
  */

  this.maxCacheSize_ = 32;
};
/**
* FIXME empty description for jsdoc
*/


IconImageCache.prototype.clear = function clear() {
  this.cache_ = {};
  this.cacheSize_ = 0;
};
/**
* FIXME empty description for jsdoc
*/


IconImageCache.prototype.expire = function expire() {
  if (this.cacheSize_ > this.maxCacheSize_) {
    var i = 0;

    for (var key in this.cache_) {
      var iconImage = this.cache_[key];

      if ((i++ & 3) === 0 && !iconImage.hasListener()) {
        delete this.cache_[key];
        --this.cacheSize_;
      }
    }
  }
};
/**
* @param {string} src Src.
* @param {?string} crossOrigin Cross origin.
* @param {import("../color.js").Color} color Color.
* @return {import("./IconImage.js").default} Icon image.
*/


IconImageCache.prototype.get = function get(src, crossOrigin, color) {
  var key = getKey(src, crossOrigin, color);
  return key in this.cache_ ? this.cache_[key] : null;
};
/**
* @param {string} src Src.
* @param {?string} crossOrigin Cross origin.
* @param {import("../color.js").Color} color Color.
* @param {import("./IconImage.js").default} iconImage Icon image.
*/


IconImageCache.prototype.set = function set(src, crossOrigin, color, iconImage) {
  var key = getKey(src, crossOrigin, color);
  this.cache_[key] = iconImage;
  ++this.cacheSize_;
};
/**
* Set the cache size of the icon cache. Default is `32`. Change this value when
* your map uses more than 32 different icon images and you are not caching icon
* styles on the application level.
* @param {number} maxCacheSize Cache max size.
* @api
*/


IconImageCache.prototype.setSize = function setSize(maxCacheSize) {
  this.maxCacheSize_ = maxCacheSize;
  this.expire();
};
/**
 * @param {string} src Src.
 * @param {?string} crossOrigin Cross origin.
 * @param {import("../color.js").Color} color Color.
 * @return {string} Cache key.
 */


function getKey(src, crossOrigin, color) {
  var colorString = color ? (0, _color.asString)(color) : 'null';
  return crossOrigin + ':' + src + ':' + colorString;
}

var _default = IconImageCache;
/**
 * The {@link module:ol/style/IconImageCache~IconImageCache} for
 * {@link module:ol/style/Icon~Icon} images.
 * @api
 */

exports.default = _default;
var shared = new IconImageCache();
exports.shared = shared;
},{"../color.js":"node_modules/ol/color.js"}],"node_modules/ol/style/IconImage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.default = void 0;

var _dom = require("../dom.js");

var _events = require("../events.js");

var _Target = _interopRequireDefault(require("../events/Target.js"));

var _EventType = _interopRequireDefault(require("../events/EventType.js"));

var _ImageState = _interopRequireDefault(require("../ImageState.js"));

var _IconImageCache = require("./IconImageCache.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/style/IconImage
 */
var IconImage =
/*@__PURE__*/
function (EventTarget) {
  function IconImage(image, src, size, crossOrigin, imageState, color) {
    EventTarget.call(this);
    /**
     * @private
     * @type {HTMLImageElement|HTMLCanvasElement}
     */

    this.hitDetectionImage_ = null;
    /**
     * @private
     * @type {HTMLImageElement|HTMLCanvasElement}
     */

    this.image_ = !image ? new Image() : image;

    if (crossOrigin !== null) {
      /** @type {HTMLImageElement} */
      this.image_.crossOrigin = crossOrigin;
    }
    /**
     * @private
     * @type {HTMLCanvasElement}
     */


    this.canvas_ = color ?
    /** @type {HTMLCanvasElement} */
    document.createElement('canvas') : null;
    /**
     * @private
     * @type {import("../color.js").Color}
     */

    this.color_ = color;
    /**
     * @private
     * @type {Array<import("../events.js").EventsKey>}
     */

    this.imageListenerKeys_ = null;
    /**
     * @private
     * @type {import("../ImageState.js").default}
     */

    this.imageState_ = imageState;
    /**
     * @private
     * @type {import("../size.js").Size}
     */

    this.size_ = size;
    /**
     * @private
     * @type {string|undefined}
     */

    this.src_ = src;
    /**
     * @private
     * @type {boolean|undefined}
     */

    this.tainted_;
  }

  if (EventTarget) IconImage.__proto__ = EventTarget;
  IconImage.prototype = Object.create(EventTarget && EventTarget.prototype);
  IconImage.prototype.constructor = IconImage;
  /**
   * @private
   * @return {boolean} The image canvas is tainted.
   */

  IconImage.prototype.isTainted_ = function isTainted_() {
    if (this.tainted_ === undefined && this.imageState_ === _ImageState.default.LOADED) {
      this.tainted_ = false;
      var context = (0, _dom.createCanvasContext2D)(1, 1);

      try {
        context.drawImage(this.image_, 0, 0);
        context.getImageData(0, 0, 1, 1);
      } catch (e) {
        this.tainted_ = true;
      }
    }

    return this.tainted_ === true;
  };
  /**
   * @private
   */


  IconImage.prototype.dispatchChangeEvent_ = function dispatchChangeEvent_() {
    this.dispatchEvent(_EventType.default.CHANGE);
  };
  /**
   * @private
   */


  IconImage.prototype.handleImageError_ = function handleImageError_() {
    this.imageState_ = _ImageState.default.ERROR;
    this.unlistenImage_();
    this.dispatchChangeEvent_();
  };
  /**
   * @private
   */


  IconImage.prototype.handleImageLoad_ = function handleImageLoad_() {
    this.imageState_ = _ImageState.default.LOADED;

    if (this.size_) {
      this.image_.width = this.size_[0];
      this.image_.height = this.size_[1];
    }

    this.size_ = [this.image_.width, this.image_.height];
    this.unlistenImage_();
    this.replaceColor_();
    this.dispatchChangeEvent_();
  };
  /**
   * @param {number} pixelRatio Pixel ratio.
   * @return {HTMLImageElement|HTMLCanvasElement} Image or Canvas element.
   */


  IconImage.prototype.getImage = function getImage(pixelRatio) {
    return this.canvas_ ? this.canvas_ : this.image_;
  };
  /**
   * @return {import("../ImageState.js").default} Image state.
   */


  IconImage.prototype.getImageState = function getImageState() {
    return this.imageState_;
  };
  /**
   * @param {number} pixelRatio Pixel ratio.
   * @return {HTMLImageElement|HTMLCanvasElement} Image element.
   */


  IconImage.prototype.getHitDetectionImage = function getHitDetectionImage(pixelRatio) {
    if (!this.hitDetectionImage_) {
      if (this.isTainted_()) {
        var width = this.size_[0];
        var height = this.size_[1];
        var context = (0, _dom.createCanvasContext2D)(width, height);
        context.fillRect(0, 0, width, height);
        this.hitDetectionImage_ = context.canvas;
      } else {
        this.hitDetectionImage_ = this.image_;
      }
    }

    return this.hitDetectionImage_;
  };
  /**
   * @return {import("../size.js").Size} Image size.
   */


  IconImage.prototype.getSize = function getSize() {
    return this.size_;
  };
  /**
   * @return {string|undefined} Image src.
   */


  IconImage.prototype.getSrc = function getSrc() {
    return this.src_;
  };
  /**
   * Load not yet loaded URI.
   */


  IconImage.prototype.load = function load() {
    if (this.imageState_ == _ImageState.default.IDLE) {
      this.imageState_ = _ImageState.default.LOADING;
      this.imageListenerKeys_ = [(0, _events.listenOnce)(this.image_, _EventType.default.ERROR, this.handleImageError_, this), (0, _events.listenOnce)(this.image_, _EventType.default.LOAD, this.handleImageLoad_, this)];

      try {
        /** @type {HTMLImageElement} */
        this.image_.src = this.src_;
      } catch (e) {
        this.handleImageError_();
      }
    }
  };
  /**
   * @private
   */


  IconImage.prototype.replaceColor_ = function replaceColor_() {
    if (!this.color_ || this.isTainted_()) {
      return;
    }

    this.canvas_.width = this.image_.width;
    this.canvas_.height = this.image_.height;
    var ctx = this.canvas_.getContext('2d');
    ctx.drawImage(this.image_, 0, 0);
    var imgData = ctx.getImageData(0, 0, this.image_.width, this.image_.height);
    var data = imgData.data;
    var r = this.color_[0] / 255.0;
    var g = this.color_[1] / 255.0;
    var b = this.color_[2] / 255.0;

    for (var i = 0, ii = data.length; i < ii; i += 4) {
      data[i] *= r;
      data[i + 1] *= g;
      data[i + 2] *= b;
    }

    ctx.putImageData(imgData, 0, 0);
  };
  /**
   * Discards event handlers which listen for load completion or errors.
   *
   * @private
   */


  IconImage.prototype.unlistenImage_ = function unlistenImage_() {
    this.imageListenerKeys_.forEach(_events.unlistenByKey);
    this.imageListenerKeys_ = null;
  };

  return IconImage;
}(_Target.default);
/**
 * @param {HTMLImageElement|HTMLCanvasElement} image Image.
 * @param {string} src Src.
 * @param {import("../size.js").Size} size Size.
 * @param {?string} crossOrigin Cross origin.
 * @param {import("../ImageState.js").default} imageState Image state.
 * @param {import("../color.js").Color} color Color.
 * @return {IconImage} Icon image.
 */


function get(image, src, size, crossOrigin, imageState, color) {
  var iconImage = _IconImageCache.shared.get(src, crossOrigin, color);

  if (!iconImage) {
    iconImage = new IconImage(image, src, size, crossOrigin, imageState, color);

    _IconImageCache.shared.set(src, crossOrigin, color, iconImage);
  }

  return iconImage;
}

var _default = IconImage;
exports.default = _default;
},{"../dom.js":"node_modules/ol/dom.js","../events.js":"node_modules/ol/events.js","../events/Target.js":"node_modules/ol/events/Target.js","../events/EventType.js":"node_modules/ol/events/EventType.js","../ImageState.js":"node_modules/ol/ImageState.js","./IconImageCache.js":"node_modules/ol/style/IconImageCache.js"}],"node_modules/ol/style/IconOrigin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/style/IconOrigin
 */

/**
 * Icon origin. One of 'bottom-left', 'bottom-right', 'top-left', 'top-right'.
 * @enum {string}
 */
var _default = {
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right'
};
exports.default = _default;
},{}],"node_modules/ol/style/Icon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("../util.js");

var _ImageState = _interopRequireDefault(require("../ImageState.js"));

var _asserts = require("../asserts.js");

var _color = require("../color.js");

var _events = require("../events.js");

var _EventType = _interopRequireDefault(require("../events/EventType.js"));

var _IconAnchorUnits = _interopRequireDefault(require("./IconAnchorUnits.js"));

var _IconImage = require("./IconImage.js");

var _IconOrigin = _interopRequireDefault(require("./IconOrigin.js"));

var _Image = _interopRequireDefault(require("./Image.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/style/Icon
 */

/**
 * @typedef {Object} Options
 * @property {Array<number>} [anchor=[0.5, 0.5]] Anchor. Default value is the icon center.
 * @property {import("./IconOrigin.js").default} [anchorOrigin] Origin of the anchor: `bottom-left`, `bottom-right`,
 * `top-left` or `top-right`. Default is `top-left`.
 * @property {import("./IconAnchorUnits.js").default} [anchorXUnits] Units in which the anchor x value is
 * specified. A value of `'fraction'` indicates the x value is a fraction of the icon. A value of `'pixels'` indicates
 * the x value in pixels. Default is `'fraction'`.
 * @property {import("./IconAnchorUnits.js").default} [anchorYUnits] Units in which the anchor y value is
 * specified. A value of `'fraction'` indicates the y value is a fraction of the icon. A value of `'pixels'` indicates
 * the y value in pixels. Default is `'fraction'`.
 * @property {import("../color.js").Color|string} [color] Color to tint the icon. If not specified,
 * the icon will be left as is.
 * @property {null|string} [crossOrigin] The `crossOrigin` attribute for loaded images. Note that you must provide a
 * `crossOrigin` value if you are using the WebGL renderer or if you want to access pixel data with the Canvas renderer.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image for more detail.
 * @property {HTMLImageElement|HTMLCanvasElement} [img] Image object for the icon. If the `src` option is not provided then the
 * provided image must already be loaded. And in that case, it is required
 * to provide the size of the image, with the `imgSize` option.
 * @property {Array<number>} [offset=[0, 0]] Offset, which, together with the size and the offset origin, define the
 * sub-rectangle to use from the original icon image.
 * @property {import("./IconOrigin.js").default} [offsetOrigin] Origin of the offset: `bottom-left`, `bottom-right`,
 * `top-left` or `top-right`. Default is `top-left`.
 * @property {number} [opacity=1] Opacity of the icon.
 * @property {number} [scale=1] Scale.
 * @property {boolean} [rotateWithView=false] Whether to rotate the icon with the view.
 * @property {number} [rotation=0] Rotation in radians (positive rotation clockwise).
 * @property {import("../size.js").Size} [size] Icon size in pixel. Can be used together with `offset` to define the
 * sub-rectangle to use from the origin (sprite) icon image.
 * @property {import("../size.js").Size} [imgSize] Image size in pixels. Only required if `img` is set and `src` is not, and
 * for SVG images in Internet Explorer 11. The provided `imgSize` needs to match the actual size of the image.
 * @property {string} [src] Image source URI.
 */

/**
 * @classdesc
 * Set icon style for vector features.
 * @api
 */
var Icon =
/*@__PURE__*/
function (ImageStyle) {
  function Icon(opt_options) {
    var options = opt_options || {};
    /**
     * @type {number}
     */

    var opacity = options.opacity !== undefined ? options.opacity : 1;
    /**
     * @type {number}
     */

    var rotation = options.rotation !== undefined ? options.rotation : 0;
    /**
     * @type {number}
     */

    var scale = options.scale !== undefined ? options.scale : 1;
    /**
     * @type {boolean}
     */

    var rotateWithView = options.rotateWithView !== undefined ? options.rotateWithView : false;
    ImageStyle.call(this, {
      opacity: opacity,
      rotation: rotation,
      scale: scale,
      rotateWithView: rotateWithView
    });
    /**
     * @private
     * @type {Array<number>}
     */

    this.anchor_ = options.anchor !== undefined ? options.anchor : [0.5, 0.5];
    /**
     * @private
     * @type {Array<number>}
     */

    this.normalizedAnchor_ = null;
    /**
     * @private
     * @type {import("./IconOrigin.js").default}
     */

    this.anchorOrigin_ = options.anchorOrigin !== undefined ? options.anchorOrigin : _IconOrigin.default.TOP_LEFT;
    /**
     * @private
     * @type {import("./IconAnchorUnits.js").default}
     */

    this.anchorXUnits_ = options.anchorXUnits !== undefined ? options.anchorXUnits : _IconAnchorUnits.default.FRACTION;
    /**
     * @private
     * @type {import("./IconAnchorUnits.js").default}
     */

    this.anchorYUnits_ = options.anchorYUnits !== undefined ? options.anchorYUnits : _IconAnchorUnits.default.FRACTION;
    /**
     * @private
     * @type {?string}
     */

    this.crossOrigin_ = options.crossOrigin !== undefined ? options.crossOrigin : null;
    /**
     * @type {HTMLImageElement|HTMLCanvasElement}
     */

    var image = options.img !== undefined ? options.img : null;
    /**
     * @type {import("../size.js").Size}
     */

    var imgSize = options.imgSize !== undefined ? options.imgSize : null;
    /**
     * @type {string|undefined}
     */

    var src = options.src;
    (0, _asserts.assert)(!(src !== undefined && image), 4); // `image` and `src` cannot be provided at the same time

    (0, _asserts.assert)(!image || image && imgSize, 5); // `imgSize` must be set when `image` is provided

    if ((src === undefined || src.length === 0) && image) {
      src =
      /** @type {HTMLImageElement} */
      image.src || (0, _util.getUid)(image);
    }

    (0, _asserts.assert)(src !== undefined && src.length > 0, 6); // A defined and non-empty `src` or `image` must be provided

    /**
     * @type {import("../ImageState.js").default}
     */

    var imageState = options.src !== undefined ? _ImageState.default.IDLE : _ImageState.default.LOADED;
    /**
     * @private
     * @type {import("../color.js").Color}
     */

    this.color_ = options.color !== undefined ? (0, _color.asArray)(options.color) : null;
    /**
     * @private
     * @type {import("./IconImage.js").default}
     */

    this.iconImage_ = (0, _IconImage.get)(image,
    /** @type {string} */
    src, imgSize, this.crossOrigin_, imageState, this.color_);
    /**
     * @private
     * @type {Array<number>}
     */

    this.offset_ = options.offset !== undefined ? options.offset : [0, 0];
    /**
     * @private
     * @type {import("./IconOrigin.js").default}
     */

    this.offsetOrigin_ = options.offsetOrigin !== undefined ? options.offsetOrigin : _IconOrigin.default.TOP_LEFT;
    /**
     * @private
     * @type {Array<number>}
     */

    this.origin_ = null;
    /**
     * @private
     * @type {import("../size.js").Size}
     */

    this.size_ = options.size !== undefined ? options.size : null;
  }

  if (ImageStyle) Icon.__proto__ = ImageStyle;
  Icon.prototype = Object.create(ImageStyle && ImageStyle.prototype);
  Icon.prototype.constructor = Icon;
  /**
   * Clones the style. The underlying Image/HTMLCanvasElement is not cloned.
   * @return {Icon} The cloned style.
   * @api
   */

  Icon.prototype.clone = function clone() {
    return new Icon({
      anchor: this.anchor_.slice(),
      anchorOrigin: this.anchorOrigin_,
      anchorXUnits: this.anchorXUnits_,
      anchorYUnits: this.anchorYUnits_,
      crossOrigin: this.crossOrigin_,
      color: this.color_ && this.color_.slice ? this.color_.slice() : this.color_ || undefined,
      src: this.getSrc(),
      offset: this.offset_.slice(),
      offsetOrigin: this.offsetOrigin_,
      size: this.size_ !== null ? this.size_.slice() : undefined,
      opacity: this.getOpacity(),
      scale: this.getScale(),
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView()
    });
  };
  /**
   * @inheritDoc
   * @api
   */


  Icon.prototype.getAnchor = function getAnchor() {
    if (this.normalizedAnchor_) {
      return this.normalizedAnchor_;
    }

    var anchor = this.anchor_;
    var size = this.getSize();

    if (this.anchorXUnits_ == _IconAnchorUnits.default.FRACTION || this.anchorYUnits_ == _IconAnchorUnits.default.FRACTION) {
      if (!size) {
        return null;
      }

      anchor = this.anchor_.slice();

      if (this.anchorXUnits_ == _IconAnchorUnits.default.FRACTION) {
        anchor[0] *= size[0];
      }

      if (this.anchorYUnits_ == _IconAnchorUnits.default.FRACTION) {
        anchor[1] *= size[1];
      }
    }

    if (this.anchorOrigin_ != _IconOrigin.default.TOP_LEFT) {
      if (!size) {
        return null;
      }

      if (anchor === this.anchor_) {
        anchor = this.anchor_.slice();
      }

      if (this.anchorOrigin_ == _IconOrigin.default.TOP_RIGHT || this.anchorOrigin_ == _IconOrigin.default.BOTTOM_RIGHT) {
        anchor[0] = -anchor[0] + size[0];
      }

      if (this.anchorOrigin_ == _IconOrigin.default.BOTTOM_LEFT || this.anchorOrigin_ == _IconOrigin.default.BOTTOM_RIGHT) {
        anchor[1] = -anchor[1] + size[1];
      }
    }

    this.normalizedAnchor_ = anchor;
    return this.normalizedAnchor_;
  };
  /**
   * Set the anchor point. The anchor determines the center point for the
   * symbolizer.
   *
   * @param {Array<number>} anchor Anchor.
   * @api
   */


  Icon.prototype.setAnchor = function setAnchor(anchor) {
    this.anchor_ = anchor;
    this.normalizedAnchor_ = null;
  };
  /**
   * Get the icon color.
   * @return {import("../color.js").Color} Color.
   * @api
   */


  Icon.prototype.getColor = function getColor() {
    return this.color_;
  };
  /**
   * Get the image icon.
   * @param {number} pixelRatio Pixel ratio.
   * @return {HTMLImageElement|HTMLCanvasElement} Image or Canvas element.
   * @override
   * @api
   */


  Icon.prototype.getImage = function getImage(pixelRatio) {
    return this.iconImage_.getImage(pixelRatio);
  };
  /**
   * @override
   */


  Icon.prototype.getImageSize = function getImageSize() {
    return this.iconImage_.getSize();
  };
  /**
   * @override
   */


  Icon.prototype.getHitDetectionImageSize = function getHitDetectionImageSize() {
    return this.getImageSize();
  };
  /**
   * @override
   */


  Icon.prototype.getImageState = function getImageState() {
    return this.iconImage_.getImageState();
  };
  /**
   * @override
   */


  Icon.prototype.getHitDetectionImage = function getHitDetectionImage(pixelRatio) {
    return this.iconImage_.getHitDetectionImage(pixelRatio);
  };
  /**
   * @inheritDoc
   * @api
   */


  Icon.prototype.getOrigin = function getOrigin() {
    if (this.origin_) {
      return this.origin_;
    }

    var offset = this.offset_;

    if (this.offsetOrigin_ != _IconOrigin.default.TOP_LEFT) {
      var size = this.getSize();
      var iconImageSize = this.iconImage_.getSize();

      if (!size || !iconImageSize) {
        return null;
      }

      offset = offset.slice();

      if (this.offsetOrigin_ == _IconOrigin.default.TOP_RIGHT || this.offsetOrigin_ == _IconOrigin.default.BOTTOM_RIGHT) {
        offset[0] = iconImageSize[0] - size[0] - offset[0];
      }

      if (this.offsetOrigin_ == _IconOrigin.default.BOTTOM_LEFT || this.offsetOrigin_ == _IconOrigin.default.BOTTOM_RIGHT) {
        offset[1] = iconImageSize[1] - size[1] - offset[1];
      }
    }

    this.origin_ = offset;
    return this.origin_;
  };
  /**
   * Get the image URL.
   * @return {string|undefined} Image src.
   * @api
   */


  Icon.prototype.getSrc = function getSrc() {
    return this.iconImage_.getSrc();
  };
  /**
   * @inheritDoc
   * @api
   */


  Icon.prototype.getSize = function getSize() {
    return !this.size_ ? this.iconImage_.getSize() : this.size_;
  };
  /**
   * @override
   */


  Icon.prototype.listenImageChange = function listenImageChange(listener, thisArg) {
    return (0, _events.listen)(this.iconImage_, _EventType.default.CHANGE, listener, thisArg);
  };
  /**
   * Load not yet loaded URI.
   * When rendering a feature with an icon style, the vector renderer will
   * automatically call this method. However, you might want to call this
   * method yourself for preloading or other purposes.
   * @override
   * @api
   */


  Icon.prototype.load = function load() {
    this.iconImage_.load();
  };
  /**
   * @override
   */


  Icon.prototype.unlistenImageChange = function unlistenImageChange(listener, thisArg) {
    (0, _events.unlisten)(this.iconImage_, _EventType.default.CHANGE, listener, thisArg);
  };

  return Icon;
}(_Image.default);

var _default = Icon;
exports.default = _default;
},{"../util.js":"node_modules/ol/util.js","../ImageState.js":"node_modules/ol/ImageState.js","../asserts.js":"node_modules/ol/asserts.js","../color.js":"node_modules/ol/color.js","../events.js":"node_modules/ol/events.js","../events/EventType.js":"node_modules/ol/events/EventType.js","./IconAnchorUnits.js":"node_modules/ol/style/IconAnchorUnits.js","./IconImage.js":"node_modules/ol/style/IconImage.js","./IconOrigin.js":"node_modules/ol/style/IconOrigin.js","./Image.js":"node_modules/ol/style/Image.js"}],"node_modules/ol/style/TextPlacement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/style/TextPlacement
 */

/**
 * Text placement. One of `'point'`, `'line'`. Default is `'point'`. Note that
 * `'line'` requires the underlying geometry to be a {@link module:ol/geom/LineString~LineString},
 * {@link module:ol/geom/Polygon~Polygon}, {@link module:ol/geom/MultiLineString~MultiLineString} or
 * {@link module:ol/geom/MultiPolygon~MultiPolygon}.
 * @enum {string}
 */
var _default = {
  POINT: 'point',
  LINE: 'line'
};
exports.default = _default;
},{}],"node_modules/ol/style/Text.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Fill = _interopRequireDefault(require("./Fill.js"));

var _TextPlacement = _interopRequireDefault(require("./TextPlacement.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/style/Text
 */

/**
 * The default fill color to use if no fill was set at construction time; a
 * blackish `#333`.
 *
 * @const {string}
 */
var DEFAULT_FILL_COLOR = '#333';
/**
 * @typedef {Object} Options
 * @property {string} [font] Font style as CSS 'font' value, see:
 * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/font. Default is '10px sans-serif'
 * @property {number} [maxAngle] When `placement` is set to `'line'`, allow a maximum angle between adjacent characters.
 * The expected value is in radians, and the default is 45° (`Math.PI / 4`).
 * @property {number} [offsetX=0] Horizontal text offset in pixels. A positive will shift the text right.
 * @property {number} [offsetY=0] Vertical text offset in pixels. A positive will shift the text down.
 * @property {boolean} [overflow=false] For polygon labels or when `placement` is set to `'line'`, allow text to exceed
 * the width of the polygon at the label position or the length of the path that it follows.
 * @property {import("./TextPlacement.js").default|string} [placement] Text placement.
 * @property {number} [scale] Scale.
 * @property {boolean} [rotateWithView=false] Whether to rotate the text with the view.
 * @property {number} [rotation=0] Rotation in radians (positive rotation clockwise).
 * @property {string} [text] Text content.
 * @property {string} [textAlign] Text alignment. Possible values: 'left', 'right', 'center', 'end' or 'start'.
 * Default is 'center' for `placement: 'point'`. For `placement: 'line'`, the default is to let the renderer choose a
 * placement where `maxAngle` is not exceeded.
 * @property {string} [textBaseline='middle'] Text base line. Possible values: 'bottom', 'top', 'middle', 'alphabetic',
 * 'hanging', 'ideographic'.
 * @property {import("./Fill.js").default} [fill] Fill style. If none is provided, we'll use a dark fill-style (#333).
 * @property {import("./Stroke.js").default} [stroke] Stroke style.
 * @property {import("./Fill.js").default} [backgroundFill] Fill style for the text background when `placement` is
 * `'point'`. Default is no fill.
 * @property {import("./Stroke.js").default} [backgroundStroke] Stroke style for the text background  when `placement`
 * is `'point'`. Default is no stroke.
 * @property {Array<number>} [padding=[0, 0, 0, 0]] Padding in pixels around the text for decluttering and background. The order of
 * values in the array is `[top, right, bottom, left]`.
 */

/**
 * @classdesc
 * Set text style for vector features.
 * @api
 */

var Text = function Text(opt_options) {
  var options = opt_options || {};
  /**
  * @private
  * @type {string|undefined}
  */

  this.font_ = options.font;
  /**
  * @private
  * @type {number|undefined}
  */

  this.rotation_ = options.rotation;
  /**
  * @private
  * @type {boolean|undefined}
  */

  this.rotateWithView_ = options.rotateWithView;
  /**
  * @private
  * @type {number|undefined}
  */

  this.scale_ = options.scale;
  /**
  * @private
  * @type {string|undefined}
  */

  this.text_ = options.text;
  /**
  * @private
  * @type {string|undefined}
  */

  this.textAlign_ = options.textAlign;
  /**
  * @private
  * @type {string|undefined}
  */

  this.textBaseline_ = options.textBaseline;
  /**
  * @private
  * @type {import("./Fill.js").default}
  */

  this.fill_ = options.fill !== undefined ? options.fill : new _Fill.default({
    color: DEFAULT_FILL_COLOR
  });
  /**
  * @private
  * @type {number}
  */

  this.maxAngle_ = options.maxAngle !== undefined ? options.maxAngle : Math.PI / 4;
  /**
  * @private
  * @type {import("./TextPlacement.js").default|string}
  */

  this.placement_ = options.placement !== undefined ? options.placement : _TextPlacement.default.POINT;
  /**
  * @private
  * @type {boolean}
  */

  this.overflow_ = !!options.overflow;
  /**
  * @private
  * @type {import("./Stroke.js").default}
  */

  this.stroke_ = options.stroke !== undefined ? options.stroke : null;
  /**
  * @private
  * @type {number}
  */

  this.offsetX_ = options.offsetX !== undefined ? options.offsetX : 0;
  /**
  * @private
  * @type {number}
  */

  this.offsetY_ = options.offsetY !== undefined ? options.offsetY : 0;
  /**
  * @private
  * @type {import("./Fill.js").default}
  */

  this.backgroundFill_ = options.backgroundFill ? options.backgroundFill : null;
  /**
  * @private
  * @type {import("./Stroke.js").default}
  */

  this.backgroundStroke_ = options.backgroundStroke ? options.backgroundStroke : null;
  /**
  * @private
  * @type {Array<number>}
  */

  this.padding_ = options.padding === undefined ? null : options.padding;
};
/**
* Clones the style.
* @return {Text} The cloned style.
* @api
*/


Text.prototype.clone = function clone() {
  return new Text({
    font: this.getFont(),
    placement: this.getPlacement(),
    maxAngle: this.getMaxAngle(),
    overflow: this.getOverflow(),
    rotation: this.getRotation(),
    rotateWithView: this.getRotateWithView(),
    scale: this.getScale(),
    text: this.getText(),
    textAlign: this.getTextAlign(),
    textBaseline: this.getTextBaseline(),
    fill: this.getFill() ? this.getFill().clone() : undefined,
    stroke: this.getStroke() ? this.getStroke().clone() : undefined,
    offsetX: this.getOffsetX(),
    offsetY: this.getOffsetY(),
    backgroundFill: this.getBackgroundFill() ? this.getBackgroundFill().clone() : undefined,
    backgroundStroke: this.getBackgroundStroke() ? this.getBackgroundStroke().clone() : undefined
  });
};
/**
* Get the `overflow` configuration.
* @return {boolean} Let text overflow the length of the path they follow.
* @api
*/


Text.prototype.getOverflow = function getOverflow() {
  return this.overflow_;
};
/**
* Get the font name.
* @return {string|undefined} Font.
* @api
*/


Text.prototype.getFont = function getFont() {
  return this.font_;
};
/**
* Get the maximum angle between adjacent characters.
* @return {number} Angle in radians.
* @api
*/


Text.prototype.getMaxAngle = function getMaxAngle() {
  return this.maxAngle_;
};
/**
* Get the label placement.
* @return {import("./TextPlacement.js").default|string} Text placement.
* @api
*/


Text.prototype.getPlacement = function getPlacement() {
  return this.placement_;
};
/**
* Get the x-offset for the text.
* @return {number} Horizontal text offset.
* @api
*/


Text.prototype.getOffsetX = function getOffsetX() {
  return this.offsetX_;
};
/**
* Get the y-offset for the text.
* @return {number} Vertical text offset.
* @api
*/


Text.prototype.getOffsetY = function getOffsetY() {
  return this.offsetY_;
};
/**
* Get the fill style for the text.
* @return {import("./Fill.js").default} Fill style.
* @api
*/


Text.prototype.getFill = function getFill() {
  return this.fill_;
};
/**
* Determine whether the text rotates with the map.
* @return {boolean|undefined} Rotate with map.
* @api
*/


Text.prototype.getRotateWithView = function getRotateWithView() {
  return this.rotateWithView_;
};
/**
* Get the text rotation.
* @return {number|undefined} Rotation.
* @api
*/


Text.prototype.getRotation = function getRotation() {
  return this.rotation_;
};
/**
* Get the text scale.
* @return {number|undefined} Scale.
* @api
*/


Text.prototype.getScale = function getScale() {
  return this.scale_;
};
/**
* Get the stroke style for the text.
* @return {import("./Stroke.js").default} Stroke style.
* @api
*/


Text.prototype.getStroke = function getStroke() {
  return this.stroke_;
};
/**
* Get the text to be rendered.
* @return {string|undefined} Text.
* @api
*/


Text.prototype.getText = function getText() {
  return this.text_;
};
/**
* Get the text alignment.
* @return {string|undefined} Text align.
* @api
*/


Text.prototype.getTextAlign = function getTextAlign() {
  return this.textAlign_;
};
/**
* Get the text baseline.
* @return {string|undefined} Text baseline.
* @api
*/


Text.prototype.getTextBaseline = function getTextBaseline() {
  return this.textBaseline_;
};
/**
* Get the background fill style for the text.
* @return {import("./Fill.js").default} Fill style.
* @api
*/


Text.prototype.getBackgroundFill = function getBackgroundFill() {
  return this.backgroundFill_;
};
/**
* Get the background stroke style for the text.
* @return {import("./Stroke.js").default} Stroke style.
* @api
*/


Text.prototype.getBackgroundStroke = function getBackgroundStroke() {
  return this.backgroundStroke_;
};
/**
* Get the padding for the text.
* @return {Array<number>} Padding.
* @api
*/


Text.prototype.getPadding = function getPadding() {
  return this.padding_;
};
/**
* Set the `overflow` property.
*
* @param {boolean} overflow Let text overflow the path that it follows.
* @api
*/


Text.prototype.setOverflow = function setOverflow(overflow) {
  this.overflow_ = overflow;
};
/**
* Set the font.
*
* @param {string|undefined} font Font.
* @api
*/


Text.prototype.setFont = function setFont(font) {
  this.font_ = font;
};
/**
* Set the maximum angle between adjacent characters.
*
* @param {number} maxAngle Angle in radians.
* @api
*/


Text.prototype.setMaxAngle = function setMaxAngle(maxAngle) {
  this.maxAngle_ = maxAngle;
};
/**
* Set the x offset.
*
* @param {number} offsetX Horizontal text offset.
* @api
*/


Text.prototype.setOffsetX = function setOffsetX(offsetX) {
  this.offsetX_ = offsetX;
};
/**
* Set the y offset.
*
* @param {number} offsetY Vertical text offset.
* @api
*/


Text.prototype.setOffsetY = function setOffsetY(offsetY) {
  this.offsetY_ = offsetY;
};
/**
* Set the text placement.
*
* @param {import("./TextPlacement.js").default|string} placement Placement.
* @api
*/


Text.prototype.setPlacement = function setPlacement(placement) {
  this.placement_ = placement;
};
/**
* Set the fill.
*
* @param {import("./Fill.js").default} fill Fill style.
* @api
*/


Text.prototype.setFill = function setFill(fill) {
  this.fill_ = fill;
};
/**
* Set the rotation.
*
* @param {number|undefined} rotation Rotation.
* @api
*/


Text.prototype.setRotation = function setRotation(rotation) {
  this.rotation_ = rotation;
};
/**
* Set the scale.
*
* @param {number|undefined} scale Scale.
* @api
*/


Text.prototype.setScale = function setScale(scale) {
  this.scale_ = scale;
};
/**
* Set the stroke.
*
* @param {import("./Stroke.js").default} stroke Stroke style.
* @api
*/


Text.prototype.setStroke = function setStroke(stroke) {
  this.stroke_ = stroke;
};
/**
* Set the text.
*
* @param {string|undefined} text Text.
* @api
*/


Text.prototype.setText = function setText(text) {
  this.text_ = text;
};
/**
* Set the text alignment.
*
* @param {string|undefined} textAlign Text align.
* @api
*/


Text.prototype.setTextAlign = function setTextAlign(textAlign) {
  this.textAlign_ = textAlign;
};
/**
* Set the text baseline.
*
* @param {string|undefined} textBaseline Text baseline.
* @api
*/


Text.prototype.setTextBaseline = function setTextBaseline(textBaseline) {
  this.textBaseline_ = textBaseline;
};
/**
* Set the background fill.
*
* @param {import("./Fill.js").default} fill Fill style.
* @api
*/


Text.prototype.setBackgroundFill = function setBackgroundFill(fill) {
  this.backgroundFill_ = fill;
};
/**
* Set the background stroke.
*
* @param {import("./Stroke.js").default} stroke Stroke style.
* @api
*/


Text.prototype.setBackgroundStroke = function setBackgroundStroke(stroke) {
  this.backgroundStroke_ = stroke;
};
/**
* Set the padding (`[top, right, bottom, left]`).
*
* @param {!Array<number>} padding Padding.
* @api
*/


Text.prototype.setPadding = function setPadding(padding) {
  this.padding_ = padding;
};

var _default = Text;
exports.default = _default;
},{"./Fill.js":"node_modules/ol/style/Fill.js","./TextPlacement.js":"node_modules/ol/style/TextPlacement.js"}],"node_modules/ol/style.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Atlas", {
  enumerable: true,
  get: function () {
    return _Atlas.default;
  }
});
Object.defineProperty(exports, "AtlasManager", {
  enumerable: true,
  get: function () {
    return _AtlasManager.default;
  }
});
Object.defineProperty(exports, "Circle", {
  enumerable: true,
  get: function () {
    return _Circle.default;
  }
});
Object.defineProperty(exports, "Fill", {
  enumerable: true,
  get: function () {
    return _Fill.default;
  }
});
Object.defineProperty(exports, "Icon", {
  enumerable: true,
  get: function () {
    return _Icon.default;
  }
});
Object.defineProperty(exports, "IconImage", {
  enumerable: true,
  get: function () {
    return _IconImage.default;
  }
});
Object.defineProperty(exports, "Image", {
  enumerable: true,
  get: function () {
    return _Image.default;
  }
});
Object.defineProperty(exports, "RegularShape", {
  enumerable: true,
  get: function () {
    return _RegularShape.default;
  }
});
Object.defineProperty(exports, "Stroke", {
  enumerable: true,
  get: function () {
    return _Stroke.default;
  }
});
Object.defineProperty(exports, "Style", {
  enumerable: true,
  get: function () {
    return _Style.default;
  }
});
Object.defineProperty(exports, "Text", {
  enumerable: true,
  get: function () {
    return _Text.default;
  }
});

var _Atlas = _interopRequireDefault(require("./style/Atlas.js"));

var _AtlasManager = _interopRequireDefault(require("./style/AtlasManager.js"));

var _Circle = _interopRequireDefault(require("./style/Circle.js"));

var _Fill = _interopRequireDefault(require("./style/Fill.js"));

var _Icon = _interopRequireDefault(require("./style/Icon.js"));

var _IconImage = _interopRequireDefault(require("./style/IconImage.js"));

var _Image = _interopRequireDefault(require("./style/Image.js"));

var _RegularShape = _interopRequireDefault(require("./style/RegularShape.js"));

var _Stroke = _interopRequireDefault(require("./style/Stroke.js"));

var _Style = _interopRequireDefault(require("./style/Style.js"));

var _Text = _interopRequireDefault(require("./style/Text.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./style/Atlas.js":"node_modules/ol/style/Atlas.js","./style/AtlasManager.js":"node_modules/ol/style/AtlasManager.js","./style/Circle.js":"node_modules/ol/style/Circle.js","./style/Fill.js":"node_modules/ol/style/Fill.js","./style/Icon.js":"node_modules/ol/style/Icon.js","./style/IconImage.js":"node_modules/ol/style/IconImage.js","./style/Image.js":"node_modules/ol/style/Image.js","./style/RegularShape.js":"node_modules/ol/style/RegularShape.js","./style/Stroke.js":"node_modules/ol/style/Stroke.js","./style/Style.js":"node_modules/ol/style/Style.js","./style/Text.js":"node_modules/ol/style/Text.js"}],"js/index.js":[function(require,module,exports) {
"use strict";

var _Overlay = _interopRequireDefault(require("ol/Overlay"));

var _fs = require("fs");

var _Vector = _interopRequireDefault(require("ol/layer/Vector.js"));

var _Vector2 = _interopRequireDefault(require("ol/source/Vector.js"));

var _style = require("ol/style.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//#region initailize variables
//Events that fire when page is loaded
var onloaded = []; //DOM value of sidebar

var sidebar = null; //Active content on menubar in the sidebar

var sidebarMenuContent = 0; //Active content in the sidebar

var sidebarContent = ''; //Main graph data

var graphData = []; //Main map object

var map = null; //Previous Screen Size Type

var prvScreenLargeType = window.innerWidth > 700 ? true : false; //#endregion
//#region before loaded works

if (!CSS.supports('backdrop-filter', 'blur(20px)')) {
  document.querySelector("#sidebarAndSearchContainer").classList += " noblur ";
} //#endregion
//#region body loaded event


document.addEventListener("DOMContentLoaded", function () {
  for (var i = 0; i < onloaded.length; i++) {
    onloaded[i]();
  }
}); //#endregion
//#region loadMap

function loadMap() {
  map = new ol.Map({
    target: 'map',
    layers: [new ol.layer.Tile({
      source: new ol.source.OSM()
    })],
    view: new ol.View({
      //Set center
      center: ol.proj.transform([85.31, 27.71], 'EPSG:4326', 'EPSG:3857'),
      zoom: 7,
      extent: ol.proj.transformExtent([84.31, 26.71, 86.31, 28.71], 'EPSG:4326', 'EPSG:3857')
    })
  }); //truck.86e6689a.png
  //bus.e224b6f8.png
  //car.9a9c5182.png
  //var marker;
  //for(var j=30;j<50;j+=0.25){
  //for(var i=60;i<81;i+=0.25){
  //var rnd=Math.random();
  //var alldataKTM=[getESPG(27+(rnd+i)/100,85+((rnd+j))/100),getESPG(27+((rnd+i)+0.25)/100,85+((rnd+j))/100),getESPG(27+((rnd+i)+0.25)/100,85+((rnd+j)+0.25)/100),getESPG(27+((rnd+i))/100,85+((rnd+j)+0.25)/100)];
  //var feature=new ol.Feature({
  //geometry:new ol.geom.Point(getESPG(27+(rnd+i)/100,85+((rnd+j))/100)),
  //geometry:new ol.geom.Circle(getESPG(27+(rnd+i)/100,85+((rnd+j))/100),rnd*50),
  //  geometry:new ol.geom.Polygon([[getESPG(27.675427,85.31723),getESPG(27.675964,85.318053),getESPG(27.675793,85.318536),getESPG(27.67667,85.319094),getESPG(27.677009,85.318643),getESPG(27.679802,85.319695),getESPG(27.6806,85.3169),getESPG(27.680439,85.314867),getESPG(27.680458,85.314432),getESPG(27.67988,85.314008),getESPG(27.676534,85.313499),getESPG(27.675427,85.317672)]])
  //})

  /*
          var style;
          if(rnd>0.7){
            style=new ol.style.Style({
            image: new ol.style.Icon({
              anchor: [0.5, 0.5],
              anchorXUnits: 'fraction',
              anchorYUnits: 'fraction',
              src: '/bike.b6da0fa9.png',
              crossOrigin: 'anonymous',
              color:'#8959A8'
            })
          });
          }
          else if(rnd>0.4){
            style=new ol.style.Style({
              image: new ol.style.Icon({
                anchor: [0.5, 0.5],
                anchorXUnits: 'fraction',
                anchorYUnits: 'fraction',
                src: '/truck.86e6689a.png',
                crossOrigin: 'anonymous',
                color:'#8959A8'
              })
            });
          }
          else if(rnd>0.3){
            style=new ol.style.Style({
              image: new ol.style.Icon({
                anchor: [0.5, 0.5],
                anchorXUnits: 'fraction',
                anchorYUnits: 'fraction',
                src: '/bus.e224b6f8.png',
                crossOrigin: 'anonymous',
                color:'#8959A8'
              })
            });
          }
          else{
            style=new ol.style.Style({
              image: new ol.style.Icon({
                anchor: [0.5, 0.5],
                anchorXUnits: 'fraction',
                anchorYUnits: 'fraction',
                src: '/car.9a9c5182.png',
                crossOrigin: 'anonymous',
                color:'#8959A8'
              })
            });
          }
          feature.setStyle(style);
          
          rnd=(Math.random()+1)/2;
        var vectorSource1 = new ol.source.Vector({
        features: [feature]
      });
      var color='rgba('+rnd*255+',0,0,'+(rnd-0.3)+')';
      var vectorLayer1 = new ol.layer.Vector({
        source: vectorSource1,
        style:new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(0,0,0,0.8)',
            width: 1,
          }),
          fill: new ol.style.Fill({
            color: 'rgba(135,206,255,0.6)'
          }),
        }),
        
        
      });
      map.addLayer(vectorLayer1); 
      */
  //}
  //}
}

onloaded.push(loadMap); //#endregion
//#region Show previous Vehicle data

function showvehicleData() {
  var bikeStyle = new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0.5, 0.5],
      anchorXUnits: 'fraction',
      anchorYUnits: 'fraction',
      src: '/bike.b6da0fa9.png',
      crossOrigin: 'anonymous',
      color: '#8959A8'
    })
  });
  var busStyle = new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0.5, 0.5],
      anchorXUnits: 'fraction',
      anchorYUnits: 'fraction',
      src: '/bus.e224b6f8.png',
      crossOrigin: 'anonymous',
      color: '#8959A8'
    })
  });
  var truckStyle = new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0.5, 0.5],
      anchorXUnits: 'fraction',
      anchorYUnits: 'fraction',
      src: '/truck.86e6689a.png',
      crossOrigin: 'anonymous',
      color: '#8959A8'
    })
  });
  var carStyle = new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0.5, 0.5],
      anchorXUnits: 'fraction',
      anchorYUnits: 'fraction',
      src: '/car.9a9c5182.png',
      crossOrigin: 'anonymous',
      color: '#8959A8'
    })
  });

  for (var j = 30; j < 50; j += 0.25) {
    for (var i = 60; i < 81; i += 0.25) {
      var rnd = Math.random();
      var feature = new ol.Feature({
        geometry: new ol.geom.Point(getESPG(27 + (rnd + i) / 100, 85 + (rnd + j) / 100))
      });
      var style;

      if (rnd > 0.7) {
        style = bikeStyle;
      } else if (rnd > 0.4) {
        style = truckStyle;
      } else if (rnd > 0.3) {
        style = busStyle;
      } else {
        style = carStyle;
      }

      feature.setStyle(style);
      rnd = (Math.random() + 1) / 2;
      var vectorSource1 = new ol.source.Vector({
        features: [feature]
      });
      var vectorLayer1 = new ol.layer.Vector({
        source: vectorSource1
      });
      map.addLayer(vectorLayer1);
    }
  }
} //#endregion


var style = new _style.Style({
  fill: new _style.Fill({
    color: 'rgba(255, 255, 255, 0.6)'
  }),
  stroke: new _style.Stroke({
    color: '#319FD3',
    width: 1
  })
});
var vectorSource1 = null; //#region add a region

function addSingleRegion(data) {
  var formattedData = [];
  data.forEach(function (element) {
    formattedData.push(getESPG(element.x, element.y));
  });
  var feature = new ol.Feature({
    name: "thing",
    geometry: new ol.geom.Polygon([formattedData])
  });
  vectorSource1 = new ol.source.Vector({
    features: [feature]
  });
  var vectorLayer1 = new ol.layer.Vector({
    source: vectorSource1,

    /*style: new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'rgba(0,0,0,0.8)',
        width: 1,
      }),
      fill: new ol.style.Fill({
        color: 'rgba(135,206,255,0.6)'
      }),
    }),
    */
    style: style
  });
  map.addLayer(vectorLayer1);
}

var highlight;
var highlightStyle = new _style.Style({
  stroke: new _style.Stroke({
    color: '#f00',
    width: 1
  }),
  fill: new _style.Fill({
    color: 'rgba(255,0,0,0.1)'
  })
});
var featureOverlay = null;
onloaded.push(function () {
  addSingleRegion([{
    x: 27.675427,
    y: 85.31723
  }, {
    x: 27.675964,
    y: 85.318053
  }, {
    x: 27.675793,
    y: 85.318536
  }, {
    x: 27.67667,
    y: 85.319094
  }, {
    x: 27.677009,
    y: 85.318643
  }, {
    x: 27.679802,
    y: 85.319695
  }, {
    x: 27.6806,
    y: 85.3169
  }, {
    x: 27.680439,
    y: 85.314867
  }, {
    x: 27.67988,
    y: 85.314008
  }, {
    x: 27.676534,
    y: 85.313499
  }, {
    x: 27.675427,
    y: 85.317672
  }]);
  featureOverlay = new _Vector.default({
    source: vectorSource1,
    map: map,
    style: style
  });
  map.on('pointermove', function (evt) {
    if (evt.dragging) {
      return;
    }

    var pixel = map.getEventPixel(evt.originalEvent);
    var feature = map.forEachFeatureAtPixel(pixel, function (feature) {
      return feature;
    });

    if (feature !== highlight) {
      if (highlight) {
        featureOverlay.getSource().removeFeature(highlight);
      }

      if (feature) {
        featureOverlay.getSource().addFeature(feature);
      }

      highlight = feature;
    }
  });
}); //#endregion
//#region Show active showbar indicator

function renderSidebar() {
  sidebar = {
    value: document.querySelector(".sidebar"),
    alltexts: document.querySelectorAll("text"),
    mask: document.querySelector("#maskingRECT"),
    movingbar: document.querySelector(".moving"),
    contentContainer: document.querySelector(".sidebarContent")
  };
  var padding = 10;
  var presentX = 10;

  for (var i = 0; i < sidebar.alltexts.length; i++) {
    sidebar.alltexts[i].setAttribute("x", presentX);
    presentX += sidebar.alltexts[i].getBoundingClientRect().width + padding;
  }

  animateMenuContent(sidebar.alltexts[sidebarMenuContent].innerHTML);
  sidebar.movingbar.style.transform = "translateX(" + (sidebar.alltexts[sidebarMenuContent].getBoundingClientRect().width / 2 + 10) + "px) scaleX(" + sidebar.alltexts[sidebarMenuContent].getBoundingClientRect().width + ")";
  sidebar.mask.addEventListener("click", function (e) {
    for (var i = 0; i < sidebar.alltexts.length; i++) {
      if (i != sidebarMenuContent) {
        console.log(i);

        if (e.x > sidebar.alltexts[i].getBoundingClientRect().left && e.x < sidebar.alltexts[i].getBoundingClientRect().right) {
          var width;

          var _ret = function () {
            animateMenuContent(sidebar.alltexts[i].innerHTML);
            width = 0;

            if (sidebar.movingbar.getBoundingClientRect().left > sidebar.alltexts[i].getBoundingClientRect().left) {
              width = sidebar.movingbar.getBoundingClientRect().right - sidebar.alltexts[i].getBoundingClientRect().left;
              sidebar.movingbar.style.transform = "translateX(" + (-width / 2 + sidebar.alltexts[sidebarMenuContent].getBoundingClientRect().right - sidebar.value.getBoundingClientRect().left) + "px) scaleX(" + width + ")";
            } else {
              width = sidebar.alltexts[i].getBoundingClientRect().right - sidebar.movingbar.getBoundingClientRect().left;
              sidebar.movingbar.style.transform = "translateX(" + (width / 2 + sidebar.alltexts[sidebarMenuContent].getBoundingClientRect().left - sidebar.value.getBoundingClientRect().left) + "px) scaleX(" + width + ")";
            }

            var prvActive = i;
            setTimeout(function () {
              sidebar.movingbar.style.transform = "translateX(" + (sidebar.alltexts[prvActive].getBoundingClientRect().width / 2 + sidebar.alltexts[prvActive].getBoundingClientRect().left - sidebar.value.getBoundingClientRect().left) + "px) scaleX(" + sidebar.alltexts[prvActive].getBoundingClientRect().width + ")";
            }, 200);
            sidebarMenuContent = i;
            return "break";
          }();

          if (_ret === "break") break;
        }
      }
    }
  });
  sidebar.mask.addEventListener("mousemove", function (e) {
    for (var i = 0; i < sidebar.alltexts.length; i++) {
      if (e.x > sidebar.alltexts[i].getBoundingClientRect().left && e.x < sidebar.alltexts[i].getBoundingClientRect().right) {
        sidebar.alltexts[i].style.fontWeight = "800";
      } else sidebar.alltexts[i].style.fontWeight = "500";
    }
  });
  sidebar.mask.addEventListener("mouseout", function (e) {
    for (var i = 0; i < sidebar.alltexts.length; i++) {
      sidebar.alltexts[i].style.fontWeight = "500";
    }
  });
} //#endregion


onloaded.push(renderSidebar); //#region sidebar function

function makeActive() {
  sidebar.movingbar.style.transform = "translateX(" + (sidebar.alltexts[sidebarMenuContent].getBoundingClientRect().width / 2 + 10) + "px) scaleX(" + sidebar.alltexts[sidebarMenuContent].getBoundingClientRect().width + ")";
}

function animateMenuContent(value) {
  if (value != sidebarContent) {
    if (sidebarContent == '') {
      sidebar.contentContainer.querySelector("[contentid='" + value + "']").style.opacity = "1";
      if (sidebar.contentContainer.querySelector("[contentid='" + value + "']").classList.contains("active")) sidebar.contentContainer.querySelector("[contentid='" + value + "']").classList.remove("active");
      sidebar.contentContainer.querySelector("[contentid='" + value + "']").style.transform = "translateX(" + sidebar.contentContainer.getBoundingClientRect().width * 4 + "px)";
      setTimeout(function () {
        sidebar.contentContainer.querySelector("[contentid='" + value + "']").classList += " active";
        sidebar.contentContainer.querySelector("[contentid='" + value + "']").style.transform = "translateX(0px)";
        sidebar.contentContainer.querySelector("[contentid='" + value + "']").style.zIndex = "20";
      }, 10);
    } else {
      sidebar.contentContainer.querySelector("[contentid='" + sidebarContent + "']").style.transform = "translateX(" + -sidebar.contentContainer.getBoundingClientRect().width + "px)";
      sidebar.contentContainer.querySelector("[contentid='" + sidebarContent + "']").style.zIndex = "10";
      sidebar.contentContainer.querySelector("[contentid='" + sidebarContent + "']").style.opacity = "0";
      sidebar.contentContainer.querySelector("[contentid='" + value + "']").style.opacity = "1";
      if (sidebar.contentContainer.querySelector("[contentid='" + value + "']").classList.contains("active")) sidebar.contentContainer.querySelector("[contentid='" + value + "']").classList.remove("active");
      sidebar.contentContainer.querySelector("[contentid='" + value + "']").style.transform = "translateX(" + sidebar.contentContainer.getBoundingClientRect().width * 4 + "px)";
      setTimeout(function () {
        sidebar.contentContainer.querySelector("[contentid='" + value + "']").classList += " active";
        sidebar.contentContainer.querySelector("[contentid='" + value + "']").style.transform = "translateX(0px)";
        sidebar.contentContainer.querySelector("[contentid='" + value + "']").style.zIndex = "20";
      }, 10);
    }

    sidebarContent = value;
  }
} //#endregion
//#region Main graph functions


onloaded.push(function (e) {
  graphData = [{
    x: 0.5,
    y: 0.9
  }, {
    x: 0.5,
    y: 0.65
  }, {
    x: 0.5,
    y: 0.21
  }, {
    x: 0.5,
    y: 0.45
  }, {
    x: 0.5,
    y: 0.74
  }, {
    x: 0.5,
    y: 0.21
  }, {
    x: 0.5,
    y: 0.45
  }, {
    x: 0.5,
    y: 0.76
  }, {
    x: 0.5,
    y: 0.45
  }, {
    x: 0.5,
    y: 0.65
  }, {
    x: 0.5,
    y: 0.21
  }, {
    x: 0.5,
    y: 0.45
  }, {
    x: 0.5,
    y: 0.66
  }, {
    x: 0.5,
    y: 0.37
  }, {
    x: 0.5,
    y: 0.81
  }, {
    x: 0.5,
    y: 0.37
  }, {
    x: 0.5,
    y: 0.65
  }, {
    x: 0.5,
    y: 0.81
  }, {
    x: 0.5,
    y: 0.21
  }, {
    x: 0.5,
    y: 0.45
  }, {
    x: 0.5,
    y: 0.92
  }]; //renderGraph();

  document.querySelector(".graphContainer").addEventListener("mousemove", function (e) {
    var graphContainer = document.querySelector(".graphContainer");
    var height = graphContainer.getBoundingClientRect().height;
    var Actualwidth = graphContainer.getBoundingClientRect().width - 40;
    var changeX = Actualwidth / (graphData.length - 1);
    var xval = e.x - e.target.getBoundingClientRect().left - 10;

    for (var i = graphData.length - 2; i >= 0; i--) {
      if (xval > i * changeX - changeX / 2) {
        document.querySelector(".graphpointer").setAttribute("style", "left:" + ((i + 1) * changeX - 25) + "px; top:" + ((1 - graphData[i].y) * height + 15) + "px;");
        return;
      }
    }
  });
}); //#endregion 
//#region InputActive Setter

function searchBoxFocusEvents() {
  document.querySelector("#searchBox").addEventListener("focus", function () {
    document.querySelector("#searchBoxContainer").classList += " active";
  });
  document.querySelector("#searchBox").addEventListener("focusout", function () {
    document.querySelector("#searchBoxContainer").classList.remove("active");
  });
  /*
  setTimeout(() => {
    addtoSearchPrediction([{
        iconType: "a",
        content: "Pulchowk, Lalitpur"
      },
      {
        iconType: "a",
        content: "Bello"
      },
      {
        iconType: "a",
        content: "Uggggh"
      },
      {
        iconType: "a",
        content: "Huh"
      }
    ]);
  }, 1000);
  setTimeout(() => {
    document.querySelector("#searchBox").value = "Pulchowk, Lalitpur";
    document.querySelector("#sidebarAndSearchContainer").classList += " sidebarActive";
    addtoSearchPrediction([]);
    addSingleRegion([{
        x: 27.675427,
        y: 85.31723
      },
      {
        x: 27.675964,
        y: 85.318053
      },
      {
        x: 27.675793,
        y: 85.318536
      },
      {
        x: 27.67667,
        y: 85.319094
      },
      {
        x: 27.677009,
        y: 85.318643
      },
      {
        x: 27.679802,
        y: 85.319695
      },
      {
        x: 27.6806,
        y: 85.3169
      },
      {
        x: 27.680439,
        y: 85.314867
      },
      {
        x: 27.67988,
        y: 85.314008
      },
      {
        x: 27.676534,
        y: 85.313499
      },
      {
        x: 27.675427,
        y: 85.317672
      }
    ]);
    navigateTo([{
        x: 27.675427,
        y: 85.31723
      },
      {
        x: 27.675964,
        y: 85.318053
      },
      {
        x: 27.675793,
        y: 85.318536
      },
      {
        x: 27.67667,
        y: 85.319094
      },
      {
        x: 27.677009,
        y: 85.318643
      },
      {
        x: 27.679802,
        y: 85.319695
      },
      {
        x: 27.6806,
        y: 85.3169
      },
      {
        x: 27.680439,
        y: 85.314867
      },
      {
        x: 27.67988,
        y: 85.314008
      },
      {
        x: 27.676534,
        y: 85.313499
      },
      {
        x: 27.675427,
        y: 85.317672
      }
    ]);
  }, 3000);
    setTimeout(() => {
    document.querySelector(".lonlat").innerHTML = map.getView().getCenter()[0] + "° N " + map.getView().getCenter()[1] + "° E ";
    addaMarker({
      x: map.getView().getCenter()[0],
      y: map.getView().getCenter()[1]
    })
  }, 5000);
  setTimeout(() => {
    removeSidebar();
  }, 10000);
  setTimeout(() => {
    document.querySelector("#sidebarAndSearchContainer").classList += " sidebarActive";
    showvehicleData();
  }, 12000);
    */
}

onloaded.push(searchBoxFocusEvents); //#endregion
//#region Search Animator

var allSearchSuggestionsCreated = [];
var ActiveSuggs = 0;

function addtoSearchPrediction(data, invalidatePrevious) {
  if (data.length > allSearchSuggestionsCreated.length) {
    document.querySelector("#suggestions").style.height = data.length * 41 + "px";
    document.querySelector("#suggestions").style.maxHeight = data.length * 41 + "px";
    var times = data.length - allSearchSuggestionsCreated.length;

    for (var i = 0; i < times; i++) {
      var nitem = document.createElement("div");
      nitem.classList = "suggestion";
      nitem.innerHTML += "<div class=\"icon\"></div><div class=\"content\"></div>";
      document.querySelector("#suggestions").appendChild(nitem);
      allSearchSuggestionsCreated.push(new Suggestion(0, "", nitem, false));
    }
  } else {
    if (ActiveSuggs < data.length) {
      document.querySelector("#suggestions").style.height = data.length * 41 + "px";
      document.querySelector("#suggestions").style.maxHeight = data.length * 41 + "px";
    } else {
      setTimeout(function () {
        document.querySelector("#suggestions").style.height = document.querySelector("#suggestions").style.maxHeight;
        document.querySelector("#suggestions").style.maxHeight = data.length * 41 + "px";
      }, 500);
    }
  }

  ActiveSuggs = data.length;

  for (var i = 0; i < allSearchSuggestionsCreated.length; i++) {
    if (i < data.length) {
      allSearchSuggestionsCreated[i].iconType = data[i].iconType;
      allSearchSuggestionsCreated[i].content = data[i].content;
      allSearchSuggestionsCreated[i].seen = true;
      allSearchSuggestionsCreated[i].Render();
    } else {
      allSearchSuggestionsCreated[i].seen = false;
      allSearchSuggestionsCreated[i].Render();
    }
  }
} //#endregion
//#region map helper functions


function getESPG(lon, lat) {
  return ol.proj.transform([lat, lon], 'EPSG:4326', 'EPSG:3857');
} //#endregion
//#region suggestion class


var Suggestion =
/*#__PURE__*/
function () {
  function Suggestion(iconType, content, DOMelement, seen) {
    _classCallCheck(this, Suggestion);

    this.iconType = iconType;
    this.content = content;
    this.DOMelement = DOMelement;
    this.seen = seen;
    this.currentVisibility = false;
  }

  _createClass(Suggestion, [{
    key: "Render",
    value: function Render() {
      if (this.seen) {
        if (this.currentVisibility == false) {
          if (this.DOMelement.classList.contains("fadeout")) this.DOMelement.classList.remove("fadeout");
          this.DOMelement.classList += " fadein";
        } //this.DOMelement.querySelector(".icon").src="a.jpg";


        this.DOMelement.querySelector(".content").innerHTML = this.content;
        this.currentVisibility = true;
      } else {
        if (this.currentVisibility == true) {
          if (this.DOMelement.classList.contains("fadein")) this.DOMelement.classList.remove("fadein");
          this.DOMelement.classList += " fadeout";
        }

        this.currentVisibility = false;
      }
    }
  }]);

  return Suggestion;
}(); //#endregion
//#region Navigation


function navigateTo(data) {
  var minx = 100,
      miny = 100,
      maxx = -1000,
      maxy = -1000;

  for (var i = 0; i < data.length; i++) {
    minx = Math.min(data[i].x, minx);
    miny = Math.min(data[i].y, miny);
    maxx = Math.max(data[i].x, maxx);
    maxy = Math.max(data[i].y, maxy);
  }

  var extent1 = getESPG(minx, miny);
  var extent2 = getESPG(maxx, maxy);
  map.getView().fit([extent1[0], extent1[1], extent2[0], extent2[1]], map.getSize());
} //#endregion
//#region Add Marker


function addaMarker(data) {
  var feature = new ol.Feature({
    geometry: new ol.geom.Point([data.x, data.y])
  });
  var vectorSource1 = new ol.source.Vector({
    features: [feature]
  });
  var vectorLayer1 = new ol.layer.Vector({
    source: vectorSource1,
    style: new ol.style.Style({
      image: new ol.style.Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: 'marker.59daef38.png'
      })
    })
  });
  map.addLayer(vectorLayer1);
} //#endregion
//#region sidebar expander events


function addexpanderEvents() {
  document.querySelector(".expander").addEventListener("mousedown", function (e) {
    var prvx = e.x;
    if (!document.querySelector("#sidebarAndSearchContainer").classList.contains("sidebarResizing")) document.querySelector("#sidebarAndSearchContainer").classList += " sidebarResizing";
    var prvWidth = document.querySelector(".sidebar").getBoundingClientRect().width;

    document.onmousemove = function (e) {
      var changeX = e.x - prvx;
      var nx = prvWidth - changeX;

      if (nx > 500) {
        document.querySelector(".sidebar").style.minWidth = nx + "px";
        document.querySelector("#searchBoxContainer").style.minWidth = nx + "px";
        document.querySelector("#whiteRect").style.width = nx + "px";

        if (nx > 700) {
          if (document.querySelector(".allaccdata").classList.contains("small")) document.querySelector(".allaccdata").classList.remove("small");
        } else {
          if (!document.querySelector(".allaccdata").classList.contains("small")) document.querySelector(".allaccdata").classList += " small";
        }
      }

      prvWidth = nx;
      prvx = e.x;
      e = e || window.event;
      if (e.stopPropagation) e.stopPropagation();
      if (e.preventDefault) e.preventDefault();
      e.cancelBubble = true;
      e.returnValue = false;
      return false;
    };

    document.onmouseup = function (e) {
      document.onmousemove = null;
      document.onmouseout = null;
      if (document.querySelector("#sidebarAndSearchContainer").classList.contains("sidebarResizing")) document.querySelector("#sidebarAndSearchContainer").classList.remove("sidebarResizing");
      graph.generatePath();
      e = e || window.event;
      if (e.stopPropagation) e.stopPropagation();
      if (e.preventDefault) e.preventDefault();
      e.cancelBubble = true;
      e.returnValue = false;
      return false;
    };

    e = e || window.event;
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
  });
}

onloaded.push(addexpanderEvents); //#endregion
//#region vertical expander events

function addvertExpanderEvents() {
  document.querySelector(".vertexpander").addEventListener("mousedown", function (e) {
    console.log("abcd");
    var prvy = e.y;
    if (!document.querySelector("#sidebarAndSearchContainer").classList.contains("sidebarResizing")) document.querySelector("#sidebarAndSearchContainer").classList += " sidebarResizing";
    var prvHeight = document.querySelector(".sidebar").getBoundingClientRect().height;
    var acc = 0;

    document.onmousemove = function (e) {
      var changeY = e.y - prvy;
      var ny = prvHeight - changeY;

      if (ny < window.innerHeight - 40) {
        document.querySelector(".sidebar").style.height = ny + "px";
        document.querySelector("#searchBoxContainer").style.bottom = ny - 60 + "px";
      }

      if (ny < 100) {
        document.querySelector(".sidebar").style.height = "0px";
        document.querySelector("#sidebarAndSearchContainer").classList.remove("sidebarActive");
        document.querySelector("#searchBoxContainer").style.bottom = null;
      }

      acc = ny - prvHeight;
      prvHeight = ny;
      prvy = e.y;
      e = e || window.event;
      if (e.stopPropagation) e.stopPropagation();
      if (e.preventDefault) e.preventDefault();
      e.cancelBubble = true;
      e.returnValue = false;
      return false;
    };

    document.onmouseup = function (e) {
      if (acc > 7) {
        document.querySelector(".sidebar").style.height = window.innerHeight - 40 + "px";
        document.querySelector("#searchBoxContainer").style.bottom = window.innerHeight - 40 - 60 + "px";
      } else if (acc < -7) {
        document.querySelector(".vertexpander").style.display = "none";
        document.querySelector(".sidebar").style.height = "0px";
        document.querySelector("#sidebarAndSearchContainer").classList.remove("sidebarActive");
        document.querySelector("#searchBoxContainer").style.bottom = null;
      }

      document.onmousemove = null;
      document.onmouseout = null;
      if (document.querySelector("#sidebarAndSearchContainer").classList.contains("sidebarResizing")) document.querySelector("#sidebarAndSearchContainer").classList.remove("sidebarResizing");
      e = e || window.event;
      if (e.stopPropagation) e.stopPropagation();
      if (e.preventDefault) e.preventDefault();
      e.cancelBubble = true;
      e.returnValue = false;
      return false;
    };

    e = e || window.event;
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
  });
}

onloaded.push(addvertExpanderEvents); //#endregion
//#region Mobile vs Desktop Changer

function screenSizeChangedEvents() {
  if (document.querySelector("#sidebarAndSearchContainer").classList.contains("sidebarActive")) document.querySelector("#searchBoxContainer").style.bottom = document.querySelector(".sidebar").getBoundingClientRect().height - 60 + "px";
  window.addEventListener("resize", function () {
    if (this.window.innerWidth < 700) graph.generatePath();

    if (window.innerWidth < 700 && prvScreenLargeType) {
      document.querySelector(".sidebar").style.minWidth = "100vw";
      document.querySelector(".sidebar").style.height = "200px";
      document.querySelector("#whiteRect").style.width = "100vw";
      if (document.querySelector("#sidebarAndSearchContainer").classList.contains("sidebarActive")) document.querySelector("#searchBoxContainer").style.bottom = "140px";
      prvScreenLargeType = false;
    } else if (window.innerWidth > 700 && prvScreenLargeType == false) {
      document.querySelector(".sidebar").style.minWidth = "";
      document.querySelector(".sidebar").style.height = "100vh";
      document.querySelector("#searchBoxContainer").style.minWidth = "";
      document.querySelector("#searchBoxContainer").style.bottom = "";
      document.querySelector("#whiteRect").style.width = "400px";
      prvScreenLargeType = true;
      graph.generatePath();
    }
  });
}

onloaded.push(screenSizeChangedEvents); //#endregion
//#region Remove Sidebar

function removeSidebar() {
  document.querySelector(".sidebar").style.minWidth = "auto";
  document.querySelector("#searchBoxContainer").style = "";
  if (document.querySelector("#sidebarAndSearchContainer").classList.contains("sidebarActive")) document.querySelector("#sidebarAndSearchContainer").classList.remove("sidebarActive");
} //#endregion
//#region Graph Chart


var Graph =
/*#__PURE__*/
function () {
  function Graph(container, table) {
    _classCallCheck(this, Graph);

    this.mostLargestX = {
      date: {
        year: 2080,
        month: 1,
        day: 1
      },
      time: {
        hour: 1,
        minutes: 1
      }
    };
    this.mostSmallestX = {
      date: {
        year: 2070,
        month: 1,
        day: 1
      },
      time: {
        hour: 1,
        minutes: 1
      }
    };
    this.tableContent = table;
    this.tableDataContent = [];
    this.tableSeenCount = 0;
    this.LargestXIndex = 0;
    this.SmallestXIndex = 0;
    this.largestY = 0;
    this.wholeChart = container.querySelector(".mainChart");
    this.bottomChatAxis = container.querySelector(".horizontalthings");
    this.verticalChatAxis = container.querySelector(".verticalthings");
    this.graphPointer = container.querySelector(".graphpointer");
    this.mainChartPath = this.wholeChart.querySelector("#maingraphPath");
    this.bottomAxisLine = this.bottomChatAxis.querySelector("path");
    this.bottomAxisUnits = this.bottomChatAxis.querySelector(".bottomTexts");
    this.leftAxisLine = this.verticalChatAxis.querySelector("path");
    this.leftTextsUnits = this.verticalChatAxis.querySelector(".leftTexts");
    this.vetline1 = container.querySelector("#vetline1");
    this.vetline2 = container.querySelector("#vetline2");
    this.totalLength = this.subtractedFromFirst(this.mostLargestX, this.mostSmallestX);
    this.findAllScreenVariables();
    var that = this;
    this.vetline1.addEventListener("mousedown", function (ev) {
      var prvx = ev.x;

      document.onmousemove = function (e) {
        var change = e.x - prvx;

        if (that.LargestXIndex - that.SmallestXIndex <= 5 && change > 0) {
          prvx = that.vetline1.getBoundingClientRect().left;
          return;
        } else if (that.LargestXIndex - that.SmallestXIndex >= 5 && Math.abs(change) >= 2) {
          that.SmallestXIndex += change / Math.abs(change);
          if (that.SmallestXIndex < 0) that.SmallestXIndex = 0;
          that.generatePath(true);
          prvx = e.x;
          return;
        }

        e = e || window.event;
        if (e.stopPropagation) e.stopPropagation();
        if (e.preventDefault) e.preventDefault();
        e.cancelBubble = true;
        e.returnValue = false;
        return false;
      };

      document.onmouseup = function () {
        that.generatePath(false);
        document.onmousemove = null;
        document.onmouseup = null;
        ev = ev || window.event;
        if (ev.stopPropagation) ev.stopPropagation();
        if (ev.preventDefault) ev.preventDefault();
        ev.cancelBubble = true;
        ev.returnValue = false;
        return false;
      };
    });
    this.vetline2.addEventListener("mousedown", function (ev) {
      var prvx = ev.x;

      document.onmousemove = function (e) {
        var change = e.x - prvx;

        if (that.LargestXIndex - that.SmallestXIndex <= 5 && change < 0) {
          prvx = that.vetline2.getBoundingClientRect().left;
          return;
        } else if (that.LargestXIndex - that.SmallestXIndex >= 5 && Math.abs(change) >= 2) {
          that.LargestXIndex += change / Math.abs(change);
          if (that.LargestXIndex > that.dataindexmapped.length - 1) that.LargestXIndex = that.dataindexmapped.length - 1;
          that.generatePath(true);
          prvx = e.x;
        }

        e = e || window.event;
        if (e.stopPropagation) e.stopPropagation();
        if (e.preventDefault) e.preventDefault();
        e.cancelBubble = true;
        e.returnValue = false;
        return false;
      };

      document.onmouseup = function () {
        that.generatePath(false);
        document.onmousemove = null;
        document.onmouseup = null;
        ev = ev || window.event;
        if (ev.stopPropagation) ev.stopPropagation();
        if (ev.preventDefault) ev.preventDefault();
        ev.cancelBubble = true;
        ev.returnValue = false;
        return false;
      };
    });
  }

  _createClass(Graph, [{
    key: "addData",
    value: function addData(data) {
      if (data == null) return;
      this.prvDataLength = 0;

      if (this.data == null) {
        this.data = data;
      } else {
        this.prvDataLength = this.data.length;
        this.data.concat(data);
      }

      this.sortData(this.prvDataLength, this.data.length - 1);
      this.dataindexmapped = [];
      var month = this.mostSmallestX.date.month;
      var year = this.mostSmallestX.date.year;

      for (var i = 0; i <= this.totalLength; i++) {
        this.dataindexmapped.push({
          id: i,
          startx: 0,
          endx: 0
        });
      }

      ;
      var index = 1;

      for (var i = 0; i < this.data.length - 1; i++) {
        while (this.data[i].date.month != month || this.data[i].date.year != year) {
          this.dataindexmapped[index - 1].endx = i;
          this.dataindexmapped[index].startx = i;
          month++;

          if (month == 12) {
            year++;
            month = 1;
          }

          index++;
        }
      }

      while (index != this.dataindexmapped.length - 1) {
        this.dataindexmapped[index - 1].endx = this.dataindexmapped.length - 1;
        this.dataindexmapped[index].startx = this.dataindexmapped.length - 1;
        index++;
      }

      this.dataindexmapped[index - 1].endx = this.dataindexmapped.length - 1;
      this.findAndSetMinimumX();
    }
  }, {
    key: "sortData",
    value: function sortData(startIndex, endIndex) {
      if (startIndex >= endIndex) {
        return;
      }

      var pIndex = this.partition(startIndex, endIndex);
      this.sortData(startIndex, pIndex - 1);
      this.sortData(pIndex + 1, endIndex);
    }
  }, {
    key: "partition",
    value: function partition(startIndex, endIndex) {
      var pivot = this.data[endIndex];
      var pIndex = startIndex;

      for (var i = startIndex; i < endIndex; i++) {
        if (this.isFirstNewerDate(pivot, this.data[i])) {
          this.swap(i, pIndex);
          pIndex++;
        }
      }

      this.swap(pIndex, endIndex);
      return pIndex;
    }
  }, {
    key: "isFirstNewerDate",
    value: function isFirstNewerDate(data1, data2) {
      if (data1.date.year > data2.date.year) {
        return true;
      } else if (data1.date.year < data2.date.year) {
        return false;
      } else {
        if (data1.date.month > data2.date.month) return true;else if (data1.date.month < data2.date.month) return false;else {
          if (data1.date.day > data2.date.day) return true;else if (data1.date.day < data2.date.day) return false;else {
            if (data1.time.hour > data2.time.hour) return true;else if (data1.time.hour < data2.time.hour) return false;else {
              if (data1.time.minutes > data2.time.minutes) return true;else if (data1.time.minutes < data2.time.minutes) return false;
            }
          }
        }
      }
    }
  }, {
    key: "swap",
    value: function swap(index1, index2) {
      var tmp = this.data[index1];
      this.data[index1] = this.data[index2];
      this.data[index2] = tmp;
    }
  }, {
    key: "findAndSetMinimumX",
    value: function findAndSetMinimumX() {
      this.SmallestXIndex = 50;
      this.LargestXIndex = 80;
      this.largestY = 0;
      this.smallestY = Number.MAX_SAFE_INTEGER;
      var diff;

      for (var i = this.dataindexmapped[this.SmallestXIndex].id; i <= this.dataindexmapped[this.LargestXIndex].id; i++) {
        diff = this.dataindexmapped[i].endx - this.dataindexmapped[i].startx;
        if (this.largestY < diff) this.largestY = diff;
      }

      this.smallestY = 0;
      this.largestY += 15;
      this.largestY = parseInt(this.largestY);
    }
  }, {
    key: "subtractedFromFirst",
    value: function subtractedFromFirst(data1, data2) {
      return (data1.date.year - data2.date.year) * 12 + (data1.date.month - data2.date.month);
    }
  }, {
    key: "generatePath",
    value: function generatePath(bottomOnly) {
      this.findAllScreenVariables();
      console.log(this.SmallestXIndex);
      var startSquiqly = this.subtractedFromFirst(this.data[this.dataindexmapped[this.SmallestXIndex].startx], this.mostSmallestX);
      var endSquiqly = this.subtractedFromFirst(this.mostLargestX, this.data[this.dataindexmapped[this.LargestXIndex].endx]);
      var bodyLength = this.subtractedFromFirst(this.data[this.dataindexmapped[this.LargestXIndex].endx], this.data[this.dataindexmapped[this.SmallestXIndex].startx]); //b-a

      var unseenlength = this.totalLength - bodyLength; //n

      var nbytxr = unseenlength / this.totalLength * 0.05;
      var sidearea = nbytxr * this.width; //s

      var seenarea = (1 - nbytxr) * this.width;
      var leftarea = sidearea * startSquiqly / unseenlength;
      var rightarea = sidearea * endSquiqly / unseenlength;

      if (!bottomOnly) {
        var gpath = this.renderGraph(seenarea, leftarea);
        this.mainChartPath.setAttribute("d", gpath);
        var path = "M 20 " + this.height + " ";
        path += this.generateYaxispath(this.height);
        this.leftAxisLine.setAttribute("d", path);
        this.showData(this.SmallestXIndex, 20);
      }

      var path = "M 0 2.5 ";
      path += this.generateSquigly(0, leftarea);
      path += this.generatePeaks(leftarea, seenarea, bottomOnly);
      path += this.generateSquigly(seenarea + leftarea, seenarea + leftarea + rightarea);
      this.bottomAxisLine.setAttribute("d", path);
    }
  }, {
    key: "generateYaxispath",
    value: function generateYaxispath(height) {
      var path = "";
      var incr = height / (this.largestY - this.smallestY);
      var dis = 0;
      var steps = this.largestY - this.smallestY;
      var init = parseInt(this.smallestY);
      this.leftTextsUnits.innerHTML += "<text x='0' id=test>" + 888 + "</text>";
      var item = this.leftTextsUnits.querySelector('#test');
      var bottom = item.getBoundingClientRect().height;
      var skip = parseInt(bottom / incr);
      var skipped = skip + 1;
      item.remove();

      for (var i = 0; i <= steps; i++) {
        if (skipped > skip) {
          path += "L 25 " + (height - dis) + "L 20 " + (height - dis) + " L 25 " + (height - dis);
          this.leftTextsUnits.innerHTML += "<text x='0' id=item" + init + ">" + init + "</text>";
          item = this.leftTextsUnits.querySelector('#item' + init);
          bottom = height - dis + item.getBoundingClientRect().height / 4;
          item.setAttribute("y", bottom);
          skipped = 0;
        } else {
          dis += incr;
          init++;
          skipped++;
        }
      }

      return path;
    }
  }, {
    key: "renderGraph",
    value: function renderGraph(area, init) {
      var steps = this.subtractedFromFirst(this.data[this.dataindexmapped[this.LargestXIndex].endx], this.data[this.dataindexmapped[this.SmallestXIndex].startx]) + 1;
      var incr = area / steps;
      var finalPath = "";
      finalPath += "M " + init + " " + (1 - (this.dataindexmapped[this.SmallestXIndex].endx - this.dataindexmapped[this.SmallestXIndex].startx) / this.largestY) * this.height + " ";

      for (var i = 0; i < steps; i++) {
        init += incr;
        finalPath += "L " + init + " " + (1 - (this.dataindexmapped[i].endx - this.dataindexmapped[i].startx) / this.largestY) * this.height + " ";
      }

      return finalPath;
    }
  }, {
    key: "showData",
    value: function showData(startIndex, count) {
      var index = this.data[this.dataindexmapped[this.SmallestXIndex]];

      if (this.tableDataContent.length < count) {
        while (this.tableDataContent.length != count) {
          var div = document.createElement("tr");
          div.classList += "items";
          div.innerHTML += "<div class=\"Vtype\">Vehicle type</div><div class=\"Cause\">Cause</div><div class=\"Deaths\">Deaths</div><div class=\"Date\">Date</div><div class=\"Time\">Time</div><div class=\"VCausingType\">Vehicle Causing Accident Type</div><div class=\"PeopleDead\">People Dead</div><div class=\"DriverCausingAccident\">Driver Causing Accident</div>";
          this.tableContent.appendChild(div);
          this.tableDataContent.push(div);
        }
      }

      var index = 0;
      var start = this.dataindexmapped[startIndex].startx;
      var end = start + count - 1;

      for (var i = start; i <= end; i++) {
        console.log(i);

        switch (this.data[i].vehicleType) {
          case 0:
            this.tableDataContent[index].querySelector(".Vtype").innerHTML = "ट्रक / टीप्पर";
            break;

          case 1:
            this.tableDataContent[index].querySelector(".Vtype").innerHTML = "बस";
            break;

          case 2:
            this.tableDataContent[index].querySelector(".Vtype").innerHTML = "माइक्रो";
            break;

          case 3:
            this.tableDataContent[index].querySelector(".Vtype").innerHTML = "कर, भ्यान, जीप";
            break;

          case 4:
            this.tableDataContent[index].querySelector(".Vtype").innerHTML = "मोटरसाइकल, स्कूटी";
            break;

          case 5:
            this.tableDataContent[index].querySelector(".Vtype").innerHTML = "टय्मपो, टयाक्टर";
            break;

          case 6:
            this.tableDataContent[index].querySelector(".Vtype").innerHTML = "सरिरिक सकतीबाट चल्ने";
            break;
        }

        switch (this.data[i].Cause) {
          case 0:
            this.tableDataContent[index].querySelector(".Cause").innerHTML = "चालकको लपरबाही";
            break;

          case 1:
            this.tableDataContent[index].querySelector(".Cause").innerHTML = "तिभ्र गति";
            break;

          case 2:
            this.tableDataContent[index].querySelector(".Cause").innerHTML = "मापासे";
            break;

          case 3:
            this.tableDataContent[index].querySelector(".Cause").innerHTML = "यांत्रिक गडबाडी";
            break;

          case 4:
            this.tableDataContent[index].querySelector(".Cause").innerHTML = "ओभरटके";
            break;

          case 5:
            this.tableDataContent[index].querySelector(".Cause").innerHTML = "पैदल यात्रुको लापरबाही";
            break;

          case 6:
            this.tableDataContent[index].querySelector(".Cause").innerHTML = "तडफोडबाट क्षती";
            break;

          case 7:
            this.tableDataContent[index].querySelector(".Cause").innerHTML = "सडकको आबस्था";
            break;

          case 8:
            this.tableDataContent[index].querySelector(".Cause").innerHTML = "अन्य (मौसम, चौपाया)";
            break;
        }

        switch (this.data[i].VehicleCausingAccidentType) {
          case 0:
            this.tableDataContent[index].querySelector(".VCausingType").innerHTML = "ट्रक / टीप्पर";
            break;

          case 1:
            this.tableDataContent[index].querySelector(".VCausingType").innerHTML = "बस";
            break;

          case 2:
            this.tableDataContent[index].querySelector(".VCausingType").innerHTML = "माइक्रो";
            break;

          case 3:
            this.tableDataContent[index].querySelector(".VCausingType").innerHTML = "कर, भ्यान, जीप";
            break;

          case 4:
            this.tableDataContent[index].querySelector(".VCausingType").innerHTML = "मोटरसाइकल, स्कूटी";
            break;

          case 5:
            this.tableDataContent[index].querySelector(".VCausingType").innerHTML = "टय्मपो , टयाक्टर";
            break;

          case 6:
            this.tableDataContent[index].querySelector(".VCausingType").innerHTML = "सरिरिक सकतीबाट चल्ने";
            break;
        }

        this.tableDataContent[index].querySelector(".Time").innerHTML = this.data[i].time.hour + ":" + this.data[i].time.minutes;
        var date = this.data[i].date.day + " ";

        switch (this.data[i].date.month) {
          case 1:
            date += "बैसाख";
            break;

          case 2:
            date += "जेठ";
            break;

          case 3:
            date += "असार";
            break;

          case 4:
            date += "श्रवण";
            break;

          case 5:
            date += "भदौ";
            break;

          case 6:
            date += "असोज";
            break;

          case 7:
            date += "कार्तिक";
            break;

          case 8:
            date += "मँगसिर";
            break;

          case 9:
            date += "पुस";
            break;

          case 10:
            date += "माघ";
            break;

          case 11:
            date += "फाल्गुन";
            break;

          case 12:
            date += "चैत्र";
            break;
        }

        date += ", ";
        date += this.data[i].date.year;
        this.tableDataContent[index].querySelector(".Date").innerHTML = date;
        var drivers = "";
        drivers += this.data[i].DriverCausingAccident.age + " बार्से ";

        if (this.data[i].DriverCausingAccident.gender) {
          drivers += "पुरुस";
        } else {
          drivers += "महिला";
        }

        this.tableDataContent[index].querySelector(".DriverCausingAccident").innerHTML = drivers;
        drivers = "";
        drivers += this.data[i].PeopleDead.age + " बार्से ";

        if (this.data[i].PeopleDead.gender) {
          drivers += "पुरुस";
        } else {
          drivers += "महिला";
        }

        this.tableDataContent[index].querySelector(".PeopleDead").innerHTML = drivers;

        switch (this.data[i].Deaths) {
          case 0:
            this.tableDataContent[index].querySelector(".Deaths").innerHTML = "पैदल यात्रु";
            break;

          case 1:
            this.tableDataContent[index].querySelector(".Deaths").innerHTML = "मोटरसाइकिल / स्कूटी";
            break;

          case 2:
            this.tableDataContent[index].querySelector(".Deaths").innerHTML = "ट्रक";
            break;

          case 3:
            this.tableDataContent[index].querySelector(".Deaths").innerHTML = "साइकल";
            break;

          case 4:
            this.tableDataContent[index].querySelector(".Deaths").innerHTML = "बस";
            break;

          case 5:
            this.tableDataContent[index].querySelector(".Deaths").innerHTML = "माइक्रो";
            break;

          case 6:
            this.tableDataContent[index].querySelector(".Deaths").innerHTML = "टय्मपो / टयाक्टर";
            break;

          case 7:
            this.tableDataContent[index].querySelector(".Deaths").innerHTML = "कार";
            break;
        }

        index++;
      }
    }
  }, {
    key: "generatePeaks",
    value: function generatePeaks(init, area, moving) {
      var steps = this.subtractedFromFirst(this.data[this.dataindexmapped[this.LargestXIndex].endx], this.data[this.dataindexmapped[this.SmallestXIndex].startx]) + 1;
      var incr = area / steps;
      var path = "L " + init + " 2.5 L " + init + " 7.5 L " + init + " 2.5 ";
      var year = this.data[this.dataindexmapped[this.SmallestXIndex].startx].date.year;
      this.bottomAxisUnits.innerHTML += "<text x='0' id='btest'>" + (8888 - 88).toString() + "</text>";
      var item = this.bottomAxisUnits.querySelector('#btest');
      var width = item.getBoundingClientRect().width;
      item.remove();
      var skip = parseInt(width * 2.2 / incr);
      var skipped = skip + 1;
      year--;
      var text = year + '-' + 1 .toString();
      var id = text;
      this.vetline1.style.left = init + "px";
      this.bottomAxisUnits.innerHTML = "";

      for (var i = 0; i <= steps; i++) {
        if (skipped > skip || i % 12 == 0 || i == steps) {
          if (i % 12 == 0) {
            year++;
          }

          if (i == steps || i % 12 == 0) {
            text = year.toString() + '-' + (i % 12 + 1).toString();
            id = text;
          } else {
            text = (i % 12 + 1).toString();
            id = year.toString() + '-' + (i % 12 + 1).toString();
          }

          path += "L " + init + " 2.5 L " + init + " 7.5 L " + init + " 2.5 ";
          this.bottomAxisUnits.innerHTML += "<text y='25' id=item" + id + ">" + text + "</text>";
          var item = this.bottomAxisUnits.querySelector('#item' + id);
          if (moving && (i == 0 || i == steps)) item.setAttribute("stroke", '#1b5693');
          item.setAttribute("x", init - item.getBoundingClientRect().width / 2);
          skipped = 0;
        } else {
          skipped++;
        }

        init += incr;
      }

      init -= incr;
      this.vetline2.style.left = init + "px";
      return path;
    }
  }, {
    key: "generateSquigly",
    value: function generateSquigly(startx, endx) {
      var len = endx - startx;
      var rem = len % 5;
      var steps = Math.floor(len / 5);

      if (rem >= 3) {
        steps++;
      }

      steps--;
      var str = "";
      var x = startx;
      var i = 0;

      for (i = 0; i < steps; i++) {
        if (i % 2 == 0) str += "L " + (x + 2.5) + " 0 ";else str += "L " + (x + 2.5) + " 5 ";
        str += "L " + (x + 5) + " 2.5 ";
        x += 5;
      }

      var change = endx - x;
      if (i % 2 == 0) str += "L " + (x + change / 2) + " 0 ";else str += "L " + (x + change / 2) + " 5 ";
      str += "L " + (x + change) + " 2.5 ";
      return str;
    }
  }, {
    key: "findAllScreenVariables",
    value: function findAllScreenVariables() {
      this.width = this.wholeChart.getBoundingClientRect().width - 50;
      this.height = this.wholeChart.getBoundingClientRect().height;
    }
  }]);

  return Graph;
}();

var graph;

function addGraph() {
  graph = new Graph(document.querySelector(".graphContainer"), document.querySelector(".allaccdata"));
  graphData = [];

  for (var i = 0; i < 2000; i++) {
    graphData.push({
      y: Math.floor(Math.random() * 6),
      x: Math.floor(Math.random() * 10),
      vehicleType: Math.floor(Math.random() * 7),
      Deaths: Math.floor(Math.random() * 8),
      PeopleDead: {
        gender: Math.floor(Math.random()),
        age: Math.floor(15 + Math.random() * 40)
      },
      Cause: Math.floor(Math.random() * 9),
      time: {
        hour: Math.floor(1 + Math.random() * 23),
        minutes: Math.floor(1 + Math.random() * 59)
      },
      DriverCausingAccident: {
        gender: Math.floor(Math.random()),
        age: Math.floor(15 + Math.random() * 40)
      },
      VehicleCausingAccidentType: Math.floor(Math.random() * 7),
      //d
      date: {
        year: Math.floor(Math.random() * 10 + 2070),
        month: Math.floor(1 + Math.random() * 11),
        day: Math.floor(1 + Math.random() * 31)
      }
    });
  }

  graph.addData(graphData);
  graph.generatePath();
}

onloaded.push(addGraph); //#endregion
},{"ol/Overlay":"node_modules/ol/Overlay.js","fs":"C:/Users/acer/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/_empty.js","ol/layer/Vector.js":"node_modules/ol/layer/Vector.js","ol/source/Vector.js":"node_modules/ol/source/Vector.js","ol/style.js":"node_modules/ol/style.js"}],"C:/Users/acer/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57783" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/acer/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map