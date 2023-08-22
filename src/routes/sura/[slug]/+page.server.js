export async function load({ params }) {
  let sura
  let id = params.slug
  try {
    // Use the import() function to dynamically load the module
    const dynamicModule = await import(`../../../data/suras/${id}.json`);
    sura = dynamicModule.default; // Assuming your data is the default export
  } catch (error) {
    console.error(error);
  }
  return { id, sura }
}