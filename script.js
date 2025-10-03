

async function mergeAuthorCommentData() {

    const authorRes = await fetch('https://api.example.com/authors');
    if (!authorRes.ok) throw new Error('Failed to fetch authors');
    const authors = await authorRes.json(); 
    
     onst structuredData = await Promise.all(
      authors.map(async (author) => {

      }

}
  
