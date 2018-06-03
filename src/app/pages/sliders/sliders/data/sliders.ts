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
            title: 'ID', type: 'number',
        },
        name: {
            title: 'Name', type: 'string',
        },
        order: {
            title: 'Order', type: 'string',
        },
        activation: {
            title: 'Activation', type: 'string',
        },
    },
};

export const Entry = {
    title: 'Sliders Mainpage',
};

export const Source = [{
    id: 1,
    name: 'Mark',
    order: 'Otto',
    activation: '@mdo',
}, {
    id: 2,
    name: 'Mark',
    order: 'Otto',
    activation: '@mdo',
}, {
    id: 3,
    name: 'Mark',
    order: 'Otto',
    activation: '@mdo',
}, {
    id: 4,
    name: 'Mark',
    order: 'Otto',
    activation: '@mdo',
}];