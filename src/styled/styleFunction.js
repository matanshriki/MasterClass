import GS from './global-styles'

//Flexbox function
export function flexbox({ d = 'row', j = 'center', a = 'center' } = {}) {
    return `
        display:flex;
        flex-direction:${d};
        justify-content:${j};
        align-items:${a};
    `
}
