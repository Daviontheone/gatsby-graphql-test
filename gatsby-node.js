exports.onCreateNode = async ({
  node,
  loadNodeContent,
  actions: { createNode },
  createNodeId,
  createContentDigest,
}) => {
  if (node.name === "residential-landing") {

    try {
      const nodeContent = await loadNodeContent(node);
      const pages = JSON.parse(nodeContent);
  
      console.log('resi-landing', pages);
  
      // pages.sections.forEach((todo) => {
        const childId = createNodeId(`${node.id}${pages.id}`);
        const pagesNode = {
          ...pages,
          id: childId,
          directusId: pages.id,
          sourceInstanceName: node.name,
          children: [],
          parent: node.id,
          internal: {
            type: "sectionResiLanding",
            contentDigest: createContentDigest(pages),
            description: "Landing Section from Directus",
          },
        };
        createNode(pagesNode);
      // });
    } catch (error) {
      console.error(error);
    }
  }

  if (node.name === "residential-nbn") {

    try {
      const nodeContent = await loadNodeContent(node);
      const pages = JSON.parse(nodeContent);
  
      console.log('resi-nbn', pages);
  
      // pages.sections.forEach((todo) => {
        const childId = createNodeId(`${node.id}${pages.id}`);
        const pagesNode = {
          ...pages,
          id: childId,
          directusId: pages.id,
          sourceInstanceName: node.name,
          children: [],
          parent: node.id,
          internal: {
            type: "sectionResibbn",
            contentDigest: createContentDigest(pages),
            description: "NBN Section from Directus",
          },
        };
        createNode(pagesNode);
      // });
    } catch (error) {
      console.error(error);
    }
  }

};