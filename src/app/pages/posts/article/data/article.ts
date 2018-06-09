export const ckEditorConfig = {
    height: '300',
    toolbarGroups: [
        { name: 'paragraph', groups: ['align', 'indent', 'list',  'blocks', 'paragraph' ] },
        { name: 'basicstyles', groups: [ 'imageExplorer','basicstyles' ] },
        { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
        { name: 'links', groups:  [ 'links' ] },
        { name: 'insert', groups: [ 'insert' ] },
        { name: 'others', groups: [ 'others' ] },
        { name: 'styles', groups: [ 'styles' ] },
        { name: 'colors', groups: [ 'colors' ] },
    ],
    extraPlugins: 'divarea,button,balloontoolbar,balloonpanel,ajax,xml',
    removePlugins: 'filebrowser',
    removeButtons: 'Source,Save,Templates,Find,Replace,Scayt,SelectAll,Anchor,Unlink,Font,Smiley,HorizontalRule,Flash,Strike,Blockquote,Outdent,Indent,SpecialChar,PageBreak',
};



