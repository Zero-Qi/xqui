import button  from "../packages/button.vue"

const install = function (vue){
    vue.component("xqbutton", button)
}

if( typeof window !=="undefined" && window.Vue ){
    install(window.Vue)
}
export default {
    install
}