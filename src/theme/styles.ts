import { mode } from '@chakra-ui/theme-tools';

export const styles = {
    global: (props) => ({
        body: {
            color: mode('colors.brand.space_cadet', 'colors.brand.ghost_white')(props),
            bg: mode('colors.brand.ghost_white', 'colors.brand.space_cadet')(props),
            lineHeight: 'base',
        },
        li: {
            listStylePosition: 'outside',
            marginLeft: '18px',
            marginBottom: '4px',
        },
    }),
};
