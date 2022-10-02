export function configureRoutes(routes = [], options = {}) {
  const { parentPath } = options;
  return routes.map(configure);
  function configure(route) {
    const Element = route.element;
    const element =
      Element.$$typeof === Symbol.for("react.element") ? Element : <Element />;
    const configured = { ...route, element };
    if (configured.path) {
      configured.path = configured.path.replace(
        new RegExp(parentPath),
        ""
      );
    }
    if (route.children?.length) {
      return { ...configured, children: route.children.map(configure) };
    }
    return configured;
  }
}