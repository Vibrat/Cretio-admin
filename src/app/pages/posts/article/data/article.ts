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
    extraPlugins: 'divarea,easyimage,filetools,imagebase,cloudservices,dialog,button,balloontoolbar,balloonpanel,ajax,xml',
    removePlugins: 'filebrowser',
    cloudServices_tokenUrl: 'https://hilapy-be.herokuapp.com/users/token?token=immortal_token',
    cloudServices_uploadUrl: 'https://hilapy-be.herokuapp.com/files/images?token=' + window.localStorage.getItem('auth_app_token'),
    removeButtons: 'Source,Save,Templates,Find,Replace,Scayt,SelectAll,Anchor,Unlink,Font,Smiley,HorizontalRule,Flash,Strike,Blockquote,Outdent,Indent,SpecialChar,PageBreak',
};



