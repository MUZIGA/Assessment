
//QN1
async function mergeAuthorCommentData() {

    const authorRes = await fetch('https://api.example.com/authors');
    if (!authorRes.ok) throw new Error('Failed to fetch authors');
    const authors = await authorRes.json(); 

     const structuredData = await Promise.all(
      authors.map(async (author) => {

        const articlesWithComments = await Promise.all(
          author.articleIds.map(async (articleId) => {
            const commentRes = await fetch(`https://api.example.com/articles/${articleId}/comments`);
            if (!commentRes.ok) throw new Error(`Failed to fetch comments for article ${articleId}`);
            const comments = await commentRes.json();

            return {
articleId,
              comments,  
            };
          })
        );
        return {
          id: author.id,
          name: author.name,
          articles: articlesWithComments,
        };
      })
    );

    console.log(structuredData);
    return structuredData;

  } catch (error) {
    console.error('Error merging author and comment data:', error);
  }


mergeAuthorCommentData();
      
//Qn2
async function getAvailableProducts() {
  try {
    // 1. Define the endpoints
    const endpoints = [
      "https://dummyjson.com/products/1", // Example endpoint
      "https://dummyjson.com/products/2",
      "https://dummyjson.com/products/3"
    ];
          


  
