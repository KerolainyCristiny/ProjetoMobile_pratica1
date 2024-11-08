// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.2 (stable) (Tue Feb 7 18:37:17 2023 +0000) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = flutter_sdk.src__material__app;
  const framework = flutter_sdk.src__widgets__framework;
  const scaffold = flutter_sdk.src__material__scaffold;
  const app_bar = flutter_sdk.src__material__app_bar;
  const text = flutter_sdk.src__widgets__text;
  const bottom_navigation_bar = flutter_sdk.src__material__bottom_navigation_bar;
  const bottom_navigation_bar_item = flutter_sdk.src__widgets__bottom_navigation_bar_item;
  const icon = flutter_sdk.src__widgets__icon;
  const icon_data = flutter_sdk.src__widgets__icon_data;
  const basic = flutter_sdk.src__widgets__basic;
  const text_style = flutter_sdk.src__painting__text_style;
  const binding = flutter_sdk.src__widgets__binding;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var $toString = dartx.toString;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: main.MyHomePage.prototype,
        [Widget_key]: null
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: main.HomeScreen.prototype,
        [Widget_key]: null
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: main.SearchScreen.prototype,
        [Widget_key]: null
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: main.ProfileScreen.prototype,
        [Widget_key]: null
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Bottom Navigation Example"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58136
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_shadows]: null,
        [Icon_color]: null,
        [Icon_opticalSize]: null,
        [Icon_grade]: null,
        [Icon_weight]: null,
        [Icon_fill]: null,
        [Icon_size]: null,
        [Icon_icon]: C[9] || CT.C9
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: bottom_navigation_bar_item.BottomNavigationBarItem.prototype,
        [BottomNavigationBarItem_tooltip]: null,
        [BottomNavigationBarItem_backgroundColor]: null,
        [BottomNavigationBarItem_label]: "Home",
        [BottomNavigationBarItem_activeIcon]: C[8] || CT.C8,
        [BottomNavigationBarItem_icon]: C[8] || CT.C8
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58727
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_shadows]: null,
        [Icon_color]: null,
        [Icon_opticalSize]: null,
        [Icon_grade]: null,
        [Icon_weight]: null,
        [Icon_fill]: null,
        [Icon_size]: null,
        [Icon_icon]: C[12] || CT.C12
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: bottom_navigation_bar_item.BottomNavigationBarItem.prototype,
        [BottomNavigationBarItem_tooltip]: null,
        [BottomNavigationBarItem_backgroundColor]: null,
        [BottomNavigationBarItem_label]: "Pesquisa",
        [BottomNavigationBarItem_activeIcon]: C[11] || CT.C11,
        [BottomNavigationBarItem_icon]: C[11] || CT.C11
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58513
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_shadows]: null,
        [Icon_color]: null,
        [Icon_opticalSize]: null,
        [Icon_grade]: null,
        [Icon_weight]: null,
        [Icon_fill]: null,
        [Icon_size]: null,
        [Icon_icon]: C[15] || CT.C15
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: bottom_navigation_bar_item.BottomNavigationBarItem.prototype,
        [BottomNavigationBarItem_tooltip]: null,
        [BottomNavigationBarItem_backgroundColor]: null,
        [BottomNavigationBarItem_label]: "Perfil",
        [BottomNavigationBarItem_activeIcon]: C[14] || CT.C14,
        [BottomNavigationBarItem_icon]: C[14] || CT.C14
      });
    },
    get C6() {
      return C[6] = dart.constList([C[7] || CT.C7, C[10] || CT.C10, C[13] || CT.C13], bottom_navigation_bar_item.BottomNavigationBarItem);
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: main.MyApp.prototype,
        [Widget_key]: null
      });
    }
  }, false);
  var C = Array(17).fill(void 0);
  var I = ["file:///zapp/project/lib/main.dart"];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  var Widget_key = dart.privateName(framework, "Widget.key");
  main.MyApp = class MyApp extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new main.MyApp.new({key: key});
    }
    build(context) {
      return new app.MaterialApp.new({title: "Flutter Bottom Nav", home: C[1] || CT.C1, debugShowCheckedModeBanner: false});
    }
  };
  (main.MyApp.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    main.MyApp.__proto__.new.call(this, {key: key});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.addTypeCaches(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, I[0]);
  main.MyHomePage = class MyHomePage extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new main.MyHomePage.new({key: key});
    }
    createState() {
      return new main._MyHomePageState.new();
    }
  };
  (main.MyHomePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    main.MyHomePage.__proto__.new.call(this, {key: key});
    ;
  }).prototype = main.MyHomePage.prototype;
  dart.addTypeTests(main.MyHomePage);
  dart.addTypeCaches(main.MyHomePage);
  dart.setMethodSignature(main.MyHomePage, () => ({
    __proto__: dart.getMethods(main.MyHomePage.__proto__),
    createState: dart.fnType(framework.State$(main.MyHomePage), [])
  }));
  dart.setLibraryUri(main.MyHomePage, I[0]);
  var _selectedIndex = dart.privateName(main, "_selectedIndex");
  var _pages = dart.privateName(main, "_pages");
  var _onItemTapped = dart.privateName(main, "_onItemTapped");
  var Text_selectionColor = dart.privateName(text, "Text.selectionColor");
  var Text_textHeightBehavior = dart.privateName(text, "Text.textHeightBehavior");
  var Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  var Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  var Text_maxLines = dart.privateName(text, "Text.maxLines");
  var Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  var Text_overflow = dart.privateName(text, "Text.overflow");
  var Text_softWrap = dart.privateName(text, "Text.softWrap");
  var Text_locale = dart.privateName(text, "Text.locale");
  var Text_textDirection = dart.privateName(text, "Text.textDirection");
  var Text_textAlign = dart.privateName(text, "Text.textAlign");
  var Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  var BottomNavigationBarItem_tooltip = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.tooltip");
  var BottomNavigationBarItem_backgroundColor = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.backgroundColor");
  var BottomNavigationBarItem_label = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.label");
  var Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  var Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  var Icon_shadows = dart.privateName(icon, "Icon.shadows");
  var Icon_color = dart.privateName(icon, "Icon.color");
  var Icon_opticalSize = dart.privateName(icon, "Icon.opticalSize");
  var Icon_grade = dart.privateName(icon, "Icon.grade");
  var Icon_weight = dart.privateName(icon, "Icon.weight");
  var Icon_fill = dart.privateName(icon, "Icon.fill");
  var Icon_size = dart.privateName(icon, "Icon.size");
  var IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  var IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  var IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  var IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  var Icon_icon = dart.privateName(icon, "Icon.icon");
  var BottomNavigationBarItem_activeIcon = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.activeIcon");
  var BottomNavigationBarItem_icon = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.icon");
  main._MyHomePageState = class _MyHomePageState extends framework.State$(main.MyHomePage) {
    [_onItemTapped](index) {
      this.setState(dart.fn(() => {
        this[_selectedIndex] = index;
      }, T.VoidTovoid()));
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C[5] || CT.C5}), body: this[_pages][$_get](this[_selectedIndex]), bottomNavigationBar: new bottom_navigation_bar.BottomNavigationBar.new({items: C[6] || CT.C6, currentIndex: this[_selectedIndex], onTap: dart.bind(this, _onItemTapped)})});
    }
    static ['_#new#tearOff']() {
      return new main._MyHomePageState.new();
    }
  };
  (main._MyHomePageState.new = function() {
    this[_selectedIndex] = 0;
    this[_pages] = T.JSArrayOfWidget().of([C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4]);
    main._MyHomePageState.__proto__.new.call(this);
    ;
  }).prototype = main._MyHomePageState.prototype;
  dart.addTypeTests(main._MyHomePageState);
  dart.addTypeCaches(main._MyHomePageState);
  dart.setMethodSignature(main._MyHomePageState, () => ({
    __proto__: dart.getMethods(main._MyHomePageState.__proto__),
    [_onItemTapped]: dart.fnType(dart.void, [core.int]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main._MyHomePageState, I[0]);
  dart.setFieldSignature(main._MyHomePageState, () => ({
    __proto__: dart.getFields(main._MyHomePageState.__proto__),
    [_selectedIndex]: dart.fieldType(core.int),
    [_pages]: dart.finalFieldType(core.List$(framework.Widget))
  }));
  main.HomeScreen = class HomeScreen extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new main.HomeScreen.new({key: key});
    }
    build(context) {
      return new basic.Center.new({child: new text.Text.new("Página Inicial", {style: new text_style.TextStyle.new({fontSize: 24})})});
    }
  };
  (main.HomeScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    main.HomeScreen.__proto__.new.call(this, {key: key});
    ;
  }).prototype = main.HomeScreen.prototype;
  dart.addTypeTests(main.HomeScreen);
  dart.addTypeCaches(main.HomeScreen);
  dart.setMethodSignature(main.HomeScreen, () => ({
    __proto__: dart.getMethods(main.HomeScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.HomeScreen, I[0]);
  main.SearchScreen = class SearchScreen extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new main.SearchScreen.new({key: key});
    }
    build(context) {
      return new basic.Center.new({child: new text.Text.new("Página de Pesquisa", {style: new text_style.TextStyle.new({fontSize: 24})})});
    }
  };
  (main.SearchScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    main.SearchScreen.__proto__.new.call(this, {key: key});
    ;
  }).prototype = main.SearchScreen.prototype;
  dart.addTypeTests(main.SearchScreen);
  dart.addTypeCaches(main.SearchScreen);
  dart.setMethodSignature(main.SearchScreen, () => ({
    __proto__: dart.getMethods(main.SearchScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.SearchScreen, I[0]);
  main.ProfileScreen = class ProfileScreen extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new main.ProfileScreen.new({key: key});
    }
    build(context) {
      return new basic.Center.new({child: new text.Text.new("Página de Perfil", {style: new text_style.TextStyle.new({fontSize: 24})})});
    }
  };
  (main.ProfileScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    main.ProfileScreen.__proto__.new.call(this, {key: key});
    ;
  }).prototype = main.ProfileScreen.prototype;
  dart.addTypeTests(main.ProfileScreen);
  dart.addTypeCaches(main.ProfileScreen);
  dart.setMethodSignature(main.ProfileScreen, () => ({
    __proto__: dart.getMethods(main.ProfileScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.ProfileScreen, I[0]);
  main.main = function main$0() {
    binding.runApp(C[16] || CT.C16);
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2CI,IA1BF,iCAAgB;AACd,UAAoB,6BAGD;AAF8B,QAA9B,AAAkB,6BAElB,eAF2B;;AAEL,QAAF,CAApB;;AAEnB,UAAO,AAAQ,uBAAY;AAKvB,QAJK,AAAqC,qBAA7B,qCAAuB,uBAAW,QAAC;AAG9C,UAFC,AAAQ,sBAAW,2BAA2B,CAC/C;;;wBAIL,SAAC,GAAG;AACL,UAAO,AAAQ,uBAAY;AAIvB,QAHC,AAAQ,sBAAW,wBAAwB,CAC5C,AAAE,CAAD,eACD,AAAW,UAAD;;2DAGM,yCACb,SAAC,MAAM,QAAQ,MAAM;AAC1B,cAAO,AAAQ,uBAAY;AAC4B,YAAlD,AAAQ,sBAAW,wBAAwB,CAAC,IAAI;;;EAI3D;;AAEiB;AAQd,MAPD,MAAS,gCACC;AACS,UAAf;6CAEe;AACmB,UAAjB;;IAGvB;;;;;;;;UC7C4B;AACxB,YAAO,iCACE,uEAEqB;IAEhC;;;QATmB;AAAb,8CAAa,GAAG;;EAAE;;;;;;;;;;;;;;AAgBW;IAAkB;;;QAH7B;AAAlB,mDAAkB,GAAG;;EAAE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oBAeN;AAGnB,MAFF,cAAS;AACe,QAAtB,uBAAiB,KAAK;;IAE1B;UAG0B;AACxB,YAAO,oCACG,sDAGF,AAAM,oBAAC,4CACQ,uFAeL,uCACP;IAGb;;;;;;IAxCI,uBAAiB;IAEF,eAAS;;;EAuC9B;;;;;;;;;;;;;;;;;;;UAM4B;AACxB,YAAO,8BACE,kBACL,0BACO,wCAAoB;IAGjC;;;QAVwB;AAAlB,mDAAkB,GAAG;;EAAE;;;;;;;;;;;;;UAiBH;AACxB,YAAO,8BACE,kBACL,8BACO,wCAAoB;IAGjC;;;QAV0B;AAApB,qDAAoB,GAAG;;EAAE;;;;;;;;;;;;;UAiBL;AACxB,YAAO,8BACE,kBACL,4BACO,wCAAoB;IAGjC;;;QAV2B;AAArB,sDAAqB,GAAG;;EAAE;;;;;;;;;AAhGX,IAArB;EACF;;ECGwB","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant
  };
}));

//# sourceMappingURL=main.js.map
