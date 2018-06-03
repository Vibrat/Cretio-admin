export const ckEditorConfig = {
    toolbarGroups: [
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
        { name: 'document', groups: [ 'Source', 'NewPage', 'Preview', 'Templates' ] },
        { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
        { name: 'links', groups:  [ 'links' ] },
        { name: 'insert', groups: [ 'insert' ] },
        { name: 'others', groups: [ 'others' ] },
        { name: 'paragraph', groups: ['align', 'indent', 'list',  'blocks',  'bidi', 'paragraph' ] },
        { name: 'styles', groups: [ 'styles' ] },
        { name: 'colors', groups: [ 'colors' ] },
    ],
    removeButtons: 'Source,Save,Templates,Find,Replace,Scayt,SelectAll',
    extraPlugins: 'sliders',
    contentsCss: '/assets/bundles/ckeditor/plugins/sliders/css/styleEditor.css',
};


