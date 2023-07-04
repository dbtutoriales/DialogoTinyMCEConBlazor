export function initEditor(configuration) { 

    var defaultOpts = tinymce.defaultOptions; 

    defaultOpts.selector = configuration.selector;
    defaultOpts.base_url = "./_content/EditorPersonalizadoComponente/js/tinymce";
    defaultOpts.suffix = ".min";
    defaultOpts.toolbar = configuration.toolbar;

    var extPlugCnt = Object.keys(configuration.external_plugins).length;

    if (extPlugCnt > 0) {
        var plugins = {};

        for (let property in configuration.external_plugins) {
            plugins[property] = configuration.external_plugins[property];
        }

        defaultOpts.external_plugins = plugins;
    }

    tinymce.init(defaultOpts);
}