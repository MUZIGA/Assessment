

async function mergeAuthorCommentData() {

    const authorRes = await fetch('https://api.example.com/authors');
    if (!authorRes.ok) throw new Error('Failed to fetch authors');
    const authors = await authorRes.json(); 

     onst structuredData = await Promise.all(
      authors.map(async (author) => {

        const articlesWithComments = await Promise.all(
          author.articleIds.map(async (articleId) => {
            const commentRes = await fetch(`https://api.example.com/articles/${articleId}/comments`);
            if (!commentRes.ok) throw new Error(`Failed to fetch comments for article ${articleId}`);
            const comments = await commentRes.json();

            return {

      }

}
  
