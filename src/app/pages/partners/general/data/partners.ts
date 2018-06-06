export interface SourceData {
    id: string;
    name: string;
    image: string;
    url: string;
}

export const Settings = {
    mode: 'external',
    add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
        confirmCreate: true,
    }, edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
        confirmSave: true,
    },
    delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
    },
    columns: {
        id: {
            title: 'ID', type: 'string'
        },
        name: {
            title: 'Title', type: 'string',
        },
        image: {
            title: 'Image', type: 'html',
        },
        url: {
            title: 'Activation', type: 'string',
        },
    },
};