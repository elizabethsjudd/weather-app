"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[982],{"./src/components/location-form/location-form.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>location_form_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),reusable=__webpack_require__("./src/components/reusable/index.ts"),USStateValues={AL:"Alabama",AK:"Alaska",AZ:"Arizona",AR:"Arkansas",CA:"California",CO:"Colorado",CT:"Connecticut",DE:"Delaware",FL:"Florida",GA:"Georgia",HI:"Hawaii",ID:"Idaho",IL:"Illinois",IN:"Indiana",IA:"Iowa",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MT:"Montana",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NY:"New York",NC:"North Carolina",ND:"North Dakota",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PA:"Pennsylvania",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VA:"Virginia",WA:"Washington",WV:"West Virginia",WI:"Wisconsin",WY:"Wyoming"},asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),utilities=__webpack_require__("./src/foundations/scripts/utilities.ts"),getCoordinatesFromAddress=function(){var _ref2=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(_ref,callback){var street,city,state,zip;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:street=_ref.street,city=_ref.city,state=_ref.state,zip=_ref.zip,(0,utilities.e)("/api/geocoder/locations/address?street=".concat(encodeURIComponent(street.trim()),"&city=").concat(encodeURIComponent(city.trim()),"&state=").concat(encodeURIComponent(state.trim()),"&zip=").concat(encodeURIComponent(zip.trim()),"&benchmark=Public_AR_Current&format=json"),callback);case 2:case"end":return _context.stop()}}),_callee)})));return function getCoordinatesFromAddress(_x,_x2){return _ref2.apply(this,arguments)}}(),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),location_form_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/components/location-form/location-form.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(location_form_module.Z,options);const location_form_location_form_module=location_form_module.Z&&location_form_module.Z.locals?location_form_module.Z.locals:void 0;var _Default$parameters,_Default$parameters2,_Default$parameters2$,__jsx=react.createElement,LocationForm=function LocationForm(_ref){var hookChange=_ref.hookChange,_React$useState=react.useState(""),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),formValidation=_React$useState2[0],setFormValidation=_React$useState2[1];return __jsx(react.Fragment,null,""!==formValidation&&__jsx(reusable.P_,{attrs:{className:location_form_location_form_module.notification,"data-testid":"form-error"},kind:"error",title:"Error"},formValidation),__jsx("form",{className:location_form_location_form_module.form,onSubmit:function onSubmit(event){event.preventDefault();var form=event.target;getCoordinatesFromAddress({city:form.city.value,state:form.state.value,street:form.street.value,zip:form.zip.value},(function(data){var locationData=data;try{var _locationData$errors;if(locationData.errors&&locationData.errors.length>0)hookChange&&hookChange({x:0,y:0}),setFormValidation(null===(_locationData$errors=locationData.errors)||void 0===_locationData$errors?void 0:_locationData$errors.join("; "));else 0===locationData.result.addressMatches.length?(hookChange&&hookChange({x:0,y:0}),setFormValidation("Invalid address/ Address not found in database, try a new address")):(hookChange&&hookChange(locationData.result.addressMatches[0].coordinates),setFormValidation(""))}catch(_unused){hookChange&&hookChange({x:0,y:0}),setFormValidation("There was an issue contacting the database")}}))}},__jsx("p",{className:location_form_location_form_module.helperText},"* Denotes required fields"),__jsx(reusable.__,{attrs:{htmlFor:"street"}},"Street*"),__jsx(reusable.II,{attrs:{"aria-required":!0,id:"street",maxLength:100,name:"street",onBlur:function validateStreet(event){event.preventDefault(),""===event.target.value.trim()?setFormValidation("A street address is required"):setFormValidation("")},placeholder:"123 Main St.",required:!0}}),__jsx("div",{className:location_form_location_form_module.addressRow},__jsx("div",{className:location_form_location_form_module.city},__jsx(reusable.__,{attrs:{htmlFor:"city"}},"City"),__jsx(reusable.II,{attrs:{id:"city",name:"city",placeholder:"Nowhere"}})),__jsx("div",null,__jsx(reusable.__,{attrs:{htmlFor:"state"}},"State"),__jsx(reusable.Ph,{attrs:{defaultValue:"",id:"state",name:"state"}},__jsx(react.Fragment,null,__jsx(reusable.$m,{attrs:{disabled:!0,value:""}},"Select your state"),USStateValues&&Object.keys(USStateValues).map((function(abbr){return __jsx(reusable.$m,{attrs:{value:abbr},key:abbr},USStateValues[abbr])}))))),__jsx("div",null,__jsx(reusable.__,{attrs:{htmlFor:"zip"}},"Zip code"),__jsx(reusable.II,{attrs:{id:"zip",name:"zip",onBlur:function validateZip(event){event.target.value.match(/^[0-9]{5}(?:-[0-9]{4})?$/)?setFormValidation(""):setFormValidation("Invalid zip code, enter a 5-digit number")},placeholder:"12345"}}))),__jsx(reusable.zx,{attrs:{className:location_form_location_form_module.button,type:"submit"},kind:"primary",text:"Get location"})))};LocationForm.__docgenInfo={description:"",methods:[],displayName:"LocationForm"};try{LocationForm.displayName="LocationForm",LocationForm.__docgenInfo={description:"",displayName:"LocationForm",props:{hookChange:{defaultValue:null,description:"",name:"hookChange",required:!1,type:{name:"((arg0: AddressCoordinates) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/location-form/index.tsx#LocationForm"]={docgenInfo:LocationForm.__docgenInfo,name:"LocationForm",path:"src/components/location-form/index.tsx#LocationForm"})}catch(__react_docgen_typescript_loader_error){}var location_form_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const location_form_stories={component:LocationForm,title:"App Components/LocationForm"};var Default={render:function render(){return location_form_stories_jsx(LocationForm,null)}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  render: () => <LocationForm />\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/components/location-form/location-form.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".location-form_u-visuallyHidden__JNsTr{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.location-form_u-focus-wrapper__GutLX{position:relative}.location-form_form__bzWsk{display:flex;flex-direction:column}.location-form_helperText__9mrXt{font-size:var(--type-size-text-xsmall)}.location-form_button__jtHnZ{align-self:flex-end;margin-top:var(--space-stack)}@media(width >= 43.75rem){.location-form_form__bzWsk{max-width:50rem}.location-form_addressRow__K2Fhw{display:flex;gap:var(--space-inline-related)}.location-form_city__FTRTs{flex-grow:100}}","",{version:3,sources:["webpack://./src/foundations/styles/_utilities.scss","webpack://./src/components/location-form/location-form.module.scss"],names:[],mappings:"AA0BA,uCACC,kBAAA,CACA,oBAAA,CACA,UAAA,CACA,eAAA,CACA,iBAAA,CACA,kBAAA,CACA,SAAA,CAMD,sCACC,iBAAA,CCrCD,2BACC,YAAA,CACA,qBAAA,CAGD,iCACC,sCAAA,CAGD,6BACC,mBAAA,CACA,6BAAA,CAGD,0BACC,2BACC,eDbuB,CCiBxB,iCACC,YAAA,CACA,+BAAA,CAGD,2BACC,aAAA,CAAA",sourcesContent:["@use \"sass:string\";\n@use './tokens/contextual/z-index.scss' as *;\n@use 'sass:math';\n\n// Variables\n// ---------------------------------------------------------\n$max-full-width-content: 50rem;\n\n// Functions\n// ---------------------------------------------------------\n\n/// Converts pixels to rems\n/// @group functions\n/// @param {Number} $value - Pixel value to convert\n/// @param {Number} $baseline - Baseline value to use, defaults to 16 the current UX standard\n/// @returns {Number} The rem equivalent of $value\n/// @example rem(600)\n@function rem($value, $baseline: 16) {\n\t$rem-value: (math.div($value, 16)) + rem;\n\n\t@return $rem-value;\n}\n\n// Accessibility Utilities\n// ---------------------------------------------------------\n\n.u-visuallyHidden {\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n}\n\n// Focus utilities\n// ---------------------------------------------------------\n\n.u-focus-wrapper {\n\tposition: relative;\n}\n\n/// Used to create a consistent focus indicator for interactive elements\n/// @group mixins\n/// @param {String} $element-radius - Used with \"element\" setup to apply a border radius to the focus indicator\n/// \tShould be set to a CSS token. Default is var(--border-radius-control).\n/// @param {String} $pseudo-element - Used with the \"element\" setup to allow developers to choose which pseudo element\n/// \tis used.  Available options are \"before\" (default) and \"after\"\n/// @param {String} $is-inline-element - Used with the \"element\" setup with a self-closing element. Requires wrapping the\n/// \telement with `div.u-focus-wrapper` and have an immediate sibling `span.u-focus-indicator`. See the input component\n/// \tas an example. Available options are \"true\", \"false\" (default)\n/// @param {String} $border-width - the border width of the element having focus applied to ensure the offset\n/// \tis correct. Default is '0px'\n/// \n/// @example @include focus; // Generates the default version\n@mixin focus($element-radius: 'var(--border-radius-control)', $pseudo-element: 'after', $is-inline-element: 'false', $border-width: '0px') {\n\t$focus-selector: ':focus-visible';\n\n\t// In Safari, border radius isn't applied to outlines. Using a pseudo element allows us\n\t// to achieve a similar effect however inline elements do not support pseudo elements which\n\t// is why an additional element is applied after the element.\n\t@if $is-inline-element == 'true' {\n\t\t$focus-selector: ':focus-visible + .u-focus-indicator';\n\t} @else {\n\t\t// Make sure the element has position relative\n\t\tposition: relative;\n\t}\n\n\t&#{string.unquote($focus-selector)} {\n\t\t&::#{string.unquote($pseudo-element)} {\n\t\t\tborder: var(--line-width-focus) solid var(--color-focus);\n\t\t\tborder-radius: calc(#{string.unquote($element-radius)} + var(--line-width-focus) + var(--space-offset-focus));\n\t\t\tcontent: '';\n\t\t\tdisplay: block;\n\t\t\tinset: calc((var(--space-offset-focus) + var(--line-width-focus) + #{string.unquote($border-width)}) * -1);\n\t\t\tposition: absolute;\n\t\t\tz-index: $z-index-focus;\n\t\t}\n\t}\n}\n\n// Text Utilities\n// ---------------------------------------------------------\n\n/// Used to create a consistent text styles across components\n/// @param {String} $size - Sets the size modifier for the font and line-height\n/// \tAvailable options are \"xsmall\", \"small\", \"medium\" (default), \"large\".\n/// @param {String} $is-interactive - Use when the text is within (e.g., button)\n///     or associated to an interactive element (e.g., label). Available options\n///     are \"true\", \"false\" (default)\n/// \n/// @example @include text($size: 'xsmall', $is-interactive: 'true');\n@mixin text($size: 'medium', $is-interactive: 'false') {\n\t$size-modifier: -#{$size};\n\t$token: 'text';\n\n\t@if $size == 'medium' {\n\t\t$size-modifier: ''\n\t}\n\n\t@if $is-interactive == 'true' {\n\t\t$token: 'interactive'\n\t}\n\n\tfont-size: var(--type-size-text#{$size-modifier});\n\tfont-weight: var(--type-weight-#{$token});\n\tline-height: var(--type-line-height-text#{$size-modifier});\n}\n\n// Helper mixins and SCSS variables related to control elements\n// (e.g., buttons, inputs, selects, etc.)\n// ---------------------------------------------------------\n\n$control-padding: var(--space-inset-control);\n$control-border-color: var(--color-line);\n$control-border-width: var(--line-width-control);\n\n/// Used to create a consistent styling across various controls\n/// Mixin includes hover and partial focus states\n/// \n/// @example @include common-control-styles;\n@mixin common-control-styles() {\n\tbackground: white;\n\tborder: $control-border-width solid $control-border-color;\n\tborder-radius: var(--border-radius-control);\n\tbox-sizing: border-box;\n\tmin-height: var(--size-large);\n\tpadding: 0 $control-padding;\n\ttransition: all 0.2s ease;\n\ttransition-property: color, background-color, border-color;\n\n\t&:hover {\n\t\tborder-color: var(--color-line-hover);\n\t\tcolor: var(--color-text-hover);\n\t}\n\n\t&:focus,\n\t&:focus-visible {\n\t\tborder-color: var(--color-line-hover);\n\t\toutline: none;\n\t}\n}\n","@use '../../foundations/styles/tokens/global/breakpoints.scss' as *;\n@use '../../foundations/styles/utilities' as *;\n\n.form {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.helperText {\n\tfont-size: var(--type-size-text-xsmall);\n}\n\n.button {\n\talign-self: flex-end;\n\tmargin-top: var(--space-stack);\n}\n\n@media (width >= $breakpoint-01) {\n\t.form {\n\t\tmax-width: $max-full-width-content;\n\t}\n\n    \n\t.addressRow {\n\t\tdisplay: flex;\n\t\tgap: var(--space-inline-related);\n\t}\n\n\t.city {\n\t\tflex-grow: 100;\n\t}\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"u-visuallyHidden":"location-form_u-visuallyHidden__JNsTr","u-focus-wrapper":"location-form_u-focus-wrapper__GutLX",form:"location-form_form__bzWsk",helperText:"location-form_helperText__9mrXt",button:"location-form_button__jtHnZ",addressRow:"location-form_addressRow__K2Fhw",city:"location-form_city__FTRTs"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);