(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ae1141c"],{"229e":function(e,t,s){},"3eb8":function(e,t,s){"use strict";var a=s("229e"),l=s.n(a);l.a},"56e2":function(e,t,s){"use strict";var a=s("ec22"),l=s.n(a);l.a},"5aa5":function(e,t,s){"use strict";var a=s("f4ed"),l=s.n(a);l.a},"6a66":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-warpper"},[s("top"),s("el-main",{staticClass:"login-box"},[s("div",{staticClass:"flex-pos login-pos"},[s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticClass:"login-title"},[e._v("申請加入會員")])]),s("el-col",{attrs:{span:24}},[s("el-form",{ref:"loginRule",staticClass:"login-form",attrs:{model:e.loginRule,rules:e.rules}},[s("el-form-item",{attrs:{prop:"user_name"}},[s("el-input",{attrs:{"prefix-icon":"el-icon-postcard",placeholder:"設定使用者名稱",maxlength:10},model:{value:e.loginRule.user_name,callback:function(t){e.$set(e.loginRule,"user_name",t)},expression:"loginRule.user_name"}})],1),s("el-form-item",{attrs:{prop:"user_password"}},[s("el-input",{attrs:{"prefix-icon":"el-icon-lock","show-password":"",placeholder:"設定新密碼",maxlength:12},model:{value:e.loginRule.user_password,callback:function(t){e.$set(e.loginRule,"user_password",t)},expression:"loginRule.user_password"}})],1),s("el-form-item",{attrs:{prop:"check_password"}},[s("el-input",{attrs:{placeholder:"再次確認新密碼","prefix-icon":"el-icon-lock","show-password":"",maxlength:12},model:{value:e.loginRule.check_password,callback:function(t){e.$set(e.loginRule,"check_password",t)},expression:"loginRule.check_password"}})],1),s("el-collapse",{staticStyle:{"text-align":"left"},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[s("el-collapse-item",{attrs:{title:"注意事項",name:"1"}},[s("div",{staticStyle:{color:"#E5C49C"}},[e._v("\n                  1.請務必輸入所有欄位\n                ")]),s("div",[e._v("\n                  2.使用者名稱、密碼 二者不可相同。\n                ")]),s("div",[e._v("\n                  3.為確保您的保單資訊獲得安全控管，設定\n                  使用者名稱、密碼時，請以不易猜測為原則。如:生日、姓名、電話號碼，皆不建議使用。\n                ")]),s("div",[e._v("\n                  4.進行密碼變更時，請於「再次確認新密碼」欄位輸入與「設定新密碼」相同之內容。\n                ")])])],1),s("div",{staticClass:"flex-box"},[s("div",{staticClass:"flex-pos"},[s("el-row",{staticClass:"btn-box"},[s("el-col",{attrs:{xs:24,sm:24,md:24,lg:24}},[s("div",{staticClass:"flex-row",staticStyle:{"margin-bottom":"3rem"}},[s("el-button",{staticClass:"btn-white",on:{click:e.backLogin}},[e._v("取消")]),s("el-button",{staticClass:"btn-blue",on:{click:function(t){return e.submitForm("loginRule")}}},[e._v("送出")])],1)])],1)],1)])],1)],1)],1)],1)]),s("bottom")],1)},l=[],o=s("cebc"),i=s("d953"),n=s("8042"),r=s("2f62"),c={name:"signup3",components:{top:i["a"],bottom:n["a"]},data:function(){var e=this,t=function(t,s,a){setTimeout(function(){s!=e.loginRule.user_password?a(new Error("兩次密碼輸入不同")):a()},1e3)},s=function(t,s,a){setTimeout(function(){s===e.loginRule.user_name?a(new Error("使用者名稱跟密碼相同")):a()},1e3)};return{activeNames:["1"],identifyCode:"1324",identifyCodes:"0123456789abcdwerwshdjeJKDHRJHKOOPLMKQ",rules:{user_name:[{required:!0,message:"請設定使用者名稱",trigger:"blur"}],user_password:[{required:!0,message:"請設定新密碼",trigger:"blur"},{validator:s,trigger:"blur"}],check_password:[{required:!0,message:"再次確認新密碼",trigger:"blur"},{validator:t,trigger:"blur"}]},loginRule:{user_name:"",user_password:"",check_password:""}}},methods:Object(o["a"])({},Object(r["b"])({setDialogStatus:"modal/setDialogStatus"}),{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.setDialogStatus({status:!0,alertRouteWay:"/login",msg:"您已經成功加入會員",type:1})})},backLogin:function(){this.$router.push("/login")}}),computed:Object(o["a"])({},Object(r["c"])("modal",{getDialogStatus:"getDialogStatus",getDialogMsg:"getDialogMsg",getAlertRouteWay:"getAlertRouteWay"}))},u=c,p=(s("56e2"),s("2877")),d=Object(p["a"])(u,a,l,!1,null,"225be5d7",null);t["default"]=d.exports},8042:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-footer",{staticClass:"footer"},[s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticClass:"phone-txt"},[e._v("\n        客服中心電話：0800-015000\n      ")])])],1)],1)},l=[],o={name:"bottom",props:{msg:String}},i=o,n=(s("3eb8"),s("2877")),r=Object(n["a"])(i,a,l,!1,null,"93b75058",null);t["a"]=r.exports},d953:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-top-box"},[s("el-header",{staticClass:"header"},[s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticClass:"sm-top"})]),s("el-col",{attrs:{span:24}},[s("div",{staticClass:"logo-prudential"})])],1)],1)],1)},l=[],o={name:"top",props:{msg:String}},i=o,n=(s("5aa5"),s("2877")),r=Object(n["a"])(i,a,l,!1,null,"221c737a",null);t["a"]=r.exports},ec22:function(e,t,s){},f4ed:function(e,t,s){}}]);