require.config({
    paths : {
        // "jquery" : ["http://libs.baidu.com/jquery/1.11.1/jquery","jquery.min"],
        // "dropotron" : ["jquery.dropotron.min"],
        // "scrollgress": ["jquery.scrollgress.min"],
        "skel" : ["skel.min"],
        "skel-layers" : ["skel-layers.min"]
        // "init" : ["init"]
    }
})

require(["skel","skel-layers"],function($, _){
    $(function(){   
        _.each([1,2],alert);
    })
})
