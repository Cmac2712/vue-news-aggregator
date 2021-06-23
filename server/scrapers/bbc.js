const cheerio = require('cheerio');
const axios = require('axios');
let items = [];
const { v4: uuidv4 } = require('uuid');
const source = 'BBC';
const filterLinks = [ // Links to filter out
  'https://www.bbc.co.uk/programmes/articles/4g8c0mkNmM190Zl00VdXTTb/bbc-news-daily-email'
]

// Then loop through links to get data
const getData = (response, link) => {
  let $ = cheerio.load(response.data);
  const title = $('title').text();
  const thumbnail = $('meta[property="og:image"]').attr('content');
  const content = [$('.article__body').html(), $('.article-content').html(), $('.text--prose p').html()].filter(item => item !== null)[0];

  return {
    id: uuidv4(),
    title,
    thumbnail,
    content,
    source,
    link
  }
} 

// Return an array of Promises that our main index.js will resolve when ready
module.exports = {
  scraper: async () => {
    const url = "https://bbc.com/news"

    // Loop through homepage and get links
    return await axios.get(url)
        .then( async response => {
          const $ = cheerio.load(response.data);
          const articleLinks = [];

          // Get array of links to articles
          $('a[href]').each((i, link) => {
              const articleLink = $(link).attr('href');
              const matched = /\/(article|story)+/.test(articleLink); 
              const filtered = filterLinks.includes(articleLink.toString()); 

              if (!filtered && matched) {
                articleLinks.push(articleLink);
              }

          });

          return articleLinks.map(link => {
            return axios.get(link).then(response => getData(response, link))
          })

        })
        .catch( e => console.log(e) );

  } 
}