import { ProjectTemplatePlugin } from './plugins/ProjectTemplatePlugin';
import { LocationTemplatePlugin } from './plugins/LocationTemplatePlugin';
import { RelayStylePaginationPlugin } from './plugins/RelayStylePaginationPlugin';
import { setConfig } from '@faustwp/core';
import possibleTypes from './possibleTypes.json';
import templates from './wp-templates';

/**
 * @type {import('@faustwp/core').FaustConfig}
 **/
export default setConfig({
  experimentalPlugins: [
    new ProjectTemplatePlugin(),
    new LocationTemplatePlugin(),
    new RelayStylePaginationPlugin(),
  ],
  possibleTypes,
  templates,
});
