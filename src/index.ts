import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";

import * as dotenv from "dotenv";

dotenv.config();


export const run = async () => {

  //Instantiante the OpenAI model 
  //Pass the "temperature" parameter which controls the RANDOMNESS of the model's output. A lower temperature will result in more predictable output, while a higher temperature will result in more random output. The temperature parameter is set between 0 and 1, with 0 being the most predictable and 1 being the most random
  const model = new OpenAI(
    { modelName:"gpt-4", temperature: 0.9 }, { organization: process.env.OPENAI_ORGANIZATION });

  const embeddings = new OpenAIEmbeddings({
    // modelName:"gpt-4",
    maxConcurrency: 5,
    timeout: 10000,
  }, { organization: process.env.OPENAI_ORGANIZATION });


  const documentRes = await embeddings.embedDocuments([
    "Hello world",
    "Bye bye",
  ]);
  
  console.log({ documentRes });

  const template = "What is a good name for a company that makes {product}?";
  const prompt = new PromptTemplate({
    template: template,
    inputVariables: ["product"],
  });

  const chain = new LLMChain({ llm: model, prompt: prompt });

  const res = await chain.call({ product: "colorful socks" });

  console.log({ res });
};

run();

