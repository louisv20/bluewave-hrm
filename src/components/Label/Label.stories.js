import Label from './Label';

//Storybook display settings
export default {
    title: 'Visuals/Label',
    component: Label,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

//Stories for each Label type
export const Orange = {
    args: {
        mode: 'orange',
        label: 'Label'
    }
};

export const Gray = {
    args: {
        mode: 'gray',
        label: 'Label'
    }
};

export const Brand = {
    args: {
        mode: 'brand',
        label: 'Label'
    }
};

export const Success = {
    args: {
        mode: 'success',
        label: 'Label'
    }
};

export const New = {
    args: {
        mode: 'new',
        label: 'New'
    }
};

export const Waiting = {
    args: {
        mode: 'waiting',
        label: 'Waiting'
    }
};

export const Seen = {
    args: {
        mode: 'seen',
        label: 'Seen'
    }
};