tinymce.PluginManager.add('editorDialogo', (editor, url) => {
    const openDialog = () => editor.windowManager.openUrl({
        title: 'Dialogo personalizado',
        url: '/editor-dialog',
        width: 700,
        height: 250
    });

    editor.ui.registry.addButton('editorDialogo', {
        icon: 'sharpen',
        tooltip: "Este boton abre un componente de Blazor dentro de una ventana de dialogo de TinyMCE",
        onAction: () => {
            openDialog();
        }
    });
    
    return {
        getMetadata: () => ({
            name: 'Ventana de dialogo personalizada',
            url: 'https://ejemplo.ej'
        })
    };
});