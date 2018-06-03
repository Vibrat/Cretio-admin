CKEDITOR.plugins.add( 'sliders', {
    icons: 'sliders',
    init: function( editor ) {
        editor.addCommand( 'insertSliders', {
            exec: function( editor ) {
                editor.insertHtml( ' <div class="container">\n' +
                    '          <h2 class="title">\n' +
                    '            <span>Hi, nice</span>\n' +
                    '            <span>to see</span>\n' +
                    '            <span>you here</span>\n' +
                    '          </h2>\n' +
                    '          <h2 class="title">\n' +
                    '            <span>This is</span>\n' +
                    '            <span>a long</span>\n' +
                    '            <span>sub title</span>\n' +
                    '          </h2>\n' +
                    '          <h2 class="title">\n' +
                    '            <span>Wellcome</span>\n' +
                    '            <span>Pal</span>\n' +
                    '          </h2>\n' +
                    '        </div>' );
            }
        });
        editor.ui.addButton( 'sliders', {
            label: 'Insert Sliders',
            command: 'insertSliders',
            toolbar: 'insert'
        });
    }
});