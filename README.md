# [SEO](https://www.robotstxt.org/faq.html)

## Robots

A robot is a program that automatically traverses the Web's hypertext structure by retrieving a document, and retrieving all documents that are referenced.

Normal Web browsers are not robots, because they are operated by a human, and don't automatically retrieve referenced documents (other than inline images).

## Search Engine

A search engine is a program that searches through some dataset. In the context of the Web, the word "search engine" is most often used for search forms that search through databases of HTML documents gathered by a robot.

## What indexing robots do we know?

They're all names for the same sort of thing, with slightly different connotations:

"Spiders", "Crawlers", "WEB Crawlers" and etc.

## How does a robot decide where to visit?

This depends on the robot, each one uses different strategies. In general they start from a historical list of URLs, especially of documents with many links elsewhere, such as server lists, "What's New" pages, and the most popular sites on the Web.

Most indexing services also allow you to submit URLs manually, which will then be queued and visited by the robot.

## How does an indexing robot decide what to index?

If an indexing robot knows about a document, it may decide to parse it, and insert it into its database. How this is done depends on the robot: Some robots index the HTML Titles, or the first few paragraphs, or parse the entire HTML and index all words, with weightings depending on HTML constructs, etc. Some parse the META tag, or other special hidden tags.

## robots.txt

- Placed in the root dir/path
- [Directives](https://moz.com/learn/seo/robotstxt)
- Not all bots respect all directives. (e.g. **Crawl-delay** vs **Crawl-rate**)

## [Sitemaps](https://www.sitemaps.org/faq.html)

It is strongly recommended that you place your Sitemap at the root directory of your HTML server; that is, place it at http://example.com/sitemap.xml

- submitting it to them via the search engine's submission interface
- specifying the location in your site's robots.txt file
- pinging
