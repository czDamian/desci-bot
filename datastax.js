import { DataAPIClient } from "@datastax/astra-db-ts";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { PuppeteerWebBaseLoader } from "@langchain/community/document_loaders/web/puppeteer";

import dotenv from "dotenv";
dotenv.config();
const {
  GEMINI_API_KEY,
  ASTRA_DB_API_ENDPOINT,
  ASTRA_DB_APPLICATION_TOKEN,
  ASTRA_DB_NAMESPACE,
  ASTRA_DB_COLLECTION,
} = process.env;

// Initialize the client and model
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "text-embedding-004" });

if (!ASTRA_DB_API_ENDPOINT || !ASTRA_DB_APPLICATION_TOKEN) {
  throw new Error("Missing Astra DB connection details in .env");
}

const client = new DataAPIClient(ASTRA_DB_APPLICATION_TOKEN);
const db = client.db(ASTRA_DB_API_ENDPOINT, { namespace: ASTRA_DB_NAMESPACE });

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 512,
  chunkOverlap: 100,
});

const createCollection = async () => {
  const res = await db.createCollection(ASTRA_DB_COLLECTION, {
    vector: {
      dimension: 768,
      metric: "dot_product",
    },
  });
  console.log("Collection created:", res);
};
// createCollection();

(async () => {
  const colls = await db.listCollections();
  console.log("Connected to AstraDB:", colls);
})();

const desciLinks = [
  "https://www.bioacc.meme/",
  "https://www.descifoundation.org/",
  "https://www.descifoundation.org/blog",
  "https://desci.world/",
  "https://www.desci.com/",
  "https://www.desci.com/blog/the-rise-of-decentralized-science",
  "https://www.desci.com/blog/triple-victory-for-desci-labs-in-2024",
  "https://www.desci.com/blog/journal-of-world-philosophies-partners-with-desci-publish",
  "https://www.desci.com/blog/autonomous-research-communities-arcs",
  "https://www.desci.com/blog/10-commandments-to-improve-scientific-publishing",
  "https://github.com/DeSciWorldDAO/awesome-desci",
  "https://www.researchhub.com/",
  "https://www.vitadao.com/",
  "https://www.molecule.to/",
  "https://www.hairdao.xyz/",
  "https://www.opsci.io/",
  "https://x.com/DeSciWorld",
  "https://x.com/buzorDamian",
  "https://discord.gg/DeSciWorld",
  "https://www.frontiersin.org/journals/blockchain/articles/10.3389/fbloc.2019.00005/full",
  "https://core.telegram.org/api/entities",

];

const scrapePage = async (url) => {
  const loader = new PuppeteerWebBaseLoader(url, {
    launchOptions: {
      headless: true,
    },
    gotoOptions: {
      waitUntil: "domcontentloaded",
    },
    evaluate: async (page, browser) => {
      const res = await page.evaluate(() => document.body.innerHTML);
      browser.close;
      return res;
    },
  });
  return (await loader.scrape())?.replace(/<[^>]*>?/gm, "");
};

const loadSampleData = async () => {
  const collection = db.collection(ASTRA_DB_COLLECTION);
  for await (const url of desciLinks) {
    const content = await scrapePage(url);
    const chunks = await splitter.splitText(content);

    for await (const chunk of chunks) {
      const resultEmbedding = await model.embedContent(chunk);

      const data = resultEmbedding.embedding.values;
      console.log("data", data);
      const res = await collection.insertOne({
        $vector: data,
        text: chunk,
      });
      console.log("res", res);
    }
  }
};

loadSampleData();


// create the collection first and load the env variables, then call the loadsample function 
