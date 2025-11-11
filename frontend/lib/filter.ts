type Section = {
  __component: string;
  title: string;
  description: string;
  image: { url: string };
};

export function filterByComponent(sections: Section[], componentName: string) {
  return sections.filter((item) => item.__component === componentName);
}
