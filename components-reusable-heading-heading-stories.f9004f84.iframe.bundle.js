"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[368],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./src/components/reusable/heading/heading.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_home_runner_work_weather_app_weather_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/reusable/heading/constants.ts"),_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/reusable/heading/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_weather_app_weather_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={args:{children:"Hello world",kind:_constants__WEBPACK_IMPORTED_MODULE_2__.c.kind,level:_constants__WEBPACK_IMPORTED_MODULE_2__.c.level,size:_constants__WEBPACK_IMPORTED_MODULE_2__.c.size},argTypes:{children:{control:{type:"text"}},kind:{control:{type:"select"},options:_constants__WEBPACK_IMPORTED_MODULE_2__.b.kinds},level:{control:{type:"select"},options:_constants__WEBPACK_IMPORTED_MODULE_2__.b.levels},size:{control:{type:"select"},options:_constants__WEBPACK_IMPORTED_MODULE_2__.b.sizes}},component:_index__WEBPACK_IMPORTED_MODULE_3__.X,title:"Reusable/Heading"};var Default={render:function render(args){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_index__WEBPACK_IMPORTED_MODULE_3__.X,args,args.children))}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  render: args => <>\n            <Heading {...args}>{args.children}</Heading>\n        </>\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})},"./src/components/reusable/heading/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>allowedValues,c:()=>defaults});var allowedValues={kinds:["headline","title","display"],levels:[1,2,3,4,5,6],sizes:["large","medium","small","xsmall"]},defaults={kind:"title",level:2,size:"medium"}},"./src/components/reusable/heading/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Heading});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),constants=__webpack_require__("./src/components/reusable/heading/constants.ts"),react=__webpack_require__("./node_modules/react/index.js"),utilities=__webpack_require__("./src/foundations/scripts/utilities.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),heading_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/components/reusable/heading/heading.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(heading_module.Z,options);const heading_heading_module=heading_module.Z&&heading_module.Z.locals?heading_module.Z.locals:void 0;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}var Heading=function Heading(_ref){var _ref$attrs=_ref.attrs,attrs=void 0===_ref$attrs?{}:_ref$attrs,_ref$level=_ref.level,level=void 0===_ref$level?constants.c.level:_ref$level,_ref$kind=_ref.kind,kind=void 0===_ref$kind?constants.c.kind:_ref$kind,_ref$size=_ref.size,size=void 0===_ref$size?constants.c.size:_ref$size,children=_ref.children,customTag="h".concat(level),attributes=(0,utilities.j)(attrs,{className:"".concat(heading_heading_module.heading," ").concat(heading_heading_module["heading--".concat(kind,"--").concat(size)]," ").concat(heading_heading_module["heading--".concat(kind)])});return react.createElement(customTag,function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},attributes),children)};Heading.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{attrs:{defaultValue:{value:"{}",computed:!1},required:!1},level:{defaultValue:{value:"defaults.level",computed:!0},required:!1},kind:{defaultValue:{value:"defaults.kind",computed:!0},required:!1},size:{defaultValue:{value:"defaults.size",computed:!0},required:!1}}};try{Heading.displayName="Heading",Heading.__docgenInfo={description:"",displayName:"Heading",props:{attrs:{defaultValue:{value:"{}"},description:"",name:"attrs",required:!1,type:{name:"AttrsObject"}},kind:{defaultValue:{value:"defaults.kind"},description:"",name:"kind",required:!1,type:{name:"enum",value:[{value:'"title"'},{value:'"headline"'},{value:'"display"'}]}},level:{defaultValue:{value:"defaults.level"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:"3"},{value:"2"},{value:"1"},{value:"4"},{value:"5"},{value:"6"}]}},size:{defaultValue:{value:"defaults.size"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/reusable/heading/index.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"src/components/reusable/heading/index.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/scripts/utilities.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>fetchAPIRequest,j:()=>combineAttributes});var _home_runner_work_weather_app_weather_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_home_runner_work_weather_app_weather_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_weather_app_weather_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_home_runner_work_weather_app_weather_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_weather_app_weather_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}var combineAttributes=function combineAttributes(attributes){var defaults=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},dynamicClass=arguments.length>2?arguments[2]:void 0,className="";return className=defaults.className?"".concat(className," ").concat(defaults.className):className,className=attributes.className?"".concat(className," ").concat(attributes.className):className,className=dynamicClass?"".concat(className," ").concat(dynamicClass):className,Object.assign({},defaults,attributes,function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_weather_app_weather_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},""!==className&&{className}))},fetchAPIRequest=function(){var _ref=(0,_home_runner_work_weather_app_weather_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_home_runner_work_weather_app_weather_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee(requestURL,callback){var json,response;return _home_runner_work_weather_app_weather_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.prev=0,_context.next=3,fetch(requestURL);case 3:return response=_context.sent,_context.next=6,response.json();case 6:json=_context.sent,_context.next=12;break;case 9:_context.prev=9,_context.t0=_context.catch(0),_context.t0 instanceof SyntaxError?callback({details:_context.t0,error:"SyntaxError"}):callback({details:_context.t0,error:"General error"});case 12:json&&callback(json);case 13:case"end":return _context.stop()}}),_callee,null,[[0,9]])})));return function fetchAPIRequest(_x,_x2){return _ref.apply(this,arguments)}}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/components/reusable/heading/heading.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"*+.heading_heading__PTRmq{margin-top:2rem}.heading_heading__PTRmq{--heading-family: var(--font-family-01);--heading-size: var(--type-size-headline);--heading-weight: var(--type-weight-headline);--heading-height: var(--type-line-height-headline);color:var(--color-text-heading);display:flex;font-family:var(--heading-family);font-size:var(--heading-size);font-weight:var(--heading-weight);line-height:var(--heading-height)}.heading_heading--headline__BEUcn{--heading-size: var(--type-size-headline);--heading-weight: var(--type-weight-headline);--heading-height: var(--type-line-height-headline)}.heading_heading--title__P7wSh{--heading-size: var(--type-size-text);--heading-weight: var(--type-weight-title);--heading-height: var(--type-line-height-text)}.heading_heading--title--secondary__sHckk{--heading-weight: var(--type-weight-title-secondary)}.heading_heading--display__q0_fG{--heading-size: var(--type-size-display);--heading-weight: var(--type-weight-display);--heading-height: var(--type-line-height-display)}.heading_heading--headline--large__f8vy0{--heading-size: var(--type-size-headline-large);--heading-height: var(--type-line-height-headline-large)}.heading_heading--headline--small__SfV4S{--heading-size: var(--type-size-headline-small);--heading-height: var(--type-line-height-headline-small)}.heading_heading--title--large__erOH1{--heading-size: var(--type-size-text-large);--heading-height: var(--type-line-height-text-large)}.heading_heading--title--small__UeaMY{--heading-size: var(--type-size-text-small);--heading-height: var(--type-line-height-text-small)}.heading_heading--title--xsmall__s8VvA{--heading-size: var(--type-size-text-xsmall);--heading-height: var(--type-line-height-text-xsmall)}","",{version:3,sources:["webpack://./src/components/reusable/heading/heading.module.scss"],names:[],mappings:"AAAA,0BACC,eAAA,CAGD,wBACC,uCAAA,CACA,yCAAA,CACA,6CAAA,CACA,kDAAA,CAEA,+BAAA,CACA,YAAA,CACA,iCAAA,CACA,6BAAA,CACA,iCAAA,CACA,iCAAA,CAGD,kCACC,yCAAA,CACA,6CAAA,CACA,kDAAA,CAGD,+BACC,qCAAA,CACA,0CAAA,CACA,8CAAA,CAGD,0CACC,oDAAA,CAID,iCACC,wCAAA,CACA,4CAAA,CACA,iDAAA,CAyBC,yCACC,+CAAA,CACA,wDAAA,CAFD,yCACC,+CAAA,CACA,wDAAA,CAFD,sCACC,2CAAA,CACA,oDAAA,CAFD,sCACC,2CAAA,CACA,oDAAA,CAFD,uCACC,4CAAA,CACA,qDAAA",sourcesContent:["* + .heading {\n\tmargin-top: 2rem;\n}\n\n.heading {\n\t--heading-family: var(--font-family-01);\n\t--heading-size: var(--type-size-headline);\n\t--heading-weight: var(--type-weight-headline);\n\t--heading-height: var(--type-line-height-headline);\n\n\tcolor: var(--color-text-heading);\n\tdisplay: flex;\n\tfont-family: var(--heading-family);\n\tfont-size: var(--heading-size);\n\tfont-weight: var(--heading-weight);\n\tline-height: var(--heading-height);\n}\n\n.heading--headline {\n\t--heading-size: var(--type-size-headline);\n\t--heading-weight: var(--type-weight-headline);\n\t--heading-height: var(--type-line-height-headline);\n}\n\n.heading--title {\n\t--heading-size: var(--type-size-text);\n\t--heading-weight: var(--type-weight-title);\n\t--heading-height: var(--type-line-height-text);\n}\n\n.heading--title--secondary {\n\t--heading-weight: var(--type-weight-title-secondary);\n}\n\n// There is only 1 size variant of display\n.heading--display {\n\t--heading-size: var(--type-size-display);\n\t--heading-weight: var(--type-weight-display);\n\t--heading-height: var(--type-line-height-display);\n}\n\n// ---- Size modifier ----\n// There are also title use-cases but they follow a different scale/structure\n$heading-use-cases: 'headline', 'title';\n\n// There are 3 sizes: small, medium, and large.\n// Medium is the default\n$heading-sizes: 'large', 'small';\n\n// There are 4 sizes: xsmall, small, medium, and large.\n// Medium is the default\n$title-sizes: 'large', 'small', 'xsmall';\n\n@each $use-case in $heading-use-cases {\n\t$sizes: $heading-sizes;\n\t$contextual-token: $use-case;\n\n\t@if $use-case == 'title' {\n\t\t$sizes: $title-sizes;\n\t\t$contextual-token: 'text'\n\t}\n\n\t@each $size in $sizes {\n\t\t.heading--#{$use-case}--#{$size} {\n\t\t\t--heading-size: var(--type-size-#{$contextual-token}-#{$size});\n\t\t\t--heading-height:  var(--type-line-height-#{$contextual-token}-#{$size});\n\t\t}\n\t}\n}\n\n\n\n\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={heading:"heading_heading__PTRmq","heading--headline":"heading_heading--headline__BEUcn","heading--title":"heading_heading--title__P7wSh","heading--title--secondary":"heading_heading--title--secondary__sHckk","heading--display":"heading_heading--display__q0_fG","heading--headline--large":"heading_heading--headline--large__f8vy0","heading--headline--small":"heading_heading--headline--small__SfV4S","heading--title--large":"heading_heading--title--large__erOH1","heading--title--small":"heading_heading--title--small__UeaMY","heading--title--xsmall":"heading_heading--title--xsmall__s8VvA"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);