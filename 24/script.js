(function(){
    // add classes
    var selectors = {
        'ussr-theme-helper-background-color': [
            '.primary-nav-item > a',
            '.ontraport_panes_action .ussr-icon-24',
            '.chrome-action-bar-title',
            //button icons in the action drawer
            '.ussr-chrome-panel-action-drawer .ussr-chrome-panel-action-drawer-button .ussr-icon'
            
        ]
    },
    addClass = function( selectors ){
         $.each( selectors, function(c, s){
            $(s.join(',')).addClass(c)
            console.log(c)
        })
    }
    
    
    $.route.delegate('pane','change', function(){
        addClass(selectors)
    })
    $.route.delegate('action','change', function(){
        addClass(selectors)
    })
    
    addClass(selectors)
})();