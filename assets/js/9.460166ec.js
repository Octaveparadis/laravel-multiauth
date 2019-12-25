(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{211:function(s,t,a){"use strict";a.r(t);var e=a(0),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"blade-syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blade-syntax"}},[s._v("#")]),s._v(" Blade Syntax")]),s._v(" "),a("p",[s._v("You can simply use blade syntax for showing or hiding any section for admin with perticular role.")]),s._v(" "),a("h4",{attrs:{id:"_1-using-permitto-blade-syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-using-permitto-blade-syntax"}},[s._v("#")]),s._v(" 1. Using "),a("code",[s._v("permitTo")]),s._v(" blade syntax")]),s._v(" "),a("p",[s._v("You can add access level using "),a("code",[s._v("permitTo")]),s._v(" middleware")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("permitTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'CreateBlog'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Only "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("For")]),s._v(" Admin with permission of `CreateBlog`"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n@endpermitTo\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("blockquote",[a("p",[s._v("Make sure you write permission name exactly as it is, createblog and CreateBlog treated as two different permissions")])]),s._v(" "),a("h4",{attrs:{id:"_2-using-permittoparent-blade-syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-using-permittoparent-blade-syntax"}},[s._v("#")]),s._v(" 2. Using "),a("code",[s._v("permitToParent")]),s._v(" blade syntax")]),s._v(" "),a("p",[s._v("Suppose you want to allow access for any CRUD permission of blog, for example if admin has any permission among create, read, update or delete for blog.")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("permitToParent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'Blog'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Only "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("For")]),s._v(" Admin with any permission "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" `Blog` model "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("span"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Visible only "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" admin has any permissions among `Create"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Update "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("or")]),s._v(" Delete` "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" blog"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("span"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n@endpermitTo\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"access-by-role"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#access-by-role"}},[s._v("#")]),s._v(" Access by Role")]),s._v(" "),a("h4",{attrs:{id:"_3-using-role-blade-syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-using-role-blade-syntax"}},[s._v("#")]),s._v(" 3. Using "),a("code",[s._v("role")]),s._v(" blade syntax")]),s._v(" "),a("p",[s._v("For example, If you want to show a button for admin with role of editor then write.")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("admin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'editor'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Only "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("For")]),s._v(" Editor"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n@endadmin\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"_4-role-of-super-admin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-role-of-super-admin"}},[s._v("#")]),s._v(" 4. Role of "),a("code",[s._v("super")]),s._v(" admin")]),s._v(" "),a("p",[s._v("If you want to add multiple role, you can do like this")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("admin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'editor,publisher,any_role'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" This is visible to admin with all these role"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n@endadmin\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);