import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.teal,
                secondary: '#B6B4B5',
                error: '#F44336',
                info: '#FF9800',
                success: '#8BC34A',       
              }
        },
    },
});
