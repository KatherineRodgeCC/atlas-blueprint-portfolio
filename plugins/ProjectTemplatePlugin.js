export class ProjectTemplatePlugin {
  constructor() {}

  apply(hooks) {
    hooks.addFilter('possibleTemplatesList', 'faust', (templates, data) => {
      if (data?.seedNode?.__typename === 'Project') {
        return Array.from(new Set(['project', ...templates]));
      }
      else if (data?.seedNode?.__typename === 'Location') {
        return Array.from(new Set(['location', ...templates]));
      }
      return templates;
    });
  }
}
